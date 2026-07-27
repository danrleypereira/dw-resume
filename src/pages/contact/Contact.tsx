import React from "react";
import { useTranslation } from "react-i18next";
import "../page.css";
import "./contact.css";

type ContactItem = {
  key: string;
  value: string;
  href: string;
  external?: boolean;
  noteKey?: string;
};

const items: ContactItem[] = [
  {
    key: "whatsapp",
    value: "+55 61 9 9423-4712",
    href: "https://api.whatsapp.com/send?phone=5561994234712&text=Hey%2C%20I%20found%20you%20on%20danrleypereira.com",
    external: true,
  },
  {
    key: "email",
    value: "danrley.pereira@dwcorp.com.br",
    href: "mailto:danrley.pereira@dwcorp.com.br",
  },
  {
    key: "github",
    value: "github.com/danrleypereira",
    href: "https://github.com/danrleypereira",
    external: true,
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/danrleypereira",
    href: "https://www.linkedin.com/in/danrleypereira",
    external: true,
  },
  {
    key: "instagram",
    value: "instagram.com/software_craftsmanship",
    href: "https://instagram.com/software_craftsmanship",
    external: true,
    noteKey: "contact.instagramNote",
  },
  {
    key: "website",
    value: "danrleypereira.com",
    href: "https://danrleypereira.com",
    external: true,
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1 className="page-title">{t("contact.title")}</h1>
      <p className="page-subtitle">{t("contact.subtitle")}</p>
      <hr className="page-rule" />

      <div className="page-body">
        <ul className="contact-list">
          {items.map((item, index) => (
            <li key={index} className="contact-card">
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contact-label">
                  {t(`contact.${item.key}`)}
                </span>
                <span className="contact-value">{item.value}</span>
                {item.noteKey && (
                  <span className="contact-note">{t(item.noteKey)}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
