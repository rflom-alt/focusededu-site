/**
 * National substitute-staffing state pages, wave 2 of 3: Georgia, Arizona,
 * Washington, Massachusetts, Michigan. See substitute-state-pages-national-a.ts
 * for the rules this file follows (approved FocusedEDU facts only; every state
 * rule quoted from a primary source fetched 2026-10-29; dated openings only
 * where the live board had a K-12 posting).
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_UPDATED, NATIONAL_ROLES, openings, whereWeStaff } from "./substitute-state-pages-national-a";

const SPED_HUB = { label: "Special Education Staffing", slug: "special-education-staffing" };
const PARA_HUB = { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" };
const K12_HUB = { label: "K-12 Education Staffing", slug: "k12-education-staffing" };

export const substituteStatePagesNationalB: ServicePage[] = [
  // ───────────────────────────── Georgia ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-georgia",
    eyebrow: "Substitute teacher staffing · Georgia",
    h1: "Substitute Teacher Staffing in Georgia",
    metaTitle: "Substitute Teacher Staffing in Georgia",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Georgia districts and charters — GaPSC Clearance Certificates, FBI fingerprint checks, and the 10-day and 46-day rules tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Georgia school districts, charter systems, and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with FBI fingerprint checks completed, GaPSC Clearance Certificate files prepared for your district to request, and every assignment tracked against the state's 10-consecutive-day and 46-day rules.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Georgia classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Georgia" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "FBI fingerprint background check and Georgia (GCIC) criminal history check completed",
      "GaPSC Clearance Certificate file prepared for the employing district to request through MyPSC",
      "Degree level documented, because subs with only a high school diploma or GED are capped at 10 consecutive days in one classroom",
      "Substitute training as prescribed by the Professional Standards Commission documented",
      "Absences and vacancies tracked against the 46-consecutive-day certified in-field teacher rule",
      "Georgia certificate verified for any sub placed in a long-term, in-field assignment",
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
        heading: "What Georgia schools need from a substitute partner",
        body: "Georgia leaves most substitute qualifications to each local unit of administration, but the State Board of Education sets two clocks every scheduler has to watch. A substitute who holds only a high school diploma or GED cannot work more than 10 consecutive school days in one classroom, and any teacher absence or vacancy that reaches 46 consecutive days has to be filled by a certified in-field teacher. A long leave covered by the wrong person is a compliance problem by Thanksgiving.\n\nThe daily problem is the one every state has, scaled to metro Atlanta: Gwinnett, Cobb, DeKalb, Fulton, and Atlanta Public Schools, plus a dense charter sector, all drawing from the same pool of cleared substitutes on the same morning. Districts and charters ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who can legally carry a leave, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Georgia substitute programs",
        body: "We record each Georgia substitute's degree level and training at onboarding, so a diploma-only sub is never scheduled past day 10 in one room and a leave approaching day 46 is flagged for a certified in-field teacher well in advance. Every sub arrives with an FBI fingerprint check complete and a Clearance Certificate file your district can request through MyPSC. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the county next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [staffing a multi-site charter network](/staffing-a-multi-site-charter-network).",
      },
    ],
    richHtml: `<h2 id="ga-substitute-requirements">Georgia substitute teacher and clearance requirements</h2>
<p class="answer-lead">Georgia has no state substitute license. Each local unit of administration hires from its own substitute list and gives priority to the most qualified candidates as determined by the Professional Standards Commission. Statewide, substitutes with only a high school diploma or GED are limited to 10 consecutive days in one classroom, any absence or vacancy of 46 or more consecutive days must be filled by a certified in-field teacher, and an FBI fingerprint check is required for employment in Georgia public schools.</p>
<h3>Local substitute lists and the 10-day and 46-day rules</h3>
<p>State Board of Education Rule 160-5-1-.05 provides that "Each local unit of administration shall maintain and employ from a substitute teacher list," with priority to "persons with the highest qualifications as determined by the Professional Standards Commission." It then sets the two limits: "Substitute teachers who hold only a high school diploma or GED certificate shall not work in any one classroom more than 10 consecutive school days," and "Any classroom teacher absence or vacancy that lasts 46 or more consecutive days in a school year shall be filled with a certified in-field teacher, except in situations where longer periods of time are required by state or federal law." The rule also requires that all substitutes receive "appropriate training as prescribed by the Professional Standards Commission" ${cite("Ga. SBOE Rule 160-5-1-.05, Substitute Teachers", "https://apps.gadoe.org/sboe/SBOE%20Rules/160-5-1-.05.pdf")}. We track both clocks for every substitute we place.</p>
<h3>FBI fingerprinting and the GaPSC Clearance Certificate</h3>
<p>The Professional Standards Commission's code of ethics rule states the baseline: "An FBI background check (fingerprint) is required for employment in Georgia public schools and a Georgia criminal history check is required every five (5) years for certificate renewal" ${cite("GaPSC Rule 505-2-.24", "https://www.gapsc.com/Rules/Current/Certification/505-2-.24.pdf")}. The Clearance Certificate is how that check is recorded for staff who do not hold an in-field certificate: it "verifies that an individual employed in a Georgia public charter school, charter system, or strategic waiver system has successfully completed fingerprint and criminal background check requirements." It has no academic requirement — "There are no academic requirements necessary to qualify for this certificate" — it is requested by the employing local unit of administration rather than the individual, and "The Clearance certificate is valid for five (5) years," remaining usable if the holder moves to another district until it expires ${cite("GaPSC Rule 505-2-.42, Clearance Certificate", "https://www.gapsc.com/Rules/Current/Certification/505-2-.42.pdf")}. FocusedEDU completes the FBI check and delivers the Clearance Certificate file so your HR office can submit the request through MyPSC on day one.</p>
<h3>Long-term coverage</h3>
<p>Georgia has no long-term substitute permit. Once an absence or vacancy reaches 46 consecutive days, the SBOE rule requires a certified in-field teacher, and a Clearance Certificate holder does not meet in-field certification requirements. For leaves that are expected to run long, we recruit Georgia-certified teachers in the field from the start, so the coverage that begins in September is still compliant in January.</p>
${whereWeStaff(
  "Georgia",
  "We staff substitute programs for districts, charter systems, and charter schools across Georgia, with recruiting built around metro Atlanta and the state's other major cities.",
  "That includes Gwinnett, Cobb, DeKalb, Fulton, Clayton, Henry, Cherokee, Forsyth, and Paulding counties around Atlanta, along with Atlanta Public Schools; Savannah-Chatham County; Columbus and Muscogee County; Augusta and Richmond County; and Houston County around Warner Robins. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Georgia", "Georgia substitutes need an FBI fingerprint check and a GaPSC Clearance Certificate requested by the hiring district, plus whatever degree and training the district requires. If you hold only a high school diploma or GED, assignments are limited to 10 consecutive days in one classroom; a bachelor's degree opens longer work, and a Georgia certificate opens long-term in-field assignments.")}
${cta("Georgia")}`,
    faqs: [
      {
        q: "Do you need a license to substitute teach in Georgia?",
        a: "No. Georgia has no state substitute license. Each local unit of administration maintains its own substitute list, with priority to the most qualified candidates as determined by the Professional Standards Commission, and every substitute needs an FBI fingerprint check recorded on a GaPSC Clearance Certificate requested by the employing district.",
      },
      {
        q: "How long can a Georgia substitute stay in one classroom?",
        a: "A substitute with only a high school diploma or GED may not work more than 10 consecutive school days in one classroom under SBOE Rule 160-5-1-.05. Any absence or vacancy that lasts 46 or more consecutive days must be filled by a certified in-field teacher.",
      },
      {
        q: "What is a GaPSC Clearance Certificate?",
        a: "A certificate that verifies an individual has completed Georgia's fingerprint and criminal background check requirements. It has no academic requirement, is requested by the employing local unit of administration, and is valid for five years; it remains valid if the holder moves to another district until it expires.",
      },
      {
        q: "Is there a long-term substitute permit in Georgia?",
        a: "No. Once a vacancy or absence reaches 46 consecutive days, the rule requires a certified in-field teacher, and a Clearance Certificate does not satisfy in-field certification. For long leaves we recruit Georgia-certified teachers in the field from the start.",
      },
      {
        q: "What fill rate can a Georgia district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the county next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for your district serves only your schools. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Florida", slug: "substitute-teacher-staffing-florida" },
      { label: "Substitute Teacher Staffing in North Carolina", slug: "substitute-teacher-staffing-north-carolina" },
      { label: "Substitute Teacher Staffing in Texas", slug: "substitute-teacher-staffing-texas" },
      SPED_HUB,
      PARA_HUB,
      { label: "Staffing a Multi-Site Charter Network", slug: "staffing-a-multi-site-charter-network" },
    ],
  },

  // ───────────────────────────── Arizona ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-arizona",
    eyebrow: "Substitute teacher staffing · Arizona",
    h1: "Substitute Teacher Staffing in Arizona",
    metaTitle: "Substitute Teacher Staffing in Arizona",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Arizona districts and charters — ADE Substitute Certificates, IVP Fingerprint Clearance Cards, and Emergency Substitute 120-day limits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Arizona school districts and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding an Arizona Department of Education Substitute Certificate and a valid DPS IVP Fingerprint Clearance Card, with Emergency Substitute Certificate assignments tracked against the 120-day per-school limit.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher working with students in an Arizona classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Arizona" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "ADE Substitute Certificate (PreK-12), valid six years, verified in the ADE certification portal",
      "Bachelor's degree or higher on official transcripts, as the Substitute Certificate requires",
      "Valid Arizona DPS IVP Fingerprint Clearance Card (A.R.S. 15-534 and 15-512)",
      "Emergency Substitute Certificate assignments tracked against the 120-day limit in the same school per school year",
      "District superintendent's Request for Emergency Substitute Certificate prepared where a district needs the emergency route",
      "Certificate and clearance-card expirations tracked in our credentialing system",
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
        heading: "What Arizona schools need from a substitute partner",
        body: "Arizona certifies its substitutes at the state level and gates every one of them behind a DPS IVP Fingerprint Clearance Card, which simplifies compliance and tightens the pool at the same time. A district that needs more substitutes than the certified pool can supply has an emergency route — the Emergency Substitute Certificate — but it is tied to the requesting district, capped at 120 days in the same school per year, and requires a superintendent's signed request. Scheduling around those limits is the work.\n\nArizona's charter sector is one of the largest in the country, and in the Phoenix East Valley, the West Valley, and Tucson, district and charter campuses sit blocks apart, calling the same certified substitutes on the same morning. Schools ask us for day-to-day substitutes confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Arizona substitute programs",
        body: "Arizona law expressly allows a governing board to obtain substitute teachers by contracting with a private entity that employs them, and we built our Arizona program to fit that structure: every substitute carries an ADE Substitute Certificate and a valid IVP Fingerprint Clearance Card before a first assignment, and our credentialing system tracks the six-year certificate cycle, the clearance card's expiration, and days served per school for anyone on an Emergency Substitute Certificate. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district or charter network are not presented to the campus down the street. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [staffing a multi-site charter network](/staffing-a-multi-site-charter-network).",
      },
    ],
    richHtml: `<h2 id="az-substitute-requirements">Arizona substitute teacher and clearance requirements</h2>
<p class="answer-lead">An Arizona substitute holds a Substitute Certificate (PreK-12) from the Arizona Department of Education, which requires a bachelor's degree, a valid DPS IVP Fingerprint Clearance Card, and a $60 fee, and is valid for six years. When a district verifies an emergency employment situation, its superintendent can request an Emergency Substitute Certificate for candidates with a high school diploma, GED, or associate degree, limited to 120 days in the same school per year and valid only in that district.</p>
<h3>The Substitute Certificate (PreK-12)</h3>
<p>ADE describes the certificate plainly: "The Substitute certificate entitles the holder to substitute in the temporary absence of a regular contract teacher. The certificate is valid for 6 years and is renewable." The application checklist requires "Official transcripts documenting a Bachelor's degree or higher," a valid Arizona DPS IVP Fingerprint Clearance Card, and a non-refundable $60 fee ${cite("ADE, Substitute, PreK-12", "https://www.azed.gov/educator-certification/certificates/substitute-prek-12")}. State law ties the card to every certificate: "A person who applies for a certificate as prescribed in section 15-203 shall have a valid fingerprint clearance card that is issued pursuant to title 41, chapter 12, article 3.1," and schools "shall verify the certification and fingerprint status of applicants" before employment ${cite("A.R.S. §15-534", "https://www.azleg.gov/ars/15/00534.htm")}.</p>
<h3>The Emergency Substitute Certificate and the 120-day limit</h3>
<p>ADE states that "The Emergency Substitute certificate may be issued at the request of a public school superintendent and authorizes the holder to substitute only in the district that verifies an emergency employment situation exists. An individual holding only an Emergency Substitute Certificate shall not be assigned a contract teaching position and shall be limited to 120 days of substitute teaching in the same school each school year." The application requires a Request for Emergency Substitute Certificate signed by a district or charter school superintendent, proof of a high school diploma, GED, or associate degree, an IVP card, and a $60 fee ${cite("ADE, Emergency Substitute Certificate", "https://www.azed.gov/educator-certification/certificates/emergency-substitute-certificate")}. We count days per school for every emergency-certificate holder and prepare the superintendent's request packet when a district needs the route.</p>
<h3>Fingerprint clearance for contractor employees</h3>
<p>Arizona's fingerprinting statute reaches agency staff directly: "A contractor, subcontractor or vendor or any employee of a contractor, subcontractor or vendor who is contracted to provide services on a regular basis at an individual school shall obtain a valid fingerprint clearance card pursuant to title 41, chapter 12, article 3.1." The prints "shall be used to conduct a state and federal criminal records check," and DPS may exchange the data with the FBI ${cite("A.R.S. §15-512", "https://www.azleg.gov/ars/15/00512.htm")}. The same title also confirms the staffing model itself: "The governing board may obtain the services of any employee, including teachers, substitute teachers and administrators, by contracting with a private entity that employs personnel required by the school district" ${cite("A.R.S. §15-502", "https://www.azleg.gov/ars/15/00502.htm")}. Every FocusedEDU substitute in Arizona holds a valid IVP card before being presented.</p>
${whereWeStaff(
  "Arizona",
  "We staff substitute programs for districts and charter schools across Arizona, with recruiting built around metro Phoenix and Tucson.",
  "That includes the East Valley — Mesa, Chandler, Gilbert, and Scottsdale; Phoenix itself, including the Phoenix Union, Paradise Valley, and Deer Valley districts; the West Valley around Peoria, Surprise, and Dysart; and Tucson. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Arizona", "Arizona substitutes need an ADE Substitute Certificate, which requires a bachelor's degree, and a valid DPS IVP Fingerprint Clearance Card. If you do not yet hold a degree, a partner district can request an Emergency Substitute Certificate for you with a high school diploma, GED, or associate degree, limited to 120 days in the same school each year. We walk you through the IVP card and the ADE application in order.")}
${cta("Arizona")}`,
    faqs: [
      {
        q: "What do you need to substitute teach in Arizona?",
        a: "An Arizona Department of Education Substitute Certificate (PreK-12), which requires official transcripts documenting a bachelor's degree or higher, a valid DPS IVP Fingerprint Clearance Card, and a $60 fee. The certificate is valid for six years and renewable.",
      },
      {
        q: "Can someone without a degree substitute in Arizona?",
        a: "Only on an Emergency Substitute Certificate, which a district or charter superintendent requests after verifying an emergency employment situation. It requires a high school diploma, GED, or associate degree and an IVP card, is valid only in the requesting district, and limits the holder to 120 days of substitute teaching in the same school each school year.",
      },
      {
        q: "Do agency substitutes in Arizona need their own fingerprint clearance card?",
        a: "Yes. A.R.S. 15-512 requires any employee of a contractor who is contracted to provide services on a regular basis at a school to obtain a valid fingerprint clearance card, and A.R.S. 15-534 requires one for every certificate applicant. Every FocusedEDU substitute holds a valid IVP card before being presented.",
      },
      {
        q: "Can an Arizona district use a staffing agency for substitutes?",
        a: "Yes. A.R.S. 15-502 states that a governing board may obtain the services of any employee, including teachers, substitute teachers, and administrators, by contracting with a private entity that employs the personnel the district requires.",
      },
      {
        q: "What fill rate can an Arizona district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the charter down the street?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your campuses. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in California", slug: "substitute-teacher-staffing-california" },
      { label: "Substitute Teacher Staffing in Colorado", slug: "substitute-teacher-staffing-colorado" },
      { label: "Substitute Teacher Staffing in Texas", slug: "substitute-teacher-staffing-texas" },
      SPED_HUB,
      PARA_HUB,
      { label: "Staffing a Multi-Site Charter Network", slug: "staffing-a-multi-site-charter-network" },
    ],
  },

  // ───────────────────────────── Washington ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-washington",
    eyebrow: "Substitute teacher staffing · Washington",
    h1: "Substitute Teacher Staffing in Washington",
    metaTitle: "Substitute Teacher Staffing in Washington",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Washington districts, ESDs, and charters — substitute and emergency substitute certificates, WSP/FBI record checks, 180-day limits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Washington school districts, educational service districts, and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with Washington State Patrol and FBI fingerprint record checks completed, substitute and emergency substitute certificates verified, and the 180-day assignment limit tracked for every sub.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher supporting students in a Washington classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Washington" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Washington substitute certificate (for current or former certificate holders) or district-requested emergency substitute certificate verified in E-Certification",
      "Washington State Patrol and FBI fingerprint record check completed, as RCW 28A.400.303 requires of districts and their contractors",
      "Record-check date tracked, since a check within the previous two years may be accepted by a new employer",
      "Days per assignment tracked against the 180-day limit for substitute certificate holders",
      "Emergency substitute certificate validity (two years or less, tied to the requesting employer) tracked for reissue",
      "District request filed in E-Certification before the candidate's emergency certificate application",
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
        heading: "What Washington schools need from a substitute partner",
        body: "Washington's substitute certificate is reserved for people who hold or have held a state educator certificate, which keeps the standard high and the pool thin. When a district has exhausted, or expects to exhaust, its list of qualified substitutes, it can request emergency substitute certificates for people who are not fully qualified — but those certificates are tied to the requesting employer, last two years or less, and have to be reissued on the district's request. The paperwork sits with the district, and so does the risk of running out of names in February.\n\nDistricts, ESDs, and charters in the Puget Sound corridor — Seattle, Lake Washington, Kent, Federal Way, Northshore, Edmonds, Everett, Bellevue, Tacoma, Puyallup, Bethel — draw on one regional pool, and Spokane and Vancouver each have their own. Schools ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who can carry a leave within the 180-day limit, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Washington substitute programs",
        body: "We recruit certificate holders first, and when a district asks us to use the emergency substitute route we prepare the request so your office can file it in E-Certification and the candidate can complete the application the same week. Every substitute's WSP and FBI record check is completed and dated before a first assignment, and our credentialing system tracks the two-year check window, the emergency certificate's validity, and days served per assignment against the 180-day limit. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="wa-substitute-requirements">Washington substitute teacher and clearance requirements</h2>
<p class="answer-lead">In Washington, the substitute certificate is for people who hold or have held a regular state educator certificate; it is valid for life and limits service to 180 days in any one assignment per school year. Districts that have exhausted their qualified-substitute list can request emergency substitute certificates, valid for two years or less and only in the requesting employer. Every school employee and contractor employee with regularly scheduled unsupervised access to children must pass a Washington State Patrol and FBI fingerprint record check.</p>
<h3>The substitute certificate and the 180-day limit</h3>
<p>The Professional Educator Standards Board rule states: "The substitute certificate entitles the holder to act as substitute during the absence of the regularly certificated staff member for a period not to exceed 180 days during the school year in any one assignment." It is issued to "Teachers, educational staff associates, or administrators who hold or have held a regular state of Washington educator certificate" or who have completed a preparation program and a bachelor's degree; "The individual educator applies for the substitute certificate," and "The substitute certificate is valid for life" ${cite("WAC 181-79A-232, Substitute certificate", "https://app.leg.wa.gov/WAC/default.aspx?cite=181-79A-232")}. OSPI summarizes the two paths: substitutes qualify "by having held, or currently holding, a regular state of Washington Teacher, Administrator, or Educational Staff Associate (ESA) certificate or by being requested for an emergency or intern substitute certificate issued by a school district" ${cite("OSPI, Substitute Certificates", "https://ospi.k12.wa.us/certification/substitute-limited-certificates/substitute-certificates")}.</p>
<h3>Emergency and intern substitute certificates</h3>
<p>The limited-certificate rule provides: "If the local school district, approved private school, or educational service district has exhausted or reasonably anticipates it will exhaust its list of qualified substitutes who are willing to serve as substitutes, emergency substitute certificates may be issued to persons not fully qualified as substitutes under WAC 181-79A-232." Holders "may serve in the local school district, approved private school, or educational service district which requested the certificate"; "Emergency substitute certificates shall be valid for two years or less"; and the certificate "may be reissued upon request by the employing local school district" ${cite("WAC 181-79A-231, Limited certificates", "https://app.leg.wa.gov/WAC/default.aspx?cite=181-79A-231")}. OSPI notes the application is initiated by the employing district and completed by the educator in E-Certification. We prepare the district request and walk each candidate through the application.</p>
<h3>Record checks for employees and contractors</h3>
<p>Washington's record-check statute names contractors directly: school districts, educational service districts, OSPI "and their contractors shall require a record check through the Washington state patrol criminal identification system" and the FBI before hiring anyone who will have regularly scheduled unsupervised access to children. "A record check under this section must include a fingerprint check using a complete Washington state criminal identification fingerprint card," and an employer may waive the requirement if the applicant has had a record check within the previous two years ${cite("RCW 28A.400.303, Record checks for employees and certain volunteers and contractors", "https://app.leg.wa.gov/RCW/default.aspx?cite=28A.400.303")}. Certificate applicants are fingerprinted at application through the Washington State Patrol and the FBI as well ${cite("RCW 28A.410.010", "https://app.leg.wa.gov/RCW/default.aspx?cite=28A.410.010")}. FocusedEDU completes and dates the check for every substitute before presenting them.</p>
${whereWeStaff(
  "Washington",
  "We staff substitute programs for districts, educational service districts, and charter schools across Washington, with recruiting built around the Puget Sound corridor, Spokane, and Southwest Washington.",
  "That includes Seattle and the Eastside — Lake Washington, Bellevue, and Northshore; South King County — Kent and Federal Way; Snohomish County — Everett and Edmonds; Pierce County — Tacoma, Puyallup, and Bethel; Spokane; and Vancouver, including the Evergreen district. Because we work with one client per region, the first district or charter to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Washington", "If you hold or have held a Washington teaching, administrator, or ESA certificate, you qualify for the lifetime substitute certificate. If not, a partner district can request an emergency substitute certificate for you, valid for up to two years in that district. Every substitute completes a Washington State Patrol and FBI fingerprint record check, and we tell you which step comes first.")}
${cta("Washington")}`,
    faqs: [
      {
        q: "Who can get a Washington substitute certificate?",
        a: "Teachers, educational staff associates, or administrators who hold or have held a regular Washington educator certificate, or who have completed a preparation program and a bachelor's degree. The certificate is valid for life and allows substitute service for no more than 180 days in any one assignment during a school year.",
      },
      {
        q: "What is an emergency substitute certificate in Washington?",
        a: "A limited certificate a district, ESD, or approved private school can request when it has exhausted, or expects to exhaust, its list of qualified substitutes. It is valid for two years or less, usable only in the requesting employer, and may be reissued on the employer's request. The district initiates the application and the educator completes it in E-Certification.",
      },
      {
        q: "Do agency substitutes in Washington need a fingerprint check?",
        a: "Yes. RCW 28A.400.303 requires school districts, ESDs, OSPI, and their contractors to run a Washington State Patrol and FBI record check, including a fingerprint check, before hiring anyone with regularly scheduled unsupervised access to children. A check within the previous two years may be accepted.",
      },
      {
        q: "How long can a Washington substitute cover one assignment?",
        a: "A substitute certificate holder may serve no more than 180 days during the school year in any one assignment under WAC 181-79A-232. We track days per assignment for every substitute and flag long leaves early.",
      },
      {
        q: "What fill rate can a Washington district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout. We also work with one client per region, so the pool we build for you serves only your schools.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in California", slug: "substitute-teacher-staffing-california" },
      { label: "Substitute Teacher Staffing in Colorado", slug: "substitute-teacher-staffing-colorado" },
      { label: "Substitute Teacher Staffing in Arizona", slug: "substitute-teacher-staffing-arizona" },
      SPED_HUB,
      PARA_HUB,
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },

  // ───────────────────────────── Massachusetts ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-massachusetts",
    eyebrow: "Substitute teacher staffing · Massachusetts",
    h1: "Substitute Teacher Staffing in Massachusetts",
    metaTitle: "Substitute Teacher Staffing in Massachusetts",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Massachusetts districts and charters — CORI and state/national fingerprint checks, district sub rules, and the 90-day license line tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Massachusetts school districts, charter schools, and collaboratives. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with CORI and state and national fingerprint checks completed to the district's standard and every assignment tracked against the 90-consecutive-day line where a license or hardship waiver is required.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Massachusetts classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Massachusetts" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "CORI check through the Department of Criminal Justice Information Services, refreshed at least every three years (M.G.L. c. 71, §38R)",
      "State and national fingerprint-based criminal history check (state police and FBI) completed, as 603 CMR 51.00 requires for substitute employees",
      "The hiring district's own substitute qualifications (degree, experience, orientation) verified",
      "Consecutive school days in the same role tracked against the 90-day line for temporary substitutes",
      "Massachusetts educator license verified for any sub in a role beyond 90 consecutive days, or the district's hardship waiver documented",
      "Suitability determination documented for your HR office",
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
        heading: "What Massachusetts schools need from a substitute partner",
        body: "Massachusetts does not license temporary substitute teachers, which gives districts latitude on who can cover a classroom and puts the responsibility for qualifications squarely on the district. What the state does fix is the line between a substitute and a teacher: 90 consecutive school days in the same role. Past that, the person must be licensed for the role or working under a hardship waiver the superintendent requests from the Commissioner, and the clock is easy to lose track of in a leave that starts in October and keeps getting extended.\n\nThe state is also strict on screening: a CORI check refreshed at least every three years and a state and national fingerprint check for every substitute employee who may have direct and unmonitored contact with children. Districts and charters in Boston, Worcester, Springfield, the North Shore, and the Merrimack Valley ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who can legally carry a leave, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Massachusetts substitute programs",
        body: "We complete the CORI and fingerprint checks to your district's standard before a substitute is presented, and our credentialing system tracks the three-year CORI refresh, consecutive days in the same role, and license status, so a leave approaching day 90 is flagged for a licensed teacher or a hardship waiver with time to act. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district or charter are not presented to the school across town. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ma-substitute-requirements">Massachusetts substitute teacher and clearance requirements</h2>
<p class="answer-lead">Massachusetts does not require an educator license for temporary substitute teachers — defined in regulation as those employed for less than 90 consecutive school days in the same role — though a district may set its own qualifications. Anyone employed for more than 90 consecutive school days in the same role must be licensed for it or working under a hardship waiver. Every substitute who may have direct and unmonitored contact with children needs a CORI check and a state and national fingerprint-based criminal history check.</p>
<h3>No state license for temporary substitutes; the 90-day line</h3>
<p>The licensure statute carves substitutes out: "This section shall not apply to trade, vocational, temporary substitute teachers, exchange teachers, regionally licensed or certified teachers or to teaching or administrative interns" ${cite("M.G.L. c. 71, §38G", "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXII/Chapter71/Section38G")}. DESE's regulations define the term — a Temporary Substitute Teacher is "An educator who is employed, on a temporary basis, for less than 90 consecutive school days in the same role, to take the place of a regularly employed educator who is absent" — and set the consequence: "Any educator who is employed on a temporary basis for more than 90 consecutive school days in the same role must either be licensed for the role or working under a hardship waiver" ${cite("603 CMR 7.00, Educator Licensure and Preparation Program Approval", "https://www.doe.mass.edu/lawsregs/603cmr7.html?section=all")}. DESE's licensure FAQ confirms that temporary substitutes are exempt from the license requirement, "However, a school/school district may prescribe additional qualifications as a condition of employment" ${cite("DESE, Licensure FAQ: Seeking Employment", "https://www.doe.mass.edu/licensure/faq-glossary/seeking-employment.html")}. We verify every substitute against the hiring district's own standard and count consecutive days per role.</p>
<h3>CORI and fingerprint-based checks</h3>
<p>State law requires school committees and charter schools to obtain CORI "periodically, but not less frequently than every 3 years, from the department of criminal justice information services" for any current or prospective employee or volunteer who may have direct and unmonitored contact with children, and it adds a fingerprint check: "Fingerprints shall be submitted to the identification section of the department of state police for a state criminal history check and forwarded to the Federal Bureau of Investigation for a national criminal history check." The fee is capped at $35 for employees not licensed under §38G ${cite("M.G.L. c. 71, §38R", "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXII/Chapter71/Section38R")}. DESE's implementing regulation lists, among those who must have a national criminal history check, "Any substitute employee who may have direct and unmonitored contact with children" ${cite("603 CMR 51.00, Criminal History Checks", "https://www.doe.mass.edu/lawsregs/603cmr51.html?section=all")}. FocusedEDU completes both checks before a substitute is presented and tracks the three-year CORI cycle.</p>
<h3>Long-term coverage: licensure or a hardship waiver</h3>
<p>Beyond 90 consecutive school days in the same role, the person must hold a Massachusetts license for it, or the district must obtain a waiver: under §38G, "a superintendent may upon request be exempt by the commissioner for any one school year from the requirement in this section to employ certified personnel when compliance therewith would in the opinion of the commissioner constitute a great hardship in securing teachers for that school district" ${cite("M.G.L. c. 71, §38G", "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXII/Chapter71/Section38G")}. For leaves expected to run long, we recruit licensed teachers from the start so the question never arises.</p>
${whereWeStaff(
  "Massachusetts",
  "We staff substitute programs for districts, charter schools, and collaboratives across Massachusetts, with recruiting built around Greater Boston and the state's Gateway Cities.",
  "That includes Boston and its suburbs, among them Newton, Quincy, and Framingham; Worcester; Springfield; the North Shore, including Lynn; Brockton on the South Shore; the Merrimack Valley, including Lowell and Lawrence; and the South Coast, including New Bedford and Fall River. Because we work with one client per region, the first district or charter to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Massachusetts", "Massachusetts does not require a license to work as a temporary substitute, but each district sets its own qualifications and every substitute needs a CORI check and a state and national fingerprint check. We match you to the districts where you already qualify and complete the checks with you up front; licensed teachers can also take assignments beyond 90 days.")}
${cta("Massachusetts")}`,
    faqs: [
      {
        q: "Do substitute teachers need a license in Massachusetts?",
        a: "Not for temporary work. M.G.L. c. 71, §38G does not apply to temporary substitute teachers, and 603 CMR 7.00 defines a temporary substitute as one employed for less than 90 consecutive school days in the same role. Districts may set their own qualifications, and anyone beyond 90 consecutive days must be licensed or on a hardship waiver.",
      },
      {
        q: "What background checks do Massachusetts substitutes need?",
        a: "A CORI check from the Department of Criminal Justice Information Services, refreshed at least every three years, and a state and national fingerprint-based criminal history check through the state police and FBI. 603 CMR 51.00 lists substitute employees who may have direct and unmonitored contact with children among those requiring the national check.",
      },
      {
        q: "What happens when a substitute passes 90 consecutive school days?",
        a: "The person must be licensed for the role or working under a hardship waiver, which a superintendent requests from the Commissioner for one school year when compliance would constitute a great hardship in securing teachers. We flag day 90 well in advance and recruit licensed teachers for leaves expected to run long.",
      },
      {
        q: "How much does the fingerprint check cost a Massachusetts substitute?",
        a: "Under §38R the fee may not exceed $35 for employees who are not licensed under §38G, and $55 for licensed employees.",
      },
      {
        q: "What fill rate can a Massachusetts district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff a competing school in our area?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Connecticut", slug: "substitute-teacher-staffing-connecticut" },
      { label: "Substitute Teacher Staffing in New York", slug: "substitute-teacher-staffing-new-york" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── Michigan ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-michigan",
    eyebrow: "Substitute teacher staffing · Michigan",
    h1: "Substitute Teacher Staffing in Michigan",
    metaTitle: "Substitute Teacher Staffing in Michigan",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Michigan districts, ISDs, and PSAs — Daily Substitute Permits (60 semester hours), MSP/FBI fingerprint checks, 90-day limits tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Michigan school districts, intermediate school districts, and public school academies. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with MSP and FBI fingerprint checks completed, Daily Substitute Permit files ready for MOECS, and every assignment tracked against the 90-calendar-day limit.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a Michigan school",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Michigan" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "60 semester hours of college credit (grade C or better) or an associate degree, verified on official transcripts (MCL 380.1233)",
      "Bachelor's degree verified for any special education substitute assignment, as IDEA and the permit rules require",
      "Michigan State Police criminal history check and FBI fingerprint check completed (MCL 380.1230 and 380.1230a)",
      "Daily Substitute Permit application prepared for the employing district to submit in MOECS ($45)",
      "Consecutive calendar days per assignment tracked against the 90-day permit limit and the one-time 90-day extension",
      "Full-Year Basic Substitute Permit file prepared where a district needs full-year coverage",
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
        heading: "What Michigan schools need from a substitute partner",
        body: "Michigan's substitute permit belongs to the school, not the sub. The Daily Substitute Permit is granted to the employing district or academy, is not portable between schools, and is applied for by a school user in MOECS, so every new substitute means a permit application on your HR office's desk — and a substitute cannot be placed until the permit is issued and paid without putting state aid at risk. The permit also carries a hard limit of 90 consecutive calendar days in one assignment, with a single 90-day extension available outside special education.\n\nThe daily problem is the one every state has. Detroit, the Macomb and Oakland County suburbs, Dearborn, Ann Arbor, Grand Rapids, and Kalamazoo each draw on a regional pool of cleared, permit-eligible people, and a reliable sub commits to the school that confirmed first. Districts, ISDs, and public school academies ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who can carry a leave within the permit limits, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Michigan substitute programs",
        body: "We hand your MOECS user a complete Daily Substitute Permit file for every candidate — official transcripts showing the 60 semester hours or associate degree, and current MSP and FBI fingerprint checks — so the permit can be submitted and paid the day you decide to use the sub. Our credentialing system then counts consecutive calendar days per assignment, flags day 90 in advance, and tracks the extension and the full-year permit routes. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="mi-substitute-requirements">Michigan substitute teacher and clearance requirements</h2>
<p class="answer-lead">A Michigan substitute works on a Daily Substitute Permit, which the employing district or academy requests in MOECS for a candidate with at least 60 semester hours of college credit or an associate degree. The permit is limited to 90 consecutive calendar days in a single assignment, special education assignments require a bachelor's degree, and every substitute must pass a Michigan State Police criminal history check and an FBI fingerprint check.</p>
<h3>The Daily Substitute Permit and the 60-hour rule</h3>
<p>The Michigan Department of Education explains that "Permits are granted to an employing school or school district. They are not portable between schools and are not held by an individual." The Daily Substitute Permit "Requires at least 60 semester hours of satisfactory credit (grade 'C' or better) combined from one or more two- or four-year colleges or universities" recognized by CHEA or the U.S. Department of Education, "or an associate degree," and "Is limited in a single teaching assignment to no more than 90 consecutive calendar days." MDE adds that "A special education assignment requires the individual to have a minimum of a bachelor's degree per IDEA requirements," and lists the fee at $45 ${cite("MDE, Permits", "https://www.michigan.gov/mde/services/ed-serv/ed-cert/permits-placement/permits")}. The statute behind it allows a district to employ a substitute without a certificate if "The individual has at least 60 semester hours of college credit or an associate degree from a college, university, or community college. The 60 semester hours do not need to be from the same college, university, or community college" ${cite("MCL 380.1233", "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-380-1233")}.</p>
<h3>Longer assignments: the 90-day extension and full-year permits</h3>
<p>MDE allows one extension: "A Daily Substitute Permit may be extended for an additional 90 consecutive calendar days to provide additional staffing support for when a certified teacher is unable to return to the classroom beyond the initial 90-day allowance," provided the substitute has been observed and evaluated and assigned a mentor teacher; "The Daily Substitute Permit Extension is not available for Special Education assignments" ${cite("MDE, Daily Substitute Permit as a Transition Plan", "https://www.michigan.gov/mde/services/ed-serv/ed-cert/permits-placement/permits/daily-permit-transition")}. For a known full-year need, the Full-Year Basic Substitute Permit "Can be renewed a maximum of three times, allowing a substitute to serve in the assigned area for a maximum of four years," and full-year permits are valid "from the date of issuance through August 31st of the academic year in which it is issued" ${cite("MDE, Permits", "https://www.michigan.gov/mde/services/ed-serv/ed-cert/permits-placement/permits")}. We count calendar days per assignment and prepare the extension or full-year file before the limit arrives.</p>
<h3>State police and FBI criminal history checks</h3>
<p>Michigan requires two checks. Before employing an individual as a regular employee or allowing the individual to regularly and continuously work under contract in any of its schools, a district "shall request from the criminal records division of the department of state police a criminal history check on the individual" ${cite("MCL 380.1230", "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-380-1230")}. It also "shall request the department of state police to conduct a criminal records check through the federal bureau of investigation on an applicant for, or an individual who is hired for, any full-time or part-time employment or who is assigned to regularly and continuously work under contract in any of its schools," based on fingerprints; an applicant for a substitute teacher position may agree in writing to share the results across districts ${cite("MCL 380.1230a", "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-380-1230a")}. FocusedEDU completes both before a substitute is presented.</p>
${whereWeStaff(
  "Michigan",
  "We staff substitute programs for districts, intermediate school districts, and public school academies across Michigan, with recruiting built around metro Detroit and the state's regional centers.",
  "That includes Detroit; the Macomb County suburbs — Utica, Chippewa Valley, and Warren; the Oakland County suburbs — Rochester and Troy; Dearborn, Livonia, and Plymouth-Canton in Wayne County; Ann Arbor; Grand Rapids; and Kalamazoo. Because we work with one client per region, the first district or academy to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Michigan", "Michigan substitutes need at least 60 semester hours of college credit or an associate degree, plus Michigan State Police and FBI fingerprint checks; the hiring school requests your Daily Substitute Permit in MOECS, and special education assignments require a bachelor's degree. We assemble the transcripts and checks so a partner school can submit the permit the day you are matched.")}
${openings("Michigan", "Grand Rapids, Dearborn, and Charlotte")}
${cta("Michigan")}`,
    faqs: [
      {
        q: "What do you need to substitute teach in Michigan?",
        a: "At least 60 semester hours of college credit with a grade of C or better, or an associate degree, plus Michigan State Police and FBI fingerprint checks. The employing school or district then requests a Daily Substitute Permit for you in MOECS; the permit belongs to the school, not the individual. Special education assignments require a bachelor's degree.",
      },
      {
        q: "How long can a Michigan substitute stay in one assignment?",
        a: "A Daily Substitute Permit is limited to 90 consecutive calendar days in a single teaching assignment. MDE allows one extension of an additional 90 consecutive calendar days when the certified teacher cannot return, provided the sub has been observed, evaluated, and assigned a mentor; the extension is not available for special education assignments.",
      },
      {
        q: "Who applies for the substitute permit in Michigan?",
        a: "The school. MDE states that permits are granted to an employing school or district, are not portable between schools, and are not held by an individual. A school user submits the application in MOECS and pays the $45 fee; FocusedEDU delivers a complete candidate file so that takes minutes.",
      },
      {
        q: "What background checks do Michigan substitutes need?",
        a: "A Michigan State Police criminal history check under MCL 380.1230 and an FBI fingerprint check through the state police under MCL 380.1230a, both of which apply to individuals who regularly and continuously work under contract in a district's schools. A substitute applicant may agree in writing to share results across districts.",
      },
      {
        q: "What fill rate can a Michigan district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout. We also work with one client per region, so the pool we build for you serves only your schools.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Ohio", slug: "substitute-teacher-staffing-ohio" },
      { label: "Substitute Teacher Staffing in Wisconsin", slug: "substitute-teacher-staffing-wisconsin" },
      { label: "Substitute Teacher Staffing in Illinois", slug: "substitute-teacher-staffing-illinois" },
      SPED_HUB,
      PARA_HUB,
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
];
