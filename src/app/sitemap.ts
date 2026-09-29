import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { caseStudies } from "@/lib/case-studies";
import { servicePages } from "@/lib/service-pages";
import {
  CROSS_DOMAIN_CANONICAL_POSTS,
  CROSS_DOMAIN_CANONICAL_ROUTES,
} from "@/lib/cross-domain-canonicals";

const BASE = "https://www.focusedu-staffing.com";

/**
 * `post.updated` is a DISPLAY date ("Jun 26, 2026"); `post.iso` is sortable.
 * Feeding the display string straight into `lastModified` emits
 * `<lastmod>Jun 26, 2026</lastmod>`, which is not the W3C Datetime the sitemap
 * protocol requires — crawlers discard it. Normalise to YYYY-MM-DD, and fall
 * back to the ISO field whenever the display string will not parse.
 */
function lastmod(updated: string | undefined, iso: string): string {
  for (const candidate of [updated, iso]) {
    if (!candidate) continue;
    const t = Date.parse(candidate);
    if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10);
  }
  return iso;
}

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
    "/request-staff",
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
      lastModified: lastmod(p.updated, p.iso),
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
