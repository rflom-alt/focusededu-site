/**
 * Blog posts migrated from the legacy WordPress site via its REST API.
 * Content + metadata live in posts-data.json (generated); each renders as a
 * native article page at /blog/[slug]. Brand names normalized to "FocusedEDU".
 */
import data from "./posts-data.json";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string; // SEO <title> override when title+suffix exceeds 60 chars
  date: string; // display, e.g. "Jun 9, 2025"
  iso: string; // sortable
  category: string;
  readMinutes: number;
  excerpt: string;
  img: string;
  contentHtml: string;
  updated?: string; // display date, e.g. "Jun 26, 2026"
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
  comparison?: { title: string; columns: string[]; rows: string[][] };
  howto?: boolean; // step-structured guide → emit HowTo schema
};

export const posts: BlogPost[] = data as BlogPost[];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/**
 * Topic tags used to decide which posts are genuinely related. Deliberately the
 * same vocabulary as the schema `about` taxonomy in article-meta.ts — one set of
 * topics for the whole site rather than two that drift apart.
 */
const RELATED_TOPICS: { tag: string; match: RegExp }[] = [
  { tag: "sped", match: /special education|sped\b|IEP\b/i },
  { tag: "substitute", match: /substitute teacher|substitute teaching|instructional continuity/i },
  { tag: "para", match: /paraprofessional|one-on-one aide|1:1 aide/i },
  { tag: "aba", match: /applied behavior analysis|\bBCBA\b|\bRBT\b|behavior analyst/i },
  { tag: "shortage", match: /teacher shortage|teacher retention|teacher vacanc/i },
  { tag: "credentialing", match: /credential|certification|clearance|background check/i },
  { tag: "related-services", match: /speech[- ]language patholog|occupational therap|physical therap|related service/i },
  { tag: "mental-health", match: /school psycholog|school counselor|social worker|mental health/i },
  { tag: "vendor", match: /staffing agenc|staffing partner|recruitment firm|\bRFP\b|bill rate|vendor/i },
  { tag: "cost", match: /cost|budget|fee|pricing|markup/i },
];

/**
 * Topic tags for a post, weighted by *where* the topic appears.
 *
 * Body text is a poor relatedness signal on this corpus: every article recites
 * the same role list and value props, so "credentialing" matches 63 of 79 posts
 * and "cost" 67. Matching on the body alone makes everything related to
 * everything. A topic named in the title is what the post is actually about, so
 * title hits carry four times the weight of a passing body mention.
 */
function topicTags(p: BlogPost): Map<string, number> {
  const title = `${p.title} ${p.slug.replace(/-/g, " ")}`;
  const body = p.contentHtml.replace(/<[^>]+>/g, " ");
  const tags = new Map<string, number>();
  for (const t of RELATED_TOPICS) {
    if (t.match.test(title)) tags.set(t.tag, 1);
    else if (t.match.test(body)) tags.set(t.tag, 0.25);
  }
  return tags;
}

// Computed once per build, not per page: tags for every post, plus how many
// in-body links each post already receives from the rest of the corpus.
const TAGS_BY_SLUG = new Map(posts.map((p) => [p.slug, topicTags(p)]));

/**
 * Inverse document frequency per tag. Without this, broad tags ("cost",
 * "credentialing") match nearly every post and drown out the specific ones —
 * a BCBA article ends up recommending a cost guide because they both mention
 * budgets. Weighting by rarity makes one shared "aba" outrank three shared
 * generics, which is what a reader actually means by "related".
 */
const TAG_WEIGHT = (() => {
  const df = new Map<string, number>();
  for (const tags of TAGS_BY_SLUG.values()) {
    // Frequency of the topic as a *subject* (title hit), which is what makes a
    // tag discriminating; passing body mentions would flatten every weight.
    for (const [t, w] of tags) if (w === 1) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const weights = new Map<string, number>();
  for (const { tag } of RELATED_TOPICS) {
    weights.set(tag, Math.log(posts.length / Math.max(1, df.get(tag) ?? 1)));
  }
  return weights;
})();

const BODY_INBOUND = (() => {
  const counts = new Map<string, number>(posts.map((p) => [p.slug, 0]));
  for (const p of posts) {
    const seen = new Set<string>();
    for (const m of p.contentHtml.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)) {
      if (m[1] === p.slug || seen.has(m[1])) continue;
      seen.add(m[1]);
      counts.set(m[1], (counts.get(m[1]) ?? 0) + 1);
    }
  }
  return counts;
})();

