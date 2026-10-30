/**
 * National substitute-staffing state pages, third wave, file 2 of 3:
 * North Dakota, South Dakota, New Hampshire, Vermont, Maine. Same model and
 * rules as substitute-state-pages-national-a.ts and -g.ts: approved FocusedEDU
 * facts only, the 95% fill rate attributed to Odyssey in Wilmington, Delaware,
 * no clients, placements, or results claimed in these states, and every state
 * rule quoted from a primary source fetched and string-checked on 2026-10-30.
 *
 * None of these five states had a live K-12 posting on the job board on
 * 2026-10-30, so no "current openings" line appears here.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff } from "./substitute-state-pages-national-a";
import { TESTIMONIALS, fillRateFaq, sibling, SPED_HUB, PARA_HUB, K12_HUB } from "./substitute-state-pages-national-d";
import { NATIONAL_WAVE3_UPDATED, regionFaq } from "./substitute-state-pages-national-g";

const ND_0202 = "https://ndlegis.gov/information/acdata/pdf/67.1-02-02.pdf";
const ND_0204 = "https://ndlegis.gov/information/acdata/pdf/67.1-02-04.pdf";
const ND_12_60 = "https://ndlegis.gov/cencode/t12c60.pdf";
const ND_15_13 = "https://ndlegis.gov/cencode/t15-1c13.pdf";
const ND_ESPB = "https://www.nd.gov/espb/licensure/substitute-license-requirements-and-application";
const SD_DEF = "https://sdlegislature.gov/api/Rules/24:28:01:01.html";
const SD_CERT = "https://sdlegislature.gov/api/Rules/24:28:06:01.html";
const SD_WAIVER = "https://doe.sd.gov/oatq/waiver-LongTermSub.aspx";
const SD_12 = "https://sdlegislature.gov/api/Statutes/13-10-12.html";
const SD_12_1 = "https://sdlegislature.gov/api/Statutes/13-10-12.1.html";
const SD_13 = "https://sdlegislature.gov/api/Statutes/13-10-13.html";
const NH_ED500 = "https://www.gc.nh.gov/rules/state_agencies/ed500.html";
const NH_39B = "https://www.gc.nh.gov/rsa/html/XV/189/189-39-b.htm";
const NH_13A = "https://www.gc.nh.gov/rsa/html/XV/189/189-13-a.htm";
const VT_1692 = "https://legislature.vermont.gov/statutes/section/16/051/01692";
const VT_RULES =
  "https://education.vermont.gov/sites/aoe/files/documents/Rules%20Governing%20the%20Licensing%20of%20Educators.pdf";
const VT_255 = "https://legislature.vermont.gov/statutes/section/16/005/00255";
const ME_13024 = "https://legislature.maine.gov/statutes/20-A/title20-Asec13024.html";
const ME_6103 = "https://legislature.maine.gov/statutes/20-A/title20-Asec6103.html";
const ME_CH115 =
  "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/State%20Board%20-%20CHE%20Chapter%20115%20Part%201%20Amended%20-%202.10.2025.pdf";
const ME_RESOLVE = "https://legislature.maine.gov/legis/bills/bills_128th/chapters/RESOLVE54.asp";
const ME_13012B = "https://legislature.maine.gov/statutes/20-A/title20-Asec13012-B.html";
const ME_FP = "https://www.maine.gov/doe/cert/fingerprinting";

export const substituteStatePagesNationalH: ServicePage[] = [
  // ───────────────────────────── North Dakota ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-north-dakota",
    eyebrow: "Substitute teacher staffing · North Dakota",
    h1: "Substitute Teacher Staffing in North Dakota",
    metaTitle: "Substitute Teacher Staffing in North Dakota",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for North Dakota districts — ESPB substitute and interim substitute licenses, the 30-day line, and BCI/FBI fingerprint checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for North Dakota school districts. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding an Education Standards and Practices Board license or interim substitute license backed by a BCI and FBI fingerprint check, with every interim sub's classroom days tracked against the 30-day line.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in a North Dakota classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "North Dakota" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "ESPB educator's professional license or interim substitute license verified before a first assignment",
      "Interim route documented: 48 semester hours, or a high school diploma plus the state-approved substitute training",
      "Consecutive days in the same classroom tracked against the 30-day limit for interim subs without a bachelor's degree",
      "Interim license expiration (the applicant's birthday, at least two years out) tracked",
      "Fingerprints submitted to the Bureau of Criminal Investigation for a state and FBI check",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.pappas,
    sections: [
      {
        heading: "What North Dakota schools need from a substitute partner",
        body: "North Dakota starts from a high bar: a substitute holds the same educator's professional license as a contracted teacher. Because that bar leaves most districts short, the Education Standards and Practices Board issues interim substitute licenses when regularly licensed subs are scarce, to people with two years of college or with a high school diploma plus the state's substitute training. The interim route comes with one limit districts must watch: a sub without a bachelor's degree may not spend more than 30 consecutive days in the same classroom.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Fargo, West Fargo, Bismarck, Grand Forks, and Minot, and in the oil-country districts around Williston and Dickinson, the licensed or interim-licensed sub who is already fingerprinted is the one who can start.",
      },
      {
        heading: "How FocusedEDU staffs North Dakota substitute programs",
        body: "We confirm each North Dakota substitute's ESPB license before a first assignment, help interim applicants through the training, application, and fingerprinting steps, and route degree-holding or fully licensed subs to assignments likely to run long. Our credentialing system counts consecutive days per classroom for interim subs without a degree, so your office plans the hand-off before day 30. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="nd-substitute-requirements">North Dakota substitute teacher and clearance requirements</h2>
<p class="answer-lead">A North Dakota substitute normally holds the same educator's professional license as a contracted teacher. When regularly licensed substitutes are in short supply, the Education Standards and Practices Board (ESPB) may grant an interim substitute license to applicants with at least 48 semester hours of college, or with a high school diploma or equivalent plus the state-approved substitute training; an interim substitute without a bachelor's degree may not spend more than 30 consecutive days in the same classroom. Applicants are fingerprinted for a state and FBI criminal history check, and state law authorizes school boards to request the same check on anyone providing services to the district who has unsupervised contact with students.</p>
<h3>Licenses and interim substitute licenses</h3>
<p>ESPB's rules start with the full license: "A substitute teacher must hold a valid North Dakota educator's professional license based upon the same qualifications as a contracted teacher," and "A substitute teacher holding a regular license may substitute in any area requiring regular elementary or secondary licensure." They add that "Interim licensure may be granted for substitute teachers as detailed in section 67.1-02-04-02 when a shortage of regularly licensed substitutes exists" ${cite("N.D. Admin. Code 67.1-02-02", ND_0202)}. The interim rule sets two routes: "Interim licensure may be granted for substitute teachers who hold a minimum of two years of postsecondary education (forty-eight semester hours) when a shortage of regularly licensed substitutes exists," and "Interim licensure may be granted for substitute teachers who hold a high school diploma or equivalent when a shortage of regularly licensed substitutes exists," for which "The applicant must submit evidence of completion of the state-approved substitute training program." The time limit is specific: "If the applicant for the interim substitute license does not hold a bachelor's degree, the applicant may not spend more than thirty consecutive days in the same classroom as the substitute teacher." On term, "The interim license is valid for a minimum of two years and will expire on the applicant's birthday" ${cite("N.D. Admin. Code 67.1-02-04-02", ND_0204)}. ESPB's own page adds that "A substitute license allows a person to be a substitute teacher grades K-12 in all ND schools," and "ESPB has partnered with Frontline to provide online training to individuals with less than 48 credits of college education who are interested in substitute teaching" ${cite("ESPB, Substitute License Requirements and Application", ND_ESPB)}.</p>
<h3>Fingerprints, and checks on people who serve the district</h3>
<p>An interim applicant "must complete all of the application requirements, fees, and submit to the fingerprint background check" ${cite("N.D. Admin. Code 67.1-02-04-02", ND_0204)}, and more broadly "an applicant applying for licensure in North Dakota for the first time after August 1, 1997, must submit to a fingerprint screening for criminal records in accordance with North Dakota Century Code section 15.1-13-14" ${cite("N.D. Admin. Code 67.1-02-02", ND_0202)}. That statute provides that "The board shall check, or cause to be checked, the criminal history record of each applicant for initial licensure and re-entry licensure as a teacher in accordance with section 12-60-24" ${cite("N.D.C.C. § 15.1-13-14", ND_15_13)}. Under section 12-60-24, "The agency, official, or entity shall submit these fingerprints to the bureau of criminal investigation for nationwide criminal history record information that includes resubmission of the fingerprints by the bureau of criminal investigation to the federal bureau of investigation." The statute's list of who may request a check includes "The board of a school district, for a final applicant seeking employment with the district or otherwise providing services to the district, if that individual has unsupervised contact with students," and it defines the term: ""unsupervised contact" with students means being in proximity to one or more students, on school grounds or at school functions, outside the presence of an individual who has been subject to a criminal history record check" ${cite("N.D.C.C. § 12-60-24", ND_12_60)}. Every FocusedEDU substitute in North Dakota holds an ESPB license, so the fingerprint check is complete before a first assignment.</p>
${whereWeStaff(
  "North Dakota",
  "We staff substitute programs for school districts across North Dakota, with recruiting built around the Red River Valley, Bismarck-Mandan, and the western oil-country districts.",
  "That includes Fargo Public Schools and West Fargo Public Schools; Bismarck Public Schools and Mandan Public Schools; Grand Forks Public Schools; Minot Public Schools; Williston Basin School District #7; and Dickinson Public Schools. Because we work with one client per region, the first district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("Licensure gets a substitute in the door; fill rate tells you whether your classrooms are covered. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("North Dakota", "If you are not a licensed North Dakota teacher, you may qualify for an interim substitute license with 48 semester hours of college, or with a high school diploma or equivalent plus ESPB's online substitute training. Either way you will be fingerprinted for a state and FBI check, which we help you complete.")}
${cta("North Dakota")}`,
    faqs: [
      {
        q: "What license do substitute teachers need in North Dakota?",
        a: "Under N.D. Admin. Code 67.1-02-02, a substitute must hold a valid North Dakota educator's professional license based on the same qualifications as a contracted teacher. When regularly licensed substitutes are short, ESPB may grant an interim substitute license instead.",
      },
      {
        q: "Who qualifies for a North Dakota interim substitute license?",
        a: "Applicants with at least two years of postsecondary education (48 semester hours), or with a high school diploma or equivalent who complete the state-approved substitute training program. The interim license is valid for at least two years and expires on the applicant's birthday.",
      },
      {
        q: "How long can an interim substitute stay in one North Dakota classroom?",
        a: "An interim substitute who does not hold a bachelor's degree may not spend more than 30 consecutive days in the same classroom.",
      },
      {
        q: "Do North Dakota substitutes need a fingerprint check?",
        a: "Yes. Interim applicants must submit to the fingerprint background check, and first-time license applicants are fingerprinted under N.D.C.C. 15.1-13-14. Fingerprints go to the Bureau of Criminal Investigation and on to the FBI under N.D.C.C. 12-60-24.",
      },
      fillRateFaq("North Dakota"),
      regionFaq,
    ],
    related: [HUB, sibling("Minnesota"), sibling("South Dakota"), sibling("Montana"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── South Dakota ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-south-dakota",
    eyebrow: "Substitute teacher staffing · South Dakota",
    h1: "Substitute Teacher Staffing in South Dakota",
    metaTitle: "Substitute Teacher Staffing in South Dakota",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for South Dakota districts — the 45-day long-term substitute rule, DCI/FBI fingerprint checks, and the hiring bar that reaches contract staff handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for South Dakota school districts and accredited schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted for the DCI and FBI check South Dakota requires of school hires, with every vacancy assignment tracked against the 45-cumulative-day long-term substitute limit.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a South Dakota classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "South Dakota" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Cumulative school days in a vacant position tracked against the 45-day long-term substitute limit",
      "FMLA leave status or the substitute's valid or inactive teaching certificate documented for longer leave coverage",
      "Fingerprint-based DCI and FBI background check arranged before a first assignment",
      "Prior checks under five years old documented for subs who work in more than one accredited school (SDCL 13-10-12.1)",
      "Screening against the crimes that bar school employment directly or by contract (SDCL 13-10-13)",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What South Dakota schools need from a substitute partner",
        body: "South Dakota requires a teacher of record to hold a certificate for the assignment, with one exception that matters to every district: the long-term substitute. A long-term sub may serve as teacher of record in a vacant position for no more than 45 cumulative school days while the district recruits, and longer only when covering a teacher's FMLA leave or when the sub holds a valid or inactive teaching certificate. The Department's waiver page currently lists no waivers for that rule.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Sioux Falls, Harrisburg, Brandon Valley, and Rapid City, and in Aberdeen, Brookings, Watertown, and Mitchell, districts recruit from pools that are small to begin with.",
      },
      {
        heading: "How FocusedEDU staffs South Dakota substitute programs",
        body: "We arrange the DCI and FBI fingerprint check for every South Dakota substitute before a first assignment, screen against the convictions that bar school employment directly or by contract, and document prior checks so a sub working in several accredited schools does not need a new one each time. Our credentialing system counts cumulative days in each vacant position, so your office knows well before day 45 whether the assignment needs a certified sub. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="sd-substitute-requirements">South Dakota substitute teacher and clearance requirements</h2>
<p class="answer-lead">South Dakota requires a teacher of record to hold a certificate for the assignment, but its rules exempt the long-term substitute: an individual acting as teacher of record for no more than 45 cumulative school days in a vacant position while the district pursues a contracted teacher, or for longer during a teacher's temporary leave if the leave falls under the Family and Medical Leave Act or the substitute holds a valid or inactive teaching certificate. Every person over 18 hired by an accredited school is fingerprinted for a Division of Criminal Investigation and FBI check, and no one convicted of a crime of violence, a sex offense, or narcotics trafficking may be employed by an accredited school, directly or by contract.</p>
<h3>Certificates and the long-term substitute</h3>
<p>The certification rule requires that "A teacher of record, not including a long-term substitute teacher, in grades kindergarten to 12 or early childhood special education" hold a certificate valid for the assignment ${cite("ARSD 24:28:06:01", SD_CERT)}. The definitions rule sets the limits on a long-term substitute, an individual acting as a teacher of record for "(a) No more than forty-five cumulative school days in a vacant teaching position while a school district pursues a contract for a teacher;" or "(b) More than forty-five cumulative school days when a teacher is on a temporary leave of absence, if: the teacher's leave of absence is granted pursuant to the Family and Medical Leave Act of 1993," "or the individual has a valid or inactive teaching certificate" ${cite("ARSD 24:28:01:01", SD_DEF)}. Districts can seek relief from accreditation rules in general, since "A school district may apply for a waiver from an administrative rule governing school accreditation," but the Department's page states: "There are no current waivers for Long-Term Substitute" ${cite("South Dakota DOE, Waivers: Long-Term Substitute", SD_WAIVER)}. We count cumulative days in every vacancy assignment and flag day 45 for your office in advance.</p>
<h3>Fingerprints and the hiring bar</h3>
<p>"Each person over eighteen years of age hired by an accredited school shall submit to a criminal background investigation, by means of fingerprint checks by the Division of Criminal Investigation and the Federal Bureau of Investigation," and "Any person whose employment is subject to the requirements of this section may enter into service on a temporary basis pending receipt of results of the criminal background investigation" ${cite("SDCL 13-10-12", SD_12)}. One check can serve several schools: "Any accredited school employee who is employed by more than one accredited school is only required to obtain one criminal background investigation, if the background investigation was conducted no more than five years before the person is first employed by the additional accredited school" ${cite("SDCL 13-10-12.1", SD_12_1)}. The disqualifying-crimes statute reaches contract staff: "No person may be employed by an accredited school, either directly or by contract, if the person has been convicted of a crime of violence as defined in subdivision 22-1-2 (9), a sex offense as defined in § 22-24B-1, or trafficking in narcotics" ${cite("SDCL 13-10-13", SD_13)}. FocusedEDU screens every substitute against that list and arranges the fingerprint check before a first assignment.</p>
${whereWeStaff(
  "South Dakota",
  "We staff substitute programs for school districts and accredited schools across South Dakota, with recruiting built around Sioux Falls and Rapid City and the state's regional hubs.",
  "That includes the Sioux Falls School District, Harrisburg, and Brandon Valley in the Sioux Falls metro; Rapid City Area Schools and Douglas in the Black Hills; and the Aberdeen, Brookings, Watertown, and Mitchell school districts. Because we work with one client per region, the first district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("The number that separates substitute partners is coverage. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("South Dakota", "Every substitute hired by a South Dakota accredited school is fingerprinted for a DCI and FBI background check, which we arrange, and you may start on a temporary basis while results are pending. If you hold a valid or inactive teaching certificate, you can also cover long leaves past 45 days.")}
${cta("South Dakota")}`,
    faqs: [
      {
        q: "Does a long-term substitute in South Dakota need a teaching certificate?",
        a: "Not for vacancy coverage of up to 45 cumulative school days. ARSD 24:28:06:01 exempts long-term substitutes from the certificate requirement for teachers of record, and ARSD 24:28:01:01 limits a long-term substitute in a vacant position to 45 cumulative school days while the district pursues a contracted teacher.",
      },
      {
        q: "Can a South Dakota substitute serve more than 45 days?",
        a: "Yes, when covering a teacher's temporary leave of absence, if the leave is granted under the Family and Medical Leave Act or the substitute holds a valid or inactive teaching certificate. The Department's waiver page lists no current waivers for the long-term substitute rule.",
      },
      {
        q: "What background check do South Dakota school hires need?",
        a: "Under SDCL 13-10-12, each person over 18 hired by an accredited school submits to fingerprint checks by the Division of Criminal Investigation and the FBI, and may start on a temporary basis pending results. A check no more than five years old covers employment at additional accredited schools.",
      },
      {
        q: "Does South Dakota's hiring bar apply to contract staff?",
        a: "Yes. SDCL 13-10-13 provides that no person may be employed by an accredited school, either directly or by contract, if convicted of a crime of violence, a sex offense, or trafficking in narcotics.",
      },
      fillRateFaq("South Dakota"),
      regionFaq,
    ],
    related: [HUB, sibling("North Dakota"), sibling("Nebraska"), sibling("Minnesota"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── New Hampshire ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-new-hampshire",
    eyebrow: "Substitute teacher staffing · New Hampshire",
    h1: "Substitute Teacher Staffing in New Hampshire",
    metaTitle: "Substitute Teacher Staffing in New Hampshire",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for New Hampshire SAUs and districts — the 20-day rule, certificates of eligibility, and RSA 189:13-a fingerprint checks for contractors handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for New Hampshire school administrative units, school districts, and chartered public schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each cleared through the state police and FBI fingerprint check RSA 189:13-a requires of contractors' employees, with every assignment tracked against the 20-consecutive-day line.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a New Hampshire classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "New Hampshire" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Consecutive days in the same position tracked against the 20-day limit for non-credentialed substitutes (Ed 503.01)",
      "New Hampshire educator credential verified, or a bachelor's degree documented for a one-year certificate of eligibility (RSA 189:39-b)",
      "Fingerprint-based criminal history records check through the state police and FBI before a final offer (RSA 189:13-a)",
      "Three-year validity of each substitute's check tracked within the SAU",
      "Background-check costs for our staff carried by FocusedEDU, as the statute assigns them to the contractor",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.porterLinen,
    sections: [
      {
        heading: "What New Hampshire schools need from a substitute partner",
        body: "New Hampshire lets districts use substitutes without a state educator credential, for a while. A non-credentialed substitute may be hired for up to 20 consecutive days in the same position; after that the person needs a credential or a one-year certificate of eligibility from the local school board, which requires a bachelor's degree. The state's background-check statute is just as specific: it names substitute teachers, it names contractors whose employees serve students directly, and it puts the cost of a contractor's checks on the contractor.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Manchester, Nashua, Concord, Derry, Londonderry, and the Seacoast districts of Portsmouth, Dover, and Rochester, the cleared sub who can stay past day 20 is the one districts want.",
      },
      {
        heading: "How FocusedEDU staffs New Hampshire substitute programs",
        body: "We complete the state police and FBI fingerprint check on every New Hampshire substitute before a first assignment and carry its cost ourselves, as RSA 189:13-a assigns it to the contractor. Our credentialing system counts consecutive days per position, so your office knows well before day 20 whether the assignment needs a credentialed sub or a certificate of eligibility, and we route degree-holding subs to long assignments. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your SAU are not presented to the SAU next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="nh-substitute-requirements">New Hampshire substitute teacher and clearance requirements</h2>
<p class="answer-lead">In New Hampshire, a non-credentialed substitute may be hired for up to 20 consecutive days in the same position without a state educator credential; after that, the substitute needs a credential or a one-year certificate of eligibility from the local school board, which requires at least a bachelor's degree and a criminal history records check. RSA 189:13-a requires a fingerprint-based check through the state police and the FBI before a final offer of employment, names substitute teachers and contractors whose employees provide services directly to students, and makes contractors pay for their employees' checks. A substitute's check is valid for three years within the same school administrative unit.</p>
<h3>The 20-day line and certificates of eligibility</h3>
<p>The State Board's rule provides that "A non-credentialed substitute teacher or school nurse may be hired for up to 20 consecutive days in the same position without holding a New Hampshire educator credential issued by the state board," "after which time the individual shall be required to hold a credential or a one-year certificate of eligibility pursuant to RSA 189:39-b" ${cite("N.H. Code Admin. R. Ed 503.01", NH_ED500)}. Under that statute, "The local school board, in consultation with the superintendent, may offer a one-time certificate of eligibility, for a one-year period which may be extended by the local school board for a second consecutive year," to a person who "(a) Possesses at least a bachelor's degree from an accredited postsecondary institution. (b) Is subject to a criminal history records check pursuant to RSA 189:13-a." "The department of education shall be notified of the issuance of all certificates of eligibility within 30 days of the date of issuance" ${cite("RSA 189:39-b", NH_39B)}. We count consecutive days per position and flag day 20 for your office in advance.</p>
<h3>Fingerprint checks, contractors included</h3>
<p>Each school employer "shall complete a criminal history records check on every selected applicant for employment in any position in the school administrative unit, school district, or chartered public school prior to a final offer of employment," using a release "which authorizes the division of state police to conduct a criminal history records check through its state records and through the Federal Bureau of Investigation." "The applicant shall submit with the release form a complete set of fingerprints taken by a qualified law enforcement agency or an authorized employee of the school administrative unit, school district, chartered public school, or public academy." The statute's reach is explicit: "this section shall apply to any employee, including substitute teachers, selected applicant for employment, designated volunteer, volunteer organization, or individual or entity which contracts with a school administrative unit, school district, chartered public school, or public academy to provide services," including any service "where the contractor or employees of the contractor provide services directly to students of the district, chartered public school, or public academy." On cost, "The cost for criminal history records checks for employees or selected applicants for employment with such contractors shall be borne by the contractor," and on duration, "Criminal history records checks for substitute teachers within the same school administrative unit, shall be valid for a period of 3 years" ${cite("RSA 189:13-a", NH_13A)}. FocusedEDU completes and pays for the check on every substitute it places.</p>
${whereWeStaff(
  "New Hampshire",
  "We staff substitute programs for school administrative units, school districts, and chartered public schools across New Hampshire, with recruiting built around the Merrimack Valley and the Seacoast.",
  "That includes the Manchester, Nashua, and Concord school districts; Derry and Londonderry; Salem and Bedford; and Portsmouth, Dover, and Rochester on the Seacoast. Because we work with one client per region, the first SAU or district to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("Before you sign with a substitute partner, ask for its fill rate and where it was measured. Ours comes from an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021, our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("New Hampshire", "You can substitute in New Hampshire without a state educator credential for up to 20 consecutive days in the same position. Every substitute completes a state police and FBI fingerprint check before a final offer, which we arrange and pay for, and with a bachelor's degree you may qualify for a certificate of eligibility for longer assignments.")}
${cta("New Hampshire")}`,
    faqs: [
      {
        q: "Do you need a credential to substitute in New Hampshire?",
        a: "Not at first. Under Ed 503.01, a non-credentialed substitute may be hired for up to 20 consecutive days in the same position. After that, the substitute must hold a credential or a one-year certificate of eligibility under RSA 189:39-b.",
      },
      {
        q: "What is a New Hampshire certificate of eligibility?",
        a: "A one-time, one-year certificate the local school board may offer, in consultation with the superintendent, to a person with at least a bachelor's degree who is subject to a criminal history records check. The board may extend it for a second consecutive year, and the Department of Education must be notified within 30 days.",
      },
      {
        q: "Does RSA 189:13-a cover staffing-agency substitutes?",
        a: "Yes. RSA 189:13-a applies to employees including substitute teachers and to individuals or entities that contract with a school administrative unit, school district, or chartered public school where the contractor's employees provide services directly to students. The contractor bears the cost of its employees' checks.",
      },
      {
        q: "How long is a New Hampshire substitute's background check valid?",
        a: "Criminal history records checks for substitute teachers within the same school administrative unit are valid for three years.",
      },
      fillRateFaq("New Hampshire", "SAU"),
      regionFaq,
    ],
    related: [HUB, sibling("Vermont"), sibling("Maine"), sibling("Massachusetts"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Vermont ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-vermont",
    eyebrow: "Substitute teacher staffing · Vermont",
    h1: "Substitute Teacher Staffing in Vermont",
    metaTitle: "Substitute Teacher Staffing in Vermont",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Vermont supervisory unions and districts — the 30-student-day rule, emergency licenses, and 16 V.S.A. § 255 checks for contractor employees handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Vermont supervisory unions, school districts, and approved independent schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each cleared through the fingerprint-based criminal record and registry checks Vermont requires of contractors' employees, with every unlicensed sub's days tracked against the 30-student-day line.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a Vermont school",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Vermont" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "High school graduation confirmed, plus your board's own substitute qualifications policy",
      "Student days per assignment tracked against the 30-day limit for unlicensed substitutes",
      "Provisional or Emergency License paperwork prepared for your superintendent when an assignment will run past 30 student days",
      "Fingerprint-based criminal record check, including FBI records, requested through your superintendent (16 V.S.A. § 255)",
      "Child Protection Registry and Vulnerable Adult Abuse, Neglect, and Exploitation Registry checks",
      "Sex offender registration status screened before a candidate is presented",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.foedisch,
    sections: [
      {
        heading: "What Vermont schools need from a substitute partner",
        body: "Vermont leaves substitute qualifications to each local school board, with a high school diploma as the statewide floor, and draws the state line at time: an unlicensed substitute may cover up to 30 student days in the same assignment before the superintendent must apply for a Provisional or Emergency License. Vermont's background-check statute is written with contractors in mind, covering any employee of a contractor who may have unsupervised contact with students and routing the contractor's request through the superintendent.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Burlington, South Burlington, Essex Westford, Colchester, Rutland, and the Barre-Montpelier area, districts draw on small pools that every neighboring district is also calling.",
      },
      {
        heading: "How FocusedEDU staffs Vermont substitute programs",
        body: "We submit every Vermont substitute's fingerprint-based record check through your superintendent, as the statute requires of contractors, along with the Child Protection and Vulnerable Adult registry checks, before a first assignment. Our credentialing system counts student days per assignment for unlicensed subs, so your superintendent has time to file a Provisional or Emergency License application before day 30, and we verify each sub against your board's own substitute policy. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your supervisory union are not presented to the one next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="vt-substitute-requirements">Vermont substitute teacher and clearance requirements</h2>
<p class="answer-lead">Vermont lets substitutes work without an educator license as the Standards Board's rules allow: each local school board sets its substitute qualifications, which must at minimum require high school graduation, and an unlicensed substitute may serve up to 30 student days in the same assignment before the superintendent must apply for a Provisional or Emergency License. Under 16 V.S.A. § 255, anyone recommended for full-time, part-time, or temporary employment, and any employee of a contractor who may have unsupervised contact with students, needs a fingerprint-based criminal record check including FBI records, plus checks of the state's Child Protection Registry and Vulnerable Adult registry.</p>
<h3>Substitutes without a license, and the 30-day line</h3>
<p>The licensing statute provides: "Except for a substitute teacher in accordance with rules adopted by the Standards Board, a person shall not be employed as a teacher or administrator in a public school without having a license then in force" ${cite("16 V.S.A. § 1692", VT_1692)}. The Board's rules read: "Each local school board shall adopt a policy establishing employment qualifications for persons who substitute for Educators in their absence," and "Each policy shall require at minimum that the substitute has graduated from high school." On time, "An unlicensed person employed as a substitute pursuant to local school board policy may substitute for up to thirty (30) student days in the same assignment," and "In order to continue to employ an unlicensed person in this assignment beyond thirty (30) student days, the superintendent shall apply for a Provisional or Emergency License for the person pursuant to Sections 5350 and 5360 of these rules." Licensed teachers have a matching limit outside their field: "Licensed Educators may substitute in a field outside of their endorsement field for thirty student days in the same assignment." The Emergency License is available "when the local district or approved independent school is unable to find appropriately licensed and/or endorsed applicants, after making all reasonable efforts to do so," and "An Emergency License can neither be extended for a second year nor be issued for any endorsement more than once" ${cite("Vermont Standards Board, Rules Governing the Licensing of Educators", VT_RULES)}. We count student days per assignment and flag day 30 for your superintendent in advance.</p>
<h3>Record and registry checks for contractors' employees</h3>
<p>Vermont's statute requires criminal record information for "the person a superintendent or headmaster is prepared to recommend for any full-time, part-time, or temporary employment;" and for "any employee of a contractor under contract to an independent school or school district who is in a position that may result in unsupervised contact with school children;" and it sets the channel: "A contractor shall make a request through a superintendent or headmaster." Each request "shall be accompanied by a set of the person's fingerprints and a fee established by the Vermont Crime Information Center that shall reflect the cost of obtaining the record from the FBI." Registry checks follow: "A superintendent or headmaster shall request and obtain information from the Child Protection Registry maintained by the Department for Children and Families and from the Vulnerable Adult Abuse, Neglect, and Exploitation Registry," and "A person convicted of a sex offense that requires registration pursuant to 13 V.S.A. chapter 167, subchapter 3 shall not be eligible for employment under this section" ${cite("16 V.S.A. § 255", VT_255)}. FocusedEDU submits every substitute's request through your superintendent before a first assignment.</p>
${whereWeStaff(
  "Vermont",
  "We staff substitute programs for supervisory unions, school districts, and approved independent schools across Vermont, with recruiting built around Chittenden County and the state's regional centers.",
  "That includes the Burlington, South Burlington, and Champlain Valley school districts; Essex Westford and Colchester; Rutland City Public Schools; Barre Unified Union and Montpelier Roxbury; Maple Run Unified in St. Albans; and Windham Southeast in Brattleboro. Because we work with one client per region, the first district or supervisory union to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("A substitute policy sets who may teach; a fill rate shows whether classrooms are covered. Our fill rate is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at 95%, a 40%+ improvement over the school's previous provider.")}
${forSubs("Vermont", "Vermont lets each school board set its substitute qualifications, starting from a high school diploma, and an unlicensed substitute may serve up to 30 student days in the same assignment. You will complete a fingerprint-based record check and registry checks, which we submit through the superintendent's office.")}
${cta("Vermont")}`,
    faqs: [
      {
        q: "Do you need a license to substitute teach in Vermont?",
        a: "No. 16 V.S.A. § 1692 exempts substitutes employed under the Standards Board's rules, which require each local school board to adopt a substitute qualifications policy with high school graduation as the minimum.",
      },
      {
        q: "How long can an unlicensed substitute stay in one Vermont assignment?",
        a: "Up to 30 student days in the same assignment. To keep the person longer, the superintendent must apply for a Provisional or Emergency License. Licensed educators substituting outside their endorsement field have the same 30-day limit.",
      },
      {
        q: "Do Vermont background checks cover staffing-agency employees?",
        a: "Yes. 16 V.S.A. § 255 covers any employee of a contractor under contract to a school district or independent school who is in a position that may result in unsupervised contact with students. The contractor makes the request through the superintendent or headmaster, with fingerprints for a check that includes FBI records.",
      },
      {
        q: "What registries are checked for Vermont school staff?",
        a: "The superintendent or headmaster must obtain information from the Child Protection Registry maintained by the Department for Children and Families and from the Vulnerable Adult Abuse, Neglect, and Exploitation Registry. A person convicted of a sex offense requiring registration is not eligible for employment under § 255.",
      },
      fillRateFaq("Vermont"),
      regionFaq,
    ],
    related: [HUB, sibling("New Hampshire"), sibling("New York"), sibling("Massachusetts"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Maine ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-maine",
    eyebrow: "Substitute teacher staffing · Maine",
    h1: "Substitute Teacher Staffing in Maine",
    metaTitle: "Substitute Teacher Staffing in Maine",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Maine SAUs — the six-week certification line, DOE clearances for contracted service providers, and five-year fingerprinting handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Maine school administrative units and approved private schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the Department of Education clearance Maine requires of substitutes and contracted service providers, with every long assignment tracked against the six-consecutive-week line.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Maine classroom",
    updated: NATIONAL_WAVE3_UPDATED,
    areaServed: [{ type: "State", name: "Maine" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Maine DOE clearance (state and FBI fingerprint check) verified for every substitute (20-A M.R.S. § 13024)",
      "Five-year re-fingerprinting date tracked for every substitute",
      "High school diploma confirmed, plus your SAU's own standard for substitutes serving under six weeks",
      "Consecutive weeks per assignment tracked, with a certified or endorsed sub routed to anything past six weeks",
      "Certificate and endorsement matched to grade and subject for certified subs on long assignments",
      "Emergency certificate paperwork prepared where the commissioner has identified a staffing shortage",
      "Reference checks with prior schools and classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.weathington,
    sections: [
      {
        heading: "What Maine schools need from a substitute partner",
        body: "Maine splits substitute rules at six weeks. For shorter assignments, each school administrative unit sets its own standard, with a high school diploma as the minimum; past six consecutive weeks, the substitute needs a certification or endorsement. Every substitute also needs a Department of Education clearance built on a state and FBI fingerprint check, renewed every five years, and Maine's clearance statute names contracted service providers alongside the SAU's own staff.\n\nThe daily need is the familiar one: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Portland, South Portland, Lewiston-Auburn, Bangor, Biddeford-Saco, Augusta, and Sanford, cleared substitutes are in short supply and every SAU is calling the same names.",
      },
      {
        heading: "How FocusedEDU staffs Maine substitute programs",
        body: "We confirm each Maine substitute's DOE clearance before a first assignment and track the five-year re-fingerprinting date, so no one lapses mid-year. Our credentialing system counts consecutive weeks per assignment and routes certified or endorsed subs to anything that may run past six weeks, which protects your SAU and keeps contract payments clean under the State Board's rule. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your SAU are not presented to the SAU next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="me-substitute-requirements">Maine substitute teacher and clearance requirements</h2>
<p class="answer-lead">In Maine, standards for substitutes serving less than six weeks are set by each school administrative unit (SAU) and must require at least a high school diploma; a substitute serving longer than six consecutive weeks must hold a certification or endorsement. Anyone paid to work in a school in a position that does not require certification, including substitutes and contracted service providers, must hold a Department of Education clearance based on a state and FBI fingerprint check, and substitutes are re-fingerprinted every five years. Contracted service providers that employ people in violation of the State Board's credential rule are barred from receiving contract payments.</p>
<h3>Substitute standards and the six-week line</h3>
<p>The State Board's rule provides: "Substitute standards for less than 6 weeks are determined by the SAU and require that the substitute have minimally a high school diploma." For longer assignments, "Substitute personnel holding a certification or endorsement may serve on a long-term basis (greater than six consecutive weeks) in schools," and "A certified teacher or educational specialist may serve as a substitute with no time limit, provided that the teaching certificate bears an endorsement for the grade and subject being taught," and "A SAU may request a waiver from the Commissioner if finding candidates that meet the eligibility criteria is difficult" ${cite("05-071 C.M.R. ch. 115, Part I", ME_CH115)}. The Legislature set the same floor when it directed the rule's review: "the standards determined by the school administrative unit for substitute personnel to serve for less than 6 weeks would require that substitute personnel have the minimum of a high school diploma" ${cite("Resolves 2019, ch. 54", ME_RESOLVE)}. When a long vacancy cannot be filled, "Upon the identification of an educator staffing shortage in the State, the commissioner may issue emergency certificates to teachers, specialists and administrators in accordance with this section," and "A certificate issued pursuant to this subsection is issued for a one-year period and no more than 3 emergency teacher certificates may be issued per applicant" ${cite("20-A M.R.S. § 13012-B", ME_13012B)}. We count consecutive weeks on every assignment and route certified subs to anything that may run past six.</p>
<h3>Clearances for substitutes and contracted service providers</h3>
<p>Maine's clearance statute reads: "A person paid to work in a school in a position that does not require certification must be issued a clearance by the department." It applies to "Personnel employed in a public school or an approved private school as regular or substitute employees;" and to "Personnel employed by or serving the school administrative unit as contracted service providers; and" others ${cite("20-A M.R.S. § 13024", ME_13024)}. The background statute provides that "The commissioner shall obtain other state and national criminal history record information from the Federal Bureau of Investigation for any person applying for a credential or renewal," and sets a window for substitutes: "a person employed as a substitute who needs fingerprinting and a criminal history record check pursuant to section 13011, subsection 8 must meet the requirements of this section within 8 weeks of employment by a school administrative unit" ${cite("20-A M.R.S. § 6103", ME_6103)}. The Department lists "Anyone who is contracted through a SAU" among those who must be fingerprinted, and adds: "Coaches and Substitute Teachers must be fingerprinted every 5 years, regardless of continuous employment" ${cite("Maine DOE, Fingerprinting and Background Checks", ME_FP)}. The State Board's rule puts teeth on it for contractors: "Contracted service providers who employ individuals in violation of Section 4.1 of this rule are barred from receiving contractual payments" ${cite("05-071 C.M.R. ch. 115, Part I", ME_CH115)}. FocusedEDU confirms the clearance before a first assignment rather than within the eight-week window.</p>
${whereWeStaff(
  "Maine",
  "We staff substitute programs for school administrative units and approved private schools across Maine, with recruiting built around Greater Portland and the state's other population centers.",
  "That includes Portland Public Schools and the South Portland School Department; Lewiston Public Schools and the Auburn School Department; the Bangor School Department; the Biddeford School Department; Augusta Public Schools; and the Sanford School Department. Because we work with one client per region, the first SAU to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("Clearances decide who may work; fill rate decides whether the classroom is covered. Ours is measured at an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has held day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Maine", "For assignments under six weeks, Maine SAUs set their own substitute standards, starting from a high school diploma. Every substitute needs a Department of Education clearance based on a state and FBI fingerprint check, renewed every five years, which we help you complete; with a certification or endorsement you can also take long-term assignments.")}
${cta("Maine")}`,
    faqs: [
      {
        q: "What are the requirements to substitute teach in Maine?",
        a: "For assignments under six weeks, the school administrative unit sets the standard, which must require at least a high school diploma. Every substitute also needs a Maine Department of Education clearance based on a state and FBI fingerprint check.",
      },
      {
        q: "How long can a Maine substitute stay in one assignment without certification?",
        a: "Up to six consecutive weeks. Under the State Board's Chapter 115 rule, substitutes serving on a long-term basis, greater than six consecutive weeks, must hold a certification or endorsement; a certified teacher endorsed for the grade and subject may substitute with no time limit.",
      },
      {
        q: "Do Maine's clearance rules apply to staffing agencies?",
        a: "Yes. 20-A M.R.S. § 13024 requires a Department clearance for personnel employed by or serving the school administrative unit as contracted service providers, and the State Board's rule bars contracted service providers that employ people in violation of the credential rule from receiving contract payments.",
      },
      {
        q: "How often are Maine substitutes fingerprinted?",
        a: "Every five years. The Maine Department of Education states that coaches and substitute teachers must be fingerprinted every five years, regardless of continuous employment.",
      },
      fillRateFaq("Maine", "SAU"),
      regionFaq,
    ],
    related: [HUB, sibling("New Hampshire"), sibling("Vermont"), sibling("Massachusetts"), SPED_HUB, PARA_HUB, K12_HUB],
  },
];
