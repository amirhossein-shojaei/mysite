import { SectionTitle } from "../../components/Shell";
import { experience } from "../../data/experience";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";
export function Experience() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <SectionTitle
        eyebrow={t("EXPERIENCE")}
        title={t("A grounded professional journey.")}
      >
        {t(
          "A clear distinction between years of learning and professional software development.",
        )}
      </SectionTitle>
      <div className="timeline">
        {experience.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 100}>
            <div className="timeline-item">
              <div className="timeline-marker">0{i + 1}</div>
              <div>
                <p className="eyebrow">{item.period}</p>
                <h2>{t(item.title)}</h2>
                <h3>{item.company}</h3>
                <p className="muted">{t(item.location)}</p>
                <p>{t(item.description)}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <div className="journey-note">
        <span>{t("4 years")}</span>
        <p>
          {t("Learning, practicing, and becoming familiar with programming.")}
        </p>
      </div>
    </section>
  );
}