/**
 * Related posts for the "Keep reading" module.
 *
 * Ranked by shared topic rather than recency. The previous implementation took
 * the first three same-category posts from a reverse-chronological array, which
 * always resolved to "the three newest posts" — identical on every page, and it
 * left 70% of the corpus with no inbound internal link at all. Scoring:
 *
 *   + IDF weight per shared topic tag — the relatedness signal, rare tags first
 *   + 0.3 same category               — weak tie-breaker, not the primary axis
 *   + 1.0 fewer than two in-body inbound links — steers equity toward orphans so
 *                                       new posts get linked, not only link out
 *
 * The orphan boost is deliberately smaller than a single rare shared tag: it
 * decides between comparably related posts, it never promotes an unrelated one.
 *
 * Scoring alone still concentrated links: a handful of posts carry many topics,
 * so they win the comparison on nearly every page and the long tail stays at
 * zero. The assignment pass below therefore charges a rising toll each time a
 * post is recommended, which spreads the 237 available link slots across the
 * corpus instead of stacking them on six hubs.
 */
const RELATED_LIMIT = 3;

/** Per-topic relatedness between two posts, before any usage penalty. */
function affinity(a: BlogPost, b: BlogPost): number {
  const mine = TAGS_BY_SLUG.get(a.slug) ?? new Map<string, number>();
  const theirs = TAGS_BY_SLUG.get(b.slug) ?? new Map<string, number>();
  let weighted = 0;
  for (const [t, myW] of mine) {
    const theirW = theirs.get(t);
    if (!theirW) continue;
    // Both sides must treat the topic as a subject for the pair to score
    // highly; body-mention × body-mention contributes almost nothing.
    weighted += myW * theirW * (TAG_WEIGHT.get(t) ?? 0);
  }
  return weighted + (a.category === b.category ? 0.3 : 0);
}

const RELATED_BY_SLUG = (() => {
  const result = new Map<string, BlogPost[]>();
  // How many times each post has been handed out as a recommendation so far.
  const used = new Map<string, number>(posts.map((p) => [p.slug, 0]));
  // Stable iteration order so the static build is reproducible.
  const order = [...posts].sort((a, b) => a.slug.localeCompare(b.slug));

  for (const post of order) {
    const picks = [...posts]
      .filter((p) => p.slug !== post.slug)
      .map((p) => {
        const base = affinity(post, p);
        if (base <= 0) return null;
        const orphanBoost = (BODY_INBOUND.get(p.slug) ?? 0) < 2 ? 1 : 0;
        // Each prior use costs the candidate; a genuinely on-topic post can
        // still win several times, but not eighty.
        const toll = (used.get(p.slug) ?? 0) * 0.6;
        return { post: p, score: base + orphanBoost - toll };
      })
      .filter((c): c is { post: BlogPost; score: number } => c !== null)
      .sort(
        (a, b) =>
          b.score - a.score ||
          b.post.iso.localeCompare(a.post.iso) ||
          a.post.slug.localeCompare(b.post.slug),
      )
      .slice(0, RELATED_LIMIT);

    for (const c of picks) used.set(c.post.slug, (used.get(c.post.slug) ?? 0) + 1);
    result.set(
      post.slug,
      picks.map((c) => c.post),
    );
  }
  return result;
})();

export function relatedPosts(post: BlogPost, limit = RELATED_LIMIT): BlogPost[] {
  return (RELATED_BY_SLUG.get(post.slug) ?? []).slice(0, limit);
}

/** Display label for a post's category (legacy "Blog"/"Article" → "Insights"). */
export function categoryLabel(category: string) {
  return category === "Blog" || category === "Article" ? "Insights" : category;
}
