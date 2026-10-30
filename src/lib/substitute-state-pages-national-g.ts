/**
 * National substitute-staffing state pages, third wave, file 1 of 3:
 * Nebraska, New Mexico, Idaho, Montana, Wyoming. Same model and rules as
 * substitute-state-pages-national-a.ts and -d.ts: approved FocusedEDU facts
 * only, the 95% fill rate attributed to Odyssey in Wilmington, Delaware, no
 * clients, placements, or results claimed in these states.
 *
 * Every state rule below is quoted or paraphrased from the state's own page,
 * statute, or regulation, fetched and string-checked on 2026-10-30, and linked
 * inline. Where a state's primary sources did not settle a point (for example
 * an Idaho state substitute credential, or a Wyoming day limit), the page says
 * nothing about it rather than borrowing from a third party.
 *
 * None of these five states had a live K-12 posting on the job board on
 * 2026-10-30, so no "current openings" line appears here.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff } from "./substitute-state-pages-national-a";
import {
  TESTIMONIALS,
  fillRateFaq,
  sibling,
  SPED_HUB,
  PARA_HUB,
  K12_HUB,
  RELATED_HUB,
} from "./substitute-state-pages-national-d";

export const NATIONAL_WAVE3_UPDATED = "2026-10-30";

/** Shared FAQ answer for the one-client-per-region question. */
export const regionFaq = {
  q: "Will you also staff the district next to ours?",
  a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
};

/** Rule 21 is served by the Secretary of State's rules system; this is its public view of NDE's Title 92. */
const NE_RULES = "https://rules.nebraska.gov/rules?agencyId=24&titleId=58";
const NE_SUB = "https://www.education.ne.gov/tcert/substitute-teacher/";
const NE_LOCAL = "https://www.education.ne.gov/tcert/substitute-teacher/local-substitute-permit/";
const NE_DAYS = "https://www.education.ne.gov/bulletin/local-substitute-additional-days-2026-2027/";
const NE_814_01 = "https://nebraskalegislature.gov/laws/statutes.php?statute=79-814.01";
const NE_814_02 = "https://nebraskalegislature.gov/laws/statutes.php?statute=79-814.02";
const NE_880 = "https://nebraskalegislature.gov/laws/statutes.php?statute=79-880";
const NM_SUB = "https://www.srca.nm.gov/parts/title06/06.063.0010.html";
const NM_22 = "https://nmonesource.com/nmos/nmsa/en/4368/1/document.do";
const ID_130 = "https://legislature.idaho.gov/statutesrules/idstat/title33/t33ch1/sect33-130/";
const ID_512 = "https://legislature.idaho.gov/statutesrules/idstat/title33/t33ch5/sect33-512/";
const ID_IDAPA = "https://adminrules.idaho.gov/rules/current/08/080202.pdf";
const ID_SDE = "https://www.sde.idaho.gov/about-us/departments/educator-certification/background-investigation-check/";
const MT_716 =
  "https://rules.mt.gov/policy-library-documents/application/pdf/8502ea3695b4fae3273e2830d8374e49c94dc6dedf06f5d27f6669d977a5d02b";
const MT_323 = "https://mca.legmt.gov/bills/mca/title_0200/chapter_0030/part_0030/section_0230/0200-0030-0030-0230.html";
const MT_104 = "https://mca.legmt.gov/bills/mca/title_0200/chapter_0040/part_0010/section_0040/0200-0040-0010-0040.html";
const MT_111 = "https://mca.legmt.gov/bills/mca/title_0200/chapter_0040/part_0010/section_0110/0200-0040-0010-0110.html";
const WY_PTSB = "https://wyomingptsb.com/licensure/substitute-teaching/";
const WY_CH6 = "https://wyoleg.gov/AgencyRules/ARR25-073.pdf";
const WY_FP = "https://wyomingptsb.com/frequently-asked-questions/fingerprinting-and-background-checks/";
const WY_T7 = "https://wyoleg.gov/statutes/compress/title07.pdf";
const WY_T21 = "https://wyoleg.gov/statutes/compress/title21.pdf";

