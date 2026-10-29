import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Differentiators } from "@/components/sections/Differentiators";
import { StatBand } from "@/components/sections/StatBand";
import { RegionScarcity } from "@/components/sections/RegionScarcity";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudyProof } from "@/components/sections/CaseStudyProof";
import {
  BuyerProof,
  RoleRoutes,
  HiringProcess,
  StaffingOptions,
  BuyerFaq,
  LocationLinks,
  BuyerCta,
} from "@/components/sections/BuyerJourney";

const DESCRIPTION =
  "Hire the right K-12 education staff with speed and precision. A dedicated, exclusive talent pipeline, automated credentialing, and temp-to-perm at no cost.";

export const metadata: Metadata = {
  title: "Staffing for K–12 Schools & Districts",
  description: DESCRIPTION,
  alternates: { canonical: "/for-schools" },
  openGraph: {
    title: "Hire the right education staff — with speed and precision.",
    description: DESCRIPTION,
    url: "https://www.focusedu-staffing.com/for-schools",
    type: "website",
    // Declaring openGraph replaces the inherited object, which drops the
    // root file-based image unless it is named here.
    images: ["/opengraph-image"],
  },
};
export default function BuyerPage() {
  return (
    <>
      <PageHero
        eyebrow={edu.hero.eyebrow}
        title="Hire the right education staff — with speed and precision."
        subtitle="Partner with FocusedEDU, a strategic partner dedicated to connecting you with high-quality, highly-skilled education talent — substitutes, special education teachers, paraprofessionals, and related-service providers — backed by a dedicated pipeline that is yours alone. We staff schools nationwide, with Pennsylvania, New Jersey, Delaware, Maryland, Washington, DC, and New York as our home markets."
        photo={edu.hero.photo}
        photoAlt={edu.hero.photoAlt}
      >
        <Button href="/book-a-call">Discuss your open roles</Button>
        <Button
          href="/request-staff"
          variant="ghost"
          className="border border-white/25"
        >
          Send a staffing request
        </Button>
      </PageHero>
      <BuyerProof />
      <Differentiators items={edu.differentiators} />
      <RoleRoutes />
      <StatBand stats={edu.stats} />
      <HiringProcess />
      <StaffingOptions />
      <RegionScarcity />
      <CaseStudyProof />
      <Testimonials testimonials={edu.testimonials} />
      <BuyerFaq />
      <LocationLinks />
      <BuyerCta />
    </>
  );
}
