import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { LocationLinks, BuyerCta } from "@/components/sections/BuyerJourney";
import { edu } from "@/lib/content";
export const metadata: Metadata = {
  title: "School Staffing Guides & Resources",
  description:
    "Practical guides to staffing roles, costs, vendor selection, and onboarding from FocusedEDU. Separate resources for hiring teams and professionals.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "School Staffing Guides & Resources",
    description:
      "Practical guides to staffing roles, costs, vendor selection, and onboarding from FocusedEDU. Separate resources for hiring teams and professionals.",
    url: "/resources",
    type: "website",
  },
};
const guides = [
  [
    "School staffing costs",
    "Understand which details shape a staffing quote.",
    "/education-staffing-agency-cost",
  ],
  [
    "Special education staffing",
    "Plan around the role, setting, caseload, and required qualifications.",
    "/special-education-staffing",
  ],
  [
    "Choosing a staffing vendor",
    "Questions to consider when reviewing a school staffing partner.",
    "/school-district-staffing-vendor",
  ],
  [
    "School references",
    "Read signed letters from school leaders.",
    "/references",
  ],
  [
    "School partnerships",
    "Explore the published school partnership case studies.",
    "/case-studies",
  ],
  [
    "Workforce research",
    "Read the K\u201312 staffing workforce report and its sources.",
    "/resources/2026-k12-staffing-report",
  ],
];
export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing resources"
        title="Make your next staffing decision with better information."
        subtitle="Explore the questions to ask, the details to prepare, and the staffing approaches available to your team."
      >
        <Button href="#hiring-teams">For hiring teams</Button>
        <Button href="#professionals" variant="ghost">
          For professionals
        </Button>
      </PageHero>
      <section id="hiring-teams" className="bg-mist py-16">
        <div className="container-x">
          <h2 className="text-3xl font-semibold text-navy-950">
            Guides for hiring teams
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map(([title, body, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-cloud bg-white p-7 hover:border-teal-600"
              >
                <h3 className="text-xl font-semibold text-navy-950">{title}</h3>
                <p className="mt-3 text-slate-ink">{body}</p>
                <span className="mt-5 block font-semibold text-teal-700">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex font-semibold text-teal-700 underline underline-offset-4"
          >
            Browse all articles
          </Link>
        </div>
      </section>
      <LocationLinks />
      <section id="professionals" className="bg-white py-16">
        <div className="container-x">
          <h2 className="text-3xl font-semibold text-navy-950">
            Your next role starts here.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-ink">
            Explore current openings, join our talent network, or learn how the
            candidate process works.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={edu.jobBoard}>View open roles</Button>
            <Button href={edu.submitResume} variant="outline">
              Join the talent network
            </Button>
            <Button href="/candidates" variant="outline">
              How to apply
            </Button>
          </div>
        </div>
      </section>
      <BuyerCta />
    </>
  );
}
