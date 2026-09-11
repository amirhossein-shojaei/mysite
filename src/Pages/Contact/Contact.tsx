import { FormEvent, useState } from "react";
import { SectionTitle } from "../../components/Shell";
import { profile } from "../../data/profile";
import { useLanguage } from "../../locales";
export function Contact() {
  const [sent, setSent] = useState(false);
  const { t, language } = useLanguage();
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
  }
  return (
    <section className="page container contact">
      <SectionTitle
        eyebrow={t("CONTACT")}
        title={t("Let’s make something useful.")}
      >
        {t(
          "Tell me what you’re working on. I’ll get back to you through the details you provide.",
        )}
      </SectionTitle>
      <div className="contact-grid">
        <form onSubmit={submit} className="contact-form">
          {sent ? (
            <div className="success">
              <span>✓</span>
              <h2>{t("Message received.")}</h2>
              <p className="muted">
                {t(
                  "This is a simulated submission for now. A backend can be connected later.",
                )}
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => setSent(false)}
              >
                {t("Send another message →")}
              </button>
            </div>
          ) : (
            <>
              <label>
                {t("Name")}
                <input name="name" required placeholder={t("Your name")} />
              </label>
              <label>
                {t("Email")}
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                {t("Subject")}
                <input
                  name="subject"
                  required
                  placeholder={t("How can I help?")}
                />
              </label>
              <label>
                {t("Message")}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("Tell me a little about your project...")}
                />
              </label>
              <button className="btn" type="submit">
                {t("Send message ↗")}
              </button>
            </>
          )}
        </form>
        <aside className="contact-aside">
          <p className="eyebrow">
            <span className="dot pulse" /> {t("DIRECT CHANNELS")}
          </p>
          <a href={`mailto:${profile.email}`}>
            {t("Email")} <b>{profile.email}</b>
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub <b>{profile.github}</b>
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <b>{profile.linkedin}</b>
          </a>
          <a
            href={profile.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram <b>{profile.telegram}</b>
          </a>
          <a href={profile.baleUrl} target="_blank" rel="noopener noreferrer">
            Bale <b>{profile.bale}</b>
          </a>
          <p className="muted contact-note">
            {t(
              "Reach out through any of these channels. I usually respond within a day.",
            )}
          </p>
        </aside>
      </div>
    </section>
  );
}
