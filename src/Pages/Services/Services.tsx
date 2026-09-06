import { SectionTitle, Button } from "../../components/Shell";
import { services } from "../../data/services";
import { useLanguage } from "../../locales";
export function Services() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <SectionTitle
        eyebrow={t("WHAT I DO")}
        title={t("From first interface to production.")}
      >
        {t(
          "Flexible full-stack support for products that need both thoughtful development and practical delivery.",
        )}
      </SectionTitle>
      <div className="services-grid">
        {services.map((s, i) => (
          <article className="service" key={s}>
            <span className="service-no">0{i + 1}</span>
            <h2>{t(s)}</h2>
            <p className="muted">
              {t(
                "A practical, capability-led service shaped around the needs of your project.",
              )}
            </p>
          </article>
        ))}
      </div>
      <div className="service-end">
        <p>{t("Need a different combination of skills?")}</p>
        <Button to="/contact">{t("Tell me about it ↗")}</Button>
      </div>
    </section>
  );
}
