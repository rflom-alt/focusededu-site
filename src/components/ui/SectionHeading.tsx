import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionHeading({
  eyebrow,
  eyebrowTone = "teal",
  title,
  intro,
  dark = false,
  center = false,
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: "teal" | "gold" | "light";
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-3xl font-semibold sm:text-4xl lg:text-[2.85rem]",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-slate-ink"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
