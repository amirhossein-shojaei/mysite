import { SectionTitle, Button } from "../../components/Shell";
import { services, servicesContent } from "../../data/services";
import { useLanguage } from "../../locales";

export function Services() {
  const { language } = useLanguage();
  const txt = (value: { en: string; fa: string }) => value[language];

  return (
    <section className="page container">
      <SectionTitle
        eyebrow={txt(servicesContent.eyebrow)}
        title={txt(servicesContent.title)}
      >
        {txt(servicesContent.subtitle)}
      </SectionTitle>
      <div className="services-grid">
        {services.map((service, i) => (
          <article className="service" key={service.title.en}>
            <span className="service-no">{i + 1}</span>
            <h2>{txt(service.title)}</h2>
            <p className="muted">{txt(service.description)}</p>
            {service.body.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {txt(paragraph)
                  .split("\n")
                  .map((line, lineIndex, lines) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < lines.length - 1 && <br />}
                    </span>
                  ))}
              </p>
            ))}
          </article>
        ))}
      </div>
      <div className="service-end">
        <div>
          <p>
            <strong>{txt(servicesContent.ctaTitle)}</strong>
          </p>
          <p>{txt(servicesContent.ctaDescription)}</p>
          <p>{txt(servicesContent.ctaBody)}</p>
        </div>
        <Button to="/contact">{txt(servicesContent.cta)} </Button>
      </div>
    </section>
  );
}
