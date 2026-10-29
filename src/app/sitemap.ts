import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { caseStudies } from "@/lib/case-studies";
import { servicePages } from "@/lib/service-pages";
import { getOpenSchoolJobs } from "@/app/jobs/jobs-feed";
import {
  CROSS_DOMAIN_CANONICAL_POSTS,
  CROSS_DOMAIN_CANONICAL_ROUTES,
} from "@/lib/cross-domain-canonicals";

const BASE = "https://www.focusedu-staffing.com";

// Job listings come from the live job board, so the sitemap refreshes on the
// same 6-hour cycle as /jobs: filled or expired roles leave, new ones arrive.
export const revalidate = 21600;

/** Case studies carry no date of their own; this is when their copy last changed. */
const CASE_STUDIES_UPDATED = "2026-07-21";

/** /jobs and its detail pages launched on this date. */
const JOBS_LAUNCHED = "2026-10-18";

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
  // Every post must advertise a real date; fail the build rather than emit an
  // empty or invalid <lastmod>.
  throw new Error(`sitemap: post has no parseable date (updated=${updated}, iso=${iso})`);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /**
   * Every static route carries an explicit last-modified date (YYYY-MM-DD).
   * Set by hand on purpose: Vercel shallow-clones the repo, so git history is not
   * available at build time, and a date stamped at build would claim every page
   * changed on every deploy. Bump the date whenever the page's content changes.
   */
  const STATIC_ROUTES: { path: string; updated: string }[] = [
    { path: "", updated: "2026-10-29" },
    { path: "/for-schools", updated: "2026-10-29" },
    { path: "/candidates", updated: "2026-07-21" },
    { path: "/about", updated: "2026-10-29" },
    { path: "/about/robert-flom", updated: "2026-09-07" },
    { path: "/our-impact", updated: "2026-10-18" },
    { path: "/resources", updated: "2026-10-18" },
    { path: "/case-studies", updated: "2026-07-21" },
    { path: "/references", updated: "2026-08-12" },
    { path: "/services", updated: "2026-10-29" },
    { path: "/book-a-call", updated: "2026-10-18" },
    { path: "/request-staff", updated: "2026-10-18" },
    { path: "/jobs", updated: "2026-10-18" },
    { path: "/blog", updated: "2026-10-18" },
    { path: "/resources/2026-k12-staffing-report", updated: "2026-09-29" },
    { path: "/privacy", updated: "2026-10-13" },
    { path: "/terms", updated: "2026-10-15" },
    { path: "/cookies", updated: "2026-07-21" },
  ];

  const staticRoutes = STATIC_ROUTES
    // A sitemap must only advertise canonical URLs. Routes that canonicalise
    // to the parent domain are deliberately withheld (Decision 8).
    .filter((r) => !(r.path in CROSS_DOMAIN_CANONICAL_ROUTES))
    .map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: r.updated,
      changeFrequency: "weekly" as const,
      priority: r.path === "" ? 1 : 0.7,
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
    lastModified: CASE_STUDIES_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const services = servicePages.map((p) => ({
    url: `${BASE}/${p.slug}`,
    lastModified: p.updated,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // A detail page is never older than the day /jobs launched, and a role
  // posted after that carries its own posting date.
  const jobs = (await getOpenSchoolJobs()).map((j) => {
    const posted = j.datePosted.slice(0, 10);
    return {
      url: `${BASE}/jobs/${j.slug}`,
      lastModified: posted > JOBS_LAUNCHED ? posted : JOBS_LAUNCHED,
      changeFrequency: "daily" as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...services, ...cases, ...blog, ...jobs];
}
