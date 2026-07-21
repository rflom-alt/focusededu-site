import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.focusedu-staffing.com/terms" },
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the FocusedEDU website and services, operated by Focused Staffing Group, LLC.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: July 21, 2026"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-ink">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and
              use of https://www.focusedu-staffing.com (the &ldquo;Site&rdquo;), operated
              by Focused Staffing Group, LLC through its FocusedEDU division. By using the
              Site, you agree to these Terms. If you do not agree, please do not use the
              Site.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Use of the Site</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              You may use the Site for lawful purposes only. You agree not to misuse the
              Site, interfere with its operation, attempt unauthorized access, scrape or
              harvest data, or use it to transmit unlawful, infringing, or harmful
              content.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Our services</h2>
            {/* ⚠️ LEGAL REVIEW: confirm relationship disclaimers align with your client/candidate service agreements and applicable staffing-agency regulations. */}
            <p className="mt-5 leading-relaxed text-slate-ink">
              FocusedEDU provides staffing and recruiting services connecting qualified
              professionals with employers. Information on the Site is provided for
              general informational purposes and does not constitute an offer of
              employment, a guarantee of placement, or a binding commitment. Specific
              engagements are governed by separate written agreements.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Submissions</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              When you submit a résumé, application, inquiry, or other content, you
              represent that the information is accurate and that you have the right to
              share it. You grant us a limited license to use your submission to provide
              our services (e.g., presenting candidate qualifications to prospective
              employers), consistent with our Privacy Policy.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Intellectual property
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              The Site and its content — text, graphics, logos, photography, and design —
              are owned by or licensed to Focused Staffing Group, LLC and are protected by
              intellectual-property laws. You may not reproduce, distribute, or create
              derivative works without our written permission.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Third-party links and services
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              The Site links to third-party websites and tools (including our application
              portal and scheduling widgets). We are not responsible for the content,
              policies, or practices of third parties.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Disclaimers</h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              without warranties of any kind, express or implied, including
              merchantability, fitness for a particular purpose, and non-infringement. We
              do not warrant that the Site will be uninterrupted, error-free, or secure.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Limitation of liability
            </h2>
            {/* ⚠️ LEGAL REVIEW: confirm limitation-of-liability and any liability cap with counsel. */}
            <p className="mt-5 leading-relaxed text-slate-ink">
              To the fullest extent permitted by law, Focused Staffing Group, LLC and its
              divisions will not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of the Site.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Indemnification
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              You agree to indemnify and hold harmless Focused Staffing Group, LLC from
              claims arising out of your misuse of the Site or violation of these Terms.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Governing law</h2>
            {/* ⚠️ LEGAL REVIEW: confirm governing-law/venue (PA) and decide whether to include an arbitration / class-action-waiver clause. */}
            <p className="mt-5 leading-relaxed text-slate-ink">
              These Terms are governed by the laws of the Commonwealth of Pennsylvania,
              without regard to conflict-of-laws principles. Any disputes will be subject
              to the exclusive jurisdiction of the state and federal courts located in
              Pennsylvania.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">
              Changes to these Terms
            </h2>
            <p className="mt-5 leading-relaxed text-slate-ink">
              We may revise these Terms at any time. Continued use of the Site after
              changes constitutes acceptance of the revised Terms.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-navy-950">Contact</h2>
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
