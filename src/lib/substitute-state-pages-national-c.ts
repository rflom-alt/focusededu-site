/**
 * National substitute-staffing state pages, wave 3 of 3: Colorado, Connecticut,
 * Wisconsin, Virginia, North Carolina. See substitute-state-pages-national-a.ts
 * for the rules this file follows (approved FocusedEDU facts only; every state
 * rule quoted from a primary source fetched 2026-10-29; dated openings only
 * where the live board had a K-12 posting). Colorado and North Carolina reuse
 * the client facts already published on /colorado-education-staffing and
 * /north-carolina-education-staffing (Lotus School for Excellence, Aurora;
 * Charlotte-Mecklenburg Schools) and add nothing new.
 */
import type { ServicePage } from "./service-pages";
import { HUB, SUB_STEPS, ODYSSEY_STATS, cite, odysseyProof, forSubs, cta } from "./substitute-state-pages";
import { NATIONAL_UPDATED, NATIONAL_ROLES, openings, whereWeStaff } from "./substitute-state-pages-national-a";

const SPED_HUB = { label: "Special Education Staffing", slug: "special-education-staffing" };
const PARA_HUB = { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" };
const K12_HUB = { label: "K-12 Education Staffing", slug: "k12-education-staffing" };

export const substituteStatePagesNationalC: ServicePage[] = [
  // ───────────────────────────── Colorado ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-colorado",
    eyebrow: "Substitute teacher staffing · Colorado",
    h1: "Substitute Teacher Staffing in Colorado",
    metaTitle: "Substitute Teacher Staffing in Colorado",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Colorado districts, BOCES, and charters — CDE 1-, 3-, and 5-year substitute authorizations and CBI/FBI fingerprint checks handled.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Colorado school districts, BOCES, and charter schools, and Colorado is already on our client list: Lotus School for Excellence in Aurora has recommended us in writing. We place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each holding a CDE substitute authorization backed by a CBI and FBI fingerprint check.",
    photo: "/photography/about-classroom.jpg",
    photoAlt: "A substitute teacher working with students in a Colorado classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Colorado" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "CDE substitute authorization — 1-year, 3-year, or 5-year — verified in CDE's licensing system and tracked to expiration",
      "Fingerprint-based CBI and FBI criminal history check on file with CDE, as every authorization requires",
      "Bachelor's degree on official transcript for 3-year authorizations; current or expired Colorado teacher license for 5-year authorizations",
      "District-level fingerprint check through CBI completed where the hiring district requires its own (C.R.S. 22-32-109.8)",
      "District-requested emergency authorization file prepared where a non-licensed teacher will fill a vacancy",
      "Authorization renewal tracked in our credentialing system",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management screening before the first assignment",
    ],
    quote: {
      text: "We are thrilled that we can transition our contract employee to permanent status without a buyout fee. The experience has been outstanding.",
      name: "Kelly Hamm",
      role: "HR Director, Lotus School for Excellence (Aurora, CO)",
    },
    sections: [
      {
        heading: "What Colorado schools need from a substitute partner",
        body: "Colorado makes substitute licensing simple and statewide: CDE issues one-, three-, and five-year substitute authorizations that work in any district, BOCES, charter school, or facility school, with no cap on days per assignment. That removes the scheduling clocks other states impose, and it moves the whole problem to supply. Along the Front Range — Denver, Jefferson County, Douglas County, Cherry Creek, Aurora, Adams 12, Boulder Valley, St. Vrain, and Colorado Springs — every district and charter is calling the same authorized substitutes on the same morning, and a reliable sub commits to whoever confirmed first and pays on time.\n\nColorado schools ask us for day-to-day substitutes confirmed before first bell, long-term substitutes for leaves and vacancies, and special education substitutes and substitute paraprofessionals who keep IEP services running. Charter schools, which are a large share of Colorado's public schools, need all of it with a smaller HR office behind them.",
      },
      {
        heading: "How FocusedEDU staffs Colorado substitute programs",
        body: "We already staff in Colorado. Lotus School for Excellence in Aurora is a client, and its HR director, Kelly Hamm, put the reason in writing: she could move a contract employee to permanent status without a buyout fee. That is our temp-to-perm model, and it applies to every substitute we place — a long-term sub who proves out can become your teacher with no conversion fee.\n\nEvery Colorado substitute arrives with a CDE substitute authorization and the CBI and FBI fingerprint check behind it, and our credentialing system tracks the authorization's expiration and any district-level check your HR office requires. Automated credentialing cuts typical time-to-hire roughly in half. Our substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. For special education, paraprofessional, and related-services staffing in the state, see our [Colorado substitute, special education, and K-12 staffing](/colorado-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="co-substitute-requirements">Colorado substitute teacher and clearance requirements</h2>
<p class="answer-lead">Colorado substitutes hold a CDE substitute authorization: a 1-year authorization requires a high school diploma and experience working with children, a 3-year authorization requires a bachelor's degree, and a 5-year authorization requires a current or expired Colorado teacher license. Every authorization requires a fingerprint-based criminal history check on file with CDE, is valid statewide, and may be renewed indefinitely.</p>
<h3>The 1-year, 3-year, and 5-year substitute authorizations</h3>
<p>CDE explains that "Colorado issues three types of substitute authorizations -- 1-year, 3-year and 5-year -- based on your educational background and experience, which allow you to work as a substitute teacher in a Colorado public school district, BOCES, charter school or CDE-approved facility school." For the 3-year authorization, "you must hold an earned bachelor's or higher degree in any content area from a regionally accredited college or university and have a current fingerprint-based criminal history report/background check on file with CDE." For the 1-year authorization, "you must hold high school diploma or its equivalent, have a current fingerprint-based criminal history report/background check on file with CDE and attest to having successful experience working with children" ${cite("CDE, Become a Substitute / Guest Teacher", "https://www.cde.state.co.us/node/2416")}. CDE's checklist lists the fees at $60 for a 1-year authorization and $90 for 3- and 5-year authorizations ${cite("CDE, Substitute Teacher Authorizations checklist", "https://ed.cde.state.co.us/cdeprof/checklist-substituteauths")}.</p>
<p>The State Board's licensing rules add that a substitute authorization "may be renewed indefinitely upon application" ${cite("1 CCR 301-37, Rules for the Administration of the Educator Licensing Act, §3.18", "https://www.cde.state.co.us/educatortalent/1CCR301_37Clean_Aug2024")}, and the statute defines the document: "A substitute authorization authorizes a school district to employ a person to teach on a substitute basis. A substitute authorization shall be valid for such periods of time as specified in, and may be renewed as authorized in, rules adopted by the state board of education" ${cite("C.R.S. 22-60.5-111", "https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-22.pdf")}. Neither the statute nor the rule caps the number of days a substitute may serve in one assignment.</p>
<h3>Fingerprint-based background checks</h3>
<p>Every authorization applicant is fingerprinted for CDE, and districts run their own checks for non-licensed hires. For applicants selected for nonlicensed positions, the district "shall forward such fingerprints to the Colorado bureau of investigation for the purpose of conducting a state and national fingerprint-based criminal history record check utilizing the records of the Colorado bureau of investigation and the federal bureau of investigation" ${cite("C.R.S. 22-32-109.8", "https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-22.pdf")}. CDE notes that district employment checks are "separate from fingerprinting required for educator licensure under the Educator Licensing Act" ${cite("CDE, Fingerprint and Criminal History Updates", "https://ed.cde.state.co.us/cdeprof/fingerprints-and-criminal-history")}. FocusedEDU completes the CDE check with every candidate and coordinates any district-level check your HR office requires.</p>
<h3>Long-term coverage and the emergency authorization</h3>
<p>Because substitute authorizations carry no day limit, Colorado has no separate long-term substitute permit. Where a district wants to fill a vacancy with a non-licensed teacher rather than a substitute, the State Board's rules provide a district-requested route: "The emergency authorization may be issued for up to one year and may be renewed for up to one additional year" when a school district or BOCES requests it to employ a non-licensed teacher, principal, administrator, or special services provider ${cite("1 CCR 301-37, §3.16 Emergency Authorization", "https://www.cde.state.co.us/educatortalent/1CCR301_37Clean_Aug2024")}. We prepare that request when a district needs it.</p>
${whereWeStaff(
  "Colorado",
  "We staff substitute programs for districts, BOCES, and charter schools across Colorado, with Aurora already on our client list and recruiting built around the Front Range.",
  "That includes Denver; Aurora, home to Aurora Public Schools and Cherry Creek; the west and south metro — Jefferson County and Douglas County; the north metro — Adams 12, Brighton and District 27J, and Thornton; Boulder and Longmont, served by Boulder Valley and St. Vrain Valley; Fort Collins and Poudre; Colorado Springs, including Academy 20 and District 49; and Greeley. Because we work with one client per region, the first district or charter network to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
<p>In Colorado itself, Lotus School for Excellence in Aurora has partnered with FocusedEDU and recommended us in writing; read the letter on our <a href="/references">references page</a>.</p>
${forSubs("Colorado", "Colorado substitutes need a CDE substitute authorization — a high school diploma and experience with children qualifies you for the 1-year authorization, a bachelor's degree for the 3-year, and a Colorado teacher license for the 5-year — with a fingerprint-based CBI and FBI check on file with CDE. We tell you which authorization to apply for and in what order to complete the steps.")}
${openings("Colorado", "Aurora and the Brighton–Henderson area")}
${cta("Colorado")}`,
    faqs: [
      {
        q: "What do you need to substitute teach in Colorado?",
        a: "A CDE substitute authorization. The 1-year authorization requires a high school diploma or equivalent and successful experience working with children; the 3-year requires a bachelor's degree; the 5-year requires a current or expired Colorado teacher license. All three require a fingerprint-based criminal history check on file with CDE and are valid in any Colorado district, BOCES, charter school, or facility school.",
      },
      {
        q: "Is there a limit on how long a Colorado substitute can stay in one classroom?",
        a: "CDE's substitute authorization pages and the State Board's licensing rules do not cap days per assignment; the authorization is valid for its one-, three-, or five-year term and may be renewed indefinitely. A district filling a vacancy with a non-licensed teacher can instead request an emergency authorization, valid for up to one year and renewable once.",
      },
      {
        q: "What background checks do Colorado substitutes need?",
        a: "A fingerprint-based criminal history check on file with CDE for the authorization itself, and, for non-licensed district hires, a district check forwarded to the Colorado Bureau of Investigation for a state and national fingerprint-based record check under C.R.S. 22-32-109.8. CDE notes the two processes are separate.",
      },
      {
        q: "Do you already work with Colorado schools?",
        a: "Yes. Lotus School for Excellence in Aurora is a client, and its HR director, Kelly Hamm, has written a letter of recommendation citing the ability to move a contract employee to permanent status without a buyout fee. The letter is on our references page.",
      },
      {
        q: "What fill rate can a Colorado district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      { label: "Colorado Substitute, Special Ed & K-12 Staffing", slug: "colorado-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Arizona", slug: "substitute-teacher-staffing-arizona" },
      { label: "Substitute Teacher Staffing in Texas", slug: "substitute-teacher-staffing-texas" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── Connecticut ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-connecticut",
    eyebrow: "Substitute teacher staffing · Connecticut",
    h1: "Substitute Teacher Staffing in Connecticut",
    metaTitle: "Substitute Teacher Staffing in Connecticut",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Connecticut districts and charters — bachelor's-degree rule, DCF registry and criminal history checks, and the 60-day authorization line tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Connecticut school districts, regional districts, and charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with the bachelor's-degree rule, DCF registry check, and criminal history checks handled and every assignment tracked against the 60-school-day line for a CSDE long-term authorization.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Connecticut classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Connecticut" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Bachelor's degree on official transcript, as Conn. Gen. Stat. §10-145 requires of substitutes (or the district's Commissioner-approved waiver documented)",
      "DCF child abuse and neglect registry check completed before hire (Conn. Gen. Stat. §10-221d)",
      "State and national criminal history records check completed, with the date tracked against the one-year and five-year substitute rules",
      "Written disclosure of criminal history on file for your HR office",
      "School days in the same assignment tracked against the 60-day line for a CSDE long-term substitute authorization",
      "Bachelor's degree plus 12 subject-area credits verified for long-term candidates; ED 175 file prepared for your district to submit",
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
        heading: "What Connecticut schools need from a substitute partner",
        body: "Connecticut sets a high floor for daily substitutes — a bachelor's degree, by statute, unless the Commissioner waives it at a superintendent's request — and then puts a 60-school-day clock on every assignment. A substitute can stay in the same assignment without a state authorization for 60 school days; past that, the district needs a CSDE long-term substitute authorization, which requires 12 credits in the subject and is filed by the district, one school year at a time, expiring every June 30. A leave that quietly runs past day 60 is the most common way a Connecticut substitute program goes out of compliance.\n\nThe daily problem is the one every state has, concentrated in a small state where Bridgeport, New Haven, Hartford, Waterbury, Stamford, Norwalk, and Danbury all draw on overlapping pools. Districts and charters ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who meet the 12-credit rule, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Connecticut substitute programs",
        body: "We verify the bachelor's degree, complete the DCF registry check and the state and national criminal history checks, and record each check's date, because Connecticut lets a check within the prior year satisfy a new employer and requires continuously employed substitutes to be rechecked at least every five years. Our credentialing system counts school days per assignment and flags day 60 in advance, with the ED 175 file ready for your district to submit. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="ct-substitute-requirements">Connecticut substitute teacher and clearance requirements</h2>
<p class="answer-lead">Connecticut has no substitute teaching certificate, but state law requires a substitute to hold a bachelor's degree unless the Commissioner of Education waives it at a superintendent's request. A district may use a substitute in the same assignment without a CSDE authorization for up to 60 school days; beyond that, a long-term substitute authorization requires a bachelor's degree and 12 subject-area credits. Every applicant needs a DCF registry check and state and national criminal history checks.</p>
<h3>The bachelor's-degree rule and the 60-school-day line</h3>
<p>The statute states: "No person shall be employed in any of the schools of any local or regional board of education as a substitute teacher unless such person (1) holds a bachelor's degree, provided the Commissioner of Education may waive such requirement for good cause upon the request of a superintendent of schools," and is on the board's substitute list. It then sets the clock: "A local or regional board of education may employ a person as a substitute teacher in the same assignment without a substitute authorization issued by the Department of Education for a period not to exceed sixty school days" ${cite("Conn. Gen. Stat. §10-145", "https://www.cga.ct.gov/current/pub/chap_166.htm")}. CSDE's guidance to districts matches: "Teaching certificates are not required for subs," a bachelor's degree "is normally required for daily substitutes," and a district can apply for a waiver for candidates without one ${cite("CSDE, What are the requirements for hiring substitute teachers?", "https://portal.ct.gov/sdecertification/knowledge-base/articles/school-districts/what-are-the-requirements-for-hiring-substitute-teachers")}.</p>
<h3>Long-term substitute authorizations and shortage-area permits</h3>
<p>CSDE's guidance states that "Substitutes are considered long-term for any position lasting over 60 days in a single school year," that "Long-term substitutes must hold a bachelor's degree and 12 credits in the content/subject area being requested," and that "Long-term substitute authorizations are issued for one school year at a time and expire June 30" ${cite("CSDE, What are the requirements for hiring substitute teachers?", "https://portal.ct.gov/sdecertification/knowledge-base/articles/school-districts/what-are-the-requirements-for-hiring-substitute-teachers")}. For a vacancy rather than a leave, a district can request a Durational Shortage Area Permit: "A DSAP authorizes service in Connecticut schools when applicants have been determined to be missing requirements for the certification area being taught," and for certificates that require a preparation program, "applicants must enroll in the program before qualifying for a DSAP" ${cite("CSDE, What is a durational shortage area permit?", "https://portal.ct.gov/sdecertification/knowledge-base/articles/school-districts/what-is-a-durational-shortage-area-permit")}. We verify the 12-credit requirement for every long-term candidate and prepare the district's filing.</p>
<h3>DCF registry and criminal history checks</h3>
<p>Connecticut's school background-check statute requires each eligible school operator to "require each applicant to submit to a records check of the Department of Children and Families child abuse and neglect registry" before hire, and to require applicants to "submit to state and national criminal history records checks within thirty days from the date of employment." The statute has substitute-specific rules: an operator need not re-check substitutes "if they are continuously employed by such eligible school operator, provided a substitute teacher is subjected to such checks at least once every five years," and substitutes are deemed continuously employed if they work at least one day each school year for that operator ${cite("Conn. Gen. Stat. §10-221d", "https://www.cga.ct.gov/current/pub/chap_170.htm")}. FocusedEDU completes and dates both checks for every substitute before presenting them.</p>
${whereWeStaff(
  "Connecticut",
  "We staff substitute programs for districts, regional districts, and charter schools across Connecticut, with recruiting built around the state's largest cities and their suburbs.",
  "That includes Bridgeport, Stamford, Norwalk, and Danbury in Fairfield County; New Haven and Meriden; Hartford, West Hartford, and New Britain; and Waterbury. Because we work with one client per region, the first district or charter to sign in an area gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Connecticut", "Connecticut substitutes need a bachelor's degree (a partner district can request a Commissioner's waiver if you do not have one), a DCF registry check, and state and national criminal history checks. If you hold 12 credits in a subject, you can also cover long-term assignments on a district-requested authorization; we tell you which steps to take first.")}
${openings("Connecticut", "Middletown")}
${cta("Connecticut")}`,
    faqs: [
      {
        q: "Do you need a degree to substitute teach in Connecticut?",
        a: "Yes, as a rule. Conn. Gen. Stat. §10-145 requires a substitute to hold a bachelor's degree, although the Commissioner of Education may waive the requirement for good cause at a superintendent's request. No teaching certificate is required for daily substitutes.",
      },
      {
        q: "How long can a Connecticut substitute stay in one assignment?",
        a: "Up to 60 school days in the same assignment without a state authorization. Beyond that, CSDE treats the position as long-term and the district must obtain a long-term substitute authorization, which requires a bachelor's degree and 12 credits in the subject area and expires June 30 of each school year.",
      },
      {
        q: "What background checks do Connecticut substitutes need?",
        a: "A Department of Children and Families child abuse and neglect registry check before hire, and state and national criminal history records checks within 30 days of employment, under Conn. Gen. Stat. §10-221d. Continuously employed substitutes must be rechecked at least every five years.",
      },
      {
        q: "What is a Durational Shortage Area Permit?",
        a: "A district-requested permit that authorizes service when the candidate is missing requirements for the certification area being taught. Where the certificate requires an approved preparation program, the candidate must enroll in it before qualifying for the DSAP.",
      },
      {
        q: "What fill rate can a Connecticut district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "What does it cost to hire a long-term sub permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost, with no conversion fee and no buyout. We also work with one client per region, so the pool we build for you serves only your schools.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Massachusetts", slug: "substitute-teacher-staffing-massachusetts" },
      { label: "Substitute Teacher Staffing in New York", slug: "substitute-teacher-staffing-new-york" },
      { label: "Substitute Teacher Staffing in New Jersey", slug: "substitute-teacher-staffing-new-jersey" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── Wisconsin ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-wisconsin",
    eyebrow: "Substitute teacher staffing · Wisconsin",
    h1: "Substitute Teacher Staffing in Wisconsin",
    metaTitle: "Substitute Teacher Staffing in Wisconsin",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Wisconsin districts and charters — DPI short-term substitute permits, long-term substitute licenses, DPI background checks, and the 45-day limit tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Wisconsin school districts, independent charter schools, and CESAs. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, with DPI substitute permits and licenses verified, DPI's background investigation completed, and every short-term assignment tracked against the 45-consecutive-day limit.",
    photo: "/photography/schools-teaching.jpg",
    photoAlt: "A substitute teacher leading a lesson in a Wisconsin classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Wisconsin" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "DPI Three-Year Short-Term Substitute Teacher Permit (associate degree or higher plus approved substitute training, or junior-status EPP enrollment) verified in ELO",
      "DPI Five-Year Long-Term Substitute Teacher License verified for any sub covering a long-term assignment",
      "DPI background investigation and Conduct and Competency questionnaire completed (Wis. Stat. §118.19(10))",
      "Consecutive days in the same teaching assignment tracked against the 45-day limit for short-term substitutes",
      "License subject and grade level matched to every long-term assignment, as PI 34.109 requires",
      "District-requested License with Stipulations file prepared where a permit holder is needed long-term",
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
        heading: "What Wisconsin schools need from a substitute partner",
        body: "Wisconsin draws a bright line between short-term and long-term substitutes. A Three-Year Short-Term Substitute Permit holder can teach any subject at any grade level, but for no more than 45 consecutive days in the same assignment. Day 46 requires a Five-Year Long-Term Substitute License holder, or a fully licensed teacher, in the subject and grade of the assignment — or a License with Stipulations the district requests. A district that schedules a leave without knowing which document each sub holds finds out in week ten.\n\nMilwaukee, Madison, Kenosha, Racine, Green Bay, Appleton, and Waukesha each draw on a regional pool of DPI-cleared people, and a reliable sub commits to the school that confirmed first and pays on time. Districts, charters, and CESAs ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who hold the right license for the subject, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Wisconsin substitute programs",
        body: "We record each Wisconsin substitute's DPI document — short-term permit, long-term license, or full license — at onboarding and count consecutive days per assignment, so a permit holder is never scheduled past day 45 and a long leave goes to a sub licensed for the subject from the start. Every candidate completes DPI's background investigation before being presented. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the district next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [related services staffing](/related-services-staffing).",
      },
    ],
    richHtml: `<h2 id="wi-substitute-requirements">Wisconsin substitute teacher and clearance requirements</h2>
<p class="answer-lead">Wisconsin substitutes hold one of two DPI documents. The Three-Year Short-Term Substitute Teacher Permit — for candidates with an associate degree or higher who complete an approved substitute training program, or college juniors enrolled in an approved educator preparation program — allows any subject and grade for no more than 45 consecutive days in one assignment. The Five-Year Long-Term Substitute Teacher License allows long-term work in the subject and grade of the license. DPI runs a background investigation on every applicant.</p>
<h3>The short-term permit and the 45-day limit</h3>
<p>DPI's substitute page explains that the permit "allows the permit holder to be a short-term (no more than 45 days in a specific assignment) substitute in any subject and in any grade level" ${cite("DPI, Applications for Substitute Licenses and Permits", "https://dpi.wi.gov/licensing/apply-educator-license/substitute")}. The rule itself requires that an applicant have "Completed a substitute teacher training program approved by the state superintendent," and provides that "A permit issued under this section is valid for 3 years" ${cite("Wis. Admin. Code PI 34.032", "https://docs.legis.wisconsin.gov/document/administrativecode/PI%2034.032")}. The district-side rule is the one schedulers live by: "A school district may employ an individual as a short-term substitute teacher for no more than 45 consecutive days in the same teaching assignment. A short-term substitute teacher may be employed to teach any subject at any grade level" ${cite("Wis. Admin. Code PI 34.109", "https://docs.legis.wisconsin.gov/document/administrativecode/PI%2034.109")}. DPI is explicit that "The Three-Year Short-Term Substitute permit does not allow the license holder to be in a long-term substitute assignment"; the alternatives are a long-term substitute license or a district-requested License with Stipulations ${cite("DPI, Application Directions for Three-Year Short-Term Substitute Teacher Permit", "https://dpi.wi.gov/licensing/apply-educator-license/sub-permit")}.</p>
<h3>The long-term substitute license</h3>
<p>For leaves beyond 45 days, PI 34.109 provides: "A school district may employ an individual as a long-term substitute teacher if the individual is a licensed substitute teacher under s. PI 34.033 or is fully licensed for the assignment. A long-term substitute teacher may be employed only in the subject or position and grade level in which the individual is licensed" ${cite("Wis. Admin. Code PI 34.109", "https://docs.legis.wisconsin.gov/document/administrativecode/PI%2034.109")}. The long-term license "authorizes the license holder to be either a short-term substitute teacher or a long-term substitute in the subject area or position and grade level of the license," and "A license issued under this section is valid for 5 years" ${cite("Wis. Admin. Code PI 34.033", "https://docs.legis.wisconsin.gov/document/administrativecode/PI%2034.033")}. We match the license to the assignment for every long-term placement.</p>
<h3>DPI background investigations</h3>
<p>Wisconsin runs its school background checks at the state licensing level. The statute directs the state superintendent to "Conduct a background investigation of each applicant for issuance or renewal of a license or permit," and to re-investigate lifetime license holders at least once every five years ${cite("Wis. Stat. §118.19(10)", "https://docs.legis.wisconsin.gov/document/statutes/118.19(10)")}. DPI states that it "is required by law to conduct a background check on all Wisconsin educator license applicants," and applicants complete a Conduct and Competency questionnaire in ELO ${cite("DPI, Background Check for Licensure", "https://dpi.wi.gov/licensing/background-check")}. FocusedEDU confirms the check is complete and the permit or license is active before a substitute is presented, and coordinates any additional check your district requires.</p>
${whereWeStaff(
  "Wisconsin",
  "We staff substitute programs for districts, independent charter schools, and CESAs across Wisconsin, with recruiting built around the state's largest cities.",
  "That includes Milwaukee and its suburbs, including West Allis-West Milwaukee and Waukesha; Madison; Kenosha and Racine; Green Bay and the Fox Valley, including Appleton and Oshkosh; Eau Claire; Sheboygan; and Janesville. Because we work with one client per region, the first district or charter to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("Wisconsin", "Wisconsin substitutes need a DPI Three-Year Short-Term Substitute Permit — an associate degree or higher plus an approved substitute training program, or junior standing in an approved educator preparation program — or a Five-Year Long-Term Substitute License if you have completed a preparation program. DPI runs the background investigation as part of the application, and we walk you through ELO.")}
${openings("Wisconsin", "Milwaukee, Appleton, and Middleton")}
${cta("Wisconsin")}`,
    faqs: [
      {
        q: "What do you need to substitute teach in Wisconsin?",
        a: "A DPI Three-Year Short-Term Substitute Teacher Permit, which requires an associate degree or higher and completion of an approved substitute teacher training program (or junior standing in an approved educator preparation program), or a Five-Year Long-Term Substitute Teacher License for those who have completed a preparation program. DPI conducts a background investigation on every applicant.",
      },
      {
        q: "How long can a short-term substitute stay in one Wisconsin assignment?",
        a: "No more than 45 consecutive days in the same teaching assignment, under PI 34.109. Beyond that, the district must use a long-term substitute license holder or a fully licensed teacher in the subject and grade of the assignment, or request a License with Stipulations.",
      },
      {
        q: "Can a short-term permit holder cover a long-term leave?",
        a: "No. DPI states that the Three-Year Short-Term Substitute permit does not allow the holder to be in a long-term substitute assignment. The options are a Five-Year Long-Term Substitute License or a License with Stipulations requested by the employing district.",
      },
      {
        q: "Who runs the background check for Wisconsin substitutes?",
        a: "DPI, as part of licensing. Wis. Stat. §118.19(10) requires the state superintendent to conduct a background investigation of each applicant for issuance or renewal of a license or permit, and applicants complete a Conduct and Competency questionnaire in ELO. Districts may run their own checks in addition.",
      },
      {
        q: "What fill rate can a Wisconsin district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Illinois", slug: "substitute-teacher-staffing-illinois" },
      { label: "Substitute Teacher Staffing in Michigan", slug: "substitute-teacher-staffing-michigan" },
      { label: "Substitute Teacher Staffing in Ohio", slug: "substitute-teacher-staffing-ohio" },
      SPED_HUB,
      PARA_HUB,
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },

  // ───────────────────────────── Virginia ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-virginia",
    eyebrow: "Substitute teacher staffing · Virginia",
    h1: "Substitute Teacher Staffing in Virginia",
    metaTitle: "Substitute Teacher Staffing in Virginia",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for Virginia school divisions and charters — division-set qualifications, fingerprinting under §22.1-296.2, and the 90- and 180-day vacancy rules tracked.",
    hero: "FocusedEDU is a substitute teacher staffing agency for Virginia school divisions and public charter schools. We recruit, screen, and place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, each fingerprinted through the Central Criminal Records Exchange and the FBI and verified against the division's own substitute qualifications, with vacancy assignments tracked against Virginia's 90- and 180-teaching-day rules.",
    photo: "/photography/hero-classroom.jpg",
    photoAlt: "A substitute teacher working with students in a Virginia classroom",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "Virginia" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "Age 18 and a high school diploma or approved equivalency at minimum (Va. Code §22.1-302), plus the division's own qualifications for daily and long-term substitutes",
      "Fingerprinting through the Central Criminal Records Exchange and the FBI, as §22.1-296.2 requires of every applicant, full- or part-time, permanent or temporary",
      "Contractor certification regarding convictions and child abuse findings prepared for the division under §22.1-296.1",
      "Bachelor's degree on official transcript for any sub who may fill a vacancy beyond 90 teaching days",
      "Teaching days in a vacancy tracked against the 90-day professional development plan rule and the 180-day cap",
      "Division superintendent's extension request prepared where a vacancy will exceed the cap",
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
        heading: "What Virginia schools need from a substitute partner",
        body: "Virginia does not license substitutes — the Code calls them temporarily employed teachers — and sets a statewide floor of age 18 and a high school diploma, then tells each local school board to establish its own qualifications and to hold long-term substitutes to a higher standard. The clocks are on vacancies: a substitute filling a vacant position for more than 90 teaching days must hold a bachelor's degree, unless the Superintendent of Public Instruction approves otherwise, and the board must put a professional development plan in place; and under the current statute a vacancy can be covered by a substitute for no more than 180 teaching days in a school year without case-by-case approval.\n\nNorthern Virginia — Fairfax, Prince William, Loudoun, Arlington, Stafford — Hampton Roads, and the Richmond metro each draw on a regional pool of fingerprinted substitutes, and a reliable sub commits to the division that confirmed first. Divisions ask us for day-to-day substitutes confirmed before first bell, long-term substitutes who meet the degree rule, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs Virginia substitute programs",
        body: "We verify every Virginia substitute against the hiring division's posted qualifications, complete fingerprinting through the Central Criminal Records Exchange and the FBI, and deliver the contractor certification the division is required to obtain from us. Our credentialing system counts teaching days per vacancy, flags day 90 and the 180-day cap in advance, and prepares the superintendent's extension request when a division needs one. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your division are not presented to the division next door. Every placement is temp-to-perm at no cost. For the rest of the building, see [special education staffing](/special-education-staffing), [paraprofessional staffing](/paraprofessional-staffing), and [K-12 education staffing](/k12-education-staffing).",
      },
    ],
    richHtml: `<h2 id="va-substitute-requirements">Virginia substitute teacher and clearance requirements</h2>
<p class="answer-lead">Virginia does not license substitute teachers. State law sets a floor of age 18 and a high school diploma or approved equivalency, and each local school board establishes its own qualifications, with higher standards for long-term substitutes. Every applicant, including temporary and part-time, is fingerprinted through the Central Criminal Records Exchange and the FBI. A substitute filling a vacancy for more than 90 teaching days generally needs a bachelor's degree, and vacancies are capped at 180 teaching days without the Superintendent of Public Instruction's approval.</p>
<h3>Division-set qualifications for temporarily employed teachers</h3>
<p>The Code provides that "A temporarily employed teacher is not required to be licensed by the Board, nor is the local school board required to enter into a written contract with a temporarily employed teacher." The floor is statewide — "Temporarily employed teachers, as defined in this section, shall be at least 18 years of age and shall hold a high school diploma or have passed a high school equivalency examination approved by the Board" — and the rest is local: boards "shall (i) establish employment qualifications for temporarily employed teachers that may exceed these requirements for the employment of such teachers; (ii) seek to ensure that temporarily employed teachers who are engaged as long-term substitutes exceed baseline employment qualifications" ${cite("Va. Code §22.1-302", "https://law.lis.virginia.gov/vacode/title22.1/chapter15/section22.1-302/")}. We verify each substitute against the division's own posted standard.</p>
<h3>Vacancies: the 90-day degree rule and the 180-day cap</h3>
<p>The same section provides that a temporarily employed teacher "who is employed to fill a teacher vacancy for more than 90 teaching days for any course other than a course for which a technical professional license is required shall, unless otherwise approved by the Superintendent, hold a baccalaureate degree," and requires the board to "execute a professional development plan with any temporarily employed teacher who is employed to fill a teacher vacancy for more than 90 teaching days." The version of the statute in effect until July 1, 2027 allows a vacancy to be filled by a substitute "but for no longer than 180 teaching days in such vacancy" in a school year unless otherwise approved by the Superintendent on a case-by-case basis ${cite("Va. Code §22.1-302 (effective until July 1, 2027)", "https://law.lis.virginia.gov/vacode/title22.1/chapter15/section22.1-302/")}. The Board of Education's guidelines describe the extension request: "In a rare exceptional and justifiable case due to extenuating circumstances, a school division superintendent may submit a request to the Superintendent of Public Instruction to consider an extension of the teaching days a substitute teacher may serve in a vacant teaching position," and "The Superintendent of Public Instruction will respond within 10 business days of receipt of the request" ${cite("Virginia Board of Education, Guidelines Pertaining to the Employment of Substitute Teachers", "https://www.townhall.virginia.gov/L/ViewGDoc.cfm?gdid=4890")}. Separately, the licensure statute allows an unlicensed person to be employed "temporarily as a substitute teacher to meet an emergency" ${cite("Va. Code §22.1-299", "https://law.lis.virginia.gov/vacode/title22.1/chapter15/section22.1-299/")}. We count teaching days per vacancy and prepare the request before the cap.</p>
<h3>Fingerprinting and contractor certification</h3>
<p>Virginia's fingerprinting statute is comprehensive: a school board "shall require any applicant who is offered or accepts employment, whether full time or part time or permanent or temporary, to submit to fingerprinting and to provide personal descriptive information" for a Central Criminal Records Exchange and FBI check ${cite("Va. Code §22.1-296.2", "https://law.lis.virginia.gov/vacode/title22.1/chapter15/section22.1-296.2/")}. For agency staff there is a second requirement: as a condition of awarding a contract for services that require the contractor or its employees to have direct contact with students on school property during school hours, "the school board shall require the contractor to provide certification" regarding convictions and founded child abuse complaints ${cite("Va. Code §22.1-296.1", "https://law.lis.virginia.gov/vacode/title22.1/chapter15/section22.1-296.1/")}. FocusedEDU completes the fingerprinting and delivers the certification before a substitute is presented.</p>
${whereWeStaff(
  "Virginia",
  "We staff substitute programs for school divisions and public charter schools across Virginia, with recruiting built around Northern Virginia, Hampton Roads, and the Richmond metro.",
  "That includes Fairfax, Prince William, Loudoun, Arlington, and Stafford counties and the cities of Manassas and Alexandria in Northern Virginia; Virginia Beach, Chesapeake, Norfolk, and Newport News in Hampton Roads; and Richmond, Chesterfield County, and Henrico County. Because we work with one client per region, the first division or charter to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("The measure that matters in a substitute program is day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, where our weekly-pay, app-based substitute model has sustained a 95% day-to-day fill rate since 2021, a 40%+ improvement over the school's previous provider.")}
${forSubs("Virginia", "Virginia substitutes must be at least 18 with a high school diploma or approved equivalency, meet the hiring division's own qualifications, and complete fingerprinting through the Central Criminal Records Exchange and the FBI. A bachelor's degree opens long-term vacancy assignments beyond 90 teaching days; we match you to the divisions where you already qualify.")}
${openings("Virginia", "Manassas")}
${cta("Virginia")}`,
    faqs: [
      {
        q: "Do substitute teachers need a license in Virginia?",
        a: "No. Va. Code §22.1-302 states that a temporarily employed teacher is not required to be licensed by the Board. The statewide floor is age 18 and a high school diploma or approved equivalency; each local school board sets its own qualifications and must seek to hold long-term substitutes to higher ones.",
      },
      {
        q: "How long can a Virginia substitute fill a vacant teaching position?",
        a: "Under the statute in effect until July 1, 2027, no longer than 180 teaching days in a school year unless the Superintendent of Public Instruction approves an extension case by case. A substitute in a vacancy for more than 90 teaching days must generally hold a bachelor's degree, and the board must execute a professional development plan.",
      },
      {
        q: "What background check do Virginia substitutes need?",
        a: "Fingerprinting under Va. Code §22.1-296.2, which applies to any applicant offered employment whether full time or part time, permanent or temporary, with the prints sent through the Central Criminal Records Exchange to the FBI. Contractors whose employees have direct student contact must also certify convictions and child abuse findings under §22.1-296.1.",
      },
      {
        q: "How does a division get an extension beyond the vacancy cap?",
        a: "The division superintendent submits a request to the Superintendent of Public Instruction under the Board of Education's substitute guidelines, which describe the extension as for rare, exceptional, and justifiable cases; the Superintendent responds within 10 business days. We prepare the supporting file.",
      },
      {
        q: "What fill rate can a Virginia division expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the division next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      HUB,
      { label: "Substitute Teacher Staffing in Washington, DC", slug: "substitute-teacher-staffing-washington-dc" },
      { label: "Substitute Teacher Staffing in Maryland", slug: "substitute-teacher-staffing-maryland" },
      { label: "Substitute Teacher Staffing in North Carolina", slug: "substitute-teacher-staffing-north-carolina" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },

  // ───────────────────────────── North Carolina ─────────────────────────────
  {
    slug: "substitute-teacher-staffing-north-carolina",
    eyebrow: "Substitute teacher staffing · North Carolina",
    h1: "Substitute Teacher Staffing in North Carolina",
    metaTitle: "Substitute Teacher Staffing in North Carolina",
    metaDescription:
      "Substitute teachers, SPED subs, and paras for North Carolina districts and charters — LEA-set qualifications, G.S. 115C-332 criminal history checks, and DPI substitute rules. Charlotte-Mecklenburg Schools is a client.",
    hero: "FocusedEDU is a substitute teacher staffing agency for North Carolina districts and charter schools, and Charlotte-Mecklenburg Schools, one of the largest districts in the state, is already a client. We place day-to-day, long-term, and special education substitutes, substitute paraprofessionals, and related-service providers, verified against each LEA's substitute qualifications and checked under the state's school personnel criminal history law.",
    photo: "/photography/educators-support.jpg",
    photoAlt: "A substitute teacher working with students in a North Carolina school",
    updated: NATIONAL_UPDATED,
    areaServed: [{ type: "State", name: "North Carolina" }],
    parent: HUB,
    roles: NATIONAL_ROLES,
    stats: ODYSSEY_STATS,
    steps: SUB_STEPS,
    verify: [
      "The hiring LEA's own substitute qualifications verified, since DPI requires no state license to substitute",
      "Criminal history check completed under the local board's G.S. 115C-332 policy, which covers substitute teachers and contractor personnel with significant student access",
      "Annual sex offender registry check completed for contractual personnel with direct student interaction (G.S. 115C-332.1)",
      "North Carolina educator license verified where a district pays the licensed substitute rate or needs an in-field long-term sub",
      "Half-day and full-day assignment units recorded to match DPI's substitute pay rules",
      "Local board's Emergency License request file prepared where a vacancy needs a one-year license holder",
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
        heading: "What North Carolina schools need from a substitute partner",
        body: "North Carolina leaves substitute qualifications to each local education agency. DPI requires no state license to substitute teach, encourages districts to hire licensed teachers as substitutes, and pays them differently: at least 65 percent of the beginning teacher daily rate for licensed substitutes and at least 50 percent for unlicensed ones. The state also defines the role narrowly — a substitute covers a permanent teacher who is on paid leave; a vacancy is filled by an interim teacher — which changes how long coverage is staffed and paid.\n\nWake County, Charlotte-Mecklenburg, Guilford, Winston-Salem/Forsyth, Cumberland, Durham, and the fast-growing Union, Johnston, and Cabarrus counties each draw on a regional pool, and North Carolina's large charter sector draws on the same one. Districts and charters ask us for day-to-day substitutes confirmed before first bell, licensed long-term substitutes for leaves, and special education substitutes and substitute paraprofessionals who keep IEP services running.",
      },
      {
        heading: "How FocusedEDU staffs North Carolina substitute programs",
        body: "We already staff in North Carolina: Charlotte-Mecklenburg Schools, one of the largest districts in the state, is a client. We verify every substitute against the hiring LEA's own qualifications, complete the criminal history check the board's policy requires, and run the annual sex offender registry check the state requires of contractual personnel. Our credentialing system records license status, so your payroll office knows which rate applies, and flags assignments that are vacancies rather than leaves. Automated credentialing cuts typical time-to-hire roughly in half.\n\nOur substitutes are paid weekly, every Friday, by direct deposit or Cash App, and they pick up and swap shifts in a mobile app, so your absence reaches the whole vetted pool the moment it posts. We work with one client per region, so the subs we recruit for your district are not presented to the county next door. Every placement is temp-to-perm at no cost. For special education, paraprofessional, and related-services staffing in the state, see our [North Carolina substitute, special education, and K-12 staffing](/north-carolina-education-staffing) page.",
      },
    ],
    richHtml: `<h2 id="nc-substitute-requirements">North Carolina substitute teacher and clearance requirements</h2>
<p class="answer-lead">North Carolina requires no state license to substitute teach; each local education agency sets its own requirements. Every local board must adopt a criminal history check policy under G.S. 115C-332, which defines school personnel to include substitute teachers and certain contractor employees, and contractual personnel with direct student interaction must be checked against sex offender registries annually. DPI's pay rules distinguish licensed from unlicensed substitutes, and a one-year Emergency License is available for vacancies at a local board's request.</p>
<h3>Qualifications set by each LEA</h3>
<p>DPI's licensure FAQ answers the question directly: "A state professional educator's license is not required to substitute teach. Contact each LEA in which you would like to teach to learn about the requirements for substitutes" ${cite("NC DPI, Licensure Forms and FAQs", "https://www.dpi.nc.gov/educators/educators-licensure/forms-and-faqs")}. DPI's employment policy manual adds that "The local board of education is encouraged to make every effort to hire licensed teachers to serve as substitutes in the local school system," defines the role — "A substitute teacher is defined as an individual who fills in for a permanent teacher who is still on payroll and is using paid leave" — and allows boards to set different pay rates by assignment length, subject, and training ${cite("NC DPI, Benefits and Employment Policy Manual, §11.1 Teacher Substitutes", "https://www.dpi.nc.gov/documents/district-humanresources/benefits-and-employment-policy-manual/open")}. We verify every substitute against the LEA's posted requirements.</p>
<h3>Pay classes and long-term coverage</h3>
<p>The State Salary Manual sets the floors: "For licensed substitutes working either part-time or full-time, the pay rate is at least 65% of the A-00 teacher calculated on a 22-day month," and "For unlicensed substitutes working either part-time or full-time, the pay rate is at least 50% of the A-00 teacher rate calculated on a 22-day month." Full-time substitutes — at least 30 hours a week for an expected six consecutive months — earn the same benefits as other employees ${cite("NC DPI, State Salary Manual 2025–26, §6.3 Substitute Teachers", "https://www.dpi.nc.gov/documents/fbs/resources/salary-manual-2026pdf/download")}. North Carolina has no long-term substitute permit; a vacancy is filled by an interim teacher, and where a local board needs a license holder it can request an Emergency License, "A one-year nonrenewable license issued to an individual who holds a bachelor's degree" ${cite("N.C. Gen. Stat. §115C-270.20", "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_115C/GS_115C-270.20.html")}. We record license status for every substitute so your payroll office applies the right rate, and we recruit licensed teachers for leaves expected to run long.</p>
<h3>Criminal history and registry checks</h3>
<p>State law requires that "each local board of education shall adopt a policy on whether and under what circumstances an applicant for a school personnel position shall be required to be checked for a criminal history before the applicant is offered an unconditional job," and it reaches agency staff: the definition covers an independent contractor's employee "if the independent contractor carries out duties customarily performed by school personnel, whether paid with federal, State, local, or other funds, who has significant access to students. School personnel includes substitute teachers, driver training teachers, bus drivers, clerical staff, and custodians" ${cite("N.C. Gen. Stat. §115C-332", "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_115C/GS_115C-332.html")}. A companion statute requires boards to make annual sex offender registry checks a condition of contracts with contractual personnel, defined to include "any individual or entity under contract with the local board of education whose contractual job involves direct interaction with students as part of the job" ${cite("N.C. Gen. Stat. §115C-332.1", "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_115C/GS_115C-332.1.html")}. FocusedEDU completes both for every substitute before presenting them.</p>
${whereWeStaff(
  "North Carolina",
  "We staff substitute programs for districts and charter schools across North Carolina, with Charlotte-Mecklenburg Schools already a client and recruiting built around the state's largest metros.",
  "That includes Charlotte and the surrounding Union, Cabarrus, and Gaston counties; Raleigh and Wake County, with Durham and Johnston County; the Triad — Greensboro and Guilford County, and Winston-Salem/Forsyth County; Fayetteville and Cumberland County; Asheville and Buncombe County; and Wilmington and New Hanover County. Because we work with one client per region, the first district or charter to sign in a metro gets the substitute pool we build there.",
)}
${odysseyProof("A substitute partner should be judged on day-to-day fill rate. Our reference point is an existing client: Odyssey Public Charter School in Wilmington, Delaware, a 1,000+ student K-8 school where our weekly-pay, app-based substitute model sustains a 95% day-to-day fill rate, a 40%+ improvement over the school's previous provider.")}
${forSubs("North Carolina", "North Carolina has no state license requirement for substitutes; each LEA sets its own, and every substitute is checked under the local board's criminal history policy and the sex offender registry rule for contractual personnel. Licensed teachers earn the higher substitute rate, and we match every candidate to the districts where they already qualify.")}
${openings("North Carolina", "Charlotte")}
${cta("North Carolina")}`,
    faqs: [
      {
        q: "Do you need a license to substitute teach in North Carolina?",
        a: "No. DPI states that a state professional educator's license is not required to substitute teach, and that each LEA sets its own requirements for substitutes. DPI's policy manual encourages districts to hire licensed teachers as substitutes, and licensed substitutes are paid at a higher rate.",
      },
      {
        q: "How are North Carolina substitutes paid?",
        a: "Under DPI's State Salary Manual, licensed substitutes earn at least 65 percent of the A-00 beginning teacher daily rate and unlicensed substitutes at least 50 percent, calculated on a 22-day month. Full-time substitutes working at least 30 hours a week for an expected six consecutive months earn the same benefits as other employees.",
      },
      {
        q: "What background checks do North Carolina substitutes need?",
        a: "Whatever the local board's G.S. 115C-332 policy requires for school personnel, a term the statute defines to include substitute teachers and the employees of independent contractors who perform school personnel duties with significant student access. Contractual personnel with direct student interaction must also be checked against sex offender registries annually under G.S. 115C-332.1.",
      },
      {
        q: "Do you already work with North Carolina schools?",
        a: "Yes. Charlotte-Mecklenburg Schools, one of the largest districts in the state, is a client. For special education, paraprofessional, and related-services staffing in the state, see our North Carolina education staffing page.",
      },
      {
        q: "What fill rate can a North Carolina district expect?",
        a: "Fill rates depend on your absence volume and region, so we report yours on a regular cadence rather than quoting one number. Our reference point is an existing client: at Odyssey Public Charter School in Wilmington, Delaware, our model sustains a 95% day-to-day substitute fill rate, a 40%+ improvement over the previous provider.",
      },
      {
        q: "Will you also staff the county next to ours?",
        a: "No. We work with one client per region, so the substitute pool we build for your schools serves only your buildings. Every placement is temp-to-perm at no cost, with no conversion fee if you hire a sub permanently.",
      },
    ],
    related: [
      { label: "North Carolina Substitute, Special Ed & K-12 Staffing", slug: "north-carolina-education-staffing" },
      HUB,
      { label: "Substitute Teacher Staffing in Virginia", slug: "substitute-teacher-staffing-virginia" },
      { label: "Substitute Teacher Staffing in Georgia", slug: "substitute-teacher-staffing-georgia" },
      SPED_HUB,
      PARA_HUB,
      K12_HUB,
    ],
  },
];
