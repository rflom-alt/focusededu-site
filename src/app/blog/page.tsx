import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog",
  description:
    "Articles on K-12 hiring, retention, compliance, interview prep, and building stronger school teams — from the FocusedEDU team.",
};

const CATEGORY_ORDER = ["For schools", "For educators", "Industry news", "Case studies"];

const cards = posts.map((p) => ({
  title: p.title,
  date: p.date,
  excerpt: p.excerpt,
  img: p.img,
  href: `/blog/${p.slug}`,
  category: p.category,
}));

const categories = CATEGORY_ORDER.filter((c) => cards.some((p) => p.category === c));

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insight for schools & educators."
        subtitle="Practical articles on hiring, retention, compliance, interview prep, and building stronger school teams."
      />
      <BlogExplorer posts={cards} categories={categories} />
      <CtaBand
        title="Ready to build a stronger team?"
        body="See how a dedicated, exclusive talent pipeline changes the way your school hires."
        primary={edu.cta.primary}
        secondary={{ label: "Browse the job board", href: edu.jobBoard }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
