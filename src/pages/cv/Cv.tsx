import React from "react";
import { useTranslation } from "react-i18next";
import "../page.css";

export default function Cv() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <h1 className="page-title">{t("cv.title")}</h1>
      <p className="page-subtitle">{t("cv.note")}</p>
      <hr className="page-rule" />
      <div className="page-placeholder">{t("cv.comingSoon")}</div>
    </div>
  );
}
