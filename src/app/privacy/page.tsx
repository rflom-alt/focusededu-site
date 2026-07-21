import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.focusedu-staffing.com/privacy" },
  title: "Privacy Policy",
  description:
    "How FocusedEDU, a division of Focused Staffing Group, collects, uses, and protects the information you share through our website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 21, 2026"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-ink">
              FocusedEDU is a division of Focused Staffing Group, LLC
              (&ldquo;Focused Staffing Group,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;). This Privacy Policy explains how we collect, use,
              disclose, and safeguard information when you visit
              https://www.focusedu-staffing.com or use our staffing services. By using
              our website, you agree to the practices described here.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Information we collect
            </h2>
            {/* ⚠️ LEGAL REVIEW: confirm the exact categories collected match the live forms/ATS (apply.focused-staffing.com) and any background-check or credentialing vendors used. */}
            <ul className="mt-5 space-y-4 text-slate-ink">
              <li>
                <strong className="text-navy-950">Information you provide directly.</strong>{" "}
                When you submit our contact or discovery-call forms, apply to a role, or
                submit a résumé through our talent network, we may collect your name,
                email address, phone number, employer or organization, job title,
                résumé/CV, work history, credentials and certifications, and any other
                information you choose to share.
              </li>
              <li>
                <strong className="text-navy-950">Information collected automatically.</strong>{" "}
                When you browse our site we collect standard technical data — IP address,
                browser type, device information, pages viewed, referring URLs, and
                interactions — through cookies and analytics (see our Cookie Policy).
              </li>
              <li>
                <strong className="text-navy-950">Information from third parties.</strong>{" "}
                We may receive information from job boards, our applicant tracking system,
                professional networks, and references you authorize us to contact.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              How we use your information
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              To match candidates with employers; to provide, operate, and improve our
              staffing services; to communicate with you about opportunities,
              engagements, and your inquiries; to schedule discovery calls; to verify
              credentials and eligibility; to comply with legal, contractual, and
              regulatory obligations; and to protect the security and integrity of our
              services.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              How we share your information
            </h2>
            {/* ⚠️ LEGAL REVIEW: confirm "we do not sell" is accurate under CCPA/CPRA definitions incl. cross-context behavioral advertising via analytics; confirm the full list of sub-processors. */}
            <ul className="mt-5 space-y-4 text-slate-ink">
              <li>
                <strong className="text-navy-950">With employers/client organizations</strong>{" "}
                — for candidates, we share your résumé and relevant qualifications with
                prospective employers as part of the placement process, consistent with
                your instructions.
              </li>
              <li>
                <strong className="text-navy-950">With service providers</strong> —
                analytics, scheduling (HubSpot), applicant tracking, hosting, and
                communications vendors who process data on our behalf under
                confidentiality obligations.
              </li>
              <li>
                <strong className="text-navy-950">For legal reasons</strong> — where
                required by law, regulation, legal process, or to protect rights, safety,
                and property.
              </li>
              <li>
                <strong className="text-navy-950">We do not sell your personal information.</strong>
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Data retention</h2>
            {/* ⚠️ LEGAL REVIEW: set concrete retention periods (e.g., candidate records X years after last activity). */}
            <p className="mt-5 leading-relaxed text-slate-ink">
              We retain personal information for as long as needed to provide our
              services, maintain candidate and client relationships, and comply with
              legal obligations, after which we delete or de-identify it.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Your rights and choices
            </h2>
            {/* ⚠️ LEGAL REVIEW: tailor to applicable state laws (PA, plus CCPA/CPRA for CA candidates, and any others in the service area); add verification process + response timelines. */}
            <p className="mt-5 leading-relaxed text-slate-ink">
              Depending on where you live, you may have rights to access, correct,
              delete, or restrict the use of your personal information, and to opt out of
              certain processing. To exercise any right, contact us at
              hello@focused-staffing.com.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Data security</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              We use reasonable administrative, technical, and physical safeguards to
              protect your information. No method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Children&rsquo;s privacy
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Our website and services are directed to employers and working
              professionals and are not intended for children under 16. We do not
              knowingly collect information from children.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Third-party links
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Our site links to third-party sites (e.g., our job board and application
              portal at apply.focused-staffing.com, and our sibling division&rsquo;s
              website). Their privacy practices are governed by their own policies.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Changes to this policy
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              We may update this Privacy Policy from time to time. The &ldquo;Last
              updated&rdquo; date reflects the latest revision.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Contact us</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              Focused Staffing Group, LLC · 175 Strafford Avenue, Suite One #208, Wayne,
              PA 19087 · hello@focused-staffing.com · (484) 482-8223.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
