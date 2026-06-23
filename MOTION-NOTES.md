# MOTION-NOTES.md

Durable record of how the reference sites achieve their "high-end feel," so the build
references real findings instead of session memory. Per `CLAUDE.md` §"Motion & interaction
references."

**Method:** Inspected live in Chrome (Claude-in-Chrome extension, connected) on 2026-06-22 —
read `window` globals, CSS-module class names, computed `transition`/`transform`, `@keyframes`,
network bundles, and captured scroll screenshots mid-animation.

**Legend:** ✅ live-inspected in this session · ⚠️ not live-inspected (see note).

---

## 1. Phenom — phenom.com ✅ LIVE-INSPECTED

**Framework:** Next.js / React, CSS Modules (hashed class names like
`TextAppearance_TextAppearance__Uxx7F`).
**Scroll:** **native** — `html { scroll-behavior: auto }`. **No smooth-scroll library** (no Lenis).
**Animation libraries:** **None of GSAP / ScrollTrigger / Framer Motion / Lenis / AOS.** Only
jQuery 3.6 present (legacy utility, not driving the motion). Motion is **CSS + IntersectionObserver**.

### Effects observed
| # | Effect | What triggers it | Timing / feel | How it's built | Reproduce with |
|---|--------|------------------|---------------|----------------|----------------|
| 1 | **Text/section reveal** (`TextAppearance`) | IntersectionObserver adds a `_visible` modifier class when the element scrolls into view | `transition: opacity 1s`, **pure opacity fade, NO translate**, fires once. Slow, calm, confident. | CSS opacity 0→1 toggled by IO | Framer Motion `whileInView` opacity 0→1, `duration ≈ 0.8–1s`, once; or IO + CSS |
| 2 | **Logo wall marquee** (`BrandsTape_Ticker`) | Always-on (not scroll-tied) | Continuous, seamless horizontal loop; ~120 duplicated logo items | CSS `@keyframes` translateX infinite loop | CSS keyframes marquee (`translateX(-50%)` loop), optional pause-on-hover |
| 3 | **Hero keyword gradient** | On load | Subtle multi-color gradient applied per-letter to keywords ("AI", "Applied") | per-letter `<span>` + gradient text; `TextFx_dash` SVG stroke `@keyframes` for line-draw accents | CSS `background-clip:text` gradient; SVG `stroke-dashoffset` keyframe |
| 4 | **Sticky nav** | Scroll | Nav stays pinned; 17 sticky/fixed els total (nav, chat widget, CTAs) | `position: sticky/fixed` | CSS sticky + class toggle on scroll |

**Not present:** no pinned/scroll-scrubbed sequences, no parallax, **no stat count-ups** on the
current homepage (the brief anticipated count-ups — current site uses static stats + reveals).

**Takeaway:** Phenom's enterprise-premium feel = **restraint**. Big type + heavy whitespace +
slow ~1s opacity reveals + one continuous logo marquee. Lightweight, fast, high perceived quality.
No heavy scroll libraries at all.

---

## 2. Apple — apple.com/airpods-pro ⚠️ NOT LIVE-INSPECTED

**Why:** `apple.com` is **blocked by this environment's browser tool**
("Navigation to this domain is not allowed"). The Chrome extension is connected and working
(Phenom inspected fine) — only the Apple domain is disallowed. The notes below are the **target
pattern** drawn from `CLAUDE.md` §motion and Apple's well-documented marketing-page architecture,
**not a live capture** — flagged so we don't treat it as verified. Recommend live-verifying the
pattern on an accessible GSAP+Lenis reference before building the signature scene (see §3).

### Effects (target pattern, to verify)
| # | Effect | Feel | How Apple builds it | Reproduce with |
|---|--------|------|---------------------|----------------|
| 1 | **Pinned section** | A visual holds fixed on screen while copy/states advance | Sticky/pinned stage + scroll-tied state machine | **GSAP ScrollTrigger** `pin: true` |
| 2 | **Scroll-SCRUBBED media** | Animation tied to **scroll position**, not just on-enter; reverses as you scroll back | `<canvas>` image-sequence (hundreds of frames) OR a `<video>` whose `currentTime` maps to scroll progress | **GSAP ScrollTrigger** `scrub: true` driving frame/`currentTime`; or Framer `useScroll`+`useTransform` |
| 3 | **Large-scale parallax / dimensional hero** | Layers move at different rates; product feels physical | Transform on layers vs scroll | GSAP/Framer scroll-linked transforms |
| 4 | **Smooth inertia scroll** | Weighty, glassy momentum | Custom smooth-scroll | **Lenis** |

