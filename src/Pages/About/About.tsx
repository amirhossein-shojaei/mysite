import { SectionTitle } from "../../components/Shell";
import { about } from "../../data/about";
import { useLanguage } from "../../locales";

export function About() {
  const { language } = useLanguage();
  const txt = (value: { en: string; fa: string }) => value[language];

  return (
    <section className="page container">
      <SectionTitle eyebrow={txt(about.eyebrow)} title={txt(about.title)}>
        {txt(about.subtitle)}
      </SectionTitle>

      <div className="about-grid">
        <div className="about-lead">
          {about.intro.map((paragraph, index) => (
            <p key={index}>{txt(paragraph)}</p>
          ))}
        </div>
        <div className="about-facts">
          {about.facts.map((fact, index) => (
            <div key={index}>
              <strong>{txt(fact.title)}</strong>
              <p>{txt(fact.description)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>{txt(about.mindset.title)}</h2>
        {about.mindset.paragraphs.map((paragraph, index) => (
          <p key={index}>{txt(paragraph)}</p>
        ))}
      </div>

      <div className="about-section">
        <h2>{txt(about.focus.title)}</h2>
        <div className="focus-grid">
          {about.focus.items.map((item, index) => (
            <div className="focus-card" key={index}>
              <strong>{txt(item.title)}</strong>
              <p>{txt(item.description)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>{txt(about.pursuit.title)}</h2>
        <p className="about-tagline">{txt(about.pursuit.tagline)}</p>
        {about.pursuit.paragraphs.map((paragraph, index) => (
          <p key={index}>{txt(paragraph)}</p>
        ))}
      </div>

      <div className="about-section">
        <h2>{txt(about.timeline.title)}</h2>
        <div className="timeline">
          {about.timeline.items.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker">0{index + 1}</div>
              <div>
                <h3>{txt(item.title)}</h3>
                <p>{txt(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>{txt(about.skills.title)}</h2>
        <div className="about-skills">
          {about.skills.groups.map((group, index) => (
            <div className="about-skill-group" key={index}>
              <strong>{txt(group.category)}</strong>
              <p>{group.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
