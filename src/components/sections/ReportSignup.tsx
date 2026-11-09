"use client";

import { useState } from "react";
import { CheckCircle2, Download } from "lucide-react";
import {
  BookAfterSubmit,
  EmailInstead,
  FormError,
  Honeypot,
  NoScriptMail,
  Turnstile,
} from "@/components/forms/FormParts";
import { isUnreachable, mailHref, newSubmissionId, submitSiteForm } from "@/lib/siteForm";
import { sourceLines } from "@/lib/leadSource";

/**
 * Gated report download. The lead is filed with our team (the CRM), the PDF
 * download starts, and the calendar takes the form's place so a reader can book
 * a call while the report is in front of them. If the CRM or the security check
 * is out of reach the lead goes by email instead, and the PDF still downloads.
 */
export function ReportSignup({
  reportTitle,
  pdfHref,
  recipientEmail,
  accent = "teal",
}: {
  reportTitle: string;
  pdfHref: string;
  recipientEmail: string;
  accent?: "teal" | "gold";
}) {
  const [form, setForm] = useState({ name: "", email: "", role: "", org: "" });
  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [id, setId] = useState(newSubmissionId);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "emailed">("idle");
  const [error, setError] = useState("");
  const [checkFailed, setCheckFailed] = useState(false);
  const [mail, setMail] = useState({ href: "", opened: false });

  const startDownload = () => {
    const a = document.createElement("a");
    a.href = pdfHref;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // The email path: the team gets the lead by email and the reader still gets the PDF.
  const emailHref = () =>
    mailHref(
      recipientEmail,
      `Report download — ${reportTitle}`,
      `New report download:\n\nName: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nOrganization: ${form.org}\nReport: ${reportTitle}\n\n${sourceLines().join("\n")}`,
    );
  const sendByEmail = () => {
    const href = emailHref();
    setMail({ href, opened: true });
    window.location.href = href;
    startDownload();
    setState("emailed");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    setError("");
    if (!token) {
      if (checkFailed) {
        sendByEmail();
        return;
      }
      setError("Please wait a moment for the security check to finish, then try again.");
      setMail({ href: emailHref(), opened: false });
      return;
    }
    setMail({ href: "", opened: false });
    setState("sending");
    try {
      await submitSiteForm(id, {
        form: "report",
        name: form.name,
        email: form.email,
        role: form.role,
        organization: form.org,
        detail: reportTitle,
        website: hp,
        "cf-turnstile-response": token,
      });
      startDownload();
      setState("sent");
    } catch (err) {
      setError((err as Error).message);
      if (isUnreachable(err)) {
        sendByEmail();
        return;
      }
      setMail({ href: emailHref(), opened: false });
      setState("idle");
      setId(newSubmissionId());
      setResetKey((k) => k + 1);
    }
  };

  const field =
    "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  if (state === "sent") {
    return (
      <BookAfterSubmit
        name={form.name}
        email={form.email}
        lead={
          <>
            Your download is starting.{" "}
            <a href={pdfHref} download className="underline">
              Download it again
            </a>
            . Want to talk through what it means for your team?
          </>
        }
      />
    );
  }

  if (state === "emailed") {
    return (
      <div className="rounded-2xl border border-cloud bg-white p-8 text-center shadow-[0_30px_60px_-40px_rgba(6,10,31,0.3)] lg:p-10">
        <CheckCircle2 className="mx-auto size-12 text-teal-600" strokeWidth={1.6} />
        <h3 className="mt-4 text-2xl font-semibold text-navy-950">Your download is starting.</h3>
        <p className="mt-3 leading-relaxed text-slate-ink">
          If it doesn&apos;t begin automatically,{" "}
          <a href={pdfHref} download className="font-semibold text-teal-700 hover:underline">
            click here to download the report
          </a>
          . Thanks for reading — we&apos;ll be in touch.
        </p>
        <div className="mt-3">
          <EmailInstead href={mail.href} opened />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-2xl border border-cloud bg-white p-7 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.3)] lg:p-9"
    >
      <Honeypot value={hp} onChange={setHp} />
      <p className="font-display text-xl font-semibold text-navy-950">Get the full report — free</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-ink">
        Tell us who you are and the PDF is yours instantly.
      </p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required aria-label="Full name" placeholder="Full name" autoComplete="name" maxLength={180} value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
          <input required type="email" aria-label="Work email" placeholder="Work email" autoComplete="email" maxLength={250} value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input aria-label="Role / title" placeholder="Role / title" maxLength={250} value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })} className={field} />
          <input aria-label="School / district" placeholder="School / district" autoComplete="organization" maxLength={250} value={form.org}
            onChange={(e) => setForm({ ...form, org: e.target.value })} className={field} />
        </div>
        <Turnstile onToken={setToken} onFail={setCheckFailed} resetKey={resetKey} />
        {error && (
          <>
            <FormError message={error} />
            <p className="text-sm text-slate-ink">
              The report is still yours:{" "}
              <a href={pdfHref} download className="font-semibold text-teal-700 underline">
                download the PDF
              </a>
              .
            </p>
          </>
        )}
        {mail.href && <EmailInstead href={mail.href} opened={mail.opened} />}
        <button
          type="submit"
          disabled={state === "sending"}
          className={`mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-semibold transition disabled:opacity-60 ${
            accent === "gold"
              ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
              : "bg-teal-500 text-navy-950 hover:bg-teal-400"
          }`}
        >
          <Download className="size-5" strokeWidth={2} />
          {state === "sending" ? "Preparing…" : "Download the report"}
        </button>
        <p className="text-center text-xs text-slate-ink">
          No spam. We&apos;ll only email about staffing insights you can use.
        </p>
        <NoScriptMail subject={`Report request — ${reportTitle}`} />
      </div>
    </form>
  );
}
