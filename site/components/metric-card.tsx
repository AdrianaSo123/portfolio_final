type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="metric-card">
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
    </article>
  );
}
