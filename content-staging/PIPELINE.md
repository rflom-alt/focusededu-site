# AutoSEO content pipeline — canonical spec

This is the single source of truth for the pipeline. The local scheduled task at
`~/.claude/scheduled-tasks/autoseo-process-and-publish/SKILL.md` is a copy of this file;
if the task ever moves to a cloud routine, the routine prompt should just say
"read content-staging/PIPELINE.md and execute it" so there is only one spec to maintain.
Keep the two in sync when editing.

You maintain the automated blog-content pipeline for FocusedEDU (focusedu-staffing.com). Each run: (A) clean any NEW articles from the GetAutoSEO feed into staging, then (B) publish from the staging queue.

AutoSEO generates exactly one article per day with no gaps. This task is daily, so steady state is one in / one out — but a missed run (machine asleep, failure) used to be lost permanently, because the task only ever published one per run. That is what let the queue reach 13 and left 13 consecutive AutoSEO URLs 404ing, which is what trips their "site disconnected" warning. Part B therefore has CATCH-UP: it drains a backlog instead of holding it.

Repo: /Users/robertflom/Desktop/Focused-Sites (Next.js; pushes to main auto-deploy on Vercel).
Feed: https://getautoseo.com/feeds/60677/vOt9EWeS_LPTbpu_6u0_IR_e2S_LS9HrnvNpEk75_Uk.json (JSON Feed; items have id, url, title, content_html, image, _seo.meta_description).
Staging dir: /Users/robertflom/Desktop/Focused-Sites/content-staging/ (files named pending-<feedId>.json).

== PART A: process new feed items into staging ==
For each feed item: slug = last path segment of its `url`. The item is NEW only if (a) no post with that slug exists in src/lib/posts-data.json AND (b) no content-staging/pending-<id>.json exists for it. For each NEW item, apply this exact cleaning checklist to content_html:
1. Remove the leading <figure class="autoseo-hero-image">…</figure> and any <figure class="autoseo-infographic">…</figure> blocks.
2. Remove the <div class="key-takeaways">…</div> block, first extracting its bullets (plain text) as a keyTakeaways array (keep 3-5 best).
3. Remove the table-of-contents block (site auto-builds its ToC). Covers BOTH shapes: <div class="table-of-contents">…</div> AND a bare <h2 id="table-of-contents">…</h2> followed by its <ul>…</ul>. Same for a bare <h2 id="key-takeaways"> + <ul> if the div form is absent.
4. Remove the trailing "Frequently Asked Questions" h2 section, first extracting Q/A pairs (plain text) as a faqs array of {q,a} (keep 4-6 best, drop self-promotional ones).
5. Unwrap <a class="autoseo-heading-anchor">…</a> inside h2/h3 (keep heading text and the h2 id attributes).
6. Rewrite ALL self-referencing links (any href containing focusededu-staffing.com — note the extra "ed", a wrong domain — or focusedu-staffing.com) to internal paths by CTA meaning: booking/strategy-session → "/book-a-call"; pipeline/services/how-we-work → "/for-schools"; roles/talent → "/services". Plain relative hrefs.
7. KEEP AutoSEO's partner backlinks — do NOT strip them (policy set by Robert 2026-08-03; the exchange is reciprocal and inbound referring domains are the goal). Keep authority citations too. Only cleanup allowed: shorten keyword-stuffed anchors to a natural 2-5 word phrase. If an insertion is badly off-brand for a K-12 district audience, keep the link but flag it in the run report rather than deleting it.
8. Fact-check: soften suspiciously precise unverifiable stats (exact national counts → approximations like "hundreds of thousands"); never invent stats. Keep claims consistent with FSG's real facts ONLY: founded by former K-12 teacher Robert Flom; 12 years experience; one-client-per-region exclusivity; automated credentialing cuts hiring time roughly in half; temp-to-perm at no cost; Odyssey case study (120+ placements, 95% sub fill, +40% improvement). Tone down absolute promises. Also strip any invented/fabricated case studies with named clients or quotes NOT in FSG's real fact base — rewrite onto real facts or remove.
9. Add 1-3 contextual internal links on existing natural phrases where genuinely relevant: /special-education-staffing, /paraprofessional-staffing, /substitute-teacher-staffing, /related-services-staffing, /k12-education-staffing, /school-district-staffing-vendor, /education-staffing-rfp-experience, /education-staffing-agency-cost, /case-studies, /references. No duplicate hrefs within a post.
10. REQUIRED — ground the article in real proof. Every article must cite at least one named FSG outcome with a link to that case study. Pick the one that fits the topic and write a SELF-CONTAINED sentence (never "that approach…", which breaks if the preceding sentence sets up a contrast). Attested facts, use verbatim numbers only:
   · /case-studies/odyssey-charter-school — Odyssey Public Charter School, Wilmington DE, partner since 2021: 120+ placements, 13+ distinct role types, 95% day-to-day substitute fill rate, 40%+ improvement over previous provider. Use for substitute, paraprofessional, related-services, whole-school topics.
   · /case-studies/idea-public-charter-school — IDEA Public Charter School, Washington DC, since 2022: 100% of certified SPED roles filled, 100% retention, two weeks request-to-filled. Use for SPED and retention topics.
   · /case-studies/first-philadelphia-public-charter-school — First Philadelphia Public Charter School, PA, since 2021: 100% SPED roles filled, 100% retention, two weeks. Alternate with IDEA so links spread.
   · /case-studies/cesar-chavez-public-charter-school — Cesar Chavez Public Charter School, DC, since 2022: average four qualified candidates per opening. Use for vetting/screening topics ONLY — not for DEI, equity, or culture-fit posts, where it reads as a non-sequitur.
