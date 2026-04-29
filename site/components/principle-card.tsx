type PrincipleCardProps = {
  title: string;
  summary: string;
};

export function PrincipleCard({ title, summary }: PrincipleCardProps) {
  return (
    <article className="principle-card">
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  );
}
