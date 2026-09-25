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

> FocusedEDU is the K–12 education staffing division of Focused Staffing Group, founded by Robert Flom and based in Wayne, Pennsylvania.

## Services
- [Special education](${SITE}/special-education-staffing): Teachers matched to grade level, setting, and caseload.
- [Paraprofessionals](${SITE}/paraprofessional-staffing): Classroom and individual support for your students.
- [Related services](${SITE}/related-services-staffing): Speech-language, occupational, and physical therapy professionals.
- [Substitute teachers](${SITE}/substitute-teacher-staffing): Daily coverage and longer assignments.
- [School-based behavioral support](${SITE}/school-based-behavioral-health-staffing): Professionals for your student support team.
- [School staffing options](${SITE}/k12-education-staffing): Explore roles, engagement models, and regional services.

## How staffing works
Share your role, location, schedule, and required qualifications. Our team recruits and screens candidates, coordinates interviews, and works with your organization on required pre-start documentation. You make the hiring decision.

## Engagement models
Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow the signed agreement. Direct-hire fees are agreed separately. A professional must choose to accept a permanent position.

## Key pages
- Home: ${SITE}/
- Staffing request: ${SITE}/request-staff
- Book a 30-minute staffing call: ${SITE}/book-a-call
- Services: ${SITE}/services
- Resources: ${SITE}/resources
- About: ${SITE}/about
- For professionals: ${SITE}/candidates
- School reference letters: ${SITE}/references
- School partnership case studies: ${SITE}/case-studies

## Local services
- [Pennsylvania](${SITE}/pennsylvania-education-staffing)
- [Philadelphia](${SITE}/philadelphia-education-staffing)
- [New Jersey](${SITE}/new-jersey-education-staffing)
- [Delaware](${SITE}/delaware-education-staffing)
- [Maryland](${SITE}/maryland-special-education-staffing)`;

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
  const pillars = PILLAR_SLUGS.map((s) =>
    posts.find((p) => p.slug === s),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const pillarSet = new Set(PILLAR_SLUGS);
  const rest = [...posts]
    .filter((p) => !pillarSet.has(p.slug))
    .sort(byDateDesc);

  return [
    PROFILE,
    "",
    "## Pillar guides (start here)",
    ...pillars.map(
      (p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt}`,
    ),
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
