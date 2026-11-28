"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "@/components/AppLink";
import { ChevronDown, HeartHandshake, UserPlus, UserRound, CheckCircle2 } from "lucide-react";
import { edu } from "@/lib/content";
import { Honeypot, Turnstile } from "@/components/forms/FormParts";
import {
  codeFrom,
  ROLES,
  STATES,
  submitReferral,
  type ReferralMode,
} from "@/lib/referral";

type Fields = { name: string; email: string; phone: string; role: string; state: string; note: string };
const EMPTY: Fields = { name: "", email: "", phone: "", role: "", state: "", note: "" };
const digits = (p: string) => p.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

const field =
  "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-base text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";
const labelCls = "mb-1.5 block text-sm font-medium text-navy-950";

function Select({
  id,
  value,
  onChange,
  placeholder,
  options,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: [string, string][];
}) {
  return (
    <span className="relative block">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${field} cursor-pointer appearance-none pr-11 [&>option]:text-navy-950 ${value ? "" : "text-slate-ink/60!"}`}
      >
        <option value="">{placeholder}</option>
        {options.map(([v, label]) => (
          <option key={v} value={v}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-ink"
        strokeWidth={2}
      />
    </span>
  );
}

export function ReferForm() {
  // The code is read in the browser: the page is static, and `r` only lives in the link.
  // Read without an effect: the server render has no link (null), the browser reads its own.
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => null,
  );
  const link = useMemo(() => (search === null ? null : codeFrom(search)), [search]);
  const [chosen, setMode] = useState<ReferralMode>("friend");
  const [friend, setFriend] = useState<Fields>(EMPTY);
  const [self, setSelf] = useState<Fields>(EMPTY);
  const [referrer, setReferrer] = useState("");
  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [checkFailed, setCheckFailed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [sentName, setSentName] = useState("");
  const done = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent") done.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [status]);

  const hasCode = link?.state === "ok";
  // Without a code there is nobody to credit, so the page is a plain application.
  const mode: ReferralMode = link && !hasCode ? "self" : chosen;
  const f = mode === "friend" ? friend : self;
  const set = (patch: Partial<Fields>) =>
    mode === "friend" ? setFriend({ ...friend, ...patch }) : setSelf({ ...self, ...patch });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setError("");
    const name = f.name.trim();
    const email = f.email.trim();
    const phone = f.phone.trim();
    if (!email && !phone) {
      setError(mode === "friend" ? "Add your friend’s phone number or email." : "Add your phone number or email.");
      return;
    }
    if (phone && digits(phone).length !== 10) {
      setError("Use a 10-digit US phone number.");
      return;
    }
    if (!token) {
      setError(
        checkFailed
          ? "Our security check could not load on this network."
          : "Please wait a moment for the security check below to finish, then send again.",
      );
      return;
    }
    setStatus("sending");
    try {
      await submitReferral({
        code: hasCode ? link!.code : "",
        mode,
        friend_name: name,
        friend_email: email,
        friend_phone: phone,
        role: f.role,
        state: f.state,
        note: mode === "self" ? f.note.trim() : "",
        referrer_name: mode === "friend" ? referrer.trim() : "",
        website: hp,
        "cf-turnstile-response": token,
      });
      setSentName(name);
      setStatus("sent");
    } catch (err) {
      setError((err as Error).message);
      setStatus("idle");
      setResetKey((k) => k + 1);
    }
  };

  const again = () => {
    setFriend(EMPTY);
    setSelf(EMPTY);
    setError("");
    setStatus("idle");
    setResetKey((k) => k + 1);
  };

  if (status === "sent") {
    return (
      <div
        ref={done}
        role="status"
        className="scroll-mt-28 rounded-2xl border border-cloud bg-white p-6 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.25)] sm:p-8"
      >
        <CheckCircle2 className="size-8 text-teal-600" strokeWidth={1.8} />
        {mode === "friend" ? (
          <>
            <h2 className="mt-4 text-2xl font-semibold text-navy-950">
              Thank you. We&apos;ll reach out to {sentName.split(" ")[0] || "your friend"} soon.
            </h2>
            <p className="mt-3 leading-relaxed text-slate-ink">
              A recruiter will contact them in the next business day or two
              {referrer.trim() ? " and let them know you sent them" : ""}. If
              someone you refer is placed with us and works their first weeks,
              we&apos;ll thank you.
            </p>
            <button
              type="button"
              onClick={again}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-navy-950 px-6 font-semibold text-white transition hover:bg-navy-900"
            >
              Refer someone else
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-4 text-2xl font-semibold text-navy-950">
              Thanks, {sentName.split(" ")[0] || "and welcome"}. We have your details.
            </h2>
            <p className="mt-3 leading-relaxed text-slate-ink">
              A recruiter will call or email you in the next business day or two
              to talk about school roles near you.
            </p>
            <Link
              href="/jobs"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-navy-950 px-6 font-semibold text-white transition hover:bg-navy-900"
            >
              See current openings
            </Link>
          </>
        )}
      </div>
    );
  }

  const friendMode = mode === "friend";
  const tab = (m: ReferralMode, label: string, Icon: typeof UserPlus) => (
    <button
      type="button"
      role="tab"
      aria-selected={mode === m}
      aria-controls="refer-panel"
      onClick={() => {
        setMode(m);
        setError("");
      }}
      className={`flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold transition sm:text-base ${
        mode === m ? "bg-navy-950 text-white shadow-sm" : "text-navy-800 hover:bg-white/70"
      }`}
    >
      <Icon className="size-4 shrink-0" strokeWidth={2} />
      {label}
    </button>
  );

  return (
    <div className="rounded-2xl border border-cloud bg-white p-5 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.25)] sm:p-8">
      {link && !hasCode ? (
        <p className="rounded-xl bg-mist px-4 py-3 text-sm leading-relaxed text-navy-900">
          {link.state === "malformed"
            ? "The referral code in this link looks incomplete, so this page works as a regular application. "
            : "This link doesn’t include a referral code, so this page works as a regular application. "}
          If someone sent you here, put their name in the note.
        </p>
      ) : (
        <div role="tablist" aria-label="Who is filling this in?" className="flex gap-1 rounded-full bg-mist p-1">
          {tab("friend", "Refer a friend", UserPlus)}
          {tab("self", "I was referred", UserRound)}
        </div>
      )}

      <form id="refer-panel" role={hasCode ? "tabpanel" : undefined} onSubmit={onSubmit} className="relative mt-6">
        <Honeypot value={hp} onChange={setHp} />
        <p className="text-sm leading-relaxed text-slate-ink">
          {friendMode
            ? "Add your friend’s details. A phone number or email is enough. We’ll reach out and tell them about school roles near them."
            : "Tell us a little about you and a recruiter will reach out about school roles near you."}
        </p>
        <div className="mt-5 grid gap-4">
          <div>
            <label htmlFor="r-name" className={labelCls}>
              {friendMode ? "Your friend’s name" : "Your name"}
            </label>
            <input
              id="r-name"
              required
              maxLength={180}
              autoComplete={friendMode ? "off" : "name"}
              value={f.name}
              onChange={(e) => set({ name: e.target.value })}
              className={field}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="r-phone" className={labelCls}>
                {friendMode ? "Their mobile number" : "Mobile number"}
              </label>
              <input
                id="r-phone"
                type="tel"
                inputMode="tel"
                maxLength={40}
                autoComplete={friendMode ? "off" : "tel"}
                placeholder="(555) 555-5555"
                value={f.phone}
                onChange={(e) => set({ phone: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="r-email" className={labelCls}>
                {friendMode ? "Their email" : "Email"}
              </label>
              <input
                id="r-email"
                type="email"
                inputMode="email"
                maxLength={250}
                autoComplete={friendMode ? "off" : "email"}
                value={f.email}
                onChange={(e) => set({ email: e.target.value })}
                className={field}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="r-role" className={labelCls}>
                {friendMode ? "Role that fits them" : "Role you want"}
              </label>
              <Select id="r-role" value={f.role} onChange={(v) => set({ role: v })} placeholder="Choose a role" options={ROLES.map((r) => [r, r])} />
            </div>
            <div>
              <label htmlFor="r-state" className={labelCls}>
                State
              </label>
              <Select id="r-state" value={f.state} onChange={(v) => set({ state: v })} placeholder="Choose a state" options={STATES} />
            </div>
          </div>
          {friendMode ? (
            <div>
              <label htmlFor="r-referrer" className={labelCls}>
                Your name <span className="font-normal text-slate-ink">(optional, so we can say you sent them)</span>
              </label>
              <input
                id="r-referrer"
                maxLength={180}
                autoComplete="name"
                value={referrer}
                onChange={(e) => setReferrer(e.target.value)}
                className={field}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="r-note" className={labelCls}>
                Anything we should know? <span className="font-normal text-slate-ink">(optional)</span>
              </label>
              <textarea
                id="r-note"
                rows={3}
                maxLength={2000}
                placeholder={hasCode ? "Days you’re free, grades you like, who sent you…" : "Days you’re free, grades you like, who sent you here…"}
                value={f.note}
                onChange={(e) => set({ note: e.target.value })}
                className={field}
              />
            </div>
          )}
          <Turnstile onToken={setToken} onFail={setCheckFailed} resetKey={resetKey} />
          {checkFailed && (
            <p role="status" className="text-sm leading-relaxed text-slate-ink">
              Our security check could not load on this network. Call us at{" "}
              <a href={edu.contact.phoneHref} className="font-semibold text-teal-700 underline">
                {edu.contact.phone}
              </a>{" "}
              and we&apos;ll take it by phone.
            </p>
          )}
          {error && (
            <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">
              {error} You can also call us at{" "}
              <a href={edu.contact.phoneHref} className="font-semibold underline">
                {edu.contact.phone}
              </a>
              .
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400 disabled:opacity-60"
          >
            <HeartHandshake className="size-5" strokeWidth={2} />
            {status === "sending" ? "Sending…" : friendMode ? "Send my referral" : "Send my details"}
          </button>
          <noscript>
            <p className="text-sm text-slate-ink">
              This form needs JavaScript. Call us at {edu.contact.phone}.
            </p>
          </noscript>
        </div>
      </form>
    </div>
  );
}
