# Asset Manifest — FocusedEDU

Tracks every non-code asset, its source, license, and whether it must be replaced
before public launch. Per CLAUDE.md: photography here is **royalty-free commercial-use
placeholder** quality — swap for a licensed library or a real branded shoot when budget allows.

## Brand logos — REAL (pulled from live site, client-owned)
| File | Source | Notes |
|---|---|---|
| `public/logos/focusededu-white.png` | live site `/wp-content/uploads/2023/12/` | Official FocusedEDU wordmark (white). Client trademark — do not redraw. |

## Client logos — REAL (pulled from live site)
`public/clients/*.png` — Christina School District, Leadership Public School,
Charlotte-Mecklenburg Schools, Chester Community Charter, Chambersburg Area SD,
Carmen Schools of Science & Tech, Odyssey Charter, Breakthrough Public School,
First PA, TRECA. Source: live site `/wp-content/uploads/2024/10/`.
**Action:** confirm with client that each is approved for display.

## Booking page media — REAL (client-supplied / pulled from live site)
| File | Source | Notes |
|---|---|---|
| `public/video/founder-message.mp4` | Client upload (`Normal-Landing-Page-VideoLow.mp4`) | Founder Rob message. Re-encoded 50MB → 6.5MB, 960×540, H.264 +faststart. Served with `preload="none"`. |
| `public/video/founder-poster.jpg` | Frame @2s of the video | Video poster (Rob in FSG polo). |
| `public/testimonials/*.png` | live site `/wp-content/uploads/2025/06/` | Real testimonial cards (face + org logo + 5 stars): Erin Murphy-Richardson, Elias Pappas, David Weathington, Zavia Herring. |

**Scheduler:** the discovery-call booking uses the client's **HubSpot Meetings** link
(`meetings.hubspot.com/robert-flom/...`), embedded inline on `/book-a-call`. The old Calendly
link from the brief was dead (HubSpot replaced it). Stored as `edu.contact.scheduler`.

## Photography — PLACEHOLDER (Pexels License — free commercial use, no attribution required)
De-duplicated June 2026: each photo now appears in **one** prominent slot to avoid repetition.

| File (`public/photography/`) | Used for | Replace before launch? |
|---|---|---|
| `classroom-lesson.jpg` | **Homepage hero** (only place it's used) | Recommended (brand shoot) |
| `about-classroom.jpg` | About page hero | Optional |
| `hero-classroom.jpg` | For-Schools hero | Optional |
| `educator-portrait.jpg` | Candidates hero | Optional |
| `founder-headshot.jpg` | **About "Built by an educator"** founder portrait — **REAL professional headshot of Robert Flom** (client-supplied) | No |
| `discovery-support.jpg` | Book-a-call closing parallax | Optional |
| `schools-teaching.jpg` | Home dual-path → Schools card | Optional |
| `educators-support.jpg` | Home dual-path → Educators card | Optional |
| `impact-students.jpg` | Our-Impact parallax statement | Optional |
| `community-backpacks.jpg` | Home community band + Our-Impact hero (community theme) | Recommended (real donation-drive photos) |
| `community-school-walk.jpg` | Our-Impact detail image | Optional |

Case-study blog thumbnails (`public/blog/`): `case-school-1.jpg` (Odyssey), `case-school-2.jpg`
(First Philadelphia), `case-school-3.jpg` (Idea Public) — distinct school exteriors/hallways.
All other blog thumbnails are the real WordPress featured images.

> Pexels License: free for commercial & personal use, no attribution required, modification
> allowed (https://www.pexels.com/license/). To swap in real photography, replace the file in
> place keeping the same filename — no code change needed.
