import type { Metadata } from "next";
import { Clock, ShieldCheck, GraduationCap, Phone, Mail } from "lucide-react";
import { edu } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { LogoWall } from "@/components/sections/LogoWall";
import { ScrubParallax } from "@/components/motion/ScrubParallax";
import { HubSpotMeetings } from "@/components/sections/HubSpotMeetings";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { TestimonialImages } from "@/components/sections/TestimonialImages";

export const metadata: Metadata = {
  alternates: { canonical: "/book-a-call" },
  title: "Book a Discovery Call",
  description:
    "Book a free 30-minute discovery call with FocusedEDU. Share your staffing challenge and see how a dedicated, exclusive K-12 pipeline works.",
};

const reassurance = [
  { icon: Clock, label: "30 minutes" },
  { icon: ShieldCheck, label: "No cost, no obligation" },
  { icon: GraduationCap, label: "Talk to a former teacher" },
];

const expect = [
  {
    title: "We listen first",
    body: "Your open roles, your timeline, and the compliance pressures you're up against — before we say a word about us.",
  },
  {
    title: "You'll see the model",
    body: "How an exclusive pipeline — one we never share with your competitors — gives you first pick of talent, and how automated credentialing halves your time-to-hire.",
  },
  {
    title: "A clear next step",
    body: "You leave with a plan — not a hard sell. If we're not the right fit, we'll tell you.",
  },
];

const testimonialImages = [
  {
    src: "/testimonials/erin-murphy-richardson.png",
    alt: "Erin D. Murphy-Richardson, Superintendent, The Barack Obama Green Public Schools — five-star review",
  },
  {
    src: "/testimonials/elias-pappas.png",
    alt: "Elias Pappas, CEO, Delaware Public School District — five-star review",
  },
  {
    src: "/testimonials/david-weathington.png",
    alt: "David Weathington, CEO, Buttonwood Farms / Delta School — five-star review",
  },
  {
    src: "/testimonials/zavia-herring.png",
    alt: "Zavia Herring, Director of HR, Renaissance Academy Charter School — five-star review",
  },
];

export default function BookACallPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">Book a discovery call</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
                Let&apos;s solve your staffing challenge — in 30 focused minutes.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Tell us what you&apos;re up against. We&apos;ll show you how a dedicated,
                exclusive talent pipeline — built by a former teacher — gets the right people
                in front of your students faster.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {reassurance.map(({ icon: I, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    <I className="size-4 text-teal-400" strokeWidth={1.8} />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9">
                <Button href="#book" variant="primary" size="lg">
                  Pick your time ↓
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Booking + context */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: what to expect / who */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="mt-5 text-2xl font-semibold text-navy-950 sm:text-3xl">
              A real conversation, not a pitch.
            </h2>
            <ol className="mt-8 space-y-6">
              {expect.map((e, i) => (
                <li key={e.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500/10 font-display text-sm font-semibold text-teal-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{e.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-ink">{e.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-cloud bg-mist p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                Who you&apos;ll meet
              </p>
              <p className="mt-3 font-display text-lg font-medium text-navy-950">
                FocusedEDU&apos;s founder, Rob — a former K-12 educator.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-ink">
                You&apos;ll talk with someone who has stood at the front of the classroom and
                knows what makes a hire actually work for your students.
              </p>
            </div>
          </div>

          {/* Right: scheduler */}
          <div id="book" className="scroll-mt-28">
            <div className="overflow-hidden rounded-2xl border border-cloud bg-white shadow-[0_30px_60px_-40px_rgba(6,10,31,0.3)]">
              <HubSpotMeetings url={edu.contact.scheduler} className="w-full" />
            </div>
            <p className="mt-5 text-center text-sm text-slate-ink">
              Prefer to reach us directly?{" "}
              <a href={edu.contact.phoneHref} className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline">
                <Phone className="size-4" strokeWidth={1.8} /> {edu.contact.phone}
              </a>{" "}
              <span className="px-1 text-cloud">·</span>{" "}
              <a href={`mailto:${edu.contact.email}`} className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline">
                <Mail className="size-4" strokeWidth={1.8} /> {edu.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Founder video */}
      <FounderVideo
        src="/video/founder-message.mp4"
        poster="/video/founder-poster.jpg"
        intro="A quick hello from our founder on what a discovery call looks like — and why we do this work."
        ctaLabel="Book your discovery call"
        ctaHref="#book"
      />

      {/* Proof */}
      <TestimonialImages
        items={testimonialImages}
        intro="Superintendents, CEOs, and HR directors on what it's like to partner with us."
        ctaLabel="Book your discovery call"
        ctaHref="#book"
      />

      <LogoWall clients={edu.clients} />

      {/* Closer — pinned parallax */}
      <ScrubParallax
        photo="/photography/discovery-support.jpg"
        alt="A teacher supporting a student one-on-one at a desk"
        eyebrow="Ready when you are"
        quote="The right team for your students is one conversation away."
        ctaLabel="Book your discovery call"
        ctaHref="#book"
      />
    </>
  );
}
