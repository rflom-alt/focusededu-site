import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/references" },
  title: "Letters of Recommendation — Client References",
  description:
    "Eight published reference letters from superintendents, principals, and HR directors at partner schools across NJ, PA, DE, and CO.",
};

type Letter = {
  org: string;
  location: string;
  author: string;
  role: string;
  date?: string;
  quote: string;
  file: string;
};

const letters: Letter[] = [
  {
    org: "Bridgeton Public Schools",
    location: "Bridgeton, NJ · Public district",
    author: "Lennita Porter-Linen, BHRM, MAEL",
    role: "Director of Human Resources Recruitment and Retention",
    date: "June 2026",
    quote:
      "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
    file: "/letters/bridgeton-public-schools.pdf",
  },
  {
    org: "Lotus School for Excellence",
    location: "Aurora, CO",
    author: "Kelly Hamm",
    role: "Human Resources Director",
    date: "October 2024",
    quote:
      "We are thrilled that we can transition our contract employee to permanent status without a buyout fee. The experience has been outstanding.",
    file: "/letters/lotus-school-for-excellence.pdf",
  },
  {
    org: "The Barack Obama Green Charter Schools",
    location: "Plainfield, NJ",
    author: "Erin D. Murphy-Richardson",
    role: "Superintendent",
    date: "March 2024",
    quote:
      "Focused Staffing Group takes the time to understand our school's culture, values, and educational philosophy, ensuring that the candidates they provide are not only qualified but also aligned with our school's mission and vision.",
    file: "/letters/barack-obama-green-charter-schools.pdf",
  },
  {
    org: "The Delta School",
    location: "Philadelphia, PA",
    author: "David Weathington, MSW, LSW, Ed.D",
    role: "CEO, Buttonwood Farms / Delta School",
    quote:
      "They have consistently provided us with high-quality special education teachers, paraprofessionals, and related service providers who demonstrate professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
    file: "/letters/delta-school.pdf",
  },
  {
    org: "Hope Community Charter School",
    location: "Camden, NJ",
    author: "Tracy H. Foedisch",
    role: "Hiring & Support Manager",
    date: "March 2024",
    quote:
      "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
    file: "/letters/hope-community-charter-school.pdf",
  },
  {
    org: "Odyssey Charter School",
    location: "Wilmington, DE",
    author: "Elias Pappas",
    role: "CEO",
    date: "March 2024",
    quote:
      "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school.",
    file: "/letters/odyssey-charter-school.pdf",
  },
  {
    org: "Renaissance Academy Charter School",
    location: "Phoenixville, PA",
    author: "Zavia Herring",
    role: "Director of Human Resources",
    quote:
      "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
    file: "/letters/renaissance-academy.pdf",
  },
  {
    org: "Serviam Girls Academy",
    location: "New Castle, DE",
    author: "Dr. Heather Brooks",
    role: "Principal",
    date: "May 2025",
    quote:
      "I would highly recommend Focused Staffing Group to any school or organization seeking reliable, professional, and efficient staffing services. Their expertise and dedication made a real difference for us.",
    file: "/letters/serviam-girls-academy.pdf",
  },
];

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client references"
        title="Read our reference letters."
        subtitle="Eight letters of recommendation from superintendents, principals, and HR directors at partner schools across New Jersey, Pennsylvania, Delaware, and Colorado. Every letter is from a named school leader, and every one is downloadable in full."
      >
        <Button href={edu.cta.primary.href} variant="primary" size="lg">
          Book a discovery call
        </Button>
      </PageHero>

      <section className="bg-mist py-24 lg:py-32">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          {letters.map((l, i) => (
            <Reveal key={l.file} delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-cloud bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_40px_80px_-40px_rgba(6,10,31,0.22)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                      {l.location}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold leading-snug text-navy-950">
                      {l.org}
                    </h2>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-teal-400">
                    <FileText className="size-5" aria-hidden />
                  </span>
                </div>

                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-slate-ink">
                  &ldquo;{l.quote}&rdquo;
                </blockquote>

                <div className="mt-6 border-t border-cloud pt-5">
                  <p className="font-semibold text-navy-950">{l.author}</p>
                  <p className="mt-0.5 text-sm text-slate-ink">
                    {l.role}
                    {l.date ? ` · ${l.date}` : ""}
                  </p>
                  <a
                    href={l.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-colors hover:text-navy-950"
                  >
                    Read the full letter (PDF)
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to speak to a reference directly?"
        body="Book a 30-minute discovery call. We'll walk through the letters that match your situation and connect you with a school leader who has worked with us."
        primary={edu.cta.primary}
        secondary={edu.cta.secondary}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
