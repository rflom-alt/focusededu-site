import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Differentiators } from "@/components/sections/Differentiators";
import { RegionScarcity } from "@/components/sections/RegionScarcity";
import { FeatureGrid, type Feature } from "@/components/sections/FeatureGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PinnedStats } from "@/components/sections/PinnedStats";
import { LogoWall } from "@/components/sections/LogoWall";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsightVideos } from "@/components/sections/InsightVideos";
import { FAQ, type QA } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Hire the right K-12 education staff with speed and precision. A dedicated, exclusive talent pipeline, automated credentialing, and temp-to-perm at no cost.",
};

const whyChooseUs: Feature[] = [
  {
    icon: "BadgeCheck",
    title: "Focused hiring process",
    body: "We prevent frustration by automatically weeding out poor candidates while automated credentialing cuts hiring time in half.",
  },
  {
    icon: "Wallet",
    title: "Cut costs",
    body: "Reclaim the costs of manual recruiting and advertising while saving on the rising costs of fringe benefits.",
  },
  {
    icon: "Users",
    title: "A dedicated talent pool",
    body: "Because we won't take on a directly competing school in your area, you're guaranteed a pool of talent that's never shared with a rival.",
  },
  {
    icon: "Zap",
    title: "Increased efficiency",
    body: "Reclaim your time from recruiting, testing, and credentialing by automating the parts of hiring that slow you down.",
  },
  {
    icon: "Award",
    title: "12 years of experience",
    body: "From recruitment strategy to implementation and training, we know what it takes to deliver for your schools.",
  },
  {
    icon: "Target",
    title: "Custom consulting",
    body: "In search of a hard-to-fill role? We'll develop a customized recruiting initiative to find the professional you need.",
  },
];

const roles: Feature[] = [
  {
    icon: "GraduationCap",
    title: "Teachers",
    body: "Certified and uncertified classroom teachers across grade levels and subjects.",
  },
  {
    icon: "BadgeCheck",
    title: "Special education",
    body: "Special education teachers and specialists who meet your compliance requirements.",
  },
  {
    icon: "Users",
    title: "Paraprofessionals",
    body: "Classroom aides and paraprofessionals who keep learning moving every day.",
  },
  {
    icon: "HeartPulse",
    title: "Related services",
    body: "Therapists and related-service providers — speech, OT, PT, and more.",
  },
  {
    icon: "Heart",
    title: "Behavioral & personal care",
    body: "Behavioral support staff and personal care assistants for the students who need them.",
  },
  {
    icon: "Briefcase",
    title: "School support",
    body: "Food service, custodial, and administrative support that keeps your building running.",
  },
];

const employerFaqs: QA[] = [
  {
    q: "How fast can you fill a role?",
    a: "Because our candidates are pre-vetted and credentialing is automated, many roles are filled in a fraction of the typical time. On a discovery call we'll give you a realistic timeline for your specific need.",
  },
  {
    q: "How does pricing work?",
    a: "Engagements are billed simply — typically a markup on contract placements or a flat fee on direct hires, depending on the role. There are no surprises, and temp-to-perm conversions come at no additional cost.",
  },
  {
    q: "Will you also staff my competitors?",
    a: "No. Once we're staffing your school or district, we won't take on a directly competing school in your area — the talent pipeline we build is exclusively yours, never shared with a rival down the road. It's our strongest commitment to you.",
  },
  {
    q: "Do you handle credentialing and compliance?",
    a: "Yes. Automated credentialing, background checks, and documentation are handled before a candidate ever reaches you, so every professional we present is ready to work.",
  },
  {
    q: "What if a placement isn't the right fit?",
    a: "Our temp-to-perm model lets you evaluate a professional on the job before committing — at no cost to your school. If someone isn't right, we make it right.",
  },
];

export default function ForSchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For K-12 Schools & Districts"
        title="Hire the right education staff — with speed and precision."
        subtitle="Partner with FocusedEDU, a strategic partner dedicated to connecting you with high-quality, highly-skilled education talent — backed by a dedicated pipeline that is yours alone."
        photo="/photography/hero-classroom.jpg"
        photoAlt="A professional educator standing in a classroom of focused students"
      >
        <Button href={edu.cta.primary.href} variant="primary" size="lg">
          Book a discovery call
        </Button>
        <Button
          href="/candidates"
          variant="ghost"
          size="lg"
          className="border border-white/25 hover:bg-white/5"
        >
          Meet our candidates
        </Button>
      </PageHero>

      <Differentiators items={edu.differentiators} />
      <FeatureGrid
        eyebrow="Roles we staff"
        title="The people who keep your school running — all in one partner."
        intro="From the classroom to the cafeteria, we place the full range of K-12 professionals."
        items={roles}
        columns={3}
        bg="bg-mist"
      />
      <FeatureGrid
        eyebrow="Why schools choose us"
        title="Hiring made calmer, faster, and more affordable."
        intro="Every part of how we work is designed to reclaim time and budget for what really matters — your students."
        items={whyChooseUs}
        columns={3}
      />
      <HowItWorks steps={edu.steps} />
      <RegionScarcity />
      <PinnedStats stats={edu.stats} />
      <LogoWall clients={edu.clients} />
      <Testimonials testimonials={edu.testimonials} />

      {/* Case studies proof band */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-12 sm:px-12 lg:px-16 lg:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
                    Proof, not promises
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                    See how we deliver for schools like yours.
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                    From staffing an entire school where incumbent agencies fell short, to filling
                    100% of certified special-education roles in two weeks — real partners, real numbers.
                  </p>
                  <div className="mt-8">
                    <Button href="/case-studies" variant="primary" size="lg">
                      Read the case studies
                    </Button>
                  </div>
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                  {[
                    { v: "120+", l: "Roles filled at one school" },
                    { v: "95%", l: "Substitute fill rate (+40% vs. prior)" },
                    { v: "100%", l: "SPED roles filled & retained" },
                    { v: "2 wks", l: "From request to filled" },
                  ].map((s) => (
                    <div key={s.l} className="border-l border-white/15 pl-5">
                      <dt className="font-display text-4xl font-semibold tracking-tight text-teal-400">
                        {s.v}
                      </dt>
                      <dd className="mt-2 text-sm leading-snug text-white/70">{s.l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InsightVideos />
      <FAQ
        eyebrow="Questions schools ask"
        title="Everything you need to decide with confidence."
        items={employerFaqs}
      />
      <CtaBand
        title="Let's build the team your students deserve."
        body="Book a 30-minute discovery call and see how a dedicated, exclusive talent pipeline changes the way your school hires."
        primary={edu.cta.primary}
        secondary={{ label: "Meet our candidates", href: "/candidates" }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