11. REQUIRED — answer-first blocks. Immediately under each h2, insert a 40-60 word direct answer as <p class="answer-lead">…</p>, before the existing prose. Self-contained, factual, no marketing voice — this is the passage an AI Overview or Perplexity citation lifts. Do not add one under the closing CTA h2.
12. If the article argues a comparison (generalist vs specialist, manual vs automated, in-house vs partner) in paragraph form, also emit a "comparison" object: {"title", "columns": [rowLabel, colA, colB], "rows": [[label, a, b], …]} with 4-6 rows. The site renders it as a real table; AI engines cite structured comparisons disproportionately.
13. Download the item's `image` to public/blog/<slug>.jpg, then downscale to max 1600px wide, JPEG quality 80. Must end under 500KB. On macOS: `sips -Z 1600 -s format jpeg -s formatOptions 80 <file>`. On Linux (e.g. a cloud runner, where sips does not exist): use `npx --yes sharp-cli` or ImageMagick to the same spec — check `uname` first rather than assuming sips is present.
Write content-staging/pending-<feedId>.json: {"feedId": <id>, "slug", "title", "category": "Insights", "readMinutes": round(words/220), "excerpt": <_seo.meta_description, complete any trailing …>, "img": "/blog/<slug>.jpg", "keyTakeaways": [...], "faqs": [...], "comparison": {…} (omit if not applicable), "contentHtml": "<cleaned html>"}. Verify: no "autoseo" or wrong-domain strings remain in contentHtml; at least one /case-studies/<slug> link present; every h2 except the closing CTA has an answer-lead paragraph.

== PART B: publish (1 normally, up to 3 when catching up) ==
Count the pending-*.json files AFTER Part A finishes; call that Q. If Q is 0, commit any Part A staging work and stop.

HOW MANY TO PUBLISH THIS RUN:
· Q > 2  → publish 3 (catch-up mode; drains the backlog at net −2/day against AutoSEO's +1/day)
· Q ≤ 2  → publish 1 (steady state; a 1-2 article buffer is intentional, don't drain it to zero)
Never publish more than 3 in a single run — a larger dump looks like content spam and Vercel/Google both notice.

Publish in ascending feedId order (oldest first). All articles published in the same run share the same date. Do steps 1-2 for EVERY article being published this run, then do steps 3-6 ONCE for the whole batch.

1. DETERMINE TODAY'S DATE FROM THE SYSTEM CLOCK — never guess or hardcode it. Run these two shell commands and use their exact stdout: `date "+%b %-d, %Y"` for the `date` field (e.g. "Jul 15, 2026") and `date "+%Y-%m-%d"` for the `iso` field (e.g. "2026-07-15"). The iso must NOT be in the future. Remove the pending object's "feedId" field and set its "date" and "iso" to those command outputs.
2. Insert the object at the TOP of the array in src/lib/posts-data.json; delete the pending file. When publishing several, insert them so the LOWEST feedId ends up nearest the top is NOT required — just keep them contiguous at the top in ascending feedId order.
3. Run `pnpm build`. If it fails: git checkout -- src/lib/posts-data.json, restore ALL pending files removed this run, commit only Part A work, and report the failure. Do NOT push a broken build.
4. Commit all changes and push to main. For one article: "Publish: <title> (AutoSEO pipeline)". For a batch: "Publish <n> articles (AutoSEO pipeline catch-up)" with the titles listed in the body. End the message with "Co-Authored-By: Claude <noreply@anthropic.com>".
5. Verify live — local DNS for this domain is unreliable, use forced IP: poll `curl -s -o /dev/null -w "%{http_code}" --resolve www.focusedu-staffing.com:443:216.198.79.1 https://www.focusedu-staffing.com/blog/<slug>` every ~20s up to 5 min for HTTP 200. Check EVERY slug published this run. If any never reaches 200, push one empty retrigger commit ("Retrigger Vercel deploy") and poll again up to 5 min.
6. Ping IndexNow ONCE for the batch: POST to https://api.indexnow.org/indexnow with a JSON body where host is "www.focusedu-staffing.com", key is "13e812b44dda67b964df4b0f8cf574a3", keyLocation is "https://www.focusedu-staffing.com/13e812b44dda67b964df4b0f8cf574a3.txt", and urlList is every published URL this run. Expect HTTP 200 or 202.

== PART C: AutoSEO connection health ==
After publishing, check how many feed item URLs are still missing from the live site: for each feed item, curl its slug at https://www.focusedu-staffing.com/blog/<slug> and count non-200s. This is the number AutoSEO's own check sees. Report it. If it is still above 3 after a catch-up run, say so explicitly — the "disconnected" warning will persist until it comes down.

Report: which articles were newly staged, which were published (live URLs + commit hash), the remaining queue depth Q, and the Part C missing-URL count. If the feed is unreachable, report that and stop gracefully.