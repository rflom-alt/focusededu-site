import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { edu } from "@/lib/content";
import { posts as blogPosts } from "@/lib/posts";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

const infographics = [
  {
    title: "Traditional hiring vs. FocusedEDU",
    src: "/infographics/edu-traditional-vs-focusededu.svg",
  },
  {
    title: "The true cost of an empty classroom",
    src: "/infographics/edu-true-cost-vacancy.svg",
  },
  {
    title: "One client per region",
    src: "/infographics/edu-one-client-per-region.svg",
  },
];

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

      {/* Infographics */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Infographics"
            title="The model, at a glance."
            intro="Share-ready visuals that make the case for a focused, exclusive staffing partner."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infographics.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <a
                  href={g.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-cloud bg-navy-950 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.3)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.title} loading="lazy" className="block w-full" />
                  <div className="flex items-center justify-between gap-3 bg-white px-5 py-4">
                    <span className="text-sm font-semibold text-navy-950">{g.title}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                      View full size
                      <ArrowRight className="size-3.5" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
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
