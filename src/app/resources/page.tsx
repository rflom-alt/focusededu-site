import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { edu } from "@/lib/content";
import { posts as blogPosts } from "@/lib/posts";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { ScrubHighlight } from "@/components/motion/ScrubHighlight";
import { VideoGallery, type VideoItem } from "@/components/sections/VideoGallery";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Career advice, candidate resources, videos, and articles — the job board, free résumé feedback, real educator stories, and guidance for K-12 schools and educators.",
};

const resources = [
  {
    icon: "Briefcase",
    title: "Job board",
    body: "Browse current openings across our partner schools and apply in minutes.",
    cta: "Browse openings",
    href: edu.jobBoard,
  },
  {
    icon: "FileText",
    title: "Free résumé feedback",
    body: "Get complimentary résumé feedback and a makeover from our team of recruiters.",
    cta: "Get started",
    href: "/our-impact#connect",
  },
  {
    icon: "BookOpen",
    title: "Career advice",
    body: "Practical guidance from recruiters who place K-12 educators every single day.",
    cta: "Talk to us",
    href: "/our-impact#connect",
  },
  {
    icon: "CalendarCheck",
    title: "Talk to a recruiter",
    body: "Have questions about a role or the process? Book time with someone who knows K-12.",
    cta: "Book a call",
    href: "/our-impact#connect",
  },
];

const videos: VideoItem[] = [
  {
    id: "_mEy7s5rtHo",
    title: "How one teacher found flexibility, fulfillment & financial freedom",
    tag: "Educator story",
  },
  {
    id: "xjCAke7fiEs",
    title: "Why I chose Focused Staffing Group — Johnny's story",
    tag: "Educator story",
  },
  {
    id: "vNSqPO6jzSI",
    title: "Solving the special-education staffing crisis",
    tag: "For schools",
  },
  {
    id: "1cer6-Stt6o",
    title: "Solving the substitute teacher shortage",
    tag: "For schools",
  },
];

const blogCards = blogPosts.slice(0, 6).map((p) => ({
  title: p.title,
  date: p.date,
  excerpt: p.excerpt,
  img: p.img,
  href: `/blog/${p.slug}`,
}));

const featuredReport = {
  eyebrow: "2026 Research Report",
  title: "The State of K-12 Staffing",
  blurb:
    "The real, cited numbers behind the teacher, substitute, paraprofessional, and mental-health gaps — and what districts can do about them. Free download.",
  href: "/resources/2026-k12-staffing-report",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Career advice, real stories & openings."
        subtitle="Watch educator stories and expert insights, read our latest articles, and find the tools to take your next step in K-12 education."
      >
        <Button href={edu.jobBoard} variant="primary" size="lg">
          View job board
        </Button>
      </PageHero>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-5 sm:grid-cols-2">
          {resources.map((r, i) => {
            const external = r.href.startsWith("http");
            return (
              <Reveal key={r.title} delay={i * 0.05}>
                <a
                  href={r.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-2xl border border-cloud bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700">
                    <Icon name={r.icon} className="size-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-950">{r.title}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-slate-ink">{r.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    {r.cta}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <VideoGallery
        videos={videos}
        eyebrow="Watch"
        title="Stories & insights, on video."
        intro="Real educators on what it's like to work with us — and straight talk for schools on the challenges you're facing."
        bg="bg-mist"
      />

      {/* Featured report */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
                    {featuredReport.eyebrow}
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.6rem]">
                    {featuredReport.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                    {featuredReport.blurb}
                  </p>
                  <div className="mt-8">
                    <Button href={featuredReport.href} variant="primary" size="lg">
                      Read the report
                    </Button>
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[16rem]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-navy-900 to-navy-950 p-6 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.7)]">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-teal-500" aria-hidden />
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-teal-400">FocusedEDU · 2026</p>
                    <p className="mt-8 font-display text-2xl font-bold leading-tight text-white">
                      The State of<br />K-12 Staffing
                    </p>
                    <p className="absolute inset-x-6 bottom-6 text-[0.7rem] font-medium text-white/40">
                      Research report · 7 sections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BlogGrid
        posts={blogCards}
        eyebrow="From the blog"
        title="Insight for schools and educators."
        intro="Practical articles on hiring, retention, compliance, and building stronger school teams."
        bg="bg-mist"
        cta={{ label: "View all articles", href: "/blog" }}
      />

      <ScrubHighlight
        eyebrow="Why it matters"
        text="Your career is worth more than a job board — we are here for the whole journey, not just the placement."
        accent={["career", "journey"]}
        dark
      />

      <CtaBand
        title="Ready to find your next role?"
        body="Browse the job board or get started and let a recruiter match you to the right school."
        primary={{ label: "View job board", href: edu.jobBoard }}
        secondary={{ label: "Get started", href: "/our-impact#connect" }}
        note="Free to browse · New roles added weekly"
      />
    </>
  );
}