export const substituteStatePagesNationalG: ServicePage[] = [
  // ───────────────────────────── Nebraska ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-nebraska",
    eyebrow: "Substitute teacher staffing · Nebraska",
    h1: "Substitute Teacher Staffing in Nebraska",
    metaTitle: "Substitute Teacher Staffing in Nebraska",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Nebraska school systems — NDE substitute permits, the 90-day Local Substitute limit, additional-days requests, and FBI fingerprint checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Nebraska school districts and approved private schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a Nebraska teaching certificate or a Department of Education substitute permit, with every Local Substitute Permit holder's days counted against the 90-day limit in your school system.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Nebraska classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Nebraska" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Nebraska teaching certificate or NDE substitute permit (State, Local, or Paraprofessional Substitute) verified before a first assignment",
      "48 semester hours with education-related coursework confirmed for Local Substitute Permit applicants (92 NAC 21)",
      "Full-time days per school system counted against the Local Substitute Permit's 90-day limit, with your additional-days request prepared early",
      "Five-year permit expiration (September 30 of the fifth year) tracked",
      "Fingerprint and FBI criminal history check confirmed for applicants who have not lived in Nebraska for five continuous years",
      "Seven-year employer history kept ready for the 2027-28 hiring rule in Neb. Rev. Stat. 79-880",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What Nebraska schools need from a substitute partner",
        body: "Nebraska is strict about who may substitute and generous about how. Every substitute needs a teaching certificate or one of three Department of Education substitute permits, and the most common one, the Local Substitute Permit, comes with a ceiling: 90 full-time days in the same school system unless the Commissioner grants more. In a year the Department itself describes as a continued substitute shortage, the systems that plan for that ceiling keep their best subs through spring.\n\nThe daily need is the same everywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. Around Omaha and Lincoln, where Omaha Public Schools, Millard, Elkhorn, Papillion La Vista, and Lincoln Public Schools draw on overlapping pools, the permitted substitute who answers first is usually the one who gets the job.",
      },
      {
        heading: "How FocusedEDU staffs Nebraska substitute programs",
        body: "We verify each Nebraska substitute's certificate or permit before a first assignment, and our credentialing system counts full-time days per school system for every Local Substitute Permit holder, so your office files a request for additional days well before day 90 instead of losing a sub mid-semester. We also confirm the fingerprint and FBI check for applicants who arrive from out of state. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ne-substitute-requirements">Nebraska substitute teacher and clearance requirements</h2>
<p class="answer-lead">Every Nebraska substitute must hold a regular teaching certificate or one of three Nebraska Department of Education substitute permits. The Local Substitute Permit requires at least 48 semester hours of college credit with education-related coursework, is valid in every Nebraska school system for five years, and limits the holder to 90 full-time days in the same school system unless the Commissioner authorizes more. First-time applicants who have not lived in Nebraska for five continuous years submit fingerprints for a state and FBI criminal history check, and from the 2027-28 school year schools must also review an applicant's employment history before hiring anyone with regular student contact.</p>
<h3>Substitute permits and day limits</h3>
<p>The Department's substitute page states: "In Nebraska, you are required to hold either a regular certificate or one of the three types of substitute permits listed below" ${cite("Nebraska Dept. of Education, Substitute Teacher", NE_SUB)}. Under Rule 21, each Local Substitute applicant must "Have at least forty-eight (48) semester hours of college credit with credit in education-related coursework," and "The permit holder may substitute teach no more than ninety (90) full-time days in the same school system." The rule adds: "Additional days may be authorized by the Commissioner upon written request from the Nebraska school system that demonstrates a need for additional days." The Paraprofessional Substitute Teaching permit is requested in writing by a school system and valid only there, and "The permit holder may substitute teach no more than forty-five (45) full-time days in a school year and no more than five (5) of those days may be consecutive school days." The State Substitute permit is valid in all endorsement areas, but "A State Substitute permit holder may be employed to teach by a school system only on a non-contractual basis" ${cite("92 Neb. Admin. Code ch. 21", NE_RULES)}. NDE adds that "A Local Substitute Permit is a 5-year permit and expires September 30th in the fifth year following the year of issuance" ${cite("NDE, Local Substitute Permit", NE_LOCAL)}, and its 2026-27 notice on additional days opens: "The Nebraska Department of Education (NDE) is aware of the continued shortage of substitute teachers in school systems this school year" ${cite("NDE, Local Substitute Additional Days 2026-2027", NE_DAYS)}. We count each Local Substitute Permit holder's days in your system and prepare the additional-days request before the 90th day.</p>
<h3>Fingerprints, conditional permits, and the 2027-28 hiring rule</h3>
<p>Rule 21 requires fingerprints from each applicant "who is seeking the first issuance of a Nebraska certificate or permit and who has not been a resident of Nebraska for at least five (5) continuous years immediately preceding the date of application" ${cite("92 Neb. Admin. Code ch. 21", NE_RULES)}. The statute's check includes "transmittal of the applicant's fingerprints to the Federal Bureau of Investigation for a national criminal history record information check," and "The commissioner may deny issuance of a certificate or permit to any applicant who has a felony conviction or who has any misdemeanor conviction involving abuse, neglect, or sexual misconduct" ${cite("Neb. Rev. Stat. § 79-814.01", NE_814_01)}. While results are pending, an applicant "shall be issued a conditional permit prior to receipt by the commissioner of criminal history record information of the applicant, which conditional permit shall be valid for up to one year," provided the applicant signs a statement identifying every prior conviction and meets the statute's other conditions ${cite("Neb. Rev. Stat. § 79-814.02", NE_814_02)}. A 2026 law adds a hiring step: "Beginning with the 2027-28 school year, no school board of a school district or governing authority of an approved or accredited private, denominational, or parochial school shall hire any person to serve in a position which involves regular contact with students unless" it first collects the applicant's employers and schools from the past seven years, a release for their records, and a written statement on any child abuse or sexual misconduct findings, and checks them; a school a school "may employ or contract with an applicant on a provisional basis for a period not to exceed ninety days pending review" ${cite("Neb. Rev. Stat. § 79-880", NE_880)}. We keep each substitute's seven-year employer history on file so the records are ready when the rule takes effect.</p>
${whereWeStaff(
  "Nebraska",
  "We staff substitute programs for school districts and approved private schools across Nebraska, with recruiting built around the Omaha and Lincoln metros and the cities along I-80.",
  "That includes Omaha Public Schools, Millard Public Schools, and Elkhorn Public Schools in Omaha; Lincoln Public Schools; Papillion La Vista Community Schools and Bellevue Public Schools in Sarpy County; and Grand Island, Kearney, and Norfolk Public Schools. Because we work with one client per region, the first district to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute permit tells you who may teach; a fill rate tells you whether someone shows up. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Nebraska", "With at least 48 semester hours of college credit, including education-related coursework, you can apply for a Local Substitute Permit, valid in every Nebraska school system for five years. If you have not lived in Nebraska for five continuous years, you will also submit fingerprints for a state and FBI check, and a conditional permit can be issued while it is pending.")}
${cta("Nebraska")}`,
    faqs: [
      {
        q: "Do substitute teachers in Nebraska need a certificate or permit?",
        a: "Yes. The Nebraska Department of Education requires a substitute to hold either a regular certificate or one of three substitute permits: the State Substitute, Local Substitute, or Paraprofessional Substitute Teaching permit.",
      },
      {
        q: "What are the requirements for a Nebraska Local Substitute Permit?",
        a: "Under 92 NAC 21, an applicant must have at least 48 semester hours of college credit with credit in education-related coursework. The permit is valid for five years and expires September 30 of the fifth year after issuance.",
      },
      {
        q: "How many days can a Local Substitute Permit holder teach in one Nebraska school system?",
        a: "No more than 90 full-time days in the same school system. The Commissioner may authorize additional days on a written request from the school system that demonstrates the need, and NDE has published a 2026-27 notice on those requests.",
      },
      {
        q: "Do Nebraska substitutes need a fingerprint check?",
        a: "Applicants seeking a first Nebraska certificate or permit who have not lived in Nebraska for five continuous years submit fingerprints for a state and FBI criminal history check. A conditional permit valid for up to one year can be issued while results are pending, if the applicant signs a statement identifying every prior conviction and meets the statute's other conditions.",
      },
      fillRateFaq("Nebraska"),
      regionFaq,
    ],
    related: [HUB, sibling("Iowa"), sibling("Kansas"), sibling("South Dakota"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── New Mexico ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-new-mexico",
    eyebrow: "Substitute teacher staffing · New Mexico",
    h1: "Substitute Teacher Staffing in New Mexico",
    metaTitle: "Substitute Teacher Staffing in New Mexico",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for New Mexico districts and charters — PED substitute certificates, fingerprint checks for contractors' employees, and the four-week parent notice handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for New Mexico school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a Public Education Department substitute teacher certificate or New Mexico teaching license and cleared through the fingerprint-based criminal history check state law requires of contractors' employees.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a New Mexico school",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "New Mexico" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "PED substitute teacher certificate (or New Mexico teaching or administrative license) verified before a first assignment",
      "Age checked against the grade band: 18 for K-8, 21 for grades 9-12 (6.63.10 NMAC)",
      "High school diploma or equivalency confirmed, plus the qualification route the certificate was issued under",
      "Certificate term tracked: three years for an initial certificate, nine for a renewal",
      "Fingerprint-based state and federal criminal history check for contractor employees under NMSA 22-10A-5",
      "Placement dates and hours logged by classroom, so your office can track subs as 6.63.10 NMAC requires",
      "Consecutive weeks per class tracked so your office can send the four-week parent notice on time",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.weathington,
    sections: [
      {
        heading: "What New Mexico schools need from a substitute partner",
        body: "New Mexico runs one statewide substitute credential. Anyone who substitutes without a New Mexico teaching or administrative license needs a Public Education Department substitute teacher certificate, which works in any district or charter school in the state, and the age floor rises from 18 to 21 for high school classrooms. The state's background-check law also reaches past district payrolls: governing authorities must require criminal history checks on contractors and contractors' employees who may have unsupervised contact with students.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Albuquerque, Rio Rancho, Las Cruces, and Santa Fe, and across the long distances between New Mexico's smaller districts, a certified, cleared substitute who will actually drive to the building is the scarce resource.",
      },
      {
        heading: "How FocusedEDU staffs New Mexico substitute programs",
        body: "We confirm every New Mexico substitute's PED certificate or license, match high school assignments to subs who meet the age 21 rule, and complete the fingerprint-based criminal history check before a first assignment. Our credentialing system logs each placement by classroom, date, and hours, the tracking New Mexico requires district substitute policies to support, and counts consecutive weeks so your office can send the four-week parent notice on time. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="nm-substitute-requirements">New Mexico substitute teacher and clearance requirements</h2>
<p class="answer-lead">New Mexico requires anyone who substitutes without a New Mexico teaching or administrative license to hold a substitute teacher certificate from the Public Education Department, valid in any public school district or charter school in the state. Applicants must be at least 18 to teach grades K-8 and 21 to teach grades 9-12, hold a high school diploma or equivalency, and meet one of the rule's qualification routes; initial applicants pass a fingerprint-based background check. State law also requires governing authorities to run criminal history checks on contractors and contractors' employees who may have unsupervised contact with students, and to notify parents when a substitute teaches a class for longer than four consecutive weeks.</p>
<h3>The substitute teacher certificate</h3>
<p>The PED rule provides that "any person seeking to perform services as a substitute teacher must hold a certificate authorizing that person to perform the duties of a substitute teacher," and "Such certificates authorize the substitute teacher to work as a substitute teacher in any public school district or charter school in New Mexico." Initial applicants "shall have attained eighteen (18) years of age for those seeking to perform instructional services in grades K-8, and twenty-one (21) years of age for those seeking to perform instructional services in grades 9-12, and have earned a high school diploma or high school diploma equivalency." The qualification routes include having "completed at least 60 hours of college-credit courses in a regionally accredited college." On term, "An initial substitute teacher certificate is valid for three (3) years" and "A renewed substitute teacher certificate is valid for nine (9) years." Licensed educators are exempt: "No person holding valid New Mexico teaching or administrative licensure is required to obtain substitute teacher certification in order to perform instructional services as a substitute teacher." Districts that use substitutes must adopt policies that include "guidelines that permit the tracking of a substitute by specific classroom placement and by dates and hours in placement" ${cite("6.63.10 NMAC", NM_SUB)}. Our credentialing system logs every placement that way.</p>
<h3>Fingerprint checks, contractors included</h3>
<p>As a condition of the certificate, "all applicants for such initial certification shall submit to a fingerprint-based background check" ${cite("6.63.10.9 NMAC", NM_SUB)}. The School Personnel Act requires that "An applicant for licensure from the department shall undergo a state and federal criminal history record check," and it reaches contract staff directly: "Governing authorities shall develop policies and procedures to require criminal history record checks on an applicant who has been offered employment or who applies to be a school volunteer or works for the public school as a contractor or a contractor's employee and who may have unsupervised contact with children or students on school premises." The cost can follow the contractor: "A school volunteer, contractor or contractor's employee may be required to pay for the cost of obtaining a criminal history record check." Reporting runs both ways: "A superintendent shall report immediately to the department any known conviction of any felony or misdemeanor involving moral turpitude of school district personnel, a school employee, a school volunteer, a contractor or a contractor's employee," and for the list the department keeps of those reports, "The department shall update that list each month. The department shall provide that list to a governing authority upon request" ${cite("NMSA 1978 § 22-10A-5", NM_22)}. FocusedEDU completes the fingerprint check for every substitute before a first assignment.</p>
<h3>The four-week parent notice</h3>
<p>New Mexico sets no day cap on a certified substitute, but long assignments trigger a notice: "A local superintendent shall give written notice to the parents of those students who are being taught for longer than four consecutive weeks by a substitute teacher or by a person who is not qualified to teach the grade or subject" ${cite("NMSA 1978, ch. 22", NM_22)}. We count consecutive weeks per class and flag the notice date for your office in advance.</p>
${whereWeStaff(
  "New Mexico",
  "We staff substitute programs for school districts and charter schools across New Mexico, with recruiting built around Albuquerque and the state's other population centers.",
  "That includes Albuquerque Public Schools and Rio Rancho Public Schools; Las Cruces Public Schools and the Gadsden Independent School District in the south; Santa Fe Public Schools; Farmington Municipal Schools in the Four Corners; and Roswell Independent and Hobbs Municipal Schools in the southeast. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The test of a substitute partner is how many absences it covers. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has covered 95% of day-to-day absences, a 40%+ improvement over the school's previous provider.")}
${forSubs("New Mexico", "You will need a PED substitute teacher certificate unless you already hold a New Mexico teaching or administrative license: at least 18 for grades K-8 or 21 for grades 9-12, a high school diploma or equivalency, one of the rule's qualification routes, and a fingerprint-based background check, which we help you complete.")}
${cta("New Mexico")}`,
    faqs: [
      {
        q: "Do substitute teachers in New Mexico need a certificate?",
        a: "Yes, unless they hold a valid New Mexico teaching or administrative license. Under 6.63.10 NMAC, anyone substituting must hold a Public Education Department substitute teacher certificate, which authorizes work in any public school district or charter school in New Mexico.",
      },
      {
        q: "What are the age and education requirements to substitute in New Mexico?",
        a: "Initial applicants must be at least 18 to teach grades K-8 and at least 21 to teach grades 9-12, must hold a high school diploma or equivalency, and must meet one of the rule's qualification routes, which include at least 60 college-credit hours from a regionally accredited college.",
      },
      {
        q: "Do staffing-agency substitutes need a background check in New Mexico?",
        a: "Yes. NMSA 22-10A-5 requires governing authorities to adopt policies requiring criminal history record checks on anyone who works for the public school as a contractor or a contractor's employee and may have unsupervised contact with students. A contractor or its employee may be required to pay for the check.",
      },
      {
        q: "How long is a New Mexico substitute certificate valid?",
        a: "An initial substitute teacher certificate is valid for three years, and a renewed certificate is valid for nine years.",
      },
      fillRateFaq("New Mexico"),
      regionFaq,
    ],
    related: [HUB, sibling("Arizona"), sibling("Colorado"), sibling("Texas"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Idaho ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-idaho",
    eyebrow: "Substitute teacher staffing · Idaho",
    h1: "Substitute Teacher Staffing in Idaho",
    metaTitle: "Substitute Teacher Staffing in Idaho",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Idaho districts and charters — fingerprint-based criminal history checks, the statewide substitute and contractor lists, and five-year renewals handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Idaho school districts and public charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted for the state, FBI, and sex offender registry check Idaho requires of substitute staff and contractors with unsupervised student contact.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Idaho classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Idaho" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Fingerprint-based criminal history check through the Idaho Department of Education and Idaho State Police, including the FBI and the Idaho sex offender registry",
      "Fingerprints submitted before a first assignment, well inside the five-day statutory window (Idaho Code 33-512)",
      "Statewide substitute list status and the five-year re-check date tracked",
      "Statewide contractor list status tracked for staff who provide student services",
      "Felony disqualifiers listed in Idaho Code 33-1208(2) screened before a candidate is presented",
      "A new check completed after any break in service, as IDAPA 08.02.02 requires",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.foedisch,
    sections: [
      {
        heading: "What Idaho schools need from a substitute partner",
        body: "Idaho's statewide substitute rules center on one gate: the criminal history check. State law covers substitute staff and everyone else with unsupervised contact with students, defines a substitute as anyone paid a substitute wage for even a single day, and sets a five-day deadline for fingerprints. The Department of Education keeps statewide substitute and contractor lists, each on a five-year re-check cycle, so a cleared substitute can move between districts without starting over.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In the Treasure Valley, where West Ada, Boise, Nampa, and Caldwell have grown fast, and in Idaho Falls, Pocatello, Coeur d'Alene, and Twin Falls, the substitute who is already cleared and on the list is the one who can start tomorrow.",
      },
      {
        heading: "How FocusedEDU staffs Idaho substitute programs",
        body: "We fingerprint every Idaho substitute before a first assignment, not within the five days the statute allows, and we track each person's place on the statewide substitute or contractor list and the date the five-year re-check comes due. After any break in service we run a new check, as the State Board's rule requires. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="id-substitute-requirements">Idaho substitute teacher and clearance requirements</h2>
<p class="answer-lead">Idaho requires a fingerprint-based criminal history check, run by the Idaho Department of Education with the Idaho State Police, for substitute staff and for all individuals who have unsupervised contact with students in a K-12 setting. Anyone paid a substitute teacher wage for one day or more counts as a substitute and must be fingerprinted no later than five days after starting. A check carries across Idaho districts for five years, the Department keeps a statewide substitute list on a five-year re-check cycle, and the State Board's rules extend the check to contractors with unsupervised student contact, who sit on a statewide contractor list on the same cycle.</p>
<h3>Who must be checked</h3>
<p>Idaho's statute directs the Department to run checks on a list that includes "certificated and noncertificated employees, all applicants for certificates pursuant to chapter 12, title 33, Idaho Code, substitute staff," and others, "and on all individuals who have unsupervised contact with students in a K-12 setting." "The criminal history check shall be based on a completed ten (10) finger fingerprint card or scan and shall include, at a minimum, the following state and national databases:" the Idaho Bureau of Criminal Identification, the FBI, and the statewide sex offender register ${cite("Idaho Code § 33-130", ID_130)}. The district-duties statute adds that the check "shall include but shall not be limited to a check of the Idaho sex offender central registry," and defines the term broadly: "For the purposes of criminal history checks, a substitute teacher is any individual who temporarily replaces a certificated classroom educator and is paid a substitute teacher wage for one (1) day or more during a school year." Anyone convicted of a felony listed in section 33-1208(2) "shall not be hired" ${cite("Idaho Code § 33-512", ID_512)}.</p>
<h3>Deadlines, portability, and the statewide lists</h3>
<p>Fingerprints are due "no later than five (5) days following the first day of employment or unsupervised contact with students in a K-12 setting, whichever is sooner." A substitute "shall not be required to undergo an additional criminal history check at the request of any other district in which he is employed as a substitute if the teacher has obtained a criminal history check within the previous five (5) years," and "To remain on the statewide substitute teacher list maintained by the state department of education, the substitute teacher shall undergo a criminal history check every five (5) years" ${cite("Idaho Code § 33-512", ID_512)}. The Department explains the list this way: "Only one district needs to sign the form to add you to the list, which allows you to be a substitute teacher in any Idaho district" ${cite("Idaho Dept. of Education, Background Investigation Check", ID_SDE)}.</p>
<h3>Contractors with student contact</h3>
<p>The State Board's rule names contract staff among those who must be checked: "Contractors who have unsupervised contact with students in a public K-12 setting, including contractors who are providing student services;" and it resets the clock after time away: "When an employee returns to any LEA, private or parochial school, or contractor after a break in service, a new background investigation check must be completed pursuant to Section 33-130, Idaho Code" ${cite("IDAPA 08.02.02.075", ID_IDAPA)}. The Department keeps contractors on their own list: "Contractors remain on the statewide contractor list for five years from the fingerprint card processing date and must submit a new one after the five-year time period in order to remain on the list" ${cite("Idaho Dept. of Education, Background Investigation Check", ID_SDE)}. FocusedEDU completes the check before a first assignment and tracks every re-check date.</p>
${whereWeStaff(
  "Idaho",
  "We staff substitute programs for school districts and public charter schools across Idaho, with recruiting built around the Treasure Valley and the state's other regional centers.",
  "That includes the West Ada, Boise, and Kuna school districts around Boise and Meridian; the Nampa, Caldwell, and Vallivue school districts in Canyon County; Idaho Falls School District 91 and Bonneville Joint School District 93; Pocatello/Chubbuck School District 25; and the Coeur d'Alene and Twin Falls school districts. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Ask a substitute partner what share of absences it fills, and where it measured that. Our answer comes from an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Idaho", "Every Idaho substitute completes a fingerprint-based criminal history check, which we arrange before your first assignment. Once you are on the statewide substitute list, your check carries to other Idaho districts for five years.")}
${cta("Idaho")}`,
    faqs: [
      {
        q: "Who needs a criminal history check to work in an Idaho school?",
        a: "Idaho Code 33-130 covers certificated and noncertificated employees, certificate applicants, substitute staff, and all individuals who have unsupervised contact with students in a K-12 setting. The fingerprint-based check includes state and national databases, and Idaho Code 33-512 adds the Idaho sex offender central registry.",
      },
      {
        q: "When must an Idaho substitute be fingerprinted?",
        a: "No later than five days after the first day of employment or unsupervised contact with students, whichever is sooner. For this purpose, anyone paid a substitute teacher wage for one day or more in a school year is a substitute teacher.",
      },
      {
        q: "Does an Idaho substitute need a new check for each district?",
        a: "No. Under Idaho Code 33-512, a substitute who obtained a check within the previous five years does not need another at the request of a different district, and substitutes on the statewide list are re-checked every five years.",
      },
      {
        q: "Do Idaho's background-check rules cover contractors?",
        a: "Yes. IDAPA 08.02.02.075 requires checks for contractors who have unsupervised contact with students in a public K-12 setting, and the Department of Education keeps contractors on a statewide list for five years from fingerprint processing.",
      },
      fillRateFaq("Idaho"),
      regionFaq,
    ],
    related: [HUB, sibling("Utah"), sibling("Oregon"), sibling("Montana"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Montana ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-montana",
    eyebrow: "Substitute teacher staffing · Montana",
    h1: "Substitute Teacher Staffing in Montana",
    metaTitle: "Substitute Teacher Staffing in Montana",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Montana districts — the 35-consecutive-day rule, nonlicensed-sub training, fingerprint checks, and emergency authorizations handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Montana school districts. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted for the national background check Montana requires before anyone has unsupervised contact with students, with every long assignment tracked against the 35-consecutive-day line.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Montana classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Montana" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Montana license verified where a sub holds one, so your district can give licensed subs the preference ARM 10.55.716 requires",
      "High school diploma or GED passing score confirmed for nonlicensed substitutes",
      "At least three hours of board-approved substitute training documented for nonlicensed substitutes",
      "Fingerprint-based state and federal background check completed before employment",
      "Consecutive teaching days per position tracked against the 35-day limit",
      "Emergency authorization paperwork prepared if your board declares no licensed teacher is available (MCA 20-4-111)",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.murphyRichardson,
    sections: [
      {
        heading: "What Montana schools need from a substitute partner",
        body: "Montana lets districts use substitutes without a teaching license, with conditions attached. Licensed subs get preference, a nonlicensed sub needs a high school diploma or GED and at least three hours of training, and the district must run a fingerprint-based background check before the first day. The hard line is time: a substitute may carry a teacher's position for 35 consecutive teaching days, after which the district needs a licensed teacher under contract or an emergency authorization.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. From Billings and Missoula to Bozeman, Great Falls, Helena, and Kalispell, Montana districts recruit from small pools across long distances, which makes every cleared, trained sub worth keeping.",
      },
      {
        heading: "How FocusedEDU staffs Montana substitute programs",
        body: "We fingerprint every Montana substitute for the state and federal check before a first assignment, document each nonlicensed sub's diploma and training, and flag licensed subs so your district can give them the preference the rule requires. Our credentialing system counts consecutive teaching days per position, so your office knows well before day 35 whether to put a licensed teacher under contract or prepare an emergency authorization request. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="mt-substitute-requirements">Montana substitute teacher and clearance requirements</h2>
<p class="answer-lead">Montana does not require a substitute to hold a teaching license, but districts must give preference to licensed substitutes. A nonlicensed substitute must have a high school diploma or a passing score on the general education development (GED) assessment, complete at least three hours of training approved by the local board, and pass a fingerprint-based background check before employment. A substitute may cover an absent teacher's position for up to 35 consecutive teaching days; after that, the district places a licensed teacher under contract or declares that none is available and pursues an emergency authorization. Montana law also requires a fingerprint-based national background check before anyone, regardless of employment status with the district, has unsupervised contact with students.</p>
<h3>Who can substitute, and for how long</h3>
<p>The Board of Public Education's rule allows that when a licensed teacher is temporarily unable to teach, "substitute teachers may be employed to carry on the duties of that teacher's position for a period not to exceed 35 consecutive teaching days. Such substitutes need not hold a current license, but preference shall be given to those substitutes who are properly licensed." For nonlicensed subs: "Any nonlicensed substitute teacher must have received a high school diploma or have attained a passing score on the general education development assessment," and "Any nonlicensed substitute teacher shall complete a minimum of three hours of training, as approved by the local board of trustees." At the time limit, "If the absence of the regular, licensed or authorized teacher continues for more than 35 consecutive teaching days, the substitute may be placed under contract if licensed or the local board of trustees shall place a licensed teacher under contract," and "If the local board of trustees makes a written declaration to the Superintendent of Public Instruction that no licensed teacher is available, the district shall pursue the employment of a teacher authorized under the provisions of ARM 10.57.107" ${cite("ARM 10.55.716", MT_716)}. The statute sets the emergency route: "A district may request from the superintendent of public instruction an emergency authorization of employment for a person who is not the holder of a valid Montana teacher or specialist certificate," and "Emergency authorization of employment of a person is valid for the school fiscal year identified on the authorization" ${cite("MCA 20-4-111", MT_111)}. We count consecutive teaching days per position and flag day 35 for your office well ahead.</p>
<h3>Fingerprint checks, regardless of employer</h3>
<p>"A district that employs a nonlicensed substitute teacher must conduct a fingerprint-based background check of that individual," and "The district shall not employ the nonlicensed substitute teacher until state and federal authorities have reported the results of the background check or until the district has conducted a reference check of the individual" ${cite("ARM 10.55.716", MT_716)}. Licensed teachers clear a similar bar at licensure: the applicant "is of good moral and professional character and has completed a fingerprint-based national criminal history background check pursuant to the educator licensure policies of the board of public education" ${cite("MCA 20-4-104", MT_104)}. District trustees must also "adopt a student protection policy requiring that prior to the district allowing an individual, regardless of employment status with the district, unsupervised contact with students while in school, at a school-sponsored activity, or in transit to a school-sponsored activity:" either "the individual has completed a fingerprint-based national criminal history background check pursuant to the educator licensure policies of the board of public education; or" the individual has submitted fingerprint information to the Montana Department of Justice and "the trustees, the superintendent of the district, or another individual designated by the trustees has reviewed the results of the background check" ${cite("MCA 20-3-323", MT_323)}. FocusedEDU completes the fingerprint check before a first assignment, so the results are ready for your district's review.</p>
${whereWeStaff(
  "Montana",
  "We staff substitute programs for school districts across Montana, with recruiting built around the state's largest cities and the districts between them.",
  "That includes Billings Public Schools, Missoula County Public Schools, Great Falls Public Schools, Bozeman Public Schools, Helena Public Schools, Kalispell Public Schools, and Butte School District No. 1. Because we work with one client per region, the first district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("What matters most in a substitute partner is how often the classroom is covered. Our benchmark is an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has kept day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Montana", "You do not need a teaching license to substitute in Montana. A high school diploma or GED, at least three hours of board-approved training, and a fingerprint-based background check, which we arrange, are the starting points; licensed teachers get preference and can stay past 35 days under contract.")}
${cta("Montana")}`,
    faqs: [
      {
        q: "Do you need a teaching license to substitute in Montana?",
        a: "No. ARM 10.55.716 says substitutes need not hold a current license, though districts must give preference to properly licensed substitutes. A nonlicensed substitute must have a high school diploma or a passing score on the general education development assessment and complete at least three hours of board-approved training.",
      },
      {
        q: "How long can a substitute cover one teacher's position in Montana?",
        a: "Up to 35 consecutive teaching days. After that, a licensed substitute may be placed under contract, or the board must place a licensed teacher under contract or declare in writing that none is available and pursue an emergency authorization.",
      },
      {
        q: "Do Montana substitutes need a fingerprint check?",
        a: "Yes. A district employing a nonlicensed substitute must conduct a fingerprint-based background check before employment, and MCA 20-3-323 requires a student protection policy covering anyone with unsupervised student contact, regardless of employment status with the district.",
      },
      {
        q: "What is an emergency authorization of employment in Montana?",
        a: "Under MCA 20-4-111, a district may ask the Superintendent of Public Instruction to authorize employment of a person who does not hold a valid Montana teacher or specialist certificate. The authorization is valid for the school fiscal year it names.",
      },
      fillRateFaq("Montana"),
      regionFaq,
    ],
    related: [HUB, sibling("Idaho"), sibling("Wyoming"), sibling("North Dakota"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Wyoming ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-wyoming",
    eyebrow: "Substitute teacher staffing · Wyoming",
    h1: "Substitute Teacher Staffing in Wyoming",
    metaTitle: "Substitute Teacher Staffing in Wyoming",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Wyoming school districts — PTSB Substitute Teacher Permits, the 60-hour and in-service routes, and DCI fingerprint checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Wyoming school districts. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a Professional Teaching Standards Board Substitute Teacher Permit backed by the fingerprint background check the board requires before it issues one.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Wyoming classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Wyoming" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "PTSB Substitute Teacher Permit verified, with its five-year expiration tracked",
      "High school diploma or equivalency confirmed, plus 60 semester hours or the 24-hour in-service route",
      "Classroom observation hours (10 at each level) documented for subs on the in-service route",
      "US and Wyoming Constitution exams confirmed",
      "Fingerprints processed through the Wyoming Division of Criminal Investigation (DCI) before the permit issues",
      "Renewal credit (two semester hours or 28 PD hours) tracked before the permit expires",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.porterLinen,
    sections: [
      {
        heading: "What Wyoming schools need from a substitute partner",
        body: "Wyoming puts every substitute through the state's Professional Teaching Standards Board. A Substitute Teacher Permit is required, it lasts five years, and the board will not issue one until a fingerprint background check is on file. The qualifying routes are practical: 60 college semester hours, or a high school diploma plus in-service training and classroom observation, which keeps the door open for capable people in towns without a college nearby.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. Across Cheyenne, Casper, Gillette, Laramie, and Rock Springs, Wyoming districts cover long distances with small pools, and a permitted substitute who is ready to go is worth a great deal.",
      },
      {
        heading: "How FocusedEDU staffs Wyoming substitute programs",
        body: "We confirm each Wyoming substitute's PTSB permit and qualifying route before a first assignment, help new subs through fingerprinting and the permit application, and track every permit's five-year expiration and renewal credits so no one lapses mid-year. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="wy-substitute-requirements">Wyoming substitute teacher and clearance requirements</h2>
<p class="answer-lead">To substitute teach in Wyoming you need a Substitute Teacher Permit from the Professional Teaching Standards Board (PTSB), valid for five years and renewable. A Classroom Substitute Permit requires a high school diploma or equivalency plus either 60 semester hours at an accredited institution or 24 clock hours of in-service training and 30 clock hours of classroom observation across the elementary, middle, and high school levels. Applicants submit fingerprints, which PTSB forwards to the state's Division of Criminal Investigation (DCI), and state law bars the board from issuing a certificate until the background check is on file.</p>
<h3>The Substitute Teacher Permit</h3>
<p>PTSB states: "To substitute teach in Wyoming, you must apply for a Substitute Teacher Permit. This permit is valid for five years and is eligible for renewal." Its checklist includes "Successfully complete the US and Wyoming Constitution exams" and "Submit fingerprints and receive a clear background check," and for renewal, "In order to renew a substitute teacher permit, you must have earned two (2) semester hours of transcript credit or 28 hours of other professional development credit as approved by PTSB and submit a Renewal Application to PTSB before the expiration of your current permit" ${cite("Wyoming PTSB, Substitute Teaching", WY_PTSB)}. The board's permit rules require an applicant to "possess a high school diploma or a high school equivalency certificate; and" either "complete a minimum of sixty (60) semester hours at an accredited institution of higher education; or" "complete twenty-four (24) clock hours of in-service to assure competency in:" a list of classroom skills, and on that route to "complete an additional thirty (30) clock hours of observation to qualify for a Classroom Substitute Permit at all grade levels; ten (10) clock hours of classroom observation at each level is required (elementary, junior high/middle, and high school)." Retired teachers have their own route: "A Lifetime Substitute Permit may be issued to a previously licensed teacher who held a current and valid license at the time of retirement" ${cite("PTSB Rules ch. 6 (2025)", WY_CH6)}. State law ties pay to the credential: "no person shall teach or supervise in a public school in this state and receive compensation therefor out of any public fund who at the time of rendering such services is not a holder of or a candidate and qualified for a certificate or permit" ${cite("Wyo. Stat. tit. 21", WY_T21)}.</p>
<h3>Fingerprints and background checks</h3>
<p>PTSB explains the process: "Upon submission of the fingerprint cards to PTSB, they are forwarded to the Wyoming Department of Criminal Investigation (DCI) for processing," and out-of-state reports do not transfer: "You will have to be re-fingerprinted for Wyoming per state statute. PTSB cannot accept background reports from other agencies" ${cite("Wyoming PTSB, Fingerprinting and Background Checks", WY_FP)}. The certification statute provides that "No certification shall be issued under this section until a criminal history background check has been filed with and received by the board," and school districts must "Request the fingerprints of any employee initially hired by a school district on or after July 1, 1996, who may have access to minors in the course of the employee's employment" ${cite("Wyo. Stat. tit. 21", WY_T21)}. The criminal history statute lists among those covered "Applicants for initial certification by the professional teaching standards board and employees initially hired by a school district on or after July 1, 1996, who may have access to minors in the course of their employment" ${cite("Wyo. Stat. § 7-19-201", WY_T7)}. Every FocusedEDU substitute in Wyoming holds a PTSB permit, so the fingerprint check is complete before a first assignment.</p>
${whereWeStaff(
  "Wyoming",
  "We staff substitute programs for school districts across Wyoming, with recruiting built around the state's larger cities and the county districts that serve them.",
  "That includes Laramie County School District #1 in Cheyenne, Natrona County School District #1 in Casper, Campbell County School District #1 in Gillette, Albany County School District #1 in Laramie, Sweetwater County School District #1 in Rock Springs, Sheridan County School District #2, and Uinta County School District #1 in Evanston. Because we work with one client per region, the first district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("A permit is the minimum; coverage is the result. Our coverage is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Wyoming", "You will need a PTSB Substitute Teacher Permit: a high school diploma or equivalency plus 60 college semester hours, or the in-service and observation route, the US and Wyoming Constitution exams, and fingerprints for a Wyoming background check, which we help you complete. Retired Wyoming teachers can apply for a Lifetime Substitute Permit.")}
${cta("Wyoming")}`,
    faqs: [
      {
        q: "Do you need a permit to substitute teach in Wyoming?",
        a: "Yes. The Professional Teaching Standards Board requires a Substitute Teacher Permit, valid for five years and eligible for renewal with two semester hours of transcript credit or 28 hours of approved professional development.",
      },
      {
        q: "What are the requirements for a Wyoming substitute permit?",
        a: "A high school diploma or equivalency plus either 60 semester hours at an accredited institution or 24 clock hours of in-service training plus 30 clock hours of classroom observation, 10 at each level, for a Classroom Substitute Permit at all grade levels. PTSB also lists the US and Wyoming Constitution exams and a clear fingerprint background check.",
      },
      {
        q: "Can Wyoming use a background check from another state?",
        a: "No. PTSB says applicants must be re-fingerprinted for Wyoming per state statute and that it cannot accept background reports from other agencies. Fingerprint cards go to the Wyoming Division of Criminal Investigation (DCI) for processing.",
      },
      {
        q: "Can retired teachers substitute in Wyoming?",
        a: "Yes. Under PTSB's permit rules, a Lifetime Substitute Permit may be issued to a previously licensed teacher who held a current and valid license at the time of retirement.",
      },
      fillRateFaq("Wyoming"),
      regionFaq,
    ],
    related: [HUB, sibling("Colorado"), sibling("Montana"), sibling("Utah"), SPED_HUB, PARA_HUB, K12_HUB],
  },
];
