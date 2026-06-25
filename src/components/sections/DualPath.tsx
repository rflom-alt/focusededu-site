import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ClipReveal } from "@/components/motion/ClipReveal";

const paths = [
  {
    label: "For Schools & Districts",
    photo: "/photography/schools-teaching.jpg",
    alt: "A teacher leading a lesson at the board in a bright classroom",
    title: "Build the team your students deserve.",
    body: "A dedicated, exclusive talent pipeline — vetted, credentialed, and ready when you are.",
    points: [
      "One client per region — never shared",
      "Credentialing in half the time",
      "Temp-to-perm at no cost",
    ],
    cta: { label: "Book a discovery call", href: "/book-a-call" },
  },
  {
    label: "For Educators",
    photo: "/photography/educators-support.jpg",
    alt: "A teacher supporting a student at her desk",
    title: "Find a role you'll love.",
    body: "Work with vetted schools across the U.S. — on your schedule, with pay and support that respect you.",
    points: [
      "Flexible schedules, your choice of schools",
      "Weekly pay via direct deposit",
      "Premium perks & a team in your corner",
    ],
    cta: { label: "View open roles", href: "/candidates" },
  },
];

export function DualPath() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Two ways we focus"
          title="Whether you're hiring or job-hunting, you're in the right place."
          intro="One partner, two missions — building stronger schools and stronger careers."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cloud bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_40px_80px_-50px_rgba(6,10,31,0.4)]">
                <ClipReveal>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                      {p.label}
                    </span>
                  </div>
                </ClipReveal>
                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <h3 className="text-2xl font-semibold text-navy-950">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-ink">{p.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-navy-900">
                        <Check className="mt-0.5 size-4 shrink-0 text-teal-600" strokeWidth={2.4} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 pt-1">
                    <Button href={p.cta.href} variant="primary" size="md">
                      {p.cta.label}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
