import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type BlogCardData = {
  title: string;
  date: string;
  excerpt: string;
  img: string;
  href: string;
};

const cardClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-cloud bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.22)]";

export function BlogCard({ post }: { post: BlogCardData }) {
  const internal = post.href.startsWith("/");
  const inner = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-ink">
          {post.date}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-navy-950">{post.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-ink">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
          Read article
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </>
  );

  return internal ? (
    <Link href={post.href} className={cardClass}>
      {inner}
    </Link>
  ) : (
    <a href={post.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  );
}
