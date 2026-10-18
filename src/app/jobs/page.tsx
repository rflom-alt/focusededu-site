import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, Clock, DollarSign, MapPin } from "lucide-react";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FAQ, type QA } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { JOB_BOARD_URL, formatDate, getOpenSchoolJobs, type Job } from "./jobs-feed";

// Re-read the job board every 6 hours so filled or expired roles drop off and
// new ones appear without a deploy.
export const revalidate = 21600;

const SITE = "https://www.focusedu-staffing.com";

export const metadata: Metadata = {
  alternates: { canonical: "/jobs" },
  title: "K-12 School Jobs Hiring Now",
  description:
    "Current K-12 school jobs with FocusedEDU Staffing Group: teaching, special education, paraprofessional, and support roles. See pay and schedule, then apply.",
};

const INTRO =
  "FocusedEDU Staffing Group is hiring for the K-12 school jobs listed below. Each one is a current opening on our job board, with its location, schedule, and pay where posted. Apply online and a FocusedEDU recruiter follows up; placed educators are paid every Friday by direct deposit, Cash App, or check.";

// Answers taken from the approved /candidates page copy.
const faqs: QA[] = [
  {
    q: "How do I apply for a FocusedEDU school job?",
    a: "Open a listing and select Apply. Applications go through Focused Staffing Group's job board at apply.focused-staffing.com, and a FocusedEDU recruiter will talk with you about your experience, your professional goals, and where you see yourself in your next role.",
  },
  {
    q: "What positions does FocusedEDU staff?",
    a: "We staff certified and uncertified teachers and therapists, paraprofessionals, food service, and custodial roles across K-12 schools.",
  },
  {
    q: "What are the requirements to work in a school through FocusedEDU?",
    a: "Requirements include passing a skills quiz, background checks, a TB test, and vaccination documentation — the exact set depends on the role and the school.",
  },
  {
    q: "How often will I get paid?",
    a: "Our pay period runs Monday through Sunday, with scheduled paydays every Friday, via direct deposit, Cash App, or check.",
  },
  {
    q: "Can a placement turn into a permanent job?",
    a: "Engagement lengths vary — from summer engagements to long-term placements, with many opportunities to convert into a permanent role.",
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex flex-col rounded-2xl border border-cloud bg-white p-6 shadow-[0_20px_50px_-40px_rgba(6,10,31,0.45)] sm:p-7">
      <h3 className="text-xl font-semibold leading-snug text-navy-950">
        <Link href={`/jobs/${job.slug}`} className="transition hover:text-teal-700">
          {job.title}
        </Link>
      </h3>
      <ul className="mt-4 grid gap-2 text-sm text-slate-ink sm:grid-cols-2">
        <li className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-teal-600" aria-hidden />
          {job.city}, {job.region}
        </li>
        <li className="flex items-center gap-2">
          <Briefcase className="size-4 shrink-0 text-teal-600" aria-hidden />
          {job.employmentLabel} · {job.locationLabel}
        </li>
        {job.pay && (
          <li className="flex items-center gap-2">
            <DollarSign className="size-4 shrink-0 text-teal-600" aria-hidden />
            {job.pay.label}
          </li>
        )}
        {(job.schedule || job.shift) && (
          <li className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-teal-600" aria-hidden />
            {job.schedule || `${job.shift} shift`}
          </li>
        )}
        <li className="flex items-center gap-2">
          <CalendarDays className="size-4 shrink-0 text-teal-600" aria-hidden />
          Posted {formatDate(job.datePosted)}
        </li>
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button href={job.applyUrl} size="md">
          Apply
        </Button>
        <Link
          href={`/jobs/${job.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition hover:text-teal-700"
        >
          Job details
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export default async function JobsPage() {
  const jobs = await getOpenSchoolJobs();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "K-12 school jobs", item: `${SITE}/jobs` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  // The listing itself; each job's JobPosting markup lives on its detail page.
  const itemListSchema = jobs.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "K-12 school jobs hiring now",
        numberOfItems: jobs.length,
        itemListElement: jobs.map((j, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${j.title} — ${j.city}, ${j.region}`,
          url: `${SITE}/jobs/${j.slug}`,
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {itemListSchema && <JsonLd data={itemListSchema} />}

      <PageHero eyebrow="Careers · K-12 school jobs" title="K-12 school jobs hiring now." subtitle={INTRO}>
        <Button href="#open-roles" variant="primary" size="lg">
          See open roles
        </Button>
        <Button
          href={edu.submitResume}
          variant="ghost"
          size="lg"
          className="border border-white/25 hover:bg-white/5"
        >
          Join the talent network
        </Button>
      </PageHero>

      <section id="open-roles" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              Open roles
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              {jobs.length === 1
                ? "1 K-12 school job open now."
                : jobs.length
                  ? `${jobs.length} K-12 school jobs open now.`
                  : "New K-12 school jobs are posted as schools request them."}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-ink">
              {jobs.length
                ? "Every listing below is live on our job board. Select a role for the full description, or apply directly."
                : "There are no K-12 school openings posted at this moment. Submit your résumé to the FocusedEDU talent network so our recruiters can match you to new school openings, or browse every Focused Staffing Group opening on our job board."}
            </p>
          </div>

          {jobs.length > 0 && (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.slug} job={job} />
              ))}
            </div>
          )}

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-ink">
            Looking for behavioral health, residential, or clinic roles? Focused Staffing Group
            posts every opening on its{" "}
            <a
              href={JOB_BOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy-900 underline underline-offset-4 hover:text-teal-700"
            >
              job board
            </a>
            . New to working with us? See{" "}
            <Link
              href="/candidates"
              className="font-semibold text-navy-900 underline underline-offset-4 hover:text-teal-700"
            >
              how it works for educators
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQ eyebrow="FAQ" title="Questions from job seekers." items={faqs} />

      <CtaBand
        title="Don't see the right role yet?"
        body="Submit your résumé to the FocusedEDU talent network so our recruiters can match you to new school openings as they are posted."
        primary={{ label: "Join the talent network", href: edu.submitResume }}
        secondary={{ label: "How it works for educators", href: "/candidates" }}
      />
    </>
  );
}
