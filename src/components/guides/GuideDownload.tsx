"use client";

import { useState } from "react";
import { Check, Download } from "lucide-react";
import { BookAfterSubmit, FormError, Honeypot, Turnstile } from "@/components/forms/FormParts";
import { newSubmissionId, submitSiteForm } from "@/lib/siteForm";
import type { GuideDownload as Spec } from "@/lib/guides/types";

/**
 * The guide's printable file. The guide itself is open to read; this is the
 * version a team works from. The lead is filed with our team, the download
 * starts, and the calendar takes the form's place.
 */
export function GuideDownload({ spec, orgLabel }: { spec: Spec; orgLabel: string }) {
  const [form, setForm] = useState({ name: "", email: "", role: "", org: "" });
  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [id, setId] = useState(newSubmissionId);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const startDownload = () => {
    const a = document.createElement("a");
    a.href = spec.pdf;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    setError("");
    if (!token) {
      setError("Please wait a moment for the security check to finish, then try again.");
      return;
    }
    setState("sending");
    try {
      await submitSiteForm(id, {
        form: "report",
        name: form.name,
        email: form.email,
        role: form.role,
        organization: form.org,
        detail: spec.title,
        website: hp,
        "cf-turnstile-response": token,
      });
      try {
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "guide_download", { guide: spec.title });
      } catch {
        /* analytics is never worth an error */
      }
      startDownload();
      setState("sent");
    } catch (err) {
      setError((err as Error).message);
      setState("idle");
      setId(newSubmissionId());
      setResetKey((k) => k + 1);
    }
  };

  const field =
    "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  return (
    <section id="download" className="scroll-mt-28 bg-mist py-16 lg:py-24">
      <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Free download</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-950 lg:text-4xl">
            {spec.heading}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-ink">{spec.sub}</p>
          <ul className="mt-7 space-y-3">
            {spec.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-navy-900">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                  <Check className="size-3.5 text-teal-600" strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {state === "sent" ? (
          <BookAfterSubmit
            name={form.name}
            email={form.email}
            lead={
              <>
                Your download is starting.{" "}
                <a href={spec.pdf} download className="underline">
                  Download it again
                </a>
                . Want to talk through it for your team?
              </>
            }
          />
        ) : (
          <form
            onSubmit={onSubmit}
            className="relative rounded-2xl border border-cloud bg-white p-7 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.3)] lg:p-9"
          >
            <Honeypot value={hp} onChange={setHp} />
            <p className="font-display text-xl font-semibold text-navy-950">{spec.button}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-ink">
              Tell us who you are and the PDF is yours right away.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required aria-label="Full name" placeholder="Full name" autoComplete="name" maxLength={180} value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                <input required type="email" aria-label="Work email" placeholder="Work email" autoComplete="email" maxLength={250} value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input aria-label="Your title" placeholder="Your title" maxLength={250} value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })} className={field} />
                <input aria-label={orgLabel} placeholder={orgLabel} autoComplete="organization" maxLength={250} value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })} className={field} />
              </div>
              <Turnstile onToken={setToken} onFail={() => {}} resetKey={resetKey} />
              {error && (
                <>
                  <FormError message={error} />
                  <p className="text-sm text-slate-ink">
                    It is still yours:{" "}
                    <a href={spec.pdf} download className="font-semibold text-teal-700 underline">
                      download the PDF
                    </a>
                    .
                  </p>
                </>
              )}
              <button
                type="submit"
                disabled={state === "sending"}
                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400 disabled:opacity-60"
              >
                <Download className="size-5" strokeWidth={2} />
                {state === "sending" ? "Preparing…" : "Download the PDF"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
