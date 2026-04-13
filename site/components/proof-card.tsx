import { EvidenceBadge } from "@/components/evidence-badge";
import type { ProofBlock } from "@/lib/portfolio-brief";

type ProofCardProps = {
  item: ProofBlock;
};

export function ProofCard({ item }: ProofCardProps) {
  return (
    <article className="panel panel-proof p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="eyebrow text-[var(--accent-deep)]">{item.title}</p>
        <EvidenceBadge tier={item.evidenceTier} />
      </div>
      <p className="mt-4 text-[1.02rem] leading-7 text-[var(--ink-body)]">{item.outcome}</p>
      <div className="mt-5 border border-[var(--border-soft)] bg-white/72 p-4">
        <p className="eyebrow text-[var(--accent-deep)]">What it proves</p>
        <p className="mt-2 text-sm leading-6 text-[var(--ink-body)]">{item.proves}</p>
      </div>
    </article>
  );
}
