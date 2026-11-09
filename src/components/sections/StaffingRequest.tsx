"use client";
import { useState } from "react";
import { edu } from "@/lib/content";
import {
  BookAfterSubmit,
  EmailInstead,
  FormError,
  Honeypot,
  NoScriptMail,
  Turnstile,
} from "@/components/forms/FormParts";
import { gtag } from "@/lib/gtag";
import { isUnreachable, mailHref, newSubmissionId, submitSiteForm } from "@/lib/siteForm";
import { heardFromAnswer, heardFromChoice, sourceLines } from "@/lib/leadSource";
import { HeardFrom } from "@/components/forms/HeardFrom";

/**
 * The staffing request. It files the opening with our team (the CRM) and then
 * shows the calendar in its place, prefilled, so the next step is a booked
 * Google Meet rather than a wait for a reply. If the CRM or the security check
 * is out of reach, the visitor's email app opens with the whole request instead.
 */
export function StaffingRequest() {
  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [id, setId] = useState(newSubmissionId);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [who, setWho] = useState({ name: "", email: "" });
  const [checkFailed, setCheckFailed] = useState(false);
  const [mail, setMail] = useState({ href: "", opened: false });
  const field =
    "mt-2 w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 focus:outline-2 focus:outline-teal-700";

  function emailOf(f: FormData) {
    return mailHref(
      edu.contact.email,
      edu.brand.name + " staffing request",
      [
        "Name: " + f.get("name"),
        "Email: " + f.get("email"),
        "Phone: " + f.get("phone"),
        "Organization: " + f.get("organization"),
        "Role: " + f.get("role"),
        "Location: " + f.get("location"),
        "Schedule and requirements: " + f.get("notes"),
        "",
        ...sourceLines(heardFromAnswer(f)),
      ].join("\n"),
    );
  }

  // The fallback: the request leaves as an email the visitor sends.
  function sendByEmail(f: FormData) {
    const href = emailOf(f);
    gtag("event", "staffing_request_sent", {
      method: "email",
      heard_from: heardFromChoice(f) || "not answered",
    });
    setMail({ href, opened: true });
    window.location.href = href;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setError("");
    const f = new FormData(e.currentTarget);
    if (!token) {
      if (checkFailed) {
        sendByEmail(f);
        return;
      }
      setError("Please wait a moment for the security check to finish, then send again.");
      setMail({ href: emailOf(f), opened: false });
      return;
    }
    setMail({ href: "", opened: false });
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    setState("sending");
    try {
      await submitSiteForm(id, {
        form: "staffing",
        name,
        email,
        phone: get("phone"),
        organization: get("organization"),
        role: get("role"),
        detail: get("location") ? "Location: " + get("location") : "",
        message: [
          "Role to fill: " + get("role"),
          "City and state: " + get("location"),
          get("notes") ? "Schedule and requirements: " + get("notes") : "",
        ]
          .filter(Boolean)
          .join("\n"),
        website: hp,
        "cf-turnstile-response": token,
      }, heardFromAnswer(f));
      // No typed values go to GA4 (they can identify the sender); heard_from is
      // only the option picked, never the "Other" text.
      gtag("event", "staffing_request_sent", {
        method: "form",
        heard_from: heardFromChoice(f) || "not answered",
      });
      setWho({ name, email });
      setState("sent");
    } catch (err) {
      setError((err as Error).message);
      if (isUnreachable(err)) sendByEmail(f);
      else setMail({ href: emailOf(f), opened: false });
      setState("idle");
      setId(newSubmissionId());
      setResetKey((k) => k + 1);
    }
  }

  if (state === "sent") {
    return (
      <BookAfterSubmit
        name={who.name}
        email={who.email}
        lead="Your request is with our staffing team."
      />
    );
  }

  return (
    <form
      onSubmit={submit}
      className="relative rounded-2xl border border-cloud bg-white p-6 sm:p-8"
    >
      <Honeypot value={hp} onChange={setHp} />
      <h2 className="text-2xl font-semibold text-navy-950">
        Start with the opening.
      </h2>
      <p className="mt-3 text-slate-ink">
        Send the role to our staffing team, then pick a time for a 30-minute
        Google Meet to go over it.
      </p>
      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-medium text-navy-950">
            Your name
            <input name="name" autoComplete="name" maxLength={180} required className={field} />
          </label>
          <label className="font-medium text-navy-950">
            Work email
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={250}
              required
              className={field}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-medium text-navy-950">
            School or organization
            <input
              name="organization"
              autoComplete="organization"
              maxLength={160}
              required
              className={field}
            />
          </label>
          <label className="font-medium text-navy-950">
            Phone{" "}
            <span className="text-sm font-normal text-slate-ink">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-medium text-navy-950">
            Role to fill
            <input name="role" maxLength={160} required className={field} />
          </label>
          <label className="font-medium text-navy-950">
            City and state
            <input
              name="location"
              autoComplete="address-level2"
              maxLength={120}
              required
              className={field}
            />
          </label>
        </div>
        <label className="font-medium text-navy-950">
          Schedule and requirements{" "}
          <span className="text-sm font-normal text-slate-ink">(optional)</span>
          <textarea name="notes" rows={4} maxLength={1200} className={field} />
        </label>
        <HeardFrom field={field} labelled />
        <Turnstile onToken={setToken} onFail={setCheckFailed} resetKey={resetKey} />
        {error && <FormError message={error} />}
        {mail.href && <EmailInstead href={mail.href} opened={mail.opened} />}
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-h-12 rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-950 hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 disabled:opacity-60"
        >
          {state === "sending"
            ? "Sending…"
            : checkFailed
              ? "Open email request"
              : "Send request and pick a time"}
        </button>
      </div>
      <NoScriptMail subject={edu.brand.name + " staffing request"} />
    </form>
  );
}
