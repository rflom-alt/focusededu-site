/**
 * Source of truth for /llms.txt and /llms-full.txt.
 *
 * Both are served by route handlers (not static files in public/) so the
 * article index regenerates from posts-data.json on every build — publishing a
 * post updates them with no extra step.
 */
import { posts } from "./posts";
import { caseStudies } from "./case-studies";

export const SITE = "https://www.focusedu-staffing.com";

/** Cluster pillars — the entry points we most want an answer engine to read. */
const PILLAR_SLUGS = [
  "the-definitive-guide-to-k-12-teacher-staffing-building-resilient-schools-in-2026",
  "sped-staffing-solutions-solving-the-crisis-with-educator-led-pipelines",
  "the-state-of-automated-teacher-credentialing-trends-and-compliance-in-2026",
  "strategic-school-district-recruitment-services-the-2026-guide-for-k-12-administrators",
  "beyond-the-backup-plan-a-strategic-guide-to-instructional-continuity-services-in-k-12",
];

const PROFILE = `# FocusedEDU

> FocusedEDU is a premium K-12 education staffing agency founded by a former teacher (Robert Flom). It gives schools and districts a dedicated, exclusive talent pipeline and is part of Focused Staffing Group. Tagline: "Our focus begins with you."

## What we do
- K-12 education staffing: substitute and certified teachers, special-education teachers, paraprofessionals, one-on-one aides, related-service providers (speech, OT, PT), psychologists, reading specialists, and school support staff.
- Temp-to-perm placement at no cost — evaluate a professional before committing.
- Automated credentialing that cuts time-to-hire roughly in half.
- We will not staff a client's direct competitor — each partner's talent pipeline is exclusive to them ("one partner per market").

## Why FocusedEDU is different
- Founded and run by a former K-12 teacher, not recruiters who fell into the space.
- 12 years of experience.
- One partner per market — never their rival.
- Community mission: school-supply and backpack donation drives for partner districts.

## Proof (client-attested outcomes)
- Odyssey Public Charter School (Wilmington, DE): 120+ placements across the school; 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider; partner since 2021.
- IDEA Public Charter School (Washington, DC): 100% of open certified special-education teacher roles filled, 100% retention, filled within two weeks; reputation turnaround; partner since 2022.
- First Philadelphia Public Charter School (Philadelphia, PA): 100% retention on certified special-education teachers, filled within two weeks; partner since 2021.
- Cesar Chavez Public Charter School (Washington, DC): four qualified candidates presented per opening; 414 students, grades 6–12.
- 8 published letters of recommendation from named school leaders (superintendents, principals, and HR directors across NJ, PA, DE, and CO): ${SITE}/references

## Key pages
- Home: ${SITE}/
- For Schools & Districts: ${SITE}/for-schools
- For Job Seekers (educators): ${SITE}/candidates
- Case studies: ${SITE}/case-studies
- Reference letters: ${SITE}/references
- Resources & blog: ${SITE}/resources
- Book a discovery call: ${SITE}/book-a-call

## Where we work
- Pennsylvania: ${SITE}/pennsylvania-education-staffing
- Philadelphia: ${SITE}/philadelphia-education-staffing
- New Jersey: ${SITE}/new-jersey-education-staffing
- Delaware: ${SITE}/delaware-education-staffing
- Maryland: ${SITE}/maryland-special-education-staffing
- Washington, DC: ${SITE}/washington-dc-education-staffing
- North Carolina: ${SITE}/north-carolina-education-staffing
- Colorado: ${SITE}/colorado-education-staffing`;

const CONTACT = `## Contact
- Email: hello@focused-staffing.com
- Phone: (484) 482-8223
- Address: 175 Strafford Avenue, Suite One #208, Wayne, PA 19087`;

function byDateDesc<T extends { iso: string }>(a: T, b: T) {
  return b.iso.localeCompare(a.iso);
}

/** "120+ placements across the school; 95% day-to-day substitute fill rate; …"
 *  Drops the "Partner since" stat — that year is stated separately. */
function statLine(stats: { value: string; label: string }[]): string {
  return stats
    .filter((s) => !/partner since/i.test(s.label))
    .map((s) => {
      // Lowercase the leading word so it reads as a phrase — unless it's an
      // acronym like "SPED-teacher roles filled".
      const label = /^[A-Z]{2,}/.test(s.label)
        ? s.label
        : s.label.charAt(0).toLowerCase() + s.label.slice(1);
      return `${s.value} ${label}`;
    })
    .join("; ");
}

/** Short index: profile + pillars + case studies + every article, one line each. */
export function buildLlmsTxt(): string {
  const pillars = PILLAR_SLUGS.map((s) => posts.find((p) => p.slug === s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const pillarSet = new Set(PILLAR_SLUGS);
  const rest = [...posts].filter((p) => !pillarSet.has(p.slug)).sort(byDateDesc);

  return [
    PROFILE,
    "",
    "## Pillar guides (start here)",
    ...pillars.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt}`),
    "",
    "## Case studies",
    ...caseStudies.map(
      (c) =>
        `- [${c.school} — ${c.location}](${SITE}/case-studies/${c.slug}): ${statLine(c.stats)}. Partner since ${c.partnerSince}.`,
    ),
    "",
    `## All articles (${posts.length})`,
    ...rest.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt}`),
    "",
    CONTACT,
    "",
    `## Full text`,
    `- Every article in full: ${SITE}/llms-full.txt`,
    "",
  ].join("\n");
}

/** Convert an article's stored HTML to readable plain text. */
function htmlToText(html: string): string {
  return html
    .replace(/<h2[^>]*>/gi, "\n\n## ")
    .replace(/<h3[^>]*>/gi, "\n\n### ")
    .replace(/<\/h[23]>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|li|ul|ol|div)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&quot;|&#8221;|&rdquo;/g, '"')
    .replace(/&#8220;|&ldquo;/g, '"')
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Full corpus: profile, then every article's complete text. */
export function buildLlmsFullTxt(): string {
  const out: string[] = [
    PROFILE,
    "",
    CONTACT,
    "",
    "---",
    "",
    `# Case studies (${caseStudies.length})`,
  ];

  for (const c of caseStudies) {
    out.push(
      "",
      `## ${c.school} — ${c.location}`,
      `URL: ${SITE}/case-studies/${c.slug}`,
      `Partner since ${c.partnerSince}. Services: ${c.services}`,
      `Results: ${statLine(c.stats)}`,
      "",
      ...c.challenge,
      "",
      ...c.approach,
      "",
      ...c.results.map((r) => `- ${r}`),
    );
  }

  out.push("", "---", "", `# Articles (${posts.length})`);

  for (const p of [...posts].sort(byDateDesc)) {
    out.push(
      "",
      "---",
      "",
      `# ${p.title}`,
      `URL: ${SITE}/blog/${p.slug}`,
      `Published: ${p.iso}${p.updated ? ` · Updated: ${p.updated}` : ""} · ${p.readMinutes} min read`,
      `Summary: ${p.excerpt}`,
      "",
    );
    if (p.keyTakeaways?.length) {
      out.push("Key takeaways:", ...p.keyTakeaways.map((k) => `- ${k}`), "");
    }
    out.push(htmlToText(p.contentHtml));
    if (p.faqs?.length) {
      out.push("", "## Frequently asked questions");
      for (const f of p.faqs) out.push("", `Q: ${f.q}`, `A: ${f.a}`);
    }
  }

  return out.join("\n") + "\n";
}
