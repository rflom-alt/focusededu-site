import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.focusedu-staffing.com/cookies" },
  title: "Cookie Policy",
  description:
    "How FocusedEDU uses cookies and similar technologies on our website, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Last updated: July 21, 2026"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-ink">
              This Cookie Policy explains how FocusedEDU, a division of Focused Staffing
              Group, LLC, uses cookies and similar technologies on
              https://www.focusedu-staffing.com. It should be read alongside our Privacy
              Policy.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              What are cookies?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Cookies are small text files placed on your device when you visit a
              website. They help the site function, remember preferences, and understand
              how visitors use the site.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Types of cookies we use
            </h2>
            {/* ⚠️ LEGAL REVIEW: confirm the full cookie inventory and whether a consent banner / opt-in is required for your audience geographies (analytics currently loads without a consent gate). */}
            <ul className="mt-5 space-y-4 text-slate-ink">
              <li>
                <strong className="text-navy-950">Strictly necessary</strong> — required
                for the Site to function (security, load balancing, basic navigation).
              </li>
              <li>
                <strong className="text-navy-950">Analytics/performance</strong> — Google
                Analytics (GA4) helps us understand how visitors use the Site so we can
                improve it. These cookies collect aggregated, mostly de-identified usage
                data.
              </li>
              <li>
                <strong className="text-navy-950">Functional</strong> — third-party
                embeds such as our HubSpot scheduling widget may set cookies to enable
                booking and related features.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Managing cookies
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Most browsers let you refuse or delete cookies through their settings. You
              can also opt out of Google Analytics via Google&rsquo;s browser add-on.
              Blocking some cookies may affect how the Site works.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Changes to this policy
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              We may update this Cookie Policy as our practices or applicable law change.
              The &ldquo;Last updated&rdquo; date reflects the latest revision.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Contact</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Focused Staffing Group, LLC · hello@focused-staffing.com · (484) 482-8223.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
