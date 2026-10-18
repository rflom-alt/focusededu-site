import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FAQ, type QA } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { edu } from "@/lib/content";
import {
  article,
  formatDate,
  getOpenSchoolJob,
  getOpenSchoolJobs,
  jobPostingSchema,
  type Job,
} from "../jobs-feed";

// Same 6-hour refresh as /jobs: a filled, removed, or expired role starts
// returning 404 on the next revalidation, and new roles render on demand.
export const revalidate = 21600;
export const dynamicParams = true;

const SITE = "https://www.focusedu-staffing.com";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const jobs = await getOpenSchoolJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

/** Answer-first summary built only from the posting's own fields. */
function summary(job: Job): string {
  const where = `${job.city}, ${job.regionName}`;
  const setting = job.setting ? ` for ${article(job.setting)} ${job.setting.toLowerCase()}` : "";
  const shift = job.shift ? ` on the ${job.shift.toLowerCase()} shift` : "";
  const schedule = job.schedule ? ` (${job.schedule})` : "";
  const pay = job.pay ? `, paying ${job.pay.label}` : "";
  return (
    `FocusedEDU Staffing Group is hiring ${article(job.title)} ${job.title}${setting} in ${where}. ` +
    `It is ${article(job.employmentLabel)} ${job.employmentLabel.toLowerCase()}, ${job.locationLabel} position${shift}${schedule}${pay}. ` +
    `Posted ${formatDate(job.datePosted)}. Apply online and a FocusedEDU recruiter will follow up.`
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = await getOpenSchoolJob(slug);
  if (!job) return { title: "Job not found", robots: { index: false } };
  const pay = job.pay ? ` Pays ${job.pay.label}.` : "";
  const description =
    `${job.employmentLabel} ${job.title} job in ${job.city}, ${job.region}.${pay} ` +
    `Apply online with FocusedEDU Staffing Group.`;
  return {
    title: `${job.title} Job in ${job.city}, ${job.region}`,
    description: description.length > 160 ? description.slice(0, 157).trimEnd() + "…" : description,
    alternates: { canonical: `/jobs/${slug}` },
  };
}

export default async function JobPage({ params }: Params) {
  const { slug } = await params;
  const job = await getOpenSchoolJob(slug);
  if (!job) notFound();

  const pageUrl = `${SITE}/jobs/${job.slug}`;
  const faqs: QA[] = [
    ...(job.pay
      ? [{ q: `How much does this ${job.title} job pay?`, a: `This ${job.employmentLabel.toLowerCase()} role pays ${job.pay.label}.` }]
      : []),
    {
      q: `Where is this ${job.title} job?`,
      a: `${job.city}, ${job.regionName}. It is ${article(job.locationLabel)} ${job.locationLabel} role${job.setting ? ` in ${article(job.setting)} ${job.setting.toLowerCase()}` : ""}.`,
    },
    {
      q: "How do I apply?",
      a: "Select Apply to open this listing on Focused Staffing Group's job board at apply.focused-staffing.com. A FocusedEDU recruiter will talk with you about your experience, your professional goals, and where you see yourself in your next role.",
    },
    {
      q: "How often are FocusedEDU educators paid?",
      a: "Our pay period runs Monday through Sunday, with scheduled paydays every Friday, via direct deposit, Cash App, or check.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "K-12 school jobs", item: `${SITE}/jobs` },
      { "@type": "ListItem", position: 3, name: job.title, item: pageUrl },
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

  const facts: { label: string; value: string }[] = [
    { label: "Location", value: `${job.city}, ${job.regionName}` },
    { label: "Employment", value: `${job.employmentLabel} · ${job.locationLabel}` },
    ...(job.pay ? [{ label: "Pay", value: job.pay.label }] : []),
    ...(job.schedule ? [{ label: "Schedule", value: job.schedule }] : []),
    ...(job.shift ? [{ label: "Shift", value: job.shift }] : []),
    ...(job.setting ? [{ label: "Setting", value: job.setting }] : []),
    { label: "Posted", value: formatDate(job.datePosted) },
  ];

  return (
    <>
      <JsonLd data={jobPostingSchema(job, pageUrl)} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow={`K-12 school job · ${job.city}, ${job.region}`}
        title={job.title}
        subtitle={summary(job)}
      >
        <Button href={job.applyUrl} variant="primary" size="lg">
          Apply now
        </Button>
        <Button
          href="/jobs"
          variant="ghost"
          size="lg"
          className="border border-white/25 hover:bg-white/5"
        >
          All open school jobs
        </Button>
      </PageHero>

      <article className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <dl className="grid gap-x-8 gap-y-4 rounded-2xl border border-cloud bg-mist p-6 sm:grid-cols-2 sm:p-7">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-navy-950">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 font-display text-2xl font-semibold text-navy-950">About the role</h2>
            <div
              className="article-prose mt-4"
              dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
            />

            {job.requirementsHtml && (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold text-navy-950">Requirements</h2>
                <div
                  className="article-prose mt-4"
                  dangerouslySetInnerHTML={{ __html: job.requirementsHtml }}
                />
              </>
            )}

            {job.benefitsHtml && (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold text-navy-950">Benefits</h2>
                <div
                  className="article-prose mt-4"
                  dangerouslySetInnerHTML={{ __html: job.benefitsHtml }}
                />
              </>
            )}

            <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-6">
              <p className="flex-1 text-navy-900">
                Ready to apply? The application opens on our job board and takes you straight to this
                role.
              </p>
              <Button href={job.applyUrl} size="md">
                Apply now
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-ink">
              See every <Link href="/jobs" className="font-semibold text-navy-900 underline underline-offset-4 hover:text-teal-700">open K-12 school job</Link>, or learn{" "}
              <Link href="/candidates" className="font-semibold text-navy-900 underline underline-offset-4 hover:text-teal-700">how FocusedEDU works for educators</Link>.
            </p>
          </div>
        </div>
      </article>

      <FAQ eyebrow="FAQ" title="About this job." items={faqs} />

      <CtaBand
        title="Not quite the right fit?"
        body="Submit your résumé to the FocusedEDU talent network so our recruiters can match you to new school openings as they are posted."
        primary={{ label: "Join the talent network", href: edu.submitResume }}
        secondary={{ label: "All open school jobs", href: "/jobs" }}
      />
    </>
  );
}
