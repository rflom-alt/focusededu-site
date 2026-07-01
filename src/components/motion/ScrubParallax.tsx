"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";

/**
 * Signature moment: a pinned section where a photograph slowly scales/parallaxes
 * while a line of copy rises in — scrubbed to scroll (GSAP ScrollTrigger pin + scrub).
 * Static under reduced motion.
 */
export function ScrubParallax({
  photo,
  alt,
  eyebrow,
  eyebrowTone = "light",
  quote,
  ctaLabel,
  ctaHref,
}: {
  photo: string;
  alt: string;
  eyebrow?: string;
  eyebrowTone?: "teal" | "gold" | "light";
  quote: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const cap = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=110%",
              pin: true,
              scrub: true,
            },
          })
          .fromTo(img.current, { scale: 1.05, yPercent: -4 }, { scale: 1.26, yPercent: 4, ease: "none" }, 0)
          .fromTo(cap.current, { autoAlpha: 0, y: 44 }, { autoAlpha: 1, y: 0, ease: "none" }, 0.1);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950"
    >
      <div ref={img} className="absolute inset-0 will-change-transform">
        <Image src={photo} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-navy-950/72" />
      <div ref={cap} className="container-x relative text-center">
        {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
        <p className="mx-auto mt-6 max-w-3xl text-balance font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-[2.5rem]">
          {quote}
        </p>
        {ctaHref && ctaLabel && (
          <div className="mt-9">
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
