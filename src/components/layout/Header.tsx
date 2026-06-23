"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import type { NavItem, CtaItem } from "@/lib/content";

export function Header({
  logo,
  brandName,
  nav,
  cta,
  ctaCandidate,
}: {
  logo: string;
  brandName: string;
  nav: NavItem[];
  cta: CtaItem;
  ctaCandidate: CtaItem;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Show the candidate-facing CTA on job-seeker pages; employer CTA everywhere else.
  const isCandidateContext =
    pathname?.startsWith("/candidates") || pathname?.startsWith("/resources");
  const activeCta = isCandidateContext ? ctaCandidate : cta;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-quart",
        scrolled
          ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-18 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="relative flex items-center" aria-label={brandName}>
          <Image
            src={logo}
            alt={brandName}
            width={6870}
            height={2243}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={activeCta.href} variant="primary" size="md">
            {activeCta.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      </header>

      {/* Mobile overlay — rendered as a SIBLING of <header>, not a child: when
          the header scrolls it gains backdrop-blur, and a backdrop-filter makes
          that element the containing block for any fixed descendant — which
          trapped this full-screen layer in the header's box and collapsed it. */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy-950 px-6 pb-10 pt-24 transition-opacity duration-300 lg:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        )}
      >
        <nav className="flex flex-col divide-y divide-white/10">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-5 font-display text-2xl font-medium text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <Button href={activeCta.href} variant="primary" size="lg" className="w-full">
            {activeCta.label}
          </Button>
          <Button
            href={isCandidateContext ? cta.href : ctaCandidate.href}
            variant="ghost"
            size="lg"
            className="w-full border border-white/25 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            {isCandidateContext ? cta.label : ctaCandidate.label}
          </Button>
        </div>
      </div>
    </>
  );
}
