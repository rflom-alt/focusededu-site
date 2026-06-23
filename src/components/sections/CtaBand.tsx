import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import type { CtaItem } from "@/lib/content";

export function CtaBand({
  title,
  body,
  primary,
  secondary,
  note,
  id,
}: {
  title: string;
  body?: string;
  primary: CtaItem;
  secondary?: CtaItem;
  note?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-14 text-center sm:px-12 lg:py-16">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              {body && (
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                  {body}
                </p>
              )}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primary.href} variant="primary" size="lg">
                  {primary.label}
                </Button>
                {secondary && (
                  <Button
                    href={secondary.href}
                    variant="ghost"
                    size="lg"
                    className="border border-white/25 hover:bg-white/5"
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
              {note && (
                <p className="mt-5 text-sm text-white/55">{note}</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
