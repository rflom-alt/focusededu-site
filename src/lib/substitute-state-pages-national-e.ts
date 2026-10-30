/**
 * National substitute-staffing state pages, second wave, file 2 of 3:
 * Alabama, Louisiana, Kentucky, Oregon, Oklahoma. Same model and rules as
 * substitute-state-pages-national-a.ts and -d.ts: approved FocusedEDU facts
 * only, the 95% fill rate attributed to Odyssey in Wilmington, Delaware, no
 * clients or results claimed in these states, and every state rule quoted from
 * a primary source fetched and string-checked on 2026-10-30.
 *
 * Alabama's Code sections are linked to the legislature's Code of Alabama
 * viewer; their text was checked against the same site's data service. No
 * state in this file had a live K-12 posting on 2026-10-30.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff } from "./substitute-state-pages-national-a";
import {
  NATIONAL_WAVE2_UPDATED,
  TESTIMONIALS,
  fillRateFaq,
  sibling,
  SPED_HUB,
  PARA_HUB,
  K12_HUB,
  RELATED_HUB,
} from "./substitute-state-pages-national-d";

const AL_INFO = "https://www.alabamaachieves.org/wp-content/uploads/2022/06/TEA_OA_20251031_SubLicGenInfo_v1.pdf";
const AL_CODE = (section: string) => `https://alison.legislature.state.al.us/code-of-alabama?section=${section}`;
const LA_17_15 = "https://legis.la.gov/legis/Law.aspx?d=79855";
const KY_KAR = "https://apps.legislature.ky.gov/law/kar/titles/016/002/030/";
const KY_GUIDE = "https://education.ky.gov/districts/LegislativeGuidance/Documents/Certification%20Guidance%202024_508.pdf";
const KY_160_380 = "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=57158";
const OR_OAR = "https://secure.sos.state.or.us/oard/displayDivisionRules.action?selectedDivision=2662";
const OR_326 = "https://www.oregonlegislature.gov/bills_laws/ors/ors326.html";
const OK_6_105 = "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=89969";
const OK_5_142 = "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=89894";

export const substituteStatePagesNationalE: ServicePage[] = [
  // ───────────────────────────── Alabama ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-alabama",
    eyebrow: "Substitute teacher staffing · Alabama",
    h1: "Substitute Teacher Staffing in Alabama",
    metaTitle: "Substitute Teacher Staffing in Alabama",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Alabama school systems and charters — district-requested ALSDE Substitute Licenses and ASBI/FBI fingerprint clearance handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Alabama city and county school systems, charter schools, and nonpublic schools. We recruit, fingerprint, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, and we deliver each candidate ready for the employer-requested ALSDE Substitute License: high school diploma verified and ASBI and FBI fingerprint clearance complete.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Alabama classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Alabama" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "ALSDE Substitute License, requested by your superintendent or administrator, verified before a first assignment",
      "High school diploma or ALSDE-approved equivalent on file (a certificate of attendance does not qualify)",
      "Fingerprint-based criminal history clearance from both the ASBI and the FBI under the Child Protection Act",
      "Lawful presence documentation ready for ALSDE's verification",
      "Assignment checked so the Substitute License is never the basis for a full-time teaching hire",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.pappas,
    sections: [
      {
        heading: "What Alabama schools need from a substitute partner",
        body: "Alabama's Substitute License works differently from most states' permits: the candidate cannot apply. The employing superintendent or nonpublic school administrator requests it, and the license is not issued until the candidate has cleared fingerprint checks by both the Alabama State Bureau of Investigation and the FBI. That puts the paperwork on your central office, and it means a staffing partner either delivers a candidate who is ready for that request or adds weeks to it.\n\nThe daily need is the one every school system shares: day-to-day coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Birmingham, Huntsville, Mobile, and Montgomery, city and county systems draw on the same licensed, cleared subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs Alabama substitute programs",
        body: "We fingerprint every Alabama candidate for the ASBI and FBI check, verify the high school diploma and lawful presence documents ALSDE requires, and hand your office a candidate ready for the Substitute License request. Because the license lets the holder substitute in any Alabama public or nonpublic school, a FocusedEDU sub licensed once is ready for every building you staff with us. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your system are not presented to the system next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="al-substitute-requirements">Alabama substitute teacher and clearance requirements</h2>
<p class="answer-lead">Alabama substitutes hold a Substitute License from the Alabama State Department of Education, which only the employing superintendent or eligible nonpublic school administrator can request. It requires a high school diploma or ALSDE-approved equivalent and fingerprint-based clearance from both the Alabama State Bureau of Investigation and the FBI, and it lets the holder substitute in any Alabama public or nonpublic school. Under the Alabama Child Protection Act, the background-check duty reaches people who provide services to school boards when they have unsupervised access to children.</p>
<h3>The Substitute License</h3>
<p>ALSDE's information sheet starts with who applies: "An individual CANNOT apply for this license. The employing Alabama county/city superintendent or administrator of an eligible nonpublic/private school must apply for this license." The education requirement: "Graduation from high school or the completion of an Alabama State Department of Education-approved equivalent is required. A certificate of attendance will not meet this requirement." The scope: "An individual holding a valid Substitute License may serve as a substitute teacher in any Alabama public or nonpublic/private school," but "The Substitute License cannot be used as the basis for employing a full-time teacher" ${cite("ALSDE, General Information: Substitute License (10/2025)", AL_INFO)}. We prepare every candidate so your request can go in the day you choose them.</p>
<h3>ASBI and FBI fingerprint clearance</h3>
<p>The same sheet requires that "your criminal history background checks must have been completed by both the Alabama State Bureau of Investigation (ASBI) and the Federal Bureau of Investigation (FBI)" ${cite("ALSDE, General Information: Substitute License (10/2025)", AL_INFO)}, and the application form adds that "the Substitute License will not be issued until the applicant has received background clearance" ${cite("ALSDE, Form SUB", "https://www.alabamaachieves.org/wp-content/uploads/2023/07/TEA_2023726_Form-SUB_V1.0.pdf")}. The Child Protection Act requires "Two complete functional sets of fingerprints, properly executed by a criminal justice agency or an individual properly trained in fingerprinting techniques" ${cite("Ala. Code § 16-22A-6", AL_CODE("16-22A-6"))}, and it bars hiring "an individual who may have unsupervised access to a child without first obtaining a criminal history background information check, except on a temporary emergency basis" ${cite("Ala. Code § 16-22A-5", AL_CODE("16-22A-5"))}.</p>
<h3>Contracted staff under the Child Protection Act</h3>
<p>The Act's definitions reach agency staff. A covered employee includes "Any person employed to serve an authorized employer as defined in this chapter, including those individuals that provide services to local employing boards or nonpublic schools, when the person so employed has unsupervised access to children in an educational environment," and authorized employers include "local employing boards, and nonpublic schools which are responsible for hiring employees or contracting with private employers to provide personnel who have unsupervised access to children in an educational setting" ${cite("Ala. Code § 16-22A-3", AL_CODE("16-22A-3"))}. FocusedEDU completes the fingerprint clearance on every substitute before a first assignment, so no one we place relies on the emergency exception.</p>
${whereWeStaff(
  "Alabama",
  "We staff substitute programs for city and county school systems, charter schools, and nonpublic schools across Alabama, with recruiting built around the state's largest metros.",
  "That includes Birmingham City Schools, Jefferson County, Shelby County, and Hoover City Schools; Huntsville City, Madison County, and Madison City; the Mobile County Public School System, the state's largest; Montgomery Public Schools; Tuscaloosa City and Tuscaloosa County; Baldwin County on the Gulf Coast; and Auburn City and Lee County. Because we work with one client per region, the first system or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Before you choose a substitute partner, ask what share of absences it actually covers. Our answer comes from an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has filled 95% of day-to-day absences there, a 40%+ improvement over the school's previous provider.")}
${forSubs("Alabama", "Alabama's Substitute License is requested by the school system that hires you, so you cannot apply for it on your own. You will need a high school diploma or ALSDE-approved equivalent and fingerprint clearance from the ASBI and FBI; we arrange the fingerprinting and get your file ready for the request.")}
${cta("Alabama")}`,
    faqs: [
      {
        q: "How do you get a substitute license in Alabama?",
        a: "Through the employer. ALSDE states that an individual cannot apply for the Substitute License; the employing county or city superintendent, or the administrator of an eligible nonpublic school, applies for it. The candidate needs a high school diploma or ALSDE-approved equivalent and ASBI and FBI background clearance.",
      },
      {
        q: "Where can an Alabama Substitute License holder work?",
        a: "In any Alabama public or nonpublic school. The license cannot, however, be used as the basis for employing a full-time teacher.",
      },
      {
        q: "Do agency substitutes in Alabama need fingerprint clearance?",
        a: "Yes. ALSDE will not issue the Substitute License until the applicant has background clearance from both the ASBI and the FBI, and the Alabama Child Protection Act covers people who provide services to local boards when they have unsupervised access to children.",
      },
      fillRateFaq("Alabama", "school system"),
      {
        q: "Will you also staff the system next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Tennessee"), sibling("Georgia"), sibling("Florida"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Louisiana ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-louisiana",
    eyebrow: "Substitute teacher staffing · Louisiana",
    h1: "Substitute Teacher Staffing in Louisiana",
    metaTitle: "Substitute Teacher Staffing in Louisiana",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Louisiana parishes and charters — R.S. 17:15 hiring bars, fingerprints before employment, and DCFS registry screening handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Louisiana parish and city school systems and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted before employment and screened against the crimes and DCFS state central registry listings that Louisiana law bars from substitute teaching.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher working with students in a Louisiana classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Louisiana" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Fingerprints submitted to the Louisiana Bureau of Criminal Identification and Information before employment (La. R.S. 17:15)",
      "Criminal history screened against every offense R.S. 17:15 bars for substitute teachers",
      "DCFS state central registry status checked",
      "Your school system's own substitute qualifications verified before a candidate is presented",
      "Substitutes briefed on their own duty to report convictions and registry listings",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.murphyRichardson,
    sections: [
      {
        heading: "What Louisiana schools need from a substitute partner",
        body: "Louisiana's school-employment statute names substitute teachers alongside administrators and teachers in its hiring bars, so a substitute must clear the same criminal history and DCFS registry screen as anyone on the faculty, and fingerprints must be in before the person starts. The statute also treats people employed by a contractor to provide student services as hired by the school system. For an agency, that means the screening is the job, not a formality.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In New Orleans, Jefferson Parish, Baton Rouge, and Shreveport, charter networks and parish systems call the same screened substitutes on the same morning.",
      },
      {
        heading: "How FocusedEDU staffs Louisiana substitute programs",
        body: "We fingerprint every Louisiana substitute before employment, screen the results against each offense R.S. 17:15 lists, check the DCFS state central registry, and verify the candidate against your system's own substitute requirements before presenting them. Our credentialing system keeps those records current and flags anything that changes. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your schools are not presented to the system next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="la-substitute-requirements">Louisiana substitute teacher and clearance requirements</h2>
<p class="answer-lead">Louisiana law bars public and nonpublic schools from knowingly hiring a substitute teacher with a listed criminal conviction, and bars hiring anyone recorded on the DCFS state central registry on or after August 1, 2018. Local boards must collect fingerprints for the Louisiana Bureau of Criminal Identification and Information before employment, and people employed by a contractor to provide student services are treated as hired by the school system. BESE stopped issuing the background-check-only teaching authorization on June 14, 2023.</p>
<h3>Hiring bars that name substitute teachers</h3>
<p>Louisiana's criminal history statute provides that a local public school board or nonpublic school "shall not knowingly hire a person as an administrator, teacher, or substitute teacher if the person:" has been convicted of a listed crime or meets the statute's other disqualifiers. It adds a registry bar: a person "whose name is recorded on the Department of Children and Family Services' state central registry on or after August 1, 2018, shall not be hired by a city, parish, or other local public school board," and it puts a duty on substitutes themselves: "An administrator, teacher, or substitute teacher who fails to report a conviction or plea of guilty or nolo contendere of any felony offense or fails to report recordation on the Department of Children and Family Services' state central registry shall be fined not more than one thousand dollars" ${cite("La. R.S. 17:15", LA_17_15)}. We screen every candidate against each bar before presenting them and brief every substitute on the reporting duty.</p>
<h3>Fingerprints before employment, including contractor staff</h3>
<p>Each board's background-check regulation must include "the requirement and the procedure for the submission of a person's fingerprints in a form acceptable to the Louisiana Bureau of Criminal Identification and Information prior to employment of the person." The statute reaches contractors expressly: "any person employed to provide cafeteria, transportation, janitorial, maintenance, or student services by any person or entity that contracts with a school or school system to provide such services shall be considered to be hired by a school system" ${cite("La. R.S. 17:15", LA_17_15)}. BESE's handbook for school administrators repeats that "The regulation shall include the requirement and the procedure for the submission of a person's fingerprints on a form acceptable to the bureau" ${cite("LAC 28:CXV §501 (Bulletin 741)", "https://www.doa.la.gov/media/d0vfr3jj/28v115.docx")}. Every FocusedEDU substitute is fingerprinted before a first day.</p>
<h3>The end of teaching authorizations</h3>
<p>Louisiana once issued a credential for exactly this screen. Bulletin 746 describes it: "A teaching authorization (TA) is a nonstandard credential that only indicates a cleared criminal background check," and it closes the route: "Beginning June 14, 2023, TAs will no longer be issued" ${cite("LAC 28:CXXXI §536 (Bulletin 746)", "https://www.doa.la.gov/media/ebbnvnr2/28v131.docx")}. Today the screen lives in each school system's hiring process, and we deliver a complete record for it with every candidate.</p>
${whereWeStaff(
  "Louisiana",
  "We staff substitute programs for parish and city school systems and charter schools across Louisiana, from New Orleans and Baton Rouge to the state's northern and southwestern metros.",
  "That includes NOLA Public Schools and its charter networks; Jefferson Parish Schools in Metairie and Kenner; St. Tammany Parish on the Northshore; the East Baton Rouge Parish School System; Caddo Parish around Shreveport; the Lafayette Parish School System; Calcasieu Parish around Lake Charles; and Ouachita Parish around Monroe. Because we work with one client per region, the first system or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The test of a substitute program is how many classrooms have a qualified adult in them by first bell. At Odyssey Public Charter School in Wilmington, Delaware, an existing FocusedEDU client since 2021, our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Louisiana", "Every Louisiana substitute is fingerprinted before employment and screened against the criminal history and DCFS registry bars in R.S. 17:15, and each school system sets its own substitute qualifications, so we match you to the systems where you already qualify.")}
${cta("Louisiana")}`,
    faqs: [
      {
        q: "Who can't be hired as a substitute teacher in Louisiana?",
        a: "Under La. R.S. 17:15, schools may not knowingly hire a substitute teacher with a listed criminal conviction, and a person recorded on the DCFS state central registry on or after August 1, 2018 may not be hired by a local public school board.",
      },
      {
        q: "Are agency substitutes covered by Louisiana's background-check law?",
        a: "Yes. R.S. 17:15 treats any person employed to provide cafeteria, transportation, janitorial, maintenance, or student services by an entity that contracts with a school or school system as hired by a school system, and requires fingerprints before employment.",
      },
      {
        q: "Does Louisiana still issue teaching authorizations for substitutes?",
        a: "No. Bulletin 746 describes the teaching authorization as a nonstandard credential that only indicated a cleared criminal background check, and states that beginning June 14, 2023, TAs will no longer be issued.",
      },
      {
        q: "Do Louisiana substitutes have to report convictions themselves?",
        a: "Yes. R.S. 17:15 provides that a substitute teacher who fails to report a felony conviction or plea, or a recordation on the DCFS state central registry, may be fined up to one thousand dollars.",
      },
      fillRateFaq("Louisiana", "school system"),
    ],
    related: [HUB, sibling("Texas"), sibling("Arkansas"), sibling("Alabama"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Kentucky ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-kentucky",
    eyebrow: "Substitute teacher staffing · Kentucky",
    h1: "Substitute Teacher Staffing in Kentucky",
    metaTitle: "Substitute Teacher Staffing in Kentucky",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Kentucky districts — EPSB substitute certificates, the 20-day emergency-certificate limit, KSP/FBI checks, and CA/N letters handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Kentucky school districts. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the right Kentucky substitute certificate for the assignment and cleared through the Kentucky State Police and FBI background check and a clear child abuse and neglect (CA/N) letter.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Kentucky classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Kentucky" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Kentucky substitute certificate verified: one-year emergency, five-year (bachelor's degree), or ten-year",
      "Emergency-certificate holders matched only to the district that initiated the application",
      "Consecutive instructional days tracked against the 20-day emergency-certificate limit",
      "Kentucky State Police and FBI background check completed (KRS 160.380)",
      "Clear CA/N letter from the Cabinet for Health and Family Services on file",
      "Selection-priority order documented for your HR office (16 KAR 2:030)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.porterLinen,
    sections: [
      {
        heading: "What Kentucky schools need from a substitute partner",
        body: "Kentucky issues three substitute certificates, and which one a sub holds decides where and how long they can work. The one-year emergency certificate needs only a high school diploma, but it is limited to the district that initiated it, cannot be used for full-time substitute work, and cannot replace a teacher of record for more than 20 consecutive instructional days. The five-year certificate requires a bachelor's degree, and state rules set a priority order districts must follow when choosing among them.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Louisville, Lexington, and Northern Kentucky, districts compete for the same certified subs every morning, and emergency-certificate holders cannot simply move between them.",
      },
      {
        heading: "How FocusedEDU staffs Kentucky substitute programs",
        body: "We record each Kentucky substitute's certificate type and the district it is valid in, count consecutive instructional days per assignment so an emergency-certificate holder never crosses the 20-day line, and place degree-holding five-year subs where long assignments are likely. Every sub clears the Kentucky State Police and FBI check and provides a clear CA/N letter before a first assignment. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ky-substitute-requirements">Kentucky substitute teacher and clearance requirements</h2>
<p class="answer-lead">Kentucky substitutes hold one of three certificates: a one-year emergency certificate, which requires a high school diploma or equivalency and a Kentucky district job offer; a five-year certificate, which requires a bachelor's degree; or a ten-year certificate for certified teachers. The emergency certificate is limited to the district that initiated it and is not valid for full-time substitute work or for replacing a teacher of record more than 20 consecutive instructional days. New hires must clear a Kentucky State Police and FBI background check and provide a clear child abuse and neglect (CA/N) letter.</p>
<h3>The emergency and five-year substitute certificates</h3>
<p>The substitute regulation provides that "A one (1) year emergency certificate for substitute teaching may be issued to a candidate who possesses a minimum of a high school diploma or high school equivalency diploma," that the application must "Contain verification of an offer of employment in a Kentucky school district;" and that "A five (5) year certificate for substitute teaching may be issued to a candidate who possesses a bachelor's degree from a regionally or nationally accredited postsecondary education institution." The emergency route depends on local need: "The superintendent of the local school district and the board of education may establish the need for emergency substitute teachers on the basis of anticipated shortages of regularly certified teachers and substitute teachers" ${cite("16 KAR 2:030", KY_KAR)}. KDE's guidance adds that emergency certificates "will be issued at a Rank V and are limited to employment with the district that initiated the application" ${cite("KDE, Certification Procedure Updates (2024)", KY_GUIDE)}.</p>
<h3>The 20-day limit and selection priority</h3>
<p>By statute, the one-year emergency certificate is not valid for full-time substitute employment or for "The replacement of the teacher of record for more than twenty (20) consecutive instructional days" ${cite("KRS 161.102", "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=55612")}. KDE puts it plainly: "This certificate is not valid for full-time employment or the replacement of the teacher of record for more than 20 consecutive days" ${cite("KDE, Certification Procedure Updates (2024)", KY_GUIDE)}. The regulation also sets an order of preference for filling a temporary absence, from regularly certified teachers through ten- and five-year substitute certificate holders, ending with "A candidate who holds the one (1) year emergency certificate for substitute teaching" ${cite("16 KAR 2:030, Section 4", KY_KAR)}. We place degree-holding subs first in long or certified-level assignments and document the order for your office.</p>
<h3>State, FBI, and CA/N checks</h3>
<p>KRS 160.380 provides that "A superintendent shall require the following individuals to submit to a national and state criminal background check by the Department of Kentucky State Police and the Federal Bureau of Investigation and have a clear CA/N check, provided by the individual:" — a list that includes "Any adult who is permitted access to school grounds on a regularly scheduled and continuing basis pursuant to a written agreement for the purpose of providing services directly to a student or students as part of a school-sponsored program or activity;" The statute defines the letter: ""Clear CA/N check" means a letter from the Cabinet for Health and Family Services indicating that there are no administrative findings of child abuse or neglect relating to a specific individual;" ${cite("KRS 160.380", KY_160_380)}. FocusedEDU completes both before a substitute is presented.</p>
${whereWeStaff(
  "Kentucky",
  "We staff substitute programs for school districts across Kentucky, with recruiting built around Louisville, Lexington, and Northern Kentucky.",
  "That includes Jefferson County Public Schools in Louisville; Fayette County Public Schools in Lexington; Boone County and Kenton County in Northern Kentucky; Warren County around Bowling Green; Daviess County around Owensboro; and Hardin County around Elizabethtown. Because we work with one client per region, the first district to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute program lives or dies on day-to-day coverage. Our reference point is Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school that has worked with FocusedEDU since 2021, where our weekly-pay, app-based model keeps day-to-day substitute fill at 95%, a 40%+ improvement over the school's previous provider.")}
${forSubs("Kentucky", "With a high school diploma and a Kentucky district's job offer you can start on the one-year emergency certificate; with a bachelor's degree you qualify for the five-year certificate, which opens longer assignments. You will also need a Kentucky State Police and FBI background check and a clear CA/N letter, and we walk you through both.")}
${cta("Kentucky")}`,
    faqs: [
      {
        q: "What are the requirements to substitute teach in Kentucky?",
        a: "A Kentucky substitute certificate. The one-year emergency certificate requires a high school diploma or equivalency and verification of a job offer from a Kentucky district; the five-year certificate requires a bachelor's degree from an accredited institution; certified teachers can hold a ten-year certificate.",
      },
      {
        q: "How long can an emergency-certificate substitute cover one class in Kentucky?",
        a: "No more than 20 consecutive instructional days replacing the teacher of record. Under KRS 161.102, the one-year emergency certificate is also not valid for full-time employment as a substitute, and KDE limits it to the district that initiated the application.",
      },
      {
        q: "What background checks do Kentucky substitutes need?",
        a: "A national and state criminal background check by the Kentucky State Police and the FBI, plus a clear CA/N check — a letter from the Cabinet for Health and Family Services showing no administrative findings of child abuse or neglect — under KRS 160.380.",
      },
      {
        q: "Do Kentucky districts have to prefer certain substitutes?",
        a: "Yes. 16 KAR 2:030 sets a selection priority for temporary absences: regularly certified teachers first, then ten-year and five-year substitute certificate holders, and one-year emergency certificate holders last.",
      },
      fillRateFaq("Kentucky"),
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Tennessee"), sibling("Indiana"), sibling("Ohio"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Oregon ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-oregon",
    eyebrow: "Substitute teacher staffing · Oregon",
    h1: "Substitute Teacher Staffing in Oregon",
    metaTitle: "Substitute Teacher Staffing in Oregon",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Oregon districts and charters — TSPC substitute, restricted, and district substitute licenses, 10-day limits, and contractor fingerprinting handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Oregon school districts, education service districts, and charter schools. We recruit, fingerprint, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the TSPC substitute license that fits the assignment and fingerprinted as Oregon requires of school contractors and their employees.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Oregon classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Oregon" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "TSPC license type verified: Substitute Teaching, Restricted Substitute, or District Substitute",
      "Bachelor's degree plus a full license or completed Oregon preparation program for the standard Substitute Teaching License",
      "Consecutive days per assignment tracked against the 10-day limit on Restricted and District Substitute licenses",
      "Assignments on the standard license kept within one academic school year, with an Emergency Teaching License request prepared if needed",
      "Fingerprint-based criminal records check for contractor employees with direct, unsupervised student contact (ORS 326.603)",
      "Three-year license expiration and renewal tracked",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What Oregon schools need from a substitute partner",
        body: "Oregon's Teacher Standards and Practices Commission issues three substitute licenses, and the differences matter on the first morning. The standard Substitute Teaching License requires a bachelor's degree plus a full license or a completed Oregon teacher preparation program, and allows one assignment of up to a school year. The Restricted Substitute and District Substitute licenses need a sponsoring district and cap any single assignment at 10 consecutive days. A district that mixes them up either breaks a rule on day 11 or leaves a long leave uncovered.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Portland, Beaverton, Hillsboro, Salem-Keizer, and Eugene, districts draw on overlapping pools of licensed subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs Oregon substitute programs",
        body: "We record each Oregon substitute's TSPC license type, route standard-license holders to long assignments, and count consecutive days for Restricted and District Substitute holders so no one crosses the 10-day line. Every substitute we place is fingerprinted as Oregon requires of contractor employees with direct, unsupervised student contact. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="or-substitute-requirements">Oregon substitute teacher and clearance requirements</h2>
<p class="answer-lead">Oregon substitutes are licensed by the Teacher Standards and Practices Commission. The standard Substitute Teaching License requires a bachelor's degree plus a full license from another jurisdiction or a completed Oregon preparation program, is valid three years, and allows any one assignment to run up to one academic school year. The Restricted Substitute and District Substitute licenses depend on a sponsoring district and cap any single assignment at 10 consecutive days. Contractors and contractor employees with direct, unsupervised student contact are subject to fingerprint-based criminal records checks.</p>
<h3>The Substitute Teaching License</h3>
<p>TSPC's rule requires an applicant to "Hold a bachelor's degree or higher from an Approved Institution in the United States, or the foreign equivalent of such degree approved by the Commission," together with either completion of an Oregon educator preparation program or "A valid and active non-provisional teaching license from another NASDTEC jurisdiction valid for unrestricted full time teaching assignments." The license "is valid for three years and may be renewed continuously," and "The length of any one assignment may not exceed one academic school year;" where an assignment must run longer, "The Executive Director may approve the Emergency Teaching License upon proof of the district's emergency and may only issue the license for the amount of time to cover the emergency" ${cite("OAR 584-210-0140, Substitute Teaching License", OR_OAR)}.</p>
<h3>Restricted and District Substitute licenses: the 10-day limit</h3>
<p>For candidates without a full license, "The Restricted Substitute Teaching License requires district sponsorship," and "Any single assignment on the Restricted Substitute Teaching License may not exceed 10 days consecutively under any circumstances" ${cite("OAR 584-210-0150, Restricted Substitute Teaching License", OR_OAR)}. The newer District Substitute license "qualifies the teacher to accept substitute teaching assignments only within the sponsoring district"; one qualifying route is to "Have completed a minimum of one (1) year of experience as an Instructional Assistant, Educational Assistant, or other supporting role in a classroom as an employee of the sponsoring district," and again "Any single assignment on the District Substitute License may not exceed 10 days consecutively under any circumstances" ${cite("OAR 584-210-0151, District Substitute Teaching License", OR_OAR)}. Our credentialing system counts every assignment on these licenses and flags day 8.</p>
<h3>Fingerprinting for licensees and contractors</h3>
<p>TSPC may require fingerprints of license applicants for state and nationwide criminal records checks ${cite("ORS 342.223", "https://www.oregonlegislature.gov/bills_laws/ors/ors342.html")}. For contractors, Oregon's education statute covers "A school district or private school contractor, whether part-time or full-time, or an employee of a contractor, whether part-time or full-time, who has direct, unsupervised contact with students as determined by the district or private school." It provides that "Contractor employees may not be required to submit to fingerprinting until the contractor has been offered a contract," and that "A school district may not hire or continue to employ or contract with or allow the contractor to continue to assign a person to the school project if the person described in subsection (1) of this section has been convicted of a crime according to the provisions of ORS 342.143" ${cite("ORS 326.603", OR_326)}. FocusedEDU fingerprints every substitute as soon as your contract is offered, before any assignment.</p>
${whereWeStaff(
  "Oregon",
  "We staff substitute programs for school districts, education service districts, and charter schools across Oregon, from the Portland metro to the Willamette Valley and Central and Southern Oregon.",
  "That includes Portland Public Schools, David Douglas, and Reynolds; Beaverton and Hillsboro; Gresham-Barlow; Salem-Keizer Public Schools; Eugene 4J and Springfield; Bend-La Pine Schools; and Medford. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The question to put to any substitute partner is what share of absences it fills. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has filled 95% of day-to-day absences since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Oregon", "With a bachelor's degree and a full teaching license (or a completed Oregon preparation program) you qualify for TSPC's standard Substitute Teaching License; other candidates can qualify for a district-sponsored Restricted or District Substitute license, with a 10-consecutive-day limit per assignment. We arrange the fingerprinting Oregon requires before your first assignment.")}
${cta("Oregon")}`,
    faqs: [
      {
        q: "What license does a substitute teacher need in Oregon?",
        a: "A TSPC license. The standard Substitute Teaching License requires a bachelor's degree plus a non-provisional license from another jurisdiction or a completed Oregon preparation program; the Restricted Substitute and District Substitute licenses are district-sponsored alternatives.",
      },
      {
        q: "How long can an Oregon substitute stay in one assignment?",
        a: "It depends on the license. On the standard Substitute Teaching License, any one assignment may run up to one academic school year. On the Restricted Substitute and District Substitute licenses, any single assignment may not exceed 10 consecutive days under any circumstances.",
      },
      {
        q: "What is Oregon's District Substitute Teaching License?",
        a: "A TSPC license that qualifies the holder to substitute only within the sponsoring district. One route is a year of experience as an instructional or educational assistant in that district, and any single assignment is capped at 10 consecutive days.",
      },
      {
        q: "Do agency substitutes need fingerprinting in Oregon?",
        a: "Yes, when they have direct, unsupervised contact with students. ORS 326.603 covers school district contractors and contractor employees, allows fingerprinting once the contractor has been offered a contract, and bars a district from letting a contractor assign a person with a disqualifying conviction.",
      },
      fillRateFaq("Oregon"),
    ],
    related: [HUB, sibling("Washington"), sibling("California"), sibling("Nevada"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Oklahoma ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-oklahoma",
    eyebrow: "Substitute teacher staffing · Oklahoma",
    h1: "Substitute Teacher Staffing in Oklahoma",
    metaTitle: "Substitute Teacher Staffing in Oklahoma",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Oklahoma districts and charters — 135/145-day caps, SPED long-term sub training, OSBI/FBI fingerprints, and contractor felony searches handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Oklahoma school districts and charter schools. We recruit, fingerprint, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with OSBI and FBI fingerprint checks completed for the school year and every substitute's days tracked against Oklahoma's annual caps.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in an Oklahoma school",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Oklahoma" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "National criminal history record check (OSBI and FBI fingerprints) for the school year (70 O.S. § 5-142)",
      "Annual days tracked against the 135-day cap, or 145 days with a bachelor's degree or lapsed certificate (70 O.S. § 6-105)",
      "Your district's own same-assignment limit for uncertified substitutes applied",
      "SPED in-service training completed for uncertified long-term special education subs past 15 consecutive or 30 total days",
      "Teaching certificate and written contract verified for any monthly or annual substitute placement",
      "Felony search completed through the State Board for every assigned employee (70 O.S. § 6-101.48)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.weathington,
    sections: [
      {
        heading: "What Oklahoma schools need from a substitute partner",
        body: "Oklahoma regulates substitutes by the calendar. An uncertified sub can work at most 135 school days a year, 145 with a bachelor's degree or a lapsed certificate, and without limit with a valid certificate; each district sets its own cap for one assignment. Special education adds another line: an uncertified sub who stays in the same special education assignment past 15 consecutive or 30 total days must complete State Board training. A district without a day count for every sub finds out in April that its best long-term substitute is out of days.\n\nOklahoma law also says districts may contract with outside providers for the training and employment of substitute teachers. The day-to-day need is the same as anywhere: coverage confirmed before first bell, long-term substitutes, and special education substitutes and substitute paraprofessionals who keep IEP services running, in Oklahoma City, Tulsa, and the suburban districts that ring them.",
      },
      {
        heading: "How FocusedEDU staffs Oklahoma substitute programs",
        body: "We fingerprint every Oklahoma substitute for the OSBI and FBI check each school year, run the State Board felony search Oklahoma provides for contractor employees, and track every sub's days against the annual cap that matches their credential. For special education leaves, we flag day 10 so the state's in-service training is done before the 15-day line. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ok-substitute-requirements">Oklahoma substitute teacher and clearance requirements</h2>
<p class="answer-lead">Oklahoma caps how many days a substitute may work each school year by credential: 135 school days with none, 145 with a bachelor's degree or a lapsed or expired certificate, and no limit with a valid certificate, and each district sets its own limit for one assignment. Every substitute applicant needs a national, fingerprint-based criminal history record check for the school year. Districts may contract with outside providers for the training and employment of substitutes, and contractors may run a felony search on their assigned employees through the State Board of Education.</p>
<h3>Annual day caps and district assignment limits</h3>
<p>The substitute statute reads: "No substitute teacher shall be employed for a total period of time in excess of one hundred thirty-five (135) school days during a school year; or one hundred forty-five (145) school days during the school year if the substitute teacher holds a lapsed or expired certificate or has a bachelors level college degree; or no limit of school days during the school year if the substitute teacher holds a valid certificate." It adds: "Each school district shall adopt a policy which sets forth the maximum number of days a substitute teacher may be employed for the same assignment if the substitute teacher does not hold a valid certificate," and "A school district may request a waiver of the restrictions on total time a substitute teacher may be employed from the State Board of Education for a substitute teacher who does not hold a valid certificate." Longer engagements change the rules: "Any substitute or cadet teacher employed in any school system on a monthly or annual basis shall hold a certificate and have a written contract in the manner and under the same conditions as for regular teachers." The same section provides that "School districts in this state may contract with outside providers for the training and employment of substitute teachers" ${cite("70 O.S. § 6-105", OK_6_105)}.</p>
<h3>Special education long-term substitutes</h3>
<p>Under the same section, "any substitute teacher employed to teach special education for the same assignment for more than fifteen (15) consecutive or thirty (30) total school days during a school year who does not hold a valid certificate to teach special education shall be required to complete in-service training as prescribed by the State Board of Education," and "The training shall be provided at no cost to the substitute teacher" ${cite("70 O.S. § 6-105", OK_6_105)}. The State Department of Education adds that "The Long-Term Substitute cannot serve as the special education Teacher of Record (TOR)" ${cite("OSDE, Long-Term Substitutes in Special Education", "https://oklahoma.gov/education/services/special-education/staffing/long-term-substitutes-in-special-education.html")}, so a certified teacher of record has to remain on the caseload.</p>
<h3>Fingerprint checks and contractor felony searches</h3>
<p>"For any person applying for employment as a substitute teacher, a national criminal history record check shall be required for the school year," and "Any person applying for employment as a substitute teacher in more than one school district shall only be required to have one national criminal history record check." District policy "may permit temporary employment of prospective employees for a maximum of sixty (60) days pending receipt of results of national criminal history record check requests" ${cite("70 O.S. § 5-142", OK_5_142)}. OSDE notes that "These background checks are based on fingerprint checks processed through the Oklahoma State Bureau of Investigation and the Federal Bureau of Investigation" ${cite("OSDE, Background Checks and Fingerprinting Information", "https://oklahoma.gov/education/services/teacher-certification/background-checks-and-fingerprinting-information.html")}. For contractors, "A person or business having a written contract with a school or school district to perform work on a full-time or part-time basis that would otherwise be performed by school district employees may conduct a felony search of the employees of the person or entity who would be assigned that work through a request to the State Board of Education," and no such contractor "shall allow any employee to work on school premises if the employee is convicted in this state, the United States or another state of any felony offense unless ten (10) years has elapsed since the date of the criminal conviction" or the employee has been pardoned ${cite("70 O.S. § 6-101.48", "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=104097")}. FocusedEDU completes the fingerprint check and the felony search before every first assignment, so no one we place starts on a pending result.</p>
${whereWeStaff(
  "Oklahoma",
  "We staff substitute programs for school districts and charter schools across Oklahoma, with recruiting built around the Oklahoma City and Tulsa metros.",
  "That includes Oklahoma City Public Schools, Putnam City, Edmond, Moore, and Mid-Del; Tulsa Public Schools, Union, Broken Arrow, Jenks, and Owasso; Norman Public Schools; Lawton Public Schools; and Enid Public Schools. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Day-to-day fill rate is the number that tells you whether a substitute partner is working. Ours comes from Odyssey Public Charter School in Wilmington, Delaware, an existing client: since 2021, our weekly-pay, app-based substitute model has kept day-to-day coverage at a 95% fill rate there, a 40%+ improvement over the school's previous provider.")}
${forSubs("Oklahoma", "Every Oklahoma substitute needs a national, fingerprint-based criminal history check for the school year, which we arrange. How many days you can work depends on your credential: 135 a year with none, 145 with a bachelor's degree or a lapsed certificate, and no annual cap with a valid teaching certificate.")}
${cta("Oklahoma")}`,
    faqs: [
      {
        q: "How many days can a substitute teacher work in Oklahoma?",
        a: "Under 70 O.S. § 6-105, no more than 135 school days in a school year; 145 days if the substitute has a bachelor's degree or a lapsed or expired certificate; and no limit with a valid certificate. Each district also sets its own limit for one assignment for uncertified substitutes.",
      },
      {
        q: "What applies to long-term special education substitutes in Oklahoma?",
        a: "An uncertified substitute in the same special education assignment for more than 15 consecutive or 30 total school days must complete State Board in-service training, provided at no cost to the substitute. OSDE also states that a long-term substitute cannot serve as the special education teacher of record.",
      },
      {
        q: "Can Oklahoma districts use a staffing agency for substitutes?",
        a: "Yes. 70 O.S. § 6-105 provides that school districts may contract with outside providers for the training and employment of substitute teachers.",
      },
      {
        q: "What background check do Oklahoma substitutes need?",
        a: "A national criminal history record check for the school year under 70 O.S. § 5-142, based on OSBI and FBI fingerprints. A substitute applying in several districts needs only one national check, and contractors may run a felony search on their assigned employees through the State Board.",
      },
      fillRateFaq("Oklahoma"),
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost: if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [HUB, sibling("Texas"), sibling("Kansas"), sibling("Arkansas"), SPED_HUB, PARA_HUB, K12_HUB],
  },
];
