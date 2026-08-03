/**
 * Derived article metadata for BlogPosting schema — word count, citations, and
 * topic entities. Answer engines weight sourced, entity-anchored content, so
 * these are computed from the article body rather than hand-maintained.
 */

/**
 * Hosts whose links count as a genuine research/authority citation.
 * Deliberately an allowlist: article bodies also carry AutoSEO partner
 * backlinks, and presenting those as `citation` would misrepresent them as
 * sources. Any `.gov` or `.edu` host qualifies automatically.
 */
const AUTHORITY_HOSTS = [
  "wikipedia.org",
  "bacb.com",
  "exceptionalchildren.org",
  "schoolcounselor.org",
  "learningpolicyinstitute.org",
  "edweek.org",
  "edresearchforaction.org",
  "nasponline.org",
  "asha.org",
  "tasb.org",
  "aota.org",
  "apa.org",
  // Established news outlets — a local paper or broadcaster is a legitimate
  // source for a claim about a specific district.
  "kfyrtv.com",
  "bismarcktribune.com",
  "kxnet.com",
];

function isAuthority(href: string): boolean {
  let host: string;
  try {
    host = new URL(href).hostname.toLowerCase();
  } catch {
    return false;
  }
  if (host.endsWith(".gov") || host.endsWith(".edu")) return true;
  return AUTHORITY_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
}

/** Unique authority URLs an article links, in document order. */
export function extractCitations(html: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    const href = m[1];
    if (seen.has(href) || !isAuthority(href)) continue;
    seen.add(href);
    out.push(href);
  }
  return out;
}

export function wordCount(html: string): number {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ")
    .trim();
  return text ? text.split(/\s+/).length : 0;
}

/** Topic entities the article covers, for schema `about`. */
const TOPICS: { match: RegExp; name: string; sameAs?: string }[] = [
  {
    match: /special education|sped\b|IEP\b/i,
    name: "Special education",
    sameAs: "https://en.wikipedia.org/wiki/Special_education",
  },
  {
    match: /substitute teacher|substitute teaching/i,
    name: "Substitute teacher",
    sameAs: "https://en.wikipedia.org/wiki/Substitute_teacher",
  },
  {
    match: /paraprofessional|one-on-one aide|1:1 aide/i,
    name: "Paraprofessional educator",
    sameAs: "https://en.wikipedia.org/wiki/Paraprofessional_educator",
  },
  {
    match: /applied behavior analysis|\bBCBA\b|\bRBT\b|behavior analyst/i,
    name: "Applied behavior analysis",
    sameAs: "https://en.wikipedia.org/wiki/Applied_behavior_analysis",
  },
  {
    match: /teacher shortage|teacher retention|teacher vacanc/i,
    name: "Teacher retention",
    sameAs: "https://en.wikipedia.org/wiki/Teacher_retention",
  },
  {
    match: /credential|certification|clearance|background check/i,
    name: "Teacher certification",
    sameAs: "https://en.wikipedia.org/wiki/Teacher_education",
  },
  {
    match: /speech[- ]language patholog|occupational therap|physical therap|related service/i,
    name: "Related services",
    sameAs: "https://en.wikipedia.org/wiki/Speech-language_pathology",
  },
  {
    match: /school psycholog|school counselor|social worker|mental health/i,
    name: "School-based mental health",
    sameAs: "https://en.wikipedia.org/wiki/School_psychology",
  },
];

export function extractTopics(html: string, title: string) {
  const hay = `${title} ${html.replace(/<[^>]+>/g, " ")}`;
  return TOPICS.filter((t) => t.match.test(hay))
    .slice(0, 4)
    .map((t) => ({ "@type": "Thing", name: t.name, ...(t.sameAs ? { sameAs: t.sameAs } : {}) }));
}
