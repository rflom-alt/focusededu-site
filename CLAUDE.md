# Focused Staffing Group — Website Rebuild Brief

Context for building two sibling marketing sites. Read this fully before scaffolding.

## Goal
Rebuild both Focused Staffing Group marketing sites as modern, high-end, mission-driven
"premium workforce partner" sites — NOT generic staffing-agency templates. Reproduce the
quality level of the reference sites below. Build with **real photography and real components**
— never unicode-character icons, never gray placeholder boxes. Render the page, screenshot it,
and critique it against the references before showing the client. Iterate against what's on screen.

Build **FocusedEDU (K-12) first**, then the Behavioral sibling on the same design system.
(Behavioral is the revenue priority; EDU is built first only because it has the richest proof to
showcase the system. Confirm order with client.)

## The two brands / sites
- **FocusedEDU — K-12 education staffing.** Live: https://www.focusedu-staffing.com — tagline "Our focus begins with you."
- **Focused Behavioral — behavioral health staffing.** Live: https://www.focused-staffing.com — tagline "One Focus: Your Next Hire."

Re-pull the real copy, testimonials, and client logos from those two URLs. Pull reusable assets
(logo, client logos, graphics) directly from the live sites; source licensed photography where the
sites lack real people/classroom photos (they do).

## Reference sites (match this quality bar)
- **Apple AirPods Pro** (apple.com/airpods-pro) — luxury product page. Take: massive whitespace, large type scale, scroll-told narrative, photographic/dimensional hero, restrained palette, disciplined motion.
- **Phenom** (phenom.com) — enterprise talent-tech. Take: confident hero, video, recognizable-client logo wall, a results/stat band, heavy but clean social proof, enterprise credibility.
- **Kriss.ai** (kriss.ai) — sleek modern AI product. Take: contemporary sleekness, clean UI surfaces.
- **Mindmarket** (mindmarket.com) — review live in-session; client listed it as a like.

## Positioning (use this, not "we recruit staff")
Premium, mission-driven workforce partner. Lead with the genuinely unique differentiators:
- **One client per region.** A dedicated, exclusive talent pipeline — never shared with a competing school/org. (Strongest differentiator.)
- **Founder is a former K-12 teacher** (Robert Flom). Built by an educator, not recruiters who fell into the space. Core credibility anchor for EDU.
- **Automated credentialing cuts hiring time in half.**
- **Temp-to-perm at no cost** — evaluate a professional before committing.
- **12 years** of experience.
- **Community mission:** school-supply & backpack donation drives. Must be a real, prominent section ("Focused on Community" / "Our Impact") — not a footer line.

## Real proof to use (verbatim where it's the client's own content)
**EDU clients:** Christina School District, Charlotte-Mecklenburg Schools, Leadership Public Schools,
Chester Community Charter, Chambersburg Area SD, Carmen Schools of Science & Tech, Odyssey Charter,
Breakthrough Public Schools, First PA, TRECA.
**Behavioral clients:** Keystone Human Services, Merakey, Charlotte-Mecklenburg Schools, Prestige Healthcare, Pathways in Education.

**EDU testimonials (real, from live site):**
- Erin D. Murphy-Richardson, Superintendent — Barack Obama Green Public Schools
- David Weathington, MSW, LSW, Ed.D, CEO — Buttonwood Farms / Delta School
- Elias Pappas, CEO — Delaware Public School District
- Zavia Herring, Director of HR — Renaissance Academy Charter School

**Behavioral testimonial:** HR, Dunwoody Village.

> NOTE: Treat every stat as needing client validation before publishing. Don't invent numbers.

## Brand guidelines (2022 — elevate, don't copy literally)
**Logo:** "FSG" wordmark with a reaching figure inside the G. Navy + teal/green. Use the client's real
logo files (pull from site or client upload). Don't redraw the trademark.
**Primary palette:** #040cfb (blue), #24cb8c (teal-green), #010a8b (navy), #ebf3f3 (light).
**Secondary (confetti):** #fcdc34, #edcad9, #e6333a, #ea6948, #009490, #8872d8, #4272b7.
**Type (original):** Raleway (headings), Poppins (subheads/body).

## Design direction — STARTING HYPOTHESIS, not locked (v1 was rejected as too generic)
- Anchor on the deep **navy**; use **teal/green** as the single primary accent.
- **Retire the confetti secondary palette** from the UI (reads "playful K-12 vendor," not premium).
- Reserve **one warm accent** (a gold) exclusively for the community/impact section, so the business
  reads cool/enterprise and the mission section reads human.
- **Elevate the typography** beyond Raleway/Poppins; choose the final pairing by benchmarking against
  the reference sites in a render-and-critique loop. Avoid known AI-default looks (cream + serif +
  terracotta; near-black + single acid accent).
- Real SVG icon set, real photography, real motion discipline. No unicode icons. No placeholder boxes.

## Motion & interaction references (the "high-end feel")
Static fetches show none of the scroll/click motion. Before building animation, study the live
sites and capture what you learn to a durable file (see workflow below) — don't rely on session memory.

**Per-site effects to study and reproduce:**
- **Apple AirPods Pro** — sticky/pinned hero, scroll-*scrubbed* transitions (animation tied to scroll
  position, not just on-enter), large-scale parallax, smooth inertia scroll. → GSAP ScrollTrigger
  (pinning + scrubbed timelines) + Lenis (smooth scroll).
- **Phenom** — stat-band count-ups on scroll-in, logo-wall marquee, section fade/rise reveals, video hero.
  → Framer Motion (whileInView reveals + count-ups) or GSAP; Lenis optional.
- **Kriss.ai** — hover micro-interactions, clean state transitions, ambient/gradient motion.
  → Framer Motion + CSS transitions.
- **Mindmarket** — review live, document, add to notes.

**Default motion stack for the build:** Next.js + Framer Motion (component/in-view animation) +
GSAP ScrollTrigger (scroll-scrubbed/pinned sequences) + Lenis (smooth scroll). Always respect
`prefers-reduced-motion`. Spend the boldness on one or two signature moments; keep the rest quiet.

**Browse-and-capture workflow (so this session keeps what it learns):**
1. Enable Chrome in this session: run `/chrome` (Claude in Chrome extension must be installed + connector on).
2. Open each reference site, scroll/click through it, read the source and console to see which library drives each effect.
3. Write findings to `MOTION-NOTES.md` in the repo — one entry per effect: { effect, what triggers it, easing/timing feel, library to reproduce }. This file is the durable record; build from it.
4. Build motion referencing `MOTION-NOTES.md`.
5. Verify: open the local dev server in Chrome, scroll the built site, compare against `MOTION-NOTES.md`, and tune easing/timing until it matches. Repeat per section.

## Build plan
1. Scaffold **Next.js** (shared design system / component library across both brands).
2. Build EDU homepage → run dev server → screenshot → self-critique vs references → fix → then review with client.
3. Build Behavioral homepage on the same system.
4. Core pages after home: About, For Schools/Organizations, For Job Seekers, Services, Our Impact, Careers/Jobs, Contact.
5. Later: Career Hub + application flow connecting to VerifAI.
6. Deploy to **Vercel**. (Goal: free the marketing sites from Floot; keep VerifAI's app decision separate.)

## Contact / conversion
- Calendly discovery call: https://calendly.com/rflomfsg/30mindiscovery
- Email: hello@focused-staffing.com · Phone: (484) 482-8223
- Address: 175 Strafford Avenue, Suite One #208, Wayne, PA 19087
- Reconcile all CTA wording against the client's approved_ctas list before publishing.
