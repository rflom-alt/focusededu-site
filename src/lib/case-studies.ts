/**
 * Case studies — real FocusedEDU partner outcomes. Numbers are client-attested
 * (provided by FSG). Buyer contact details from the source documents are kept
 * OFF the public pages by design.
 */

export type CaseStat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  school: string;
  location: string;
  partnerSince: string;
  services: string;
  eyebrow: string; // "Case study · <angle>"
  headline: string;
  subhead: string;
  photo: string;
  stats: CaseStat[];
  challenge: string[];
  approach: string[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "odyssey-charter-school",
    school: "Odyssey Public Charter School",
    location: "Wilmington, DE",
    partnerSince: "2021",
    services:
      "Substitute & certified teachers, SLPs, OTs, PTs, psychologists, reading specialists, 1:1 aides, paraprofessionals, bus drivers, and support staff",
    eyebrow: "Case study · Whole-school staffing",
    headline: "120+ roles filled — when the incumbent agencies couldn't.",
    subhead:
      "From bus drivers to certified teachers, FocusedEDU staffed an entire school where the agencies already on contract were falling short.",
    photo: "/blog/case-school-1.jpg",
    stats: [
      { value: "120+", label: "Placements across the school" },
      { value: "95%", label: "Day-to-day substitute fill rate" },
      { value: "+40%", label: "Improvement over the previous provider" },
      { value: "13+", label: "Distinct role types staffed" },
    ],
    challenge: [
      "Odyssey serves more than 1,000 K–8 students drawn from five different districts, with a 12:1 student-teacher ratio to protect. When traditional recruiting fell short — and the staffing agencies already under contract couldn't fill their open roles — the gaps spanned the whole building.",
      "Substitute and classroom teachers, SLPs, OTs and PTs, psychologists, reading specialists, one-on-one aides, paraprofessionals, bus drivers, and support staff all needed covering in a limited local talent pool.",
    ],
    approach: [
      "We stepped in exactly where the incumbent agencies were falling short and built Odyssey a single, dependable pipeline across every role type — sourcing, interviewing, credentialing, and reference-checking each candidate before presenting a vetted shortlist for the school's final decision.",
      "A customized recruiting plan — aggressive digital advertising, on-location information sessions, and grassroots outreach — built a talent pool deep enough to keep day-to-day coverage reliable, not just fill the occasional role.",
    ],
    results: [
      "120+ placements across the school — bus drivers, certified teachers, paraprofessionals, and substitutes",
      "A 95% fill rate on day-to-day substitutes — a 40%+ improvement over the previous provider",
      "Succeeded where the incumbent agencies couldn't, with one partner covering 13+ distinct roles",
      "Trusted and renewed as a partner since 2021",
    ],
  },
  {
    slug: "idea-public-charter-school",
    school: "IDEA Public Charter School",
    location: "Washington, DC",
    partnerSince: "2022",
    services: "Certified special-education teachers, substitute teachers, and one-on-one aides",
    eyebrow: "Case study · Reputation turnaround",
    headline: "Rebuilding a school's reputation in the talent market.",
    subhead:
      "How FocusedEDU turned IDEA PCS from a hard-to-staff school into one educators want to work for — and filled every special-education role in the process.",
    photo: "/blog/case-school-3.jpg",
    stats: [
      { value: "100%", label: "Certified SPED-teacher roles filled" },
      { value: "100%", label: "Retention of placed educators" },
      { value: "2 wks", label: "From request to filled" },
      { value: "2022", label: "Partner since" },
    ],
    challenge: [
      "IDEA PCS wasn't just short on special-education teachers, substitutes, and one-on-one aides — it was fighting an uphill reputation in the local talent market.",
      "A limited candidate pool and a soft employer brand meant traditional recruiting stalled, and the agencies already on contract couldn't move the needle.",
    ],
    approach: [
      "We built a recruiting plan designed specifically to change the narrative around IDEA — aggressive digital and grassroots advertising, on-site information sessions, and, critically, a campaign built around the real, positive experiences of the contractors we placed there.",
      "Instead of selling around the reputation problem, we let satisfied educators tell the story — and the perception of IDEA as a place to work shifted.",
    ],
    results: [
      "A reputation reset: positive contractor testimonials reframed IDEA as a school educators want to join",
      "100% of open certified special-education teacher roles filled — proof the turnaround took hold",
      "100% retention of the educators placed, with every role filled within two weeks of the request",
      "A partnership that's held since 2022",
    ],
  },
  {
    slug: "cesar-chavez-public-charter-school",
    school: "Cesar Chavez Public Charter School",
    location: "Washington, DC",
    partnerSince: "2022",
    services:
      "Dedicated aides, special-education teachers, subject-certified long-term substitutes, and related support staff",
    eyebrow: "Case study · Choice, not a scramble",
    headline: "Four qualified candidates for every opening — so the school never settles.",
    subhead:
      "A college-prep school in Northeast DC trades the staffing scramble for a real choice of vetted educators.",
    photo: "/photography/hero-classroom.jpg",
    stats: [
      { value: "4", label: "Qualified candidates per opening" },
      { value: "414", label: "Students served, grades 6–12" },
      { value: "13+", label: "Role types available" },
    ],
    challenge: [
      "Cesar Chavez PCS runs a rigorous college-prep program and a distinctive public-policy curriculum for 414 students in grades 6–12 — the kind of environment that demands strong, well-matched educators.",
      "A thin local talent pool left them short on dedicated aides, special-education teachers, and subject-certified long-term subs, and conventional recruiting couldn't keep pace.",
    ],
    approach: [
      "Rather than send over whoever was available, we built a dedicated pipeline for Chavez and sourced deep — presenting, on average, four qualified candidates for every open position.",
      "We handled the advertising, interviewing, credentialing, and screening, then put a vetted shortlist in front of the school so the final call was always theirs.",
    ],
    results: [
      "Four qualified candidates presented per opening — choice, not a last-minute scramble",
      "Specialized roles filled to the school's standard: dedicated aides, SPED, and subject-certified long-term subs",
      "A consistent, repeatable pipeline the school can count on",
    ],
  },
  {
    slug: "first-philadelphia-public-charter-school",
    school: "First Philadelphia Public Charter School",
    location: "Philadelphia, PA",
    partnerSince: "2021",
    services:
      "Certified special-education teachers, paraprofessionals, substitute teachers, and one-on-one aides",
    eyebrow: "Case study · Retention & continuity",
    headline: "Every special-education teacher we placed stayed.",
    subhead:
      "For First Philadelphia, FocusedEDU didn't just fill the hardest SPED roles fast — the educators stuck, giving students unbroken support.",
    photo: "/blog/case-school-2.jpg",
    stats: [
      { value: "100%", label: "Retention of placed educators" },
      { value: "100%", label: "SPED-teacher roles filled" },
      { value: "2 wks", label: "From request to filled" },
      { value: "2021", label: "Partner since" },
    ],
    challenge: [
      "First Philadelphia needed its most difficult roles filled — certified special-education teachers, paraprofessionals, substitutes, and one-on-one aides — the positions where a vacancy lands directly on the students who can least afford it.",
      "A limited local talent pool and traditional recruiting methods weren't keeping up.",
    ],
    approach: [
      "Working directly with the school's leadership, we built a customized recruiting plan and a dedicated pipeline, consistently presenting multiple qualified candidates per position so the school could choose the right fit.",
      "We owned the advertising, interviewing, credentialing, and screening end to end — and stayed focused on the special-education roles where continuity matters most.",
    ],
    results: [
      "100% retention — every certified special-education teacher we placed stayed, giving students unbroken support",
      "100% of open SPED-teacher roles filled, each one within two weeks of the request",
      "Multiple vetted candidates presented per opening",
      "A partnership that's held since 2021",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
