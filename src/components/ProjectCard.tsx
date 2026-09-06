import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { ArrowLink } from "./Shell";
import { useLanguage } from "../locales";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t, language } = useLanguage();
  const text = (value: string) => t(value);
  const arrow = language === "fa" ? "←" : "→";
  const base = import.meta.env.BASE_URL;
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="status">
          <i /> {text(project.status)}
        </span>
      </div>
      <div className={`project-art art-${project.id}`}>
        <span className="preview-label">{text("PROJECT PREVIEW")}</span>
        {project.image && (
          <img
            className="project-shot"
            src={`${base}${project.image}`}
            alt={project.title}
            loading="lazy"
          />
        )}
        {project.logo && (
          <img
            className="project-logo"
            src={`${base}${project.logo}`}
            alt={`${project.title} logo`}
            loading="lazy"
          />
        )}
      </div>
      <p className="eyebrow">{text(project.category)}</p>
      <h3>{project.title}</h3>
      <p className="muted">{text(project.description)}</p>
      <div className="tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{text(technology)}</span>
        ))}
      </div>
      <div className="card-links">
        <Link className="text-link" to={`/projects/${project.id}`}>
          {text("View Case Study")} <span>{arrow}</span>
        </Link>
        {project.projectUrl && (
          <ArrowLink href={project.projectUrl}>
            {text(
              project.id === "elixia"
                ? "Open Project"
                : project.id === "oiec"
                  ? "Client Website"
                  : "Open Application",
            )}
          </ArrowLink>
        )}
      </div>
      {project.organizationUrl && (
        <ArrowLink href={project.organizationUrl}>
          {text("Official Website")}
        </ArrowLink>
      )}
    </article>
  );
}
