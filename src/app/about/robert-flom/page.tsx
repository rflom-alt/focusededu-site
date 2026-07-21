import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "@/components/ui/SocialIcons";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { author, type AuthorLink } from "@/lib/author";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.focusedu-staffing.com/about/robert-flom" },
  title: "Robert Flom — Founder",
  description:
    "Meet Robert Flom, founder of Focused Staffing Group — a former K-12 teacher who built an education and behavioral-health staffing partner.",
};

const PERSON = {
  "@type": "Person",
  "@id": "https://www.focused-staffing.com/about/robert-flom#person",
  name: "Robert Flom",
  jobTitle: "Founder",
  worksFor: { "@id": "https://www.focused-staffing.com/#organization" },
  url: "https://www.focused-staffing.com/about/robert-flom",
  image: "https://www.focusedu-staffing.com/photography/founder-headshot.jpg",
  sameAs: ["https://www.linkedin.com/in/rflom/"],
  knowsAbout: [
    "Special education staffing",
    "Behavioral health staffing",
    "School nursing staffing",
    "K-12 education recruiting",
    "Workforce partnerships",
  ],
  description:
    "Founder of Focused Staffing Group; former K-12 music teacher with 16 years in education and 12 years building staffing partnerships.",
};

const PROFILE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: PERSON,
};

const BRAND_ICON = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };

function LinkIcon({ link }: { link: AuthorLink }) {
  const cls =
    "flex size-10 items-center justify-center rounded-full border border-cloud bg-white text-slate-ink transition hover:border-teal-500/50 hover:text-teal-700";
  if (link.kind === "email") {
    return (
      <a href={link.href} aria-label={link.label} className={cls}>
        <Mail className="size-4" strokeWidth={1.8} />
      </a>
    );
  }
  const Icon = BRAND_ICON[link.kind];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cls}
    >
      <Icon className="size-4" strokeWidth={1.8} />
    </a>
  );
}

export default function RobertFlomPage() {
  return (
    <>
      <JsonLd data={PROFILE_SCHEMA} />

      <PageHero
        eyebrow="Meet the founder"
        title="Robert Flom"
        subtitle="Founder, Focused Staffing Group — the parent company behind FocusedEDU and Focused Behavioral."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl items-start gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-cloud">
                  <Image
                    src={author.photo}
                    alt="Robert Flom, founder of Focused Staffing Group"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-navy-950">
                  Robert Flom
                </p>
                <p className="text-sm text-slate-ink">Founder, Focused Staffing Group</p>
                <div className="mt-5 flex items-center gap-2.5">
                  {author.links.map((l) => (
                    <LinkIcon key={l.label} link={l} />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-2xl">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                  His story
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-ink">
                  Robert Flom is the founder of Focused Staffing Group, the parent
                  company behind FocusedEDU and Focused Behavioral. He started his
                  career in the classroom as a music teacher in New Jersey&rsquo;s Black
                  Horse Pike Regional School District — an experience that still shapes
                  how he approaches staffing. Across 16 years in and around education,
                  including 12 years building staffing partnerships, Robert saw
                  firsthand how the wrong hire disrupts a classroom and how the right
                  one can change a student&rsquo;s year. He founded Focused Staffing Group
                  to be the responsive, relationship-driven partner he wished he&rsquo;d had
                  as an educator — one that treats every placement as a person, not a
                  requisition. Today the firm places special education teachers,
                  paraprofessionals, school nurses, behavioral health clinicians, and
                  direct support professionals across the Mid-Atlantic and beyond,
                  backed by faster credentialing, ~85% retention, and a
                  one-partner-per-market commitment no competitor offers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
