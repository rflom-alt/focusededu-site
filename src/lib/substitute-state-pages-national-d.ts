/**
 * National substitute-staffing state pages, second wave, file 1 of 3:
 * Tennessee, Indiana, Missouri, Minnesota, South Carolina. Same model and
 * rules as substitute-state-pages-national-a.ts (approved FocusedEDU facts
 * only; the 95% fill rate is Odyssey's, in Wilmington, Delaware; no clients,
 * placements, or results claimed in these states).
 *
 * Every state rule below is quoted or paraphrased from the state's own page,
 * statute, or regulation, fetched and string-checked on 2026-10-30, and linked
 * inline. Where a state's primary sources did not settle a point (for example
 * South Carolina's substitute qualifications), the page says nothing about it
 * rather than borrowing from a third party.
 *
 * None of these five states had a live K-12 posting on the job board on
 * 2026-10-30, so no "current openings" line appears here.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff } from "./substitute-state-pages-national-a";

export const NATIONAL_WAVE2_UPDATED = "2026-10-30";

/** Approved testimonials already live on the site, reused verbatim with their attributions. */
export const TESTIMONIALS = {
  herring: {
    text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
    name: "Zavia Herring",
    role: "Director of HR, Renaissance Academy Charter School",
  },
  porterLinen: {
    text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
    name: "Lennita Porter-Linen",
    role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
  },
  weathington: {
    text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
    name: "David Weathington, MSW, LSW, Ed.D",
    role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
  },
  murphyRichardson: {
    text: "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
    name: "Erin D. Murphy-Richardson",
    role: "Superintendent, The Barack Obama Green Charter Schools (Plainfield, NJ)",
  },
  foedisch: {
    text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
    name: "Tracy H. Foedisch",
    role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
  },
  pappas: {
    text: "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
    name: "Elias Pappas",
    role: "CEO, Odyssey Charter School (Wilmington, DE)",
  },
};

/** Shared FAQ answer: the fill-rate question, answered with the Odyssey reference every time. */
export const fillRateFaq = (state: string, kind = "district") => ({
  q: `What fill rate can a ${state} ${kind} expect?`,
  a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
});

