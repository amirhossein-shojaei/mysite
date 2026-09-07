import { useNavigate } from "react-router-dom";
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
  const base = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const goToDetail = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target as HTMLElement).closest("a, button")) {
      navigate(`/projects/${project.id}`);
    }
  };
  return (
    <article className="project-card" onClick={goToDetail}>
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
        {project.projectUrl && (
          <ArrowLink className="card-action" href={project.projectUrl}>
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
        <ArrowLink className="card-action" href={project.organizationUrl}>
          {text("Official Website")}
        </ArrowLink>
      )}
    </article>
  );
}
