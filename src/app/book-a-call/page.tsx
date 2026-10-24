import type { Metadata } from "next";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CrmBooking } from "@/components/sections/CrmBooking";
export const metadata: Metadata = {
  title: "Book a School Staffing Call",
  description:
    "Book a free 30-minute discovery call with FocusedEDU. Share your staffing challenge and see how a dedicated, exclusive K-12 pipeline works.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book a School Staffing Call",
    description:
      "Book a free 30-minute discovery call with FocusedEDU. Share your staffing challenge and see how a dedicated, exclusive K-12 pipeline works.",
    url: "/book-a-call",
    type: "website",
    // Declaring openGraph replaces the inherited object, which drops the
    // root file-based image unless it is named here.
    images: ["/opengraph-image"],
  },
};
export default function BookACallPage() {
  return (
    <>
      <PageHero
        eyebrow="FocusedEDU · Staffing call"
        title="Bring your open roles. Leave with a next step."
        subtitle="In 30 minutes, we will discuss your priorities, clarify the requirements, and determine how our team can support your search."
      >
        <Button href="#book">Choose a time</Button>
        <Button href="/request-staff" variant="ghost">
          Prefer to email your opening?
        </Button>
      </PageHero>
      <section className="bg-white py-14 lg:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              Free · 30 minutes · No cost, no obligation
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-navy-950">
              A conversation about your hiring needs.
            </h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-slate-ink">
              <li>Identify the roles and locations that need attention.</li>
              <li>
                Review schedules, qualifications, and the engagement model.
              </li>
              <li>Agree on requirements and the next action.</li>
            </ol>
            <p className="mt-6 text-slate-ink">
              You&apos;ll see the model: how an exclusive pipeline — one we never
              share with your competitors — gives you first pick of talent, and
              how automated credentialing halves your time-to-hire.
            </p>
            <p className="mt-6 text-slate-ink">
              No documents to prepare. Share what you know about the opening.
            </p>
          </div>
          <div id="book" className="min-w-0 scroll-mt-28">
            <h2 className="mb-4 text-xl font-semibold text-navy-950">
              Choose your meeting time
            </h2>
            <CrmBooking url={edu.contact.scheduler} />
            <p className="mt-5 text-sm leading-relaxed text-slate-ink">
              Calendar not loading?{" "}
              <a
                href={edu.contact.scheduler}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 underline"
              >
                Open the scheduler directly
              </a>{" "}
              or call{" "}
              <a
                href={edu.contact.phoneHref}
                className="font-semibold text-teal-700 underline"
              >
                {edu.contact.phone}
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-slate-ink">
              Check the timezone shown in the calendar before confirming your
              appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
