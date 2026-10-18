/**
 * "Special education staffing in <state>" and "paraprofessional staffing in
 * <state>" pages — the local-intent pages district buyers search for
 * ("special education staffing New Jersey", "paraprofessional staffing
 * Pennsylvania"). They replicate the Delaware special education page that
 * ranks #1 and is cited by Google's AI Overview: answer-first opening, the
 * state's own rules quoted from primary sources and linked inline, a matching
 * case study, and FAQ / Service / Breadcrumb schema (emitted by
 * app/[service]/page.tsx from these fields).
 *
 * Rules for this file:
 * - FocusedEDU facts are the approved ones used across the site (Odyssey,
 *   IDEA, Cesar Chavez, First Philadelphia case studies; one client per region;
 *   temp-to-perm at no cost; weekly pay + shift app; credentialing in half the
 *   time; certified special education teachers placed within two weeks).
 * - Every state or federal rule is quoted or paraphrased from the agency's own
 *   page, regulation, or statute and linked inline. If a source stops loading,
 *   remove the detail rather than re-sourcing it from a third party.
 * - Delaware special education and Maryland special education are deliberately
 *   absent: /delaware-education-staffing and /maryland-special-education-staffing
 *   already own that intent.
 */
import type { ServicePage } from "./service-pages";

const UPDATED = "2026-10-18";
const SPED_HUB = { label: "Special Education Staffing", slug: "special-education-staffing" };
const PARA_HUB = { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" };

const cite = (label: string, href: string) =>
  `<span class="cite">(source: <a href="${href}" rel="noopener" target="_blank">${label}</a>)</span>`;

/** Primary sources, fetched and checked 2026-10-18. */
const SRC = {
  cfrPara: "https://www.ecfr.gov/current/title-34/section-200.58",
  cfrPersonnel: "https://www.ecfr.gov/current/title-34/section-300.156",
  paCh14: "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/022/chapter14/s14.105.html",
  paCspg61:
    "https://www.pa.gov/agencies/education/programs-and-services/educators/certification/certification-staffing/staffing-guidelines/cspg-61-special-education-pk-8-and-special-education-7-12",
  paChecks: "https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks",
  nj14: "https://www.nj.gov/education/code/current/title6a/chap14.pdf",
  nj9b: "https://www.nj.gov/education/code/current/title6a/chap9b.pdf",
  njParaMemo: "https://www.nj.gov/education/broadcasts/2025/sep/17/BiannualReportingofParaprofessionalStaff.pdf",
  njParaSoa: "https://www.nj.gov/education/about/counties/docs/Biannual_Statement_of_Assurance_Use_of_Paraprofessional_Staff.pdf",
  njCrim: "https://www.nj.gov/education/crimhist/",
  dcOsseLetter:
    "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/ESSA%20Personnel%20Requirements.pdf",
  // Parentheses percent-encoded so the [label](url) link syntax in `sections` does not cut the URL short.
  dcWorkforce:
    "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20%28Oct%2028%29.pdf",
  dcEval: "https://code.dccouncil.gov/us/dc/council/code/sections/38-2561.02",
  dcTransition: "https://code.dccouncil.gov/us/dc/council/code/sections/38-2614",
  dcDiligence: "https://code.dccouncil.gov/us/dc/council/code/sections/38-951.03",
  dcFingerprint: "https://code.dccouncil.gov/us/dc/council/code/sections/4-1501.05",
  dcps: "https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements",
  dcApprentice: "https://osse.dc.gov/page/osse-apprenticeship-teaching",
  ny2006: "https://www.nysed.gov/special-education/section-2006-continuum-services",
  ny2001: "https://www.nysed.gov/special-education/section-2001-definitions",
  nySwd: "https://www.highered.nysed.gov/tcert/news/newsitem09.14.22_swd.html",
  nySpedSubject: "https://www.highered.nysed.gov/tcert/certificate/special-education-teacher.html",
  nyTa: "https://www.highered.nysed.gov/tcert/certificate/ta.html",
  nyTaScope: "https://www.highered.nysed.gov/tcert/pdf/TA%20Scope%20of%20Practice.pdf",
  nyPrints: "https://www.nysed.gov/educator-integrity/who-must-be-fingerprinted-charts",
  dePermit: "https://archive.regulations.delaware.gov/AdminCode/title14/1500/1517.shtml",
  deChecks: "https://archive.regulations.delaware.gov/AdminCode/title14/700/745.pdf",
  mdChecks: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113",
  mdHistory: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.2",
};

// ─────────────────────────── shared building blocks ───────────────────────────

const SPED_STEPS = [
  {
    n: "01",
    title: "Free 30-minute discovery call",
    body: "We map your open special education roles building by building — self-contained, resource, co-taught, and itinerant — along with the caseloads behind them and the certification each assignment requires. No cost, no obligation.",
  },
  {
    n: "02",
    title: "We source, screen, and credential",
    body: "We recruit against your openings, interview every candidate ourselves on IEP writing and behavior-plan implementation, verify certification for the exact assignment, and complete clearances and references.",
  },
  {
    n: "03",
    title: "You choose from a vetted shortlist",
    body: "Your special education director and principals interview fully credentialed candidates and make every final call. We never pressure a placement.",
  },
  {
    n: "04",
    title: "We stay through the placement",
    body: "We stay involved for the life of the placement, and any special educator you want to keep converts to your permanent staff with no conversion fee.",
  },
];

const PARA_STEPS = [
  {
    n: "01",
    title: "Free 30-minute discovery call",
    body: "We map your para and aide openings building by building — 1:1 IEP assignments, classroom paras, personal care, and behavior support — and the qualifications and clearances each one requires.",
  },
  {
    n: "02",
    title: "We source, screen, and credential",
    body: "Every candidate is interviewed by us, cleared, reference-checked with prior schools, and screened for de-escalation and personal-care comfort before their name reaches your desk.",
  },
  {
    n: "03",
    title: "You choose from a vetted shortlist",
    body: "Your principals and case managers interview fully cleared candidates and decide who sits beside your students.",
  },
  {
    n: "04",
    title: "We stay through the placement",
    body: "Weekly pay and a shift app keep your aides showing up. Hire any para permanently at no conversion fee.",
  },
];

const FIRST_PHILLY_STATS = [
  { value: "100%", label: "Open special education teacher roles filled at First Philadelphia Public Charter School" },
  { value: "2 wks", label: "From request to filled, for each of those special education roles" },
  { value: "100%", label: "Retention of the educators we placed there, partner since 2021" },
  { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
];

const DC_SPED_STATS = [
  { value: "100%", label: "Certified special education teacher roles filled at IDEA Public Charter School" },
  { value: "100%", label: "Retention of the educators we placed at IDEA PCS, partner since 2022" },
  { value: "2 wks", label: "From request to filled at IDEA PCS" },
  { value: "4", label: "Qualified candidates per opening at Cesar Chavez Public Charter School" },
];

const ODYSSEY_PARA_STATS = [
  { value: "95%", label: "Day-to-day fill rate at Odyssey Public Charter School, on the weekly-pay model our paras work under" },
  { value: "+40%", label: "Improvement over the school's previous staffing provider" },
  { value: "120+", label: "Roles filled at Odyssey, including paraprofessionals and 1:1 aides" },
  { value: "$0", label: "Fee to hire a FocusedEDU para as your permanent employee" },
];

const DC_PARA_STATS = [
  { value: "4", label: "Qualified candidates per opening, dedicated aides included, at Cesar Chavez PCS" },
  { value: "100%", label: "Retention of the educators we placed at IDEA Public Charter School" },
  { value: "95%", label: "Day-to-day fill rate at Odyssey Public Charter School on the same weekly-pay model" },
  { value: "$0", label: "Fee to hire a FocusedEDU aide as your permanent employee" },
];

/** First Philadelphia proof, phrased per market so no two pages repeat it verbatim. */
const firstPhillyProof = (lead: string, close: string) => `<h2 id="proof-first-philadelphia">Proof: every special education teacher we placed at First Philadelphia stayed</h2>
<p class="answer-lead">${lead}</p>
<p>First Philadelphia came to FocusedEDU for its most difficult roles — certified special education teachers, paraprofessionals, substitute teachers, and one-on-one aides, the positions where a vacancy lands directly on the students who can least afford it. We built a customized recruiting plan and a dedicated pipeline, presented multiple qualified candidates per position so the school could choose the right fit, and owned advertising, interviewing, credentialing, and screening end to end. ${close} Read the full <a href="/case-studies/first-philadelphia-public-charter-school">First Philadelphia Public Charter School case study</a>.</p>`;

/** Odyssey proof for the paraprofessional pages. */
const odysseyParaProof = (lead: string, close: string) => `<h2 id="proof-odyssey">Proof: a 95% day-to-day fill rate on the model our paras work under</h2>
<p class="answer-lead">${lead}</p>
<p>Odyssey Public Charter School in Wilmington, Delaware serves more than 1,000 K-8 students drawn from five districts and protects a 12:1 student-teacher ratio. When the agencies already under contract could not fill its open roles, Odyssey brought in FocusedEDU in 2021. We have since made 120+ placements across 13+ role types — one-on-one aides, paraprofessionals, substitute and certified teachers, SLPs, OTs, PTs, psychologists, reading specialists, bus drivers, and support staff — and day-to-day coverage runs at a 95% fill rate, a 40%+ improvement over the previous provider. ${close} Read the full <a href="/case-studies/odyssey-charter-school">Odyssey Public Charter School case study</a>.</p>`;

const cta = (question: string, lead: string, extra: string) => `<h2 id="next-step">${question}</h2>
<p>${lead}</p>
<p><a href="/book-a-call">Book a discovery call</a> or <a href="/request-staff">send a staffing request</a> — our team responds within 48 hours. ${extra}</p>`;

const SPED_SCREEN =
  "Special education candidates are interviewed on the parts of the job a résumé hides: IEP authorship, not attendance; progress-monitoring habits that hold up in a due-process review; behavior-plan implementation, including what the candidate does when the plan stops working; and how they direct the paraprofessionals in their room.";

const PARA_SCREEN =
  "Our para screen probes what predicts whether an assignment holds: real de-escalation experience — what the candidate actually did the last time a student escalated; honest comfort with personal-care duties, asked directly; familiarity with IEP data collection; and a reliability history we verify with prior schools, because on a 1:1 assignment the para's absence is the crisis.";

const PAY_MODEL =
  "Our paras are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app instead of waiting on a 5 a.m. phone call. That is why the pool stays active in February, not just September.";

// ─────────────────────────────── the pages ───────────────────────────────

export const spedParaStatePages: ServicePage[] = [
  // ─────────────────────── Special education · Pennsylvania ───────────────────────
  {
    slug: "special-education-staffing-pennsylvania",
    eyebrow: "Special education staffing · Pennsylvania",
    h1: "Special Education Staffing in Pennsylvania",
    metaTitle: "Special Education Staffing in Pennsylvania",
    metaDescription:
      "Certified special education teachers, case managers, paras, and personal care assistants for Pennsylvania schools — Chapter 14-ready and Act 34/151/114-cleared.",
    hero: "FocusedEDU is a Pennsylvania special education staffing agency headquartered in Wayne, PA. We place PDE-certified special education teachers, case managers, instructional paraprofessionals, personal care assistants, and related service providers for districts, charters, and Intermediate Units — with certification verified for the assignment and Act 34, 151, and 114 clearances complete before you interview.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A special education teacher working with a small group in a Pennsylvania classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "Pennsylvania" }],
    parent: SPED_HUB,
    roles: [
      "Special education teachers",
      "Special education case managers",
      "Long-term special education substitutes",
      "Instructional paraprofessionals",
      "Personal care assistants",
      "1:1 aides",
      "SLPs",
      "OTs",
      "PTs",
      "School psychologists",
      "BCBAs",
    ],
    stats: FIRST_PHILLY_STATS,
    steps: SPED_STEPS,
    verify: [
      "PDE Special Education PK-12 certificate (or a still-valid PK-8, 7-12, or N-12 certificate) verified for the assignment",
      "Bachelor's degree transcript on file",
      "Act 34 Pennsylvania State Police criminal history report",
      "Act 151 Pennsylvania child abuse history clearance",
      "Act 114 FBI fingerprint-based criminal history report",
      "TB test and vaccination documentation",
      "Reference checks with prior special education supervisors",
      "IEP-writing and behavior-plan screening before the shortlist",
    ],
    quote: {
      text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
    },
    sections: [
      {
        heading: "What Pennsylvania special education programs need from a staffing partner",
        body: "Pennsylvania runs special education on a caseload chart. Chapter 14 assigns every student with a disability to a special education teacher's caseload and caps that caseload by support type and by how much of the day the student spends in special education. That makes a special education vacancy different from any other opening in the building: the students do not wait for the hire. They are redistributed onto colleagues' caseloads, and every week the position sits open pushes another teacher toward or over the limit the regulation sets.\n\nThe roles that strain first are the ones with the tightest charts and the most specialized skill sets — autistic support and multiple disabilities support classrooms, emotional support, and life skills — followed closely by the instructional paraprofessionals and personal care assistants those classrooms depend on. A partner has to fill the certified teacher, the case manager, and the adults beside them, with files that hold up when the state monitors.",
      },
      {
        heading: "How FocusedEDU staffs Pennsylvania special education",
        body: `FocusedEDU is headquartered in Wayne, on the Main Line, and has staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. ${SPED_SCREEN}\n\nThree commitments set the model apart. One client per region: the special education teachers we recruit in your area are presented to you and to no competing district. Credentialing in half the time: our automated system tracks every certificate, clearance, and expiration, and in past engagements we have placed certified special education teachers within two weeks. Temp-to-perm at no cost: evaluate a special educator in your building, then hire them with no conversion fee.\n\nFor the adults who support those classrooms, see [paraprofessional staffing in Pennsylvania](/paraprofessional-staffing-pennsylvania); for leave coverage, see [substitute teacher staffing in Pennsylvania](/substitute-teacher-staffing-pennsylvania); for every other role, see [Pennsylvania K-12 staffing](/pennsylvania-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="pa-sped-certification">Pennsylvania special education teacher certification</h2>
<p class="answer-lead">Pennsylvania special education teachers hold PDE's Special Education PK-12 certificate or a predecessor that remains valid, such as PK-8 or 7-12. The PK-12 certificate covers students age 3-21 and needs no separate content certificate. Federal rules add a bachelor's degree and full certification that has not been waived on an emergency basis.</p>
<p>PDE's Certification and Staffing Policy Guideline states that a person holding a valid Special Education PK-12 (age 3-21) certificate "is qualified to teach all special education students from PreK through grade 12," and notes that the certificate does not require a corresponding content-specific certificate to be issued. The guideline describes the assignment in terms every special education director will recognize: the holder may "render diagnostic, prescriptive, and education services designed within an Individualized Education Plan," "assist in writing the IEP for the identified students," and "provide appropriate modification to curriculum." Special Education PK-8, 7-12, and N-12 certificates remain valid for their grade scopes, and a school entity may request a case-by-case staffing exception to the PK-8 / 7-12 boundary under 22 Pa. Code § 49.85 ${cite("PDE, CSPG 61 — Special Education PK-12", SRC.paCspg61)}.</p>
<p>Federal law sets the floor underneath the state certificate. Under 34 CFR 300.156(c), each public school special education teacher must have full state certification as a special education teacher, must not have had certification requirements "waived on an emergency, temporary, or provisional basis," and must hold at least a bachelor's degree ${cite("34 CFR 300.156, eCFR", SRC.cfrPersonnel)}. We verify both layers — the PDE certificate for the specific assignment and the degree on file — before a name reaches your shortlist.</p>
<h2 id="pa-chapter-14-caseloads">Chapter 14 caseload limits Pennsylvania schools staff against</h2>
<p class="answer-lead">Pennsylvania caps special education caseloads under 22 Pa. Code § 14.105 by support type and intensity. A full-time learning support teacher may carry 12 students, a full-time autistic support or multiple disabilities support teacher 8, and an itinerant learning support teacher 50. Every student with a disability must be assigned to a special education teacher's caseload.</p>
<p>The regulation defines intensity by time: itinerant support is special education for 20% or less of the school day, supplemental is more than 20% but less than 80%, and full-time is 80% or more. The chart then sets maximums — learning support and emotional support at 50 itinerant, 20 supplemental, and 12 full-time; life skills support at 20, 20, and 12 for grades K-6 or 15 for grades 7-12; deaf and hearing impaired support at 50, 15, and 8; and autistic support at 12, 8, and 8 ${cite("22 Pa. Code § 14.105", SRC.paCh14)}.</p>
<p>A district may ask PDE to approve a different chart through its special education plan, but it must show that assigned staff can still deliver every IEP, justify the deviation, and give parents and teachers a chance to comment first — and PDE may withdraw that approval if it finds caseloads inadequate, weighing indicators such as graduation, dropout, and assessment results for students with disabilities ${cite("22 Pa. Code § 14.105(c)(4) and (7)", SRC.paCh14)}. Classes serving students from more than one district follow the chart of the district where the class is located. That is why our discovery call starts with one question: which caseloads are at or over the line today.</p>
<h2 id="pa-paras-and-pcas">Paraprofessionals and personal care assistants in Pennsylvania special education</h2>
<p class="answer-lead">Under the same section, Pennsylvania instructional paraprofessionals need two years of postsecondary study, an associate degree or higher, or a passing result on a state or local assessment, plus 20 hours of staff development every school year. Personal care assistants provide one-to-one support and log the same 20 hours of assignment-related training annually.</p>
<p>The regulation is specific about the work: an instructional paraprofessional supports "one-on-one or group review of material taught by certificated staff, classroom management and implementation of positive behavior support plans," while a personal care assistant may support more than one student, "but not at the same time" ${cite("22 Pa. Code § 14.105(a)", SRC.paCh14)}. We staff both roles alongside the teachers they work for; the full requirements, including the Title I standard, are on our <a href="/paraprofessional-staffing-pennsylvania">Pennsylvania paraprofessional staffing</a> page.</p>
${firstPhillyProof(
  "At First Philadelphia Public Charter School, a FocusedEDU partner since 2021, we filled 100% of open special education teacher roles, each within two weeks of the request, and retained 100% of the educators we placed — giving students with IEPs unbroken support from the same teachers all year.",
  "Pennsylvania special education clients also include Chester Community Charter School and Delta School in Philadelphia, whose CEO's words appear on this page.",
)}
<h2 id="for-candidates">For special education teachers looking for work in Pennsylvania</h2>
<p class="answer-lead">Certified special education teachers who work with FocusedEDU in Pennsylvania are presented to partner schools that interview them from a short, vetted list, with clearances and certification paperwork handled by our credentialing team. Every placement is temp-to-perm with no conversion fee to the school, so a strong fit can become a permanent contract.</p>
<p>You will need a PDE special education certificate (or an out-of-state certificate you are converting), your bachelor's degree transcript, and current Act 34, 151, and 114 clearances — we tell you exactly which documents to gather and in what order. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need special education teachers in Pennsylvania?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your caseloads, buildings, and certification needs first, then recruit a special education pipeline that serves your schools alone — one client per region, temp-to-perm at no cost.",
  "Comparing partners first? Read our guide to <a href=\"/blog/best-k12-staffing-agencies-for-schools-2026\">the best K-12 staffing agencies for schools</a>, see <a href=\"/special-education-staffing-new-jersey\">special education staffing in New Jersey</a>, or go back to <a href=\"/special-education-staffing\">special education staffing for school districts</a>.",
)}`,
    faqs: [
      {
        q: "What certification does a special education teacher need in Pennsylvania?",
        a: "PDE's Special Education PK-12 certificate, which covers students age 3-21 and does not require a separate content-area certificate. Special Education PK-8, 7-12, and N-12 certificates remain valid for their grade scopes. Federal IDEA rules also require at least a bachelor's degree and full certification that has not been waived on an emergency, temporary, or provisional basis.",
      },
      {
        q: "What are the special education caseload limits in Pennsylvania?",
        a: "22 Pa. Code § 14.105 sets maximums by support type and intensity. Learning support and emotional support are capped at 50 itinerant, 20 supplemental, and 12 full-time students; autistic support and multiple disabilities support at 12, 8, and 8; and life skills support at 20, 20, and 12 for grades K-6 or 15 for grades 7-12.",
      },
      {
        q: "What qualifications do special education paraprofessionals need in Pennsylvania?",
        a: "Instructional paraprofessionals need two years of postsecondary study, an associate degree or higher, or a passing result on a state or local assessment, and must document 20 hours of staff development each school year. Personal care assistants also complete 20 hours of assignment-related training annually. Both need Act 34, 151, and 114 clearances.",
      },
      {
        q: "How fast can FocusedEDU fill a special education teacher opening in Pennsylvania?",
        a: "Fast, and the record is concrete: at First Philadelphia Public Charter School we filled every open special education teacher role within two weeks of the request, and our automated credentialing cuts typical time-to-hire roughly in half.",
      },
      {
        q: "Will FocusedEDU also staff a competing district near us?",
        a: "No. We work with one client per region, so the special education teachers, paraprofessionals, and clinicians we recruit in your area are presented only to you — never to the district or charter competing with you for the same candidates.",
      },
      {
        q: "What does it cost to hire a FocusedEDU special education teacher permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost — if a special educator earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [
      SPED_HUB,
      { label: "Paraprofessional Staffing in Pennsylvania", slug: "paraprofessional-staffing-pennsylvania" },
      { label: "Pennsylvania Substitute, Special Ed & K-12 Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Special Education Staffing in New Jersey", slug: "special-education-staffing-new-jersey" },
      { label: "Special Education Staffing in New York", slug: "special-education-staffing-new-york" },
    ],
  },

  // ─────────────────────── Special education · New Jersey ───────────────────────
  {
    slug: "special-education-staffing-new-jersey",
    eyebrow: "Special education staffing · New Jersey",
    h1: "Special Education Staffing in New Jersey",
    metaTitle: "Special Education Staffing Agency in New Jersey",
    metaDescription:
      "Teachers of students with disabilities, resource and special class teachers, and classroom aides for New Jersey schools — matched to N.J.A.C. 6A:14 programs.",
    hero: "FocusedEDU staffs New Jersey special education programs with teachers of students with disabilities, in-class resource and special class teachers, classroom aides, and related service providers for districts, charter schools, and renaissance schools. Every candidate's endorsement is matched to the N.J.A.C. 6A:14 program they will teach, and their criminal history review is complete before you interview.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A special education teacher leading an in-class resource lesson in a New Jersey classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New Jersey" }],
    parent: SPED_HUB,
    roles: [
      "Teachers of students with disabilities",
      "In-class resource teachers",
      "Pull-out replacement teachers",
      "Special class teachers",
      "Case managers",
      "Classroom aides",
      "Personal aides",
      "SLPs",
      "OTs",
      "PTs",
      "School psychologists",
      "BCBAs",
    ],
    stats: FIRST_PHILLY_STATS,
    steps: SPED_STEPS,
    verify: [
      "Teacher of Students with Disabilities endorsement verified for the assignment",
      "Instructional certificate appropriate to the subject or grade being taught",
      "New Jersey criminal history review through the Office of Student Protection",
      "Bachelor's degree transcript on file",
      "TB test and vaccination documentation",
      "Reference checks with prior special education supervisors",
      "IEP-writing and behavior-plan screening before the shortlist",
      "Every credential tracked and expiration-flagged in our credentialing system",
    ],
    quote: {
      text: "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
      name: "Erin D. Murphy-Richardson",
      role: "Superintendent, The Barack Obama Green Charter Schools (Plainfield, NJ)",
    },
    sections: [
      {
        heading: "What New Jersey special education programs need from a staffing partner",
        body: "New Jersey regulates special education program by program. N.J.A.C. 6A:14 sets the group size for in-class resource, pull-out support, pull-out replacement, and special class programs, and in many of those programs the limit only rises when an instructional or classroom aide is added. That ties teacher staffing and aide staffing together in a way buyers outside the state rarely see: a special class running at its aided size is one aide absence away from a compliance problem, and a vacant teacher of students with disabilities means an IEP-specified program cannot be delivered at all.\n\nThe pressure lands on every kind of school entity — traditional districts, county special services, charter schools, and renaissance schools — and it lands hardest on the most specialized programs: autism classes held to a three-to-one ratio, classes for students with emotional regulation impairments, and multiple disabilities programs. A partner has to staff the certified teacher and the aides that make the room legal at the same time.",
      },
      {
        heading: "How FocusedEDU staffs New Jersey special education",
        body: `FocusedEDU is headquartered in Wayne, Pennsylvania — a drive over the bridges to South Jersey and up the Turnpike, not a flight — and has staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. ${SPED_SCREEN}\n\nWe work with one client per region, so the teachers of students with disabilities we recruit in your county are presented to you and to no competing district. Our automated credentialing tracks every endorsement, criminal history approval, and expiration, cuts typical time-to-hire roughly in half, and in past engagements has put certified special education teachers in classrooms within two weeks. Every placement is temp-to-perm at no cost.\n\nNew Jersey clients include Bridgeton Public Schools, The Barack Obama Green Charter Schools in Plainfield, and Hope Community Charter School in Camden. For the aides those programs require, see [paraprofessional staffing in New Jersey](/paraprofessional-staffing-new-jersey); for daily coverage, see [substitute teacher staffing in New Jersey](/substitute-teacher-staffing-new-jersey); for every other role, see [New Jersey K-12 staffing](/new-jersey-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="nj-sped-certification">New Jersey special education teacher certification</h2>
<p class="answer-lead">New Jersey special education teachers hold the Teacher of Students with Disabilities endorsement under N.J.A.C. 6A:9B-11.4, layered on an instructional certificate appropriate to the subject or grade they teach. The endorsement authorizes consultative services and supportive resource programs for students with disabilities in general education, preschool through grade 12.</p>
<p>The rule requires a candidate for the endorsement to "Possess a CE, CEAS, or standard New Jersey instructional certificate with an endorsement appropriate to the subject or grade level to be taught." Candidates on the CEAS route complete an educator preparation program that includes a minimum of 21 credit hours in special education topics, and provisional teachers who hold a CE with the endorsement must be enrolled in a 21-credit program while they teach ${cite("N.J.A.C. 6A:9B-11.4", SRC.nj9b)}. The same chapter states that the holder of a special education endorsement "also may provide consultative services and supportive resource programs, including modification and adaptation of curriculum and instruction to students with disabilities in general education programs in preschool through grade 12" ${cite("N.J.A.C. 6A:9B", SRC.nj9b)}.</p>
<p>Program rules then lock the endorsement to the room. A special class teacher "shall hold certification as a teacher of students with disabilities, teacher of blind or partially sighted, and/or teacher possessing the appropriate teacher of the deaf or hard of hearing certificate," depending on the students assigned ${cite("N.J.A.C. 6A:14-4.7(a)", SRC.nj14)}. Federal law adds a bachelor's degree and full certification that has not been waived on an emergency basis ${cite("34 CFR 300.156(c)", SRC.cfrPersonnel)}. We verify the endorsement against the specific program before a candidate reaches your shortlist.</p>
<h2 id="nj-group-sizes">N.J.A.C. 6A:14 group sizes New Jersey schools staff against</h2>
<p class="answer-lead">N.J.A.C. 6A:14 caps special education group sizes by program. In-class resource programs serve at most eight students with disabilities in preschool and elementary grades and ten at the secondary level. Special class limits — three students in an autism class without a classroom aide, ten in a mild-to-moderate learning and language class — rise only when aides are added.</p>
<p>Pull-out programs follow a separate table: a single-subject pull-out group may hold six elementary students without an aide or seven to nine with one, and nine secondary students without an aide or ten to twelve with one ${cite("N.J.A.C. 6A:14-4.6(m)", SRC.nj14)}. Special class limits climb with staffing — an autism class may grow from three students to four to six with a classroom aide, and to seven to nine at the secondary level only with two aides; mild intellectual disability classes go from 12 to 13-16; emotional regulation impairment classes from 9 to 10-12; and multiple disabilities classes from 8 to 9-12. A preschool disabilities class requires a classroom aide at any size and two aides above eight students ${cite("N.J.A.C. 6A:14-4.7(e)", SRC.nj14)}.</p>
<p>Two details catch schools out. Programs for students with autism and for students with severe to profound intellectual disabilities must maintain a three-to-one student-to-staff ratio, and "students with a personal aide shall not be included in the student count" when determining whether a classroom aide is required ${cite("N.J.A.C. 6A:14-4.7(e)", SRC.nj14)}. Staffing the teacher without the aide does not keep a class in compliance — which is why we staff the two together.</p>
<h2 id="nj-aides">Classroom aides in New Jersey special education programs</h2>
<p class="answer-lead">A New Jersey classroom aide works under the direction of a principal, special education teacher, general education teacher, or other appropriately certified staff member, and the job description for each special education classroom aide must be approved by the Department of Education through the county office of education.</p>
<p>When an IEP team determines a student needs it, a teacher aide may provide supplementary support such as "prompting, cueing and redirecting student participation" and "implementation of teacher-designed follow-up and practice activities" ${cite("N.J.A.C. 6A:14-4.1(e) and 4.5(b)", SRC.nj14)}. The full aide rules, including the twice-yearly Statement of Assurance and the Title I standard, are on our <a href="/paraprofessional-staffing-new-jersey">New Jersey paraprofessional staffing</a> page.</p>
${firstPhillyProof(
  "Across the Delaware River from Camden, at First Philadelphia Public Charter School, FocusedEDU filled 100% of open special education teacher roles, each within two weeks of the request, and retained 100% of the educators we placed. The partnership has held since 2021.",
  "The same recruiting engine serves our New Jersey partners, from Bridgeton in Cumberland County to Plainfield in Union County.",
)}
<h2 id="for-candidates">For special education teachers looking for work in New Jersey</h2>
<p class="answer-lead">Teachers of students with disabilities who work with FocusedEDU in New Jersey are presented to partner schools that interview them from a short, vetted list, with endorsement verification and criminal history paperwork handled by our credentialing team. Every placement is temp-to-perm with no conversion fee to the school.</p>
<p>You will need your Teacher of Students with Disabilities endorsement (or a CE or CEAS on the path to it), the instructional endorsement for your subject or grade, and an approval from New Jersey's Office of Student Protection, which runs criminal background checks for public, charter, and nonpublic school applicants and for authorized vendors through the State Police and the FBI ${cite("NJDOE, Criminal History Review", SRC.njCrim)}. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need special education teachers in New Jersey?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your programs, group sizes, and endorsement needs first, then recruit a special education pipeline for your schools alone — one client per region, temp-to-perm at no cost.",
  "Comparing partners first? Read our guide to <a href=\"/blog/best-k12-staffing-agencies-for-schools-2026\">the best K-12 staffing agencies for schools</a>, see <a href=\"/special-education-staffing-pennsylvania\">special education staffing in Pennsylvania</a>, or go back to <a href=\"/special-education-staffing\">special education staffing for school districts</a>.",
)}`,
    faqs: [
      {
        q: "What certification does a special education teacher need in New Jersey?",
        a: "The Teacher of Students with Disabilities endorsement under N.J.A.C. 6A:9B-11.4, held together with an instructional certificate appropriate to the subject or grade being taught. Special class teachers must hold that endorsement or, for students with visual or hearing impairments, the matching blind or partially sighted or deaf or hard of hearing certificate.",
      },
      {
        q: "What is the maximum class size for a special education class in New Jersey?",
        a: "It depends on the program. Under N.J.A.C. 6A:14-4.7(e), an autism class may have three students without a classroom aide and up to six with one (seven to nine at the secondary level with two aides); a mild-to-moderate learning and language class 10, or up to 16 with an aide; a mild intellectual disability class 12, or up to 16 with an aide.",
      },
      {
        q: "How many students can be in an in-class resource program in New Jersey?",
        a: "No more than eight students with disabilities at the preschool or elementary level and ten at the secondary level, under N.J.A.C. 6A:14-4.6. Unlike pull-out replacement groups, the in-class supplementary instruction limit cannot be raised through the 6A:14-4.9 exception process.",
      },
      {
        q: "Do New Jersey special education classroom aides need state approval?",
        a: "The job description does. Each special education classroom aide's job description must be approved by the Department of Education through the county office of education, and districts, charter schools, and renaissance schools file a Statement of Assurance on paraprofessional staff by September 30 and January 31 each year.",
      },
      {
        q: "How fast can FocusedEDU fill a special education teacher opening in New Jersey?",
        a: "Our automated credentialing cuts typical time-to-hire roughly in half, and in past engagements we have placed certified special education teachers within two weeks — at First Philadelphia Public Charter School, every open special education teacher role was filled within two weeks of the request.",
      },
      {
        q: "Will FocusedEDU also staff the district next to ours?",
        a: "No. We work with one client per region, so the special education teachers and aides we recruit in your county are presented only to you. And every placement is temp-to-perm at no cost if you want to hire the person permanently.",
      },
    ],
    related: [
      SPED_HUB,
      { label: "Paraprofessional Staffing in New Jersey", slug: "paraprofessional-staffing-new-jersey" },
      { label: "New Jersey Substitute, Special Ed & K-12 Staffing", slug: "new-jersey-education-staffing" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      { label: "Special Education Staffing in Pennsylvania", slug: "special-education-staffing-pennsylvania" },
      { label: "Special Education Staffing in New York", slug: "special-education-staffing-new-york" },
    ],
  },

  // ─────────────────────── Special education · Washington, DC ───────────────────────
  {
    slug: "special-education-staffing-washington-dc",
    eyebrow: "Special education staffing · Washington, DC",
    h1: "Special Education Staffing in Washington, DC",
    metaTitle: "Special Education Staffing in Washington, DC",
    metaDescription:
      "Special education teachers, case managers, and one-on-one aides for DCPS and DC charter LEAs — 100% of certified SPED roles filled at IDEA PCS.",
    hero: "FocusedEDU staffs special education for DCPS schools and DC public charter LEAs: certified special education teachers, case managers, dedicated and one-on-one aides, and related service providers. Our DC record includes 100% of certified special education teacher roles filled at IDEA Public Charter School and four qualified candidates per opening at Cesar Chavez Public Charter School.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "Special education staff collaborating in a Washington, DC public charter school",
    updated: UPDATED,
    areaServed: [{ type: "City", name: "Washington, DC" }],
    parent: SPED_HUB,
    roles: [
      "Special education teachers",
      "Special education case managers",
      "Subject-certified long-term substitutes",
      "Dedicated aides",
      "One-on-one aides",
      "SLPs",
      "OTs",
      "PTs",
      "School psychologists",
      "BCBAs",
    ],
    stats: DC_SPED_STATS,
    steps: SPED_STEPS,
    verify: [
      "OSSE special education credential verified for DCPS assignments",
      "Bachelor's degree transcript on file for every special education teacher, DCPS or charter",
      "Fingerprint and National Crime Information Center check under DC Code Title 4, Chapter 15",
      "Employment-history review required of contracted service providers under DC Code § 38-951.03",
      "TB test and vaccination documentation",
      "Reference checks with prior special education supervisors",
      "IEP-writing and caseload-management screening before the shortlist",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    quote: {
      text: "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
      name: "Elias Pappas",
      role: "CEO, Odyssey Charter School (Wilmington, DE)",
    },
    sections: [
      {
        heading: "What DC special education programs need from a staffing partner",
        body: `Special education is the hardest subject area to staff in the District. [OSSE's own workforce report](${SRC.dcWorkforce}) found that in SY2023-24, 8 percent of the city's 1,140 special education FTEs were vacant — the highest vacancy rate of any subject area. And because DCPS is one LEA while every public charter network is its own LEA, each charter carries full responsibility for evaluations, IEPs, and service delivery at every one of its campuses, usually without a central district HR office behind it.\n\nDC law puts hard clocks on that work. Evaluations run on a 60-day timeline from parental consent, and transition planning begins with the first IEP after a student turns 14. Those clocks run on people: when a case manager's seat is empty, evaluations, IEP meetings, and transition plans queue up behind it. A partner has to fill the certified special educator and the dedicated aides beside them — and recruit from a regional pool that spans Maryland and Virginia, where credentials and reciprocity are the first question rather than the last.`,
      },
      {
        heading: "How FocusedEDU staffs DC special education",
        body: `Two of our four published case studies are DC public charter schools, both partners since 2022. ${SPED_SCREEN} The methodology was built by our founder, Robert Flom, a former K-12 teacher, and it is applied the same way to DCPS and charter candidates.\n\nWe work with one client per region, so the special educators we recruit for your LEA are never shopped to the charter competing with you for the same families. Our automated credentialing tracks every credential, clearance, and expiration and cuts typical time-to-hire roughly in half. Every placement is temp-to-perm at no cost.\n\nFor the aides who support those classrooms, see [paraprofessional staffing in Washington, DC](/paraprofessional-staffing-washington-dc); for leave and daily coverage, see [substitute teacher staffing in Washington, DC](/substitute-teacher-staffing-washington-dc); for every other role, see [Washington, DC K-12 staffing](/washington-dc-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="dc-who-can-teach-sped">Who can teach special education in DC: DCPS versus charter LEAs</h2>
<p class="answer-lead">In DCPS, a special education teacher needs an OSSE special education credential and at least a bachelor's degree. In DC public charter schools, OSSE has advised that licensure and certification requirements do not apply because of the District's charter law — but the federal requirement that special education teachers hold at least a bachelor's degree still does.</p>
<p>The federal rule, 34 CFR 300.156(c), requires each public school special education teacher to have full state certification, no certification "waived on an emergency, temporary, or provisional basis," and at least a bachelor's degree — "except that when used with respect to any teacher teaching in a public charter school, the teacher must meet the certification or licensing requirements, if any, set forth in the State's public charter school law" ${cite("34 CFR 300.156, eCFR", SRC.cfrPersonnel)}. OSSE applied that exception in a letter to LEA leaders: for teachers in DC public charter schools, "licensure and certification requirements do not apply. However, the requirement for special education teachers to hold at least a bachelor's degree remains in effect" ${cite("OSSE, ESSA Personnel Requirements letter", SRC.dcOsseLetter)}.</p>
<p>Flexibility on paper is not a lower bar in the classroom. A charter LEA still answers for IDEA compliance at every campus, so we screen charter candidates on IEP authorship, progress monitoring, and caseload management exactly as we screen DCPS candidates — and verify the degree and any credential for every one of them.</p>
<h2 id="dc-sped-timelines">DC special education timelines that make case managers non-negotiable</h2>
<p class="answer-lead">DC law requires an LEA to evaluate a student who may need special education within 60 days of parental consent, to make reasonable efforts to obtain consent within 30 days of referral, and to document an oral referral within three business days. The first IEP after a student turns 14 must include transition assessments and services.</p>
<p>The evaluation clock comes from DC Code § 38-2561.02, which also directs LEAs not to remove a student with a disability from an age-appropriate classroom "solely because of needed modifications in the general education curriculum" ${cite("DC Code § 38-2561.02", SRC.dcEval)}. The transition requirement — measurable postsecondary goals based on age-appropriate transition assessments, a statement of inter-agency responsibilities, and identification of possible adult services a year before graduation — is set by DC Code § 38-2614 ${cite("DC Code § 38-2614", SRC.dcTransition)}. Every one of those deadlines needs a credentialed adult who owns the caseload, which is why case managers are the first seat we fill.</p>
<h2 id="dc-clearances">Clearances DC requires of contracted special education staff</h2>
<p class="answer-lead">DC requires both LEAs and their contracted service providers to run a fingerprint-based criminal background check through the Mayor and the FBI and to review each applicant's employment history before placing anyone in a position with direct student interaction. DCPS clearances expire two years from the date on the clearance letter.</p>
<p>DC Code § 38-951.03 bars an LEA "or a contracted service provider of the local education agency" from employing or contracting anyone for such a position unless it collects contact information for prior employers whose work involved children, a written affirmation about any abuse or misconduct investigation, a criminal background check under Chapter 15 of Title 4, and a review of each former employer in the preceding seven years or the last three employers, whichever is longer ${cite("DC Code § 38-951.03", SRC.dcDiligence)}. The check itself is "by means of fingerprint and National Criminal Information Center checks conducted by the Mayor and the FBI" ${cite("DC Code § 4-1501.05", SRC.dcFingerprint)}, and DCPS notes that its clearance "expires two years from the date listed on your letter" ${cite("DCPS, Fingerprinting and Background Check Requirements", SRC.dcps)}. Our credentialing system completes and tracks all of it before a candidate is shortlisted.</p>
<h2 id="proof-idea-chavez">Proof: IDEA Public Charter School and Cesar Chavez Public Charter School</h2>
<p class="answer-lead">At IDEA Public Charter School, a FocusedEDU partner since 2022, we filled 100% of open certified special education teacher roles, each within two weeks of the request, with 100% retention of the educators we placed. At Cesar Chavez Public Charter School we present an average of four qualified candidates per opening.</p>
<p>IDEA was not only short on special education teachers, substitutes, and one-on-one aides — it was fighting an uphill reputation in the local talent market, and the agencies already under contract could not move the needle. We built a recruiting campaign around the real experiences of the contractors we placed there and let satisfied educators tell the story; the perception of IDEA as a place to work shifted, and every certified special education role filled. Read the <a href="/case-studies/idea-public-charter-school">IDEA Public Charter School case study</a>. Cesar Chavez runs a college-prep, public-policy program for 414 students in grades 6-12; we built it a dedicated pipeline for dedicated aides, special education teachers, and subject-certified long-term substitutes so the school chooses rather than settles. Read the <a href="/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School case study</a>.</p>
<h2 id="for-candidates">For special education teachers looking for work in DC</h2>
<p class="answer-lead">Special educators who work with FocusedEDU in DC are presented to DCPS schools and charter LEAs that interview them from a short, vetted list, with credential and clearance paperwork handled by our team. Every placement is temp-to-perm with no conversion fee to the school, so a strong fit can become a permanent role.</p>
<p>DCPS roles call for an OSSE credential; charter roles call for at least a bachelor's degree and the skills the job demands. Either way you will complete DC's fingerprint background check and employment-history review, and we walk you through each step. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need special education teachers in Washington, DC?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your campuses, caseloads, and credential needs first, then recruit a special education pipeline for your LEA alone — one client per region, temp-to-perm at no cost.",
  "Comparing partners first? Read our guide to <a href=\"/blog/best-k12-staffing-agencies-for-schools-2026\">the best K-12 staffing agencies for schools</a>, see <a href=\"/special-education-staffing-new-york\">special education staffing in New York</a>, or go back to <a href=\"/special-education-staffing\">special education staffing for school districts</a>.",
)}`,
    faqs: [
      {
        q: "Do special education teachers in DC charter schools need a teaching license?",
        a: "OSSE has advised that, because of the District's public charter school law, licensure and certification requirements do not apply to teachers in DC public charter schools — but special education teachers there must still hold at least a bachelor's degree. DCPS special education teachers need an OSSE credential.",
      },
      {
        q: "How long does a DC school have to complete a special education evaluation?",
        a: "Under DC Code § 38-2561.02, an LEA must assess or evaluate the student within 60 days of the parent or guardian's consent, and must make reasonable efforts to obtain that consent within 30 days of the referral. Oral referrals must be documented within three business days.",
      },
      {
        q: "When does transition planning start in a DC IEP?",
        a: "Under DC Code § 38-2614, the first IEP in effect after a student turns 14 must include transition assessments, measurable postsecondary goals, and the transition services needed to reach them. A year before graduation, the IEP team identifies adult services that may be appropriate.",
      },
      {
        q: "What background checks do contracted special education staff need in DC?",
        a: "A fingerprint and National Crime Information Center check through the Mayor and the FBI under DC Code § 4-1501.05, plus the employment-history review DC Code § 38-951.03 requires of LEAs and their contracted service providers. DCPS clearances expire two years from the date on the clearance letter.",
      },
      {
        q: "What has FocusedEDU done for DC charter schools?",
        a: "At IDEA Public Charter School we filled 100% of open certified special education teacher roles, each within two weeks of the request, with 100% retention of the educators we placed. At Cesar Chavez Public Charter School we present an average of four qualified candidates per opening.",
      },
      {
        q: "Will FocusedEDU also staff the charter LEA competing with ours?",
        a: "No. We work with one client per region, so the special educators and aides we recruit for your LEA are presented only to you. Every placement is also temp-to-perm at no cost.",
      },
    ],
    related: [
      SPED_HUB,
      { label: "Paraprofessional Staffing in Washington, DC", slug: "paraprofessional-staffing-washington-dc" },
      { label: "Washington DC Substitute, Special Ed & K-12 Staffing", slug: "washington-dc-education-staffing" },
      { label: "Substitute Teacher Staffing in Washington, DC", slug: "substitute-teacher-staffing-washington-dc" },
      { label: "Maryland Substitute, Special Ed & K-12 Staffing", slug: "maryland-special-education-staffing" },
      { label: "Special Education Staffing in New York", slug: "special-education-staffing-new-york" },
    ],
  },

  // ─────────────────────── Special education · New York ───────────────────────
  {
    slug: "special-education-staffing-new-york",
    eyebrow: "Special education staffing · New York",
    h1: "Special Education Staffing in New York",
    metaTitle: "Special Education Staffing Agency in New York",
    metaDescription:
      "Students with Disabilities-certified teachers, ICT and special class teachers, and teaching assistants for New York districts, BOCES, and charters.",
    hero: "FocusedEDU staffs New York special education programs with certified Students with Disabilities teachers, integrated co-teaching and special class teachers, teaching assistants, and related service providers for districts, BOCES, and charter schools. Each candidate's NYSED certificate is matched to the Part 200 setting they will teach, and fingerprint clearance is complete before you interview.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A special education teacher co-teaching a lesson in a New York classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New York" }],
    parent: SPED_HUB,
    roles: [
      "Students with Disabilities teachers",
      "Integrated co-teaching (ICT) teachers",
      "Special class teachers",
      "Resource room and consultant teachers",
      "Teaching assistants",
      "1:1 aides",
      "SLPs",
      "OTs",
      "PTs",
      "School psychologists",
      "BCBAs",
    ],
    stats: [
      { value: "100%", label: "Certified special education teacher roles filled at IDEA Public Charter School" },
      { value: "100%", label: "Open special education teacher roles filled at First Philadelphia Public Charter School" },
      { value: "2 wks", label: "From request to filled at both schools" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
    ],
    steps: SPED_STEPS,
    verify: [
      "NYSED Students with Disabilities certificate verified for the assignment",
      "Subject-area certification for special class teachers in grades 7-12",
      "Fingerprint-supported criminal history clearance through NYSED",
      "Bachelor's degree transcript on file",
      "TB test and vaccination documentation",
      "Reference checks with prior special education supervisors",
      "IEP-writing and co-teaching screening before the shortlist",
      "Every certificate tracked and expiration-flagged in our credentialing system",
    ],
    quote: {
      text: "They have consistently provided us with high-quality special education teachers, paraprofessionals, and related service providers who demonstrate professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School",
    },
    sections: [
      {
        heading: "What New York special education programs need from a staffing partner",
        body: "New York staffs special education to a continuum written into regulation. Part 200 of the Commissioner's regulations defines consultant teacher services, resource room programs, integrated co-teaching, and special classes, and gives each one its own caseload or class-size rule. Every ratio is a staffing formula: an integrated co-teaching class needs a special education teacher and a general education teacher in the room; a 12:1+1, 8:1+1, or 6:1+1 special class needs supplementary school personnel during every period of instruction; a resource room teacher's total caseload is capped.\n\nThat makes vacancies expensive in a specific way. When the special education half of an ICT pair is out, the class stops being ICT. When the teaching assistant in a self-contained room is out, the class runs over its ratio. Districts, BOCES, and charter networks across the state compete for the same certified special educators, and certification has been changing underneath them — a partner has to know which certificate fits which seat.",
      },
      {
        heading: "How FocusedEDU staffs New York special education",
        body: `FocusedEDU has staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. ${SPED_SCREEN} For ICT candidates we add the question that decides whether a co-taught room works: how the candidate shares planning and instruction with a general educator.\n\nWe work with one client per region, so the special education teachers and teaching assistants we recruit for your district or network are presented to you alone. Our automated credentialing tracks every certificate, fingerprint clearance, and expiration, cuts typical time-to-hire roughly in half, and in past engagements has placed certified special education teachers within two weeks. Every placement is temp-to-perm at no cost.\n\nFor teaching assistants and aides, see [paraprofessional staffing in New York](/paraprofessional-staffing-new-york); for daily coverage, see [substitute teacher staffing in New York](/substitute-teacher-staffing-new-york); for every other role, see [New York K-12 staffing](/new-york-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="ny-sped-certification">New York special education teacher certification</h2>
<p class="answer-lead">New York special education teachers hold a NYSED Students with Disabilities certificate. Since September 28, 2022, the Students with Disabilities (All Grades) certificate has covered pre-K through grade 12; Birth-Grade 2 certificates are still issued, and existing grade-band certificates remain valid. Special class teachers in grades 7-12 must also be certified in each subject they teach.</p>
<p>When the Board of Regents created the All Grades title, NYSED stated that it "permits individuals to teach students with disabilities in pre-Kindergarten through grade 12 in New York State public schools," and that holders of grade-band certificates (Birth-Grade 2, Grades 1-6, Grades 5-9, Grades 7-12) or a Permanent Special Education certificate "will not be required to obtain the new SWD (All Grades) certificate." The Grades 1-6 and 7-12 titles are being phased out: NYSED will not issue them, other than Professional certificates and reissued Initial certificates, with an effective date after September 1, 2030 ${cite("NYSED, New Students With Disabilities (All Grades) Certificate", SRC.nySwd)}.</p>
<p>The subject-area rule is the one that trips secondary schedules: "Effective July 1, 2021, all special education teachers who teach one or more subject areas in a special class (self-contained class) in grades 7-12 ... must be certified in each subject area they teach," through a standalone certificate or an extension on a special education base certificate ${cite("NYSED, Special Education Teacher Credential Options", SRC.nySpedSubject)}. Federal law adds a bachelor's degree and full certification not waived on an emergency basis ${cite("34 CFR 300.156(c)", SRC.cfrPersonnel)}. We match certificate, subject, and grade to the seat before a candidate reaches your shortlist.</p>
<h2 id="ny-part-200-ratios">Part 200 class sizes and caseloads New York schools staff against</h2>
<p class="answer-lead">8 NYCRR 200.6 caps New York special classes at 15 students; at 12 with supplementary school personnel when management needs require another adult; at 8 or 6 for intensive and highly intensive needs; and at 12 with a one-to-three staff ratio for severe multiple disabilities. Integrated co-teaching classes may include up to 12 students with disabilities.</p>
<p>The ICT rule is explicit about staffing: "School personnel assigned to each class shall minimally include a special education teacher and a general education teacher," and supplementary school personnel "may not serve as the special education teacher." Resource room instructional groups may not exceed five students per teacher, and a resource room teacher's total caseload may not exceed 20 students, or 25 in grades 7-12 or period-based multi-level middle schools, with variances of up to 50 percent allowed in New York City. Consultant teachers may carry no more than 20 students with disabilities, each receiving at least two hours of service a week ${cite("8 NYCRR 200.6", SRC.ny2006)}.</p>
<p>Supplementary school personnel means "a teacher aide or a teaching assistant" ${cite("8 NYCRR 200.1", SRC.ny2001)}, so every 12:1+1, 8:1+1, and 6:1+1 room depends on a paraprofessional as much as on its teacher. We staff both; the teaching assistant certificate changes that took effect in October 2025 are covered on our <a href="/paraprofessional-staffing-new-york">New York paraprofessional staffing</a> page.</p>
<h2 id="proof-idea">Proof: 100% of special education teacher roles filled, each within two weeks</h2>
<p class="answer-lead">At IDEA Public Charter School in Washington, DC, a FocusedEDU partner since 2022, we filled 100% of open certified special education teacher roles, each within two weeks of the request, and retained 100% of the educators we placed. At First Philadelphia Public Charter School we posted the same results.</p>
<p>IDEA was fighting an uphill reputation in its local talent market, and the agencies already under contract could not move the needle. We built a recruiting campaign around the real experiences of the contractors we had placed and let satisfied educators tell the story — and every certified special education role filled. Read the <a href="/case-studies/idea-public-charter-school">IDEA Public Charter School case study</a> and the <a href="/case-studies/first-philadelphia-public-charter-school">First Philadelphia Public Charter School case study</a>. The same pipeline method — recruited for one client, credentialed before the interview — is what we bring to New York districts, BOCES, and charter networks.</p>
<h2 id="for-candidates">For special education teachers looking for work in New York</h2>
<p class="answer-lead">Certified special educators who work with FocusedEDU in New York are presented to partner schools that interview them from a short, vetted list, with certificate verification and fingerprint paperwork handled by our credentialing team. Every placement is temp-to-perm with no conversion fee to the school, so a strong fit can become a permanent position.</p>
<p>You will need a NYSED Students with Disabilities certificate (and subject certification for a grades 7-12 special class), plus fingerprint clearance — NYSED requires it for applicants to public schools, charter schools, and BOCES, and for "employees of contract service providers who are placed within the school" ${cite("NYSED, Who Must Be Fingerprinted", SRC.nyPrints)}. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need special education teachers in New York?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your Part 200 settings, caseloads, and certification needs first, then recruit a special education pipeline for your schools alone — one client per region, temp-to-perm at no cost.",
  "Comparing partners first? Read our guide to <a href=\"/blog/best-k12-staffing-agencies-for-schools-2026\">the best K-12 staffing agencies for schools</a>, see <a href=\"/special-education-staffing-new-jersey\">special education staffing in New Jersey</a>, or go back to <a href=\"/special-education-staffing\">special education staffing for school districts</a>.",
)}`,
    faqs: [
      {
        q: "What certification does a special education teacher need in New York?",
        a: "A NYSED Students with Disabilities certificate. The SWD (All Grades) certificate, created September 28, 2022, covers pre-K through grade 12; Birth-Grade 2 certificates are still issued; and existing grade-band certificates remain valid. Since July 1, 2021, special class teachers in grades 7-12 must also be certified in each subject they teach.",
      },
      {
        q: "What is the maximum size of a special class in New York?",
        a: "Under 8 NYCRR 200.6(h), 15 students; 12 when management needs require supplementary school personnel; 8 for intensive and 6 for highly intensive management needs, each with supplementary personnel; and 12 for severe multiple disabilities with one staff member for every three students.",
      },
      {
        q: "How many students with disabilities can be in an integrated co-teaching class?",
        a: "No more than 12, unless a variance applies, and the class must be staffed by at least a special education teacher and a general education teacher. Teaching assistants or aides assigned to the class may not serve as the special education teacher.",
      },
      {
        q: "What is the resource room caseload limit in New York?",
        a: "Instructional groups may not exceed five students per teacher, and a resource room teacher may serve no more than 20 students with disabilities in total, or 25 in grades 7-12. New York City may receive a variance of up to 50 percent on both limits.",
      },
      {
        q: "Do contracted special education staff need fingerprint clearance in New York?",
        a: "Yes. NYSED's chart requires fingerprinting for applicants to public schools, charter schools, and BOCES and for employees of contract service providers placed within a school, when the assignment exceeds five days and involves direct contact with students under 21.",
      },
      {
        q: "How fast can FocusedEDU fill a special education opening, and what does conversion cost?",
        a: "Our automated credentialing cuts typical time-to-hire roughly in half, and in past engagements we have placed certified special education teachers within two weeks. Every placement is temp-to-perm at no cost, and we work with one client per region.",
      },
    ],
    related: [
      SPED_HUB,
      { label: "Paraprofessional Staffing in New York", slug: "paraprofessional-staffing-new-york" },
      { label: "New York Substitute, Special Ed & K-12 Staffing", slug: "new-york-education-staffing" },
      { label: "Substitute Teacher Staffing in New York", slug: "substitute-teacher-staffing-new-york" },
      { label: "Special Education Staffing in New Jersey", slug: "special-education-staffing-new-jersey" },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },

  // ─────────────────────── Paraprofessional · Pennsylvania ───────────────────────
  {
    slug: "paraprofessional-staffing-pennsylvania",
    eyebrow: "Paraprofessional staffing · Pennsylvania",
    h1: "Paraprofessional Staffing in Pennsylvania",
    metaTitle: "Paraprofessional Staffing in Pennsylvania",
    metaDescription:
      "Instructional paraprofessionals, personal care assistants, and 1:1 aides for Pennsylvania schools — Chapter 14-qualified, Act 34/151/114-cleared, paid weekly.",
    hero: "FocusedEDU places instructional paraprofessionals, personal care assistants, 1:1 aides, and classroom aides in Pennsylvania districts, charters, and Intermediate Units. Every para is screened against the 22 Pa. Code § 14.105 qualification standard, cleared under Acts 34, 151, and 114, paid weekly, and available temp-to-perm at no cost to your school.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A paraprofessional supporting a student during a lesson in a Pennsylvania classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "Pennsylvania" }],
    parent: PARA_HUB,
    roles: [
      "Instructional paraprofessionals",
      "Personal care assistants",
      "1:1 aides",
      "Classroom aides",
      "Autistic support aides",
      "Behavior support aides",
      "Substitute paraprofessionals",
    ],
    stats: ODYSSEY_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "22 Pa. Code § 14.105 qualification route documented: two years of postsecondary study, an associate degree, or a passing assessment",
      "High school diploma or equivalent on file for every para",
      "Act 34 Pennsylvania State Police criminal history report",
      "Act 151 Pennsylvania child abuse history clearance",
      "Act 114 FBI fingerprint-based criminal history report",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    sections: [
      {
        heading: "What Pennsylvania schools need from a paraprofessional partner",
        body: "In Pennsylvania special education, the paraprofessional is often the adult the IEP actually names. A 1:1 aide written into a student's plan, a personal care assistant supporting medical equipment and daily living skills, the second and third adults in an autistic support or life skills classroom — when any of them is absent, a required service is missed, a teacher is pulled from instruction to cover, or a classroom slips out of the ratio its program was built on.\n\nPennsylvania also expects more of these roles than many buyers realize. Chapter 14 sets a qualification standard for instructional paraprofessionals and an annual training requirement for both instructional paras and personal care assistants, on top of the three clearances every school employee carries. A partner has to deliver people who meet the standard on day one and keep showing up through February.",
      },
      {
        heading: "How FocusedEDU staffs Pennsylvania paraprofessionals",
        body: `${PAY_MODEL} ${PARA_SCREEN}\n\nWe are a Pennsylvania firm, headquartered in Wayne, with a screening standard built by our founder, Robert Flom, a former K-12 teacher who worked alongside paras daily. We work with one client per region, so the aides we recruit in your area are never offered to the district or charter down the road. Our automated credentialing tracks every clearance and expiration and cuts typical time-to-hire roughly in half. And every placement is temp-to-perm at no cost.\n\nFor the certified teachers those paras work for, see [special education staffing in Pennsylvania](/special-education-staffing-pennsylvania); for substitutes, see [substitute teacher staffing in Pennsylvania](/substitute-teacher-staffing-pennsylvania); for every other role, see [Pennsylvania K-12 staffing](/pennsylvania-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="pa-para-requirements">Pennsylvania paraprofessional requirements</h2>
<p class="answer-lead">Pennsylvania instructional paraprofessionals who work with students with disabilities must meet one of three standards under 22 Pa. Code § 14.105: at least two years of postsecondary study, an associate degree or higher, or a rigorous standard of quality demonstrated on a state or local assessment. They must also complete 20 hours of staff development every school year.</p>
<p>The regulation defines the role precisely. An instructional paraprofessional "works under the direction of a certificated staff member to support and assist in providing instructional programs and services to children with disabilities," and that support "includes one-on-one or group review of material taught by certificated staff, classroom management and implementation of positive behavior support plans," in a special education class, a regular education class, or another setting the IEP specifies ${cite("22 Pa. Code § 14.105(a)", SRC.paCh14)}.</p>
<h3>Personal care assistants</h3>
<p>A personal care assistant "provides one-to-one support and assistance to a student, including support and assistance in the use of medical equipment," along with activities of daily living and monitoring health and behavior. A personal care assistant may support more than one student, "but not at the same time," and must show evidence of 20 hours of assignment-related staff development each school year ${cite("22 Pa. Code § 14.105(a)(4)", SRC.paCh14)}.</p>
<h3>Title I paraprofessionals</h3>
<p>Paraprofessionals who provide instructional support in a Title I schoolwide program school, or who are paid with Title I funds in a targeted assistance school, must also meet the federal standard: a secondary school diploma or its equivalent, plus two years of study at an institution of higher education, an associate's or higher degree, or a formal state or local academic assessment of their ability to assist in reading, writing, and mathematics. The federal rule does not cover individuals whose duties are only non-instructional, such as "providing personal care services" ${cite("34 CFR 200.58, eCFR", SRC.cfrPara)}.</p>
<h3>Act 34, Act 151, and Act 114 clearances</h3>
<p>PDE requires prospective employees of public and private schools and Intermediate Units — and "independent contractors and their employees" — to provide a federal criminal history record, a PA State Police report, and a child abuse report that "cannot be more than five (5) years old at the time of hire" ${cite("PDE, Background Checks", SRC.paChecks)}. Our credentialing system tracks all three for every para and flags each one before it ages out.</p>
<h2 id="pa-para-roles">Instructional paraprofessional, personal care assistant, or 1:1 aide</h2>
<p class="answer-lead">The title on the requisition decides the qualification standard. An instructional paraprofessional supports instruction and must meet the Chapter 14 education standard. A personal care assistant supports one student at a time with care, equipment, and daily living. A 1:1 aide is whichever of those roles a student's IEP assigns to that student alone.</p>
<p>We screen against the assignment, not the title family: a behavior-support 1:1 in an emotional support classroom and a personal care assistant in a life skills room are different jobs, and the wrong match surfaces in week two at the student's expense. Tell us what the IEP calls for and we recruit to it.</p>
${odysseyParaProof(
  "At Odyssey Public Charter School, a FocusedEDU partner since 2021, the weekly-pay, shift-app model our paraprofessionals work under sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider — across a partnership that includes one-on-one aides and paraprofessionals.",
  "In Pennsylvania, <a href=\"/case-studies/first-philadelphia-public-charter-school\">First Philadelphia Public Charter School</a> has partnered with us since 2021 for paraprofessionals, one-on-one aides, and certified special education teachers.",
)}
<h2 id="for-candidates">For paraprofessionals looking for work in Pennsylvania</h2>
<p class="answer-lead">Paraprofessionals who work with FocusedEDU in Pennsylvania are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the partner schools we staff, and schools can hire you permanently with no conversion fee.</p>
<p>You will need a high school diploma plus one of the Chapter 14 routes — two years of college, an associate degree, or a passing assessment — and current Act 34, 151, and 114 clearances. We tell you which route fits your education and which documents to gather first. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need paraprofessionals in Pennsylvania?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your 1:1, classroom, and personal care assignments first, then build a para pipeline for your buildings alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-new-jersey\">paraprofessional staffing in New Jersey</a> and <a href=\"/paraprofessional-staffing-delaware\">paraprofessional staffing in Delaware</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "What qualifications does a paraprofessional need in Pennsylvania?",
        a: "Instructional paraprofessionals working with students with disabilities need at least two years of postsecondary study, an associate degree or higher, or a passing result on a state or local assessment under 22 Pa. Code § 14.105, plus 20 hours of staff development each school year and current Act 34, 151, and 114 clearances.",
      },
      {
        q: "What is a personal care assistant in Pennsylvania special education?",
        a: "A school employee who provides one-to-one support to a student, including help with medical equipment, activities of daily living, and monitoring health and behavior. A personal care assistant may support more than one student, but not at the same time, and completes 20 hours of assignment-related training each school year.",
      },
      {
        q: "Do Title I paraprofessionals in Pennsylvania have extra requirements?",
        a: "Yes. Under 34 CFR 200.58, paraprofessionals providing instructional support in Title I schoolwide programs or paid with Title I funds need a high school diploma plus two years of college, an associate degree, or a passing formal academic assessment. The federal rule excludes purely non-instructional roles such as personal care.",
      },
      {
        q: "What clearances do paraprofessionals need in Pennsylvania?",
        a: "Act 34 Pennsylvania State Police criminal history, Act 151 child abuse history, and Act 114 FBI fingerprint reports, each no more than five years old at the time of hire. PDE applies the requirement to independent contractors and their employees, so agency paras carry the same three reports.",
      },
      {
        q: "How do FocusedEDU paras get paid, and why does it matter?",
        a: "Weekly, every Friday, by direct deposit or Cash App, with a mobile app for picking up and swapping shifts. Reliable pay keeps the pool active — at Odyssey Public Charter School, the same model sustains a 95% day-to-day fill rate, 40% better than the previous provider.",
      },
      {
        q: "Can we hire a FocusedEDU para permanently, and will you staff our neighbor?",
        a: "Yes, at no cost — every placement is temp-to-perm with no conversion fee. And no, we work with one client per region, so the aides we recruit in your area are never offered to a competing school.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Special Education Staffing in Pennsylvania", slug: "special-education-staffing-pennsylvania" },
      { label: "Pennsylvania Substitute, Special Ed & K-12 Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Paraprofessional Staffing in New Jersey", slug: "paraprofessional-staffing-new-jersey" },
      { label: "Paraprofessional Staffing in Delaware", slug: "paraprofessional-staffing-delaware" },
    ],
  },

  // ─────────────────────── Paraprofessional · New Jersey ───────────────────────
  {
    slug: "paraprofessional-staffing-new-jersey",
    eyebrow: "Paraprofessional staffing · New Jersey",
    h1: "Paraprofessional Staffing in New Jersey",
    metaTitle: "Paraprofessional Staffing Agency in New Jersey",
    metaDescription:
      "Classroom aides, personal aides, and paraprofessionals for New Jersey schools — cleared through NJ criminal history review, matched to the IEP, paid weekly.",
    hero: "FocusedEDU places classroom aides, teacher aides, personal aides, and paraprofessionals in New Jersey districts, charter schools, and renaissance schools. Every aide is cleared through New Jersey's criminal history review, screened for the IEP role they will fill, paid weekly, and available temp-to-perm with no conversion fee.",
    photo: "/photography/discovery-support.jpg",
    photoAlt: "A classroom aide supporting students during small-group work in a New Jersey school",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New Jersey" }],
    parent: PARA_HUB,
    roles: [
      "Special education classroom aides",
      "Teacher aides",
      "Personal aides",
      "1:1 aides",
      "Preschool classroom aides",
      "Behavior support aides",
      "Substitute aides",
    ],
    stats: ODYSSEY_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "New Jersey criminal history approval through the Office of Student Protection",
      "High school diploma or equivalent on file for every aide",
      "Title I route documented where it applies: two years of college, an associate degree, or a passing assessment",
      "Assignment matched to your county-approved special education aide job description",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
      name: "Tracy H. Foedisch",
      role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
    },
    sections: [
      {
        heading: "What New Jersey schools need from a paraprofessional partner",
        body: "New Jersey writes its aides into the math of special education. Special class group sizes rise only when a classroom aide is added, autism classes must hold a three-to-one student-to-staff ratio, a preschool disabilities class needs an aide at any size, and a student whose IEP calls for a personal aide is not counted when deciding whether the class needs one. When an aide is absent, the program is out of compliance until someone covers.\n\nThe paperwork is just as specific. Every special education classroom aide works from a job description the county office has approved, and every district, charter, and renaissance school affirms twice a year that its paraprofessionals are employed according to law and regulation. A partner has to deliver aides who fit those approved roles, cleared and ready, and who keep showing up.",
      },
      {
        heading: "How FocusedEDU staffs New Jersey paraprofessionals",
        body: `${PAY_MODEL} ${PARA_SCREEN}\n\nWe work with one client per region, so the aides we recruit in your county are never offered to the district or charter competing with you for them. Our automated credentialing tracks every criminal history approval and expiration and cuts typical time-to-hire roughly in half. Every placement is temp-to-perm at no cost. New Jersey clients include Bridgeton Public Schools, The Barack Obama Green Charter Schools in Plainfield, and Hope Community Charter School in Camden, whose hiring manager is quoted on this page.\n\nFor the certified teachers those aides work for, see [special education staffing in New Jersey](/special-education-staffing-new-jersey); for substitutes, see [substitute teacher staffing in New Jersey](/substitute-teacher-staffing-new-jersey); for every other role, see [New Jersey K-12 staffing](/new-jersey-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="nj-para-requirements">New Jersey paraprofessional requirements</h2>
<p class="answer-lead">New Jersey defines paraprofessional staff as "a school or classroom aide who assists appropriately certified personnel with the supervision of student activities." Districts, charter schools, and renaissance schools must keep a list of their paraprofessionals, have each special education classroom aide job description approved by the county office, and file a Statement of Assurance by September 30 and January 31.</p>
<p>NJDOE's September 2025 memo restates those steps under N.J.A.C. 6A:32-4: maintain the list of paraprofessional employees and titles locally, submit job descriptions for special education classroom aides to the County Office of Education for approval by the Executive County Superintendent, resubmit whenever a description changes, and file the Statement of Assurance twice each school year ${cite("NJDOE, Biannual Reporting of Paraprofessional Staff, Sept. 17, 2025", SRC.njParaMemo)}. On the Statement of Assurance itself, the superintendent affirms that paraprofessionals were hired "as instructional, health and safety personnel in accordance with the requirements of individualized educational programs," and that each paraprofessional in a State-funded preschool program has a professional development plan with at least 20 hours a year of qualifying experiences ${cite("NJDOE, Statement of Assurance — Paraprofessional Staff", SRC.njParaSoa)}.</p>
<h3>Title I paraprofessionals</h3>
<p>The same form asks the superintendent to confirm that paraprofessionals supported in whole or in part by Title I funds meet the ESSA standard: at least two years of study at an institution of higher education, an associate's or higher degree, or a formal state or local academic assessment of their ability to assist in instructing reading, writing, and mathematics, "in accordance with the 34 CFR §200.58" ${cite("NJDOE, Statement of Assurance", SRC.njParaSoa)} ${cite("34 CFR 200.58", SRC.cfrPara)}. Federal rules also require a high school diploma or its equivalent for every covered paraprofessional.</p>
<h2 id="nj-aide-roles">What aides do in New Jersey special education programs</h2>
<p class="answer-lead">A New Jersey classroom aide works under the direction of a principal, special education teacher, general education teacher, or other appropriately certified staff member. When an IEP team decides a student needs it, a teacher aide provides supplementary support in the general education classroom — prompting, reinforcing goals, organizing materials, and running teacher-designed practice.</p>
<p>N.J.A.C. 6A:14-4.5(b) lists that supplementary support: "Prompting, cueing and redirecting student participation"; "Reinforcing of personal, social, behavioral, and academic learning goals"; "Organizing and managing materials and activities"; and "Implementation of teacher-designed follow-up and practice activities." The district must give the aide and the teaching staff regular time for consultation ${cite("N.J.A.C. 6A:14-4.1(e) and 4.5", SRC.nj14)}. Special class programs then tie aides to group size — an autism class grows past three students only with a classroom aide, and a preschool disabilities class needs two aides above eight students ${cite("N.J.A.C. 6A:14-4.7(e)", SRC.nj14)}. The full group-size table is on our <a href="/special-education-staffing-new-jersey">New Jersey special education staffing</a> page.</p>
<h2 id="nj-para-clearances">Criminal history review for New Jersey aides</h2>
<p class="answer-lead">New Jersey's Office of Student Protection conducts criminal background checks, through the State Police and the FBI, for applicants to public schools, private schools for students with disabilities, charter schools, and nonpublic schools, and for authorized vendors and school bus contractors. Agency aides clear the same review before they work with students.</p>
<p>The office runs separate application paths for new, archive, and transfer applicants, including substitutes continuously employed by a school or vendor since their approval ${cite("NJDOE, Criminal History Review", SRC.njCrim)}. Our credentialing system tracks each aide's approval and keeps the file audit-ready for your HR office and your county Statement of Assurance.</p>
${odysseyParaProof(
  "At Odyssey Public Charter School, a FocusedEDU partner since 2021, the weekly-pay, shift-app model our aides work under sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider — in a partnership that includes one-on-one aides and paraprofessionals.",
  "Just across the river, <a href=\"/case-studies/first-philadelphia-public-charter-school\">First Philadelphia Public Charter School</a> has partnered with us since 2021 for paraprofessionals and one-on-one aides alongside its special education teachers.",
)}
<h2 id="for-candidates">For aides and paraprofessionals looking for work in New Jersey</h2>
<p class="answer-lead">Aides who work with FocusedEDU in New Jersey are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the partner schools we staff, and a school can hire you permanently with no conversion fee.</p>
<p>You will need a high school diploma, an approval from the Office of Student Protection, and — for Title I instructional roles — two years of college, an associate degree, or a passing assessment. We tell you which documents to gather and in what order. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need classroom aides or paraprofessionals in New Jersey?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your special class, in-class, and personal aide assignments first, then build an aide pipeline for your schools alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-pennsylvania\">paraprofessional staffing in Pennsylvania</a> and <a href=\"/paraprofessional-staffing-new-york\">paraprofessional staffing in New York</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "What qualifications does a paraprofessional need in New Jersey?",
        a: "Every school aide needs a criminal history approval through the Office of Student Protection. Special education classroom aides work from a county-approved job description, and paraprofessionals supported by Title I funds need two years of college, an associate degree, or a passing formal academic assessment under 34 CFR 200.58.",
      },
      {
        q: "Do New Jersey special education aides need county approval?",
        a: "Their job descriptions do. Each special education classroom aide job description must be approved by the Executive County Superintendent through the county office of education, and districts, charter schools, and renaissance schools file a paraprofessional Statement of Assurance by September 30 and January 31.",
      },
      {
        q: "When does a New Jersey special class require a classroom aide?",
        a: "When enrollment passes the program's no-aide limit under N.J.A.C. 6A:14-4.7(e) — for example, more than three students in an autism class, more than ten in a mild-to-moderate learning and language class, or more than eight in a multiple disabilities class. A preschool disabilities class always needs one. Students with personal aides are not counted.",
      },
      {
        q: "What can a teacher aide do for a student with an IEP in New Jersey?",
        a: "Under N.J.A.C. 6A:14-4.5(b), a teacher aide may prompt, cue, and redirect student participation; reinforce personal, social, behavioral, and academic goals; organize and manage materials and activities; and carry out teacher-designed follow-up and practice activities, working under the direction of certified staff.",
      },
      {
        q: "How are FocusedEDU aides cleared to work in New Jersey schools?",
        a: "Through New Jersey's Office of Student Protection, which runs State Police and FBI background checks for school applicants and authorized vendors. Our credentialing system tracks each aide's approval, TB test, and references before you meet them.",
      },
      {
        q: "Can we hire a FocusedEDU aide permanently, and will you staff our neighbor?",
        a: "Yes, at no cost — every placement is temp-to-perm with no conversion fee. And no, we work with one client per region, so the aides we recruit in your county are never offered to a competing school.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Special Education Staffing in New Jersey", slug: "special-education-staffing-new-jersey" },
      { label: "New Jersey Substitute, Special Ed & K-12 Staffing", slug: "new-jersey-education-staffing" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      { label: "Paraprofessional Staffing in Pennsylvania", slug: "paraprofessional-staffing-pennsylvania" },
      { label: "Paraprofessional Staffing in New York", slug: "paraprofessional-staffing-new-york" },
    ],
  },

  // ─────────────────────── Paraprofessional · Delaware ───────────────────────
  {
    slug: "paraprofessional-staffing-delaware",
    eyebrow: "Paraprofessional staffing · Delaware",
    h1: "Paraprofessional Staffing in Delaware",
    metaTitle: "Paraprofessional Staffing Agency in Delaware",
    metaDescription:
      "Instructional and service paraeducators, 1:1 aides, and RBTs for Delaware schools — permit-matched, SBI/FBI-cleared, proven at Odyssey Charter in Wilmington.",
    hero: "FocusedEDU places instructional paraeducators, service paraeducators, 1:1 aides, and RBTs in Delaware districts and charter schools, with our deepest record at Odyssey Public Charter School in Wilmington. Every candidate is matched to the right Delaware Paraeducator Permit, cleared through the SBI, the FBI, and the Child Protection Registry, and paid weekly.",
    photo: "/photography/impact-students.jpg",
    photoAlt: "A paraeducator working with students in a Delaware charter school classroom",
    updated: UPDATED,
    areaServed: [
      { type: "State", name: "Delaware" },
      { type: "City", name: "Wilmington, DE" },
    ],
    parent: PARA_HUB,
    roles: [
      "Instructional paraeducators",
      "Service paraeducators",
      "1:1 aides",
      "Registered Behavior Technicians (RBTs)",
      "Special education aides",
      "Behavior support aides",
      "Substitute paraeducators",
    ],
    stats: ODYSSEY_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "Delaware Instructional or Service Paraeducator Permit route documented under 14 DE Admin. Code 1517",
      "ParaPro score, college transcript, associate degree, or RBT / ABAT certificate on file for instructional roles",
      "Fingerprinted Delaware (SBI) and national (FBI) criminal background check",
      "Child Protection Registry check through DSCYF",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
      name: "Elias Pappas",
      role: "CEO, Odyssey Charter School (Wilmington, DE)",
    },
    sections: [
      {
        heading: "What Delaware schools need from a paraprofessional partner",
        body: "Delaware permits every paraeducator. The state's regulation requires a Paraeducator Permit of all instructional and service paraeducators regardless of when they were hired, so a school cannot fill an aide vacancy with anyone available — it needs someone who already qualifies for the right permit, or who can document a route to it quickly.\n\nThe talent market makes that harder. Delaware is three counties sitting between the much larger Philadelphia and Baltimore job markets, which recruit from the same pool, and Wilmington is one of the most charter-dense landscapes in the region. Charters that draw students from several districts at once carry heavy loads of one-on-one aides, special education aides, and behavior support staff, usually without a district HR office behind them. A partner has to deliver permit-ready paraeducators and keep them showing up.",
      },
      {
        heading: "How FocusedEDU staffs Delaware paraprofessionals",
        body: `Delaware is where our record is deepest. At Odyssey Public Charter School in Wilmington we have filled 120+ roles since 2021, including one-on-one aides and paraprofessionals. ${PAY_MODEL}\n\n${PARA_SCREEN} We work with one client per region, so the paraeducators we recruit for your part of Delaware are never offered to the school competing with you for the same families. Our automated credentialing tracks every permit, SBI and FBI report, and registry check, and cuts typical time-to-hire roughly in half. Every placement is temp-to-perm at no cost — exactly the clause Odyssey's CEO put in writing. Christina School District and Brandywine School District are also on our client list.\n\nFor substitutes, see [substitute teacher staffing in Delaware](/substitute-teacher-staffing-delaware); for special education teachers and related services, see [Delaware special education and K-12 staffing](/delaware-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="de-paraeducator-permit">Delaware Paraeducator Permit requirements</h2>
<p class="answer-lead">Delaware requires a Paraeducator Permit of every instructional and service paraeducator, regardless of employment date, under 14 DE Admin. Code 1517. An instructional permit takes a high school diploma plus a ParaPro score of 459 or higher, 60 semester hours of college, an associate degree, or an RBT or ABAT certificate. A service permit takes a high school diploma.</p>
<p>The regulation draws the line between the two permits by duties. An instructional paraeducator is a public school employee who "provides one-on-one or small group instruction; assists with classroom management or individual student behavior," supports a computer lab or library, assists with "functional skill activities, such as personal care or assistive technology," or provides instructional services "under the direct supervision of a teacher" — and the definition expressly includes Registered Behavior Technicians and Applied Behavior Analysis Technicians. A service paraeducator "provides support services other than instructional assistance to students, but does not include bus aides" ${cite("14 DE Admin. Code 1517, § 2.0", SRC.dePermit)}.</p>
<h3>Instructional Paraeducator Permit</h3>
<p>An applicant qualifies through one of five routes: a high school diploma or equivalent plus a minimum score of 459 on the ParaPro Assessment; at least two years of postsecondary instruction, defined as a minimum of 60 semester hours (or 48 where the institution defines two full-time years that way), with grades of C or better and no developmental or remedial courses; an associate's degree or higher reflecting at least two years of full-time college-level study; a Registered Behavior Technician certificate from the BACB; or an Applied Behavior Analysis Technician certificate ${cite("14 DE Admin. Code 1517, § 4.0", SRC.dePermit)}.</p>
<h3>Service Paraeducator Permit and renewal</h3>
<p>A service permit requires a high school diploma or its equivalent. Either permit is issued for five years and may be renewed for another five-year term when the paraeducator completes 15 clock hours of professional development during the current term. Applicants must disclose their criminal conviction history when they apply ${cite("14 DE Admin. Code 1517, §§ 5.0-10.0", SRC.dePermit)}. The instructional routes line up with the federal Title I standard in 34 CFR 200.58, which requires two years of college, an associate degree, or a formal academic assessment for instructional paraprofessionals in Title I programs ${cite("34 CFR 200.58", SRC.cfrPara)}.</p>
<h2 id="de-para-clearances">Delaware clearances for paraeducators</h2>
<p class="answer-lead">Delaware requires a fingerprinted Delaware and national criminal background check through the State Bureau of Identification and the FBI, plus a Child Protection Registry check through the Department of Services for Children, Youth and Their Families, for every employee, contractor, and volunteer with direct access to students at a public or charter school.</p>
<p>The operative regulation, 14 DE Admin. Code § 745, applies to "Employee, Contractors or Volunteers of a Child Serving Entity" ${cite("14 DE Admin. Code § 745", SRC.deChecks)}, so agency paraeducators clear exactly what a direct hire clears. Our credentialing system completes the SBI, FBI, and registry checks, documents the permit route, and tracks every expiration before a paraeducator is shortlisted.</p>
${odysseyParaProof(
  "In Wilmington, at Odyssey Public Charter School, FocusedEDU's weekly-pay, shift-app model sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider — in a partnership since 2021 that has filled 120+ roles, including one-on-one aides and paraprofessionals.",
  "Odyssey's CEO, Elias Pappas, credits the temp-to-perm clause in his letter of recommendation: the school evaluates every professional before making a permanent hire, at no cost.",
)}
<h2 id="for-candidates">For paraeducators looking for work in Delaware</h2>
<p class="answer-lead">Paraeducators who work with FocusedEDU in Delaware are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the partner schools we staff, and a school can hire you permanently with no conversion fee.</p>
<p>For an instructional role you will need a high school diploma plus a ParaPro score of 459, 60 college credits, an associate degree, or an RBT or ABAT certificate; for a service role, a high school diploma. We tell you which permit route fits your background and walk you through the SBI, FBI, and registry checks. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need paraeducators in Delaware?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your 1:1, classroom, and behavior support assignments and the permit each requires, then build a paraeducator pipeline for your school alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-pennsylvania\">paraprofessional staffing in Pennsylvania</a> and <a href=\"/paraprofessional-staffing-maryland\">paraprofessional staffing in Maryland</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "Do paraprofessionals need a permit in Delaware?",
        a: "Yes. 14 DE Admin. Code 1517 requires a Paraeducator Permit of all instructional and service paraeducators, regardless of their employment date. Instructional paraeducators hold an Instructional Paraeducator Permit; paraeducators who provide non-instructional support hold a Service Paraeducator Permit. Bus aides are not service paraeducators.",
      },
      {
        q: "What ParaPro score do you need in Delaware?",
        a: "459 or higher, together with a high school diploma or equivalent, for the Instructional Paraeducator Permit. The ParaPro is one of five routes; 60 semester hours of college, an associate degree, an RBT certificate, or an ABAT certificate also qualify.",
      },
      {
        q: "Can an RBT work as a paraeducator in Delaware?",
        a: "Yes. Delaware's definition of instructional paraeducator expressly includes Registered Behavior Technicians and Applied Behavior Analysis Technicians, and an RBT certificate from the Behavior Analyst Certification Board is one of the routes to the Instructional Paraeducator Permit.",
      },
      {
        q: "How long is a Delaware Paraeducator Permit valid?",
        a: "Five years. The permit can be renewed for another five-year term when the paraeducator completes 15 clock hours of professional development during the current term. An expired permit can be reissued with 15 clock hours completed within the five years before applying.",
      },
      {
        q: "What background checks do Delaware paraeducators need?",
        a: "A fingerprinted Delaware and national criminal background check through the State Bureau of Identification and the FBI, plus a Child Protection Registry check through DSCYF, under 14 DE Admin. Code § 745. The rule covers employees, contractors, and volunteers, so agency paraeducators clear the same checks.",
      },
      {
        q: "What has FocusedEDU done for Delaware schools?",
        a: "At Odyssey Public Charter School in Wilmington we have filled 120+ roles since 2021, including one-on-one aides and paraprofessionals, with day-to-day coverage at a 95% fill rate — a 40%+ improvement over the previous provider. We work with one client per region, and every placement is temp-to-perm at no cost.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Delaware Substitute, Special Ed & K-12 Staffing", slug: "delaware-education-staffing" },
      { label: "Substitute Teacher Staffing in Delaware", slug: "substitute-teacher-staffing-delaware" },
      { label: "Paraprofessional Staffing in Maryland", slug: "paraprofessional-staffing-maryland" },
      { label: "Paraprofessional Staffing in Pennsylvania", slug: "paraprofessional-staffing-pennsylvania" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
    ],
  },

  // ─────────────────────── Paraprofessional · Maryland ───────────────────────
  {
    slug: "paraprofessional-staffing-maryland",
    eyebrow: "Paraprofessional staffing · Maryland",
    h1: "Paraprofessional Staffing in Maryland",
    metaTitle: "Paraprofessional Staffing Agency in Maryland",
    metaDescription:
      "Paraeducators, 1:1 aides, and special education aides for Maryland school systems and charters — Title I-qualified, background-reviewed, paid weekly.",
    hero: "FocusedEDU places paraprofessionals, paraeducators, 1:1 aides, and special education classroom aides in Maryland school systems and charter schools. Every candidate is screened against the federal Title I qualification standard, run through the employment-history review Maryland requires of contracting agencies, paid weekly, and available temp-to-perm at no cost.",
    photo: "/photography/community-school-walk.jpg",
    photoAlt: "A paraeducator walking with students outside a Maryland school",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "Maryland" }],
    parent: PARA_HUB,
    roles: [
      "Paraeducators",
      "Instructional paraprofessionals",
      "1:1 aides",
      "Special education classroom aides",
      "Behavior support aides",
      "Personal care aides",
      "Substitute paraeducators",
    ],
    stats: ODYSSEY_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "Title I route documented where it applies: two years of college, an associate degree, or a passing assessment",
      "High school diploma or equivalent on file for every para",
      "Employment-history review and records release under Maryland Education Article § 6-113.2",
      "Criminal background check against the offenses barred by Education Article § 6-113",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
      name: "Lennita Porter-Linen",
      role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
    },
    sections: [
      {
        heading: "What Maryland schools need from a paraprofessional partner",
        body: "In Maryland, adult support for a student with a disability is decided by the IEP team and written into the IEP — and once it is written, the school owes it every day. One-on-one paraeducators, aides in self-contained special education programs, and behavior support staff are the roles most likely to sit open, and the ones whose absence a family notices first. In Title I schools, instructional paraprofessionals also have to meet the federal qualification standard before they start.\n\nMaryland adds its own layer for agencies. State law requires contracting agencies, not just school systems, to collect employment histories and records releases from applicants who will have direct contact with minors, and school system contracts must bar contractors from assigning anyone convicted of the listed offenses. A partner has to deliver qualified aides with that file already complete.",
      },
      {
        heading: "How FocusedEDU staffs Maryland paraprofessionals",
        body: `${PAY_MODEL} ${PARA_SCREEN}\n\nWe have staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher, and Frederick County Public Schools is on our client list. Next door in the District, we place dedicated and one-on-one aides at Cesar Chavez and IDEA public charter schools. We work with one client per region, so the aides we recruit for your school system are never offered to a competing school. Our automated credentialing cuts typical time-to-hire roughly in half, and every placement is temp-to-perm at no cost.\n\nFor special education teachers and other roles, see [Maryland special education and K-12 staffing](/maryland-special-education-staffing); for substitutes, see [substitute teacher staffing in Maryland](/substitute-teacher-staffing-maryland).`,
      },
    ],
    richHtml: `<h2 id="md-para-requirements">Maryland paraprofessional requirements</h2>
<p class="answer-lead">Instructional paraprofessionals in Maryland Title I programs must meet the federal standard in 34 CFR 200.58: a high school diploma or equivalent plus two years of college, an associate degree or higher, or a passing formal state or local academic assessment. Paraeducators supporting students with IEPs must be appropriately trained and supervised under IDEA.</p>
<p>The federal rule covers each paraprofessional "who is hired by the LEA and who works in a program supported with funds under subpart A" — every paraprofessional in a schoolwide program school, and those paid with Title I funds in a targeted assistance school. It applies to individuals who provide instructional support and "does not include individuals who have only non-instructional duties (such as providing technical support for computers, providing personal care services, or performing clerical duties)." The assessment route requires demonstrated knowledge of, and the ability to assist in instructing, reading, writing, and mathematics ${cite("34 CFR 200.58, eCFR", SRC.cfrPara)}. Your school system's Title I or HR office confirms which assessment it accepts.</p>
<p>For special education, IDEA allows "paraprofessionals and assistants who are appropriately trained and supervised, in accordance with State law, regulation, or written policy" to assist in providing special education and related services ${cite("34 CFR 300.156(b)", SRC.cfrPersonnel)}. That is the standard we screen to: a paraeducator who has done the work before, can take direction from the special educator, and collects IEP data honestly.</p>
<h2 id="md-para-background">Maryland background and employment-history rules for contracted aides</h2>
<p class="answer-lead">Maryland requires county boards and the contracting agencies that serve them to collect, from any applicant for a position involving direct contact with minors, the contact information of current and former school employers, a signed release for records of child sexual abuse or sexual misconduct, and a written statement on prior investigations, under Education Article § 6-113.2.</p>
<p>The statute defines a contracting agency as "an entity that contracts with a county board or nonpublic school to provide a service to a school or the students of a school," and it reaches every former employer where the applicant had direct contact with minors in the previous ten years ${cite("Md. Code, Educ. § 6-113.2", SRC.mdHistory)}. A companion section requires every local school system contract to provide that a contractor "may not knowingly assign an employee to work on school premises with direct, unsupervised, and uncontrolled access to children" if the employee has been convicted of the listed offenses, including child sexual abuse and crimes of violence ${cite("Md. Code, Educ. § 6-113", SRC.mdChecks)}. Our credentialing system collects, completes, and tracks that file for every aide before you meet them.</p>
${odysseyParaProof(
  "At Odyssey Public Charter School, a FocusedEDU partner since 2021, the weekly-pay, shift-app model our paraeducators work under sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider — in a partnership that includes one-on-one aides and paraprofessionals.",
  "Closer to Maryland, <a href=\"/case-studies/cesar-chavez-public-charter-school\">Cesar Chavez Public Charter School</a> in Washington, DC receives an average of four qualified candidates per opening, dedicated aides included.",
)}
<h2 id="for-candidates">For paraeducators looking for work in Maryland</h2>
<p class="answer-lead">Paraeducators who work with FocusedEDU in Maryland are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the partner schools we staff, and a school can hire you permanently with no conversion fee.</p>
<p>You will need a high school diploma and, for Title I instructional roles, two years of college, an associate degree, or a passing assessment. Expect to provide your employment history and a records release, as Maryland law requires of every applicant for work with minors. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need paraeducators in Maryland?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your 1:1, classroom, and behavior support assignments first, then build a paraeducator pipeline for your schools alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-washington-dc\">paraprofessional staffing in Washington, DC</a> and <a href=\"/paraprofessional-staffing-delaware\">paraprofessional staffing in Delaware</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "What qualifications does a paraprofessional need in Maryland?",
        a: "Instructional paraprofessionals in Title I programs need a high school diploma or equivalent plus two years of college, an associate degree or higher, or a passing formal academic assessment under 34 CFR 200.58. Under IDEA, paraeducators supporting students with disabilities must be appropriately trained and supervised.",
      },
      {
        q: "Does the Title I paraprofessional standard apply to personal care aides?",
        a: "No. 34 CFR 200.58 covers paraprofessionals who provide instructional support and excludes individuals whose duties are only non-instructional, such as personal care services or clerical work. Those aides still clear every background and employment-history requirement.",
      },
      {
        q: "What does Maryland require of staffing agencies that place aides in schools?",
        a: "Education Article § 6-113.2 requires contracting agencies to collect employer contact information, a signed records release, and a written statement on prior investigations from applicants for positions with direct contact with minors. Section 6-113 bars contractors from assigning anyone convicted of the listed offenses to school premises.",
      },
      {
        q: "Do you place 1:1 aides in Maryland?",
        a: "Yes. We place one-on-one paraeducators, special education classroom aides, and behavior support aides, and we screen each candidate against the specific IEP assignment rather than dropping a generic para into a specialized seat.",
      },
      {
        q: "How do FocusedEDU paras get paid, and why does it matter?",
        a: "Weekly, every Friday, by direct deposit or Cash App, with a mobile app for picking up and swapping shifts. Reliable pay keeps the pool active — at Odyssey Public Charter School the same model sustains a 95% day-to-day fill rate.",
      },
      {
        q: "Can we hire a FocusedEDU para permanently, and will you staff our neighbor?",
        a: "Yes, at no cost — every placement is temp-to-perm with no conversion fee. And no, we work with one client per region, so the aides we recruit for your school system are never offered to a competing school.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Maryland Substitute, Special Ed & K-12 Staffing", slug: "maryland-special-education-staffing" },
      { label: "Substitute Teacher Staffing in Maryland", slug: "substitute-teacher-staffing-maryland" },
      { label: "Paraprofessional Staffing in Washington, DC", slug: "paraprofessional-staffing-washington-dc" },
      { label: "Paraprofessional Staffing in Delaware", slug: "paraprofessional-staffing-delaware" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
    ],
  },

  // ─────────────────────── Paraprofessional · Washington, DC ───────────────────────
  {
    slug: "paraprofessional-staffing-washington-dc",
    eyebrow: "Paraprofessional staffing · Washington, DC",
    h1: "Paraprofessional Staffing in Washington, DC",
    metaTitle: "Paraprofessional Staffing in Washington, DC",
    metaDescription:
      "Dedicated aides, one-on-one aides, and paraprofessionals for DCPS and DC charter LEAs — four qualified candidates per opening at Cesar Chavez PCS.",
    hero: "FocusedEDU places paraprofessionals, dedicated aides, and one-on-one aides in DCPS schools and DC public charter LEAs. Our DC record includes four qualified candidates per opening, dedicated aides among them, at Cesar Chavez Public Charter School, and a partnership at IDEA Public Charter School covering one-on-one aides, substitutes, and certified special education teachers.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A dedicated aide supporting a student in a Washington, DC public charter school",
    updated: UPDATED,
    areaServed: [{ type: "City", name: "Washington, DC" }],
    parent: PARA_HUB,
    roles: [
      "Dedicated aides",
      "One-on-one aides",
      "Instructional paraprofessionals",
      "Special education classroom aides",
      "Behavior support aides",
      "Substitute aides",
    ],
    stats: DC_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "Fingerprint and National Crime Information Center check under DC Code Title 4, Chapter 15",
      "Employment-history review and written affirmation under DC Code § 38-951.03",
      "High school diploma or equivalent on file for every aide",
      "Title I route documented where it applies: two years of college, an associate degree, or a passing assessment",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
      name: "Lennita Porter-Linen",
      role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
    },
    sections: [
      {
        heading: "What DC schools need from a paraprofessional partner",
        body: "In the District, every public charter network is its own LEA, and each one recruits its own aides — usually without a central HR office, and always in competition with DCPS and dozens of other charters for the same people. Dedicated and one-on-one aides written into IEPs are the hardest seats to keep filled, and an empty one means a student goes without support the school is legally required to provide.\n\nDC law also puts the screening burden squarely on agencies. The District's due-diligence statute applies to LEAs and to their contracted service providers alike: no one starts in a position with direct student interaction until their employment history has been reviewed and their fingerprint background check is complete. A partner has to deliver aides with that file finished — and recruit from a regional pool that spans Maryland and Virginia.",
      },
      {
        heading: "How FocusedEDU staffs DC paraprofessionals",
        body: `${PAY_MODEL} ${PARA_SCREEN}\n\nAt Cesar Chavez Public Charter School we built a dedicated pipeline that presents an average of four qualified candidates per opening, so the school chooses its dedicated aides rather than settling. At IDEA Public Charter School we staff one-on-one aides alongside substitutes and certified special education teachers. We work with one client per region, our automated credentialing cuts typical time-to-hire roughly in half, and every placement is temp-to-perm at no cost.\n\nFor special education teachers, see [special education staffing in Washington, DC](/special-education-staffing-washington-dc); for substitutes, see [substitute teacher staffing in Washington, DC](/substitute-teacher-staffing-washington-dc); for every other role, see [Washington, DC K-12 staffing](/washington-dc-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="dc-para-requirements">DC paraprofessional requirements</h2>
<p class="answer-lead">Instructional paraprofessionals in DC Title I programs must meet the federal standard in 34 CFR 200.58 — a high school diploma plus two years of college, an associate degree, or a passing formal academic assessment. Aides supporting students with IEPs must be appropriately trained and supervised under IDEA, and every DC school aide clears a fingerprint background check.</p>
<p>The Title I rule applies to every paraprofessional providing instructional support in a schoolwide program school and to those paid with Title I funds in a targeted assistance school, and it excludes individuals whose duties are only non-instructional, such as "providing personal care services" ${cite("34 CFR 200.58, eCFR", SRC.cfrPara)}. Under IDEA, "paraprofessionals and assistants who are appropriately trained and supervised" may assist in providing special education and related services ${cite("34 CFR 300.156(b)", SRC.cfrPersonnel)}. In practice, DC schools want aides who have done the work: de-escalation, personal care where the IEP requires it, and honest data collection for the special educator.</p>
<h2 id="dc-para-clearances">The background check and employment-history review DC requires</h2>
<p class="answer-lead">DC Code § 38-951.03 bars an LEA or its contracted service provider from employing or contracting anyone for a position with direct student interaction until it has collected prior-employer contact information and a written affirmation, run a fingerprint background check, and reviewed the applicant's employment history over the past seven years or last three employers, whichever is longer.</p>
<p>The statute requires contact information for the applicant's current employer and any employer in the preceding 20 years whose work involved direct interaction with children, plus at least one character reference, a written authorization to release records, and a written affirmation about any child abuse or sexual misconduct investigation ${cite("DC Code § 38-951.03", SRC.dcDiligence)}. The criminal check is "by means of fingerprint and National Criminal Information Center checks conducted by the Mayor and the FBI" ${cite("DC Code § 4-1501.05", SRC.dcFingerprint)}, and a DCPS clearance "expires two years from the date listed on your letter" ${cite("DCPS, Fingerprinting and Background Check Requirements", SRC.dcps)}. Because the statute names contracted service providers explicitly, our credentialing system completes and tracks this file for every aide before you meet them.</p>
<h2 id="proof-chavez-idea">Proof: Cesar Chavez and IDEA public charter schools</h2>
<p class="answer-lead">At Cesar Chavez Public Charter School, a FocusedEDU partner since 2022, we present an average of four qualified candidates per opening across dedicated aides, special education teachers, and subject-certified long-term substitutes. At IDEA Public Charter School, also since 2022, we staff one-on-one aides alongside certified special education teachers with 100% retention of the educators we placed.</p>
<p>Cesar Chavez runs a rigorous college-prep program and public-policy curriculum for 414 students in grades 6-12, and a thin local talent pool had left it short on dedicated aides. We handled the advertising, interviewing, credentialing, and screening, then put a vetted shortlist in front of the school so the final call was always theirs. Read the <a href="/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School case study</a> and the <a href="/case-studies/idea-public-charter-school">IDEA Public Charter School case study</a>.</p>
<h2 id="for-candidates">For aides and paraprofessionals looking for work in DC</h2>
<p class="answer-lead">Aides who work with FocusedEDU in DC are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the DCPS and charter schools we staff, and a school can hire you permanently with no conversion fee.</p>
<p>If you want to become a teacher, OSSE's Apprenticeship in Teaching offers current paraprofessionals without a bachelor's degree a route in: apprentices "work full-time in a DC school under the guidance of a mentor teacher," complete evening coursework that is "cost-free to apprentices" in exchange for a commitment to teach in DC schools, and become "eligible for an OSSE standard teaching credential" on completion ${cite("OSSE, Apprenticeship in Teaching", SRC.dcApprentice)}. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need dedicated aides or paraprofessionals in Washington, DC?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your dedicated, one-on-one, and classroom aide assignments first, then build an aide pipeline for your LEA alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-maryland\">paraprofessional staffing in Maryland</a> and <a href=\"/paraprofessional-staffing-new-york\">paraprofessional staffing in New York</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "What qualifications does a paraprofessional need in DC?",
        a: "Instructional paraprofessionals in Title I programs need a high school diploma plus two years of college, an associate degree, or a passing formal academic assessment under 34 CFR 200.58. Under IDEA, aides supporting students with disabilities must be appropriately trained and supervised. Every aide also clears DC's fingerprint background check.",
      },
      {
        q: "What background checks does a DC school aide need?",
        a: "A fingerprint and National Crime Information Center check through the Mayor and the FBI under DC Code § 4-1501.05, plus the employment-history review and written affirmation required by DC Code § 38-951.03. DCPS clearances expire two years from the date on the clearance letter.",
      },
      {
        q: "Does DC's employment-history review apply to staffing agencies?",
        a: "Yes. DC Code § 38-951.03 applies to a local education agency or a contracted service provider of the LEA, so an agency placing aides must complete the same prior-employer review, written affirmation, and background check before the aide starts.",
      },
      {
        q: "Can a DC paraprofessional become a certified teacher?",
        a: "Yes. OSSE's Apprenticeship in Teaching lets current paraprofessionals without a bachelor's degree work full-time in a DC school under a mentor teacher while completing cost-free evening coursework, in exchange for a commitment to teach in DC; graduates are eligible for an OSSE standard teaching credential.",
      },
      {
        q: "What has FocusedEDU done for DC charter schools?",
        a: "At Cesar Chavez Public Charter School we present an average of four qualified candidates per opening, including dedicated aides. At IDEA Public Charter School we staff one-on-one aides alongside certified special education teachers, with 100% of certified special education roles filled and 100% retention of the educators we placed.",
      },
      {
        q: "Can we hire a FocusedEDU aide permanently, and will you staff our neighbor?",
        a: "Yes, at no cost — every placement is temp-to-perm with no conversion fee. And no, we work with one client per region, so the aides we recruit for your LEA are never offered to a competing school.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Special Education Staffing in Washington, DC", slug: "special-education-staffing-washington-dc" },
      { label: "Washington DC Substitute, Special Ed & K-12 Staffing", slug: "washington-dc-education-staffing" },
      { label: "Substitute Teacher Staffing in Washington, DC", slug: "substitute-teacher-staffing-washington-dc" },
      { label: "Paraprofessional Staffing in Maryland", slug: "paraprofessional-staffing-maryland" },
      { label: "Paraprofessional Staffing in New York", slug: "paraprofessional-staffing-new-york" },
    ],
  },

  // ─────────────────────── Paraprofessional · New York ───────────────────────
  {
    slug: "paraprofessional-staffing-new-york",
    eyebrow: "Paraprofessional staffing · New York",
    h1: "Paraprofessional Staffing in New York",
    metaTitle: "Paraprofessional Staffing Agency in New York",
    metaDescription:
      "Certified teaching assistants, teacher aides, and 1:1 aides for New York districts, BOCES, and charters — NYSED fingerprint-cleared and paid weekly.",
    hero: "FocusedEDU places certified teaching assistants, teacher aides, 1:1 aides, and special class paraprofessionals in New York districts, BOCES, and charter schools. Every candidate is matched to the right NYSED role, fingerprint-cleared through NYSED, paid weekly, and available temp-to-perm with no conversion fee — so your 12:1+1 and 8:1+1 rooms stay staffed.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A teaching assistant working with a small group in a New York special class",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New York" }],
    parent: PARA_HUB,
    roles: [
      "Teaching assistants",
      "Teacher aides",
      "1:1 aides",
      "Special class paraprofessionals",
      "Behavior support aides",
      "Substitute paraprofessionals",
    ],
    stats: ODYSSEY_PARA_STATS,
    steps: PARA_STEPS,
    verify: [
      "NYSED teaching assistant certificate verified for teaching assistant assignments",
      "Fingerprint-supported criminal history clearance through NYSED",
      "High school diploma or equivalent on file for every para",
      "Title I route documented where it applies: two years of college, an associate degree, or a passing assessment",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including attendance history",
      "De-escalation and personal-care screening matched to the assignment",
    ],
    quote: {
      text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
      name: "Tracy H. Foedisch",
      role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
    },
    sections: [
      {
        heading: "What New York schools need from a paraprofessional partner",
        body: "New York's special class ratios are written with the paraprofessional built in. A 12:1+1, 8:1+1, or 6:1+1 class needs supplementary school personnel assigned during every period of instruction, and a class for students with severe multiple disabilities needs one staff member for every three students. When the teaching assistant or aide is out, the class is out of ratio — and the teacher is the only adult left to hold it.\n\nNew York also splits the role in two. Supplementary school personnel can be a teacher aide or a certified teaching assistant, and the teaching assistant certificate itself changed in October 2025. Districts, BOCES, and charter networks need a partner who knows which credential a seat requires, recruits to it, and delivers people who are fingerprint-cleared and ready on day one.",
      },
      {
        heading: "How FocusedEDU staffs New York paraprofessionals",
        body: `${PAY_MODEL} ${PARA_SCREEN}\n\nWe have staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. We work with one client per region, so the teaching assistants and aides we recruit for your district or network are never offered to a competing school. Our automated credentialing tracks every certificate, fingerprint clearance, and expiration and cuts typical time-to-hire roughly in half. Every placement is temp-to-perm at no cost.\n\nFor the special education teachers those paraprofessionals work beside, see [special education staffing in New York](/special-education-staffing-new-york); for substitutes, see [substitute teacher staffing in New York](/substitute-teacher-staffing-new-york); for every other role, see [New York K-12 staffing](/new-york-education-staffing).`,
      },
    ],
    richHtml: `<h2 id="ny-ta-and-aides">Teaching assistant or teacher aide: New York's two paraprofessional roles</h2>
<p class="answer-lead">New York's special education regulations define supplementary school personnel as a teacher aide or a teaching assistant. Teaching assistants hold a NYSED certificate and support instruction under a teacher's supervision. Since October 1, 2025, new applicants pursue the Initial TA, Pre-Professional TA, or Professional TA certificate, which replace the older Level I, II, and III titles.</p>
<p>Part 200 is explicit: "Supplementary school personnel means a teacher aide or a teaching assistant as described in section 80-5.6(a) through (d) of this Title" ${cite("8 NYCRR 200.1", SRC.ny2001)}. NYSED's certification office states that the TA I, II, III, TA I Renewal, and TA Pre-Professional certificates "will be phased out and replaced with the Initial TA, TA Pre-Professional, and TA Professional level certificates," with all new titles operational October 1, 2025. Existing holders keep working on a published timeline — TA II applications remain active until August 31, 2028 and TA III applications until August 31, 2031 — but a teaching assistant "must stay in the same certificate progression pathway" once chosen ${cite("NYSED, Teaching Assistant Certificates", SRC.nyTa)}.</p>
<h3>What a teaching assistant may do</h3>
<p>NYSED's scope of practice lists the duties. Initial and Level I-III teaching assistants work "with individual pupils or groups of pupils on special instructional projects," provide the teacher with information about pupils, and assist pupils with instructional resources. Pre-Professional and Professional teaching assistants, under the general supervision of a teacher, may also work with small groups "so the teacher can work with a large group or individual children," help construct a lesson plan, present "segments of lesson plans, as directed by the teacher," and communicate with parents ${cite("NYSED, TA Scope of Practice", SRC.nyTaScope)}. We match the certificate level to the duties your program expects.</p>
<h2 id="ny-ratios">Special class ratios that depend on paraprofessionals</h2>
<p class="answer-lead">Under 8 NYCRR 200.6, special classes whose students' management needs require another adult are capped at 12, and classes for intensive and highly intensive needs at 8 and 6 — each "with one or more supplementary school personnel assigned to each class during periods of instruction." Severe multiple disabilities classes need one staff member per three students.</p>
<p>In a severe multiple disabilities class, the additional staff "may be teachers, supplementary school personnel and/or related service providers." In integrated co-teaching classes, additional personnel, "including supplementary school personnel," may be assigned but "may not serve as the special education teacher" ${cite("8 NYCRR 200.6", SRC.ny2006)}. Staffing the teacher without the paraprofessional leaves a room out of ratio; we staff both, and our <a href="/special-education-staffing-new-york">New York special education staffing</a> page covers the teacher side.</p>
<h2 id="ny-para-fingerprinting">Fingerprint clearance for New York paraprofessionals</h2>
<p class="answer-lead">NYSED requires fingerprint-supported criminal history clearance for applicants to public schools, charter schools, and BOCES, and for employees of contract service providers placed within a school, whenever the assignment exceeds five days and involves direct contact with students under 21. Every applicant for a certificate, teaching assistants included, is fingerprinted.</p>
<p>NYSED's chart notes that "As of July 1, 2007, all applicants must undergo a fingerprint supported criminal history background check" for certificates, licenses, or permits, and lists "Employees of contract service providers who are placed within the school" among the employment situations that require fingerprinting ${cite("NYSED, Who Must Be Fingerprinted", SRC.nyPrints)}. Our credentialing system tracks each paraprofessional's clearance before you meet them.</p>
${odysseyParaProof(
  "At Odyssey Public Charter School, a FocusedEDU partner since 2021, the weekly-pay, shift-app model our paraprofessionals work under sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider — in a partnership that includes one-on-one aides and paraprofessionals.",
  "<a href=\"/case-studies/first-philadelphia-public-charter-school\">First Philadelphia Public Charter School</a> has relied on the same pipeline since 2021 for paraprofessionals and one-on-one aides alongside its special education teachers.",
)}
<h2 id="for-candidates">For teaching assistants and aides looking for work in New York</h2>
<p class="answer-lead">Paraprofessionals who work with FocusedEDU in New York are paid weekly, every Friday, by direct deposit or Cash App, and choose shifts in a mobile app. One application puts you in front of the partner schools we staff, and a school can hire you permanently with no conversion fee.</p>
<p>If you are new to New York teaching assistant work, the Initial TA certificate is the entry point on the new pathway; if you hold a TA Level I, II, or III certificate, NYSED's timeline tells you how long it remains usable. Either way you will need fingerprint clearance. Browse current openings and apply on our <a href="/candidates">candidates page</a>.</p>
${cta(
  "Need teaching assistants or aides in New York?",
  "Start with a free 30-minute discovery call or send your openings by email. We map your special class ratios, 1:1 assignments, and the certificate each seat requires, then build a paraprofessional pipeline for your schools alone — one client per region, temp-to-perm at no cost.",
  "See also <a href=\"/paraprofessional-staffing-new-jersey\">paraprofessional staffing in New Jersey</a> and <a href=\"/paraprofessional-staffing-pennsylvania\">paraprofessional staffing in Pennsylvania</a>, or go back to <a href=\"/paraprofessional-staffing\">paraprofessional staffing for K-12 schools</a>.",
)}`,
    faqs: [
      {
        q: "What is the difference between a teaching assistant and a teacher aide in New York?",
        a: "Both count as supplementary school personnel under 8 NYCRR 200.1. A teaching assistant holds a NYSED teaching assistant certificate and supports instruction under a teacher's supervision within NYSED's published scope of practice. Which role a seat needs depends on the duties your program and the student's IEP call for.",
      },
      {
        q: "What teaching assistant certificates does New York issue now?",
        a: "Since October 1, 2025, new applicants pursue the Initial TA, TA Pre-Professional, and TA Professional certificates. The TA I application closed September 30, 2025; TA II applications remain active until August 31, 2028 and TA III applications until August 31, 2031.",
      },
      {
        q: "Which New York special classes require a paraprofessional?",
        a: "Under 8 NYCRR 200.6(h), special classes capped at 12, 8, or 6 students for management needs require one or more supplementary school personnel during periods of instruction, and classes for severe multiple disabilities need one staff member for every three students.",
      },
      {
        q: "Do agency paraprofessionals need fingerprint clearance in New York?",
        a: "Yes. NYSED requires fingerprinting for employees of contract service providers placed within a school, as well as for applicants to public schools, charter schools, and BOCES, when the assignment exceeds five days and involves direct contact with students under 21.",
      },
      {
        q: "How do FocusedEDU paraprofessionals get paid?",
        a: "Weekly, every Friday, by direct deposit or Cash App, with a mobile app for picking up and swapping shifts. Reliable pay keeps the pool active — at Odyssey Public Charter School, the same model sustains a 95% day-to-day fill rate, 40% better than the previous provider.",
      },
      {
        q: "Can we hire a FocusedEDU para permanently, and will you staff our neighbor?",
        a: "Yes, at no cost — every placement is temp-to-perm with no conversion fee. And no, we work with one client per region, so the paraprofessionals we recruit for your schools are never offered to a competing district or network.",
      },
    ],
    related: [
      PARA_HUB,
      { label: "Special Education Staffing in New York", slug: "special-education-staffing-new-york" },
      { label: "New York Substitute, Special Ed & K-12 Staffing", slug: "new-york-education-staffing" },
      { label: "Substitute Teacher Staffing in New York", slug: "substitute-teacher-staffing-new-york" },
      { label: "Paraprofessional Staffing in New Jersey", slug: "paraprofessional-staffing-new-jersey" },
      { label: "Paraprofessional Staffing in Pennsylvania", slug: "paraprofessional-staffing-pennsylvania" },
    ],
  },
];