export const SPED_HUB = { label: "Special Education Staffing", slug: "special-education-staffing" };
export const PARA_HUB = { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" };
export const K12_HUB = { label: "K-12 Education Staffing", slug: "k12-education-staffing" };
export const RELATED_HUB = { label: "Related Services Staffing", slug: "related-services-staffing" };
export const sibling = (state: string) => ({
  label: `Substitute Teacher Staffing in ${state}`,
  slug: `substitute-teacher-staffing-${state.toLowerCase().replace(/ /g, "-")}`,
});

const TN_RULE_04 = "https://publications.tnsosfiles.com/rules/0520/0520-01/0520-01-02.20260713.pdf";
const TN_RULE_LIC = "https://publications.tnsosfiles.com/rules/0520/0520-02/0520-02-03.20260311.pdf";
const IN_CODE = "https://iga.in.gov/ic/2025/Title_20.html";
const IN_SUB = "https://www.in.gov/doe/educators/educator-licensing/substitute-permits";
const MO_168_036 = "https://revisor.mo.gov/main/OneSection.aspx?section=168.036";
const MO_168_133 = "https://revisor.mo.gov/main/OneSection.aspx?section=168.133";
const MN_0325 = "https://www.revisor.mn.gov/rules/8710.0325/";
const MN_0327 = "https://www.revisor.mn.gov/rules/8710.0327/";
const MN_441 = "https://www.revisor.mn.gov/statutes/cite/122A.441";
const SC_59_19 = "https://www.scstatehouse.gov/code/t59c019.php";

export const substituteStatePagesNationalD: ServicePage[] = [
  // ───────────────────────────── Tennessee ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-tennessee",
    eyebrow: "Substitute teacher staffing · Tennessee",
    h1: "Substitute Teacher Staffing in Tennessee",
    metaTitle: "Substitute Teacher Staffing in Tennessee",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Tennessee districts and charters — the 30-day unlicensed-sub line, TBI/FBI fingerprinting for contractors, and permits handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Tennessee school districts and public charter schools. We recruit, fingerprint, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with the TBI and FBI criminal history check Tennessee requires of school contractors completed before a substitute sets foot on campus, and every leave tracked against the 30-day line for unlicensed subs.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Tennessee classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Tennessee" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "TBI and FBI fingerprint-based criminal history check completed before any student contact, as T.C.A. § 49-5-413(d) requires of school contractors",
      "Consecutive days per leave tracked against the 30-day limit for substitutes without a teaching license (T.C.A. § 49-3-312(a))",
      "License and endorsement verified for any substitute who may stay past day 30, or retired-teacher status with the matching endorsement",
      "Educator license status checked, since a suspended or revoked license bars substitute work, directly or indirectly",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What Tennessee schools need from a substitute partner",
        body: "Tennessee keeps the entry rules for substitutes simple and puts the hard lines in two places: how long an unlicensed sub can cover one teacher's leave, and who has to be fingerprinted before entering a school. A 2025 law moved the first line from 20 to 30 consecutive days. The second reaches staffing agencies directly, because Tennessee's background-check statute applies to anyone who contracts with a school and to the people that contractor sends.\n\nThe daily need is the same as everywhere: day-to-day coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Nashville, Memphis, Knoxville, and Chattanooga, every district and charter network is calling the same cleared substitutes on the same morning, and a sub who is not fingerprinted cannot start at all.",
      },
      {
        heading: "How FocusedEDU staffs Tennessee substitute programs",
        body: "We fingerprint every Tennessee substitute for the TBI and FBI check before a first assignment, which is the contractor's duty under state law, and our credentialing system counts consecutive days per leave so your office knows well before day 30 whether the assignment needs a licensed, endorsed teacher or a retired teacher who held the endorsement. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your schools are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="tn-substitute-requirements">Tennessee substitute teacher and clearance requirements</h2>
<p class="answer-lead">Tennessee does not require a state license for short substitute assignments: under State Board of Education rules, a person without a teacher's license or permit may substitute for a regular teacher on approved leave for the period set in T.C.A. § 49-3-312(a), which a 2025 law raised from 20 to 30 consecutive days. Past that point the substitute must be licensed and endorsed for the assignment, or a retired teacher who held that endorsement. Contractors that place people in schools, staffing agencies included, must have them fingerprinted for a TBI and FBI criminal history check before they have contact with students.</p>
<h3>Unlicensed substitutes and the 30-day line</h3>
<p>The State Board's rule reads: "A person without a teacher's license or permit may serve as a substitute for a regular teacher on approved leave for the length of time set out in T.C.A. § 49-3-312(a)." It continues: "After the approved leave period pursuant to T.C.A. § 49-3-312(a) a person serving as the substitute must be licensed and hold the appropriate endorsement for the assignment or must be a retired teacher and have held the appropriate endorsement" ${cite("Tenn. Comp. R. & Regs. 0520-01-02-.04(5)", TN_RULE_04)}. The length of that period changed in 2025. Public Chapter 296 provides that "Tennessee Code Annotated, Section 49-3-312(a), is amended by deleting the language "twenty (20)" and substituting instead the language "thirty (30)"" ${cite("Tenn. Pub. Acts 2025, ch. 296", "https://publications.tnsosfiles.com/acts/114/pub/pc0296.pdf")}, and the State Board's August 2025 item summarizes the effect: the 2025 acts "increase, from 20 to 30 days, the maximum number of consecutive days a substitute teacher may substitute for a regular teacher on leave without having to possess a teaching license or permit" ${cite("Tenn. State Board of Education, Leave for Teachers rule item, Aug. 15, 2025", "https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/2025-sbe-meetings/august-15%2c-2025-sbe-meeting/8-15-25%20V%20A%20Leave%20for%20Teachers%20Rule%200520-01-02-.04%20Cover.pdf")}. We count consecutive days on every leave and flag day 30 for your HR office in advance.</p>
<h3>Fingerprinting for districts and for contractors</h3>
<p>The same chapter of State Board rules requires that "Local boards of education shall ensure compliance with the background check requirements of T.C.A. §§ 49-5-406 and 49-5-413, for all teachers or for any other positions requiring close proximity to children" ${cite("Tenn. Comp. R. & Regs. 0520-01-02-.31(7)", TN_RULE_04)}. Section 49-5-413(d), added in 2007, requires contractors and their employees who will have contact with students to "submit to a criminal history records check to be conducted by the Tennessee Bureau of Investigation and the Federal Bureau of Investigation prior to permitting the person to have contact with such children or enter school grounds" ${cite("Tenn. Pub. Acts 2007, ch. 587, adding T.C.A. § 49-5-413(d)", "https://publications.tnsosfiles.com/acts/105/pub/pc0587.pdf")}. The 2008 amendment makes the duty the employer's: "It is the duty of the person, corporation or other entity that employs a person described in subdivision (d)(1) to require the applicant to supply a fingerprint sample and submit to a criminal history records check," and a completed check "shall be deemed to have satisfied the requirements for any other school, board of education, or child care program as long as the employee remains in the continuous employment of the same person, corporation, or entity" ${cite("Tenn. Pub. Acts 2008, ch. 1080, amending T.C.A. § 49-5-413(d)", "https://publications.tnsosfiles.com/acts/105/pub/pc1080.pdf")}. FocusedEDU runs that check on every substitute before a first assignment, and because our subs stay in our continuous employment, the check travels with them across the schools we serve.</p>
<h3>Licenses, suspensions, and hard-to-fill vacancies</h3>
<p>A suspended or revoked Tennessee educator license ends substitute eligibility outright: the holder "shall not serve as a school volunteer or be employed, directly or indirectly, as an educator, paraprofessional, aide, substitute teacher, or in any other position in a school during the period of the suspension or revocation" ${cite("Tenn. Comp. R. & Regs. 0520-02-03-.09(9)", TN_RULE_LIC)}. We check license status for every candidate who has held one. For a vacancy a district cannot fill with a licensed teacher, the licensure rules provide that "the Commissioner may grant a temporary permit to teach in the unfilled position to an individual who does not hold an active Tennessee educator license under the conditions set forth in this Rule," and "The recommended individual shall hold a minimum of a bachelor's degree from a regionally or nationally accredited college or university" ${cite("Tenn. Comp. R. & Regs. 0520-02-03-.12", TN_RULE_LIC)}. When a long-term substitute with a degree proves out in a vacancy, we assemble the file your district needs to request that permit.</p>
${whereWeStaff(
  "Tennessee",
  "We staff substitute programs for school districts and public charter schools across Tennessee, with recruiting built around the state's four largest metros and the fast-growing counties around them.",
  "That includes Nashville and Metro Nashville Public Schools; Memphis and Memphis-Shelby County Schools; Knoxville and Knox County Schools; Chattanooga and Hamilton County Schools; Clarksville-Montgomery County; Murfreesboro and Rutherford County; and Franklin and Williamson County. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Ask any substitute partner for its day-to-day fill rate before you sign. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Tennessee", "Tennessee does not require a state license for short substitute assignments, so your first steps are the TBI and FBI fingerprint check we arrange and the hiring district's own requirements. If you hold a teaching license, or retired holding one, you can also cover leaves past 30 days in your endorsement area.")}
${cta("Tennessee")}`,
    faqs: [
      {
        q: "Do substitute teachers in Tennessee need a teaching license?",
        a: "Not for short assignments. State Board rules allow a person without a teacher's license or permit to substitute for a regular teacher on approved leave for the period set in T.C.A. § 49-3-312(a). After that period, the substitute must be licensed and endorsed for the assignment or be a retired teacher who held that endorsement.",
      },
      {
        q: "How many days can an unlicensed substitute cover one teacher in Tennessee?",
        a: "Thirty consecutive days. Public Chapter 296 of 2025 amended T.C.A. § 49-3-312(a) to replace twenty days with thirty, and the State Board describes the change as raising the maximum consecutive days an unlicensed substitute may cover a teacher on leave from 20 to 30.",
      },
      {
        q: "Do staffing-agency substitutes need their own background check in Tennessee?",
        a: "Yes. T.C.A. § 49-5-413(d) requires contractors to have their employees fingerprinted for a TBI and FBI criminal history records check before they have contact with students or enter school grounds. A completed check satisfies the requirement at other schools while the employee stays with the same employer.",
      },
      {
        q: "Can a district fill a vacancy with someone who is not licensed?",
        a: "In limited cases. When a district cannot fill a position with a licensed teacher, the Commissioner may grant a temporary permit to an individual without an active Tennessee educator license; the recommended individual must hold at least a bachelor's degree from an accredited college or university.",
      },
      fillRateFaq("Tennessee"),
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Kentucky"), sibling("Alabama"), sibling("Georgia"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Indiana ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-indiana",
    eyebrow: "Substitute teacher staffing · Indiana",
    h1: "Substitute Teacher Staffing in Indiana",
    metaTitle: "Substitute Teacher Staffing in Indiana",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Indiana school corporations and charters — IDOE substitute permits, expanded criminal history and child protection index checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Indiana school corporations, charter schools, and nonpublic schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the Indiana Department of Education Substitute Permit and cleared through an expanded criminal history check and the Indiana child protection index.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in an Indiana classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Indiana" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "IDOE Substitute Permit (or teaching license) verified in LVIS, with its three-year expiration tracked",
      "High school diploma or equivalency and age 18 confirmed, plus your corporation's own higher standard where it has one",
      "Permit scope checked: valid for the requesting employer unless a reciprocity agreement applies",
      "Expanded criminal history check under IC 20-26-5-10, with fingerprints where required",
      "Indiana expanded child protection index check completed within the statutory window",
      "Consecutive days per position tracked for licensed subs, who move to the teacher pay range after 15 (IC 20-28-9-7)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.porterLinen,
    sections: [
      {
        heading: "What Indiana schools need from a substitute partner",
        body: "Indiana sets a firm floor for substitutes and lets each school corporation build on it. No one may substitute without a credential from the Department of Education, and for most subs that is the Substitute Permit: a high school diploma, age 18, and an application filed after a school or substitute agency has hired the candidate. Above that floor, each corporation sets its own screening and qualifications, which means a substitute who is cleared in Carmel may still be missing something in Fort Wayne.\n\nThe operational needs are the ones every district has: day-to-day coverage confirmed before first bell, long-term substitutes for leaves and vacancies, building subs, and special education substitutes and substitute paraprofessionals who keep IEP services running. Around Indianapolis, the Hamilton County suburbs, and Northwest Indiana, corporations and charters compete for the same permitted, cleared people every morning.",
      },
      {
        heading: "How FocusedEDU staffs Indiana substitute programs",
        body: "IDOE's own instructions name substitute agencies as an employer that can start the permit process, so we hire, sponsor, and file for every Indiana substitute ourselves, then verify each one against your corporation's posted standard. Our credentialing system tracks the three-year permit, the expanded criminal history check, and the child protection index check, and it records where each permit is valid. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the pool we recruit around your schools is never presented to the corporation next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="in-substitute-requirements">Indiana substitute teacher and clearance requirements</h2>
<p class="answer-lead">Every Indiana substitute needs a credential from the Indiana Department of Education. For most substitutes that is the Substitute Permit, which requires a high school diploma or equivalency and age 18, is valid for three years, and is applied for in LVIS after a school or substitute agency has hired the candidate. Schools must run an expanded criminal history check and an Indiana child protection index check, and their policies must cover employees of contractors who are likely to have direct, ongoing contact with children.</p>
<h3>The Substitute Permit</h3>
<p>Indiana Code is direct: "An individual may not serve as a substitute teacher without a license issued by the department" ${cite("IC 20-28-5-2", IN_CODE)}. IDOE's permit page sets the minimum: "Individuals applying for Substitute Permits must: Hold a high school diploma or high school equivalency certificate; Be 18 years of age or older;" and adds that "Each school employer will determine its own screening, employment qualifications (if greater than the minimum standards noted below), and performance standards for its substitute teachers." On term and scope, "Substitute Permits are valid for three years," "The Substitute Permit is valid only for the requesting school employer unless the school employer has a reciprocity agreement for use of substitute teachers with another school employer," and "A Substitute Permit is not renewable. Once it expires, an applicant must apply for a new original Substitute Permit" ${cite("IDOE, Substitute Permits", IN_SUB)}. The application instructions settle the order of operations: "You must be hired by a school district or substitute agency BEFORE you complete this application" ${cite("IDOE, Substitute Permit application instructions", "https://www.in.gov/doe/files/Substitute-Permit-done.pdf")}. That is the step FocusedEDU takes on for every Indiana candidate.</p>
<h3>Expanded criminal history and child protection index checks</h3>
<p>Each school corporation, charter school, and nonpublic school must adopt a criminal history policy that covers its own applicants and individuals who "are employed by an entity that seeks to enter into a contract to provide services to the school corporation, charter school, or nonpublic school," when they are likely to have direct, ongoing contact with children. The school must "conduct an expanded criminal history check concerning each applicant for employment who is likely to have direct, ongoing contact with children within the scope of the individual's employment," and "may require the individual to provide a set of fingerprints and pay any fees required for the expanded criminal history check." The statute adds: "An Indiana expanded child protection index check must be completed before or not later than sixty (60) days after the start date of the applicant's employment" ${cite("IC 20-26-5-10", IN_CODE)}. Contractors carry a continuing duty as well: if a contractor learns that an employee working at a school has been convicted of a listed offense, "the entity shall immediately notify the school corporation, charter school, or state accredited nonpublic school of the employee's conviction" ${cite("IC 20-26-5-11.2", IN_CODE)}. FocusedEDU completes both checks before a substitute is presented and keeps that notification duty in our own process.</p>
<h3>Long assignments and emergency permits</h3>
<p>Indiana sets no consecutive-day cap on the Substitute Permit itself, but it does set a pay line for licensed teachers working as substitutes: a professional or provisional license holder who "serves as a substitute teacher in the same teaching position for more than fifteen (15) consecutive school days" must be paid on the corporation's regular teacher pay range ${cite("IC 20-28-9-7", IN_CODE)}. We track days per position so that line never surprises your business office. For hard-to-staff teaching positions, "An Emergency Permit is issued at the request of a school district in a content area for which the district is experiencing difficulty staffing the assignment with a properly licensed educator," and "The applicant must possess the minimum of a Bachelor's Degree from a regionally accredited university in order to be eligible for the EP" ${cite("IDOE, Emergency Permits", "https://www.in.gov/doe/educators/educator-licensing/emergency-permits")}.</p>
${whereWeStaff(
  "Indiana",
  "We staff substitute programs for school corporations, charter schools, and nonpublic schools across Indiana, with recruiting centered on Indianapolis and the state's other large metros.",
  "That includes Indianapolis Public Schools and the township corporations around it, including MSD of Wayne Township and Perry Township; the Hamilton County suburbs, including Hamilton Southeastern and Carmel Clay; Fort Wayne Community Schools; the Evansville Vanderburgh School Corporation; South Bend; and Northwest Indiana, including Gary and Hammond. Because we work with one client per region, the first corporation or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The number to compare substitute partners on is day-to-day fill rate. Ours comes from an existing client, Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has run a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Indiana", "You will need an IDOE Substitute Permit (a high school diploma or equivalency and age 18 are the state minimum), and we hire you first so you can apply in LVIS, as IDOE requires. We also complete the expanded criminal history and child protection index checks with you before your first assignment.")}
${cta("Indiana")}`,
    faqs: [
      {
        q: "What does it take to substitute teach in Indiana?",
        a: "A credential from the Indiana Department of Education, since state law bars anyone from substituting without one. For most substitutes that is the Substitute Permit, which requires a high school diploma or equivalency and age 18; each school employer may set higher qualifications of its own.",
      },
      {
        q: "Can a staffing agency sponsor an Indiana Substitute Permit?",
        a: "Yes. IDOE's application instructions say applicants must be hired by a school district or substitute agency before completing the permit application in LVIS. FocusedEDU hires each candidate first, then files the application.",
      },
      {
        q: "How long is an Indiana Substitute Permit valid, and where?",
        a: "Three years from the date the application fee is paid in LVIS. It is valid only for the requesting school employer unless that employer has a reciprocity agreement with another, and it is not renewable: when it expires, the substitute applies for a new original permit.",
      },
      {
        q: "Do agency substitutes need their own background check in Indiana?",
        a: "Yes. IC 20-26-5-10 requires each school's criminal history policy to cover employees of entities that contract to provide services, when they are likely to have direct, ongoing contact with children, and requires an expanded criminal history check and an Indiana expanded child protection index check.",
      },
      fillRateFaq("Indiana", "school corporation"),
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost: if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [HUB, sibling("Illinois"), sibling("Ohio"), sibling("Kentucky"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Missouri ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-missouri",
    eyebrow: "Substitute teacher staffing · Missouri",
    h1: "Substitute Teacher Staffing in Missouri",
    metaTitle: "Substitute Teacher Staffing in Missouri",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Missouri districts and charters — DESE substitute certificates, Highway Patrol/FBI fingerprints, and Family Care Safety Registry checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Missouri school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a Missouri substitute certificate or teaching certificate and cleared through the Highway Patrol and FBI fingerprint check before a first assignment.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher at the front of a Missouri classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Missouri" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Missouri substitute certificate (36 college hours, or 20-hour approved training plus a diploma) or Missouri teaching certificate verified",
      "Highway Patrol and FBI fingerprint clearance on file before a certificate issues and before any pupil contact (RSMo 168.133)",
      "Family Care Safety Registry check completed",
      "Certificate's four-year term and the five-days-or-40-hours annual use rule tracked",
      "Age checked against the grades 9-12 rule for certificate holders under 20",
      "Renewal fingerprints and one hour of annual training tracked (5 CSR 20-400.220)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.weathington,
    sections: [
      {
        heading: "What Missouri schools need from a substitute partner",
        body: "Missouri opened its substitute certificate to more candidates than most states: 36 college hours qualify, and so does a high school diploma plus the state's 20-hour substitute training. The certificate runs four years, but it lapses in any year the holder does not substitute at least five days or 40 hours, and holders under 20 cannot teach grades 9 through 12. A district that does not track those details discovers them when a sub's certificate turns out to have expired in January.\n\nThe day-to-day need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Kansas City, St. Louis, and St. Charles County, districts on both sides of every boundary are calling the same certified, cleared subs on the same morning.",
      },
      {
        heading: "How FocusedEDU staffs Missouri substitute programs",
        body: "Every Missouri substitute we place arrives with a valid certificate, a fingerprint clearance run through the Highway Patrol and the FBI, and a Family Care Safety Registry check. Our credentialing system tracks the four-year term, the annual minimum-use rule that keeps a certificate active, the 12-month fingerprint window, and the renewal training, so nothing lapses quietly. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they choose and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. Missouri law also lets retired teachers substitute through a third-party employer, which opens a pool of experienced educators to agency placement. We work with one client per region, and every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="mo-substitute-requirements">Missouri substitute teacher and clearance requirements</h2>
<p class="answer-lead">Missouri substitutes hold a substitute certificate granted by the State Board of Education, which requires either 36 semester hours of college credit or a high school diploma plus the state's 20-hour substitute training, or a valid Missouri teaching certificate. The substitute certificate is valid for four years but expires in any calendar year the holder does not substitute at least five days or 40 hours. No certificate is issued until the applicant clears a fingerprint background check run through the Missouri State Highway Patrol and the FBI.</p>
<h3>The substitute certificate</h3>
<p>Missouri's statute sets two routes: "The state board may grant a certificate under this section to any individual who has completed: (1) At least thirty-six semester hours at an accredited institution of higher education; or" the second, "The twenty-hour online training program required in this section and who possesses a high school diploma or the equivalent thereof." It also sets the term: "A certificate granted under this section shall be valid for four years. A certificate granted under this section shall expire at the end of any calendar year in which the individual fails to substitute teach for at least five days or forty hours of in-seat instruction." And it limits young substitutes: "No individual to whom the state board grants a certificate under this section and who is under twenty years of age shall be a substitute teacher in grades nine to twelve" ${cite("RSMo § 168.036", MO_168_036)}. Certified teachers do not need a second credential: "Individuals with valid Missouri teaching certificates who wish to substitute teach in a school district are no longer required by DESE to apply for a substitute certificate" ${cite("DESE, Substitute Teachers", "https://dese.mo.gov/educator-quality/certification/substitute-teachers")}.</p>
<h3>Retired teachers and district-sponsored candidates</h3>
<p>The statute expressly allows agency placement of retirees: "any person retired and currently receiving a retirement allowance under sections 169.010 to 169.141, other than for disability, who is employed by a third party or is performing work as an independent contractor may be employed to substitute teach on a part-time or temporary substitute basis" by a covered employer ${cite("RSMo § 168.036", MO_168_036)}. For a candidate outside both routes, "The state board may grant a certificate under this section to any highly qualified individual with expertise in a technical or business field or with experience in the Armed Forces of the United States," provided the superintendent of the district sponsors the individual and the school board votes to approve them.</p>
<h3>Fingerprints, the Family Care Safety Registry, and renewal</h3>
<p>DESE's checklist states that "A criminal fingerprint/background clearance must be obtained before a certificate can be issued" ${cite("DESE, Checklist: Substitute Teachers", "https://dese.mo.gov/educator-quality/certification/checklist-substitute-teachers")}. Under RSMo 168.133, "The school district or charter school shall ensure that a criminal background check is conducted on any person employed after January 1, 2005, authorized to have contact with pupils and prior to the individual having contact with any pupil," and "The fingerprints shall be used by the highway patrol to search the criminal history repository and shall be forwarded to the Federal Bureau of Investigation for searching the federal criminal history files." The licensing process includes a check of the family care safety registry, and a check "shall be valid for at least a period of one year and transferrable from one school district to another district" ${cite("RSMo § 168.133", MO_168_133)}. Renewal requires "A new fingerprint background check clearance every four (4) years or when employed by a new school district; and" "One (1) hour of professional development and/or district training annually" ${cite("5 CSR 20-400.220", "https://s1.sos.mo.gov/cmsimages/adrules/csr/current/5csr/5c20-400.pdf")}. We keep every one of those dates in the substitute's file.</p>
${whereWeStaff(
  "Missouri",
  "We staff substitute programs for school districts and charter schools across Missouri, with recruiting built around the Kansas City and St. Louis metros and the state's other large districts.",
  "That includes Kansas City Public Schools, North Kansas City, Lee's Summit R-7, and Independence; St. Louis Public Schools, Rockwood, Hazelwood, and Parkway; Fort Zumwalt and Francis Howell in St. Charles County; Springfield Public Schools; and Columbia Public Schools. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Day-to-day fill rate is the measure that decides whether a substitute program works. Our reference point is an existing client, Odyssey Public Charter School in Wilmington, Delaware: since FocusedEDU took on its substitute coverage in 2021, day-to-day fill has run at 95%, a 40%+ improvement over the school's previous provider.")}
${forSubs("Missouri", "You will need a Missouri substitute certificate — 36 college hours, or a high school diploma plus the state's 20-hour substitute training — or a Missouri teaching certificate, and a fingerprint clearance through the Highway Patrol and FBI. Retired teachers drawing a Missouri retirement allowance can substitute through us as a third-party employer.")}
${cta("Missouri")}`,
    faqs: [
      {
        q: "What are the requirements for a Missouri substitute certificate?",
        a: "Either at least 36 semester hours at an accredited college, or the state's 20-hour substitute training plus a high school diploma or equivalent, under RSMo 168.036. A fingerprint background clearance must be on file before DESE issues the certificate, and certified Missouri teachers do not need a separate substitute certificate.",
      },
      {
        q: "How long is a Missouri substitute certificate valid?",
        a: "Four years, but it expires at the end of any calendar year in which the holder does not substitute teach at least five days or 40 hours of in-seat instruction. Renewal requires a new fingerprint clearance every four years or on joining a new district, and one hour of training a year.",
      },
      {
        q: "Can substitutes under 20 teach high school in Missouri?",
        a: "No. RSMo 168.036 bars substitute certificate holders under twenty years of age from substitute teaching in grades nine to twelve. We match younger substitutes to elementary and middle school assignments.",
      },
      {
        q: "Can retired Missouri teachers substitute through an agency?",
        a: "Yes. RSMo 168.036 allows a retiree receiving a retirement allowance under sections 169.010 to 169.141, other than for disability, who is employed by a third party to substitute teach on a part-time or temporary basis.",
      },
      {
        q: "Does a Missouri background check transfer between districts?",
        a: "Yes. Under RSMo 168.133, a criminal background check and fingerprint collection is valid for at least one year and transferable from one district to another, and a substitute may designate up to five districts to receive the results.",
      },
      fillRateFaq("Missouri"),
    ],
    related: [HUB, sibling("Kansas"), sibling("Illinois"), sibling("Iowa"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Minnesota ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-minnesota",
    eyebrow: "Substitute teacher staffing · Minnesota",
    h1: "Substitute Teacher Staffing in Minnesota",
    metaTitle: "Substitute Teacher Staffing in Minnesota",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Minnesota districts and charters — PELSB short-call licenses, the 20-day rule, emergency short-call licenses, and BCA/FBI checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Minnesota school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a PELSB short-call substitute license or teaching license and fingerprinted for the state and national background study, with every assignment tracked against the 20-consecutive-day short-call limit.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher working with students in a Minnesota classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Minnesota" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "PELSB short-call substitute license (or teaching license) verified, with its June 30 expiration tracked",
      "Bachelor's degree on official transcript, or completed student teaching in a state-approved program",
      "State (BCA) and national fingerprint background study completed at first licensure (Minn. Stat. § 122A.18)",
      "BCA criminal history check documented for your hiring authority (Minn. Stat. § 123B.03)",
      "Consecutive school days per assignment tracked against the 20-day short-call limit",
      "Long-term substitute or licensed teacher lined up before day 20, or a completed license application on file",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.murphyRichardson,
    sections: [
      {
        heading: "What Minnesota schools need from a substitute partner",
        body: "Minnesota draws a sharp line at 20 school days. A short-call substitute can cover one teacher or one vacancy for no more than 20 consecutive school days; after that the assignment needs a long-term substitute or a teacher licensed for it, unless the sub has already filed a complete license application for the assignment. A district that loses track of the count either breaks the rule or scrambles to replace a sub the students know.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In the Twin Cities, where Minneapolis, Saint Paul, Anoka-Hennepin, Osseo, and Rosemount-Apple Valley-Eagan draw on overlapping commuting zones, licensed short-call subs have their pick of assignments every morning.",
      },
      {
        heading: "How FocusedEDU staffs Minnesota substitute programs",
        body: "Every Minnesota substitute we place holds a PELSB short-call license or a teaching license, backed by the fingerprint background study PELSB runs at first licensure. Our credentialing system counts consecutive school days per assignment, flags day 15 so your office has time to plan a long-term substitute, and records which subs have a license application pending that lets them stay. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the pool we recruit around your schools is not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="mn-substitute-requirements">Minnesota substitute teacher and clearance requirements</h2>
<p class="answer-lead">Minnesota's Professional Educator Licensing and Standards Board issues a short-call substitute license to candidates with at least a bachelor's degree, or teacher candidates who have completed student teaching. A short-call substitute may cover the same teacher of record or a vacancy for no more than 20 consecutive school days. First-time license applicants are fingerprinted for a state and national background study, and every school hire gets a Bureau of Criminal Apprehension check.</p>
<h3>The short-call substitute license</h3>
<p>PELSB's rule requires an applicant to "hold the minimum of a bachelor's degree from a college or university located in the United States, as verified by a college transcript," or to "be enrolled in a state-approved teacher preparation program and have successfully completed student teaching." It sets the term: "A short-call substitute license is valid for up to three years and expires on June 30 of the expiration year," and "An applicant must reapply for a short-call substitute license upon its expiration" ${cite("Minn. R. 8710.0325, Short-Call Substitute License", MN_0325)}. We track each sub's June 30 date and start the reapplication before it.</p>
<h3>The 20-day limit and long-term substitutes</h3>
<p>The substitute teaching rule sets the line: "An individual may serve as a short-call substitute for the same teacher of record or fill a vacancy for no more than 20 consecutive school days." Beyond it, "When a teacher of record is absent from an assignment for more than 20 consecutive school days or a vacancy remains unfilled for more than 20 consecutive school days, the assignment must be filled with a long-term substitute or a teacher licensed for the assignment." A short-call sub "may continue replacing the same teacher of record for more than 20 consecutive school days when the individual has submitted a completed application for a license for the assignment" ${cite("Minn. R. 8710.0327, Substitute Teaching", MN_0327)}. Our system counts every assignment and tells your office which subs can stay and which need a long-term replacement well before day 20.</p>
<h3>The short-call emergency substitute license</h3>
<p>For districts short of licensed subs, "A school district or charter school and applicant may jointly request the Professional Educator Licensing and Standards Board approve an application for a short-call emergency substitute teaching license." One qualifying route is a candidate who "holds a minimum of an associate's degree or equivalent and has or will receive substitute training from the school district or charter school," and the assignment limit is tighter: "A district may employ a short-call emergency substitute teacher for no more than ten consecutive school days in a single assignment" ${cite("Minn. Stat. § 122A.441", MN_441)}.</p>
<h3>Background studies and BCA checks</h3>
<p>PELSB "must initiate criminal history background studies of all first-time applicants for educator and administrator licenses under their jurisdiction," which requires "an executed criminal history consent form, including fingerprints;" and the study "must also include a review of the national criminal records repository" ${cite("Minn. Stat. § 122A.18, subd. 8", "https://www.revisor.mn.gov/statutes/cite/122A.18")}. Separately, "A school hiring authority shall request a criminal history background check from the superintendent of the Bureau of Criminal Apprehension on all individuals who are offered employment in a school," and for independent contractors the hiring authority "may, at its discretion," request one ${cite("Minn. Stat. § 123B.03", "https://www.revisor.mn.gov/statutes/cite/123B.03")}. FocusedEDU documents both for every substitute, so your district has the record whether or not its policy requires a contractor check.</p>
${whereWeStaff(
  "Minnesota",
  "We staff substitute programs for school districts and charter schools across Minnesota, with recruiting built around the Twin Cities and the state's regional centers.",
  "That includes Minneapolis Public Schools, Saint Paul Public Schools, Anoka-Hennepin, Osseo Area Schools, and Rosemount-Apple Valley-Eagan in the metro; Rochester Public Schools; Duluth Public Schools; St. Cloud Area Schools; and Mankato Area Public Schools. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner earns its contract on day-to-day fill rate. Our reference point is Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school that partnered with FocusedEDU in 2021: our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate there, a 40%+ improvement over the school's previous provider.")}
${forSubs("Minnesota", "You will need a PELSB short-call substitute license (a bachelor's degree, or completed student teaching in a state-approved program, qualifies you) and the fingerprint background study that comes with first licensure. We tell you exactly what to submit and track your June 30 renewal date for you.")}
${cta("Minnesota")}`,
    faqs: [
      {
        q: "Who can get a short-call substitute license in Minnesota?",
        a: "A candidate with at least a bachelor's degree from a U.S. college or university, verified by transcript, or a candidate enrolled in a state-approved teacher preparation program who has completed student teaching. The license is valid for up to three years, expires June 30, and must be reapplied for on expiration.",
      },
      {
        q: "How many days can a short-call substitute stay in one assignment?",
        a: "No more than 20 consecutive school days for the same teacher of record or vacancy. After that, the assignment must be filled with a long-term substitute or a licensed teacher, unless the short-call sub has submitted a completed license application for the assignment.",
      },
      {
        q: "What is a short-call emergency substitute license?",
        a: "A license a district or charter school requests jointly with a candidate under Minn. Stat. § 122A.441. One route requires an associate's degree or equivalent plus substitute training from the district, and an emergency short-call substitute may serve no more than ten consecutive school days in a single assignment.",
      },
      {
        q: "What background checks do Minnesota substitutes go through?",
        a: "PELSB runs a criminal history background study, including fingerprints and a national records review, on every first-time license applicant. School hiring authorities must also request a Bureau of Criminal Apprehension check on everyone offered employment in a school.",
      },
      fillRateFaq("Minnesota"),
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Wisconsin"), sibling("Iowa"), sibling("Michigan"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── South Carolina ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-south-carolina",
    eyebrow: "Substitute teacher staffing · South Carolina",
    h1: "Substitute Teacher Staffing in South Carolina",
    metaTitle: "Substitute Teacher Staffing in South Carolina",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for South Carolina districts and charters — SLED record searches, National Sex Offender Registry checks, and district substitute rules handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for South Carolina school districts and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each cleared through a SLED criminal record search and a National Sex Offender Registry check and verified against the hiring district's own substitute requirements before a first assignment.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher supporting students in a South Carolina school",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "South Carolina" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "SLED criminal record search completed and screened against the violent-crime hiring bar (S.C. Code § 59-19-117)",
      "National Sex Offender Registry check completed before any assignment",
      "Your district's own substitute qualifications, training, and orientation verified",
      "Retired Educator certificate verified for retired South Carolina teachers",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.foedisch,
    sections: [
      {
        heading: "What South Carolina schools need from a substitute partner",
        body: "In South Carolina, the substitute rules a district works under come largely from its own board policy, while state law sets the screening every school hire must clear: a SLED criminal record search, a bar on hiring anyone convicted of a violent crime, and a National Sex Offender Registry check. That leaves each district with its own substitute qualifications to enforce and a screening file to keep for every person who walks into a classroom.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Greenville, Columbia, Charleston, and the Rock Hill–Fort Mill corridor, fast-growing districts compete for the same small pool of reliable subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs South Carolina substitute programs",
        body: "We run the SLED record search and the National Sex Offender Registry check on every South Carolina substitute before presenting them, and we verify each one against your district's own written substitute requirements, so the screening file arrives complete. Our credentialing system tracks each requirement your district sets and flags anything approaching expiration. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your schools are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="sc-substitute-requirements">South Carolina substitute teacher and clearance requirements</h2>
<p class="answer-lead">South Carolina law requires every person a school district hires to serve in any capacity in a public school to undergo a name-based criminal record search through the State Law Enforcement Division, under a district policy that must bar hiring anyone convicted of a violent crime, and a National Sex Offender Registry check. SLED waives its fee when the search is run on a substitute teacher for a school district. Retired South Carolina educators can hold a lifetime Retired Educator certificate for substituting.</p>
<h3>SLED criminal record searches</h3>
<p>The screening statute reads: "An individual hired by a local school district board of trustees to serve in any capacity in a public school in this State shall undergo a name-based South Carolina criminal record search conducted by the local school district using records maintained by the State Law Enforcement Division," and each district's screening policy "must include, at a minimum, a prohibition of hiring individuals convicted of violent crimes as defined in Section 16-1-60" ${cite("S.C. Code § 59-19-117", SC_59_19)}. The record-search statute makes substitutes cheaper to screen: "The fee allowed in subsection (A) is waived if the criminal record search is conducted on a substitute teacher on behalf of a school district" ${cite("S.C. Code § 23-3-115", "https://www.scstatehouse.gov/code/t23c003.php")}. FocusedEDU completes the search on every substitute and screens the result against the violent-crime bar before a candidate is presented.</p>
<h3>National Sex Offender Registry checks</h3>
<p>The same statute adds a registry check for every school employee: "Each school district of this State shall perform a National Sex Offender Registry check on all district employees hired to serve in any capacity in a public school," and the district policy "must include, at a minimum, a prohibition of hiring individuals required to register as sex offenders pursuant to Section 23-3-430" ${cite("S.C. Code § 59-19-117", SC_59_19)}. We run the registry check alongside the SLED search, so both results are in the file your HR office keeps.</p>
<h3>The Retired Educator certificate</h3>
<p>For experienced subs, the Department of Education notes that "In 2018, the South Carolina General Assembly authorized the Retired Educator certificate to allow retired South Carolina educators to maintain certification for the purpose of substituting without having to meet renewal requirements," and that "The Educator Assistance Act of 2025 amends the Retired Educator certificate to become a lifetime credential" ${cite("SCDE, Retired Educator Certificate", "https://ed.sc.gov/educators/certification/retired-educator-certificate/")}. Retired teachers are among the most reliable long-term substitutes we recruit, and we verify the certificate for every one.</p>
${whereWeStaff(
  "South Carolina",
  "We staff substitute programs for school districts and charter schools across South Carolina, from the Upstate to the Midlands and the coast.",
  "That includes Greenville County Schools, the state's largest district; Spartanburg County; Columbia's Richland One, Richland Two, Lexington-Richland 5, and Lexington One; Charleston County, Berkeley County, and Dorchester District 2; Horry County Schools around Myrtle Beach; Rock Hill and Fort Mill; and Aiken County. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Judge a substitute partner on how many absences it actually covers. Our reference point is an existing client, Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has covered 95% of day-to-day absences since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("South Carolina", "Every South Carolina substitute clears a SLED criminal record search and a National Sex Offender Registry check, and each district sets its own substitute qualifications, so we match you to the districts where you already qualify. Retired South Carolina educators can substitute on the lifetime Retired Educator certificate.")}
${cta("South Carolina")}`,
    faqs: [
      {
        q: "What background checks do South Carolina substitutes need?",
        a: "A name-based South Carolina criminal record search through SLED and a National Sex Offender Registry check. S.C. Code § 59-19-117 requires both for anyone hired to serve in any capacity in a public school, and district policy must bar hiring people convicted of violent crimes or required to register as sex offenders.",
      },
      {
        q: "Is there a fee for a SLED check on a substitute teacher?",
        a: "No. S.C. Code § 23-3-115 waives SLED's criminal record search fee when the search is conducted on a substitute teacher on behalf of a school district.",
      },
      {
        q: "Can retired South Carolina teachers keep substituting?",
        a: "Yes. The Retired Educator certificate, authorized in 2018, lets retired South Carolina educators maintain certification for substituting without meeting renewal requirements, and the Educator Assistance Act of 2025 made it a lifetime credential.",
      },
      fillRateFaq("South Carolina"),
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost: if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [HUB, sibling("North Carolina"), sibling("Georgia"), sibling("Tennessee"), SPED_HUB, PARA_HUB, K12_HUB],
  },
];
