import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";
import { ProjectCard } from "../../components/ProjectCard";
import { Button, SectionTitle } from "../../components/Shell";
import { Marquee } from "../../components/Marquee";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useLanguage } from "../../locales";
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
            {language === "fa"
              ? "۰۱ / پورتفولیوی شخصی"
              : "01 / PERSONAL PORTFOLIO"}{" "}
            <span className="dot pulse" />{" "}
            {language === "fa"
              ? "آماده همکاری فریلنسری"
              : "AVAILABLE FOR FREELANCE"}
          </p>
          <p className="hero-name">
            {language === "fa" ? "امیرحسین شجاعی" : "Amirhossein Shojaei"}
          </p>
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
            <a className="download" href={profile.cvUrl}>
              {text("Download Resume")} ↓
            </a>
          </div>
          <div className="social-row">
            <span>{text("Find me at")}</span>
            <a href={`mailto:${profile.email}`}>{text("Email")} ↗</a>
            <span>{profile.github}</span>
            <span>{profile.linkedin}</span>
          </div>
        </div>
        <div className="hero-aside">
          <div className="system-card">
            <div className="system-head">
              <span>
                <i className="pulse" /> {text("SYSTEM ONLINE")}
              </span>
              <small>AS / 001</small>
            </div>
            <p className="system-name">
              AMIRHOSSEIN
              <br />
              <b>
                FULL-STACK
                <br />
                DEVELOPER
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
          <span className="strip-label">{text("CAPABILITIES")}</span>
          {["Frontend", "Backend", "AI", "PWA", "Database", "DevOps"].map(
            (x, i) => (
              <span className="capability" key={x}>
                <b>0{i + 1}</b>
                {text(x)}
              </span>
            ),
          )}
        </div>
      </section>
      <section className="marquee-section">
        <Marquee label="TECH / 01" items={tech} />
        <Marquee label="AI + TOOLS / 02" items={ai} reverse />
      </section>
      <ScrollReveal>
        <section className="section intro-section container">
          <div className="section-kicker">{text("03 / THE SHORT VERSION")}</div>
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
          eyebrow={text("04 / SELECTED WORK")}
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
            eyebrow={text("05 / WHAT I BUILD")}
            title={text("The layers behind a product.")}
          />
          <div className="build-grid">
            {[
              [
                "01",
                "Full-Stack Applications",
                "Interfaces and systems that work together.",
              ],
              [
                "02",
                "Progressive Web Apps",
                "Fast, responsive, installable experiences.",
              ],
              [
                "03",
                "AI-powered Applications",
                "Useful AI integrations, not hype.",
              ],
              [
                "04",
                "Deployment-ready Systems",
                "Docker, servers, and production delivery.",
              ],
            ].map((x) => (
              <div className="build-item" key={x[0]}>
                <span>{x[0]}</span>
                <h3>{text(x[1])}</h3>
                <p className="muted">{text(x[2])}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
      <section className="process-band">
        <div className="container">
          <div className="section-kicker">{text("06 / HOW I WORK")}</div>
          <div className="process">
            {["Understand", "Plan", "Build", "Test", "Deploy"].map((x, i) => (
              <div key={x}>
                <strong>{text(x)}</strong>
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">{text("07 / NEXT STEP")}</p>
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
