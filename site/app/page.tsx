import Image from "next/image";

import { RevealSection } from "@/components/reveal-section";
import { ActionLink } from "@/components/action-link";
import { MetricCard } from "@/components/metric-card";
import { PrincipleCard } from "@/components/principle-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { portfolioBrief } from "@/lib/portfolio-brief";

export default function Home() {
  const brief = portfolioBrief;
  const showcaseProjects = brief.projects.slice(0, 4);

  return (
    <div className="swiss-page">
      <a href="#main-content" className="skip-link">
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
            <p className="tagline">
              From ambiguity to action—transforming messy ideas into reliable, working AI.
            </p>
            <p className="swiss-lede">{brief.intro}</p>
            <div className="action-row">
              <ActionLink href="#systems" variant="primary">
                View systems
              </ActionLink>
              <ActionLink href="#contact" variant="secondary">
                Start a conversation
              </ActionLink>
              <ActionLink href={brief.profiles.linkedin} external variant="secondary">
                LinkedIn
              </ActionLink>
            </div>
          </div>

          <div className="hero-image-stage">
            <Image
              src="/me.jpg"
              alt={`Portrait of ${brief.ownerName}`}
              fill
              sizes="(max-width: 1080px) min(92vw, 520px), min(480px, 42vw)"
              className="hero-image"
              priority
            />
          </div>
        </RevealSection>

        <RevealSection className="metric-strip" ariaLabel="Selected metrics" delayMs={40}>
          {brief.metrics.map((metric) => (
            <MetricCard key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </RevealSection>

        <RevealSection delayMs={80}>
          <SectionHeader kicker="How I work" title="Build trust by structuring ambiguity first." />
          <div className="work-grid">
            {brief.principles.map((principle) => (
              <PrincipleCard
                key={principle.title}
                title={principle.title}
                summary={principle.summary}
              />
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
          <SectionHeader
            kicker="Selected systems"
            title="Selected projects where architecture, reliability, and delivery had to hold up under real constraints."
          />
          <div className="campaign-grid">
            {showcaseProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                fallbackArchitectureUrl={brief.profiles.github}
              />
            ))}
          </div>
        </RevealSection>

        <RevealSection id="contact" className="contact-panel" delayMs={200}>
          <SectionHeader
            kicker="Looking for"
            title="Startup teams that need an AI systems builder who can carry work from messy brief to reliable production workflow."
            body={brief.need}
            bodyClassName="section-body-tight"
          />
          <div className="action-row">
            <ActionLink href={brief.profiles.linkedin} external variant="primary">
              Connect on LinkedIn
            </ActionLink>
            <ActionLink href={brief.profiles.github} external variant="secondary">
              View GitHub
            </ActionLink>
            <ActionLink href="#systems" variant="secondary">
              Revisit systems
            </ActionLink>
          </div>
        </RevealSection>

        <footer className="swiss-footer">
          <p>{brief.ownerName}</p>
          <p>{brief.location}</p>
          <a href="#main-content" className="back-to-top">
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
}
