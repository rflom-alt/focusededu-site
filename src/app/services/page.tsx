import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicePages, type ServicePage } from "@/lib/service-pages";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Education Staffing Services",
  description:
    "FocusedEDU staffing services for K-12 schools and districts — special education, paraprofessionals, related services, school-based behavioral health, plus statewide coverage across PA, NJ, and MD.",
  alternates: { canonical: "/services" },
};

function Card({ p }: { p: ServicePage }) {
  return (
    <Link
      href={`/${p.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-cloud bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)]"
    >
      <h3 className="text-lg font-semibold leading-snug text-navy-950">{p.h1}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-ink">{p.hero}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        Learn more
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

export default function ServicesIndexPage() {
  const byLocation = servicePages.filter((p) => p.eyebrow.includes("·"));
  const byService = servicePages.filter((p) => !p.eyebrow.includes("·"));

  return (
    <>
      <PageHero
        eyebrow="Staffing services"
        title="Education staffing, by role and region."
        subtitle="Dedicated, compliance-minded staffing for the hard-to-fill K-12 roles that keep classrooms running — and statewide coverage where you need it."
      >
        <Button href={edu.cta.primary.href} variant="primary" size="lg">
          Book a discovery call
        </Button>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">By service</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {byService.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Card p={p} />
              </Reveal>
            ))}
          </div>

          <h2 className="mt-20 text-2xl font-semibold text-navy-950 sm:text-3xl">By location</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {byLocation.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Card p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need staffing support for hard-to-fill roles?"
        body="Contact Focused Staffing Group to discuss your current and upcoming needs."
        primary={edu.cta.primary}
        secondary={edu.cta.secondary}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
