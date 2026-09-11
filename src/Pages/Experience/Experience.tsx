import { SectionTitle } from "../../components/Shell";
import { experience } from "../../data/experience";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";
export function Experience() {
  const { t, language } = useLanguage();
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
          <ScrollReveal key={item.title[language]} delay={i * 100}>
            <div className="timeline-item">
              <div className="timeline-marker">0{i + 1}</div>
              <div>
                <p className="eyebrow">{item.period[language]}</p>
                <h2>{item.title[language]}</h2>
                <h3>{item.company[language]}</h3>
                <p className="muted">{item.location[language]}</p>
                <p>{item.description[language]}</p>
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
