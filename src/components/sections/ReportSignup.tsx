"use client";

import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";

/**
 * Lead-capture form for a gated report download. No backend yet: on submit it
 * emails the lead to the team (mailto) and starts the PDF download client-side.
 * TODO(before launch): wire to a CRM / email service (HubSpot, Resend) via a route handler.
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
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Report download — ${reportTitle}`);
    const body = encodeURIComponent(
      `New report download:\n\nName: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nOrganization: ${form.org}\nReport: ${reportTitle}`
    );
    // Notify the team of the lead.
    window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`, "_blank");
    // Deliver the asset.
    const a = document.createElement("a");
    a.href = pdfHref;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setDone(true);
  };

  const field =
    "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  if (done) {
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
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-cloud bg-white p-7 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.3)] lg:p-9"
    >
      <p className="font-display text-xl font-semibold text-navy-950">Get the full report — free</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-ink">
        Tell us where to send it and the PDF is yours instantly.
      </p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Full name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
          <input required type="email" placeholder="Work email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input placeholder="Role / title" value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })} className={field} />
          <input placeholder="School / district" value={form.org}
            onChange={(e) => setForm({ ...form, org: e.target.value })} className={field} />
        </div>
        <button
          type="submit"
          className={`mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-semibold transition ${
            accent === "gold"
              ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
              : "bg-teal-500 text-navy-950 hover:bg-teal-400"
          }`}
        >
          <Download className="size-5" strokeWidth={2} />
          Download the report
        </button>
        <p className="text-center text-xs text-slate-ink">
          No spam. We&apos;ll only email about staffing insights you can use.
        </p>
      </div>
    </form>
  );
}
