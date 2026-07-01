import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import { posts, getPost, categoryLabel } from "@/lib/posts";
import { edu } from "@/lib/content";
import { author } from "@/lib/author";
import { processArticle, type Heading } from "@/lib/article";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";

const SITE = "https://www.focusedu-staffing.com";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.img],
    },
  };
}

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="mb-10 rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
        Key takeaways
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-3 text-navy-900">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
              <Check className="size-3 text-teal-700" strokeWidth={3} />
            </span>
            <span className="leading-relaxed">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <details className="group mb-10 rounded-2xl border border-cloud bg-mist p-6" open>
      <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-ink [&::-webkit-details-marker]:hidden">
        In this article
        <ChevronDown className="size-4 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <ol className="mt-4 space-y-2.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-sm leading-snug text-slate-ink transition hover:text-teal-700"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { html: processedHtml, headings } = processArticle(post.contentHtml);
  const socialSameAs = author.links.filter((l) => l.kind !== "email").map((l) => l.href);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE}${post.img}`,
    datePublished: post.iso,
    dateModified: post.iso,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: "Founder",
      url: author.profileUrl,
      sameAs: socialSameAs,
    },
    publisher: {
      "@type": "Organization",
      name: "FocusedEDU",
      logo: { "@type": "ImageObject", url: `${SITE}/logos/focusededu-white.png` },
    },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE}/resources` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const JUNK_HEADING =
    /^(introduction|intro|conclusion|summary|final thoughts?|in (conclusion|summary)|wrapping up|takeaways?|key takeaways?|faq|frequently|about |why |what is|resources)/i;
  const howToSteps = post.howto
    ? headings.filter((h) => !JUNK_HEADING.test(h.text.trim()))
    : [];
  const howToSchema =
    post.howto && howToSteps.length >= 3
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.title,
          description: post.excerpt,
          step: howToSteps.map((h, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: h.text,
            text: h.text,
            url: `${SITE}/blog/${post.slug}#${h.id}`,
          })),
        }
      : null;

  // Related: same category first, topped up with the most recent others.
  const sameCat = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = posts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const related = [...sameCat, ...others].slice(0, 3).map((p) => ({
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    img: p.img,
    href: `/blog/${p.slug}`,
  }));

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      {howToSchema && <JsonLd data={howToSchema} />}

      {/* Header */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-28 lg:pt-40 lg:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
            Back to Resources
          </Link>
          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
              {categoryLabel(post.category)}
            </span>
            <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-white/55">
              {post.date} · {post.readMinutes} min read
              {post.updated ? <> · Updated {post.updated}</> : null}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image — overlaps the header */}
      <div className="bg-white">
        <div className="container-x">
          <div className="relative z-10 mx-auto -mt-16 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl shadow-[0_40px_80px_-50px_rgba(6,10,31,0.5)] lg:-mt-24">
            <Image
              src={post.img}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <KeyTakeaways items={post.keyTakeaways} />
            )}
            {headings.length > 2 && <TableOfContents headings={headings} />}
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />
            {post.comparison && <ComparisonTable data={post.comparison} />}
            <ShareButtons url={`${SITE}/blog/${post.slug}`} title={post.title} />
            <AuthorBio />
          </div>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <FAQ eyebrow="FAQ" title="Frequently asked questions." items={post.faqs} />
      )}

      {/* Related articles */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Keep reading" title="Related articles." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.href} delay={(i % 3) * 0.06}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to build a stronger team?"
        body="See how a dedicated, exclusive talent pipeline changes the way your school hires."
        primary={edu.cta.primary}
        secondary={{ label: "Read more articles", href: "/resources" }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
