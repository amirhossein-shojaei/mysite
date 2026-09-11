import { SectionTitle } from "../../components/Shell";
import { experience } from "../../data/experience";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";

export function Experience() {
  const { language } = useLanguage();
  const txt = (value: { en: string; fa: string }) => value[language];

  return (
    <section className="page container">
      <SectionTitle eyebrow={txt(experience.eyebrow)} title={txt(experience.title)} />

      <div className="experience-narrative">
        {experience.intro.map((paragraph, index) => (
          <p key={index} className="experience-lead">
            {txt(paragraph)}
          </p>
        ))}
      </div>

      <div className="experience-items">
        {experience.items.map((item, index) => (
          <ScrollReveal key={txt(item.title)} delay={index * 100}>
            <article className="experience-item">
              <div className="experience-item-header">
                <span className="experience-number">{item.number}</span>
                <div>
                  <h2>{txt(item.title)}</h2>
                  {item.subtitle && (
                    <p className="experience-subtitle">{txt(item.subtitle)}</p>
                  )}
                  {item.role && (
                    <p className="experience-role">{txt(item.role)}</p>
                  )}
                </div>
              </div>
              <div className="experience-body">
                {item.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{txt(paragraph)}</p>
                ))}
                {item.meta && (
                  <div className="experience-meta">
                    {item.meta.type && (
                      <span>
                        <b>{language === "fa" ? "نوع پروژه:" : "Project type:"}</b>{" "}
                        {txt(item.meta.type)}
                      </span>
                    )}
                    {item.meta.domain && (
                      <span>
                        <b>{language === "fa" ? "حوزه:" : "Domain:"}</b>{" "}
                        {txt(item.meta.domain)}
                      </span>
                    )}
                    {item.meta.client && (
                      <span>
                        <b>{language === "fa" ? "کارفرما:" : "Client:"}</b>{" "}
                        {txt(item.meta.client)}
                      </span>
                    )}
                    {item.meta.links && (
                      <div className="experience-links">
                        {item.meta.links.map((link, lIndex) => (
                          <a
                            key={lIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {txt(link.label)} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="experience-closing">
          <h2>{txt(experience.closing.title)}</h2>
          {experience.closing.paragraphs.map((paragraph, index) => (
            <p key={index}>{txt(paragraph)}</p>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
