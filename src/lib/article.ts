/**
 * Post-processes an article's HTML: injects stable `id`s onto every <h2> so the
 * Table of Contents can deep-link to them, and returns the heading list for the ToC.
 * Runs at build/render time (server) on the stored contentHtml.
 */
export type Heading = { id: string; text: string };

function slugify(text: string, fallbackIndex: number): string {
  const base = text
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60)
    .replace(/-+$/g, "");
  return base || `section-${fallbackIndex + 1}`;
}

export function processArticle(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Set<string>();

  const out = html.replace(/<h2(\b[^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text, headings.length);
    while (used.has(id)) id = `${id}-${headings.length + 1}`;
    used.add(id);
    headings.push({ id, text });
    // Preserve any existing attrs; add id + scroll offset for the sticky header.
    return `<h2 id="${id}" class="scroll-mt-28"${attrs}>${inner}</h2>`;
  });

  return { html: out, headings };
}
