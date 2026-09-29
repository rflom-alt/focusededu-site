import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteContent } from "@/lib/content";

/** The whole offer is present on first render, with no pinned scroll or hidden text. */
export function Hero({
  hero,
  cta,
}: {
  hero: SiteContent["hero"];
  cta: SiteContent["cta"];
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-14 lg:pt-40 lg:pb-20"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button
              href={cta.secondary.href}
              variant="ghost"
              className="border border-white/25"
            >
              {cta.secondary.label}
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/65">
            Free 30-minute staffing call. Bring your open roles.
          </p>
          <p className="mt-6 text-sm text-white/70">
            Looking for work?{" "}
            <Link
              href="/candidates"
              className="font-semibold text-white underline underline-offset-4"
            >
              Explore opportunities
            </Link>
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 lg:aspect-[4/5]">
          <Image
            src={hero.photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
