import Image from "next/image";

import type { ResumeProject } from "@/lib/portfolio-brief";
import { ActionLink } from "@/components/action-link";

type ProjectCardProps = {
  project: ResumeProject;
  index: number;
  fallbackArchitectureUrl: string;
};

function ProjectVisual({ project }: { project: ResumeProject }) {
  const visual = project.visual;

  if (!visual) {
    return (
      <div className="project-visual project-visual--placeholder">
        <p className="eyebrow project-visual-label">{project.label}</p>
      </div>
    );
  }

  if (visual.type === "label") {
    return (
      <div className="project-visual project-visual--placeholder">
        <p className="eyebrow project-visual-label">{project.label}</p>
      </div>
    );
  }

  return (
    <div className="project-visual">
      <div className="project-visual-stage">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={visual.sizes}
          className="project-visual-image"
          priority={visual.priority}
        />
      </div>
    </div>
  );
}

export function ProjectCard({ project, index, fallbackArchitectureUrl }: ProjectCardProps) {
  const cardClassName = `campaign-card ${index % 2 === 1 ? "campaign-card-alt" : ""}`.trim();
  const architectureUrl = project.architectureUrl ?? fallbackArchitectureUrl;

  return (
    <article className={cardClassName}>
      <ProjectVisual project={project} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-stack">{project.stack}</p>
        <div className="project-action-row">
          <ActionLink href={project.liveUrl} external variant="primary">
            View Live System
          </ActionLink>
          <ActionLink href={architectureUrl} external variant="secondary">
            {project.architectureUrl ? "View Architecture" : "View GitHub"}
          </ActionLink>
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
  );
}
