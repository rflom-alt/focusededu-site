"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BookAfterSubmit, FormError, Honeypot, Turnstile } from "@/components/forms/FormParts";
import { newSubmissionId, submitSiteForm } from "@/lib/siteForm";
import { calculators } from "@/components/guides/calculators";
import { money, type CalcRole } from "@/components/guides/calc-types";

const defaults = (role: CalcRole) =>
  Object.fromEntries(role.fields.map((f) => [f.key, String(f.def)])) as Record<string, string>;

const num = (s: string) => {
  const n = Number(String(s).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

const event = (name: string, params: Record<string, unknown>) => {
  try {
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", name, params);
  } catch {
    /* analytics is never worth an error */
  }
};

/**
 * The reader's own numbers, added up in front of them. Nothing is sent anywhere
 * until they ask for the rate range; then the sum goes to our team with their
 * name on it and the calendar takes the form's place.
 */
export function GuideCalculator({ id }: { id: string }) {
  const calc = calculators[id];
  const [roleKey, setRoleKey] = useState(calc.roles[0].key);
  const [values, setValues] = useState<Record<string, Record<string, string>>>(() =>
    Object.fromEntries(calc.roles.map((r) => [r.key, defaults(r)])),
  );
  const [asking, setAsking] = useState(false);
  const [used, setUsed] = useState(false);

  const role = calc.roles.find((r) => r.key === roleKey) ?? calc.roles[0];
  const v = values[role.key];
  const numbers = useMemo(
    () => Object.fromEntries(role.fields.map((f) => [f.key, num(v[f.key])])),
    [role, v],
  );
  const result = useMemo(() => role.compute(numbers), [role, numbers]);
  const weeks = numbers.weeksOpen ?? 0;

  const set = (key: string, raw: string) => {
    if (!used) {
      setUsed(true);
      event("calculator_used", { calculator: calc.id, role: role.key });
    }
    setValues((all) => ({ ...all, [role.key]: { ...all[role.key], [key]: raw.replace(/[^0-9.]/g, "") } }));
  };

  return (
    <div
      id="calculator"
      className="scroll-mt-28 overflow-clip rounded-3xl border border-cloud bg-white shadow-[0_40px_80px_-50px_rgba(6,10,31,0.35)]"
    >
      <div className="border-b border-cloud bg-mist px-6 py-6 sm:px-9 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Calculator</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">{calc.heading}</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-slate-ink">{calc.intro}</p>
        {calc.roles.length > 1 && (
          <div role="tablist" aria-label="Role" className="mt-5 flex flex-wrap gap-2">
            {calc.roles.map((r) => {
              const on = r.key === role.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setRoleKey(r.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    on
                      ? "border-navy-950 bg-navy-950 text-white"
                      : "border-cloud bg-white text-navy-900 hover:border-teal-600"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* On a phone the result is below the inputs, so the running total rides along at the top. */}
      <div className="sticky top-[4.5rem] z-10 flex items-baseline justify-between gap-4 bg-navy-950 px-6 py-3 text-white lg:hidden">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-300">{role.totalLabel ?? calc.totalLabel}</span>
        <span className="font-display text-2xl font-semibold tabular-nums">{money(result.total)}</span>
      </div>
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="grid content-start gap-x-6 gap-y-5 px-6 py-7 sm:grid-cols-2 sm:px-9 sm:py-8">
          {role.fields.map((f) => (
            <label key={role.key + f.key} className={`flex flex-col ${f.wide ? "sm:col-span-2" : ""}`}>
              <span className={`flex items-end text-[0.95rem] font-semibold leading-snug text-navy-950 ${f.wide ? "" : "sm:min-h-[2.6rem]"}`}>{f.label}</span>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex h-12 w-full max-w-[9.5rem] items-center rounded-xl border border-cloud bg-white px-3.5 transition focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/30">
                  {f.prefix && <span className="mr-1 text-slate-ink">{f.prefix}</span>}
                  <input
                    inputMode="decimal"
                    value={v[f.key]}
                    onChange={(e) => set(f.key, e.target.value)}
                    aria-label={f.label}
                    className="w-full min-w-0 bg-transparent text-lg font-semibold text-navy-950 outline-none"
                  />
                </span>
                {f.suffix && <span className="whitespace-nowrap text-sm text-slate-ink">{f.suffix}</span>}
              </span>
              {(f.help || f.source) && (
                <span className="mt-1.5 block text-sm leading-snug text-slate-ink">
                  {f.help}
                  {f.source && (
                    <>
                      {f.help ? " " : ""}
                      <a
                        href={f.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 underline underline-offset-2"
                      >
                        Source: {f.source.name}
                      </a>
                    </>
                  )}
                </span>
              )}
            </label>
          ))}
        </div>

        <div className="bg-navy-950 text-white">
          <div className="px-6 py-7 sm:px-9 sm:py-8 lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
            {role.totalLabel ?? calc.totalLabel}
            {weeks > 0 ? ` over ${weeks} ${weeks === 1 ? "week" : "weeks"}` : ""}
          </p>
          <p aria-live="polite" className="mt-2 font-display text-5xl font-semibold leading-none sm:text-6xl">
            {money(result.total)}
          </p>
          <p className="mt-3 text-white/75">
            {money(result.perWeek)} {role.perWeekLabel ?? calc.perWeekLabel}
          </p>
          <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {result.lines.map((l) => (
              <div key={l.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.95rem] text-white/80">
                  {l.label}
                  {l.note && <span className="block text-xs text-white/50">{l.note}</span>}
                </dt>
                <dd className="shrink-0 font-semibold tabular-nums">{money(l.value)}</dd>
              </div>
            ))}
          </dl>
          {result.facts && result.facts.length > 0 && (
            <ul className="mt-5 space-y-2 text-[0.95rem] text-white/80">
              {result.facts.map((f) => (
                <li key={f.label}>
                  <span className="font-semibold text-white">{f.value}</span> {f.label}
                </li>
              ))}
            </ul>
          )}
          {!asking && (
            <button
              type="button"
              onClick={() => {
                setAsking(true);
                event("calculator_ask_opened", { calculator: calc.id, role: role.key });
              }}
              className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              {calc.ask.button}
              <ArrowRight className="size-5" strokeWidth={2} />
            </button>
          )}
          </div>
        </div>
      </div>

      {asking && (
        <CalculatorAsk
          calcId={calc.id}
          calcName={calc.name}
          ask={calc.ask}
          roleLabel={role.label}
          weeks={weeks}
          total={result.total}
          summary={[
            `${calc.name}: ${role.label}`,
            ...role.fields.map((f) => `${f.label}: ${f.prefix ?? ""}${v[f.key] || "0"}${f.suffix ? " " + f.suffix : ""}`),
            ...result.lines.map((l) => `${l.label}: ${money(l.value)}`),
            ...(result.facts ?? []).map((f) => `${f.value} ${f.label}`),
            `Per week: ${money(result.perWeek)}`,
            `Total while open: ${money(result.total)}`,
          ].join("\n")}
        />
      )}
    </div>
  );
}

function CalculatorAsk({
  calcId,
  calcName,
  ask,
  roleLabel,
  weeks,
  total,
  summary,
}: {
  calcId: string;
  calcName: string;
  ask: { heading: string; body: string; button: string; orgLabel: string };
  roleLabel: string;
  weeks: number;
  total: number;
  summary: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", org: "", title: "", where: "" });
  const [hp, setHp] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [id, setId] = useState(newSubmissionId);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

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
        form: "staffing",
        name: form.name,
        email: form.email,
        organization: form.org,
        role: roleLabel,
        detail: `Rate range request from the ${calcName.toLowerCase()}: ${roleLabel}, open ${weeks} weeks, ${money(total)}${form.where ? ". Location: " + form.where : ""}`,
        message: [
          "Asked for the rate range for this role after using the calculator.",
          form.title ? "Their title: " + form.title : "",
          form.where ? "City and state: " + form.where : "",
          "",
          summary,
        ]
          .filter((l, i) => l || i === 3)
          .join("\n"),
        website: hp,
        "cf-turnstile-response": token,
      });
      event("calculator_rate_request", { calculator: calcId, role: roleLabel });
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

  if (state === "sent") {
    return (
      <div className="border-t border-cloud bg-mist px-4 py-6 sm:px-9 sm:py-8">
        <BookAfterSubmit
          name={form.name}
          email={form.email}
          lead={<>Your numbers are with our team. Want the rate range on a call instead of by email?</>}
        />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative border-t border-cloud bg-mist px-6 py-7 sm:px-9 sm:py-8">
      <Honeypot value={hp} onChange={setHp} />
      <p className="font-display text-xl font-semibold text-navy-950 sm:text-2xl">{ask.heading}</p>
      <p className="mt-2 max-w-2xl leading-relaxed text-slate-ink">{ask.body}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required aria-label="Full name" placeholder="Full name" autoComplete="name" maxLength={180} value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
        <input required type="email" aria-label="Work email" placeholder="Work email" autoComplete="email" maxLength={250} value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
        <input required aria-label={ask.orgLabel} placeholder={ask.orgLabel} autoComplete="organization" maxLength={250} value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })} className={field} />
        <input aria-label="Your title" placeholder="Your title" autoComplete="organization-title" maxLength={120} value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} className={field} />
        <input required aria-label="City and state" placeholder="City and state" maxLength={120} value={form.where}
          onChange={(e) => setForm({ ...form, where: e.target.value })} className={field + " sm:col-span-2"} />
      </div>
      <div className="mt-4">
        <Turnstile onToken={setToken} onFail={() => {}} resetKey={resetKey} />
      </div>
      {error && (
        <div className="mt-4">
          <FormError message={error} />
        </div>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send my numbers"}
        <ArrowRight className="size-5" strokeWidth={2} />
      </button>
      <p className="mt-3 text-sm text-slate-ink">
        {roleLabel}, open {weeks} {weeks === 1 ? "week" : "weeks"}, {money(total)}. That is what we receive, with your name.
      </p>
    </form>
  );
}
