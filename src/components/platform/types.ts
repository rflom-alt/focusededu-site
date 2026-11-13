import type { Stat, Step } from "@/lib/content";
import type { Feature } from "@/components/sections/FeatureGrid";
import type { QA } from "@/components/sections/FAQ";

export type ProductSlug = "fsg-match" | "verifai" | "fsg-go";

/** A real screenshot of the product, taken on demo data. */
export type ScreenshotVisual = {
  kind: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** An opening as our recruiters see it in FSG Match. */
export type OpeningVisual = {
  kind: "opening";
  role: string;
  client: string;
  status: string;
  recruiter: string;
  lastActivity: string;
  daysQuiet: string;
  history: { when: string; what: string }[];
};

/** The candidate presentation a client receives from VerifAI. */
export type PresentationVisual = {
  kind: "presentation";
  subject: string;
  greeting: string;
  candidate: string;
  position: string;
  summary: string;
  documents: { name: string; approved: string }[];
  recruiter: string;
};

/** The weekly approval email an approver receives from FSG Go. */
export type ApprovalEmailVisual = {
  kind: "approvalEmail";
  subject: string;
  heading: string;
  greeting: string;
  /** Sentence split so the week and the client can be set bold, as in the email. */
  line: { before: string; week: string; between: string; client: string; after: string };
  instruction: string;
  button: string;
  note: string;
};

/** The approval record that goes with an FSG Go invoice. */
export type RecordVisual = {
  kind: "record";
  contractor: string;
  client: string;
  role: string;
  period: string;
  banner: string;
  rows: { date: string; hours: string; approval: string }[];
  total: string;
};

export type PlatformVisual = (
  | ScreenshotVisual
  | OpeningVisual
  | PresentationVisual
  | ApprovalEmailVisual
  | RecordVisual
) & { caption: string };

export type PlatformProduct = {
  slug: ProductSlug;
  name: string;
  /** Find, Clear or Work: where the product sits in a hire. */
  stage: string;
  /** What the product covers, in a few words. */
  covers: string;
  /** The question a buyer would type or ask an assistant; this page answers it. */
  question: string;
  metaTitle: string;
  metaDescription: string;
  /** What the client gets, as one short line. The product name is the page's H1. */
  tagline: string;
  /** The definition: what kind of platform it is and what it does. */
  lede: string;
  /** One line for the suite overview, llms.txt and structured data. */
  summary: string;
  /** Three figures under the hero: from the product itself or this site's published results. */
  stats: Stat[];
  problem: { title: string; body: string[] };
  visual: PlatformVisual;
  /** A real screen, shown at full width where one exists on this site's own demo data. */
  screen?: { eyebrow: string; title: string; body: string; visual: PlatformVisual };
  /** Three short lines for the suite overview. */
  highlights: string[];
  /** What the platform does, as named capabilities. */
  inside: { title: string; intro: string; items: Feature[] };
  /** What the client experiences. */
  expect: { title: string; intro: string; items: Feature[] };
  week?: { title: string; intro: string; steps: Step[] };
  proof: {
    /** A headline figure, set large beside the title when there is no visual. */
    value?: string;
    title: string;
    body: string;
    attribution?: string;
    link?: { label: string; href: string };
    visual?: PlatformVisual;
  };
  faqs: QA[];
};

/** One client result: a figure or a quotation, always with its source. */
export type PlatformResult = {
  value?: string;
  headline: string;
  body: string;
  source: string;
  href?: string;
};

export type PlatformSuite = {
  name: string;
  /** Site origin, no trailing slash. */
  site: string;
  /** Brand the pages speak as. */
  brand: string;
  /** JSON-LD @id of the organization that provides the software. */
  providerId: string;
  /** Who uses it, for structured data. */
  audience: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** Four figures under the hero. */
  stats: Stat[];
  intro: { eyebrow: string; title: string; body: string };
  /** Why the platform is ours: the four things a rented system cannot say. */
  difference: { eyebrow: string; title: string; intro: string; pillars: Feature[] };
  /** Named client results, each from this site's published proof. */
  results: {
    eyebrow: string;
    title: string;
    intro: string;
    items: PlatformResult[];
    link?: { label: string; href: string };
  };
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  faqs: QA[];
  closing: { title: string; body: string };
  teaser: { eyebrow: string; title: string; body: string };
  products: PlatformProduct[];
};
