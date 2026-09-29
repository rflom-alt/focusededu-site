import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { Community } from "@/components/sections/Community";
import {
  BuyerProof,
  RoleRoutes,
  HiringProcess,
  StaffingOptions,
  BuyerFaq,
  LocationLinks,
  BuyerCta,
} from "@/components/sections/BuyerJourney";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero hero={edu.hero} cta={edu.cta} />
      <BuyerProof />
      <RoleRoutes />
      <HiringProcess />
      <StaffingOptions />
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
