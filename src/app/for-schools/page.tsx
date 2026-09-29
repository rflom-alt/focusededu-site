import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import {
  BuyerProof,
  RoleRoutes,
  HiringProcess,
  StaffingOptions,
  BuyerFaq,
  LocationLinks,
  BuyerCta,
} from "@/components/sections/BuyerJourney";
export const metadata: Metadata = {
  title: "Staffing for K\u201312 Schools & Districts",
  description:
    "Special education teachers, paraprofessionals, substitutes, and related-service providers. Recruiting and screening built around your school, your students, and your open roles.",
  alternates: { canonical: "/for-schools" },
  openGraph: {
    title: "Staff the school roles your students are counting on.",
    description:
      "Special education teachers, paraprofessionals, substitutes, and related-service providers. Recruiting and screening built around your school, your students, and your open roles.",
    url: "https://www.focusedu-staffing.com/for-schools",
    type: "website",
  },
};
export default function BuyerPage() {
  return (
    <>
      <PageHero
        eyebrow={edu.hero.eyebrow}
        title="Your next staffing decision starts here."
        subtitle={edu.hero.subtitle}
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
      <RoleRoutes />
      <HiringProcess />
      <StaffingOptions />
      <BuyerFaq />
      <LocationLinks />
      <BuyerCta />
    </>
  );
}
