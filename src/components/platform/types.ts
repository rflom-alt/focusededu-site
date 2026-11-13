import type { Step } from "@/lib/content";
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
  h1: string;
  lede: string;
  /** One sentence for the suite overview, llms.txt and structured data. */
  summary: string;
  problem: { title: string; body: string[] };
  visual: PlatformVisual;
  /** A real screen, shown at full width where one exists on this site's own demo data. */
  screen?: { eyebrow: string; title: string; body: string; visual: PlatformVisual };
  /** Three short lines for the suite overview. */
  highlights: string[];
  sees: { title: string; intro: string; items: Feature[] };
  week?: { title: string; intro: string; steps: Step[] };
  proof: {
    title: string;
    body: string;
    attribution?: string;
    link?: { label: string; href: string };
    visual?: PlatformVisual;
  };
  faqs: QA[];
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
  intro: { eyebrow: string; title: string; body: string };
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  faqs: QA[];
  closing: { title: string; body: string };
  teaser: { eyebrow: string; title: string; body: string };
  products: PlatformProduct[];
};
