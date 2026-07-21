"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { BlogCard, type BlogCardData } from "@/components/blog/BlogCard";

type ExplorerPost = BlogCardData & { category: string };

export function BlogExplorer({
  posts,
  categories,
}: {
  posts: ExplorerPost[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const tabs = ["All", ...categories];

  return (
    <section className="bg-white pb-24 pt-10 lg:pb-32">
      <div className="container-x">
        <h2 className="sr-only">Latest articles</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {tabs.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active === c
                  ? "border-teal-500 bg-teal-500 text-navy-950"
                  : "border-cloud text-slate-ink hover:border-navy-900/25 hover:text-navy-950"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.href} delay={(i % 3) * 0.05}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
