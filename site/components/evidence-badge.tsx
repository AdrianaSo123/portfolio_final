type EvidenceBadgeProps = {
  tier:
    | "Real-world ambiguity handling"
    | "AI system structuring"
    | "Scalability and systems thinking";
};

const toneByTier: Record<EvidenceBadgeProps["tier"], string> = {
  "Real-world ambiguity handling":
    "border-[rgba(129,94,38,0.28)] bg-[rgba(246,231,204,0.72)] text-[var(--ink-strong)]",
  "AI system structuring":
    "border-[rgba(50,100,98,0.28)] bg-[rgba(204,234,232,0.75)] text-[var(--ink-strong)]",
  "Scalability and systems thinking":
    "border-[rgba(75,92,126,0.3)] bg-[rgba(215,223,238,0.78)] text-[var(--ink-strong)]",
};

export function EvidenceBadge({ tier }: EvidenceBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${toneByTier[tier]}`}
    >
      {tier}
    </span>
  );
}
