import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export type Feature = { icon?: string; title: string; body: string };

const colMap: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  eyebrow,
  eyebrowTone = "teal",
  title,
  intro,
  items,
  columns = 3,
  dark = false,
  bg,
  center = false,
}: {
  eyebrow?: string;
  eyebrowTone?: "teal" | "gold" | "light";
  title: string;
  intro?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
  bg?: string;
  center?: boolean;
}) {
  return (
    <section className={cn(bg ?? (dark ? "bg-navy-950" : "bg-white"), "py-24 lg:py-32")}>
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          eyebrowTone={eyebrowTone}
          title={title}
          intro={intro}
          dark={dark}
          center={center}
        />
        <div className={cn("mt-14 grid gap-5", colMap[columns])}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <article
                className={cn(
                  "h-full rounded-2xl border p-7 transition-all duration-300 lg:p-8",
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-teal-400/40"
                    : "border-cloud bg-white hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)]"
                )}
              >
                {it.icon && (
                  <div
                    className={cn(
                      "mb-5 flex size-12 items-center justify-center rounded-xl",
                      dark ? "bg-teal-500/15 text-teal-300" : "bg-teal-500/10 text-teal-700"
                    )}
                  >
                    <Icon name={it.icon} className="size-6" strokeWidth={1.7} />
                  </div>
                )}
                <h3 className={cn("text-lg font-semibold", dark ? "text-white" : "text-navy-950")}>
                  {it.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 text-sm leading-relaxed",
                    dark ? "text-white/65" : "text-slate-ink"
                  )}
                >
                  {it.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
