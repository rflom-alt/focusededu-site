import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { edu } from "@/lib/content";

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
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
