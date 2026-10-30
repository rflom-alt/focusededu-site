/**
 * National substitute-staffing state pages, wave 1 of 3: California, Texas,
 * Florida, Illinois, Ohio. Same model as substitute-state-pages.ts (which owns
 * the home markets and the shared helpers); split by file only for size.
 *
 * Rules for this file:
 * - FocusedEDU facts are the approved ones used across the site. The 95% fill
 *   rate is Odyssey Public Charter School's, in Wilmington, Delaware, and is
 *   attributed that way every time. No clients, placements, or results are
 *   claimed in these states.
 * - Every state rule is quoted or paraphrased from the state's own page,
 *   statute, or regulation, fetched and string-checked on 2026-10-29, and
 *   linked inline. If a source stops loading, remove the detail rather than
 *   re-sourcing it from a third party.
 * - "Current openings" paragraphs are dated and reflect what the live job
 *   board (apply.focused-staffing.com) listed on the date shown. Never add one
 *   for a state without a live K-12 posting.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";

export const NATIONAL_UPDATED = "2026-10-29";

export const NATIONAL_ROLES = [
  "Day-to-day substitute teachers",
  "Long-term substitute teachers",
  "Special education teachers",
  "Paraprofessionals and 1:1 aides",
  "School nurses",
  "Speech-language pathologists",
  "Occupational and physical therapists",
  "School psychologists",
];

/** Dated pointer to the live board; only used where a K-12 posting existed on that date. */
export const openings = (state: string, places: string, asOf = "October 29, 2026") =>
  `<p><strong>Current openings in ${state}.</strong> As of ${asOf}, Focused Staffing Group's job board lists K-12 school openings in ${places}. See <a href="/jobs">current openings in ${state} and our other markets</a>; postings leave the list the moment they are filled.</p>`;

export const whereWeStaff = (state: string, lead: string, body: string) =>
  `<h2 id="where-we-staff">Where we staff in ${state}</h2>
<p class="answer-lead">${lead}</p>
<p>${body}</p>`;

