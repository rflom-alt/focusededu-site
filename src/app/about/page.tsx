import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrubHighlight } from "@/components/motion/ScrubHighlight";
import { FounderNote } from "@/components/sections/FounderNote";
import { FeatureGrid, type Feature } from "@/components/sections/FeatureGrid";
import { StatBand } from "@/components/sections/StatBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "K-12 education experts. We've earned the trust of the industry, our talent, and our customers — by giving each partner our undivided focus and never working their direct competitor.",
};

const values: Feature[] = [
  {
    icon: "Target",
    title: "Focus",
    body: "Your partner, never your rival's. You get our full attention — never split between direct competitors.",
  },
  {
    icon: "Settings",
    title: "Service",
    body: "We go beyond filling roles to genuinely serve the schools and educators we work with.",
  },
  {
    icon: "Handshake",
    title: "Integrity",
    body: "We do what we say and tell you the truth — even when it's the harder answer.",
  },
  {
    icon: "MessageCircle",
    title: "Respect",
    body: "Every educator and every partner is treated with the respect they've earned.",
  },
  {
    icon: "Heart",
    title: "Caring",
    body: "We care about the students, staff, and communities behind every single placement.",
  },
  {
    icon: "Puzzle",
    title: "Diversity",
    body: "We champion diverse, inclusive teams that reflect the students they serve.",
  },
];

const whatWeDo: Feature[] = [
  {
    icon: "Users",
    title: "Connect people with the right jobs",
    body: "We match skilled education professionals to the schools where they'll do their best work.",
  },
  {
    icon: "Briefcase",
    title: "Get your roles in front of talent",
    body: "We put your job postings and your story in front of a dedicated, qualified audience.",
  },
  {
    icon: "BookOpen",
    title: "Career advice & resources",
    body: "Our team supports candidates with guidance that helps them grow, not just get placed.",
  },
  {
    icon: "FileText",
    title: "Free résumé feedback",
    body: "Complimentary résumé feedback and makeovers help our educators put their best foot forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FocusedEDU"
        title="K-12 education experts."
        subtitle="We've earned the trust of the industry, our talent, and our customers. We'd love to earn yours."
        photo="/photography/about-classroom.jpg"
        photoAlt="A bright classroom of diverse students raising their hands"
      />

      {/* Story */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl lg:text-[2.6rem]">
              Connecting people for over 12 years.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-ink">
              For growing schools that need temporary and direct-hire professionals,
              FocusedEDU is a strategic partner that identifies, screens, and presents
              skilled professionals to fill vacancies with the right candidate the first time.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">
              Unlike other staffing agencies, we dedicate our staff, resources, and attention
              to{" "}
              <span className="font-medium text-navy-950">one partner per market — never their rival</span>{" "}
              — ensuring a focused result you can feel from the very first placement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission — pinned, scroll-scrubbed word reveal */}
      <ScrubHighlight
        eyebrow="Our mission"
        text="To provide superior quality education staffing services that professionals recommend to family and friends, customers prefer for their students, purchasers select for their clients, employees are proud of, and investors seek for long-term returns."
        accent={["professionals", "customers", "purchasers", "employees", "investors"]}
        dark
      />

      <FeatureGrid
        eyebrow="Our values"
        title="The principles behind every placement."
        items={values}
        columns={3}
        bg="bg-mist"
      />

      <FounderNote />
      <StatBand stats={edu.stats} />

      <FeatureGrid
        eyebrow="What we do"
        title="More than filling a seat."
        intro="We support both sides of the match — schools that need great people, and educators building careers they love."
        items={whatWeDo}
        columns={4}
      />

      <Testimonials testimonials={edu.testimonials} />
      <CtaBand
        title="Talk to a talent expert."
        body="See how a dedicated, mission-driven staffing partner can change the way your school hires."
        primary={edu.cta.primary}
        secondary={{ label: "Browse job board", href: edu.jobBoard }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
