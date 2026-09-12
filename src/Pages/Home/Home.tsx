import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";
import { ProjectCard } from "../../components/ProjectCard";
import { Button, SectionTitle } from "../../components/Shell";
import { Marquee } from "../../components/Marquee";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";

function ResumeDropdown({ text }: { text: (key: string) => string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const base = import.meta.env.BASE_URL;
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  return (
    <div className="resume-dropdown" ref={ref}>
      <button
        type="button"
        className="download"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {text("Download Resume")} ↓
      </button>
      {open && (
        <div className="resume-menu">
          <a
            href={`${base}pdf-resume/resume-fa.pdf`}
            download
            onClick={() => setOpen(false)}
          >
            {text("Persian Resume")}
          </a>
          <a
            href={`${base}pdf-resume/resume-en.pdf`}
            download
            onClick={() => setOpen(false)}
          >
            {text("English Resume")}
          </a>
        </div>
      )}
    </div>
  );
}

export function Home() {
  const { t, language } = useLanguage();
  const text = (value: string) => t(value);
  const tech = skillGroups
    .slice(0, 5)
    .flatMap((g) => g.skills)
    .filter((x) => !x.includes("—"));
  const ai = skillGroups[5].skills;
  const stats = profile.stats.map((s) => ({
    value: s.value,
    label: text(s.label),
  }));
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot pulse" />{" "}
            {language === "fa"
              ? "آماده همکاری فریلنسری"
              : "AVAILABLE FOR FREELANCE"}
          </p>
          <p className="hero-name">{profile.name[language]}</p>
          <h1>
            {text(profile.title)}
            <br />
            <em>{text(profile.headline)}</em>
          </h1>
          <p className="hero-text">{text(profile.summary)}</p>
          <div className="actions">
            <Button to="/projects">
              {text("View Projects")} <span>↗</span>
            </Button>
            <Button to="/contact" secondary>
              {text("Contact Me")}
            </Button>
            <ResumeDropdown text={text} />
          </div>
        </div>
        <div className="hero-aside">
          <div className="system-card">
            <div className="system-head">
              <span>
                <i className="pulse" /> {text("SYSTEM ONLINE")}
              </span>
              <small>{language === "fa" ? "AS / ۰۰۱" : "AS / 001"}</small>
            </div>
            <p className="system-name">
              {language === "fa" ? "امیرحسین" : "AMIRHOSSEIN"}
              <br />
              <b>
                {language === "fa" ? "توسعه‌دهنده" : "FULL-STACK"}
                <br />
                {language === "fa" ? "فول‌استک" : "DEVELOPER"}
              </b>
            </p>
            <div className="system-rule" />
            <div className="system-row">
              <span>{text("Frontend")}</span>
              <b>React · TypeScript</b>
            </div>
            <div className="system-row">
              <span>{text("Backend")}</span>
              <b>Node.js · Express</b>
            </div>
            <div className="system-row">
              <span>{text("Database")}</span>
              <b>PostgreSQL · MongoDB</b>
            </div>
            <div className="system-row">
              <span>AI</span>
              <b>OpenAI · Gemini · Claude</b>
            </div>
            <div className="system-row">
              <span>{text("DevOps")}</span>
              <b>Docker · Deployment</b>
            </div>
            <div className="system-footer">
              <span>{text("04 YEARS LEARNING")}</span>
              <span>{text("01+ YEAR PRO")}</span>
            </div>
          </div>
          <span className="hero-code">
            &lt;build /&gt;
            <br />
            <em>ship.useful.things()</em>
          </span>
        </div>
      </section>
      <section className="stats container">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>
      <section className="capability-strip mt-4">
        <div className="container strip-inner">
          <span className="strip-label">
            <span className="dot pulse" /> {text("CAPABILITIES")}
          </span>
          {["Frontend", "Backend", "AI", "PWA", "Database", "DevOps"].map(
            (x) => (
              <span className="capability" key={x}>
                {text(x)}
              </span>
            ),
          )}
        </div>
      </section>
      <section className="marquee-section">
        <Marquee
          label={language === "fa" ? "تکنولوژی" : "TECH"}
          items={tech}
        />
        <Marquee
          label={language === "fa" ? "ابزارهای هوش مصنوعی" : "AI + TOOLS"}
          items={ai}
          reverse
        />
      </section>
      <ScrollReveal>
        <section className="section intro-section container">
          <div className="section-kicker">
            <span className="dot pulse" /> {text("THE SHORT VERSION")}
          </div>
          <div className="split-intro">
            <div>
              <h2>{text("I turn ideas into useful software.")}</h2>
            </div>
            <div>
              <p className="large-copy">
                {text(
                  "A full-stack developer with a product-minded approach. I work across interfaces, APIs, data, AI integrations, and deployment to help real-world applications move from concept to users.",
                )}
              </p>
              <Link className="view-all" to="/about">
                {text("Read more about me")} <span>←</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <section className="section projects-section container">
        <SectionTitle
          eyebrow={text("SELECTED WORK")}
          title={text("Built for the real world.")}
        >
          {text(
            "Four completed applications with real case studies. Every link leads somewhere real.",
          )}
        </SectionTitle>
        <div className="project-grid">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ScrollReveal delay={i * 80} key={p.id}>
                <ProjectCard project={p} index={i} />
              </ScrollReveal>
            ))}
        </div>
        <Link className="view-all" to="/projects">
          {text("Explore all projects")} <span>←</span>
        </Link>
      </section>
      <ScrollReveal>
        <section className="section build-section container">
          <SectionTitle
            eyebrow={text("WHAT I BUILD")}
            title={text("The layers behind a product.")}
          />
          <div className="build-grid">
            {[
              [
                "Full-Stack Applications",
                "Interfaces and systems that work together.",
              ],
              [
                "Progressive Web Apps",
                "Fast, responsive, installable experiences.",
              ],
              ["AI-powered Applications", "Useful AI integrations, not hype."],
              [
                "Deployment-ready Systems",
                "Docker, servers, and production delivery.",
              ],
            ].map((x, i) => (
              <div className="build-item" key={x[0]}>
                <h3>{text(x[0])}</h3>
                <p className="muted">{text(x[1])}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
      <section className="process-band">
        <div className="container">
          <div className="section-kicker">
            <span className="dot pulse" /> {text("HOW I WORK")}
          </div>
          <div className="process">
            {["Understand", "Plan", "Build", "Test", "Deploy"].map((x) => (
              <div key={x}>
                <strong>{text(x)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">
              <span className="dot pulse" /> {text("NEXT STEP")}
            </p>
            <h2>{text("Have a project in mind?")}</h2>
            <p className="muted">
              {text("Let’s build something useful together.")}
            </p>
          </div>
          <Button to="/contact">{text("Start a conversation")} ↗</Button>
        </div>
      </section>
    </>
  );
}
