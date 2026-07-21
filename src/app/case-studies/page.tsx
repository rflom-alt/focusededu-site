import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "K-12 Staffing Case Studies & Results",
  description:
    "Real FocusedEDU partner outcomes — from staffing a whole school where incumbents failed, to filling 100% of certified special-education roles in two weeks.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real schools. Real results."
        subtitle="Proof, not promises — how FocusedEDU filled the roles other agencies couldn't, kept the educators who matter most, and changed how partner schools hire."
      >
        <Button href={edu.cta.primary.href} variant="primary" size="lg">
          Book a discovery call
        </Button>
      </PageHero>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cloud bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_40px_80px_-40px_rgba(6,10,31,0.22)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={c.photo}
                    alt={c.school}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                        {c.location}
                      </span>
                      <h2 className="mt-1 text-xl font-semibold leading-tight text-white">
                        {c.school}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-teal-500/90 px-3 py-1 text-2xl font-display font-semibold leading-none text-navy-950">
                      {c.stats[0].value}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {c.eyebrow.replace("Case study · ", "")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-navy-950">
                    {c.headline}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-ink">{c.subhead}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Read the case study
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's build your school's story."
        body="Book a 30-minute discovery call and see how a dedicated, exclusive talent pipeline changes the way your school hires."
        primary={edu.cta.primary}
        secondary={edu.cta.secondary}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
