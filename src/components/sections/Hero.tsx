"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { SiteContent } from "@/lib/content";

const PROOF_CHIPS = [
  "One client per region",
  "Built by a teacher",
  "Credentialing in half the time",
];

/**
 * Signature moment: a pinned, scroll-scrubbed hero (GSAP ScrollTrigger, scrub:1).
 * As the section pins, the photo slowly zooms, the scrim deepens, the headline
 * parallaxes up and dissolves, and three proof chips rise in — an Apple-style
 * "headline → proof" handoff. Under prefers-reduced-motion it renders static.
 * See MOTION-NOTES.md §4.
 */
export function Hero({
  hero,
  cta,
}: {
  hero: SiteContent["hero"];
  cta: SiteContent["cta"];
}) {
  const root = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const scrim = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const chips = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=90%",
            pin: true,
            scrub: 1,
          },
        });
        tl.fromTo(img.current, { scale: 1.05 }, { scale: 1.22, ease: "none" }, 0)
          .fromTo(scrim.current, { opacity: 0 }, { opacity: 0.55, ease: "none" }, 0)
          .to(content.current, { yPercent: -16, autoAlpha: 0, ease: "none" }, 0)
          .fromTo(
            chips.current?.children ?? [],
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, stagger: 0.12, ease: "none" },
            0.35
          );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative h-screen overflow-hidden bg-navy-950"
    >
      {/* Photographic background (zooms on scrub) */}
      <div ref={img} className="absolute inset-0 will-change-transform">
        <Image
          src={hero.photo}
          alt={hero.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Base scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/20 to-transparent" />
      {/* Deepening scrim (animates on scrub) */}
      <div ref={scrim} className="absolute inset-0 bg-navy-950 opacity-0" />

      {/* Headline group */}
      <div className="container-x absolute inset-x-0 bottom-0 z-10 pb-24 pt-32 lg:pb-40 lg:pt-36">
        <div ref={content} className="max-w-3xl">
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-[2.05rem] font-semibold leading-[1.06] text-white sm:text-6xl sm:leading-[1.03] lg:text-[4.4rem]">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={cta.primary.href} variant="primary" size="lg">
              {cta.primary.label}
            </Button>
            <Button
              href={cta.secondary.href}
              variant="ghost"
              size="lg"
              className="border border-white/25 hover:bg-white/5"
            >
              {cta.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Proof chips (rise in on scrub) */}
      <div
        ref={chips}
        className="container-x pointer-events-none absolute inset-x-0 bottom-10 z-10 flex flex-wrap gap-3"
      >
        {PROOF_CHIPS.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 opacity-0 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-teal-400" aria-hidden />
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
