type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <header className="max-w-4xl border-l-4 border-[var(--accent-deep)] pl-4 sm:pl-5">
      <p className="eyebrow text-[var(--accent-deep)]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-[var(--ink-strong)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-[1.02rem] leading-8 text-[var(--ink-body)]">{body}</p>
    </header>
  );
}
