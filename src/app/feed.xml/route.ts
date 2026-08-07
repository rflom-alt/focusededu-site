import { posts } from "@/lib/posts";

const BASE = "https://www.focusedu-staffing.com";

/**
 * RSS 2.0 feed of the blog.
 *
 * Consumed by Metricool's RSS auto-posting to push new articles to the
 * FocusedEDU LinkedIn company page, so it carries a full absolute-URL
 * <enclosure> image and a clean plain-text <description> — Metricool builds
 * the post preview from those two fields, not from the article body.
 */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const dynamic = "force-static";

export function GET() {
  const items = posts
    .slice(0, 30)
    .map((p) => {
      const url = `${BASE}/blog/${p.slug}`;
      // RFC-822 date; posts only carry a day, so anchor at midday UTC.
      const pubDate = new Date(`${p.iso}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${esc(p.excerpt)}</description>
      <enclosure url="${BASE}${p.img}" type="image/jpeg" />
      <category>${esc(p.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FocusedEDU — K-12 Staffing Insights</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical guidance for K-12 district and charter leaders on special education staffing, substitutes, paraprofessionals, and related services — from Focused EDU.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(`${posts[0]?.iso ?? "2026-01-01"}T12:00:00Z`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
