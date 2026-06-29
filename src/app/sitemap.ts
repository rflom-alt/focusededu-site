import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { caseStudies } from "@/lib/case-studies";

const BASE = "https://www.focusedu-staffing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/for-schools",
    "/candidates",
    "/about",
    "/our-impact",
    "/resources",
    "/case-studies",
    "/book-a-call",
    "/blog",
    "/resources/2026-k12-staffing-report",
  ].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const blog = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.iso,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cases = caseStudies.map((c) => ({
    url: `${BASE}/case-studies/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...cases, ...blog];
}
