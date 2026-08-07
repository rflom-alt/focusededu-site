# Content staging — reviewed AutoSEO articles awaiting staggered publication

Each `pending-<feedId>.json` is a fully cleaned, fact-checked article from the
GetAutoSEO pipeline (see the project memory: strip network links, fix wrong-domain
CTAs, native takeaways/FAQs, hero image already in `public/blog/`).

## Publishing
1. Stamp `date` (display, e.g. "Jul 16, 2026") and `iso` (e.g. "2026-07-16"),
   remove the `feedId` field.
2. Insert the object at the TOP of `src/lib/posts-data.json`.
3. Delete the pending file. Build, verify, commit, push.
4. After deploy: IndexNow-ping the new URL (key `13e812b44dda67b964df4b0f8cf574a3`).

See `PIPELINE.md` for the full canonical spec (cleaning checklist, catch-up rules,
verification, IndexNow). The daily scheduled task executes that spec.
