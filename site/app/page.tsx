import { RevealSection } from "@/components/reveal-section";
import { portfolioBrief } from "@/lib/portfolio-brief";

export default function Home() {
  const brief = portfolioBrief;
  const showcaseProjects = brief.projects.slice(0, 4);

  return (
    <div className="swiss-page">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>

      <main id="main-content" tabIndex={-1} className="swiss-shell">
        <header className="swiss-topline">
          <p>{brief.role}</p>
          <p>{brief.location}</p>
          <p>{brief.availability}</p>
        </header>

        <RevealSection className="swiss-hero" delayMs={0}>
          <div>
            <p className="eyebrow">AI Systems Portfolio</p>
            <h1 className="swiss-claim">{brief.headline}</h1>
            <p className="swiss-lede">{brief.intro}</p>
            <div className="action-row">
              <a href="#systems" className="action-primary">
                View systems
              </a>
              <a href="#contact" className="action-secondary">
                Start a conversation
              </a>
              <a
                href={brief.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="action-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-stage">
            <p className="eyebrow">Operating claim</p>
            <h2>{brief.claim}</h2>
            <div className="hero-stage-grid">
              <div>
                <p className="eyebrow">Archetype</p>
                <p>{brief.archetype}</p>
              </div>
              <div>
                <p className="eyebrow">Signal</p>
                <p>{brief.signal}</p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="metric-strip" ariaLabel="Selected metrics" delayMs={40}>
          {brief.metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </RevealSection>

        <RevealSection delayMs={80}>
          <p className="section-kicker">How I work</p>
          <h2 className="section-title">Build trust by structuring ambiguity first.</h2>
          <div className="work-grid">
            {brief.principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.summary}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="quote-strip" ariaLabel="Faculty note" delayMs={120}>
          <figure>
            <figcaption className="eyebrow">Faculty note</figcaption>
            <blockquote className="quote-strip-text">
              <p>&ldquo;{brief.quote.quote}&rdquo;</p>
            </blockquote>
            <p className="quote-strip-byline">
              {brief.quote.attribution} • {brief.quote.role}
            </p>
          </figure>
        </RevealSection>

        <RevealSection id="systems" delayMs={160}>
          <p className="section-kicker">Selected systems</p>
          <h2 className="section-title">
            Selected projects where architecture, reliability, and delivery had to hold up under real constraints.
          </h2>
          <div className="campaign-grid">
            {showcaseProjects.map((project) => (
              <article key={project.title} className="campaign-card">
                <div className="project-visual" aria-hidden="true">
                  <p className="eyebrow">{project.label}</p>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-stack">{project.stack}</p>
                  <div className="project-action-row">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-primary"
                    >
                      View Live System
                    </a>
                    <a
                      href={project.architectureUrl ?? brief.profiles.github}
                      target="_blank"
                      rel="noreferrer"
                      className="action-secondary"
                    >
                      {project.architectureUrl ? "View Architecture" : "View GitHub"}
                    </a>
                  </div>
                  <div className="project-proof-grid">
                    <div>
                      <p className="eyebrow">Outcome</p>
                      <p>{project.outcome}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Proof system</p>
                      <p>{project.proof}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="contact" className="contact-panel" delayMs={200}>
          <p className="section-kicker">Looking for</p>
          <h2 className="section-title">
            Startup teams that need an AI systems builder who can carry work from messy brief to reliable production workflow.
          </h2>
          <p className="section-body section-body-tight">{brief.need}</p>
          <div className="action-row">
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
              View GitHub
            </a>
            <a href="#systems" className="action-secondary">
              Revisit systems
            </a>
          </div>
        </RevealSection>

        <footer className="swiss-footer">
          <p>{brief.ownerName}</p>
          <p>{brief.location}</p>
          <p>{brief.availability}</p>
        </footer>
      </main>
    </div>
  );
}
