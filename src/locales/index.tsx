import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { en } from "./en";
import { fa } from "./fa";
export type Language = "en" | "fa";
type Dictionary = Record<string, any>;
const dictionaries: Record<Language, Dictionary> = { en, fa };
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}>({ language: "en", setLanguage: () => {}, t: () => "" });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("language") === "fa" ? "fa" : "en",
  );
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.title =
      language === "fa"
        ? "امیرحسین شجاعی | توسعه‌دهنده فول‌استک"
        : "Amirhossein Shojaei | Full-Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "fa"
          ? "پورتفولیوی حرفه‌ای امیرحسین شجاعی، توسعه‌دهنده فول‌استک در حوزه وب مدرن، PWA، سیستم‌های بک‌اند و اپلیکیشن‌های هوشمند."
          : "Professional portfolio of Amirhossein Shojaei, a Full-Stack Developer specializing in modern web applications, PWA development, backend systems, AI-powered applications, databases, Docker, and deployment.",
      );
  }, [language]);
  const t = (key: string) => {
    const nested = key
      .split(".")
      .reduce<any>((value, part) => value?.[part], dictionaries[language]);
    return (
      nested || (language === "fa" ? dictionaries.fa.content[key] : key) || key
    );
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
