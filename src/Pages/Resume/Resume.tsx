import { Button, SectionTitle } from "../../components/Shell";
import { resume } from "../../data/resume";
import { useLanguage } from "../../locales";

export function Resume() {
  const { language } = useLanguage();
  const txt = (value: { en: string; fa: string }) => value[language];
  const base = import.meta.env.BASE_URL;

  return (
    <section className="page container resume">
      <div className="resume-head">
        <SectionTitle
          eyebrow={txt(resume.hero.eyebrow)}
          title={txt(resume.hero.title)}
        >
          {txt(resume.hero.subtitle)}
        </SectionTitle>
        <a
          className="btn"
          href={`${base}pdf-resume/${language === "fa" ? "resume-fa.pdf" : "resume-en.pdf"}`}
          download
        >
          {language === "fa" ? "دانلود رزومه ↓" : "Download Resume ↓"}
        </a>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.profile.title)}</p>
        <h2>{txt(resume.profile.name)}</h2>
        <div className="resume-profile">
          {resume.profile.paragraphs.map((paragraph, index) => (
            <p key={index}>{txt(paragraph)}</p>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.experience.title)}</p>
        {resume.experience.items.map((item, index) => (
          <article className="resume-item" key={index}>
            <strong>{txt(item.title)}</strong>
            <span>
              {txt(item.company)} · {txt(item.role)} · {txt(item.date)}
            </span>
            {item.description.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{txt(paragraph)}</p>
            ))}
            {item.responsibilities && (
              <div className="tags resume-tags">
                {item.responsibilities.map((responsibility, responsibilityIndex) => (
                  <span key={responsibilityIndex}>{txt(responsibility)}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.projects.title)}</p>
        <div className="skills-grid">
          {resume.projects.items.map((project) => (
            <article className="skill-group" key={project.number}>
              <div className="skill-heading">
                <h2>
                  {project.number} — {txt(project.title)}
                </h2>
              </div>
              <div className="resume-project-content">
                <span>{txt(project.subtitle)}</span>
                {project.description.map((paragraph, index) => (
                  <p key={index}>{txt(paragraph)}</p>
                ))}
                <div className="tags resume-tags">
                  {project.focus.map((focus, index) => (
                    <span key={index}>{txt(focus)}</span>
                  ))}
                </div>
                {project.company && <span>{txt(project.company)}</span>}
                <div className="card-links">
                  {project.app && (
                    <a className="text-link" href={project.app} target="_blank" rel="noreferrer">
                      {language === "fa" ? "اپلیکیشن" : "App"} ↗
                    </a>
                  )}
                  {project.website && (
                    <a className="text-link" href={project.website} target="_blank" rel="noreferrer">
                      {language === "fa" ? "وب‌سایت" : "Website"} ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.highlights.title)}</p>
        <div className="about-facts">
          {resume.highlights.items.map((item) => (
            <div key={item.number}>
              <strong>
                <span className="experience-number">{item.number}</span>{" "}
                {txt(item.title)}
              </strong>
              <p>{txt(item.description)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.skills.title)}</p>
        <div className="skills-grid">
          {resume.skills.groups.map((group) => (
            <article className="skill-group" key={group.title.en}>
              <div className="skill-heading">
                <h2>{txt(group.title)}</h2>
              </div>
              <div className="skill-list">
                {group.skills.split(" · ").map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.additional.title)}</p>
        <div className="skills-grid">
          <article className="skill-group">
            <div className="skill-heading">
              <h2>{txt(resume.additional.note)}</h2>
            </div>
            <div className="skill-list">
              {resume.additional.skills.split(" · ").map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.tools.title)}</p>
        <div className="skills-grid">
          <article className="skill-group">
            <div className="skill-heading">
              <h2>{txt(resume.tools.note)}</h2>
            </div>
            <div className="skill-list">
              {resume.tools.skills.split(" · ").map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.expertise.title)}</p>
        <div className="focus-grid">
          {resume.expertise.items.map((item) => (
            <article className="focus-card" key={item.title.en}>
              <strong>{txt(item.title)}</strong>
              <p>{txt(item.description)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.approach.title)}</p>
        <h2>{txt(resume.approach.heading)}</h2>
        {resume.approach.paragraphs.map((paragraph, index) => (
          <p className="resume-profile" key={index}>
            {txt(paragraph)}
          </p>
        ))}
      </div>

      <div className="resume-section">
        <p className="eyebrow">{txt(resume.goal.title)}</p>
        <h2>{txt(resume.goal.heading)}</h2>
        <p className="resume-profile">{txt(resume.goal.description)}</p>
      </div>

      <div className="service-end">
        <p>{txt(resume.cta.heading)}</p>
        <Button to="/contact">{txt(resume.cta.button)}</Button>
      </div>
    </section>
  );
}
