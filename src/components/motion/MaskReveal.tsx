/** Headline text must never depend on scrolling or hydration to appear. */
export function MaskReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <span className={className}>{text}</span>;
}
