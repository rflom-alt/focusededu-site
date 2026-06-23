import { cn } from "@/lib/cn";

/** Small uppercase kicker with a short accent rule. */
export function Eyebrow({
  children,
  tone = "teal",
  className,
}: {
  children: React.ReactNode;
  tone?: "teal" | "gold" | "light";
  className?: string;
}) {
  const dot =
    tone === "gold" ? "bg-gold-400" : tone === "light" ? "bg-teal-400" : "bg-teal-500";
  const text =
    tone === "gold" ? "text-gold-400" : tone === "light" ? "text-teal-300" : "text-teal-700";
  return (
    <span className={cn("eyebrow", text, className)}>
      <span className={cn("h-px w-6", dot)} aria-hidden />
      {children}
    </span>
  );
}
