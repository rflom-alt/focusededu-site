import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { edu } from "@/lib/content";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["EmploymentAgency", "Organization"],
  name: edu.brand.name,
  legalName: edu.brand.parent,
  url: "https://www.focusedu-staffing.com",
  logo: "https://www.focusedu-staffing.com" + edu.brand.logoWhite,
  description:
    "Premium K-12 education staffing — a dedicated, exclusive talent pipeline founded by a former teacher. Substitute and certified teachers, special education, paraprofessionals, and support staff.",
  telephone: edu.contact.phoneHref.replace("tel:", ""),
  email: edu.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "175 Strafford Avenue, Suite One #208",
    addressLocality: "Wayne",
    addressRegion: "PA",
    postalCode: "19087",
    addressCountry: "US",
  },
  areaServed: "United States",
  foundingDate: "2014",
  knowsAbout: [
    "K-12 education staffing",
    "Special education staffing",
    "Substitute teacher staffing",
    "Paraprofessional staffing",
    "Related services staffing",
    "School-based behavioral health staffing",
  ],
  sameAs: [edu.social.facebook, edu.social.instagram, edu.social.linkedin],
  founder: { "@type": "Person", name: "Robert Flom", jobTitle: "Founder" },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: edu.brand.name,
  url: "https://www.focusedu-staffing.com",
  publisher: { "@type": "Organization", name: edu.brand.name },
};

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.focusedu-staffing.com"),
  title: {
    default: "FocusedEDU — Premium K-12 Education Staffing",
    template: "%s · FocusedEDU",
  },
  description:
    "A dedicated, exclusive talent pipeline for K-12 schools. Built by a former teacher. Automated credentialing cuts hiring time in half, temp-to-perm at no cost. Our focus begins with you.",
  openGraph: {
    title: "FocusedEDU — Premium K-12 Education Staffing",
    description:
      "A dedicated, exclusive talent pipeline for K-12 schools. Built by educators, not recruiters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-brand="edu"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={ORG_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
        <SmoothScroll>
          <Header
            logo={edu.brand.logoWhite}
            brandName={edu.brand.name}
            nav={edu.nav}
            cta={edu.cta.primary}
            ctaCandidate={{ label: "View open roles", href: edu.jobBoard }}
          />
          <main className="flex-1">{children}</main>
          <Footer
            brand={edu.brand}
            contact={edu.contact}
            nav={edu.nav}
            social={edu.social}
            jobBoard={edu.jobBoard}
            submitResume={edu.submitResume}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
