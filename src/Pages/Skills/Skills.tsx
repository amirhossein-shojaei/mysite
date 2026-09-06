import { SectionTitle } from "../../components/Shell";
import { skillGroups } from "../../data/skills";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";
export function Skills() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <SectionTitle
        eyebrow={t("TOOLKIT")}
        title={t("Tools I use to make things work.")}
      >
        {t(
          "Core strengths are highlighted. The rest reflects a practical, continuously growing toolkit.",
        )}
      </SectionTitle>
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <ScrollReveal key={g.title} delay={i * 55}>
            <article className="skill-group">
              <div className="skill-heading">
                <h2>{t(g.title)}</h2>
                <span>{t(g.note)}</span>
              </div>
              <div className="skill-list">
                {g.skills.map((s) => (
                  <span
                    className={g.core.includes(s) ? "skill core" : "skill"}
                    key={s}
                  >
                    {t(s)}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
