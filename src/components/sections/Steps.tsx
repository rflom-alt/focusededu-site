import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { Step } from "@/lib/content";

const colMap: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function Steps({
  eyebrow,
  title,
  intro,
  steps,
  dark = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: Step[];
  dark?: boolean;
  id?: string;
}) {
  const cols = colMap[steps.length] ?? "lg:grid-cols-3";
  return (
    <section id={id} className={cn(dark ? "bg-navy-950" : "bg-mist", "py-24 lg:py-32")}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} dark={dark} />
        <div
          className={cn(
            "mt-16 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2",
            cols,
            dark ? "border-white/10 bg-white/10" : "border-cloud bg-cloud"
          )}
        >
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col p-9 lg:p-10",
                  dark ? "bg-navy-900" : "bg-white"
                )}
              >
                <span className="font-display text-5xl font-semibold text-teal-500/25">
                  {s.n}
                </span>
                <h3
                  className={cn(
                    "mt-6 text-xl font-semibold",
                    dark ? "text-white" : "text-navy-950"
                  )}
                >
                  {s.title}
                </h3>
                <p className={cn("mt-3 leading-relaxed", dark ? "text-white/65" : "text-slate-ink")}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
