# Content staging — reviewed AutoSEO articles awaiting staggered publication

Each `pending-<feedId>.json` is a fully cleaned, fact-checked article from the
GetAutoSEO pipeline (see the project memory: strip network links, fix wrong-domain
CTAs, native takeaways/FAQs, hero image already in `public/blog/`).

## To publish one
1. Stamp `date` (display, e.g. "Jul 16, 2026") and `iso` (e.g. "2026-07-16"),
   remove the `feedId` field.
2. Insert the object at the TOP of `src/lib/posts-data.json`.
3. Delete the pending file. Build, verify, commit, push.
4. After deploy: IndexNow-ping the new URL (key `13e812b44dda67b964df4b0f8cf574a3`).

## Approved release order (stagger ~3 days apart)
1. pending-2853027 — How to Fill K-12 Teacher Vacancies Quickly
2. pending-2853028 — Paraprofessional Staffing for K-12
3. pending-2853056 — Strategic School District Recruitment Services
