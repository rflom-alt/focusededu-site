import type { Guide, GuideData, HubLink } from "@/lib/guides/types";
import classroom from "./cost-of-an-unfilled-classroom.json";

// The leadership guides on this site. Add a guide by adding its JSON beside
// this file and one entry here; the page, the hub, the sitemap and the llms
// files all read this list.
export const guides: Guide[] = [
  {
    data: classroom as GuideData,
    published: "2026-11-18",
    updated: "2026-11-18",
    card: {
      title: "What an unfilled classroom costs",
      body: "Put a dollar figure on one open seat with your own numbers, and see what waiting for a direct hire puts at risk.",
    },
    calculator: "unfilled-classroom",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.data.slug === slug);

// The hub: these guides, plus articles elsewhere on the site rebuilt to the same standard.
const elsewhere: HubLink[] = [
  {
    title: "Staying IDEA-compliant through a vacancy",
    body: "What the law requires when an open seat means missed IEP minutes, the first four steps, and a printable compliance checklist.",
    href: "/blog/managing-iep-backlogs-and-compensatory-services-guide",
  },
];

export const leadershipLinks: HubLink[] = [
  ...guides.map((g) => ({ title: g.card.title, body: g.card.body, href: `/resources/${g.data.slug}` })),
  ...elsewhere,
];

export type { GuideData };
