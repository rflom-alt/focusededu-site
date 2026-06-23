import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/lib/content";

export function HowItWorks({ steps }: { steps: SiteContent["steps"] }) {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="Clear, calm, and built around your calendar."
          intro="From the first open role to a signed offer, the process stays simple — so your team can stay focused on students."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-white p-9 lg:p-10">
                <span className="font-display text-5xl font-semibold text-teal-500/25">
                  {step.n}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-ink">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
