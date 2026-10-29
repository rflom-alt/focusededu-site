import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { Community } from "@/components/sections/Community";
import { StatBand } from "@/components/sections/StatBand";
import { Differentiators } from "@/components/sections/Differentiators";
import { RegionScarcity } from "@/components/sections/RegionScarcity";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  BuyerProof,
  RoleRoutes,
  HiringProcess,
  StaffingOptions,
  BuyerFaq,
  LocationLinks,
  BuyerCta,
} from "@/components/sections/BuyerJourney";

// The title leads with the two phrases schools actually search — "K-12 staffing"
// and "substitute teachers" — and keeps the full brand name for entity matching.
const TITLE = "K-12 Staffing & Substitute Teachers | FocusedEDU Staffing Group";
const DESCRIPTION =
  "K-12 staffing agency for substitute teachers, special education teachers, and paraprofessionals — PA, NJ, DE, MD, DC, NY, and school districts nationwide. Temp-to-perm at no cost.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero hero={edu.hero} cta={edu.cta} />
      <BuyerProof />
      <StatBand stats={edu.stats} />
      <RoleRoutes />
      <Differentiators items={edu.differentiators} />
      <HiringProcess />
      <StaffingOptions />
      <RegionScarcity />
      <Testimonials testimonials={edu.testimonials} />
      <BuyerFaq />
      <Community
        community={edu.community}
        cta={{ label: "See our community work", href: "/our-impact" }}
      />
      <LocationLinks />
      <BuyerCta />
    </>
  );
}
