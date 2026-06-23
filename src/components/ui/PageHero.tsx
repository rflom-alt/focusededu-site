import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/** Interior-page hero: dark navy so the transparent header stays legible. */
export function PageHero({
  eyebrow,
  eyebrowTone = "light",
  title,
  subtitle,
  photo,
  photoAlt,
  children,
}: {
  eyebrow: string;
  eyebrowTone?: "teal" | "gold" | "light";
  title: string;
  subtitle?: string;
  photo?: string;
  photoAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-20 lg:pt-44 lg:pb-28">
      {photo ? (
        <>
          <Image
            src={photo}
            alt={photoAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/45" />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-teal-600), transparent 62%)",
          }}
        />
      )}

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
