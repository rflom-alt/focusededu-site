import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, getPost, categoryLabel } from "@/lib/posts";
import { edu } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";

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

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.focusedu-staffing.com${post.img}`,
    datePublished: post.iso,
    author: { "@type": "Organization", name: "FocusedEDU" },
    publisher: {
      "@type": "Organization",
      name: "FocusedEDU",
      logo: {
        "@type": "ImageObject",
        url: "https://www.focusedu-staffing.com/logos/focusededu-white.png",
      },
    },
    mainEntityOfPage: `https://www.focusedu-staffing.com/blog/${post.slug}`,
  };

  // Related: same category first, topped up with the most recent others.
  const sameCat = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = posts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
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
          <div
            className="article-prose mx-auto max-w-2xl"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

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
