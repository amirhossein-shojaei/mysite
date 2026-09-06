import { SectionTitle } from "../../components/Shell";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard";
import { useLanguage } from "../../locales";
export function Projects() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <SectionTitle
        eyebrow={t("PROJECT ARCHIVE")}
        title={t("Five projects, one growing practice.")}
      >
        {t(
          "Real project work, presented with context and without exaggeration.",
        )}
      </SectionTitle>
      <div className="project-grid all-projects">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
