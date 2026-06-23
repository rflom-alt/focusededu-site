import { edu } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { DualPath } from "@/components/sections/DualPath";
import { Differentiators } from "@/components/sections/Differentiators";
import { RegionScarcity } from "@/components/sections/RegionScarcity";
import { StatBand } from "@/components/sections/StatBand";
import { Community } from "@/components/sections/Community";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero hero={edu.hero} cta={edu.cta} />
      <LogoWall clients={edu.clients} />
      <DualPath />
      <StatBand stats={edu.stats} />
      <Differentiators
        items={edu.differentiators}
        cta={{ label: "Explore working with us", href: "/for-schools" }}
      />
      <RegionScarcity />
      <Testimonials testimonials={edu.testimonials} />
      <Community
        community={edu.community}
        cta={{ label: "See our impact", href: "/our-impact" }}
      />
      <FinalCta finalCta={edu.finalCta} cta={edu.cta} />
    </>
  );
}
