type SectionHeaderProps = {
  kicker: string;
  title: string;
  body?: string;
  bodyClassName?: string;
};

export function SectionHeader({ kicker, title, body, bodyClassName }: SectionHeaderProps) {
  return (
    <>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {body ? <p className={`section-body ${bodyClassName ?? ""}`.trim()}>{body}</p> : null}
    </>
  );
}
