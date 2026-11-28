import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ReferForm } from "@/components/sections/ReferForm";
import { edu } from "@/lib/content";

// /refer?r=<code> -- the personal link each person FocusedEDU has placed gets,
// mostly opened from a text message. Not for search: noindex, not in the
// sitemap. The form (components/sections/ReferForm.tsx) posts to the CRM's
// referral door (lib/referral.ts).
export const metadata: Metadata = {
  title: "Refer a Friend",
  description: "Know someone who would be good in a school? Send them to FocusedEDU.",
  alternates: { canonical: "/refer" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ReferPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-24 sm:pt-36 lg:pt-40 lg:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative z-10 max-w-3xl">
          <Eyebrow tone="light">For people working with FocusedEDU</Eyebrow>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">
            Know someone who&apos;d be great in a school? Send them our way.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            You know what this work takes. Add a friend below and a recruiter
            will reach out to them. If someone you refer is placed with us and
            works their first weeks, we&apos;ll thank you.
          </p>
        </div>
      </section>
      <section className="bg-mist pb-20 lg:pb-28">
        <div className="container-x relative z-10 -mt-14 max-w-3xl sm:-mt-16">
          <ReferForm />
          <p className="mt-6 text-center text-sm text-slate-ink">
            Questions? Call us at{" "}
            <a href={edu.contact.phoneHref} className="font-semibold text-teal-700 underline">
              {edu.contact.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
