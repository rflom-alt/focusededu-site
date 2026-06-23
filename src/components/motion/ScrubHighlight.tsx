"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";

/**
 * Signature moment: a pinned section where the words of a statement illuminate
 * one-by-one, scrubbed to scroll position (GSAP ScrollTrigger pin + scrub).
 * Accent words keep their color and just brighten. Static under reduced motion.
 */
export function ScrubHighlight({
  eyebrow,
  eyebrowTone = "light",
  text,
  accent = [],
  dark = true,
}: {
  eyebrow?: string;
  eyebrowTone?: "teal" | "gold" | "light";
  text: string;
  accent?: string[];
  dark?: boolean;
}) {
  const root = useRef<HTMLElement>(null);
  const accentSet = new Set(accent.map((a) => a.toLowerCase()));
  const words = text.split(" ");

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const els = root.current?.querySelectorAll("[data-word]");
        if (!els || !els.length) return;
        gsap.set(els, { opacity: 0.2 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=130%",
              pin: true,
              scrub: true,
            },
          })
          .to(els, { opacity: 1, stagger: 0.4, ease: "none" });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden py-24",
        dark ? "bg-navy-950" : "bg-white"
      )}
    >
      {dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
      )}
      <div className="container-x relative w-full">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
          <p
            className={cn(
              "mt-7 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-[2.55rem]",
              dark ? "text-white" : "text-navy-950"
            )}
          >
            {words.map((w, i) => {
              const clean = w.replace(/[^a-zA-Z]/g, "").toLowerCase();
              const isAccent = accentSet.has(clean);
              return (
                <span
                  key={i}
                  data-word
                  className={cn(isAccent && (dark ? "text-teal-400" : "text-teal-600"))}
                >
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
