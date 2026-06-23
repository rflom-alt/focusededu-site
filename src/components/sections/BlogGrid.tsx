import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BlogCard, type BlogCardData } from "@/components/blog/BlogCard";
import type { CtaItem } from "@/lib/content";

export type Post = BlogCardData;

export function BlogGrid({
  posts,
  eyebrow = "From the blog",
  title,
  intro,
  bg,
  cta,
}: {
  posts: Post[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  bg?: string;
  cta?: CtaItem;
}) {
  return (
    <section className={cn(bg ?? "bg-mist", "py-24 lg:py-32")}>
      <div className="container-x">
        {title && <SectionHeading center eyebrow={eyebrow} title={title} intro={intro} />}
        <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", title && "mt-14")}>
          {posts.map((p, i) => (
            <Reveal key={p.href} delay={(i % 3) * 0.06}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
        {cta && (
          <div className="mt-12 text-center">
            <Button href={cta.href} variant="outline" size="lg">
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
