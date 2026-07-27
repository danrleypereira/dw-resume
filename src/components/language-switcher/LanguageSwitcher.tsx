import React from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "i18n";
import "./language-switcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language || "pt").split("-")[0];

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {LANGS.map((lng) => (
        <button
          key={lng}
          type="button"
          className={`lang-btn ${current === lng ? "active" : ""}`}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
