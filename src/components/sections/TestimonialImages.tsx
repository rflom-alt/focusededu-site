import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export type TestimonialImage = { src: string; alt: string };

/** Real testimonial cards (faces + org logos + 5 stars) supplied by the client. */
export function TestimonialImages({
  items,
  eyebrow = "In their words",
  title = "Trusted by the people who run schools.",
  intro,
  ctaLabel,
  ctaHref,
}: {
  items: TestimonialImage[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} center />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.src} delay={i * 0.06}>
              <figure className="rounded-2xl border border-cloud bg-white p-5 shadow-[0_24px_50px_-40px_rgba(6,10,31,0.3)]">
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={600}
                  height={200}
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        {ctaHref && ctaLabel && (
          <div className="mt-12 text-center">
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
