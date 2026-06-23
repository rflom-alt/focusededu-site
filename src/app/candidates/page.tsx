import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ScrubHighlight } from "@/components/motion/ScrubHighlight";
import { Steps } from "@/components/sections/Steps";
import { FeatureGrid, type Feature } from "@/components/sections/FeatureGrid";
import { FAQ, type QA } from "@/components/sections/FAQ";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import type { Step } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Educators — join your dream team. Work with vetted K-12 schools across the U.S., when and where you want. Flexible roles, premium perks, weekly pay.",
};

const journey: Step[] = [
  {
    n: "01",
    title: "Sign up",
    body: "We make it easy to securely submit your documents and complete onboarding tasks from anywhere.",
  },
  {
    n: "02",
    title: "Talk with a recruiter",
    body: "Tell us about your experience, your professional goals, and where you see yourself in your next role.",
  },
  {
    n: "03",
    title: "Download the app",
    body: "Select the shifts you want — where you want, when you want — and swap shifts, all from our mobile app.",
  },
  {
    n: "04",
    title: "Get paid",
    body: "We provide compensation via direct deposit, Cash App, or check up to two times per week.",
  },
];

const perks: Feature[] = [
  {
    icon: "HeartPulse",
    title: "Health insurance",
    body: "Find the best health plan at the lowest price and enroll fast through our partner, Stride Health.",
  },
  {
    icon: "Heart",
    title: "Trusted caregivers",
    body: "Enjoy 20% off a premium Care.com membership — an offer reserved for FSG professionals.",
  },
  {
    icon: "BookOpen",
    title: "Professional development",
    body: "Keep growing your craft with a 15% discount on all Lumify products via an exclusive code.",
  },
];

const faqs: QA[] = [
  {
    q: "What positions are available?",
    a: "We staff certified and uncertified teachers and therapists, paraprofessionals, food service, and custodial roles across K-12 schools.",
  },
  {
    q: "What are the requirements to join?",
    a: "Requirements include passing a skills quiz, background checks, a TB test, and vaccination documentation — the exact set depends on the role and the school.",
  },
  {
    q: "How often will I get paid?",
    a: "Our pay period runs Monday through Sunday, with scheduled paydays every Friday, via direct deposit, Cash App, or check.",
  },
  {
    q: "How long do engagements last?",
    a: "Engagement lengths vary — from summer engagements to long-term placements, with many opportunities to convert into a permanent role.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Educators & Job Seekers"
        title="Join your dream team."
        subtitle="We make it easy to work with vetted schools all over the U.S. — when and where you want. Do what you love and be valued where you work."
        photo="/photography/educator-portrait.jpg"
        photoAlt="A confident educator at her classroom desk"
      >
        <Button href={edu.jobBoard} variant="primary" size="lg">
          View open roles
        </Button>
        <Button
          href="#how"
          variant="ghost"
          size="lg"
          className="border border-white/25 hover:bg-white/5"
        >
          How it works
        </Button>
      </PageHero>

      {/* Promise — pinned, scroll-scrubbed word reveal */}
      <ScrubHighlight
        eyebrow="Our promise"
        text="Our mission is to help you achieve yours. Build the career you deserve — do what you love, and be valued where you work."
        accent={["achieve", "deserve", "love", "valued"]}
        dark={false}
      />

      <Steps
        id="how"
        eyebrow="How it works"
        title="From sign-up to payday in four steps."
        intro="A simple, supported path into your next role — most of it from your phone."
        steps={journey}
      />

      <FeatureGrid
        eyebrow="Professional perks"
        title="Exclusive offers from premium partners."
        intro="Being part of the FocusedEDU network comes with real benefits beyond the placement."
        items={perks}
        columns={3}
      />

      <VideoTestimonials />

      <FAQ title="Questions, answered." items={faqs} />

      <CtaBand
        title="Your next role is waiting."
        body="Browse open positions and apply in minutes — flexible schedules, weekly pay, and a team that has your back."
        primary={{ label: "View open roles", href: edu.jobBoard }}
        secondary={{ label: "Have questions? Talk to us", href: "/our-impact#connect" }}
        note="Flexible schedules · Weekly pay · Apply in minutes"
      />
    </>
  );
}
