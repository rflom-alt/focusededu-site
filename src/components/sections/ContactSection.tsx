"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "@/components/ui/SocialIcons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteContent } from "@/lib/content";
import {
  BookAfterSubmit,
  EmailInstead,
  FormError,
  Honeypot,
  NoScriptMail,
  Turnstile,
} from "@/components/forms/FormParts";
import { isUnreachable, mailHref, newSubmissionId, submitSiteForm } from "@/lib/siteForm";
import { heardFromAnswer, sourceLines } from "@/lib/leadSource";
import { HeardFrom } from "@/components/forms/HeardFrom";

export function ContactSection({
  contact,
  social,
  id = "connect",
}: {
  contact: SiteContent["contact"];
  social: SiteContent["social"];
  id?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [submissionId, setSubmissionId] = useState(newSubmissionId);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [checkFailed, setCheckFailed] = useState(false);
  const [mail, setMail] = useState({ href: "", opened: false });

  // The email path: the fallback when the CRM or the security check is out of reach.
  const emailOf = (f: FormData) =>
    mailHref(
      contact.email,
      `Website inquiry — ${form.name || "FocusedEDU"}`,
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}\n\n${sourceLines(heardFromAnswer(f)).join("\n")}`,
    );
  const sendByEmail = (f: FormData) => {
    const href = emailOf(f);
    setMail({ href, opened: true });
    window.location.href = href;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (state === "sending") return;
    setError("");
    if (!token) {
      if (checkFailed) {
        sendByEmail(f);
        return;
      }
      setError("Please wait a moment for the security check below to finish, then send again.");
      setMail({ href: emailOf(f), opened: false });
      return;
    }
    setMail({ href: "", opened: false });
    setState("sending");
    try {
      await submitSiteForm(
        submissionId,
        {
          form: "contact",
          name: form.name,
          email: form.email,
          organization: form.org,
          message: form.message,
          website: hp,
          "cf-turnstile-response": token,
        },
        heardFromAnswer(f),
      );
      setState("sent");
    } catch (err) {
      setError((err as Error).message);
      if (isUnreachable(err)) sendByEmail(f);
      else setMail({ href: emailOf(f), opened: false });
      setState("idle");
      setSubmissionId(newSubmissionId());
      setResetKey((k) => k + 1);
    }
  };

  const field =
    "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  const socials = [
    { href: social.facebook, Icon: Facebook, label: "Facebook" },
    { href: social.instagram, Icon: Instagram, label: "Instagram" },
    { href: social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id={id} className="bg-mist py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div>
          <Eyebrow>Connect with us</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
            Let&apos;s talk about your team.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-ink">
            Tell us about your staffing challenge, then pick a time for a
            30-minute Google Meet with our team. We reply to every message
            within 48 hours.
          </p>

          <ul className="mt-9 space-y-4 text-navy-900">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 hover:text-teal-700"
              >
                <Phone className="size-5 text-teal-600" strokeWidth={1.7} />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-teal-700"
              >
                <Mail className="size-5 text-teal-600" strokeWidth={1.7} />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-teal-600"
                strokeWidth={1.7}
              />
              <span>{contact.address}</span>
            </li>
          </ul>

          <a
            href="/book-a-call"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            <Calendar className="size-4 text-teal-400" strokeWidth={2} />
            Schedule a call
          </a>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-cloud text-navy-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                <Icon className="size-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Form — on success the calendar takes its place */}
        {state === "sent" ? (
          <BookAfterSubmit
            name={form.name}
            email={form.email}
            lead="Thanks — your message is with our team."
          />
        ) : (
        <form
          onSubmit={onSubmit}
          className="relative rounded-2xl border border-cloud bg-white p-7 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.25)] lg:p-9"
        >
          <Honeypot value={hp} onChange={setHp} />
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                aria-label="Full name"
                placeholder="Full name"
                autoComplete="name"
                maxLength={180}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                aria-label="Work email"
                placeholder="Work email"
                autoComplete="email"
                maxLength={250}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <input
              aria-label="School / organization"
              placeholder="School / organization"
              autoComplete="organization"
              maxLength={250}
              value={form.org}
              onChange={(e) => setForm({ ...form, org: e.target.value })}
              className={field}
            />
            <textarea
              required
              rows={5}
              aria-label="How can we help?"
              placeholder="How can we help?"
              maxLength={4000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field}
            />
            <HeardFrom field={field} />
            <Turnstile onToken={setToken} onFail={setCheckFailed} resetKey={resetKey} />
            {error && <FormError message={error} />}
            {mail.href && <EmailInstead href={mail.href} opened={mail.opened} />}
            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400 disabled:opacity-60"
            >
              {state === "sending"
                ? "Sending…"
                : checkFailed
                  ? "Open email message"
                  : "Send and pick a time"}
            </button>
            <p className="text-center text-xs text-slate-ink">
              {checkFailed
                ? "Review and send the message in your email app. We'll respond within 48 hours."
                : "Next, you'll choose a time for a 30-minute Google Meet."}
            </p>
            <NoScriptMail subject="Website inquiry" />
          </div>
        </form>
        )}
      </div>
    </section>
  );
}
