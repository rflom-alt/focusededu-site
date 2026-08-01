# FocusedEDU — SEO & GEO Improvement Plan

Audit date: 2026-07-30. Based on a read of the live repo, not on Search Console data
(see "What I can't see yet" at the bottom).

Inventory: 53 blog posts · 14 service/geo landing pages · 4 case studies · 8 attested
reference letters.

---

## What's already good (don't rebuild these)

These are done and working. Listing them so we don't waste cycles re-solving them:

- **`robots.ts` explicitly allows AI crawlers** — GPTBot, OAI-SearchBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, Amazonbot,
  Meta-ExternalAgent. Most competitors are accidentally blocking these. We're not.
- **`llms.txt` exists and is substantive** — real proof, real numbers, real contact info.
- **Schema graph is real**: Organization (parent FSG + EDU sub-org), WebSite, BlogPosting,
  FAQPage, BreadcrumbList, HowTo, ProfilePage/Person, ProfessionalService, GeoCoordinates.
- **Visible author byline + "Updated" date** on posts (43 of 53 have an `updated` value).
- **Sitemap covers all four content types**; IndexNow fires on every publish.
- **`next/image`** handles image optimization.

The technical floor is above average. The gaps below are about **content leverage and
internal link equity**, not plumbing.

---

## Priority 1 — Fix the internal link graph (highest impact, lowest effort)

### 1.1 The geo landing pages are orphaned
`pennsylvania-education-staffing`, `philadelphia-education-staffing`,
`delaware-education-staffing`, `new-jersey-education-staffing`,
`maryland-special-education-staffing` receive **zero inbound links from all 53 blog posts.**

These are our highest commercial-intent, lowest-competition pages and nothing on the site
points at them. Local intent ("special education staffing agency Philadelphia") is exactly
where a 12-year regional operator beats a national brand.

**Action:** add a geo-relevance pass to the AutoSEO cleaning step — when an article touches
a topic a geo page covers, link it. Also add a "Where we work" module linking all five geo
pages from `/for-schools` and the blog index.

### 1.2 `/references` — our strongest E-E-A-T asset — has zero inbound blog links
Eight letters from named superintendents, principals, and HR directors across NJ, PA, DE,
and CO. That is exactly the third-party validation Google's quality raters and AI answer
engines weight most, and nothing links to it. `/case-studies` gets 3 links; `/our-impact`
gets 0.

**Action:** every article that makes a trust/quality claim should link to `/references` or
`/case-studies` on a natural phrase. Add to the cleaning checklist as a required step, not
an optional one.

### 1.3 Blog-to-blog interlinking is effectively nonexistent
One hub post gets 6 inbound links. The other 52 posts are islands. No topic clusters means
no topical authority signal, and no crawl path between related articles.

**Action:** build 4 topic clusters with a designated pillar page each:
| Cluster | Pillar | Spokes |
|---|---|---|
| Substitute staffing | Definitive Guide to K-12 Teacher Staffing | ~8 posts |
| Special education / SPED | SPED Staffing Solutions | ~10 posts |
| Compliance & credentialing | State of Automated Teacher Credentialing | ~6 posts |
| Vendor selection & cost | School District Staffing Vendor | ~6 posts |

Each spoke links up to its pillar; each pillar links down to 5–8 spokes. This is a
one-time backfill script plus a rule in the pipeline for new posts.

---

## Priority 2 — Make the content citable (this is what GEO actually is)

Answer engines cite **specific, attributable, unique** claims. They do not cite generic
advisory prose. Right now every AutoSEO article is generic advisory prose — which is why
the cleaning step keeps having to strip invented statistics: the generator knows citable
content needs numbers, and it fabricates them because we haven't given it ours.

### 2.1 Inject our real proprietary data into every article
We have numbers no competitor can copy, and they appear almost nowhere in the blog:
- Odyssey Public Charter (Wilmington, DE): 120+ placements, 95% day-to-day sub fill rate,
  40%+ improvement over the prior provider, partner since 2021.
- IDEA Public Charter (Washington, DC): 100% of open certified SPED roles filled, 100%
  retention, filled within two weeks, partner since 2022.
- First Philadelphia Public Charter: 100% retention on certified SPED teachers, filled
  within two weeks, partner since 2021.
- Cesar Chavez Public Charter (DC): four qualified candidates per opening.

**Action:** add a required cleaning step — every article must ground at least one claim in
a named, real FSG outcome with a link to that case study. This simultaneously kills the
fabricated-stat problem and creates the citable hook.

### 2.2 Answer-first formatting
Add a 40–60 word direct-answer paragraph immediately under each H2, before the prose.
That block is what gets lifted into an AI Overview or a Perplexity citation. Cheap to
automate in the cleaning step.

