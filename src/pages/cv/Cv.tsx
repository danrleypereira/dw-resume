import React from "react";
import { useTranslation } from "react-i18next";
import "../page.css";
import "./cv.css";

const LANG_FILE: Record<string, string> = {
  pt: "cv-pt.pdf",
  en: "cv-en.pdf",
  es: "cv-es.pdf",
};

export default function Cv() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || "pt").split("-")[0];
  const fileName = LANG_FILE[lang] || LANG_FILE.pt;
  // ?v bumps when the PDFs change, so browsers don't serve a stale cached copy.
  const fileUrl = `${process.env.PUBLIC_URL}/cv/${fileName}?v=8`;
  const downloadName = `Danrley-Pereira-CV-${lang.toUpperCase()}.pdf`;

  return (
    <div className="page">
      <div className="cv-head">
        <div>
          <h1 className="page-title">{t("cv.title")}</h1>
          <p className="page-subtitle">{t("cv.note")}</p>
        </div>
        <a className="cv-download" href={fileUrl} download={downloadName}>
          ↓ {t("cv.download")}
        </a>
      </div>
      <hr className="page-rule" />

      <object
        className="cv-viewer"
        data={fileUrl}
        type="application/pdf"
        aria-label={t("cv.title")}
      >
        <div className="cv-fallback">
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {t("cv.download")}
          </a>
        </div>
      </object>
    </div>
  );
}
