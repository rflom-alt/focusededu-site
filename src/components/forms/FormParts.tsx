"use client";

import { useEffect, useRef, useState } from "react";
import Link from "@/components/AppLink";
import { CalendarCheck } from "lucide-react";
import { edu } from "@/lib/content";
import { TURNSTILE_SITE_KEY } from "@/lib/siteForm";
import { CrmBooking } from "@/components/sections/CrmBooking";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;
function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("Turnstile did not load"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Cloudflare Turnstile (managed). Most visitors never see a challenge; the token
 * arrives through onToken. Changing `resetKey` asks for a fresh token (each token
 * is single-use, so after a failed post the form needs a new one). `onFail` says
 * the check cannot run here (a school network that blocks Cloudflare, an error
 * from the widget), so the form can offer the email path instead of waiting.
 */
export function Turnstile({
  onToken,
  onFail,
  resetKey = 0,
}: {
  onToken: (token: string) => void;
  onFail: (failed: boolean) => void;
  resetKey?: number;
}) {
  const el = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [failed, setFailed] = useState(false);
  const cb = useRef(onToken);
  const failCb = useRef(onFail);
  useEffect(() => {
    cb.current = onToken;
    failCb.current = onFail;
  }, [onToken, onFail]);

  useEffect(() => {
    let cancelled = false;
    const fail = () => {
      cb.current("");
      setFailed(true);
      failCb.current(true);
    };
    loadTurnstile()
      .then(() => {
        if (cancelled || !el.current || !window.turnstile || widget.current) return;
        widget.current = window.turnstile.render(el.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
          callback: (t: string) => {
            setFailed(false);
            failCb.current(false);
            cb.current(t);
          },
          "expired-callback": () => cb.current(""),
          "error-callback": () => {
            fail();
            return true;
          },
        });
      })
      .catch(fail);
    return () => {
      cancelled = true;
      if (widget.current && window.turnstile) window.turnstile.remove(widget.current);
      widget.current = null;
    };
  }, []);

  useEffect(() => {
    if (resetKey && widget.current && window.turnstile) {
      cb.current("");
      window.turnstile.reset(widget.current);
    }
  }, [resetKey]);

  return <div ref={el} className={failed ? "hidden" : "min-h-[65px]"} data-testid="turnstile" />;
}

/** A field no person sees or fills. Bots that fill every input mark themselves. */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
      <label>
        Website
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

/** The school calendar's booking page, prefilled with what the form just collected. */
function schedulerUrl(name: string, email: string) {
  const u = new URL(edu.contact.scheduler);
  if (name) u.searchParams.set("name", name);
  if (email) u.searchParams.set("email", email);
  return u.toString();
}

/** Shown in place of the form the moment it is sent: the calendar, prefilled. */
export function BookAfterSubmit({
  name,
  email,
  lead,
}: {
  name: string;
  email: string;
  lead: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div
      ref={ref}
      role="status"
      className="scroll-mt-28 rounded-2xl border border-cloud bg-white p-5 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.25)] sm:p-7"
    >
      <div className="flex items-start gap-3">
        <CalendarCheck className="mt-1 size-6 shrink-0 text-teal-600" strokeWidth={1.8} />
        <div>
          <p className="text-sm font-medium text-teal-700">{lead}</p>
          <h3 className="mt-1 text-xl font-semibold text-navy-950 sm:text-2xl">
            Pick a time — you&apos;ll get a Google Calendar invite with a Google
            Meet link.
          </h3>
        </div>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-cloud">
        <CrmBooking url={schedulerUrl(name, email)} />
      </div>
      <p className="mt-4 text-sm text-slate-ink">
        Calendar not loading?{" "}
        <a
          href={schedulerUrl(name, email)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal-700 underline"
        >
          Open the scheduler directly
        </a>{" "}
        or call{" "}
        <a href={edu.contact.phoneHref} className="font-semibold text-teal-700 underline">
          {edu.contact.phone}
        </a>
        .
      </p>
    </div>
  );
}

/** The error line: what happened, and two ways to reach us anyway. */
export function FormError({ message }: { message: string }) {
  return (
    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">
      {message} Call{" "}
      <a href={edu.contact.phoneHref} className="font-semibold underline">
        {edu.contact.phone}
      </a>{" "}
      or{" "}
      <Link href="/book-a-call" className="font-semibold underline">
        book a time on the calendar
      </Link>
      .
    </p>
  );
}

/**
 * The email path, the fallback whenever the CRM or the security check is out of
 * reach. `opened` means the page has already tried to open the visitor's email
 * app; the link is there either way, because a browser may refuse that attempt.
 */
export function EmailInstead({ href, opened }: { href: string; opened: boolean }) {
  return (
    <p role="status" className="text-sm leading-relaxed text-slate-ink">
      {opened &&
        "Your email app should open with this filled in. It is sent only when you press Send there. "}
      <a href={href} className="font-semibold text-teal-700 underline">
        {opened ? "Open the email again" : "Send this as an email instead"}
      </a>
      .
    </p>
  );
}

/** With JavaScript off the form cannot post; this keeps a plain way in. */
export function NoScriptMail({ subject }: { subject: string }) {
  return (
    <noscript>
      <p className="mt-4 text-sm text-slate-ink">
        This form needs JavaScript. Email{" "}
        <a
          href={`mailto:${edu.contact.email}?subject=${encodeURIComponent(subject)}`}
          className="font-semibold text-teal-700 underline"
        >
          {edu.contact.email}
        </a>{" "}
        or call {edu.contact.phone}.
      </p>
    </noscript>
  );
}
