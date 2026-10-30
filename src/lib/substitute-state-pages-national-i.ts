/**
 * National substitute-staffing state pages, third wave, file 3 of 3:
 * Rhode Island, West Virginia, Mississippi, Hawaii, Alaska. Same model and
 * rules as substitute-state-pages-national-a.ts and -g.ts: approved FocusedEDU
 * facts only, the 95% fill rate attributed to Odyssey in Wilmington, Delaware,
 * no clients, placements, or results claimed in these states, and every state
 * rule quoted from a primary source fetched and string-checked on 2026-10-30.
 *
 * Rhode Island carries a dated "current openings" line: the live job board
 * listed a K-12 posting in Barrington on 2026-10-30. Never add one for a state
 * without a live K-12 posting.
 *
 * Mississippi's statutes are quoted from the Mississippi Department of
 * Education's own reproduction (its Quick Reference to School Related
 * Statutes), because the Legislature does not publish the codified code.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff, openings } from "./substitute-state-pages-national-a";
import {
  TESTIMONIALS,
  fillRateFaq,
  sibling,
  SPED_HUB,
  PARA_HUB,
  K12_HUB,
  RELATED_HUB,
} from "./substitute-state-pages-national-d";
import { NATIONAL_WAVE3_UPDATED, regionFaq } from "./substitute-state-pages-national-g";

const RI_CERT = "https://rules.sos.ri.gov/regulations/Part/200-20-20-1";
const RI_18_1 = "https://webserver.rilegislature.gov/Statutes/TITLE16/16-2/16-2-18.1.htm";
const WV_PERMIT = "https://wvde.us/certifications/substitute-teacher-permit";
const WV_2A = "https://wvde.us/certifications/applications/form-2a";
const WV_2S = "https://wvde.us/certifications/applications/form-2s";
const WV_2_3 = "https://code.wvlegislature.gov/18A-2-3/";
const WV_3_10 = "https://code.wvlegislature.gov/18A-3-10/";
const WV_15C = "https://code.wvlegislature.gov/18-5-15c/";
const MS_STAT = "https://www.mdek12.org/sites/default/files/quick-reference-guide-to-school-related-statutes-june_2024.pdf";
const MS_LIC =
  "https://www.mdek12.org/sites/default/files/Offices/MDE/OA/OTL/Teacher%20Center/guidelines_for_mississippi_educator_licensure_k-12_august-2024.pdf";
const HI_SUB = "https://hawaiipublicschools.org/jobs/substitute-teachers/";
const HI_ABOUT = "https://hawaiipublicschools.org/about/";
const HI_601_5 = "https://data.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/HRS0302A/HRS_0302A-0601_0005.htm";
const HI_846 = "https://data.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0846/HRS_0846-0002_0007.htm";
const HI_302D = "https://data.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/HRS0302D/HRS_0302D-0033.htm";
const AK_18_021 = "https://www.akleg.gov/basis/aac.asp?media=print&secStart=4.18.021&secEnd=4.18.021";
const AK_14_20 = "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=14.20.020&secEnd=14.20.020";
const AK_12_380 = "https://www.akleg.gov/basis/aac.asp?media=print&secStart=4.12.380&secEnd=4.12.380";
const AK_12_401 = "https://www.akleg.gov/basis/aac.asp?media=print&secStart=4.12.401&secEnd=4.12.401";
const AK_DIST = "https://education.alaska.gov/teachercertification/certification/district-sponsored-certificates";
const AK_MISC = "https://education.alaska.gov/teachercertification/certification/miscellaneous-certificates-and-processes";

export const substituteStatePagesNationalI: ServicePage[] = [
  // ───────────────────────────── Rhode Island ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-rhode-island",
    eyebrow: "Substitute teacher staffing · Rhode Island",
    h1: "Substitute Teacher Staffing in Rhode Island",
    metaTitle: "Substitute Teacher Staffing in Rhode Island",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Rhode Island districts and charters — RIDE's day-to-day substitute standard, the 45-day certificate line, and fingerprint checks for third-party staff handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Rhode Island school districts, charter schools, and private schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each meeting RIDE's day-to-day substitute standard and cleared through the national and state fingerprint check Rhode Island requires of staff hired by a school's contractors.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Rhode Island classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Rhode Island" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Bachelor's or associate's degree, or two years of college on track to a four-year degree, verified for every day-to-day substitute",
      "Consecutive days per assignment tracked, with a certified sub routed to anything that may pass 45 days",
      "Rhode Island certificate matched to the assignment for long-term substitutes",
      "Registered Nurse license verified for school nurse teacher substitutes",
      "National and state fingerprint-based criminal background check initiated before employment (R.I. Gen. Laws § 16-2-18.1)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.murphyRichardson,
    sections: [
      {
        heading: "What Rhode Island schools need from a substitute partner",
        body: "Rhode Island sets a statewide standard for day-to-day substitutes in RIDE's certification regulations: a bachelor's or associate's degree, or two years of college on track to a four-year degree. The line between a day-to-day and a long-term substitute is 45 days in the same assignment, and past it the substitute needs a Rhode Island certificate for the assignment. The state's background-check statute is written to reach staffing agencies, covering people hired by a third party that has contracted with the school to provide services.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Providence, Warwick, Cranston, Pawtucket, East Providence, Woonsocket, and Newport, districts and charters sit close enough together that the same substitutes are fielding every school's calls.",
      },
      {
        heading: "How FocusedEDU staffs Rhode Island substitute programs",
        body: "We verify every Rhode Island substitute's degree or college credits against RIDE's day-to-day standard and complete the national and state fingerprint check before a first assignment, not within the week after hire the statute allows. Our credentialing system counts days per assignment and routes certified subs to assignments likely to pass 45 days, and for school nurse teacher coverage we send only Registered Nurses. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ri-substitute-requirements">Rhode Island substitute teacher and clearance requirements</h2>
<p class="answer-lead">Under RIDE's certification regulations, a day-to-day substitute is someone employed temporarily for fewer than 45 days in the same assignment, and must hold a bachelor's degree, an associate's degree, or at least two years of college on track to a four-year degree. A substitute employed for more than 45 consecutive days in the same assignment must hold an appropriate Rhode Island certificate, and substitutes for school nurse teachers must be Registered Nurses. State law requires a national and state fingerprint-based criminal background check, initiated before or within one week of employment, and it covers people hired by a third party that has contracted with the school to provide services.</p>
<h3>Day-to-day and long-term substitutes</h3>
<p>RIDE's regulation defines a day-to-day substitute teacher as "An individual who is employed, on a temporary basis, for fewer than forty-five (45) days in the same assignment," and requires one of three credentials: "A bachelor's degree or higher from a regionally accredited college or university; or" "An associate's degree from a regionally accredited college or university; or" "A minimum of two (2) years college completion on track to a four (4) year degree." It adds that "Substitutes for School Nurse Teacher must hold a license as a Registered Nurse." For long assignments, "An individual who is employed, on a temporary basis, for more than forty-five (45) consecutive days in the same assignment must hold an appropriate Rhode Island certificate for the assignment." When a district cannot find a certified candidate for a position, "The Emergency Route Preliminary Certificate is issued at the request of an employing agency when the agency documents that it has not been able to find a candidate who is certified and qualified for a position that requires certification," and "The Emergency Route Preliminary Certificate is valid for one (1) year" ${cite("200-RICR-20-20-1", RI_CERT)}. We count days on every assignment and route certified subs to anything that may run past 45.</p>
<h3>Fingerprint checks, third-party staff included</h3>
<p>Rhode Island's criminal records statute requires that covered staff "shall undergo a national and state criminal background check to be initiated prior to, or within one week of, employment after receiving a conditional offer of employment," and the applicant applies "for a national and state criminal records check. Fingerprinting shall be required." The statute names contract and agency staff among those covered: "contractual employees of the private school or public school department, and those individuals, who may have direct or unmonitored contact with children or students, who are hired by a third party who or that has contracted with the private school or public school department to provide services" ${cite("R.I. Gen. Laws § 16-2-18.1", RI_18_1)}. FocusedEDU completes the fingerprint check on every substitute before a first assignment.</p>
${whereWeStaff(
  "Rhode Island",
  "We staff substitute programs for school districts, charter schools, and private schools across Rhode Island, from Providence to Newport.",
  "That includes the Providence Public School District, Warwick Public Schools, Cranston Public Schools, the Pawtucket School Department, the East Providence School District, the Woonsocket Education Department, and Newport Public Schools. Because we work with one client per region, the first district or charter network to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("A degree standard tells you who qualifies; a fill rate tells you whether classrooms are covered. Our reference point is an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Rhode Island", "A bachelor's or associate's degree, or two years of college on track to a four-year degree, qualifies you for day-to-day substitute work in Rhode Island; with a Rhode Island certificate you can also take assignments past 45 days. Every substitute completes a national and state fingerprint check, which we arrange.")}
${openings("Rhode Island", "Barrington", "October 30, 2026")}
${cta("Rhode Island")}`,
    faqs: [
      {
        q: "What are the requirements to be a day-to-day substitute in Rhode Island?",
        a: "Under 200-RICR-20-20-1, a day-to-day substitute must hold a bachelor's degree or higher, an associate's degree from a regionally accredited college or university, or at least two years of college completion on track to a four-year degree. Substitutes for school nurse teachers must be Registered Nurses.",
      },
      {
        q: "When does a Rhode Island substitute need a teaching certificate?",
        a: "When employed on a temporary basis for more than 45 consecutive days in the same assignment. Those long-term substitutes must hold an appropriate Rhode Island certificate for the assignment.",
      },
      {
        q: "Does Rhode Island's background-check law cover staffing-agency substitutes?",
        a: "Yes. R.I. Gen. Laws § 16-2-18.1 covers contractual employees and individuals who may have direct or unmonitored contact with students and are hired by a third party that has contracted with the school to provide services. The national and state fingerprint check must be initiated before, or within one week of, employment.",
      },
      {
        q: "What is Rhode Island's Emergency Route Preliminary Certificate?",
        a: "A one-year certificate issued at the request of an employing agency that documents it could not find a certified, qualified candidate for a position that requires certification.",
      },
      fillRateFaq("Rhode Island"),
      regionFaq,
    ],
    related: [HUB, sibling("Massachusetts"), sibling("Connecticut"), sibling("New York"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── West Virginia ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-west-virginia",
    eyebrow: "Substitute teacher staffing · West Virginia",
    h1: "Substitute Teacher Staffing in West Virginia",
    metaTitle: "Substitute Teacher Staffing in West Virginia",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for West Virginia county school systems — WVDE substitute permits, the 10- and 30-day limits, and State Police, FBI, and abuse registry checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for West Virginia county school systems and public charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the WVDE substitute permit that matches the assignment, with every classroom's consecutive days tracked against that permit's limit.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in a West Virginia classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "West Virginia" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "WVDE substitute permit verified: restricted short-term, short-term, or long-term",
      "Bachelor's degree and 2.0 GPA confirmed for short-term permits; age 21 and degree or equivalency hours for restricted short-term permits",
      "18 clock hours of initial substitute teacher training documented",
      "Consecutive days in the same classroom tracked against the 10-day (restricted) or 30-day (short-term) limit",
      "Long-term permit matched to the endorsement area and grade levels of the assignment",
      "State Police, central abuse registry, and FBI fingerprint check completed",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.pappas,
    sections: [
      {
        heading: "What West Virginia county school systems need from a substitute partner",
        body: "West Virginia runs substitutes through tiered WVDE permits, and the tier sets the clock. A short-term permit holder, with a bachelor's degree and a 2.0 GPA, may stay up to 30 consecutive days in the same classroom; a restricted short-term permit, available in counties with a substitute shortage waiver, allows 10; anything longer calls for a long-term permit in the right endorsement area. Once a sub has held a class for more than half a grading period, state law generally keeps that sub in place to the end of the grading period, so the right match matters early.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Kanawha, Cabell, Monongalia, Berkeley, Wood, and Raleigh counties, every county is drawing on the same thin pool of permitted subs.",
      },
      {
        heading: "How FocusedEDU staffs West Virginia substitute programs",
        body: "We verify each West Virginia substitute's WVDE permit and training before a first assignment and match the permit tier to the assignment's expected length. Our credentialing system counts consecutive days per classroom against the 10-day or 30-day limit, and routes long-term permit holders in the right endorsement area to leaves that will run past a month. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your county are not presented to the county next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="wv-substitute-requirements">West Virginia substitute teacher and clearance requirements</h2>
<p class="answer-lead">West Virginia substitutes hold a West Virginia Department of Education (WVDE) substitute permit. A short-term permit requires a bachelor's degree and a 2.0 GPA and allows up to 30 consecutive days in the same classroom; a restricted short-term permit, used in counties with a substitute shortage waiver, requires an associate degree or equivalency hours and age 21 and allows 10 consecutive days or less; a long-term permit covers more than 30 days within a specific endorsement area. Applicants for an initial WVDE license are fingerprinted by the State Police for state, central abuse registry, and FBI checks, and state law bars contractor and service-provider employees from unaccompanied contact with students unless it can be verified that they have no qualifying conviction.</p>
<h3>Substitute permits and day limits</h3>
<p>WVDE's permit page states that "The minimum criteria for a short-term substitute teaching permit in West Virginia includes a bachelor's degree and a 2.0 GPA," and "A person with a short-term substitute permit may not substitute for more than 30 consecutive days in same classroom." The restricted short-term permit, which requires an associate degree or minimum equivalency hours, has a shorter clock: "Restricted Short-Term Substitute candidates must have reached the age of 21," and "Individuals who hold a restricted short-term permit may substitute teach in the same classroom, at any grade level, for 10 consecutive days or less." For longer leaves, "A long-term substitute permit allows you to substitute teach within a specific endorsement area at specified grade levels for more than 30 consecutive days in the same classroom" ${cite("WVDE, Substitute Teacher Permit", WV_PERMIT)}. The restricted permit is tied to shortage: "Fill out Form 2A if you are applying for a Restricted Short-Term Substitute Permit in a county with a substitute shortage waiver" ${cite("WVDE, Form 2A", WV_2A)}. Short-term applicants show they have "Completed 18 clock hours of initial substitute teacher training approved by the employing county or through our eLearning platform (WVLearns)" ${cite("WVDE, Form 2S", WV_2S)}. We track consecutive days per classroom against the permit's limit.</p>
<h3>Continuity rules and retired teachers</h3>
<p>The substitute statute provides that "The substitute shall be a duly certified teacher," and protects continuity: "a substitute teacher who has been assigned as a classroom teacher in the same classroom continuously for more than one half of a grading period and whose assignment remains in effect two weeks prior to the end of the grading period, shall remain in the assignment until the grading period has ended," unless the principal certifies that the regular teacher has helped prepare lesson plans and monitor progress or has been cleared by a physician to return. It also finds that "a compelling state interest exists in expanding the use of retired teachers to provide service as substitute teachers in areas of critical need and shortage" ${cite("W. Va. Code § 18A-2-3", WV_2_3)}. Because a mid-period hand-off is hard to undo, we match long assignments to the right permit before they start.</p>
<h3>Fingerprints and contractor access</h3>
<p>"Any applicant for an initial license issued by the West Virginia Department of Education shall be fingerprinted by the West Virginia State Police in accordance with state board policy in order to determine the applicant's suitability for licensure," and "The fingerprints shall be analyzed by the State Police for a state criminal history record check through the central abuse registry and then forwarded to the Federal Bureau of Investigation for a national criminal history record check" ${cite("W. Va. Code § 18A-3-10", WV_3_10)}. For contract staff, "Contractors or service providers or their employees may not make direct, unaccompanied contact with students or access school grounds unaccompanied when students are present if it cannot be verified that the contractors, service providers, or employees have not previously been convicted of a qualifying offense." "County school boards may require contractors and service providers to verify the criminal records of their employees before granting contact or access," and "Where prior written consent is obtained, county school boards may obtain information from the Central Abuse Registry regarding contractors, service providers, and their employees for the purposes of this subsection" ${cite("W. Va. Code § 18-5-15c", WV_15C)}. FocusedEDU provides that verification for every substitute it places, before a first assignment.</p>
${whereWeStaff(
  "West Virginia",
  "We staff substitute programs for county school systems and public charter schools across West Virginia, with recruiting built around the state's larger counties.",
  "That includes Kanawha County Schools in Charleston, Cabell County Schools in Huntington, Monongalia County Schools in Morgantown, Berkeley County Schools in Martinsburg, Wood County Schools in Parkersburg, Ohio County Schools in Wheeling, and Raleigh County Schools in Beckley. Because we work with one client per region, the first county to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("A permit tier sets how long a sub may stay; fill rate shows whether the classroom is covered at all. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("West Virginia", "With a bachelor's degree and a 2.0 GPA, you can apply for a WVDE short-term substitute permit after 18 clock hours of initial substitute training; in counties with a shortage waiver, a restricted short-term permit is open at age 21 with an associate degree or equivalency hours. Fingerprinting runs through the West Virginia State Police, and we walk you through it.")}
${cta("West Virginia")}`,
    faqs: [
      {
        q: "What are the requirements for a West Virginia substitute teaching permit?",
        a: "WVDE's minimum for a short-term substitute permit is a bachelor's degree and a 2.0 GPA, plus 18 clock hours of initial substitute teacher training. A restricted short-term permit, used in counties with a substitute shortage waiver, requires an associate degree or minimum equivalency hours and age 21.",
      },
      {
        q: "How many consecutive days can a West Virginia substitute stay in one classroom?",
        a: "A short-term permit holder may not substitute for more than 30 consecutive days in the same classroom, and a restricted short-term permit holder for no more than 10. A long-term substitute permit covers more than 30 consecutive days within a specific endorsement area and grade levels.",
      },
      {
        q: "Do West Virginia rules apply to contractors' employees in schools?",
        a: "Yes. Under W. Va. Code § 18-5-15c, contractors, service providers, and their employees may not have direct, unaccompanied contact with students unless it can be verified that they have no qualifying conviction. County boards may require contractors to verify their employees' records and, with written consent, check the Central Abuse Registry.",
      },
      {
        q: "Does a West Virginia substitute have to finish the grading period?",
        a: "Generally, yes. Under W. Va. Code § 18A-2-3, a substitute assigned to the same classroom for more than half a grading period, whose assignment is still in effect two weeks before the period ends, remains in the assignment until the grading period has ended, unless the principal certifies that the regular teacher has helped with lesson plans and student progress or has been cleared by a physician to return.",
      },
      fillRateFaq("West Virginia", "county"),
      regionFaq,
    ],
    related: [HUB, sibling("Virginia"), sibling("Pennsylvania"), sibling("Ohio"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Mississippi ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-mississippi",
    eyebrow: "Substitute teacher staffing · Mississippi",
    h1: "Substitute Teacher Staffing in Mississippi",
    metaTitle: "Substitute Teacher Staffing in Mississippi",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Mississippi districts — the private-firm background-check duty in § 37-9-17, state/FBI fingerprinting, and child abuse registry checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Mississippi public school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted for the state and FBI criminal history check and the child abuse registry check Mississippi law requires of private firms that provide substitute teachers to districts.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Mississippi classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Mississippi" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Fingerprint-based state criminal history check through the Department of Public Safety, forwarded to the FBI",
      "Current child abuse registry check for every new hire, as Miss. Code § 37-9-17 requires of substitute-staffing firms",
      "Disqualifying-crime determinations received before a substitute is presented",
      "Educator license status verified for any substitute who holds one",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.foedisch,
    sections: [
      {
        heading: "What Mississippi schools need from a substitute partner",
        body: "Mississippi gives superintendents room to employ substitutes whether or not they hold a license, subject to State Board rules, and puts its weight on screening. State law requires fingerprint-based state and FBI checks and child abuse registry checks for new school hires, and it names the staffing agency directly: a private firm under contract to provide substitute teachers must obtain those checks on its own new hires.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In DeSoto County, the Jackson metro's Rankin and Madison counties, and along the Gulf Coast from Gulfport to Biloxi, districts compete for the same cleared substitutes every morning.",
      },
      {
        heading: "How FocusedEDU staffs Mississippi substitute programs",
        body: "We meet the private-firm duty in § 37-9-17 for every Mississippi substitute: fingerprint-based state and FBI checks and a current child abuse registry check, with the disqualifying-crime determination in hand before a sub is presented. We then verify each candidate against your district's own substitute policy. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="ms-substitute-requirements">Mississippi substitute teacher and clearance requirements</h2>
<p class="answer-lead">Mississippi law lets a superintendent employ substitutes for licensed employees whether or not the substitute holds the proper license, subject to State Board of Education rules. New hires are fingerprinted for a state criminal history check that is forwarded to the FBI when no state-level disqualifying record is found, and Miss. Code § 37-9-17 requires any private firm under contract with a district to provide substitute teachers to obtain current criminal records background checks and child abuse registry checks on its new hires.</p>
<h3>Who may substitute</h3>
<p>Among a superintendent's statutory powers is "To employ substitutes for licensed employees, regardless of whether or not such substitute holds the proper license, subject to such reasonable rules and regulations as may be adopted by the State Board of Education" ${cite("Miss. Code Ann. § 37-9-14, as reproduced by MDE", MS_STAT)}. For a hard-to-fill position, MDE's licensure guidelines describe the Special, Non-Renewable License: "This is a one-year license that can only be requested by an employing local school district or an eligible nonpublic school in the state of Mississippi for up to three (3) years" ${cite("MDE, Guidelines for Mississippi Educator Licensure K-12", MS_LIC)}.</p>
<h3>Background checks for substitute-staffing firms</h3>
<p>Section 37-9-17 provides that "any private firm under contract with the local public school district to provide substitute teachers to teach during the absence of a regularly employed schoolteacher shall require, through the appropriate governmental authority, that current criminal records background checks and current child abuse registry checks are obtained" for its new hires. "In order to determine the applicant's suitability for employment, the applicant shall be fingerprinted," and "If no disqualifying record is identified at the state level, the fingerprints shall be forwarded by the Department of Public Safety to the Federal Bureau of Investigation for a national criminal history record check." "The fee for such fingerprinting and criminal history record check shall be paid by the applicant, not to exceed Fifty Dollars ($50.00)," though a district or a substitute-staffing firm may elect to pay it on the applicant's behalf. For firms, "the appropriate governmental authority shall notify the private firm whether a disqualifying crime exists," and "Any employment contract for a new hire executed by the superintendent of the local school district or any employment of a new hire by a superintendent/director of a new school under the purview of the State Board of Education or by a private firm shall be voidable if the new hire receives a disqualifying criminal record check" ${cite("Miss. Code Ann. § 37-9-17, as reproduced by MDE", MS_STAT)}. FocusedEDU completes both checks and receives the determination before a substitute is presented to your district.</p>
${whereWeStaff(
  "Mississippi",
  "We staff substitute programs for public school districts and charter schools across Mississippi, with recruiting built around the Jackson metro, DeSoto County, and the Gulf Coast.",
  "That includes the Jackson Public School District, Rankin County School District, and Madison County Schools; DeSoto County Schools in the Memphis suburbs; the Harrison County, Gulfport, and Biloxi Public school districts on the coast; the Hattiesburg and Lamar County school districts; and the Tupelo and Meridian public school districts. Because we work with one client per region, the first district to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Screening keeps the wrong people out; fill rate shows whether the right people show up. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Mississippi", "Mississippi superintendents may employ substitutes whether or not they hold a teaching license, subject to State Board of Education rules. Every substitute we place completes fingerprint-based state and FBI checks and a child abuse registry check, which we arrange.")}
${cta("Mississippi")}`,
    faqs: [
      {
        q: "Do you need a teaching license to substitute in Mississippi?",
        a: "Not under state law. Miss. Code § 37-9-14 lets a superintendent employ substitutes for licensed employees regardless of whether the substitute holds the proper license, subject to rules the State Board of Education may adopt.",
      },
      {
        q: "Does Mississippi's background-check law cover substitute staffing agencies?",
        a: "Yes, by name. Miss. Code § 37-9-17 requires any private firm under contract with a district to provide substitute teachers to obtain current criminal records background checks and current child abuse registry checks on its new hires, and the governmental authority tells the firm whether a disqualifying crime exists.",
      },
      {
        q: "What does the Mississippi background check include?",
        a: "The applicant is fingerprinted for a state check, and if no disqualifying record is found at the state level, the Department of Public Safety forwards the fingerprints to the FBI for a national check. The fee is capped at $50, and a district or substitute-staffing firm may elect to pay it for the applicant.",
      },
      {
        q: "What happens if a new hire's check is disqualifying?",
        a: "Under § 37-9-17, an employment contract for a new hire, whether by a district superintendent or by a private firm, is voidable if the new hire receives a disqualifying criminal record check.",
      },
      fillRateFaq("Mississippi"),
      regionFaq,
    ],
    related: [HUB, sibling("Louisiana"), sibling("Alabama"), sibling("Tennessee"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Hawaii ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-hawaii",
    eyebrow: "Substitute teacher staffing · Hawaii",
    h1: "Substitute Teacher Staffing in Hawaii",
    metaTitle: "Substitute Teacher Staffing in Hawaii",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Hawaii public charter schools and Department of Education schools — substitute certification, fingerprint clearance, and TB clearance handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Hawaii public charter schools and Department of Education schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with substitute certification, fingerprint and criminal history clearance, and a current TB clearance verified before a first assignment.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a Hawaii school",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Hawaii" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Substitute teacher certification program completed (80% passing score for bachelor's holders without teacher training), with the five-year renewal date tracked",
      "High school diploma or equivalent, or bachelor's degree, verified for the certification route",
      "Fingerprinting and criminal history clearance completed before any work begins",
      "TB clearance certificate dated within one year verified",
      "Charter school's own criminal history procedures under HRS § 302D-33 followed",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What Hawaii schools need from a substitute partner",
        body: "Hawaii is unlike any other state: its Department of Education is the nation's only statewide public school district, serving every non-charter public school on seven islands, alongside a sector of public charter schools. The Department's substitute standard is clear: a substitute teacher certification, earned through an approved program and renewed every five years, plus fingerprint clearance and a current TB clearance before any work begins.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. On Oahu, Hawaii Island, Maui, and Kauai, schools draw from island-sized pools, and a cleared, certified substitute who is ready on the right island is the scarce resource.",
      },
      {
        heading: "How FocusedEDU staffs Hawaii substitute programs",
        body: "We verify each Hawaii substitute's certification route, fingerprint and criminal history clearance, and TB clearance before a first assignment, and track the five-year certification renewal and the one-year TB window so no one lapses mid-year. For charter schools we follow each school's criminal history procedures under its authorizer's requirements. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your school are not presented to the school next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="hi-substitute-requirements">Hawaii substitute teacher and clearance requirements</h2>
<p class="answer-lead">Hawaii's Department of Education (HIDOE) is the nation's only statewide public school district. Its substitutes need a substitute teacher certification, valid for five years: applicants with less than a bachelor's degree need a high school diploma or equivalent plus an approved certification program, and bachelor's holders without teacher training must pass a certification program with a score of 80% or higher. Every substitute completes fingerprinting and a background check before working and needs a TB clearance dated within one year. State law requires HIDOE, and charter schools through their authorizer, to obtain criminal history information on people employed or seeking employment in positions that place them in close proximity to children.</p>
<h3>Substitute certification and clearances</h3>
<p>HIDOE describes itself plainly: "The Hawaiʻi State Department of Education is the nation's only statewide public school district, serving 164,000 students, their families and communities across 296 schools on seven islands" ${cite("HIDOE, About", HI_ABOUT)}. Its substitute page states that "Substitute teacher certifications are valid for five years and must be renewed to continue employment." Certification is "Required for applicants with less than a bachelor's degree (minimum of a high school diploma or equivalent, plus completion of a certification program)" and "Required for those with a bachelor's degree but no teacher training (must complete a certification program with a passing score of 80% or higher)." Before starting, applicants "Complete fingerprinting and background checks at the school's district office. Applicants cannot begin working until this process is completed and clearance is granted," and "A valid TB test clearance certificate dated within one year of the application date is required." HIDOE also notes that "Applications are accepted each school year from July 1 to March 15" ${cite("HIDOE, Become a Substitute Teacher", HI_SUB)}.</p>
<h3>Criminal history checks in statute</h3>
<p>The Department "shall develop procedures for obtaining verifiable information regarding the criminal history of persons who are employed or seeking employment in any position, including teacher trainees, that places them in close proximity to children" ${cite("HRS § 302A-601.5", HI_601_5)}, and the state's criminal history statute lists "The department of education on employees, prospective employees, and teacher trainees in any public school in positions that necessitate close proximity to children, as provided by section 302A-601.5;" among the agencies that may obtain records ${cite("HRS § 846-2.7", HI_846)}. For charter schools, "The authorizer shall require charter schools to obtain verifiable information regarding the criminal history of persons who are employed or seeking employment in any position, including teacher trainees, that places them in close proximity to children" ${cite("HRS § 302D-33", HI_302D)}. FocusedEDU completes fingerprinting and clearance before a first assignment and follows each school's own procedures.</p>
${whereWeStaff(
  "Hawaii",
  "We staff substitute programs for Hawaii public charter schools and Department of Education schools, with recruiting built around Oahu and the neighbor islands' main towns.",
  "That includes urban Honolulu and the rest of Oahu, from Pearl City and Kapolei to Kaneohe and Mililani; Hilo and Kailua-Kona on Hawaii Island; Kahului and Wailuku on Maui; and Lihue on Kauai. Because we work with one client per region, the first school or network to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("Certification and clearances get a substitute in the door; fill rate shows whether classrooms are covered. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Hawaii", "To substitute in Hawaii's public schools you will need a substitute teacher certification from an approved program, renewed every five years, fingerprinting and a background clearance before your first day, and a TB clearance dated within one year. We walk you through each step.")}
${cta("Hawaii")}`,
    faqs: [
      {
        q: "What are the requirements to be a substitute teacher in Hawaii?",
        a: "HIDOE requires a substitute teacher certification: applicants with less than a bachelor's degree need a high school diploma or equivalent plus a certification program, and bachelor's holders without teacher training must complete a certification program with a passing score of 80% or higher. Substitutes also need fingerprint clearance and a TB clearance dated within one year.",
      },
      {
        q: "How long is a Hawaii substitute teacher certification valid?",
        a: "Five years. HIDOE says substitute teacher certifications must be renewed to continue employment.",
      },
      {
        q: "Can a Hawaii substitute start before the background check clears?",
        a: "No. HIDOE says applicants complete fingerprinting and background checks at the school's district office and cannot begin working until the process is completed and clearance is granted.",
      },
      {
        q: "Do Hawaii charter schools run criminal history checks?",
        a: "Yes. HRS § 302D-33 requires the authorizer to have charter schools obtain verifiable criminal history information on people employed or seeking employment in positions that place them in close proximity to children.",
      },
      fillRateFaq("Hawaii", "school"),
      regionFaq,
    ],
    related: [HUB, sibling("California"), sibling("Alaska"), sibling("Washington"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Alaska ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-alaska",
    eyebrow: "Substitute teacher staffing · Alaska",
    h1: "Substitute Teacher Staffing in Alaska",
    metaTitle: "Substitute Teacher Staffing in Alaska",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Alaska school districts — the 20-day certificate line, retired-teacher subs up to 165 days, emergency certificates, and fingerprint checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Alaska school districts. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with Alaska teacher certificates verified for any absence known to run past 20 in-session days and every long assignment matched to a certified or retired-certificate substitute.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Alaska classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Alaska" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Valid Alaska teacher certificate verified for any absence known to exceed 20 in-session days (4 AAC 18.021)",
      "Retired teacher certificate verified, with consecutive days tracked against the 165-day limit",
      "Start-of-year uncertified substitutes flagged so your district can notify DEED by August 31",
      "Fingerprints and national criminal history check confirmed for certified substitutes (AS 14.20.020)",
      "Emergency certificate sponsorship paperwork prepared when your district needs it",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.weathington,
    sections: [
      {
        heading: "What Alaska districts need from a substitute partner",
        body: "Alaska draws its substitute line at 20 days. A substitute replacing a teacher whom district authorities know will be absent for more than 20 in-session days must hold a valid Alaska teacher certificate, and districts that start the year with an uncertified substitute in a vacancy must notify the state by August 31. Retired Alaska teachers are the state's built-in reserve: a retired teacher certificate allows long-term substitute work for up to 165 consecutive days.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Anchorage, Fairbanks, the Mat-Su Valley, Juneau, and the Kenai Peninsula, and in rural districts such as Lower Kuskokwim, distance makes every certified substitute hard to replace.",
      },
      {
        heading: "How FocusedEDU staffs Alaska substitute programs",
        body: "We verify Alaska teacher certificates and retired teacher certificates before a first assignment, route certified subs to any absence known to run past 20 in-session days, and track retired-certificate subs against the 165-day limit. When a vacancy has no certified candidate, we prepare the paperwork for the emergency certificate your district sponsors. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="ak-substitute-requirements">Alaska substitute teacher and clearance requirements</h2>
<p class="answer-lead">In Alaska, a person employed to replace a teacher whom district authorities know will be absent for more than 20 in-session days must hold a valid Alaska teacher certificate, and a district that hires an uncertified substitute to fill a start-of-year vacancy for 20 in-session days or less must notify the Department of Education and Early Development (DEED) by August 31. Retired Alaska teachers may hold a retired teacher certificate that allows long-term substitute work for up to 165 consecutive days. Teacher certification requires fingerprints and a national criminal history check, and a district can sponsor an emergency certificate valid only through the end of the school year.</p>
<h3>The 20-day line and retired-teacher substitutes</h3>
<p>The state regulation reads: "A person employed to replace a teacher who district authorities know will be absent for more than 20 days in which the school is in session must possess a valid teacher's certificate from this state," and "If a substitute teacher who does not possess a valid teacher's certificate from this state is hired to fill a vacancy at the start of the school year for 20 in-session days or less, a district must notify the department not later than August 31" ${cite("4 AAC 18.021", AK_18_021)}. For retired teachers, the statute provides that "A teacher certificated under this subsection may teach as a long-term substitute teacher for not more than 165 consecutive days of a school term," where a long-term substitute "means a teacher who is employed in the state to substitute teach for more than 20 consecutive days of a school term" ${cite("AS 14.20.020", AK_14_20)}, and DEED's rule confirms that "A retired teacher certificate qualifies the holder to substitute teach for a teacher who district authorities know will be absent up to 165 consecutive days while the school is in session" ${cite("4 AAC 12.380", AK_12_380)}. We match every absence known to run past 20 in-session days to a certified or retired-certificate substitute.</p>
<h3>Fingerprints and emergency certificates</h3>
<p>For certification, "The board shall require teachers to submit fingerprints and the fees required by the Department of Public Safety under AS 12.62.160 for criminal justice information and a national criminal history record check," and "The department may not issue a teacher certificate to a person who has been convicted of a crime, or an attempt, solicitation, or conspiracy to commit a crime, involving a minor under AS 11.41.410" and the other listed offenses ${cite("AS 14.20.020", AK_14_20)}. DEED adds that "A background clearance is required of all Retired certification applicants who have not previously passed a criminal background check with EED for teacher certification" ${cite("DEED, Miscellaneous Certificates and Processes", AK_MISC)}. When a district cannot find a certified teacher, "Emergency certification requires sponsorship by a Public Alaska School District or Educational Agency that is hiring you for the upcoming school year" ${cite("DEED, District Sponsored Certificates", AK_DIST)}, and "A temporary emergency certificate issued under (b) of this section is valid only to the end of the school year in which it is issued" ${cite("4 AAC 12.401", AK_12_401)}.</p>
${whereWeStaff(
  "Alaska",
  "We staff substitute programs for school districts across Alaska, with recruiting built around Anchorage, Fairbanks, the Mat-Su Valley, and Southeast.",
  "That includes the Anchorage School District, the Fairbanks North Star Borough School District, the Matanuska-Susitna Borough School District, the Juneau School District, the Kenai Peninsula Borough School District, the Ketchikan Gateway Borough and Kodiak Island Borough school districts, and the Lower Kuskokwim School District in Bethel. Because we work with one client per region, the first district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("In a state where distance shrinks every substitute pool, fill rate is the number to ask for. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Alaska", "Absences known to run past 20 in-session days need a valid Alaska teacher certificate, and certification requires fingerprints and a national criminal history check. Retired Alaska teachers can hold a retired teacher certificate for long-term substitute work of up to 165 consecutive days.")}
${cta("Alaska")}`,
    faqs: [
      {
        q: "When does an Alaska substitute need a teaching certificate?",
        a: "Under 4 AAC 18.021, a person employed to replace a teacher whom district authorities know will be absent for more than 20 in-session days must hold a valid Alaska teacher's certificate. If an uncertified substitute fills a start-of-year vacancy for 20 in-session days or less, the district must notify DEED by August 31.",
      },
      {
        q: "Can retired teachers substitute long-term in Alaska?",
        a: "Yes. Under AS 14.20.020 and 4 AAC 12.380, a retired teacher certificate qualifies the holder as a substitute and allows long-term substitute teaching for up to 165 consecutive days of a school term.",
      },
      {
        q: "Do Alaska teachers and substitutes need fingerprints?",
        a: "Teacher certification requires fingerprints for criminal justice information and a national criminal history record check under AS 14.20.020, and DEED requires a background clearance for retired certificate applicants who have not previously passed one.",
      },
      {
        q: "What is an Alaska emergency certificate?",
        a: "A certificate that requires sponsorship by the Alaska school district or educational agency hiring the person. Under 4 AAC 12.401, a temporary emergency certificate is valid only to the end of the school year in which it is issued.",
      },
      fillRateFaq("Alaska"),
      regionFaq,
    ],
    related: [HUB, sibling("Washington"), sibling("Hawaii"), sibling("Oregon"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },
];
