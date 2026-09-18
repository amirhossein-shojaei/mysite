import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../locales";

export function ResumeDropdown({
  className = "download",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
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
        className={className}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {t("Download Resume")} ↓
      </button>
      {open && (
        <div className="resume-menu">
          <a
            href={`${base}pdf-resume/resume-fa.pdf`}
            download
            onClick={() => setOpen(false)}
          >
            {t("Persian Resume")}
          </a>
          <a
            href={`${base}pdf-resume/resume-en.pdf`}
            download
            onClick={() => setOpen(false)}
          >
            {t("English Resume")}
          </a>
        </div>
      )}
    </div>
  );
}
