"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Signature reveal: the child (usually an image) wipes open from left to right
 * via an animated clip-path as it scrolls into view, with a slight settle scale.
 * Feels editorial/high-end vs. a plain fade. Respects prefers-reduced-motion.
 *
 * Fail-safe: a clipped image must NEVER stay hidden. If the in-view observer
 * doesn't fire (smooth-scroll / hydration edge cases), a short safety timeout
 * reveals it anyway — so content can't get stranded behind clip-path.
 */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (inView) {
      setReveal(true);
      return;
    }
    const t = setTimeout(() => setReveal(true), 1500);
    return () => clearTimeout(t);
  }, [inView]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: reveal ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: reveal ? 1 : 1.08 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
