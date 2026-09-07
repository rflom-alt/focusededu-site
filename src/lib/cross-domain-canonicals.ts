/**
 * Pages that live on FocusedEDU but canonicalise to the parent domain
 * (focused-staffing.com).
 *
 * They stay live and readable here for FocusedEDU visitors, but they must not
 * compete with the parent copy in search — and they must not be advertised in
 * this site's sitemap, because a sitemap should only ever list URLs we want
 * treated as canonical. Listing a canonicalised URL is the mixed signal that
 * triggers Search Console's "Alternate page with proper canonical tag" notice
 * against the sitemap. See Decision 8.
 *
 * Single source of truth: the page metadata and the sitemap both read this.
 */

/** Blog slugs whose canonical is the parent domain. */
export const CROSS_DOMAIN_CANONICAL_POSTS: Record<string, string> = {
  "negotiating-salary-a-10-step-guide-to-getting-a-bigger-paycheck":
    "https://www.focused-staffing.com/blog/negotiating-salary-a-10-step-guide-to-getting-a-bigger-paycheck",
  "the-ultimate-guide-to-interview-preparation-tips-and-tricks-to-win":
    "https://www.focused-staffing.com/blog/the-ultimate-guide-to-interview-preparation-tips-and-tricks-to-win",
};

/** Non-blog routes whose canonical is the parent domain. */
export const CROSS_DOMAIN_CANONICAL_ROUTES: Record<string, string> = {
  "/about/robert-flom": "https://www.focused-staffing.com/about/robert-flom",
};
