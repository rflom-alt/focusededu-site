import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrubParallax } from "@/components/motion/ScrubParallax";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Focused on community. Through school-supply and backpack donation drives, FocusedEDU invests back into the students, classrooms, and neighborhoods our schools serve.",
};

const points = [
  "Backpack & school-supply drives for partner districts",
  "Giving back where our educators teach and live",
  "A mission our candidates and clients are proud to join",
];

export default function OurImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Focused on Community"
        eyebrowTone="gold"
        title="Staffing is our work. Community is our why."
        subtitle="Filling a role is only part of the story. We show up for the students and schools behind every placement — making sure more kids start the year ready to succeed."
        photo="/photography/community-backpacks.jpg"
        photoAlt="Diverse students wearing backpacks heading into school"
      />

      {/* Impact detail */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/photography/community-school-walk.jpg"
                alt="A parent walking their child to school at golden hour"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-500" aria-hidden />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="gold">Our impact</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl lg:text-[2.6rem]">
                More than filling roles.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-slate-ink">
                Through our school-supply and backpack donation drives, FocusedEDU shows up
                for the students, classrooms, and neighborhoods our partner schools serve —
                making sure more kids start the year with the tools they need to succeed.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                      <Check className="size-3.5 text-gold-600" strokeWidth={2.5} />
                    </span>
                    <span className="text-navy-900">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Statement — pinned parallax */}
      <ScrubParallax
        photo="/photography/impact-students.jpg"
        alt="Diverse, engaged students raising their hands in a bright classroom"
        eyebrow="Our impact"
        eyebrowTone="gold"
        quote="When more kids start the year with the tools they need, whole communities get stronger."
      />

      <ContactSection contact={edu.contact} social={edu.social} />
    </>
  );
}
