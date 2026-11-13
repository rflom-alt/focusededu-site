import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type {
  ApprovalEmailVisual,
  OpeningVisual,
  PlatformVisual,
  PresentationVisual,
  RecordVisual,
} from "./types";

const FRAME =
  "overflow-hidden rounded-2xl border border-cloud bg-white shadow-[0_40px_80px_-40px_rgba(6,10,31,0.35)]";

/** Thin title strip so a drawn card reads as a document, not a marketing tile. */
function Strip({ label, right }: { label: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-cloud bg-mist px-6 py-3.5">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-ink">
        {label}
      </span>
      {right}
    </div>
  );
}

function Opening({ v }: { v: OpeningVisual }) {
  return (
    <div className={FRAME}>
      <Strip
        label="Opening"
        right={
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-800">
            <span className="size-1.5 rounded-full bg-teal-600" aria-hidden />
            {v.status}
          </span>
        }
      />
      <div className="p-6 sm:p-8">
        <p className="font-display text-xl font-semibold leading-snug text-navy-950 sm:text-2xl">
          {v.role}
        </p>
        <p className="mt-1 text-sm text-slate-ink">{v.client}</p>

        <dl className="mt-7 grid gap-px overflow-hidden rounded-xl border border-cloud bg-cloud sm:grid-cols-3">
          {[
            { k: "Recruiter", val: v.recruiter },
            { k: "Last recruiting activity", val: v.lastActivity },
            { k: "Days quiet", val: v.daysQuiet },
          ].map((d) => (
            <div key={d.k} className="bg-white p-4">
              <dt className="text-xs font-medium text-slate-ink">{d.k}</dt>
              <dd className="mt-1.5 text-sm font-semibold leading-snug text-navy-950">{d.val}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-slate-ink">
          History
        </p>
        <ol className="mt-3 space-y-3">
          {v.history.map((h) => (
            <li key={h.what} className="flex gap-4 text-sm">
              <span className="w-14 shrink-0 font-medium tabular-nums text-slate-ink">{h.when}</span>
              <span className="text-navy-950">{h.what}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Presentation({ v }: { v: PresentationVisual }) {
  return (
    <div className={FRAME}>
      <div className="border-b border-cloud bg-mist px-6 py-4 sm:px-8">
        <p className="text-xs font-medium text-slate-ink">Subject</p>
        <p className="mt-0.5 font-semibold text-navy-950">{v.subject}</p>
      </div>
      <div className="space-y-5 p-6 text-[0.95rem] leading-relaxed text-navy-950 sm:p-8">
        <p>{v.greeting}</p>
        <p>
          I&rsquo;m pleased to present <strong className="font-semibold">{v.candidate}</strong> for
          the <strong className="font-semibold">{v.position}</strong> position for your
          consideration.
        </p>
        <p className="rounded-xl border-l-2 border-teal-500 bg-mist px-5 py-4 text-slate-ink">
          {v.summary}
        </p>
        <div>
          <p className="font-semibold">Approved Documents &amp; Clearances</p>
          <ul className="mt-3 space-y-2.5">
            {v.documents.map((d) => (
              <li key={d.name} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                  <Check className="size-3 text-teal-700" strokeWidth={3} aria-hidden />
                </span>
                <span>
                  {d.name} <span className="text-slate-ink">- Approved on {d.approved}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Please let me know if you need any additional information or would like to schedule an
          interview.
        </p>
        <p className="text-slate-ink">
          Best regards,
          <br />
          <span className="text-navy-950">{v.recruiter}</span>
        </p>
      </div>
    </div>
  );
}

function ApprovalEmail({ v }: { v: ApprovalEmailVisual }) {
  return (
    <div className={FRAME}>
      <div className="border-b border-cloud bg-mist px-6 py-4 sm:px-8">
        <p className="font-semibold leading-snug text-navy-950">{v.subject}</p>
        <p className="mt-1 text-xs text-slate-ink">
          <span className="font-semibold text-navy-950">Focused Staffing Group</span> to me
        </p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-display text-2xl font-semibold text-navy-950">{v.heading}</p>
        <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-navy-950">
          <p>{v.greeting}</p>
          <p>
            {v.line.before}
            <strong className="font-semibold">{v.line.week}</strong>
            {v.line.between}
            <strong className="font-semibold">{v.line.client}</strong>
            {v.line.after}
          </p>
          <p>{v.instruction}</p>
        </div>
        {/* A picture of the email's button, not a control. */}
        <div className="mt-7 flex justify-center" aria-hidden>
          <span className="rounded-lg bg-navy-600 px-7 py-3 text-sm font-semibold text-white">
            {v.button}
          </span>
        </div>
        <p className="mt-7 text-xs leading-relaxed text-slate-ink">{v.note}</p>
      </div>
    </div>
  );
}

function ApprovalRecord({ v }: { v: RecordVisual }) {
  return (
    <div className={FRAME}>
      <Strip label="Timesheet approvals" right={<span className="text-xs text-slate-ink">{v.period}</span>} />
      <div className="p-6 sm:p-8">
        <p className="font-display text-xl font-semibold text-navy-950">{v.contractor}</p>
        <p className="mt-1 text-sm text-slate-ink">
          {v.role} · {v.client}
        </p>
        <p className="mt-5 rounded-xl bg-teal-500/10 px-4 py-3 text-sm font-medium leading-snug text-teal-800">
          {v.banner}
        </p>
        {/* Three columns from sm up; on a phone the approval line drops under its day. */}
        <div className="mt-5 text-sm">
          <div className="hidden grid-cols-[8.5rem_3.5rem_1fr] gap-x-4 border-b border-cloud pb-2 text-xs font-medium text-slate-ink sm:grid">
            <span>Date</span>
            <span>Hours</span>
            <span>Approval</span>
          </div>
          <ul>
            {v.rows.map((r) => (
              <li
                key={r.date}
                className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-cloud py-2.5 sm:grid-cols-[8.5rem_3.5rem_1fr]"
              >
                <span className="font-medium tabular-nums text-navy-950">{r.date}</span>
                <span className="tabular-nums text-navy-950">
                  {r.hours}
                  <span className="sm:hidden"> hours</span>
                </span>
                <span className="col-span-2 text-slate-ink sm:col-span-1">{r.approval}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm font-semibold text-navy-950">{v.total}</p>
      </div>
    </div>
  );
}

/** One product visual: a real screenshot, or a card drawn from sample data. */
export function Visual({
  visual,
  wide = false,
  className,
}: {
  visual: PlatformVisual;
  /** A full-width screen: on a phone the frame scrolls sideways so the text stays readable. */
  wide?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)}>
      {visual.kind === "image" && (
        <div className={cn(FRAME, wide && "overflow-x-auto")}>
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            sizes={wide ? "(min-width: 1280px) 75rem, 100vw" : "(min-width: 1024px) 40rem, 100vw"}
            className={cn("h-auto w-full", wide && "min-w-[44rem]")}
          />
        </div>
      )}
      {visual.kind === "opening" && <Opening v={visual} />}
      {visual.kind === "presentation" && <Presentation v={visual} />}
      {visual.kind === "approvalEmail" && <ApprovalEmail v={visual} />}
      {visual.kind === "record" && <ApprovalRecord v={visual} />}
      <figcaption className="mt-4 text-sm leading-relaxed text-slate-ink">{visual.caption}</figcaption>
    </figure>
  );
}
