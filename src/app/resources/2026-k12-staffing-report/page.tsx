import type { Metadata } from "next";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ReportSignup } from "@/components/sections/ReportSignup";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/2026-k12-staffing-report" },
  title: "The 2026 State of K-12 Staffing — Report",
  description:
    "A 2026 research report on where K-12 staffing actually stands: the real, cited numbers behind the teacher, substitute, paraprofessional, and mental-health gaps — and what districts can do. Free download from FocusedEDU.",
};

const PDF = "/reports/focusededu-2026-k12-staffing-report.pdf";

const keyFindings = [
  { stat: "74%", label: "of public schools struggled to hire fully certified teachers for 2024-25", src: "NCES" },
  { stat: "1 in 8", label: "teaching positions nationwide are unfilled or held by an uncertified teacher", src: "Learning Policy Institute" },
  { stat: "~$190B", label: "in federal ESSER relief — about half of it funding staff — has now expired", src: "CBPP" },
  { stat: "372:1", label: "students per school counselor, far above the recommended 250:1", src: "ASCA" },
];

const inside = [
  { n: "01", t: "The shortage is the norm — and it's a supply problem", d: "Why 74% of schools still can't fill roles, and what's really driving it." },
  { n: "02", t: "Where it's worst: special education, ESL, math & science", d: "The shortage is concentrated in the hardest-to-staff specialties." },
  { n: "03", t: "Turnover is the engine — and what it costs", d: "Attrition drives ~90% of hiring demand at up to ~$25K per teacher replaced." },
  { n: "04", t: "The ESSER funding cliff meets the shortage", d: "A paradoxical labor market: short-staffed and shedding jobs at once." },
  { n: "05", t: "The student mental-health staffing gap", d: "Counselor, psychologist, and social-worker ratios against the standards." },
  { n: "06", t: "The substitute & paraprofessional squeeze", d: "How the support layer buckles — and feeds teacher burnout." },
  { n: "07", t: "What works: a flexible, exclusive staffing model", d: "Practical strategies districts are using to break the cycle." },
];

const odyssey = [
  { v: "120+", l: "roles filled across the school" },
  { v: "95%", l: "day-to-day substitute fill rate" },
  { v: "+40%", l: "improvement over the previous provider" },
  { v: "13+", l: "distinct role types staffed" },
];

const sources = ["NCES / IES", "Learning Policy Institute", "CBPP", "ASCA", "NASP", "Edunomics Lab"];

export default function K12ReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[44rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="light">2026 Research Report</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
                The shortage didn&apos;t end. The money that hid it did.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Where K-12 staffing actually stands in 2026 — the real, cited numbers behind the
                teacher, substitute, paraprofessional, and mental-health gaps, and what districts
                can do about them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <a
                  href="#get"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400"
                >
                  Get the report — free
                  <ArrowRight className="size-5" strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Report cover */}
          <Reveal delay={0.16}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-teal-500" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">FocusedEDU · 2026</p>
                <p className="mt-10 font-display text-3xl font-bold leading-tight text-white">
                  The State of<br />K-12 Staffing
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  The real numbers behind the shortage — and the path through it.
                </p>
                <div className="absolute inset-x-8 bottom-8">
                  <div className="h-px w-full bg-white/10" />
                  <p className="mt-4 text-xs font-medium text-white/40">Research report · 7 sections</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key findings */}
      <section className="bg-white py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>What the data shows</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-navy-950 sm:text-4xl">
              Four numbers that define 2026.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyFindings.map((k, i) => (
              <Reveal key={k.stat} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-cloud bg-mist p-7">
                  <span className="font-display text-5xl font-bold tracking-tight text-teal-600">{k.stat}</span>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-900">{k.label}</p>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-ink">
                    Source: {k.src}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative highlight */}
      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-4xl text-balance text-center font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-[2.4rem]">
              Districts still can&apos;t find enough teachers — yet the relief money that funded
              their counselors and aides just expired. <span className="text-teal-400">The 2026 market is short-staffed and shedding jobs at the same time.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's inside"
            title="Seven sections, one clear picture."
            intro="Every figure is cited to a primary source — NCES, the Learning Policy Institute, CBPP, ASCA, and more."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-2">
            {inside.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.06} className="h-full">
                <div className="flex h-full gap-5 bg-white p-7 lg:p-8">
                  <span className="font-display text-2xl font-bold text-teal-500/40">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-ink">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof: Odyssey case study */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Proof, not theory</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
                  How one school filled 120+ roles — when its agencies couldn&apos;t.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-lg leading-relaxed text-slate-ink">
                  Odyssey Public Charter School in Wilmington, DE faced persistent vacancies and a
                  shrinking local talent pool. With a dedicated, exclusive FocusedEDU pipeline, the
                  results landed fast — and they&apos;re in the report.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <figure className="mt-8 border-l-2 border-teal-500 pl-5">
                  <Quote className="size-7 text-teal-500" strokeWidth={1.5} aria-hidden />
                  <blockquote className="mt-3 text-lg leading-relaxed text-navy-900">
                    The difference wasn&apos;t just speed — it was the quality of every person who
                    walked through the door.
                  </blockquote>
                </figure>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-5">
                {odyssey.map((o) => (
                  <div key={o.l} className="rounded-2xl border border-cloud bg-white p-7">
                    <div className="font-display text-4xl font-bold tracking-tight text-teal-600">{o.v}</div>
                    <p className="mt-3 text-sm leading-snug text-navy-900">{o.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Get the report */}
      <section id="get" className="scroll-mt-24 bg-white py-24 lg:py-32">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Free download</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
              Get the full 2026 report.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-ink">
              The complete report — all seven sections, every cited figure, and the Odyssey case
              study — delivered as a PDF.
            </p>
            <ul className="mt-8 space-y-3">
              {["Cited, primary-source data throughout", "A real district case study with results", "Practical takeaways for your team"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-navy-900">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                    <Check className="size-3.5 text-teal-600" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-cloud bg-mist p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                Built on data from
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {sources.map((s) => (
                  <span key={s} className="rounded-full border border-cloud bg-white px-3.5 py-1.5 text-sm font-medium text-navy-900">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ReportSignup
            reportTitle="The 2026 State of K-12 Staffing"
            pdfHref={PDF}
            recipientEmail="hello@focused-staffing.com"
          />
        </div>
      </section>
    </>
  );
}
