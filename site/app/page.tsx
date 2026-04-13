import { ProofCard } from "@/components/proof-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioBrief } from "@/lib/portfolio-brief";

export default function Home() {
  const brief = portfolioBrief;

  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink-strong)]">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-[var(--ink-strong)] px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(243,243,241,0.97),rgba(240,240,238,0.99))]" />

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:px-12"
      >
        <section className="panel px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              <span>{brief.ownerName}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent-deep)]" />
              <span>{brief.location}</span>
            </div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              {brief.availability}
            </p>
          </div>
        </section>

        <section className="panel p-6 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow text-[var(--accent-deep)]">{brief.role}</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.93] tracking-[-0.03em] text-balance sm:text-6xl xl:text-7xl">
                {brief.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.06rem] leading-8 text-[var(--ink-body)]">
                {brief.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#proof" className="action-primary">
                  {brief.secondaryCta}
                </a>
                <a href="#contact" className="action-secondary">
                  {brief.primaryCta}
                </a>
                <a
                  href={brief.profiles.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="action-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href={brief.profiles.github}
                  target="_blank"
                  rel="noreferrer"
                  className="action-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>

            <aside className="border border-[var(--border-soft)] bg-white/88 p-5">
              <p className="eyebrow text-[var(--accent-deep)]">Operating claim</p>
              <p className="mt-3 text-3xl font-bold leading-[1.04] tracking-[-0.02em] text-[var(--ink-strong)]">
                {brief.claim}
              </p>
              <div className="mt-6 grid gap-3">
                <div className="border border-[var(--border-soft)] bg-[#f7f7f5] px-3 py-3">
                  <p className="eyebrow text-[var(--accent-deep)]">Archetype</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--ink-strong)]">
                    {brief.archetype}
                  </p>
                </div>
                <div className="border border-[var(--border-soft)] bg-[#f7f7f5] px-3 py-3">
                  <p className="eyebrow text-[var(--accent-deep)]">Signal</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-body)]">{brief.signal}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {brief.metrics.map((metric) => (
            <article key={metric.label} className="panel p-5">
              <p className="text-4xl font-bold leading-none tracking-[-0.03em] text-[var(--accent-deep)] sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-body)]">{metric.label}</p>
            </article>
          ))}
        </section>

        <section>
          <p className="eyebrow mb-4 text-[var(--ink-muted)]">01 Brief</p>
          <SectionHeading
            eyebrow="Audience"
            title="Built for fast-moving startup operators who need leverage now"
            body={brief.audience}
          />
          <div className="mt-6 panel p-6">
            <p className="text-[1.02rem] leading-8 text-[var(--ink-body)]">
              {brief.oneLiner}
            </p>
            <p className="eyebrow text-[var(--accent-deep)]">Core need</p>
            <p className="mt-3 text-[1.02rem] leading-8 text-[var(--ink-body)]">{brief.need}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
              Product signal: {brief.signal}
            </p>
          </div>
        </section>

        <section id="proof" className="space-y-6">
          <p className="eyebrow mb-1 text-[var(--ink-muted)]">02 Proof</p>
          <SectionHeading
            eyebrow="Immediate proof"
            title="Claim first, then evidence"
            body="The page leads with one operating claim and validates it with three concrete proof blocks from execution contexts."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {brief.proofBlocks.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-start">
          <article className="panel p-6">
            <p className="eyebrow text-[var(--accent-deep)]">How I work</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {brief.principles.map((principle) => (
                <div key={principle.title} className="border border-[var(--border-soft)] bg-white/70 p-4">
                  <h3 className="text-2xl font-bold leading-[1.04] tracking-[-0.02em] text-[var(--ink-strong)]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-body)]">{principle.summary}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="panel border-[var(--accent-deep)] bg-[var(--ink-strong)] p-6 text-white">
            <p className="eyebrow text-[#ff6a7a]">Leadership signal</p>
            <p className="mt-4 text-2xl font-bold leading-[1.1] tracking-[-0.02em]">
              “{brief.quote.quote}”
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#ff97a3]">
              {brief.quote.attribution}
            </p>
            <p className="mt-1 text-sm text-[#ffe6ea]">{brief.quote.role}</p>
          </aside>
        </section>

        <section className="space-y-6">
          <p className="eyebrow mb-1 text-[var(--ink-muted)]">03 Experience</p>
          <SectionHeading
            eyebrow="Work experience"
            title="Enterprise ambiguity translated into deployable systems"
            body={`${brief.workExperience.role} at ${brief.workExperience.company} (${brief.workExperience.period})`}
          />
          <article className="panel p-6">
            <p className="text-sm leading-6 text-[var(--ink-muted)]">{brief.workExperience.location}</p>
            <ul className="mt-4 space-y-3">
              {brief.workExperience.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white/60 px-4 py-3 text-[0.98rem] leading-7 text-[var(--ink-body)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="space-y-6">
          <p className="eyebrow mb-1 text-[var(--ink-muted)]">04 Systems</p>
          <SectionHeading
            eyebrow="AI systems engineering"
            title="Selected systems where architecture, reliability, and delivery all had to hold"
            body="Each project pairs business context with system constraints, then demonstrates implementation-level outcomes and proof artifacts."
          />
          <div className="space-y-6">
            {brief.projects.map((project, index) => (
              <article key={project.title} className="panel panel-proof p-5 sm:p-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="border border-[var(--border-soft)] bg-[linear-gradient(135deg,#ffffff,#eef2f6)] p-6">
                      <p className="eyebrow text-[var(--accent-deep)]">{project.label}</p>
                      <h3 className="mt-3 text-3xl font-bold leading-[1.03] tracking-[-0.02em] text-[var(--ink-strong)] sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--ink-body)]">{project.summary}</p>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">{project.stack}</p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border border-[var(--border-soft)] bg-white/75 p-4">
                        <p className="eyebrow text-[var(--accent-deep)]">Outcome</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--ink-body)]">{project.outcome}</p>
                      </div>
                      <div className="border border-[var(--border-soft)] bg-white/75 p-4">
                        <p className="eyebrow text-[var(--accent-deep)]">Proof</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--ink-body)]">{project.proof}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="border border-[var(--border-soft)] bg-white/65 px-3 py-2 text-sm leading-6 text-[var(--ink-body)]"
                        >
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel p-6 sm:p-8">
          <p className="eyebrow mb-1 text-[var(--ink-muted)]">05 Contact</p>
          <p className="eyebrow text-[var(--accent-deep)]">Next step</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-balance sm:text-5xl">
            If you have a messy, high-value workflow, I can turn it into a
            reliable AI operating system.
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] leading-8 text-[var(--ink-body)]">
            Share one repetitive process your team currently handles manually.
            I will map inputs, output format, edge cases, and rollout approach
            into a practical system blueprint.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={brief.profiles.linkedin}
              target="_blank"
              rel="noreferrer"
              className="action-primary"
            >
              Connect on LinkedIn
            </a>
            <a
              href={brief.profiles.github}
              target="_blank"
              rel="noreferrer"
              className="action-secondary"
            >
              View GitHub profile
            </a>
            <a href="#proof" className="action-secondary">
              Revisit proof blocks
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
