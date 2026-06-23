import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type QA = { q: string; a: string };

export function FAQ({
  eyebrow = "Good to know",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: QA[];
}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-cloud border-y border-cloud">
          {items.map((it, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-navy-950 [&::-webkit-details-marker]:hidden">
                {it.q}
                <Plus
                  className="size-5 shrink-0 text-teal-600 transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={2}
                  aria-hidden
                />
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-ink">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
