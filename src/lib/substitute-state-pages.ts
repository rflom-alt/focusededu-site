/**
 * "Substitute teacher staffing in <state>" pages — the local-intent pages
 * district buyers search for ("substitute teacher staffing Pennsylvania",
 * "substitute teachers Wilmington"). Rendered by app/[service]/page.tsx like
 * every other service page; kept in their own file because the long-form,
 * cited bodies are large.
 *
 * Rules for this file:
 * - FocusedEDU facts are the approved ones used across the site (Odyssey,
 *   IDEA, Cesar Chavez, First Philadelphia case studies; one client per region;
 *   temp-to-perm at no cost; weekly pay + shift app; credentialing in half the time).
 * - Every state rule is quoted or paraphrased from the state's own page or
 *   statute and linked inline. If a source stops loading, remove the detail
 *   rather than re-sourcing it from a third party.
 */
import type { ServicePage } from "./service-pages";

const UPDATED = "2026-10-18";
const HUB = { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" };

const SUB_ROLES = [
  "Day-to-day substitute teachers",
  "Long-term substitute teachers",
  "Building substitutes",
  "Special education substitutes",
  "Substitute paraprofessionals",
  "1:1 aides",
];

const SUB_STEPS = [
  {
    n: "01",
    title: "Free 30-minute discovery call",
    body: "We map your absence patterns, buildings, bell schedules, and substitute requirements — day-to-day volume, standing long-term leaves, and what your current fill rate actually is. No cost, no obligation.",
  },
  {
    n: "02",
    title: "We source, screen, and credential",
    body: "We build a substitute pool against your buildings specifically. Every sub is interviewed by us, cleared, reference-checked with prior schools, and screened for classroom management before their first assignment.",
  },
  {
    n: "03",
    title: "You choose from a vetted shortlist",
    body: "For long-term and building-sub roles, your principals interview fully credentialed candidates and make the call. For daily coverage, only subs who have passed the full screen can see your shifts in the app.",
  },
  {
    n: "04",
    title: "We stay through the placement",
    body: "We monitor fill rates, rotate out subs your buildings flag, and stay involved for the life of the engagement. Hire any long-term sub permanently at no conversion fee.",
  },
];

const ODYSSEY_STATS = [
  { value: "95%", label: "Day-to-day substitute fill rate at Odyssey Public Charter School" },
  { value: "+40%", label: "Improvement over the school's previous staffing provider" },
  { value: "120+", label: "Roles filled at that one partner school since 2021" },
  { value: "$0", label: "Fee to hire a long-term sub as your permanent teacher" },
];

const cite = (label: string, href: string) =>
  `<span class="cite">(source: <a href="${href}" rel="noopener" target="_blank">${label}</a>)</span>`;

/** The Odyssey proof block, phrased per market so no two pages repeat it verbatim. */
const odysseyProof = (lead: string) => `<h2 id="proof-odyssey">Proof: a 95% day-to-day substitute fill rate at Odyssey</h2>
<p class="answer-lead">${lead}</p>
<p>Odyssey Public Charter School in Wilmington, Delaware serves more than 1,000 K-8 students drawn from five districts and protects a 12:1 student-teacher ratio. When the agencies already under contract could not fill its open roles, Odyssey brought in FocusedEDU in 2021. Since then we have made 120+ placements across 13+ distinct role types — substitute and certified teachers, SLPs, OTs, PTs, psychologists, reading specialists, one-on-one aides, paraprofessionals, bus drivers, and support staff — and day-to-day substitute coverage runs at a 95% fill rate, a 40%+ improvement over the previous provider.</p>
<p>The mechanics behind that number are the same ones we bring to every substitute program: weekly Friday pay by direct deposit or Cash App, a mobile app where vetted subs pick up and swap shifts the moment an absence posts, and a pool recruited for one client's buildings instead of rented to every school in the county. Read the full <a href="/case-studies/odyssey-charter-school">Odyssey Public Charter School case study</a>.</p>`;

const forSubs = (state: string, extra: string) => `<h2 id="for-substitutes">For substitutes looking for work in ${state}</h2>
<p class="answer-lead">Substitutes who work with FocusedEDU in ${state} are paid weekly, every Friday, by direct deposit or Cash App, and choose their own shifts in a mobile app. One application puts you in front of the partner schools we staff, and our team walks you through every clearance and credential step.</p>
<p>${extra} Browse current openings and apply on our <a href="/candidates">candidates page</a>. Long-term substitutes who prove out in a building can be hired permanently by the school with no conversion fee, which is why a FocusedEDU leave coverage is often the best teaching interview a substitute ever gets.</p>`;

const cta = (state: string) => `<h2 id="next-step">Need substitute teachers in ${state}?</h2>
<p class="answer-lead">Start with a free 30-minute discovery call or send your openings by email. Either way we map your absence volume, buildings, and requirements first, then build a substitute pool that serves your schools alone — one client per region, temp-to-perm at no cost.</p>
<p><a href="/book-a-call">Book a discovery call</a> or <a href="/request-staff">send a staffing request</a>. Prefer to compare first? Read our breakdown of <a href="/blog/best-substitute-teacher-staffing-agencies-2026">the best substitute teacher staffing agencies for 2026</a>, or go back to <a href="/substitute-teacher-staffing">substitute teacher staffing for K-12 schools</a>.</p>`;

export const substituteStatePages: ServicePage[] = [
  // ───────────────────────────── Pennsylvania ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-pennsylvania",
    eyebrow: "Substitute teacher staffing · Pennsylvania",
    h1: "Substitute Teacher Staffing in Pennsylvania",
    metaTitle: "Substitute Teacher Staffing Agency in Pennsylvania",
    metaDescription:
      "Day-to-day, long-term, and special education substitutes for Pennsylvania schools — Act 34/151/114-cleared, paid weekly, one client per region. Wayne, PA HQ.",
    hero: "FocusedEDU is a Pennsylvania substitute teacher staffing agency headquartered in Wayne, PA. We recruit, clear, and place day-to-day, long-term, and special education substitutes and substitute paraprofessionals for districts, charters, and Intermediate Units, with Act 34, 151, and 114 clearances tracked before any sub sees your shifts.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Pennsylvania classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "Pennsylvania" }],
    parent: HUB,
    roles: SUB_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Act 34 Pennsylvania State Police criminal history report (no more than five years old at hire)",
      "Act 151 Pennsylvania child abuse history clearance",
      "Act 114 FBI fingerprint-based criminal history report",
      "PA certificate, or the school entity's Type 06 / Type 04 emergency permit request, verified for the assignment",
      "Bachelor's degree transcript on file for every emergency permit",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    sections: [
      {
        heading: "What Pennsylvania schools need from a substitute partner",
        body: "Pennsylvania schools rarely have one substitute problem. They have four. Day-to-day coverage for the 5:45 a.m. call-out. Long-term substitutes for parental and medical leaves that run a semester. Building subs who report to the same school every day and absorb whatever the morning brings. And special education substitutes and substitute paraprofessionals, where an empty seat is not an inconvenience but a missed IEP service. Each one fails differently, and a partner has to be built for all four.\n\nThe pressure is sharpest where the state's own data says it is: special education, related services, and day-to-day coverage. When a substitute does not arrive, teachers lose prep periods to cover, classes get split, and paraprofessionals get pulled off the one-on-one assignments they are legally supposed to be on. A fill rate measured honestly — every absence, including the Fridays and the days after holidays — is the number that tells you whether a substitute program is working.",
      },
      {
        heading: "How FocusedEDU staffs Pennsylvania substitute programs",
        body: "We are a Pennsylvania firm. FocusedEDU is headquartered at 175 Strafford Avenue in Wayne, on the Main Line, and has staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. Our substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts through a mobile app, so your absence reaches the whole vetted pool the moment it posts instead of traveling down a phone chain one voicemail at a time.\n\nThree commitments set the model apart. One client per region: sign with us for your area and the substitute pool we build there serves your buildings alone, never a competing district down the road. Credentialing in half the time: our automated credentialing tracks every clearance, permit, and expiration, and cuts typical time-to-hire roughly in half. And temp-to-perm at no cost: a long-term substitute who proves out over a semester can become your permanent teacher with no conversion fee and no buyout.\n\nFor Pennsylvania schools beyond substitutes, see our [Pennsylvania substitute, special education, and K-12 staffing](/pennsylvania-education-staffing) page; Philadelphia schools can go straight to [substitute teacher staffing in Philadelphia](/substitute-teacher-staffing-philadelphia).",
      },
    ],
    richHtml: `<h2 id="pa-substitute-requirements">Pennsylvania substitute teacher requirements</h2>
<p class="answer-lead">To substitute in a Pennsylvania public school, a person needs a Pennsylvania teaching certificate or a PDE-issued emergency permit requested by the school entity — a Type 06 for day-to-day work or a Type 04 for long-term assignments — plus three background reports: Act 34 state police, Act 151 child abuse, and Act 114 FBI fingerprint.</p>
<h3>The Type 06 day-to-day permit and the 20-day rule</h3>
<p>PDE's Certification and Staffing Policy Guideline on emergency permits states that "A Type 06 permit is issued by the Department to qualify a person for service as a day-to-day substitute." The same guideline sets the limit every scheduler needs to know: if service exceeds 20 days for an individual professional or temporary professional employee, "a long-term substitute permit (Type 04) is required." Two details make the rule workable in practice — "The 20-day limitation is not cumulative," and a permit holder may substitute for more than one professional employee ${cite("PDE, CSPG 13 — Emergency Permits", "https://www.pa.gov/agencies/education/programs-and-services/educators/certification/certification-staffing/staffing-guidelines/cspg-13-emergency-permits")}.</p>
<h3>The Type 04 long-term substitute permit</h3>
<p>For leave coverage, PDE allows a school entity to request a Type 04 permit for a temporary substitute position that will exceed 20 consecutive days in a single assignment, when future employment in the position is not anticipated, and the permit can be reissued for an individual one time in the same subject area per school entity. Emergency permits require, with limited exceptions, "a transcript reflecting a minimum of a bachelor's degree," and the school entity must keep an official bachelor's or higher transcript in the educator's personnel file ${cite("PDE, CSPG 13", "https://www.pa.gov/agencies/education/programs-and-services/educators/certification/certification-staffing/staffing-guidelines/cspg-13-emergency-permits")}.</p>
<p>One rule matters most when you work with an agency: PDE states that the school entity "is responsible for requesting emergency permits for substitute teachers provided to their LEA by private agencies or contractors." In practice we prepare every candidate's permit file — transcript, clearances, application details — so your certification office submits a complete request instead of chasing paperwork.</p>
<h3>Act 34, Act 151, and Act 114 clearances</h3>
<p>PDE is explicit that substitutes are covered. Its background-check guidance lists "administrators, teachers, substitutes, custodians, cafeteria workers and office employees" among the prospective school employees who must provide a Federal Criminal History Record, a PA State Police report, and a child abuse report that "cannot be more than five (5) years old at the time of hire," and it extends the requirement to independent contractors and their employees ${cite("PDE, Background Checks", "https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks")}. The state police report is obtained through PATCH ${cite("PDE, Pennsylvania Access to Criminal History", "https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/pennsylvania-access-to-criminal-history-patch")}, and the child abuse clearance is issued by the Department of Human Services ${cite("PA DHS, Child Abuse History Clearance", "https://www.pa.gov/agencies/dhs/resources/keep-kids-safe/child-abuse-clearances/pa-child-abuse-history-clearance")}.</p>
<p>Our credentialing system tracks all three reports for every substitute, flags each one before it ages past the five-year line, and keeps the file audit-ready for your HR office.</p>
${odysseyProof("The clearest measure of a substitute partner is day-to-day fill rate. At Odyssey Public Charter School, a 1,000+ student K-8 school that partnered with FocusedEDU in 2021, our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider.")}
<p>Closer to home, <a href="/case-studies/first-philadelphia-public-charter-school">First Philadelphia Public Charter School</a> has partnered with us since 2021 for certified special education teachers, paraprofessionals, substitute teachers, and one-on-one aides: 100% of open special education teacher roles filled, each within two weeks of the request, with 100% retention of the educators we placed.</p>
${forSubs("Pennsylvania", "You will need a Pennsylvania certificate or the education to qualify for a school-requested emergency permit (a bachelor's degree for most permits), plus current Act 34, 151, and 114 clearances — we tell you exactly which documents to gather and in what order.")}
${cta("Pennsylvania")}`,
    faqs: [
      {
        q: "Who can be a substitute teacher in Pennsylvania?",
        a: "A Pennsylvania-certified teacher, or a person for whom the school entity requests a PDE emergency permit — a Type 06 for day-to-day substitute service or a Type 04 for a long-term assignment. Most emergency permits require a bachelor's degree transcript. Every substitute also needs current Act 34, Act 151, and Act 114 clearances.",
      },
      {
        q: "How many days can a Type 06 substitute cover one teacher's absence?",
        a: "Up to 20 days for an individual professional or temporary professional employee. Beyond 20 days in that assignment, PDE requires a Type 04 long-term substitute permit. PDE notes that the 20-day limitation is not cumulative.",
      },
      {
        q: "Can a staffing agency request the emergency permit for our substitutes?",
        a: "No. PDE places that responsibility on the school entity, including for substitutes provided by private agencies or contractors. FocusedEDU prepares each candidate's transcript, clearances, and application details so your certification office can submit a complete request quickly.",
      },
      {
        q: "What fill rate can a Pennsylvania school expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number in a sales meeting. Our reference point: at Odyssey Public Charter School, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your buildings. Your flu-season morning never competes with a neighboring client's.",
      },
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost — if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [
      { label: "Special Education Staffing in Pennsylvania", slug: "special-education-staffing-pennsylvania" },
      { label: "Paraprofessional Staffing in Pennsylvania", slug: "paraprofessional-staffing-pennsylvania" },
      { label: "Substitute Teacher Staffing in Philadelphia", slug: "substitute-teacher-staffing-philadelphia" },
      { label: "Pennsylvania Substitute, Special Ed & K-12 Staffing", slug: "pennsylvania-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      { label: "Substitute Teacher Staffing in Delaware", slug: "substitute-teacher-staffing-delaware" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
    ],
  },

  // ───────────────────────────── Philadelphia ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-philadelphia",
    eyebrow: "Substitute teacher staffing · Philadelphia",
    h1: "Substitute Teacher Staffing in Philadelphia",
    metaTitle: "Substitute Teacher Staffing in Philadelphia",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Philadelphia district, charter, and independent schools — PA-cleared, paid weekly, from our Main Line HQ.",
    hero: "FocusedEDU staffs substitute teachers for Philadelphia schools from our headquarters in Wayne, on the Main Line. We place day-to-day, long-term, and special education substitutes and substitute paraprofessionals for charter networks, district schools, and approved private schools, each one carrying current Act 34, 151, and 114 clearances before a first assignment.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "Students working with a substitute teacher in a Philadelphia classroom",
    updated: UPDATED,
    areaServed: [{ type: "City", name: "Philadelphia, PA" }],
    parent: HUB,
    roles: SUB_ROLES,
    stats: [
      { value: "100%", label: "SPED-teacher roles filled at First Philadelphia Public Charter School" },
      { value: "100%", label: "Retention of the educators we placed there" },
      { value: "2 wks", label: "From request to filled at First Philadelphia" },
      { value: "95%", label: "Day-to-day substitute fill rate at our flagship partner school" },
    ],
    steps: SUB_STEPS,
    verify: [
      "Act 34 Pennsylvania State Police criminal history report (no more than five years old at hire)",
      "Act 151 Pennsylvania child abuse history clearance",
      "Act 114 FBI fingerprint-based criminal history report",
      "PA certificate, or a complete Type 06 / Type 04 emergency permit file for your certification office",
      "TB test and vaccination documentation",
      "Reference checks with prior Philadelphia-area schools",
      "Classroom-management screening matched to grade band",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    quote: {
      text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
    },
    sections: [
      {
        heading: "What Philadelphia schools need from a substitute partner",
        body: "Philadelphia concentrates every substitute challenge in one city. The School District of Philadelphia, a charter sector that is one of the country's largest concentrations of standalone and multi-site charter operators, and a deep bench of approved private and special education schools all draw on the same regional pool of certified teachers and permit-eligible substitutes. On paper the pool is deep — the region produces a steady stream of education graduates. In practice, every school is fishing the same water, so a reliable substitute fields offers every evening and commits to whoever confirmed first.\n\nThat is why Philadelphia schools tend to need three things at once: daily coverage that is confirmed before the night is over, long-term substitutes who can carry a classroom through a leave, and special education substitutes and substitute paraprofessionals who keep IEP services running. Charter networks feel it most, because each campus is its own compliance unit and a vacancy lands directly on the students who can least afford it.",
      },
      {
        heading: "How FocusedEDU staffs Philadelphia substitute programs",
        body: "We are a local firm: FocusedEDU is headquartered in Wayne, on the Main Line, and has staffed Philadelphia-area schools for 12 years. Our founder, Robert Flom, is a former K-12 teacher, and the substitute screen he built asks what a candidate did the last time a room started to slide — not what a handbook says.\n\nThe model is built for a competitive market. Substitutes are paid weekly, every Friday, by direct deposit or Cash App, so they stay in our pool instead of drifting to whichever agency pays fastest. They pick up and swap shifts in a mobile app, so your absence reaches every vetted sub the moment it posts. And because we work with one client per region, the substitutes we recruit around your campuses are not presented to the competing school two blocks away. Automated credentialing cuts typical time-to-hire roughly in half, and every placement is temp-to-perm at no cost.\n\nFor the statewide picture, see [substitute teacher staffing in Pennsylvania](/substitute-teacher-staffing-pennsylvania) and our [Philadelphia education staffing](/philadelphia-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="philadelphia-substitute-requirements">Substitute requirements for Philadelphia schools</h2>
<p class="answer-lead">Philadelphia substitutes follow Pennsylvania rules: a PA teaching certificate or a PDE emergency permit requested by the school entity (Type 06 for day-to-day work, Type 04 for leaves beyond 20 consecutive days), plus Act 34, Act 151, and Act 114 background reports that are no more than five years old at hire.</p>
<p>Under PDE's emergency-permit guideline, "A Type 06 permit is issued by the Department to qualify a person for service as a day-to-day substitute," and if service exceeds 20 days for an individual professional employee, "a long-term substitute permit (Type 04) is required" ${cite("PDE, CSPG 13 — Emergency Permits", "https://www.pa.gov/agencies/education/programs-and-services/educators/certification/certification-staffing/staffing-guidelines/cspg-13-emergency-permits")}. Emergency permits generally require a bachelor's degree transcript, and the school entity — not the agency — requests the permit, including for substitutes provided by private agencies or contractors.</p>
<p>PDE's background-check guidance names substitutes specifically among the prospective school employees who must present a Federal Criminal History Record, a PA State Police report, and a child abuse report no more than five years old at the time of hire, and it applies the same rule to independent contractors and their employees ${cite("PDE, Background Checks", "https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks")}. For a Philadelphia charter running its own HR office, that means every agency substitute arrives with the same three documents a direct hire would — and we track all of them before the first shift.</p>
<h2 id="philadelphia-charters">Staffing Philadelphia's charter networks</h2>
<p class="answer-lead">Philadelphia's charter sector includes large multi-campus operators such as Mastery Charter Schools, KIPP Philadelphia, MaST Community Charter School, and Universal Companies. Each campus carries its own coverage and compliance load, which is why charter networks are FocusedEDU's highest-priority partner segment.</p>
<p>Mastery operates 11 elementary and 7 secondary schools across the city with a dedicated specialized-services program ${cite("Mastery Charter Schools", "https://masterycharter.org")}; Universal Companies manages five charter schools serving roughly 4,300 students ${cite("Universal Companies", "https://www.universalcompanies.org/education/")}. A substitute model that works for one building often breaks across five, because the pool is spread thin and every campus is calling at the same hour. We build the pool campus by campus and report fill rates per building, so a network office can see exactly where coverage is slipping.</p>
<h2 id="proof-first-philadelphia">Proof: First Philadelphia Public Charter School</h2>
<p class="answer-lead">First Philadelphia Public Charter School has partnered with FocusedEDU since 2021 for certified special education teachers, paraprofessionals, substitute teachers, and one-on-one aides. We filled 100% of its open special education teacher roles, each within two weeks of the request, and retained 100% of the educators we placed.</p>
<p>Working directly with the school's leadership, we built a customized recruiting plan and a dedicated pipeline, consistently presenting multiple qualified candidates per position so the school could choose the right fit, and we owned advertising, interviewing, credentialing, and screening end to end. Read the <a href="/case-studies/first-philadelphia-public-charter-school">First Philadelphia case study</a>, and see the day-to-day substitute model at scale in the <a href="/case-studies/odyssey-charter-school">Odyssey Public Charter School case study</a>, where our substitutes hold a 95% fill rate — 40%+ better than the previous provider.</p>
${forSubs("Philadelphia", "Philadelphia substitutes need a Pennsylvania certificate or the qualifications for a school-requested emergency permit, and current Act 34, 151, and 114 clearances. We work across the city and the surrounding counties, so you can tell us which neighborhoods and grade bands you want.")}
${cta("Philadelphia")}`,
    faqs: [
      {
        q: "Do Philadelphia substitutes need a teaching certificate?",
        a: "Not necessarily. A Pennsylvania-certified teacher can substitute on that certificate; otherwise the school requests a PDE emergency permit — a Type 06 for day-to-day service or a Type 04 for a long-term assignment. Most emergency permits require a bachelor's degree. Act 34, 151, and 114 clearances are required either way.",
      },
      {
        q: "Do you staff Philadelphia charter schools?",
        a: "Yes. Charter networks are our highest-priority partner segment. First Philadelphia Public Charter School has partnered with us since 2021, with 100% of open special education teacher roles filled within two weeks and 100% retention.",
      },
      {
        q: "How fast can you get substitutes into our building?",
        a: "Timing depends on how many of a candidate's clearances are already current. Our automated credentialing cuts typical time-to-hire roughly in half, and daily absences post to our full vetted pool in the app the moment you enter them.",
      },
      {
        q: "Will you also staff the charter down the street?",
        a: "No. We work with one client per region. The substitute pool we recruit around your campuses serves only your schools.",
      },
      {
        q: "Can we hire a long-term sub permanently?",
        a: "Yes, at no cost. Every FocusedEDU placement is temp-to-perm with no conversion fee and no buyout.",
      },
      {
        q: "Where is FocusedEDU based?",
        a: "At 175 Strafford Avenue in Wayne, Pennsylvania, on the Main Line. We have staffed K-12 schools in the Philadelphia region for 12 years.",
      },
    ],
    related: [
      { label: "Special Education Staffing in Pennsylvania", slug: "special-education-staffing-pennsylvania" },
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Philadelphia Education Staffing", slug: "philadelphia-education-staffing" },
      HUB,
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Staffing a Multi-Site Charter Network", slug: "staffing-a-multi-site-charter-network" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
    ],
  },

  // ───────────────────────────── New Jersey ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-new-jersey",
    eyebrow: "Substitute teacher staffing · New Jersey",
    h1: "Substitute Teacher Staffing in New Jersey",
    metaTitle: "Substitute Teacher Staffing Agency in New Jersey",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for New Jersey schools — credential and CHRC handled, paid weekly, one client per region. Free 30-minute call.",
    hero: "FocusedEDU is a substitute teacher staffing agency for New Jersey districts and charter schools. We recruit and place day-to-day, long-term, and special education substitutes and substitute paraprofessionals, and we walk every candidate through the county substitute credential and the criminal history record check before a first assignment.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher working with students in a New Jersey classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New Jersey" }],
    parent: HUB,
    roles: SUB_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "New Jersey substitute credential (30 semester-hour credits) or a NJ certificate, verified in NJEdCert",
      "Criminal history record check approval naming the Substitute Teacher position",
      "Service-limit tracking per classroom: 20 days, 40 with an approved extension",
      "Sponsoring district or organization confirmed for the credential application",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
      "Every credential and clearance tracked and expiration-flagged",
    ],
    quote: {
      text: "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
      name: "Erin D. Murphy-Richardson",
      role: "Superintendent, The Barack Obama Green Charter Schools (Plainfield, NJ)",
    },
    sections: [
      {
        heading: "What New Jersey schools need from a substitute partner",
        body: "New Jersey's substitute rules put a clock on every assignment. A substitute credential holder can stay in one classroom for a limited number of days before the district needs an extension or a differently credentialed teacher, so long leaves require planning, not just a name on a call list. Meanwhile the daily problem is the same one every state has: a teacher calls out before dawn, and the reliable subs committed to other schools the night before.\n\nThe districts and charters we talk to need three kinds of coverage working at once — day-to-day substitutes who are confirmed before first bell, long-term substitutes who are tracked against the service limit so a leave never goes out of compliance, and special education substitutes and substitute paraprofessionals who keep IEP services running. New Jersey's county structure adds one more requirement: someone has to manage the credential paperwork, because a substitute who is perfect in the classroom is useless until the county issues the credential.",
      },
      {
        heading: "How FocusedEDU staffs New Jersey substitute programs",
        body: "We serve New Jersey from just across the river in Wayne, Pennsylvania, and New Jersey schools are part of our track record — Bridgeton Public Schools, The Barack Obama Green Charter Schools in Plainfield, and Hope Community Charter School in Camden have each put their recommendation in writing (see /references).\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts through a mobile app, so your morning absence is visible to the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Our automated credentialing tracks each sub's credential, criminal history approval, and days served per classroom, and cuts typical time-to-hire roughly in half. And every placement is temp-to-perm at no cost: a long-term sub who proves out can become your teacher with no conversion fee.\n\nFor special education, paraprofessional, and related-services staffing beyond substitutes, see our [New Jersey substitute, special education, and K-12 staffing](/new-jersey-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="nj-substitute-requirements">New Jersey substitute teacher requirements</h2>
<p class="answer-lead">A New Jersey substitute needs a substitute credential — which now requires 30 semester-hour credits from an accredited college, not 60 — or a New Jersey teaching certificate, plus an approved criminal history record check. A credential holder can serve 20 days in one classroom, extendable by 20 more at the district's request.</p>
<h3>The 30-credit substitute credential</h3>
<p>The New Jersey Department of Education lists the credential requirement as "Completion of 30 semester-hour credits at an accredited college or university." Applicants first obtain a sponsor school district or organization, then apply for the credential in NJEdCert; the application carries a $125 fee, and questions about the substitute credential go to the County Office of Education ${cite("NJDOE, Substitute Credential", "https://www.nj.gov/education/certification/substitutes/")}. The criminal history record check must be approved, with "Substitute Teacher" listed as the position, and the approval date must be within five months of the application date.</p>
<p>The 30-credit threshold is recent. In an October 11, 2023 memo to local education agencies, the Department said it "recently adopted revised regulations reducing the minimum number of credits completed at an accredited college or university from 60 to 30, for an individual to qualify for a substitute credential" ${cite("NJDOE broadcast memo, Substitute Certification Service Limits, Oct. 11, 2023", "https://www.nj.gov/education/broadcasts/2023/oct/11/SubstituteCertificationServiceLimits.pdf")}. Older guidance that still circulates online quotes the 60-credit rule.</p>
<h3>Service limits: 20 days, 40 with an extension, 60 for CE/CEAS holders in-field</h3>
<p>The same memo sets the limits every scheduler has to track. A district employing a substitute credential holder "may request an extension of the service limit of 20 days for an additional 20 days," so "the maximum number of instructional days for an individual holding a substitute credential is 40 days, in one classroom." Substitutes who hold a certificate of eligibility (CE), a CEAS, or a standard certificate but teach outside their subject area have the same 20-day limit, with a maximum of 40 upon notification to the executive county superintendent. A CE or CEAS holder substituting in the subject area of their certificate can serve 60 days, and longer — up to one academic year in the same classroom — if they hold a provisional certificate and are enrolled in or have completed a mentoring program and an educator preparation program.</p>
<p>That is where most long-term coverage goes wrong: a leave that starts with a credential holder quietly runs past day 40. We track days served per classroom for every FocusedEDU substitute and flag the assignment well before the limit, so you can extend, reassign, or bring in a CE/CEAS holder on schedule.</p>
<h3>Criminal history record checks</h3>
<p>New Jersey's Office of Student Protection "conducts criminal background checks of applicants for positions in New Jersey's public schools," including authorized vendors ${cite("NJDOE, Criminal History Review", "https://www.nj.gov/education/crimhist/")}. Every FocusedEDU substitute completes the check with the substitute position named, and we keep the approval on file with the credential.</p>
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. At Odyssey Public Charter School — the school just across the Delaware River in Wilmington where we have staffed since 2021 — our weekly-pay, app-based model holds a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.")}
${forSubs("New Jersey", "To substitute in New Jersey you need the substitute credential (30 college credits) or a New Jersey certificate, a sponsoring district, and an approved criminal history record check. We tell you which steps to take first so the county can issue your credential without delays.")}
${cta("New Jersey")}`,
    faqs: [
      {
        q: "How many college credits do you need to substitute in New Jersey?",
        a: "30 semester-hour credits from an accredited college or university. The New Jersey Department of Education reduced the requirement from 60 to 30 credits in revised regulations announced to districts in October 2023.",
      },
      {
        q: "How long can a substitute stay in one New Jersey classroom?",
        a: "A substitute credential holder can serve 20 days in one classroom; the district can request a 20-day extension, for a maximum of 40 days. CE or CEAS holders substituting in their certificate's subject area can serve 60 days, and longer under specific conditions.",
      },
      {
        q: "Who issues the New Jersey substitute credential?",
        a: "Applicants apply in NJEdCert with a sponsoring district or organization and a $125 fee; questions go to the County Office of Education. An approved criminal history record check naming the Substitute Teacher position is required.",
      },
      {
        q: "Do you work with New Jersey charter schools?",
        a: "Yes. The Barack Obama Green Charter Schools in Plainfield and Hope Community Charter School in Camden have both written letters of recommendation for Focused Staffing Group, alongside Bridgeton Public Schools.",
      },
      {
        q: "Will your substitute pool also serve the district next to ours?",
        a: "No. We work with one client per region, so the subs we recruit in your area serve only your schools.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout.",
      },
    ],
    related: [
      { label: "Special Education Staffing in New Jersey", slug: "special-education-staffing-new-jersey" },
      { label: "Paraprofessional Staffing in New Jersey", slug: "paraprofessional-staffing-new-jersey" },
      { label: "New Jersey Substitute, Special Ed & K-12 Staffing", slug: "new-jersey-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Substitute Teacher Staffing in New York", slug: "substitute-teacher-staffing-new-york" },
      { label: "Substitute Teacher Staffing in Delaware", slug: "substitute-teacher-staffing-delaware" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
    ],
  },

  // ───────────────────────────── Delaware / Wilmington ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-delaware",
    eyebrow: "Substitute teacher staffing · Delaware & Wilmington",
    h1: "Substitute Teacher Staffing in Delaware and Wilmington",
    metaTitle: "Substitute Teacher Staffing in Delaware & Wilmington",
    metaDescription:
      "Substitute teachers for Delaware and Wilmington schools: a 95% day-to-day fill rate at Odyssey Charter, 40% better than the prior provider. SBI/FBI-cleared.",
    hero: "FocusedEDU staffs substitute teachers for Delaware districts and charter schools, and Wilmington is where our record is strongest: at Odyssey Public Charter School our substitutes hold a 95% day-to-day fill rate, 40% better than the previous provider. We place daily, long-term, and special education subs and substitute paraprofessionals, fully SBI, FBI, and registry cleared.",
    photo: "/photography/educator-portrait.jpg",
    photoAlt: "An educator ready to substitute in a Wilmington, Delaware school",
    updated: UPDATED,
    areaServed: [
      { type: "State", name: "Delaware" },
      { type: "City", name: "Wilmington, DE" },
    ],
    parent: HUB,
    roles: SUB_ROLES,
    stats: [
      { value: "95%", label: "Day-to-day substitute fill rate at Odyssey Public Charter School, Wilmington" },
      { value: "+40%", label: "Improvement over the school's previous staffing provider" },
      { value: "120+", label: "Roles filled at Odyssey since 2021" },
      { value: "13+", label: "Distinct role types staffed at that one Delaware school" },
    ],
    steps: SUB_STEPS,
    verify: [
      "Fingerprinted Delaware criminal background check through the State Bureau of Identification",
      "National FBI criminal background check",
      "Child Protection Registry check through DSCYF",
      "Continuous-employment status tracked (45 substitute days in the prior school year)",
      "Degree, certification, or district-specific substitute qualifications verified",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
      name: "Elias Pappas",
      role: "CEO, Odyssey Charter School (Wilmington, DE)",
    },
    sections: [
      {
        heading: "What Delaware schools need from a substitute partner",
        body: "Delaware is small enough that every district and charter school competes for the same substitutes. A reliable sub in New Castle County can reach a dozen campuses in a morning, so the schools that win coverage are the ones whose absences reach the pool first and whose subs are paid on time. Charter schools carry an extra load: each operates as its own local education agency, so there is no larger district absorbing a coverage gap or a compliance lapse on its behalf.\n\nThe needs we hear most are the same four everywhere — day-to-day coverage confirmed before first bell, long-term substitutes for leaves, building subs who know the school, and special education substitutes and substitute paraprofessionals who keep IEP services and one-on-one assignments intact. What is different in Delaware is how much a single partner can cover: at one Wilmington school, we staff 13+ distinct role types from one pipeline.",
      },
      {
        heading: "How FocusedEDU staffs Delaware substitute programs",
        body: "Our substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app — the logistics that keep a pool active in January, not just September. We work with one client per region, so the substitutes we recruit for your schools are not rented to a competing school down Route 202. Automated credentialing tracks every SBI, FBI, and registry check and cuts typical time-to-hire roughly in half. And every placement is temp-to-perm at no cost, which is exactly what Odyssey's CEO, Elias Pappas, put in writing.\n\nWe have staffed K-12 schools for 12 years from Wayne, Pennsylvania, under a screening standard built by our founder, Robert Flom, a former K-12 teacher. Christina School District, Brandywine School District, and Odyssey Charter School are on our client list. For Delaware special education and related services, see our [Delaware substitute, special education, and K-12 staffing](/delaware-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="de-substitute-requirements">Delaware substitute teacher requirements</h2>
<p class="answer-lead">Delaware does not license substitute teachers through its educator certification chapter — state law excludes substitutes from the definition of "educator" — so each district and charter sets its own substitute qualifications. Every substitute must still clear a fingerprinted SBI and FBI background check and a Child Protection Registry check.</p>
<h3>Substitutes and Delaware's educator licensure law</h3>
<p>Title 14, Chapter 12 of the Delaware Code governs educator licensure and certification. Its definitions section states plainly: "For purposes of this subchapter, the term 'educator' does not include substitute teachers" ${cite("14 Del. C. §1202", "https://delcode.delaware.gov/title14/c012/sc01/index.html")}. In practice, that leaves substitute qualifications — degree level, prior experience, training — to each district and charter school, which is why requirements can differ from one district or charter to the next. We verify each substitute against the specific requirements of the school they will serve, not a generic checklist.</p>
<h3>Criminal background and Child Protection Registry checks</h3>
<p>Delaware's background-check regulation for public schools applies "to all individuals seeking Public School related employment in a Delaware Public School." It defines the required check as "a fingerprinted Delaware and national background check completed by the SBI and the FBI," and adds that "a Child Protection Registry Check shall be completed by DSCYF" ${cite("14 DE Admin. Code 745", "https://archive.regulations.delaware.gov/AdminCode/title14/700/745.shtml")}. The regulation also sets a substitute-specific rule: substitute teachers are considered continuously employed "when they have worked forty five (45) days" in the prior school year in any combination of Delaware public schools — the threshold that determines whether a returning sub needs a fresh check.</p>
<p>Our credentialing system tracks all three checks for every FocusedEDU substitute and counts days served across the year, so a returning sub's status is known before the first assignment, not discovered after it.</p>
<h2 id="wilmington">Substitute teacher staffing in Wilmington</h2>
<p class="answer-lead">Wilmington is FocusedEDU's flagship Delaware market. We have staffed Odyssey Public Charter School in Wilmington since 2021 — 120+ placements across 13+ role types, with a 95% day-to-day substitute fill rate — and Christina School District, Brandywine School District, and Serviam Girls Academy in New Castle are part of our Delaware record.</p>
<p>Wilmington-area schools face a concentrated version of the state's challenge: district schools, a dense charter sector, and independent schools all within a short drive of one another, all calling the same substitutes on the same mornings. A sub who can reach six campuses by 7:30 commits to whoever confirms first and pays on time. Our weekly Friday pay and app-based shift pickup are built for exactly that market, and our one-client-per-region policy means the pool we build around your Wilmington campus is not presented to the school across town.</p>
<p>Dr. Heather Brooks, principal of Serviam Girls Academy in New Castle, wrote that she "would highly recommend Focused Staffing Group to any school or organization seeking reliable, professional, and efficient staffing services." Read the full letters on our <a href="/references">references page</a>.</p>
${odysseyProof("Odyssey Public Charter School in Wilmington is our clearest substitute result: since partnering with FocusedEDU in 2021, the school's day-to-day substitute fill rate has reached 95%, a 40%+ improvement over its previous provider, inside a partnership that has filled 120+ roles across 13+ role types.")}
${forSubs("Delaware", "Delaware substitutes need a fingerprinted SBI and FBI background check and a Child Protection Registry check, plus whatever degree or certification the specific district or charter requires. We work across New Castle County and statewide.")}
${cta("Delaware")}`,
    faqs: [
      {
        q: "Do substitute teachers need a Delaware teaching license?",
        a: "Not under the state's educator licensure chapter: 14 Del. C. §1202 states that the term educator does not include substitute teachers for that subchapter. Each district and charter school sets its own substitute qualifications, and every substitute must clear the state's background checks.",
      },
      {
        q: "What background checks do Delaware substitutes need?",
        a: "Under 14 DE Admin. Code 745, a fingerprinted Delaware and national background check completed by the State Bureau of Identification and the FBI, plus a Child Protection Registry check completed by DSCYF.",
      },
      {
        q: "What substitute fill rate have you achieved in Delaware?",
        a: "At Odyssey Public Charter School in Wilmington, our model sustains a 95% day-to-day substitute fill rate — a 40%+ improvement over the previous provider — inside a partnership that has filled 120+ roles since 2021.",
      },
      {
        q: "Do you staff Wilmington charter schools?",
        a: "Yes. Odyssey Public Charter School in Wilmington has partnered with us since 2021, and Serviam Girls Academy in New Castle has recommended us in writing. Christina and Brandywine School Districts are also on our client list.",
      },
      {
        q: "Can we hire one of your subs permanently?",
        a: "Yes, at no cost. Every placement is temp-to-perm with no conversion fee — Odyssey's CEO, Elias Pappas, cites that clause in his letter of recommendation.",
      },
      {
        q: "Will you also staff a competing school near us?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings.",
      },
    ],
    related: [
      { label: "Paraprofessional Staffing in Delaware", slug: "paraprofessional-staffing-delaware" },
      { label: "Delaware Substitute, Special Ed & K-12 Staffing", slug: "delaware-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Substitute Teacher Staffing in Maryland", slug: "substitute-teacher-staffing-maryland" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
    ],
  },

  // ───────────────────────────── Washington, DC ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-washington-dc",
    eyebrow: "Substitute teacher staffing · Washington, DC",
    h1: "Substitute Teacher Staffing in Washington, DC",
    metaTitle: "Substitute Teacher Staffing in Washington, DC",
    metaDescription:
      "Substitute teachers, long-term subs, and SPED subs for DC charter LEAs and DCPS — the partner behind IDEA PCS and Cesar Chavez PCS. Cleared before day one.",
    hero: "FocusedEDU provides substitute teachers to Washington, DC public charter schools and DCPS campuses. We place day-to-day substitutes, subject-certified long-term substitutes, special education subs, and one-on-one aides, and we have partnered with IDEA Public Charter School and Cesar Chavez Public Charter School since 2022, presenting an average of four qualified candidates per opening.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher with middle school students in Washington, DC",
    updated: UPDATED,
    areaServed: [{ type: "City", name: "Washington, DC" }],
    parent: HUB,
    roles: [
      "Day-to-day substitute teachers",
      "Subject-certified long-term substitutes",
      "Special education substitutes",
      "Certified special education teachers",
      "Dedicated and 1:1 aides",
      "Substitute paraprofessionals",
    ],
    stats: [
      { value: "100%", label: "Certified SPED roles filled at IDEA Public Charter School" },
      { value: "100%", label: "Retention of the educators placed at IDEA" },
      { value: "4", label: "Qualified candidates per opening at Cesar Chavez Public Charter School" },
      { value: "2 wks", label: "From request to filled at IDEA" },
    ],
    steps: SUB_STEPS,
    verify: [
      "Criminal background check completed before providing services to any DCPS student, school, or office",
      "Clearance renewal tracked against the two-year expiration on DCPS clearance letters",
      "Bachelor's degree from an accredited institution for DCPS substitute roles",
      "Official transcripts on file (foreign transcripts evaluated by an accredited agency)",
      "Charter LEA-specific substitute requirements verified per campus",
      "Subject certification verified for long-term substitute assignments",
      "TB test and vaccination documentation",
      "Reference checks and classroom-management screening before the first assignment",
    ],
    sections: [
      {
        heading: "What DC schools need from a substitute partner",
        body: "Washington, DC runs two public school systems side by side: DC Public Schools and a large public charter sector in which each charter is its own local education agency. That structure shapes substitute staffing. A DCPS school works inside district hiring rules; a charter LEA writes its own, then carries every coverage gap and every compliance lapse on its own books. Some, like Cesar Chavez Public Charter School, run rigorous grades 6-12 college-prep programs where a day of lost instruction costs more than it looks.\n\nThe requests we see most from DC schools are for day-to-day substitutes confirmed before first bell, subject-certified long-term substitutes who can teach a curriculum rather than supervise one, and special education substitutes and dedicated aides who keep IEP services intact. The constant across all three is choice: schools want to pick the right person, not accept whoever happened to be available.",
      },
      {
        heading: "How FocusedEDU staffs DC substitute programs",
        body: "We build a dedicated pipeline for each DC partner and source deep enough that the school chooses rather than settles — at Cesar Chavez Public Charter School that means an average of four qualified candidates for every open position. Our substitutes are paid weekly, every Friday, by direct deposit or Cash App, and pick up and swap shifts in a mobile app, so daily absences reach the whole vetted pool at once.\n\nWe work with one client per region, so the candidates we recruit for your campuses are not shopped to a competing charter across the river. Automated credentialing tracks every clearance and its expiration and cuts typical time-to-hire roughly in half, and every placement is temp-to-perm at no cost. For DC special education and paraprofessional staffing beyond substitutes, see our [Washington, DC substitute, special education, and K-12 staffing](/washington-dc-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="dc-substitute-requirements">DC substitute teacher requirements</h2>
<p class="answer-lead">DC no longer issues substitute teacher licenses — OSSE stopped in March 2016 — so requirements are set by the employing school system. DCPS requires a bachelor's degree from an accredited institution, and every adult who serves DCPS students must complete a criminal background check, renewed every two years.</p>
<h3>No state substitute license; a bachelor's degree for DCPS</h3>
<p>DCPS states that "As of March 2016, the Office of the State Superintendent of Education (OSSE) will no longer issue substitute teacher licenses." For DCPS roles, "candidates must hold a valid bachelor's degree from an accredited institution," must submit official transcripts if selected, and foreign transcripts must be evaluated by an accredited credential evaluation agency ${cite("DCPS, Do I need a license to be a substitute teacher?", "https://joindcps.dc.gov/faq/do-i-need-license-be-substitute-teacher")}. Public charter LEAs set their own substitute qualifications, so we verify each substitute against the specific requirements of the campus they will serve.</p>
<h3>Background checks and the two-year clearance cycle</h3>
<p>DCPS requires that all current and prospective DCPS employees, program partners, contractors, student teachers, interns, and volunteers complete a criminal background check before providing services to any DCPS student, school, or office, and it notes that "Your clearance expires two years from the date listed on your letter" ${cite("DCPS, Fingerprinting, Background Check, and ID Badge Requirements", "https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements")}. A two-year expiration is easy to miss on a substitute who works intermittently. Our credentialing system flags every FocusedEDU substitute's renewal date well in advance, so a returning sub is never turned away at the front desk.</p>
<h2 id="proof-dc">Proof: IDEA Public Charter School and Cesar Chavez Public Charter School</h2>
<p class="answer-lead">Two DC public charter schools have partnered with FocusedEDU since 2022. At IDEA Public Charter School we filled 100% of open certified special education teacher roles, each within two weeks, with 100% retention. At Cesar Chavez Public Charter School we present an average of four qualified candidates per opening, including subject-certified long-term substitutes.</p>
<p>IDEA PCS came to us short on special education teachers, substitute teachers, and one-on-one aides, and fighting an uphill reputation in the local talent market. We built a recruiting plan around the real, positive experiences of the contractors we placed there; the perception of IDEA as a place to work shifted, and every certified special education role was filled. Read the <a href="/case-studies/idea-public-charter-school">IDEA Public Charter School case study</a>.</p>
<p>Cesar Chavez PCS runs a rigorous college-prep program for 414 students in grades 6-12. A thin local pool left it short on dedicated aides, special education teachers, and subject-certified long-term subs; we built a dedicated pipeline and sourced deep, so the final call was always the school's. Read the <a href="/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School case study</a>. For the daily-coverage model at scale, see <a href="/case-studies/odyssey-charter-school">Odyssey Public Charter School</a>, where our substitutes hold a 95% day-to-day fill rate.</p>
${forSubs("Washington, DC", "DCPS substitute roles require a bachelor's degree from an accredited institution and a cleared criminal background check; charter schools set their own requirements, and we match you to the campuses where you qualify.")}
${cta("Washington, DC")}`,
    faqs: [
      {
        q: "Does DC require a substitute teaching license?",
        a: "No. DCPS states that OSSE stopped issuing substitute teacher licenses in March 2016. DCPS requires a bachelor's degree from an accredited institution for substitute candidates; public charter LEAs set their own requirements.",
      },
      {
        q: "How long is a DCPS background clearance valid?",
        a: "Two years. DCPS clearance letters expire two years from the date listed on the letter, and a background check is required before anyone provides services to DCPS students, schools, or offices.",
      },
      {
        q: "Which DC schools has FocusedEDU staffed?",
        a: "IDEA Public Charter School and Cesar Chavez Public Charter School, both since 2022. At IDEA we filled 100% of certified special education roles with 100% retention; at Cesar Chavez we present an average of four qualified candidates per opening.",
      },
      {
        q: "Can you provide subject-certified long-term substitutes?",
        a: "Yes. Subject-certified long-term substitutes are part of our Cesar Chavez PCS partnership, alongside dedicated aides and special education teachers.",
      },
      {
        q: "Will you also staff a competing charter near us?",
        a: "No. We work with one client per region, so the pipeline we build for your campuses serves only your schools.",
      },
      {
        q: "What does it cost to hire a substitute permanently?",
        a: "Nothing extra. Every FocusedEDU placement is temp-to-perm at no cost, with no conversion fee and no buyout.",
      },
    ],
    related: [
      { label: "Special Education Staffing in Washington, DC", slug: "special-education-staffing-washington-dc" },
      { label: "Paraprofessional Staffing in Washington, DC", slug: "paraprofessional-staffing-washington-dc" },
      { label: "Washington DC Substitute, Special Ed & K-12 Staffing", slug: "washington-dc-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Maryland", slug: "substitute-teacher-staffing-maryland" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Staffing a Multi-Site Charter Network", slug: "staffing-a-multi-site-charter-network" },
      { label: "Substitute Teacher Staffing in Delaware", slug: "substitute-teacher-staffing-delaware" },
    ],
  },

  // ───────────────────────────── Maryland ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-maryland",
    eyebrow: "Substitute teacher staffing · Maryland",
    h1: "Substitute Teacher Staffing in Maryland",
    metaTitle: "Substitute Teacher Staffing Agency in Maryland",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Maryland school systems and charters — COMAR-screened, employment-history reviewed, one client per region.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Maryland's local school systems and charter schools. We place day-to-day, long-term, and special education substitutes and substitute paraprofessionals, screened against Maryland's statewide disqualified-substitute database and run through the employment-history review state law requires for anyone working with minors.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Maryland classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "Maryland" }],
    parent: HUB,
    roles: SUB_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Checked against MSDE's database of disqualified substitute teachers (COMAR 13A.07.12.01)",
      "Employment-history review of former employers with direct contact with minors, prior 10 years (Education §6-113.2)",
      "Signed records-release consent and written misconduct disclosure",
      "Local school system's own substitute qualifications verified (degree or credit level, orientation)",
      "Criminal background check to the hiring school system's standard",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
      name: "Lennita Porter-Linen",
      role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
    },
    sections: [
      {
        heading: "What Maryland schools need from a substitute partner",
        body: "Maryland's 24 local school systems each run their own substitute program, so there is no single statewide standard for who can substitute — the qualifications in one county can differ from the next. What every system shares is the morning problem: a teacher calls out before dawn, the reliable subs are already committed, and the absence cascades into lost prep periods, split classes, and paraprofessionals pulled off IEP-mandated assignments.\n\nMaryland schools ask us for day-to-day substitutes confirmed before first bell, long-term substitutes for leaves and semester vacancies, and special education substitutes and substitute paraprofessionals — the category where the state's own workforce data shows vacancies closing slowest. Charter schools in Baltimore City and Prince George's County need all of it with a smaller HR office behind them.",
      },
      {
        heading: "How FocusedEDU staffs Maryland substitute programs",
        body: "We build each Maryland substitute program around the hiring school system's own qualifications, then add the screening the state requires everywhere: the disqualified-substitute database check and the employment-history review. Frederick County Public Schools is on our client list.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts through a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the substitutes we recruit for your system are not presented to the neighboring county. Automated credentialing cuts typical time-to-hire roughly in half, and every placement is temp-to-perm at no cost. Our founder, Robert Flom, is a former K-12 teacher, and our screen reflects it. For Maryland special education and related services beyond substitutes, see our [Maryland substitute, special education, and K-12 staffing](/maryland-special-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="md-substitute-requirements">Maryland substitute teacher requirements</h2>
<p class="answer-lead">Maryland substitutes do not need a state educator certificate; each local board of education sets its own substitute qualifications. Statewide, school systems must check every substitute against MSDE's database of disqualified substitutes, and state law requires an employment-history review for anyone applying to work with minors.</p>
<h3>Qualifications are set by each local school system</h3>
<p>Maryland's Department of Legislative Services summarized the rule in its analysis of a 2010 substitute-standards bill: State Board regulations set standards for professional teacher certification, "but substitute teachers are not required to meet these standards. Qualifications for substitute teachers are established by local boards of education" ${cite("Md. Department of Legislative Services, Fiscal and Policy Note, HB 760 (2010)", "https://mgaleg.maryland.gov/2010rs/fnotes/bil_0000/hb0760.pdf")}. That is why degree or credit-hour requirements, orientation, and pay differ county to county. We verify every FocusedEDU substitute against the hiring system's current posted requirements.</p>
<h3>The statewide disqualified-substitute database</h3>
<p>COMAR 13A.07.12.01 provides that "A local school system shall disqualify a substitute teacher from employment in any local school system" for specified causes, with notice and a written appeal to the State Superintendent. It requires that "The Maryland State Department of Education shall maintain an electronic database of substitute teachers" who have been disqualified, that local systems notify MSDE within 10 days of final action, and that a local school system check whether an individual is listed before employing them ${cite("COMAR 13A.07.12.01", "https://regs.maryland.gov/us/md/exec/comar/13A.07.12.01")}.</p>
<h3>Employment-history review for anyone working with minors</h3>
<p>Maryland Education Article §6-113.2 requires an applicant for a position involving direct contact with minors to list all former employers where the applicant held such a position within the previous 10 years, sign a consent authorizing those employers to release records relating to child sexual abuse or sexual misconduct, and state in writing whether they have been the subject of such an investigation or disciplined for it. The statute applies to contracting agencies as well: "A contracting agency shall conduct an employment history review of an applicant" ${cite("Md. Code, Education §6-113.2", "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.2")}. We complete that review for every FocusedEDU substitute before the candidate is presented, not after an offer.</p>
${odysseyProof("Fill rate is the number that shows whether a substitute program works. At Odyssey Public Charter School, a 1,000+ student school just up I-95 in Wilmington, Delaware, our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider.")}
<p>For special education coverage specifically, <a href="/case-studies/idea-public-charter-school">IDEA Public Charter School</a> in Washington, DC shows the same pipeline at work: 100% of open certified special education teacher roles filled within two weeks, with 100% retention.</p>
${forSubs("Maryland", "Maryland substitute requirements are set by each county school system, so we match you to the systems where you already qualify and complete the state's employment-history review with you up front.")}
${cta("Maryland")}`,
    faqs: [
      {
        q: "Do Maryland substitute teachers need a teaching certificate?",
        a: "No. Maryland's legislative analysts note that substitute teachers are not required to meet professional certification standards; qualifications for substitutes are established by each local board of education, so they vary by county.",
      },
      {
        q: "What is Maryland's disqualified substitute database?",
        a: "COMAR 13A.07.12.01 requires MSDE to maintain an electronic database of disqualified substitute teachers. Local school systems report disqualifications within 10 days of final action and must check the list before employing an individual.",
      },
      {
        q: "Does Maryland's employment-history review apply to agency substitutes?",
        a: "Yes. Education §6-113.2 covers applicants for positions involving direct contact with minors and states that a contracting agency shall conduct an employment history review of an applicant. FocusedEDU completes it before presenting a candidate.",
      },
      {
        q: "Do you staff Maryland charter schools?",
        a: "Yes. Charter networks are our highest-priority partner segment, and we staff charters alongside county school systems. Frederick County Public Schools is on our client list.",
      },
      {
        q: "Will you also staff the neighboring county?",
        a: "No. We work with one client per region, so the substitute pool we build for your system serves only your schools.",
      },
      {
        q: "What does it cost to keep a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout.",
      },
    ],
    related: [
      { label: "Paraprofessional Staffing in Maryland", slug: "paraprofessional-staffing-maryland" },
      { label: "Maryland Substitute, Special Ed & K-12 Staffing", slug: "maryland-special-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Washington, DC", slug: "substitute-teacher-staffing-washington-dc" },
      { label: "Substitute Teacher Staffing in Delaware", slug: "substitute-teacher-staffing-delaware" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
    ],
  },

  // ───────────────────────────── New York ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-new-york",
    eyebrow: "Substitute teacher staffing · New York",
    h1: "Substitute Teacher Staffing in New York",
    metaTitle: "Substitute Teacher Staffing Agency in New York",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for New York districts, BOCES, and charters — SAVE Law fingerprint clearance and 40/90-day limits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for New York school districts, BOCES, and charter networks. We place day-to-day, long-term, and special education substitutes and substitute paraprofessionals, with SAVE Law fingerprint clearance completed and New York's 40-day and 90-day substitute limits tracked for every uncertified sub.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in a New York classroom",
    updated: UPDATED,
    areaServed: [{ type: "State", name: "New York" }],
    parent: HUB,
    roles: SUB_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "SAVE Law fingerprint-supported criminal history clearance through NYSED's TEACH system",
      "Certification status verified: certified, working toward certification, or uncertified",
      "Days worked per school or BOCES tracked against the 40-day limit for uncertified subs",
      "Superintendent good-faith-search certification documented for service beyond 40 or 90 days",
      "NYC DOE fingerprinting process followed for New York City schools",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
      name: "Tracy H. Foedisch",
      role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
    },
    sections: [
      {
        heading: "What New York schools need from a substitute partner",
        body: "New York's substitute rules sort every sub into a category, and the category decides how long they can stay. A certified teacher can substitute in any capacity for any number of days. An uncertified substitute who is not working toward certification runs into a hard cap measured in days per school year. For a district covering a long leave, that cap is the difference between a smooth semester and a scramble in November.\n\nNew York districts, BOCES, and charter networks ask us for the same mix every state needs — day-to-day substitutes confirmed before first bell, long-term substitutes who can carry a curriculum, and special education substitutes and substitute paraprofessionals who keep IEP services running — with one added demand: someone has to track who is certified, who is working toward it, and how many days each uncertified sub has left.",
      },
      {
        heading: "How FocusedEDU staffs New York substitute programs",
        body: "Every FocusedEDU substitute in New York is fingerprint-cleared through TEACH before a first assignment, and our credentialing system records each sub's certification category and days served per school, so an uncertified sub is never scheduled past the limit by accident. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district or BOCES component are not presented to the district next door. Every placement is temp-to-perm at no cost. For New York special education and related services beyond substitutes, see our [New York substitute, special education, and K-12 staffing](/new-york-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="ny-substitute-requirements">New York substitute teacher requirements</h2>
<p class="answer-lead">In New York, certified teachers can substitute for any number of days, and so can uncertified subs taking at least six semester hours a year toward certification. Uncertified substitutes not working toward certification are limited to 40 days per school or BOCES per year, or up to 90 with a superintendent's good-faith-search certification. Every school employee needs SAVE Law fingerprint clearance.</p>
<h3>The 40-day and 90-day rules</h3>
<p>NYSED's Office of Teaching Initiatives describes three categories. "Substitute teachers with a valid teaching certificate can work in any capacity, for any number of days." Substitutes working toward certification — taking college coursework at a rate of not less than six semester hours per year — can likewise work in any capacity for any number of days. Substitutes "who do not hold a valid teaching certificate and are not working towards certification" can work "for no more than 40 days in a school or BOCES in a school year" ${cite("NYSED, Substitute Teaching", "https://www.highered.nysed.gov/tcert/certificate/substituteteaching.html")}.</p>
<p>NYSED allows two extensions. Service can run "Up to 90 days in a school year, if the district superintendent or the superintendent certifies that the employer has conducted a good faith recruitment search for an appropriately certified candidate" and found none available. Service beyond 90 days requires a further certification that no certified teacher is available and that "a particular substitute teacher is needed to work with a specific class or group of students." For certified substitutes and those working toward certification, NYSED notes that after more than 40 days with a district or BOCES they must be employed in an area for which they are certified.</p>
<p>We record each FocusedEDU substitute's category at onboarding and count days served per school and BOCES, so long assignments go to subs who can legally finish them, and the superintendent certification is prepared before day 41, not discovered after it.</p>
<h3>SAVE Law fingerprint clearance</h3>
<p>NYSED's Office of School Personnel Review and Accountability explains that "Pursuant to the SAVE Law (Chapter 180 of the Laws of 2000), all individuals seeking employment in a school setting and all applicants for certification must undergo a fingerprint-supported criminal history background check" ${cite("NYSED, About OSPRA", "https://www.nysed.gov/educator-integrity/about-ospra")}. New York City schools follow the NYC Department of Education's own fingerprinting process, which feeds the same state clearance system ${cite("NYSED, New York City Fingerprinting for School Employment", "https://www.nysed.gov/educator-integrity/new-york-city-fingerprinting-school-employment")}. FocusedEDU completes clearance before a substitute is presented.</p>
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. At Odyssey Public Charter School in Wilmington, Delaware, a partner since 2021, our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate — a 40%+ improvement over the school's previous provider.")}
${forSubs("New York", "New York substitutes need SAVE Law fingerprint clearance. Certified teachers and subs working toward certification can take assignments of any length; uncertified subs can work up to 40 days per school or BOCES per year, and we help you plan around it.")}
${cta("New York")}`,
    faqs: [
      {
        q: "Do you need a teaching certificate to substitute in New York?",
        a: "No, but it determines how long you can work. Certified teachers, and uncertified subs taking at least six semester hours a year toward certification, can substitute for any number of days. Uncertified subs not working toward certification are limited to 40 days per school or BOCES per year.",
      },
      {
        q: "Can an uncertified substitute work more than 40 days in New York?",
        a: "Yes, up to 90 days in a school year if the superintendent certifies a good faith recruitment search found no appropriately certified candidate. Beyond 90 days requires a further certification that the particular substitute is needed for a specific class or group of students.",
      },
      {
        q: "Do New York substitutes need fingerprint clearance?",
        a: "Yes. Under the SAVE Law, all individuals seeking employment in a school setting must undergo a fingerprint-supported criminal history background check. New York City schools use the NYC DOE fingerprinting process.",
      },
      {
        q: "Do you work with BOCES?",
        a: "Yes. We staff New York school districts, BOCES, and charter networks, and we track substitute days per school and per BOCES because the 40-day limit is counted that way.",
      },
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for you serves only your schools.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout.",
      },
    ],
    related: [
      { label: "Special Education Staffing in New York", slug: "special-education-staffing-new-york" },
      { label: "Paraprofessional Staffing in New York", slug: "paraprofessional-staffing-new-york" },
      { label: "New York Substitute, Special Ed & K-12 Staffing", slug: "new-york-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
];
