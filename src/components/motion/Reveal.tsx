import type { ReactNode } from "react";
/** Content stays visible on first render. Hover/focus motion lives on interactive elements. */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  return <Tag className={className}>{children}</Tag>;
}
