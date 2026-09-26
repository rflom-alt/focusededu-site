import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buyerContent as b } from "@/lib/buyer-content";
import { edu } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export function BuyerProof() {
  return (
    <section className="bg-white py-12">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            School leaders, in their own words
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-navy-950">
            Read the letter behind the recommendation.
          </h2>
          <Link
            href="/references"
            className="mt-4 inline-flex font-semibold text-teal-700 underline underline-offset-4"
          >
            See signed school references
          </Link>
        </div>
        <figure className="border-l-2 border-teal-500 pl-6">
          <blockquote className="text-lg leading-relaxed text-navy-900">
            “I recommend Focused Staffing Group without reservation. They have
            demonstrated a consistent level of professionalism, reliability, and
            responsiveness in addressing our staffing needs.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-slate-ink">
            Lennita Porter-Linen · Director of Human Resources Recruitment and
            Retention
            <br />
            Bridgeton Public Schools · June 2026
          </figcaption>
          <a
            href="/letters/bridgeton-public-schools.pdf"
            className="mt-3 inline-flex text-sm font-semibold text-teal-700 underline underline-offset-4"
          >
            Read the original letter (PDF)
          </a>
        </figure>
      </div>
    </section>
  );
}
export function RoleRoutes() {
  return (
    <section id="roles" className="bg-mist py-16 lg:py-20">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          Staffing by role
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy-950 sm:text-4xl">
          Start with the role you need filled.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {b.roles.map(([title, body, href]) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-cloud bg-white p-6 transition hover:border-teal-600"
            >
              <h3 className="text-xl font-semibold text-navy-950">{title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-ink">
                {body}
              </p>
              <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-700">
                Explore staffing <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HiringProcess() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          From opening to onboarding
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy-950 sm:text-4xl">
          You choose the person. We coordinate the process.
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {b.steps.map((s) => (
            <li key={s.n} className="border-t border-cloud pt-6">
              <span className="text-sm font-semibold text-teal-700">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold text-navy-950">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-ink">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function StaffingOptions() {
  return (
    <section className="bg-navy-950 py-16 lg:py-20">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
          Choose the right arrangement
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          An assignment. A path to hire. A permanent search.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {b.options.map((o) => (
            <div key={o.title} className="border-t border-white/20 pt-6">
              <h3 className="text-xl font-semibold text-white">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function BuyerFaq() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: b.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <FAQ title="Before you start a search." items={b.faqs} />
    </>
  );
}
export function LocationLinks() {
  return (
    <section className="bg-mist py-12">
      <div className="container-x">
        <h2 className="text-xl font-semibold text-navy-950">
          Explore staffing in your area
        </h2>
        <p className="mt-3 text-slate-ink">
          Review local services, then talk with our team about your role and
          location.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {b.locations.map(([name, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="font-semibold text-teal-700 underline underline-offset-4"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/services"
              className="font-semibold text-teal-700 underline underline-offset-4"
            >
              All services and locations
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
export function BuyerCta() {
  return (
    <section className="bg-navy-950 py-16 lg:py-20">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          Tell us which role is holding your team back.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-white/75">
          Discuss your requirements, ask questions, and agree on a practical
          next step.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/book-a-call">Discuss your staffing needs</Button>
          <Button
            href="/request-staff"
            variant="ghost"
            className="border border-white/25"
          >
            Send a staffing request
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/70">
          Looking for work?{" "}
          <Link
            href={edu.jobBoard}
            className="text-white underline underline-offset-4"
          >
            View current openings
          </Link>
        </p>
      </div>
    </section>
  );
}
