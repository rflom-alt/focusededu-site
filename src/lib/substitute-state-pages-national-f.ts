/**
 * National substitute-staffing state pages, second wave, file 3 of 3:
 * Nevada, Utah, Iowa, Arkansas, Kansas. Same model and rules as
 * substitute-state-pages-national-a.ts and -d.ts: approved FocusedEDU facts
 * only, the 95% fill rate attributed to Odyssey in Wilmington, Delaware, no
 * clients or results claimed in these states, and every state rule quoted from
 * a primary source fetched and string-checked on 2026-10-30.
 *
 * Arkansas carries a dated "current openings" line: the live job board listed
 * a K-12 posting in North Little Rock on 2026-10-30. Never add one for a state
 * without a live K-12 posting.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_ROLES, whereWeStaff, openings } from "./substitute-state-pages-national-a";
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

const NV_NAC = "https://www.leg.state.nv.us/NAC/NAC-391.html";
const NV_NRS = "https://www.leg.state.nv.us/NRS/NRS-391.html";
const NV_NDE = "https://doe.nv.gov/educator-licensure/substitute-teaching-license";
const UT_901 = "https://le.utah.gov/xcode/Title53E/Chapter6/C53E-6-S901_2026050620260506.html";
const UT_402 = "https://le.utah.gov/xcode/Title53G/Chapter11/C53G-11-S402_2024050120240501.html";
const IA_256 = "https://www.legis.iowa.gov/docs/code/256.165.pdf";
const IA_13 = "https://www.legis.iowa.gov/docs/iac/chapter/282.13.pdf";
const IA_279 = "https://www.legis.iowa.gov/docs/code/279.69.pdf";
const AR_180 = "https://dese.ade.arkansas.gov/Files/Educator_Licensure_6CARpt.180_Legal.pdf";
const AR_194 = "https://dese.ade.arkansas.gov/Files/Background_Checks_6CARpt.194_Legal.pdf";
const KS_91_31_34 =
  "https://rules.ks.gov/api/policy-library-public/collections/0ae1e448-f5a1-4e09-9d6d-a488ac7c284a/policies/63313963-3ca1-418d-a90b-b928aeac85fa/document/48323c4a-6250-4d5d-9e0b-eb160cd463ee";
const KS_91_1_201 =
  "https://rules.ks.gov/api/policy-library-public/collections/0ae1e448-f5a1-4e09-9d6d-a488ac7c284a/policies/4bd98adc-3071-4195-b5cd-2e75dbadfe20/document/10dc46e4-4a19-4a15-bc10-1712dabeb078";
const KS_91_1_203 =
  "https://rules.ks.gov/api/policy-library-public/collections/0ae1e448-f5a1-4e09-9d6d-a488ac7c284a/policies/97c71221-7433-45a1-8b26-5db99ecf2921/document/ff59f96e-d8fd-466c-b84a-9af0f025a936";
const KS_91_1_214 =
  "https://rules.ks.gov/api/policy-library-public/collections/0ae1e448-f5a1-4e09-9d6d-a488ac7c284a/policies/87121c68-85c6-4e70-add5-9f8c85e5d773/document/057481cd-3ea4-42ae-b57a-248561bff432";
const KS_LICENSES = "https://www.ksde.gov/licensure/teacher-licensure/license-information-and-application";

export const substituteStatePagesNationalF: ServicePage[] = [
  // ───────────────────────────── Nevada ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-nevada",
    eyebrow: "Substitute teacher staffing · Nevada",
    h1: "Substitute Teacher Staffing in Nevada",
    metaTitle: "Substitute Teacher Staffing in Nevada",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Nevada districts and charters — NDE substitute licenses, 60-day vacancy limits, fingerprints, and contractor disclosure rules handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Nevada school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a Nevada Department of Education substitute license backed by state and FBI fingerprint checks, with vacancy assignments tracked against Nevada's 60-day limit.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher at the front of a Nevada classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Nevada" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "NDE special license with a substitute endorsement (or a regular teaching license) verified in OPAL",
      "60 semester hours of college credit, or an associate's degree or higher, on official transcript",
      "Fingerprints submitted for Nevada and FBI criminal history checks, with Statewide Central Registry authorization",
      "Vacancy assignments tracked against the 60-day limit and the single 30-day extension",
      "Employment-history disclosure record kept for every substitute and provided to your district before assignment (NRS 391.905)",
      "License renewal and its background check tracked",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.foedisch,
    sections: [
      {
        heading: "What Nevada schools need from a substitute partner",
        body: "Nevada licenses substitutes through the Department of Education and sets two very different clocks. A substitute covering for a licensed teacher who is under contract can work unlimited days; a substitute filling a vacancy with no contracted teacher is limited to 60 days, with one 30-day extension available in an exceptional case. For districts with persistent vacancies, that difference decides whether a long-term sub can stay through spring.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Clark County, one of the largest districts in the country, and in Washoe County, schools compete for the same licensed subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs Nevada substitute programs",
        body: "Every Nevada substitute we place holds an NDE substitute license or a teaching license, with the fingerprint checks and registry authorization that licensure requires. Our credentialing system records whether each assignment covers a contracted teacher or a vacancy, counts vacancy days against the 60-day limit, and keeps the employment-history disclosure record Nevada requires of independent contractors ready for your district. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your schools are not presented to the district or charter next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="nv-substitute-requirements">Nevada substitute teacher and clearance requirements</h2>
<p class="answer-lead">Nevada substitutes hold either a regular teaching license or a Department of Education special license with a substitute endorsement, which requires at least 60 semester hours of college credit or an associate's degree. A substitute may serve unlimited days covering a licensed teacher who is under contract, but only 60 days in a vacancy, with one 30-day extension. License applicants submit fingerprints for state and FBI checks and authorize a Statewide Central Registry check, and independent contractors must keep employment-history disclosures for staff with pupil contact.</p>
<h3>The substitute endorsement</h3>
<p>Under the Nevada Administrative Code, a substitute must hold a teaching license or a "Special license or provisional special license with an endorsement as a substitute teacher in early childhood education through grade 12." To receive the endorsement, a person must "Have completed at least 60 semester hours of credit from an accredited college or university; or" "Possess an associate's degree or higher degree from an accredited college or university" ${cite("NAC 391.0897", NV_NAC)}. Applicants apply online: "You must create an OPAL account and submit your electronic application and supporting documentation online to our office," and "Professional development hours are not required to renew a Substitute license" ${cite("NDE, Substitute Teaching License", NV_NDE)}.</p>
<h3>Unlimited days for a contracted teacher, 60 for a vacancy</h3>
<p>The same rule lets a district hire a substitute for "Unlimited days of service if filling the position of a licensed teacher who is under contract," or "60 days of service if filling a teaching position for which a licensed teacher has not been hired under contract," and "The Department may grant a school district one extension for 30 days with regard to a person who is hired pursuant to paragraph (b) of subsection 3 in an exceptional case" ${cite("NAC 391.0897", NV_NAC)}. We tag every Nevada assignment as leave coverage or vacancy coverage and flag vacancy day 50 for your HR office.</p>
<h3>Emergency substitutes</h3>
<p>"To receive a special license as an emergency substitute teacher, a person must earn a high school diploma or its equivalent," and "A special license as an emergency substitute teacher is valid for 1 year after the date of issuance." Emergency substitutes are limited to districts with fewer than 9,000 pupils and, with Department approval, rural schools, and "A person employed pursuant to subsection 4, 5 or 6 may not serve as a teacher in one classroom for more than 5 days in any 20-day period" ${cite("NAC 391.0896", NV_NAC)}.</p>
<h3>Fingerprints, the Central Registry, and contractor disclosures</h3>
<p>Every license applicant must submit "A complete set of his or her fingerprints and written permission authorizing the Superintendent to forward the fingerprints to the Central Repository for Nevada Records of Criminal History" for state and FBI review, and "Written authorization for the Superintendent to obtain any information concerning the applicant that may be available from the Statewide Central Registry" ${cite("NRS 391.033", NV_NRS)}. Nevada also regulates contractors directly: "An independent contractor of a school district, charter school or university school for profoundly gifted pupils who employs a person who may have direct contact with pupils shall:" keep each employee's employment-history disclosures and provide them to the district on request, and "An independent contractor may not assign an employee to perform work at a public school, charter school or university school for profoundly gifted pupils if the board of trustees" objects after receiving the required notice ${cite("NRS 391.905", NV_NRS)}. FocusedEDU keeps that record for every substitute and sends it before an assignment begins.</p>
${whereWeStaff(
  "Nevada",
  "We staff substitute programs for school districts and charter schools across Nevada, with recruiting built around the Las Vegas valley and Reno-Sparks.",
  "That includes the Clark County School District across Las Vegas, Henderson, and North Las Vegas; the Washoe County School District in Reno and Sparks; the Carson City School District; Elko County; and Nye County around Pahrump. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The figure that separates substitute partners is day-to-day fill rate. Ours is measured at Odyssey Public Charter School in Wilmington, Delaware, an existing client since 2021, where our weekly-pay, app-based substitute model holds day-to-day coverage at 95%, a 40%+ improvement over the school's previous provider.")}
${forSubs("Nevada", "You will need an NDE special license with a substitute endorsement — 60 college semester hours or an associate's degree qualifies you — applied for through OPAL, with fingerprints for state and FBI checks. We tell you exactly what to upload and track your renewal for you.")}
${cta("Nevada")}`,
    faqs: [
      {
        q: "What do you need to be a substitute teacher in Nevada?",
        a: "A Nevada teaching license, or a special license with a substitute endorsement from the Nevada Department of Education. The endorsement requires at least 60 semester hours from an accredited college or university, or an associate's degree or higher, and applications are filed through NDE's OPAL system.",
      },
      {
        q: "How long can a Nevada substitute stay in one position?",
        a: "Unlimited days when filling the position of a licensed teacher who is under contract. When filling a position with no contracted licensed teacher, the limit is 60 days, and the Department may grant one 30-day extension in an exceptional case.",
      },
      {
        q: "What is a Nevada emergency substitute license?",
        a: "A one-year special license that requires a high school diploma or its equivalent. Emergency substitutes may be used in districts under 9,000 pupils or, with Department approval, in rural schools, and may not teach in one classroom more than 5 days in any 20-day period.",
      },
      {
        q: "What does Nevada require of staffing agencies?",
        a: "Under NRS 391.905, an independent contractor whose employees may have direct contact with pupils must keep a record of each employee's employment-history disclosures, provide it to the district on request, and may not assign an employee if the district objects after notification.",
      },
      fillRateFaq("Nevada"),
    ],
    related: [HUB, sibling("California"), sibling("Arizona"), sibling("Utah"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Utah ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-utah",
    eyebrow: "Substitute teacher staffing · Utah",
    h1: "Substitute Teacher Staffing in Utah",
    metaTitle: "Substitute Teacher Staffing in Utah",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Utah districts and charters — licensed-first hiring, the 2026 long-term sub change, and FBI/BCI checks for staffing-service contract employees handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Utah school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each cleared through the fingerprint-based FBI and Bureau of Criminal Identification check Utah requires of staffing-service contract employees before a first assignment.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher working with students in a Utah classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Utah" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Fingerprint-based FBI and Utah BCI background check completed before employment (Utah Code 53G-11-402)",
      "Ongoing monitoring enrollment, or your LEA's documented exemption for temporary workers",
      "Licensed educators identified first, so your district can prioritize them as Utah Code 53E-6-901 requires",
      "License eligibility and status checked: suspended, revoked, or ineligible individuals cannot substitute",
      "Your district's own substitute qualifications verified before a candidate is presented",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.murphyRichardson,
    sections: [
      {
        heading: "What Utah schools need from a substitute partner",
        body: "Utah defines a substitute teacher as a licensed or non-licensed person, and since May 6, 2026 a long-term substitute no longer has to hold a teaching license. That widens the pool, but two rules stay fixed: districts must prioritize licensed educators when they are available, and every substitute must clear a fingerprint-based FBI and state background check before the first day. Utah's background-check law also names staffing-service employees as contract employees, so an agency's subs are screened to the same standard as district hires.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. Along the Wasatch Front, from Granite, Jordan, and Canyons to Davis and Alpine, some of the largest districts in the West are drawing on the same substitutes.",
      },
      {
        heading: "How FocusedEDU staffs Utah substitute programs",
        body: "We complete the FBI and BCI fingerprint check on every Utah substitute before a first assignment, flag which of our subs hold a Utah educator license so your district can put licensed educators first, and verify license status for anyone who has held one. Utah law bars districts from charging contract employees the background-check fee, and FocusedEDU never passes that cost to a substitute. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ut-substitute-requirements">Utah substitute teacher and clearance requirements</h2>
<p class="answer-lead">Utah law defines a substitute teacher as a licensed or non-licensed individual employed to fill in during a teacher's temporary absence, and requires districts to prioritize licensed educators when available. A 2026 law removed the teaching-license requirement for long-term substitutes, effective May 6, 2026. Every substitute must pass a fingerprint-based FBI and Utah Bureau of Criminal Identification background check before employment, and staffing-service employees working in schools are covered by name as contract employees.</p>
<h3>Licensed and non-licensed substitutes</h3>
<p>Utah's substitute statute provides that ""substitute teacher" means a licensed or non-licensed individual who is employed by a school district to fill in for a regular classroom teacher during the teacher's temporary absence from the classroom," and that "When hiring substitute teachers, school districts shall prioritize licensed educators as substitutes when available." It also bars some individuals: a person may not substitute if "the individual is ineligible to hold a license under Section 53E-6-603; or" the individual's license has been suspended or revoked under the listed restrictions ${cite("Utah Code § 53E-6-901", UT_901)}. The 2026 amendment is summarized in the enrolled bill: "This bill removes the requirement for a teaching license for a long-term substitute," and "This bill takes effect on May 6, 2026" ${cite("Utah S.B. 52 (2026), enrolled", "https://le.utah.gov/Session/2026/bills/enrolled/SB0052.pdf")}. We identify licensed educators in our pool so your district can meet the licensed-first rule.</p>
<h3>Background checks for substitutes and contract employees</h3>
<p>"An individual shall submit to a background check in accordance with Section 53G-11-402 prior to employment as a substitute teacher" ${cite("Utah Code § 53E-6-901", UT_901)}. Utah's background-check chapter defines the category agency staff fall into: ""Contract employee" means an employee of a staffing service or other entity who works at a public or private school under a contract" ${cite("Utah Code § 53G-11-401", "https://le.utah.gov/xcode/Title53G/Chapter11/C53G-11-S401_2024050120240501.html")}. Section 402 requires LEAs to "require the following individuals who are 18 years old or older to submit to a nationwide criminal background check and ongoing monitoring as a condition of employment or appointment:" a list that includes contract employees, with "an initial fingerprint-based background check by the FBI and the bureau upon submission of the application; and" ongoing monitoring. It protects contract staff from the cost: "An LEA may not require a non-licensed employee, contract employee, or volunteer to pay the fee described in Subsection (1)(b)(ii)." It also gives districts flexibility: "An LEA or qualifying private school may establish a policy to exempt an individual described in Subsections (1)(a)(i) through (iv) from ongoing monitoring under Subsection (1) if the individual is being temporarily employed or appointed" ${cite("Utah Code § 53G-11-402", UT_402)}. FocusedEDU completes the initial fingerprint check on every substitute and follows your LEA's monitoring policy.</p>
${whereWeStaff(
  "Utah",
  "We staff substitute programs for school districts and charter schools across Utah, with recruiting built along the Wasatch Front and in Southern Utah.",
  "That includes the Salt Lake City School District, Granite, Canyons, and Jordan in Salt Lake County; Davis, Weber, and Ogden City to the north; Alpine, Provo City, and Nebo in Utah County; and the Washington County School District around St. George. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Compare substitute partners on the share of absences they actually fill. Our reference point is an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has filled 95% of day-to-day absences, a 40%+ improvement over the school's previous provider.")}
${forSubs("Utah", "Utah allows licensed and non-licensed substitutes, and since May 6, 2026 long-term assignments no longer require a teaching license. Every substitute clears a fingerprint-based FBI and Utah BCI check before starting, which we arrange, and Utah law bars districts from charging contract employees that fee.")}
${cta("Utah")}`,
    faqs: [
      {
        q: "Do you need a teaching license to substitute in Utah?",
        a: "No. Utah Code 53E-6-901 defines a substitute teacher as a licensed or non-licensed individual, though districts must prioritize licensed educators when available. S.B. 52, effective May 6, 2026, removed the teaching-license requirement for long-term substitutes.",
      },
      {
        q: "What background check do Utah substitutes need?",
        a: "A background check under Utah Code 53G-11-402 before employment: an initial fingerprint-based check by the FBI and the Utah Bureau of Criminal Identification, plus ongoing monitoring unless the LEA exempts temporary workers from monitoring.",
      },
      {
        q: "Are staffing-agency substitutes covered by Utah's background-check law?",
        a: "Yes. Utah Code 53G-11-401 defines a contract employee as an employee of a staffing service or other entity who works at a school under a contract, and Section 402 requires contract employees to pass the same check. An LEA may not charge a contract employee the fee.",
      },
      {
        q: "Who is barred from substitute teaching in Utah?",
        a: "Under Utah Code 53E-6-901, an individual who is ineligible to hold a license under Section 53E-6-603, or whose license has been suspended or revoked under the restrictions in Section 53E-6-604.5, may not be employed as a substitute teacher.",
      },
      fillRateFaq("Utah"),
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Nevada"), sibling("Arizona"), sibling("Colorado"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Iowa ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-iowa",
    eyebrow: "Substitute teacher staffing · Iowa",
    h1: "Substitute Teacher Staffing in Iowa",
    metaTitle: "Substitute Teacher Staffing in Iowa",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Iowa districts and nonpublic schools — BoEE substitute authorizations and licenses, the 10-day and 90-day limits, and registry checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Iowa school districts and accredited nonpublic schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding the Board of Educational Examiners substitute authorization or substitute license that fits the assignment, with the 10-day and 90-day limits tracked for every one.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in an Iowa classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Iowa" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "BoEE substitute authorization (associate degree or 60 semester hours plus a 15-hour workshop) or substitute license verified",
      "Days per assignment tracked: 10 consecutive days in a 30-day period on an authorization, 90 days per school year on a license",
      "Board extension request prepared with documented need when an authorization holder must stay past day 10",
      "Fingerprinting for a national criminal history check at initial licensure",
      "Sex offender and child abuse registry checks completed",
      "Iowa court records and registries reviewed before hire, as Iowa Code 279.69 requires for substitute and contract employees",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.pappas,
    sections: [
      {
        heading: "What Iowa schools need from a substitute partner",
        body: "Iowa has two substitute credentials, and they are built for different jobs. The substitute authorization, open to candidates with an associate degree or 60 semester hours plus a 15-hour workshop, allows no more than 10 consecutive days in a 30-day period in one assignment. The substitute license, for people eligible for a full Iowa teaching license, allows up to 90 days in one assignment in a school year. A long-term leave covered by the wrong credential becomes a compliance problem on day 11.\n\nThe daily need is the same as anywhere: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Des Moines, Cedar Rapids, the Quad Cities, and Iowa City, districts draw on the same licensed and authorized subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs Iowa substitute programs",
        body: "We record each Iowa substitute's credential and match it to the assignment: authorization holders to short absences, substitute license holders to leaves and vacancies. Our credentialing system counts days per assignment, flags an authorization holder at day 8 so your administrator can file a board extension if the need is documented, and keeps the registry and court-record reviews Iowa requires for substitute and contract employees. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="ia-substitute-requirements">Iowa substitute teacher and clearance requirements</h2>
<p class="answer-lead">Iowa's Board of Educational Examiners issues two substitute credentials. The substitute authorization requires an associate degree or at least 60 undergraduate semester hours plus an approved 15-clock-hour workshop, and limits holders to 10 consecutive days in a 30-day period in one assignment. The substitute license, for people eligible to hold an Iowa teaching license, allows up to 90 days in one assignment per school year. Initial applicants are fingerprinted for a national criminal history check and screened against Iowa's registries, and districts must review registries and court records before hiring substitute and contract employees.</p>
<h3>The substitute authorization and the 10-day limit</h3>
<p>Iowa Code provides that "A substitute teacher authorization shall require not less than the successful completion of an associate degree or not less than sixty undergraduate semester hours, or the equivalent," and that "The board shall issue a substitute authorization that allows an individual to substitute in grades prekindergarten through twelve for no more than ten consecutive days in a thirty-day period in one job assignment for a regularly assigned teacher who is absent." There is a relief valve: "A school district administrator may file a written request with the board for an extension of the ten-day limit in one job assignment in a thirty-day period on the basis of documented need and benefit to the instructional program" ${cite("Iowa Code § 256.165", IA_256)}. The Board's rules add that applicants must "complete an approved substitute authorization workshop consisting of the following components and totaling a minimum of 15 clock hours," and "The substitute authorization is valid for five years" ${cite("Iowa Admin. Code r. 282—22.2", "https://www.legis.iowa.gov/docs/iac/chapter/282.22.pdf")}.</p>
<h3>The substitute license and the 90-day limit</h3>
<p>"A substitute license may be issued to an individual who is eligible to hold a teaching license in Iowa," and "A substitute license is valid for five years and for not more than 90 days of teaching in one assignment during any one school year." For exceptions, "The executive director may grant permission for a substitute to serve outside of a substitute's regular authority or past the day limitation under unique circumstances" ${cite("Iowa Admin. Code r. 282—13.7", IA_13)}. We place substitute license holders in leaves and long vacancies, and track the 90-day count for each.</p>
<h3>Fingerprints, registries, and pre-hire review</h3>
<p>The Board's background rule states: "An initial applicant will be required to complete fingerprinting for a national criminal history background check," and "A check of the following registries and records will be conducted on initial applicants: the sex offender registry under Iowa Code section 692A.121, the central registry for child abuse information established under Iowa Code chapter 235A" ${cite("Iowa Admin. Code ch. 282—9", "https://www.legis.iowa.gov/docs/iac/chapter/282.9.pdf")}. Districts carry their own duty: "Prior to hiring an applicant for a school employee position, a school district or accredited nonpublic school shall have access to and shall review the information in the Iowa court information system available to the general public, the sex offender registry" and the abuse registries, where ""school employee" means an individual employed by a school district or an accredited nonpublic school, as applicable, including a part-time, substitute, or contract employee" ${cite("Iowa Code § 279.69", IA_279)}. FocusedEDU completes those reviews with every candidate file.</p>
${whereWeStaff(
  "Iowa",
  "We staff substitute programs for school districts and accredited nonpublic schools across Iowa, with recruiting built around Des Moines and the state's other large metros.",
  "That includes Des Moines Public Schools, Ankeny, and West Des Moines; the Cedar Rapids Community School District; Davenport in the Quad Cities; the Iowa City Community School District; Sioux City; Waterloo; and Council Bluffs. Because we work with one client per region, the first district to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The honest way to compare substitute partners is day-to-day fill rate. Our reference point is Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school and FocusedEDU client since 2021: our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate there, a 40%+ improvement over the school's previous provider.")}
${forSubs("Iowa", "With an associate degree or 60 college semester hours plus the 15-hour workshop you qualify for the BoEE substitute authorization; if you are eligible for an Iowa teaching license, the substitute license opens assignments of up to 90 days. We walk you through the fingerprinting and registry checks the Board requires.")}
${cta("Iowa")}`,
    faqs: [
      {
        q: "What is the difference between an Iowa substitute authorization and a substitute license?",
        a: "The substitute authorization requires an associate degree or 60 undergraduate semester hours plus a 15-clock-hour workshop and allows no more than 10 consecutive days in a 30-day period in one assignment. The substitute license is for people eligible to hold an Iowa teaching license and allows up to 90 days in one assignment per school year. Both are valid for five years.",
      },
      {
        q: "Can an Iowa substitute authorization holder stay past 10 days?",
        a: "Only with an extension. Iowa Code 256.165 lets a school district administrator file a written request with the Board of Educational Examiners to extend the ten-day limit on the basis of documented need and benefit to the instructional program.",
      },
      {
        q: "What background checks do Iowa substitutes go through?",
        a: "Initial applicants are fingerprinted for a national criminal history check and checked against the sex offender registry and the child abuse central registry. Before hiring, districts must also review Iowa court records and the registries for school employees, which Iowa Code 279.69 defines to include substitute and contract employees.",
      },
      fillRateFaq("Iowa"),
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost: if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [HUB, sibling("Minnesota"), sibling("Missouri"), sibling("Wisconsin"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },

  // ───────────────────────────── Arkansas ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-arkansas",
    eyebrow: "Substitute teacher staffing · Arkansas",
    h1: "Substitute Teacher Staffing in Arkansas",
    metaTitle: "Substitute Teacher Staffing in Arkansas",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Arkansas districts and charters — the 60-day rule, long-term substitute waivers, state/FBI and Child Maltreatment Registry checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Arkansas school districts, open-enrollment charter schools, and education service cooperatives. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each cleared through state and FBI fingerprint checks and the Child Maltreatment Central Registry, as DESE's rules require of third-party staffing vendors.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Arkansas classroom",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Arkansas" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "High school diploma or equivalency verified for every substitute (6 CAR § 180-706)",
      "Consecutive instructional days per class tracked against the 60-day limit for subs without a degree or Arkansas license",
      "Bachelor's degree or Arkansas license verified, and a long-term substitute waiver prepared each semester, for longer assignments",
      "State and FBI fingerprint-based criminal records checks through the Arkansas State Police",
      "Child Maltreatment Central Registry check through the Department of Human Services",
      "License status checked, since districts may not use a substitute whose license is suspended or revoked, even through a contract",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.porterLinen,
    sections: [
      {
        heading: "What Arkansas schools need from a substitute partner",
        body: "Arkansas sets a low entry bar and a firm ceiling. A temporary substitute needs a high school diploma or equivalency, but a class may not be taught by a substitute without a bachelor's degree or an Arkansas license for more than 60 consecutive instructional days, longer assignments need a long-term substitute waiver each semester, and no substitute may teach the same students past two semesters. A district that loses count either breaks the rule or loses a sub mid-unit.\n\nArkansas's background-check rules also name staffing agencies directly as third-party vendors and treat vendor-paid staff the same as district staff. The daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes, and special education substitutes and substitute paraprofessionals who keep IEP services running, in Little Rock, Northwest Arkansas, Fort Smith, and Jonesboro.",
      },
      {
        heading: "How FocusedEDU staffs Arkansas substitute programs",
        body: "Every Arkansas substitute we place clears state and FBI fingerprint checks and the Child Maltreatment Central Registry before a first assignment, under the same rules DESE applies to districts. Our credentialing system counts consecutive instructional days per class, routes degree-holding or licensed subs to assignments likely to run past 60 days, and prepares the long-term substitute waiver documentation your office files each semester. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ar-substitute-requirements">Arkansas substitute teacher and clearance requirements</h2>
<p class="answer-lead">Under DESE's licensure rules, an Arkansas temporary substitute must be a high school graduate or hold a high school equivalency certificate. A class may not be taught by a substitute for more than 60 consecutive instructional days unless the substitute has a bachelor's degree or an Arkansas license, longer assignments require a long-term substitute waiver each semester, and no substitute may teach the same students for more than two semesters. New hires need state and FBI fingerprint checks and a Child Maltreatment Central Registry check, and the rules cover staffing agencies by name as third-party vendors.</p>
<h3>Who can substitute, and for how long</h3>
<p>DESE's rule states: "A person employed as a temporary substitute for a licensed teacher in an educational entity shall: (1) Be a high school graduate; or (2) Hold a high school equivalency test certificate." It continues: "No class of students in any public school shall be under the instruction of a substitute teacher for more than sixty (60) consecutive instructional days in the same class during a school year unless the substitute teacher instructing the class has:" a bachelor's or higher degree or a State Board license. Beyond that, "An educational entity shall request a long-term substitute waiver for each semester, not to exceed two (2) consecutive semesters, to employ a substitute teacher," and "A substitute teacher may not provide instruction to any student for longer than two (2) semesters." Before a long-term substitute starts, "he or she shall successfully complete the state and federal criminal records checks and the Child Maltreatment Central Registry check" ${cite("6 CAR § 180-706", AR_180)}. DESE's long-term substitute page adds: "The individual must hold a minimum of a Bachelor's Degree or be licensed to teach by the state of Arkansas. A class may not be assigned a long-term substitute teacher for more than one academic year" ${cite("Arkansas DESE, Long-Term Substitutes", "https://dese.ade.arkansas.gov/Offices/educator-effectiveness/licensure-exceptions/long-term-substitutes-lts")}.</p>
<h3>Background checks, including third-party vendors</h3>
<p>Nonlicensed new hires "shall be required as a condition of employment to apply to: (A) The Identification Bureau of the Division of Arkansas State Police for a state and federal criminal records check including the taking of fingerprints; and (B) The Department of Human Services for a Child Maltreatment Central Registry check." The rules define staffing agencies directly: ""Third-party vendor" (or "outside vendor") means: (A) A person or business organization that contracts with an educational entity to provide staffing for: (i) Nonlicensed positions; (ii) Positions requiring a license issued by the State Board of Education," and a covered position includes one for which the staff person is paid "By a third-party vendor under contract with the educational entity to staff the position." A substitute working for several districts in a year benefits from one rule: "New or existing employees of an educational entity who have a contract with or work for more than one (1) school district in one (1) school year shall be required to have only one (1) criminal records check" ${cite("6 CAR pt. 194, Background Checks", AR_194)}. The accreditation standards close the loop: "Each public school district shall not employ: (1) An individual, including as a substitute teacher whether directly employed by the school or through a teaching services contract, whose license has been suspended or revoked" for a disqualifying offense ${cite("6 CAR § 61-505", "https://dese.ade.arkansas.gov/Files/Standards_for_Accreditation_of_Public_Schools_and_Districts_6CARpt.61_Legal.pdf")}. FocusedEDU completes every check before a substitute is presented.</p>
${whereWeStaff(
  "Arkansas",
  "We staff substitute programs for school districts, open-enrollment charter schools, and education service cooperatives across Arkansas, with recruiting built around central Arkansas and Northwest Arkansas.",
  "That includes the Little Rock School District, Pulaski County Special School District, and North Little Rock School District; Springdale, Rogers, Bentonville, and Fayetteville in Northwest Arkansas; Fort Smith Public Schools; Conway Public Schools; and Jonesboro Public Schools. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Day-to-day fill rate is what a district should hold a substitute partner to. Our reference point is an existing client, Odyssey Public Charter School in Wilmington, Delaware: since 2021 our weekly-pay, app-based substitute model has kept day-to-day coverage at a 95% fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Arkansas", "A high school diploma or equivalency qualifies you for day-to-day substitute work in Arkansas; with a bachelor's degree or an Arkansas teaching license you can also take long-term assignments past 60 days. You will need state and FBI fingerprint checks and a Child Maltreatment Central Registry check, which we arrange.")}
${openings("Arkansas", "North Little Rock", "October 30, 2026")}
${cta("Arkansas")}`,
    faqs: [
      {
        q: "What are the requirements to be a substitute teacher in Arkansas?",
        a: "Under 6 CAR § 180-706, a temporary substitute must be a high school graduate or hold a high school equivalency test certificate. New hires also need state and FBI fingerprint-based criminal records checks and a Child Maltreatment Central Registry check.",
      },
      {
        q: "How long can a substitute teach one class in Arkansas?",
        a: "No more than 60 consecutive instructional days in the same class in a school year, unless the substitute has a bachelor's degree or an Arkansas license. Longer assignments need a long-term substitute waiver each semester, for no more than two consecutive semesters.",
      },
      {
        q: "Do Arkansas background-check rules apply to staffing agencies?",
        a: "Yes. DESE's background-check rules define a third-party vendor as a person or business that contracts with an educational entity to provide staffing for nonlicensed or licensed positions, and treat vendor-paid staff positions the same as district-paid ones.",
      },
      {
        q: "Does a substitute working in several Arkansas districts need several checks?",
        a: "No. Under 6 CAR pt. 194, employees who work for more than one school district in one school year are required to have only one criminal records check that year.",
      },
      fillRateFaq("Arkansas"),
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your schools. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [HUB, sibling("Louisiana"), sibling("Oklahoma"), sibling("Missouri"), SPED_HUB, PARA_HUB, K12_HUB],
  },

  // ───────────────────────────── Kansas ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-kansas",
    eyebrow: "Substitute teacher staffing · Kansas",
    h1: "Substitute Teacher Staffing in Kansas",
    metaTitle: "Substitute Teacher Staffing in Kansas",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Kansas USDs and charters — KSDE substitute and emergency substitute licenses, the 90/45/25-day limits, and KBI/FBI fingerprints handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Kansas unified school districts and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a KSDE substitute or emergency substitute license backed by KBI and FBI fingerprint checks, with every assignment tracked against the day limit that matches the sub's license.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a Kansas school",
    updated: NATIONAL_WAVE2_UPDATED,
    areaServed: [{ type: "State", name: "Kansas" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "KSDE substitute teaching license (bachelor's degree plus an approved teacher education program) or emergency substitute license verified",
      "Emergency license route documented: 60 semester hours, or a high school diploma plus Greenbush training and a district's verification of hire",
      "Days per assignment tracked against the license's limit: 90 (standard), 45 (emergency with a degree), or 25 per assignment and 75 per semester (no degree)",
      "Shortage documentation prepared if your district appeals to the commissioner for more time",
      "Fingerprints on file with KSDE and checked by the KBI and FBI before licensure",
      "License expiration tracked, including first-year emergency licenses that end with the school year",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: TESTIMONIALS.herring,
    sections: [
      {
        heading: "What Kansas schools need from a substitute partner",
        body: "Kansas ties every substitute's day limit to the license they hold. A standard substitute license allows 90 days in one assignment; an emergency substitute license holder with a bachelor's degree is limited to 45; and a sub without a degree is limited to 25 days in one assignment and 75 days in a semester. A district that does not track which sub holds which license runs into those lines in the middle of a long leave.\n\nThe daily need is the one every district shares: coverage confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Wichita, the Johnson County districts, Kansas City, Kansas, and Topeka, USDs compete for the same licensed subs every morning.",
      },
      {
        heading: "How FocusedEDU staffs Kansas substitute programs",
        body: "We record each Kansas substitute's license type and degree status, route standard-license holders to long assignments, and count days per assignment and per semester so no one crosses a limit unnoticed. Every substitute is fingerprinted for the KBI and FBI check KSDE requires before licensure, and our credentialing system tracks each license's expiration. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your USD are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="ks-substitute-requirements">Kansas substitute teacher and clearance requirements</h2>
<p class="answer-lead">The Kansas State Department of Education issues a standard substitute teaching license, which requires a bachelor's degree and an approved teacher education program, and an emergency substitute teaching license, which requires at least 60 semester hours or, through KSDE's Greenbush route, a high school diploma, the Greenbush training modules, and a district's verification of hire. Day limits follow the license: 90 days in one assignment on the standard license, 45 for emergency license holders with a bachelor's degree, and 25 per assignment and 75 per semester for subs without one. Fingerprints checked by the KBI and FBI are a prerequisite to any license.</p>
<h3>Standard and emergency substitute licenses</h3>
<p>Each applicant for the standard license submits "An official transcript from an accredited institution verifying the granting of a bachelor's degree; (2) verification from an accredited institution of completion of an approved teacher education program," while "Each applicant for an emergency substitute teaching license shall submit to the state board the following: (1) An official transcript verifying the completion of at least 60 semester hours" ${cite("K.A.R. 91-1-203", KS_91_1_203)}. KSDE offers a second emergency route: "If you do not meet the 60-credit requirement, you may qualify by completing the Greenbush Emergency Substitute Training Modules," with a high school diploma and "Verification of hire from a local school district"; that license is "Non-transferable; limited to the school district listed on the license" ${cite("KSDE, License Information and Applications", KS_LICENSES)}. On validity, "Each substitute license shall expire on the license holder's fifth birthdate following issuance of the license," and "The first emergency substitute teaching license issued to an individual shall be valid for the school year in which it is issued and shall be issued for all levels" ${cite("K.A.R. 91-1-201", KS_91_1_201)}.</p>
<h3>Day limits by license</h3>
<p>The accreditation regulation sets the limits: "An education system shall not allow a person holding a substitute teaching license or certificate to teach for more than 90 days in the same assignment." "An education system shall not allow a person who holds a baccalaureate degree and an emergency substitute teaching license or certificate to teach for more than 45 days in the same assignment." And no education system may allow "any person who does not hold a baccalaureate degree to teach for more than 25 days in the same assignment or more than 75 days in a semester." For shortages: "If a governing body documents that there is an insufficient supply of substitute teachers, the governing body may appeal to the commissioner for authority to allow individuals holding an emergency substitute teaching license or certificate to continue to teach for an additional length of time" ${cite("K.A.R. 91-31-34(b)", KS_91_31_34)}. We count days per assignment and per semester for every Kansas sub and prepare the shortage documentation if your district needs to appeal.</p>
<h3>KBI and FBI fingerprinting</h3>
<p>Under KSDE's regulation, "the submittal of fingerprints shall be a prerequisite to the issuance of any certificate or license by the state board," and "Fingerprints submitted pursuant to this regulation shall be released by the Kansas state department of education to the Kansas bureau of investigation for the purpose of conducting criminal history records checks, utilizing the files and records of the Kansas bureau of investigation and the federal bureau of investigation" ${cite("K.A.R. 91-1-214", KS_91_1_214)}. KSDE adds that "Educators are also enrolled in an ongoing background check while they hold an active Kansas Educator license" ${cite("KSDE, Fingerprint Information", "https://www.ksde.gov/licensure/teacher-licensure/fingerprint-information")}, and state law provides that "The state board of education shall not knowingly issue a license to or renew the license of any person who has been convicted of:" a listed offense ${cite("K.S.A. 72-2165", "https://www.ksrevisor.gov/statutes/chapters/ch72/072_021_0065.html")}.</p>
${whereWeStaff(
  "Kansas",
  "We staff substitute programs for unified school districts and charter schools across Kansas, with recruiting built around Wichita and the Kansas side of the Kansas City metro.",
  "That includes Wichita Public Schools (USD 259); Olathe, Blue Valley, and Shawnee Mission in Johnson County; Kansas City Kansas Public Schools; Topeka Public Schools; Lawrence; Manhattan-Ogden; and Salina. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Fill rate is the first number to ask any substitute partner for. Ours comes from an existing client, Odyssey Public Charter School in Wilmington, Delaware, where since 2021 our weekly-pay, app-based substitute model has run a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Kansas", "With 60 college semester hours you qualify for KSDE's emergency substitute license; without them, a high school diploma plus the Greenbush training modules and a district's verification of hire can qualify you. A bachelor's degree and an approved teacher education program qualify you for the standard substitute license and assignments of up to 90 days. Fingerprints for the KBI and FBI check come first, and we arrange them.")}
${cta("Kansas")}`,
    faqs: [
      {
        q: "What license does a substitute teacher need in Kansas?",
        a: "A KSDE substitute teaching license, which requires a bachelor's degree and an approved teacher education program, or an emergency substitute teaching license, which requires at least 60 semester hours or, through KSDE's Greenbush route, a high school diploma, the Greenbush training modules, and a district's verification of hire.",
      },
      {
        q: "How many days can a Kansas substitute stay in one assignment?",
        a: "Under K.A.R. 91-31-34(b): 90 days on a substitute teaching license, 45 days for an emergency license holder with a bachelor's degree, and 25 days per assignment and 75 days per semester for a substitute without a bachelor's degree. A district that documents a shortage may appeal to the commissioner for more time.",
      },
      {
        q: "Do Kansas substitutes need fingerprints?",
        a: "Yes. K.A.R. 91-1-214 makes fingerprints a prerequisite to any KSDE certificate or license, and KSDE releases them to the KBI for criminal history checks against KBI and FBI records. Licensed educators are also enrolled in ongoing background monitoring.",
      },
      {
        q: "How long is a Kansas emergency substitute license valid?",
        a: "A first emergency substitute teaching license is valid for the school year in which it is issued. A standard substitute license expires on the holder's fifth birthdate following issuance.",
      },
      fillRateFaq("Kansas"),
    ],
    related: [HUB, sibling("Missouri"), sibling("Oklahoma"), sibling("Colorado"), SPED_HUB, PARA_HUB, RELATED_HUB],
  },
];
