import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { caseStudies } from "@/lib/case-studies";
import { servicePages } from "@/lib/service-pages";
import {
  CROSS_DOMAIN_CANONICAL_POSTS,
  CROSS_DOMAIN_CANONICAL_ROUTES,
} from "@/lib/cross-domain-canonicals";

const BASE = "https://www.focusedu-staffing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/for-schools",
    "/candidates",
    "/about",
    "/about/robert-flom",
    "/our-impact",
    "/resources",
    "/case-studies",
    "/references",
    "/services",
    "/book-a-call",
    "/blog",
    "/resources/2026-k12-staffing-report",
    "/privacy",
    "/terms",
    "/cookies",
  ]
    // A sitemap must only advertise canonical URLs. Routes that canonicalise
    // to the parent domain are deliberately withheld (Decision 8).
    .filter((p) => !(p in CROSS_DOMAIN_CANONICAL_ROUTES))
    .map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const blog = posts
    .filter((p) => !(p.slug in CROSS_DOMAIN_CANONICAL_POSTS))
    .map((p) => ({
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

  const services = servicePages.map((p) => ({
    url: `${BASE}/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...services, ...cases, ...blog];
}
