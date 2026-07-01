/**
 * Blog posts migrated from the legacy WordPress site via its REST API.
 * Content + metadata live in posts-data.json (generated); each renders as a
 * native article page at /blog/[slug]. Brand names normalized to "FocusedEDU".
 */
import data from "./posts-data.json";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // display, e.g. "Jun 9, 2025"
  iso: string; // sortable
  category: string;
  readMinutes: number;
  excerpt: string;
  img: string;
  contentHtml: string;
  updated?: string; // display date, e.g. "Jun 26, 2026"
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
};

export const posts: BlogPost[] = data as BlogPost[];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Display label for a post's category (legacy "Blog"/"Article" → "Insights"). */
export function categoryLabel(category: string) {
  return category === "Blog" || category === "Article" ? "Insights" : category;
}
