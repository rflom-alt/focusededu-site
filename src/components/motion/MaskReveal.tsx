"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Editorial headline reveal: each word rises from behind a mask on scroll-in,
 * with a gentle stagger. Renders plain text under prefers-reduced-motion.
 * Extra vertical padding on the mask keeps descenders (g, y, p) from clipping.
 */
export function MaskReveal({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}
