// Leadership guides: long, sourced answers for the people who sign staffing
// agreements. Each guide's words live in a JSON file beside this one; the page
// at /resources/<slug> lays them out (components/guides/GuideLayout.tsx).

export type GuideFaq = { q: string; a: string };

export type GuideData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** The 45 to 60 word direct answer printed above the body: the passage answer engines quote. */
  answer: string;
  keyTakeaways: string[];
  bodyHtml: string;
  faqs: GuideFaq[];
  citations: string[];
};

export type GuideDownload = {
  /** Filed with the lead, so the team knows which file was taken. */
  title: string;
  pdf: string;
  /** The same tool as an editable Word or Excel file, handed over with the PDF. */
  file?: { href: string; label: string };
  heading: string;
  sub: string;
  button: string;
  points: string[];
};

export type Guide = {
  data: GuideData;
  /** YYYY-MM-DD */
  published: string;
  updated: string;
  /** The hub card. */
  card: { title: string; body: string };
  calculator?: string;
  download?: GuideDownload;
  /** Set on a guide whose tables are public data: emitted as Dataset markup. */
  dataset?: { name: string; description: string; temporalCoverage: string; isBasedOn: string[] };
};

/** A hub card that points at a guide living elsewhere on the site (an upgraded article). */
export type HubLink = { title: string; body: string; href: string };
