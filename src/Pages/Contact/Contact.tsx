import { FormEvent, useState } from "react";
import { SectionTitle } from "../../components/Shell";
import { profile } from "../../data/profile";
import { useLanguage } from "../../locales";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "9587c812-1af6-4d4d-9f01-b9706e1bc7de";
  
type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError(t("Please fill in all required fields."));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError(t("Please enter a valid email address."));
      return false;
    }
    return true;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          botcheck: "",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setError(t("Failed to send your message. Please try again."));
      }
    } catch {
      setStatus("error");
      setError(t("Failed to send your message. Please try again."));
    }
  };

  const isBusy = status === "loading" || status === "success";

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
        <form onSubmit={submit} className="contact-form" noValidate>
          {status === "success" ? (
            <div className="success">
              <span>✓</span>
              <h2>{t("Message received.")}</h2>
              <p className="muted">
                {t(
                  "Your message has been sent successfully. I'll get back to you soon.",
                )}
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setStatus("idle");
                  setError("");
                }}
              >
                {t("Send another message →")}
              </button>
            </div>
          ) : (
            <>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <label>
                {t("Name")}
                <input
                  name="name"
                  required
                  placeholder={t("Your name")}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  disabled={isBusy}
                />
              </label>
              <label>
                {t("Email")}
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  disabled={isBusy}
                />
              </label>
              <label>
                {t("Subject")}
                <input
                  name="subject"
                  required
                  placeholder={t("How can I help?")}
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  disabled={isBusy}
                />
              </label>
              <label>
                {t("Message")}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("Tell me a little about your project...")}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  disabled={isBusy}
                />
              </label>
              {status === "error" && error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button className="btn" type="submit" disabled={isBusy}>
                {status === "loading"
                  ? t("Sending...")
                  : t("Send message ↗")}
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
