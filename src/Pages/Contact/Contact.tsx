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
          <p className="eyebrow">{t("DIRECT CHANNELS")}</p>
          <a href={`mailto:${profile.email}`}>
            {t("Email")} <b>{profile.email}</b>
          </a>
          <div>
            GitHub <b>{profile.github}</b>
          </div>
          <div>
            LinkedIn <b>{profile.linkedin}</b>
          </div>
          <p className="muted contact-note">
            {t(
              "Contact details are placeholders until the real channels are provided.",
            )}
          </p>
        </aside>
      </div>
    </section>
  );
}
