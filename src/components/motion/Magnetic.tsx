"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Subtle "magnetic" hover: the wrapped element eases toward the cursor while
 * hovered and springs back on leave. Skipped on touch and under
 * prefers-reduced-motion. Keep strength low — this is polish, not a toy.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "inline-block transition-transform duration-300 ease-out-quart will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
