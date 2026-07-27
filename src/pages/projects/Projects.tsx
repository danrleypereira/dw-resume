import React from "react";
import { useTranslation } from "react-i18next";
import "../page.css";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <h1 className="page-title">{t("projects.title")}</h1>
      <p className="page-subtitle">{t("projects.subtitle")}</p>
      <hr className="page-rule" />
      <div className="page-placeholder">{t("projects.comingSoon")}</div>
    </div>
  );
}
