import type { Metadata } from "next";
import Link from "next/link";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { StaffingRequest } from "@/components/sections/StaffingRequest";
export const metadata: Metadata = {
  title: "Request School Staff",
  description:
    "Share your open role, location, and schedule with FocusedEDU. Email the staffing team or book a 30-minute call.",
  alternates: { canonical: "/request-staff" },
  openGraph: {
    title: "Request School Staff",
    description:
      "Share your open role, location, and schedule with FocusedEDU. Email the staffing team or book a 30-minute call.",
    url: "/request-staff",
    type: "website",
  },
};
export default function RequestStaffPage() {
  return (
    <>
      <PageHero
        eyebrow="For hiring teams"
        title="Tell us where you need support."
        subtitle="Start with the role, location, and schedule. We can discuss the remaining requirements together."
      >
        <Button href="/book-a-call">Book a staffing call</Button>
      </PageHero>
      <section className="bg-mist py-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-2xl font-semibold text-navy-950">
              A direct line to our team.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-ink">
              We will review your opening with you, clarify the requirements,
              and discuss the staffing model before moving into a search.
            </p>
            <a
              href={"mailto:" + edu.contact.email}
              className="mt-6 block break-words font-semibold text-teal-700 underline"
            >
              {edu.contact.email}
            </a>
            <a
              href={edu.contact.phoneHref}
              className="mt-3 block font-semibold text-teal-700"
            >
              {edu.contact.phone}
            </a>
            <p className="mt-8 text-slate-ink">
              Applying for work?{" "}
              <Link
                href="/candidates"
                className="font-semibold text-teal-700 underline"
              >
                Use our candidate page
              </Link>
              .
            </p>
          </div>
          <StaffingRequest />
        </div>
      </section>
    </>
  );
}