### 2.3 Comparison tables
AI engines disproportionately cite structured comparisons. Several articles already argue
"generalist agency vs. specialized pipeline" in paragraph form — convert those to real
`<table>` markup.

### 2.4 Enrich `BlogPosting` schema
Currently missing: `wordCount`, `articleSection`, `inLanguage`, `about`/`mentions` entity
references, and `citation` for the authority sources articles already link (Wikipedia,
CEEDAR/UF, ASCA, NCES). Adding `citation` is a direct signal of sourced content.

Also: `publisher` on blog posts points to the parent FSG org
(`focused-staffing.com/#organization`) rather than the EDU sub-org
(`focusedu-staffing.com/#organization`) that actually publishes them. Worth deciding
deliberately — right now EDU's content credits the sibling brand as publisher.

### 2.5 Route AI crawlers into the content
`llms.txt` describes the company but lists **no blog content at all**. An engine that
fetches it gets our profile and no path into 53 articles.

**Action:** add a "Key articles" section to `llms.txt` (pillar pages + case studies +
`/references`), and generate an `llms-full.txt` with full article text at build time.
Regenerate both automatically on each publish.

---

## Priority 3 — Control the content pipeline

### 3.1 Cannibalization is accumulating
Current overlap across the 53 titles: 7 posts on recruiting, 4 on shortages, 2 each on
substitutes, paraprofessionals, vacancies, pipelines, social workers, and retention. Left
alone, AutoSEO keeps generating adjacent topics with no awareness of what we've published,
and our own pages start competing with each other.

**Action:** add a pre-staging dedup check — compare each new feed item's target keyword
against published slugs and titles. On a near-match, either skip it or flag it for merging
into the existing post as an update (a refresh with a new `updated` date often outranks a
new thin post anyway).

### 3.2 The pipeline has no feedback loop
We publish one article per run and never measure whether any of it ranks, gets cited, or
converts. We're optimizing blind.

**Action:** add a monthly scheduled task that pulls Search Console data per URL, flags
posts that are impression-rich but click-poor (title/meta rewrite candidates) and posts
decaying over time (refresh candidates), and reports a ranked worklist.

### 3.3 Queue status
9 articles staged and waiting, publishing 1 per run. At the current rate that's ~9 runs of
runway. Worth deciding whether the cadence should increase now that the cleaning step is
doing real fact-checking work.

---

## Priority 4 — Conversion and trust surfaces

- **Reviews.** No `Review` or `AggregateRating` schema anywhere. Eight signed letters is
  the raw material for a legitimate review corpus. Google Business Profile reviews for the
  Wayne, PA location would also feed local pack rankings.
- **Video.** There's a `public/video` directory. Video on key service pages both raises
  dwell time and opens YouTube as a second search surface.
- **A real comparison page.** "FocusedEDU vs. national staffing agencies" targets
  high-intent bottom-funnel search and is exactly the format AI engines cite when someone
  asks an engine to compare vendors.
- **Glossary / definitions hub.** Entity-definition pages (IEP, MTSS, ESY, 1:1 aide,
  emergency certification, Act 48) are cheap to produce, rank for informational long-tail,
  and give AI engines clean entity definitions to attribute to us.

---

## Suggested sequence

| Phase | Work | Effort |
|---|---|---|
| 1 | Internal link backfill: geo pages, `/references`, topic clusters | ~1 session, scripted |
| 2 | Cleaning-checklist upgrade: real-data grounding, answer-first blocks, required trust links | ~1 session |
| 3 | Schema enrichment + `llms.txt` article index + `llms-full.txt` | ~1 session |
| 4 | Dedup guard + Search Console feedback task | ~1 session |
| 5 | Comparison page, glossary hub, review schema | ongoing |

Phases 1–3 are mechanical and I can do them without new input. Phase 4 needs Search
Console API access. Phase 5 needs your input on claims and positioning.

---

## What I can't see yet

This audit is based entirely on the codebase. To prioritize properly I'd need:
- **Search Console** — actual queries, impressions, positions, and which of the 53 posts
  earn anything. Right now we don't know if the AutoSEO content ranks at all.
- **GA4 / HubSpot** — which pages produce discovery calls. If `/for-schools` converts and
  the blog doesn't, the whole content strategy should shift toward the service pages.
- **AI-engine citation checks** — whether ChatGPT, Perplexity, and Google AI Overviews
  currently cite us for "K-12 staffing agency Pennsylvania" and similar. That's the GEO
  baseline and it's measurable manually today.

The single most valuable next input is Search Console access. Everything in Priority 3
depends on it, and it would tell us whether to keep publishing new posts or start
consolidating the 53 we have.