**Takeaway:** Apple spends boldness on **one or two scroll-scrubbed/pinned signature moments**
and keeps everything else quiet — the opposite end of the dial from Phenom's pure restraint.

---

## 3. Synthesis → FocusedEDU motion system (proposed)

Two poles: **Phenom = restraint** (CSS + IO reveals, a marquee) vs **Apple = one bold
scrubbed/pinned signature** + smooth inertia. A staffing site must read premium **and** credible
**and** load fast, so: **Phenom-restraint for ~90%, spend ONE Apple-style signature moment.**

**Recommended stack (matches `CLAUDE.md` default):**
- **Lenis** — site-wide smooth inertia scroll. Single biggest "feel" upgrade; gives the Apple weight without per-section work.
- **Framer Motion** — in-view reveals (opacity + small translateY), staggers, hover micro-interactions. The Phenom-style calm reveals (~0.7–1s, ease-out).
- **GSAP + ScrollTrigger** — reserved for **one** signature scene (candidate: a pinned hero, or a scrubbed "one client per region" / community moment). Pin + scrub. Omit if we want maximum restraint.
- **CSS keyframes** — logo-wall marquee (Phenom `BrandsTape` pattern).
- **`prefers-reduced-motion`** respected everywhere (disable scrub/marquee/translate; keep static).

**Verification loop (per `CLAUDE.md`):** build → open local dev in Chrome → scroll → compare
against this file → tune easing/timing per section.

---

## 4. GSAP ScrollTrigger + Lenis — canonical config ⚠️ FROM OFFICIAL DOCS (references blocked)

**Browser-allowlist note (2026-06-22):** In this environment the Chrome tool blocks `apple.com`,
`gsap.com`, the Lenis demo, Codrops, CodePen, Stripe, and even `focused-staffing.com` — **only
`phenom.com` was reachable.** Live-verification of the Apple-style scrubbed/pinned pattern was
therefore not possible. The values below are the **canonical, production-correct defaults from the
Lenis and GSAP ScrollTrigger libraries** — what a live showcase would mostly just re-derive.

### Lenis — smooth inertia scroll (the Apple "weight")
```js
const lenis = new Lenis({
  lerp: 0.1,                 // default; lower = heavier glide
  // or: duration: 1.2, easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)) // easeOutExpo
  smoothWheel: true,
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
```
- **GSAP integration (so ScrollTrigger reads Lenis scroll):**
  ```js
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
- **Reduced motion:** do **not** init Lenis — fall back to native scroll.
- **Next.js App Router:** init inside a client provider in `useEffect`; destroy on unmount.

### GSAP ScrollTrigger — the one pin+scrub signature scene
```js
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  scrollTrigger: {
    trigger: sectionEl,
    start: 'top top',
    end: '+=1200',   // pin distance = how long the scene scrubs
    pin: true,
    scrub: 1,        // 1s smoothing; feels premium. (scrub:true = locked 1:1)
  },
}).to(/* step 1 */).to(/* step 2 */);
```
- **`scrub: 1`** (smoothed) over `scrub: true` for the high-end feel; let the scrub own easing, keep per-tween eases linear.
- **`pin: true`** holds the section fixed while the timeline plays across `end`.
- **Reduced motion:** wrap in `gsap.matchMedia('(prefers-reduced-motion: no-preference)', () => { ... })` so the scrubbed scene only runs when allowed; otherwise render the final state static.
- **Load cost:** import GSAP + ScrollTrigger only on the page that uses the signature scene (dynamic import) to keep the rest light.

**Feel target (Apple-like):** long pin distance, `scrub: 1`, exactly **one** hero/product moment —
everything else stays Phenom-restrained.
