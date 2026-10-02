import React from "react";
import { useTranslation } from "react-i18next";
import { displayUrl, links, whatsappUrl } from "data/links";
import "../page.css";
import "./contact.css";

type ContactItem = {
  key: string;
  value: string;
  href: string;
  external?: boolean;
  noteKey?: string;
  // rel="me": the page is a profile of mine, so search engines can link the identities.
  me?: boolean;
};

const items: ContactItem[] = [
  {
    key: "whatsapp",
    value: links.phone,
    href: whatsappUrl("Hey, I found you on danrleypereira.com.br"),
    external: true,
  },
  {
    key: "email",
    value: links.email,
    href: `mailto:${links.email}`,
  },
  {
    key: "github",
    value: displayUrl(links.github),
    href: links.github,
    external: true,
    me: true,
  },
  {
    key: "linkedin",
    value: displayUrl(links.linkedin),
    href: links.linkedin,
    external: true,
    me: true,
  },
  {
    key: "instagram",
    value: displayUrl(links.instagramCommunity),
    href: links.instagramCommunity,
    external: true,
    noteKey: "contact.instagramNote",
  },
  {
    key: "website",
    value: displayUrl(links.website),
    href: links.website,
    external: true,
  },
];

const writing: ContactItem[] = [
  {
    key: "arandu",
    value: displayUrl(links.aranduAuthor),
    href: links.aranduAuthor,
    external: true,
    me: true,
    noteKey: "contact.aranduNote",
  },
  {
    key: "recortnews",
    value: displayUrl(links.recortnewsAuthor),
    href: links.recortnewsAuthor,
    external: true,
    me: true,
    noteKey: "contact.recortnewsNote",
  },
];

const ContactList = ({ items }: { items: ContactItem[] }) => {
  const { t } = useTranslation();

  return (
    <ul className="contact-list">
      {items.map((item) => (
        <li key={item.key} className="contact-card">
          <a
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: `${item.me ? "me " : ""}noopener noreferrer` }
              : {})}
          >
            <span className="contact-label">{t(`contact.${item.key}`)}</span>
            <span className="contact-value">{item.value}</span>
            {item.noteKey && (
              <span className="contact-note">{t(item.noteKey)}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1 className="page-title">{t("contact.title")}</h1>
      <p className="page-subtitle">{t("contact.subtitle")}</p>
      <hr className="page-rule" />

      <div className="page-body">
        <ContactList items={items} />

        <h2 className="contact-section-title">{t("contact.writingTitle")}</h2>
        <ContactList items={writing} />
      </div>
    </div>
  );
}