const SPED_HUB = { label: "Special Education Staffing", slug: "special-education-staffing" };
const PARA_HUB = { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" };
const K12_HUB = { label: "K-12 Education Staffing", slug: "k12-education-staffing" };

export const substituteStatePagesNationalA: ServicePage[] = [
  // ───────────────────────────── California ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-california",
    eyebrow: "Substitute teacher staffing · California",
    h1: "Substitute Teacher Staffing in California",
    metaTitle: "Substitute Teacher Staffing in California",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for California districts, COEs, and charters — CTC 30-Day permits, DOJ/FBI clearance, and TB checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for California school districts, county offices of education, and charter schools. We recruit, clear, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with CTC emergency substitute permits, DOJ and FBI criminal records summaries, and tuberculosis risk assessments verified before a first assignment.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher leading a lesson in a California classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "California" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "CTC Emergency 30-Day Substitute Teaching Permit (or Career Substitute permit) verified and tracked to its one-year expiration",
      "Conferred bachelor's degree on official transcript, as the 30-Day permit requires",
      "DOJ and FBI criminal records summary under Education Code 44237 / 45125.1, with subsequent-arrest service",
      "Tuberculosis risk assessment within 60 days of start (Education Code 49406)",
      "Days served per teacher tracked against the 30-day limit (20 in special education)",
      "Statement of Need (CL-505a) prepared for your HR office to keep on file",
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
        heading: "What California schools need from a substitute partner",
        body: "California runs the largest K-12 system in the country, and its substitute rules put a clock on every assignment. The permit most day-to-day subs carry caps service at 30 days for any one teacher in a school year, and 20 in a special education classroom, so a long leave is a scheduling problem before it is a recruiting problem. Districts need a partner who knows which permit each sub holds, how many days they have used with which teacher, and when a Career Substitute permit or a credentialed teacher has to step in.\n\nThe daily problem is the same one every state has: the 5:45 a.m. call-out, the reliable subs already committed to the school that confirmed them first, the special education aide pulled off a one-on-one assignment to cover a room. In California the pool is deep on paper and shallow in practice, because every district, county office, and charter in a metro is calling the same cleared, permitted people on the same morning.",
      },
      {
        heading: "How FocusedEDU staffs California substitute programs",
        body: "We build a substitute pool for your buildings specifically, then hold it with the two things that keep California subs active: weekly pay, every Friday, by direct deposit or Cash App, and a mobile app where vetted subs pick up and swap shifts the moment an absence posts. We work with one client per region, so the pool we recruit around your schools is never presented to the district next door, and every placement is temp-to-perm at no cost: a long-term sub who proves out can become your teacher with no conversion fee.\n\nOur automated credentialing tracks each sub's CTC permit, DOJ and FBI clearance, TB assessment, and days served per teacher, and cuts typical time-to-hire roughly in half. FocusedEDU has staffed K-12 schools for 12 years under a screening standard built by our founder, Robert Flom, a former K-12 teacher. For the full picture of what we staff, see [K-12 education staffing](/k12-education-staffing), [special education staffing](/special-education-staffing), and [paraprofessional staffing](/paraprofessional-staffing).",
      },
    ],
    richHtml: `<h2 id="ca-substitute-requirements">California substitute teacher and clearance requirements</h2>
<p class="answer-lead">A California substitute needs a document from the Commission on Teacher Credentialing — most often the Emergency 30-Day Substitute Teaching Permit, which requires a conferred bachelor's degree and CTC fingerprinting — plus a Department of Justice criminal records summary and a tuberculosis risk assessment. A 30-Day permit holder may serve no more than 30 days for any one teacher in a school year, or 20 in special education.</p>
<h3>The Emergency 30-Day Substitute Teaching Permit</h3>
<p>CTC's leaflet for the permit requires "Official transcripts showing the conferral of a baccalaureate or higher degree from a regionally accredited college or university. This satisfies both the degree requirement and the Basic Skills Requirement beginning 6/29/2024," along with CTC fingerprinting and a processing fee. The service limit is explicit: "The holder may serve as a substitute for no more than 30 days for any one teacher during the school year, except in a special education classroom, where the holder may serve for no more than 20 days" ${cite("CTC, Emergency 30-Day Substitute Teaching Permit (CL-505p)", "https://www.ctc.ca.gov/credentials/leaflets/cl-505p/")}. The permit is valid for one year and renewable, and to employ anyone on it "the employing agency must keep a completed Statement of Need form (CL-505a) on file." We prepare that form with every candidate's file.</p>
<h3>Longer assignments: the Emergency Career Substitute Teaching Permit</h3>
<p>For subs who have built a California track record, CTC issues the Career Substitute permit: "The holder may serve as a substitute for no more than 60 days for any one teacher during the school year," again with a 20-day limit in special education. Eligibility requires a bachelor's degree plus "Three consecutive years* of at least 90 days per year of day-to-day substitute teaching accumulated from one or more California school districts," and "Individuals must submit their application packet through their employing agency" ${cite("CTC, Emergency Career Substitute Teaching Permit (CL-505b)", "https://www.ctc.ca.gov/credentials/leaflets/emergency-career-sub-teaching-permit-(cl-505b)")}. Beyond those limits, a leave needs a credentialed teacher, which is why we record days served per teacher for every sub and flag an assignment well before day 30.</p>
<h3>Fingerprinting, contractor employees, and TB</h3>
<p>California's Education Code reaches agency staff directly. Section 45125.1 provides that "Any entity that has a contract with a local educational agency shall ensure that any employee who interacts with pupils has a valid criminal records summary as described in Section 44237," and that the contracting entity must pass along subsequent arrest and conviction information it receives ${cite("Cal. Educ. Code §45125.1", "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EDC&sectionNum=45125.1.")}. Section 49406 adds the health rule: a person shall not be initially employed by a school district, or employed under contract, in a certificated or classified position "unless the person has submitted to a tuberculosis risk assessment within the past 60 days," with reassessment at least once every four years ${cite("Cal. Educ. Code §49406", "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EDC&sectionNum=49406.")}. Every FocusedEDU substitute in California carries both before a first shift, and our credentialing system flags the four-year TB cycle and the one-year permit expiration.</p>
${whereWeStaff(
  "California",
  "We staff substitute programs for districts, county offices of education, and charter schools across California, from the Los Angeles basin and San Diego to the Central Valley, the Bay Area, Sacramento, and the Inland Empire.",
  "That includes the metros around the state's largest districts: Los Angeles and Long Beach; San Diego; Fresno and Clovis; Sacramento and Elk Grove; the Inland Empire around Riverside, San Bernardino, and Corona-Norco; San Francisco and the Bay Area; Bakersfield and Kern County; and Orange County, including Capistrano. Because we work with one client per region, the first district or charter network to sign in a metro gets the pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school that partnered with FocusedEDU in 2021: our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate there, a 40%+ improvement over the school's previous provider.")}
${forSubs("California", "You will need a CTC substitute permit (a conferred bachelor's degree qualifies you for the Emergency 30-Day Substitute Teaching Permit), CTC and DOJ fingerprint clearance, and a tuberculosis risk assessment within 60 days of starting. We tell you exactly which documents to gather and in what order, and we prepare the Statement of Need your school keeps on file.")}
${openings("California", "Los Angeles")}
${cta("California")}`,
    faqs: [
      {
        q: "Who can be a substitute teacher in California?",
        a: "A credentialed teacher, or a person holding a Commission on Teacher Credentialing substitute permit. The most common is the Emergency 30-Day Substitute Teaching Permit, which requires a conferred bachelor's degree and CTC fingerprinting; the degree also satisfies the Basic Skills Requirement since June 29, 2024.",
      },
      {
        q: "How many days can a 30-Day permit holder cover one teacher?",
        a: "No more than 30 days for any one teacher during the school year, and no more than 20 days in a special education classroom. An Emergency Career Substitute permit raises the general education limit to 60 days per teacher; the special education limit stays at 20.",
      },
      {
        q: "Do agency substitutes in California need their own background check?",
        a: "Yes. Education Code 45125.1 requires any entity with a contract with a local educational agency to ensure that any employee who interacts with pupils has a valid criminal records summary under Section 44237. FocusedEDU completes DOJ and FBI clearance for every substitute before presenting them.",
      },
      {
        q: "Is a TB test required for substitutes in California?",
        a: "A tuberculosis risk assessment is. Education Code 49406 bars initial employment by a district, or under contract, in a certificated or classified position unless the person has had a TB risk assessment within the past 60 days, with an examination if risk factors are identified, and reassessment at least every four years.",
      },
      {
        q: "What fill rate can a California district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire one of your long-term subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost: if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Arizona", slug: "substitute-teacher-staffing-arizona" },
      { label: "Substitute Teacher Staffing in Washington", slug: "substitute-teacher-staffing-washington" },
      { label: "Substitute Teacher Staffing in Colorado", slug: "substitute-teacher-staffing-colorado" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── Texas ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-texas",
    eyebrow: "Substitute teacher staffing · Texas",
    h1: "Substitute Teacher Staffing in Texas",
    metaTitle: "Substitute Teacher Staffing in Texas",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Texas ISDs and charters — TEA fingerprinting for agency subs, Do Not Hire Registry checks, emergency permits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Texas independent school districts and open-enrollment charter schools. We recruit, fingerprint, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with TEA fingerprint clearance and Do Not Hire Registry checks completed before a first assignment and every long assignment tracked against the 30-instructional-day emergency permit line.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher working with students in a Texas classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Texas" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "DPS/FBI fingerprint-based criminal history check completed through TEA, as TEA requires for staffing-agency substitutes",
      "TEA Do Not Hire Registry checked before any candidate is presented",
      "Your district's own substitute qualifications verified (19 TAC §231.1(e) leaves them to the district)",
      "Bachelor's degree on official transcript for any sub who may need an emergency permit",
      "Assignment length tracked against the 30-instructional-day emergency permit trigger and the 45-day activation window",
      "Written-notice rule for 30+ consecutive days with an uncertified teacher flagged for your HR office",
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
        heading: "What Texas schools need from a substitute partner",
        body: "Texas does not issue a state substitute certificate, so each ISD and charter writes its own substitute qualifications and carries its own compliance load. What the state does regulate is sharp: fingerprinting rules that treat staffing-agency substitutes differently from district hires, a Do Not Hire Registry that must be checked before anyone is hired or contracted, and an emergency permit requirement that kicks in when an assignment runs past 30 instructional days. A partner who does not know those lines creates work for your HR office instead of removing it.\n\nThe needs we hear from Texas districts are the same four every state has — day-to-day coverage confirmed before first bell, long-term substitutes for leaves and vacancies, building subs, and special education substitutes and substitute paraprofessionals who keep IEP services running — scaled to districts that may run 50 or 250 campuses. In a metro like Houston or Dallas-Fort Worth, every ISD and charter network is calling the same cleared substitutes on the same morning.",
      },
      {
        heading: "How FocusedEDU staffs Texas substitute programs",
        body: "We fingerprint every Texas substitute through TEA, because TEA says that is how it must be done for staffing-agency subs, and we check the Do Not Hire Registry before a candidate is presented. Our credentialing system then tracks days served per assignment, so you know before day 30 whether an emergency permit will be needed, and we assemble the transcript and fingerprint record the permit requires. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool at once. We work with one client per region, so the subs we recruit for your ISD are not presented to the neighboring district or the charter across the freeway. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="tx-substitute-requirements">Texas substitute teacher and clearance requirements</h2>
<p class="answer-lead">Texas has no state substitute certificate: under SBEC rules, a district that employs an uncertified substitute must itself ensure the person has the knowledge and skills for the assignment. Every substitute must pass a DPS/FBI fingerprint check, and TEA requires staffing-agency substitutes to be fingerprinted through TEA rather than the district's LEE FAST pass. An uncertified person in one assignment for more than 30 instructional days must be on an emergency permit.</p>
<h3>District-set qualifications under 19 TAC §231.1</h3>
<p>The State Board for Educator Certification's assignment rule states: "The assignment requirements in this chapter apply to substitute teachers. If a school district must employ a substitute teacher who is not certified, the district must ensure the individual has the appropriate knowledge and skills to serve in the assignment. A list of the substitute teachers shall be retained in the school district files" ${cite("19 TAC §231.1, Criteria for Assignment of Public School Personnel", "https://tea.texas.gov/laws-and-rules/sbec-rules-tac/sbec-tac-currently-effect/ch231a.pdf")}. In practice that means degree level, experience, and training requirements differ from one ISD to the next, and we verify every FocusedEDU substitute against the hiring district's own posted standard.</p>
<h3>Fingerprinting through TEA and the Do Not Hire Registry</h3>
<p>TEA lists substitute teachers among the people who must be fingerprinted, and it draws a line that matters for anyone using an agency: "LEE FAST cannot be used for substitute teachers employed through staffing agencies; these individuals must be fingerprinted" through TEA's process ${cite("TEA, Fingerprinting and Do Not Hire Registry Requirements", "https://tea.texas.gov/texas-educators/fingerprinting-for-employees-applicants-and-contractors")}. The same page requires a Do Not Hire Registry check before hiring employees or contractors. The statutory basis for contractor employees is Education Code §22.0834, which applies when the person has or will have continuing duties related to the contracted services and direct contact with students ${cite("Tex. Educ. Code §22.0834", "https://texas.public.law/statutes/tex._educ._code_section_22.0834")}. FocusedEDU completes both steps before a substitute is presented.</p>
<h3>Emergency permits for assignments beyond 30 instructional days</h3>
<p>TEA's guide for districts is direct: "Individuals in assignments for more than 30 instructional days must be on an emergency permit, activated within 45 instructional days" ${cite("TEA, A Guide to Emergency Permits for Districts and Charter Schools", "https://tea.texas.gov/educators/certification/emergency-permits-guide-0.pdf")}. The permit rules themselves require that "The individual must hold a bachelor's degree or higher from an accredited institution of higher education," that "The emergency permit must be submitted to the Texas Education Agency staff within 45 instructional days from the date of assignment," and that an emergency permit "may not exceed one school year in the same assignment" ${cite("19 TAC Chapter 230, Subchapter F, Permits", "https://tea.texas.gov/laws-and-rules/sbec-rules-tac/sbec-tac-currently-effect/ch230f.pdf")}. Separately, a district that "assigns an inappropriately certified or uncertified teacher to the same classroom for more than 30 consecutive instructional days during the same school year shall provide written notice" to parents ${cite("Tex. Educ. Code §21.057", "https://texas.public.law/statutes/tex._educ._code_section_21.057")}. We count instructional days per assignment for every substitute and hand your HR office a complete permit file before the deadline, not after it.</p>
${whereWeStaff(
  "Texas",
  "We staff substitute programs for independent school districts and open-enrollment charter schools across Texas, with recruiting built around the state's largest metros.",
  "That includes Greater Houston, home to Houston ISD, Cypress-Fairbanks, Aldine, Fort Bend, and Conroe; Dallas-Fort Worth, including Dallas ISD, Fort Worth ISD, Frisco, Arlington, and Garland; Austin; San Antonio; and El Paso. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Texas", "Texas substitutes are fingerprinted through TEA and checked against the Do Not Hire Registry, and each district sets its own degree and training requirements, so we match you to the districts where you already qualify. If you hold a bachelor's degree, you can also cover long assignments on a district-requested emergency permit.")}
${cta("Texas")}`,
    faqs: [
      {
        q: "Does Texas require a substitute teaching certificate?",
        a: "No. Texas has no state substitute certificate. Under 19 TAC §231.1, a district that employs an uncertified substitute must ensure the individual has the appropriate knowledge and skills for the assignment and keep a list of its substitutes on file, so qualifications are set district by district.",
      },
      {
        q: "How are staffing-agency substitutes fingerprinted in Texas?",
        a: "Through TEA. TEA states that LEE FAST cannot be used for substitute teachers employed through staffing agencies; those individuals must be fingerprinted through TEA's own process, and TEA also requires a Do Not Hire Registry check before hiring employees or contractors. FocusedEDU completes both before presenting a candidate.",
      },
      {
        q: "When does a Texas substitute need an emergency permit?",
        a: "When an assignment runs more than 30 instructional days. TEA's guidance says such individuals must be on an emergency permit activated within 45 instructional days; the permit requires a bachelor's degree, is valid for the remainder of the school year, and may not exceed one school year in the same assignment.",
      },
      {
        q: "Do parents have to be notified about long-term uncertified substitutes?",
        a: "Yes. Education Code §21.057 requires a district that assigns an inappropriately certified or uncertified teacher to the same classroom for more than 30 consecutive instructional days in a school year to provide written notice to parents. We flag the 30-day line for your HR office in advance.",
      },
      {
        q: "What fill rate can a Texas district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the ISD next to ours?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your campuses. Every placement is also temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Florida", slug: "substitute-teacher-staffing-florida" },
      { label: "Substitute Teacher Staffing in Arizona", slug: "substitute-teacher-staffing-arizona" },
      { label: "Substitute Teacher Staffing in Georgia", slug: "substitute-teacher-staffing-georgia" },
      SPED_HUB,
      PARA_HUB,
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },

  // ───────────────────────────── Florida ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-florida",
    eyebrow: "Substitute teacher staffing · Florida",
    h1: "Substitute Teacher Staffing in Florida",
    metaTitle: "Substitute Teacher Staffing in Florida",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Florida school districts and charters — Level 2 FDLE/FBI screening, district substitute rules, and 30-day appraisals handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Florida's district school boards and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each one Level 2 background-screened through FDLE and the FBI and verified against the hiring district's own substitute rules before a first assignment.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Florida classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Florida" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Level 2 background screening: FDLE statewide and FBI national fingerprint checks (s. 1012.32 and s. 435.04, F.S.)",
      "High school diploma or equivalent at minimum, plus the hiring district's own degree or credit requirement",
      "District substitute orientation and, for candidates without teaching experience, classroom-management training completed",
      "Days in a single classroom tracked against the 30-day performance-appraisal line (s. 1012.35)",
      "Florida educator certificate or temporary certificate verified for long-term and certified assignments",
      "48-hour self-report of disqualifying arrests acknowledged in writing",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
      name: "Erin D. Murphy-Richardson",
      role: "Superintendent, The Barack Obama Green Charter Schools (Plainfield, NJ)",
    },
    sections: [
      {
        heading: "What Florida schools need from a substitute partner",
        body: "Florida leaves substitute qualifications to its 67 district school boards, and the districts are enormous: six of them enroll more than 100,000 students each. That scale changes the substitute problem. A county system may have 200 schools posting absences into the same pool every morning, and a charter in the same county is drawing from that pool with a fraction of the HR staff. The rules that are statewide are the ones about safety and quality: Level 2 fingerprint screening for anyone with direct student contact, a minimum of a high school diploma, orientation training, and a performance appraisal for substitutes who stay in one classroom 30 days or more.\n\nDistricts and charters ask us for the same mix every state needs — day-to-day substitutes confirmed before first bell, long-term substitutes for leaves, and special education substitutes and substitute paraprofessionals who keep IEP services running — with one Florida-specific requirement layered on: every substitute's screening has to be current and documented to the district's own standard, because the district owns the compliance.",
      },
      {
        heading: "How FocusedEDU staffs Florida substitute programs",
        body: "We screen to Florida's statewide floor and then to your district's own substitute rules, so the candidate file your HR office receives is complete the first time. Our automated credentialing tracks each substitute's Level 2 screening, training, and days per classroom, and cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district or charter network are not presented to a competing school in the same county. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [staffing a multi-site charter network](/staffing-a-multi-site-charter-network).",
      },
    ],
    richHtml: `<h2 id="fl-substitute-requirements">Florida substitute teacher and clearance requirements</h2>
<p class="answer-lead">Florida has no state substitute certificate. Section 1012.35, Florida Statutes, directs each district school board to adopt its own rules for hiring substitutes, which must include fingerprinting, a minimum of a high school diploma or equivalent, and orientation training. Anyone hired or contracted for a position with direct student contact must pass Level 2 background screening — FDLE statewide and FBI national fingerprint checks.</p>
<h3>District rules under s. 1012.35</h3>
<p>The statute states: "Each district school board shall adopt rules prescribing the compensation of, and the procedure for employment of, substitute teachers." The procedure must include "the filing of a complete set of fingerprints as required in s. 1012.32; documentation of a minimum education level of a high school diploma or equivalent," and completion of an orientation program; candidates with no prior teaching experience must also complete classroom-management training ${cite("s. 1012.35, F.S., Substitute teachers", "https://www.flsenate.gov/Laws/Statutes/2025/1012.35")}. The same section requires districts to develop performance appraisal measures for "substitutes who provide instruction for 30 or more days in a single classroom placement." We track days per classroom for every substitute so your principals know when that appraisal is due.</p>
<h3>Level 2 screening for employees and contracted personnel</h3>
<p>Section 1012.32 reaches agency staff by its own terms: "Instructional and noninstructional personnel who are hired or contracted to fill positions that require direct contact with students in any district school system or university lab school must, upon employment or engagement to provide services, undergo background screening" ${cite("s. 1012.32, F.S., Qualifications of personnel", "https://www.flsenate.gov/Laws/Statutes/2025/1012.32")}. Section 1012.465 extends the same screening to noninstructional employees and contractual personnel who have direct contact with students ${cite("s. 1012.465, F.S.", "https://www.flsenate.gov/Laws/Statutes/2025/1012.465")}. Level 2 screening means "fingerprinting for statewide criminal history records checks through the Department of Law Enforcement, national criminal history records checks through the Federal Bureau of Investigation" ${cite("s. 435.04, F.S., Level 2 screening standards", "https://www.flsenate.gov/Laws/Statutes/2025/435.04")}. Every FocusedEDU substitute in Florida clears it before being presented.</p>
<h3>Long-term and certified assignments: the temporary certificate</h3>
<p>Florida does not issue a long-term substitute permit; a district sets its own standard for long assignments, and a substitute who qualifies for a Florida educator certificate can hold one. For teachers entering the profession, "A temporary certificate is valid for 5 school fiscal years, is limited to a one-time issuance, and is nonrenewable," and every certificate applicant "must be fingerprinted and screened in accordance with s. 1012.32" ${cite("s. 1012.56, F.S., Educator certification requirements", "https://www.flsenate.gov/Laws/Statutes/2025/1012.56")}. We verify certificate status for any substitute placed in a certified or long-term role.</p>
${whereWeStaff(
  "Florida",
  "We staff substitute programs for district school boards and charter schools across Florida, with recruiting built around the state's largest metros.",
  "That includes Miami-Dade and Broward County around Miami and Fort Lauderdale; Palm Beach County; Hillsborough and Manatee around Tampa and Bradenton; Orange and Osceola around Orlando and Kissimmee; Duval County and Jacksonville; Lee and Collier around Fort Myers and Naples; Brevard County on the Space Coast; and Lake County. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("Fill rate is the number that shows whether a substitute program works. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Florida", "Florida substitutes need Level 2 fingerprint screening, at least a high school diploma or equivalent, and the hiring district's orientation, with classroom-management training if you have not taught before. District requirements vary, so we match you to the districts where you already qualify.")}
${cta("Florida")}`,
    faqs: [
      {
        q: "Does Florida require a substitute teaching certificate?",
        a: "No. Section 1012.35, F.S., directs each district school board to adopt its own rules for employing substitutes. The statewide minimums are fingerprinting under s. 1012.32, a high school diploma or equivalent, and orientation training, with classroom-management training for candidates who have never taught.",
      },
      {
        q: "What background screening do Florida substitutes need?",
        a: "Level 2 screening: statewide criminal history checks through the Florida Department of Law Enforcement and national checks through the FBI, based on fingerprints. Section 1012.32 applies it to personnel hired or contracted for positions with direct student contact, which includes agency substitutes.",
      },
      {
        q: "What happens when a substitute stays in one Florida classroom for 30 days?",
        a: "Section 1012.35 requires districts to develop performance appraisal measures for substitutes who provide instruction for 30 or more days in a single classroom placement. We track days per classroom and flag the appraisal date for your principals.",
      },
      {
        q: "Is there a long-term substitute permit in Florida?",
        a: "No. Districts set their own standards for long assignments. A substitute who qualifies for a Florida educator certificate can hold one; the temporary certificate for new teachers is valid for five school fiscal years, issued once, and nonrenewable.",
      },
      {
        q: "What fill rate can a Florida district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff a competing school in our county?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Georgia", slug: "substitute-teacher-staffing-georgia" },
      { label: "Substitute Teacher Staffing in Texas", slug: "substitute-teacher-staffing-texas" },
      { label: "Substitute Teacher Staffing in North Carolina", slug: "substitute-teacher-staffing-north-carolina" },
      SPED_HUB,
      PARA_HUB,
      { label: "Staffing a Multi-Site Charter Network", slug: "staffing-a-multi-site-charter-network" },
    ],
  },

  // ───────────────────────────── Illinois ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-illinois",
    eyebrow: "Substitute teacher staffing · Illinois",
    h1: "Substitute Teacher Staffing in Illinois",
    metaTitle: "Substitute Teacher Staffing in Illinois",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Illinois districts and charters — ISBE Substitute and Short-Term Substitute licenses, ISP/FBI fingerprint checks, 90-day limits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Illinois school districts, charter schools, and regional offices of education. We recruit, license-verify, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with ISBE Substitute or Short-Term Substitute Teaching Licenses confirmed, fingerprint-based ISP and FBI checks completed, and the 90-day and 5-day assignment limits tracked for every sub.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in an Illinois classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Illinois" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "ISBE Substitute Teaching License (bachelor's degree, or 90 credit hours in an approved preparation program) verified in ELIS",
      "Short-Term Substitute Teaching License (associate's degree or 60 credit hours) verified, with the district-provided training documented",
      "Fingerprint-based Illinois State Police and FBI criminal history records check, plus sex offender and violent-offender database checks (105 ILCS 5/10-21.9)",
      "Days served per licensed teacher tracked against the 90-consecutive-day limit (120 for PEL/ELS holders; 5 for Short-Term licensees)",
      "Vacancy-coverage clock tracked against the 30-calendar-day notice rule to the regional office of education",
      "License registration fees paid and current, since an unpaid license is not valid for employment",
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
        heading: "What Illinois schools need from a substitute partner",
        body: "Illinois sorts substitutes into two licenses with very different limits. A Substitute Teaching License holder can cover one licensed teacher for up to 90 consecutive paid school days; a Short-Term Substitute Teaching License holder, who may hold only an associate's degree or 60 credit hours, is capped at five consecutive days per teacher and cannot be hired for an absence expected to last six days or more. A district that schedules without tracking which license each sub holds will discover the difference in an audit.\n\nBeyond the licenses, Illinois districts, charters, and regional offices of education need what every state needs: day-to-day substitutes confirmed before first bell, long-term substitutes who can carry a semester, and special education substitutes and substitute paraprofessionals who keep IEP services running. Chicago Public Schools and the collar-county districts around it draw on one regional pool, and a reliable, licensed sub commits to whichever school confirms first.",
      },
      {
        heading: "How FocusedEDU staffs Illinois substitute programs",
        body: "We record each Illinois substitute's license type at onboarding and count days served per licensed teacher, so a Short-Term licensee is never scheduled into a six-day absence and a long leave is assigned to a sub who can legally finish it. Our automated credentialing tracks the fingerprint-based ISP and FBI check, the license registration fees that keep a license valid, and the district training Illinois requires for short-term subs, and it cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="il-substitute-requirements">Illinois substitute teacher and clearance requirements</h2>
<p class="answer-lead">Illinois substitutes hold one of two ISBE licenses. The Substitute Teaching License requires a bachelor's degree, or 90 credit hours in an approved educator preparation program, and allows up to 90 consecutive paid school days per licensed teacher. The Short-Term Substitute Teaching License requires an associate's degree or 60 credit hours and is limited to five consecutive days per teacher. Every substitute passes a fingerprint-based Illinois State Police and FBI check.</p>
<h3>The Substitute Teaching License and the 90-day limit</h3>
<p>The School Code provides: "Applicants for a Substitute Teaching License must hold a bachelor's degree or higher from a regionally accredited institution of higher education or must be enrolled in an approved educator preparation program in this State and have earned at least 90 credit hours." It also sets the long-assignment ceiling for fully licensed teachers who substitute: "A substitute teacher who holds a Professional Educator License or Educator License with Stipulations shall not teach for more than 120 school days for any one licensed teacher under contract in the same school year" ${cite("105 ILCS 5/21B-20, Types of licenses", "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=010500050K21B-20")}. ISBE's substitute page states the general rule for substitute licensees — "Cannot teach more than 90 consecutive paid school days per licensed teacher in the same school year" — and notes that "Substitute licenses are valid for 5 years, and may be renewed with the payment of registration fees" ${cite("ISBE, Substitute Licenses", "https://www.isbe.net/Pages/Short-Term-Sub-Teach.aspx")}. ISBE's licensure application page lists the Substitute Teaching License fee at $50 and the Short-Term license at $25, and warns that "The license is not valid for employment until these fees are paid" ${cite("ISBE, Licensure Application Process", "https://www.isbe.net/Pages/Educator-Licensure-Application.aspx")}.</p>
<h3>The Short-Term Substitute Teaching License and the five-day rule</h3>
<p>The School Code states that "Applicants for a Short-Term Substitute Teaching License must hold an associate's degree or have completed at least 60 credit hours from a regionally accredited institution of higher education," and it draws the scheduling line: "For teacher absences lasting 6 or more days per licensed teacher who is under contract, a school district may not hire an individual holding a Short-Term Substitute Teaching License" ${cite("105 ILCS 5/21B-20", "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=010500050K21B-20")}. ISBE adds that "All districts utilizing short-term substitute teachers must provide the teachers with a training prior to employment" ${cite("ISBE, Substitute Licenses", "https://www.isbe.net/Pages/Short-Term-Sub-Teach.aspx")}. For vacant positions, the Code allows a district to employ a substitute "for no longer than 30 calendar days per each vacant position in the district if the district notifies the appropriate regional office of education within 5 business days," with extensions available on request. We record license type for every sub and schedule against these limits automatically.</p>
<h3>Fingerprint-based criminal history checks</h3>
<p>Section 10-21.9 of the School Code requires applicants for school employment to authorize a fingerprint-based criminal history records check, and provides that "The Illinois State Police and the Federal Bureau of Investigation shall furnish, pursuant to a fingerprint-based criminal history records check, records of convictions" to the school board, along with checks of the Statewide Sex Offender Database and the Statewide Murderer and Violent Offender Against Youth Database. A substitute seeking work in multiple districts may authorize the check through the regional superintendent ${cite("105 ILCS 5/10-21.9, Criminal history records checks", "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=010500050K10-21.9")}. FocusedEDU completes the check and keeps the result on file before a substitute is presented.</p>
${whereWeStaff(
  "Illinois",
  "We staff substitute programs for districts, charter schools, and regional offices of education across Illinois, from Chicago and its collar counties to the state's downstate hubs.",
  "That includes Chicago and the suburbs served by its largest districts — Elgin and School District U-46, Aurora and Naperville (Indian Prairie and Naperville 203), Plainfield, Algonquin, Oswego, Schaumburg, and Romeoville — along with Rockford, Springfield, and Peoria. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Illinois", "You will need an ISBE Substitute Teaching License (a bachelor's degree, or 90 credit hours in an approved preparation program) or a Short-Term Substitute Teaching License (an associate's degree or 60 credit hours), plus a fingerprint-based ISP and FBI check. We walk you through ELIS, the fees, and the district training the short-term license requires.")}
${cta("Illinois")}`,
    faqs: [
      {
        q: "What license do you need to substitute teach in Illinois?",
        a: "An ISBE Substitute Teaching License, which requires a bachelor's degree or 90 credit hours in an approved educator preparation program, or a Short-Term Substitute Teaching License, which requires an associate's degree or 60 credit hours. Licensed teachers with a PEL or ELS do not need a separate substitute license.",
      },
      {
        q: "How long can an Illinois substitute cover one teacher?",
        a: "A Substitute Teaching License holder can teach up to 90 consecutive paid school days for one licensed teacher in a school year; a PEL or ELS holder can go to 120 school days. A Short-Term Substitute Teaching License holder is limited to five consecutive days per teacher and cannot be hired for an absence of six or more days.",
      },
      {
        q: "What background check do Illinois substitutes need?",
        a: "A fingerprint-based criminal history records check under 105 ILCS 5/10-21.9, with records furnished by the Illinois State Police and the FBI, plus checks of the Statewide Sex Offender Database and the Statewide Murderer and Violent Offender Against Youth Database. Substitutes working in multiple districts may authorize the check through the regional superintendent.",
      },
      {
        q: "Who trains Short-Term Substitute license holders?",
        a: "The district. ISBE states that all districts using short-term substitute teachers must provide them with training prior to employment. We document that training in each substitute's file.",
      },
      {
        q: "What fill rate can an Illinois district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout. We also work with one client per region, so the pool we build for you serves only your schools.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Wisconsin", slug: "substitute-teacher-staffing-wisconsin" },
      { label: "Substitute Teacher Staffing in Michigan", slug: "substitute-teacher-staffing-michigan" },
      { label: "Substitute Teacher Staffing in Ohio", slug: "substitute-teacher-staffing-ohio" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── Ohio ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-ohio",
    eyebrow: "Substitute teacher staffing · Ohio",
    h1: "Substitute Teacher Staffing in Ohio",
    metaTitle: "Substitute Teacher Staffing in Ohio",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Ohio districts, ESCs, and community schools — 1-year/5-year substitute licenses, BCI/FBI checks, and the non-degree route handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Ohio school districts, educational service centers, and community schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, and we deliver the employer-requested substitute license file — transcripts, BCI and FBI checks, superintendent's recommendation — ready for your office to approve.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in an Ohio school",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Ohio" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Ohio 1-Year or 5-Year Substitute Teaching License, requested and recommended by the employing superintendent, verified in CORE",
      "Bachelor's degree on official transcript for the standard substitute license; the district's own educational requirement for the temporary non-degree license",
      "BCI criminal records check, with FBI check unless the five-year Ohio residency exception applies (R.C. 3319.39)",
      "License field tracked: education degree (unlimited), subject area, or general substitute (one semester per class with board approval)",
      "Local board approval documented for extended general-substitute assignments",
      "License expiration and renewal tracked in our credentialing system",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
    },
    sections: [
      {
        heading: "What Ohio schools need from a substitute partner",
        body: "Ohio's substitute license is unusual in one way that matters to a district: the sub has to be hired first. The State Board of Education issues a one-year or five-year substitute license on the request and recommendation of the employing superintendent, and the employer's e-signer approves the application. That puts the paperwork on your office, and it means a staffing partner either arrives with a complete file or adds to the pile.\n\nThe rest of the picture is familiar. Ohio districts, educational service centers, and community schools need day-to-day substitutes confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. In Columbus, Cincinnati, Cleveland, and their suburbs, a cleared, licensed sub can reach a dozen districts in a morning, and commits to the one that confirmed first and pays on time.",
      },
      {
        heading: "How FocusedEDU staffs Ohio substitute programs",
        body: "We hand your superintendent's office a complete substitute license file for every candidate — official transcripts, current BCI and FBI background checks, and the application ready for the e-signer — so the request-and-recommend step takes minutes, not weeks. Our credentialing system records each sub's license type and field, tracks general-substitute assignments against the one-semester board-approval rule, and flags license expirations. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="oh-substitute-requirements">Ohio substitute teacher and clearance requirements</h2>
<p class="answer-lead">Ohio substitutes hold a one-year or five-year substitute teaching license issued by the State Board of Education at the request of the employing superintendent. The standard license requires at least a bachelor's degree; since 2023, a one-year temporary license is available to candidates without a degree who meet the employing district's own educational requirements. Every applicant for any school position must pass a BCI criminal records check, with an FBI check unless a residency exception applies.</p>
<h3>The 1-Year and 5-Year Substitute Teaching Licenses</h3>
<p>The State Board's substitute page states that "Candidates must have a minimum of a bachelor's degree from an accredited college or university for the standard substitute teaching license (official transcripts required)," and that "All applicants must have current background checks on file with the State Board of Education." The license field follows the degree: an education degree allows unlimited substitute service, a subject-area degree covers that subject, and the general substitute license "is valid for teaching one semester in an assigned class of any grade level with local board approval (the employing Ohio school board must approve extended assignments)" ${cite("Ohio State Board of Education, Substitute Licenses", "https://sboe.ohio.gov/educator-licensure/apply-for-a-new-license/substitute-licenses")}. The one-semester rule is in statute: a substitute may teach a class "For one full semester, subject to the approval of the employing school district board of education, if the license holder has a post-secondary degree in a subject area that is not directly related to the subject of the class" ${cite("R.C. 3319.226, Educator licenses for substitute teaching", "https://codes.ohio.gov/ohio-revised-code/section-3319.226")}.</p>
<p>The licensing rule puts the request in the employer's hands: "A one-year or five-year substitute teaching license may be issued to qualified individuals upon the request and recommendation of an employing superintendent" ${cite("Ohio Adm. Code 3302-23-44, Temporary and substitute licenses", "https://codes.ohio.gov/ohio-administrative-code/rule-3302-23-44")}. The State Board's instructions tell candidates to complete the employment process with the school, district, or educational service center first, then apply with the employer's IRN so the organization's e-signer can approve. We deliver every candidate's file ready for that step.</p>
<h3>The temporary substitute license for candidates without a degree</h3>
<p>Ohio law now provides that "a school governing body may employ an individual who does not hold a post-secondary degree as a substitute teacher provided that the individual also meets the following requirements": the district's own educational requirements, good moral character, and a criminal records check under R.C. 3319.39; the State Board then issues a one-year temporary substitute teaching license to that individual ${cite("R.C. 3319.102, Temporary substitute teaching license", "https://codes.ohio.gov/ohio-revised-code/section-3319.102")}. The State Board describes the license as available for "candidates who do not hold a post-secondary degree but meet the employing school or district's set of educational requirements to serve in the role of a substitute teacher," issued only at the request of the employing school or district, and valid for one semester per assigned class with local board approval ${cite("Ohio State Board of Education, Substitute Licenses", "https://sboe.ohio.gov/educator-licensure/apply-for-a-new-license/substitute-licenses")}. We screen non-degree candidates against your district's written requirements before presenting them.</p>
<h3>BCI and FBI criminal records checks</h3>
<p>Ohio's background-check statute applies to every position. The appointing or hiring officer "shall request the superintendent of the bureau of criminal identification and investigation to conduct a criminal records check with respect to any applicant who has applied to the school district, educational service center, or school for employment in any position," and the request must include FBI information unless the applicant has been an Ohio resident for the preceding five years ${cite("R.C. 3319.39, Criminal records check", "https://codes.ohio.gov/ohio-revised-code/section-3319.39")}. FocusedEDU completes both checks before a substitute is presented and keeps the results current in the candidate's file.</p>
${whereWeStaff(
  "Ohio",
  "We staff substitute programs for districts, educational service centers, and community schools across Ohio, with recruiting built around the state's three largest metros and its mid-size cities.",
  "That includes Columbus and its suburbs — Olentangy, South-Western, Dublin, Hilliard, and Westerville; Cincinnati and Lakota in Butler County; Cleveland and Akron; Toledo; and Dayton. Because we work with one client per region, the first district or community school network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Ohio", "Ohio substitutes are licensed at the request of the school that hires them, so your first step is a school, not the State Board: we match you to a partner school, then assemble the transcripts and BCI and FBI checks the license application needs. A bachelor's degree qualifies you for the standard license; districts can also request a one-year temporary license for candidates who meet their own educational requirements.")}
${openings("Ohio", "Celina")}
${cta("Ohio")}`,
    faqs: [
      {
        q: "Do you need a degree to substitute teach in Ohio?",
        a: "For the standard one-year or five-year substitute license, yes: a minimum of a bachelor's degree from an accredited college or university. Under R.C. 3319.102, a district may also employ a candidate without a post-secondary degree who meets the district's own educational requirements, and the State Board issues that person a one-year temporary substitute teaching license at the district's request.",
      },
      {
        q: "Who applies for an Ohio substitute license, the sub or the school?",
        a: "Both, in order. The candidate completes the employment process with the school, district, or educational service center first; the license is then issued upon the request and recommendation of the employing superintendent, with the organization's e-signer approving the application in CORE. FocusedEDU delivers a complete file so that step is quick.",
      },
      {
        q: "How long can an Ohio substitute stay in one classroom?",
        a: "It depends on the license field. A substitute with an education degree may serve without limit; one whose degree is in an unrelated subject may teach a class for one full semester, subject to the approval of the employing board of education, under R.C. 3319.226.",
      },
      {
        q: "What background checks do Ohio substitutes need?",
        a: "A BCI criminal records check for any applicant to any school position under R.C. 3319.39, including FBI information unless the applicant has lived in Ohio for the preceding five years. Current checks must be on file with the State Board for the license application.",
      },
      {
        q: "What fill rate can an Ohio district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout. We also work with one client per region, so the pool we build for you serves only your schools.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Michigan", slug: "substitute-teacher-staffing-michigan" },
      { label: "Substitute Teacher Staffing in Pennsylvania", slug: "substitute-teacher-staffing-pennsylvania" },
      { label: "Substitute Teacher Staffing in Illinois", slug: "substitute-teacher-staffing-illinois" },
      SPED_HUB,
      PARA_HUB,
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
];
