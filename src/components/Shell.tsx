import { ReactNode, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profile } from "../data/profile";
import { useLanguage } from "../locales";

const links = [
  ["/", "home"],
  ["/about", "about"],
  ["/projects", "projects"],
  ["/experience", "experience"],
  ["/skills", "skills"],
  ["/services", "services"],
  ["/resume", "resume"],
  ["/contact", "contact"],
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="site">
      <div className="topline">
        <span>AMIRHOSSEIN SHOJAEI / FULL-STACK DEVELOPER</span>
        <span>
          {language === "fa" ? "وب · PWA · هوش مصنوعی" : "WEB · PWA · AI"}
        </span>
      </div>
      <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav container">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">AS</span>
            <span>{profile.name[language]}</span>
          </Link>
          <div className="header-controls">
            <div className="language-switch" aria-label={t("language.switch")}>
              <button
                className={language === "en" ? "selected" : ""}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={language === "fa" ? "selected" : ""}
                onClick={() => setLanguage("fa")}
              >
                FA
              </button>
            </div>
            <button
              className="menu-btn"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
          <div className={open ? "nav-links open" : "nav-links"}>
            {links.map(([to, key]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mark">AS</span>
              <span>{profile.name[language]}</span>
            </Link>
            <p className="muted footer-copy">
              {language === "fa"
                ? "توسعه‌دهنده فول‌استک؛ سازنده اپلیکیشن‌های مدرن وب، PWA و مبتنی بر هوش مصنوعی."
                : "Full-Stack Developer building modern web, PWA & AI-powered applications."}
            </p>
          </div>
          <div className="footer-nav">
            {links.slice(1, 5).map(([to, key]) => (
              <Link key={to} to={to}>
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>
          <div className="footer-social">
            <a href={`mailto:${profile.email}`} aria-label={t("Email")}>
              {t("Email")} ↗
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("GitHub")}
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("LinkedIn")}
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Telegram")}
            >
              Telegram ↗
            </a>
            <a
              href={profile.baleUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Bale")}
            >
              Bale ↗
            </a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 {profile.name[language]}.{" "}
          {language === "fa" ? "تمامی حقوق محفوظ است." : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
}
export function Button({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={secondary ? "btn btn-secondary" : "btn"} to={to}>
      {children}
    </Link>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: ReactNode;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">
        <span className="dot pulse" /> {eyebrow}
      </p>
      <h2>{title}</h2>
      {children && <p className="muted intro">{children}</p>}
    </div>
  );
}
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className ? `arrow-link ${className}` : "arrow-link"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} ↗
    </a>
  );
}
