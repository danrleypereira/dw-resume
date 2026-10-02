import React from 'react';
import { useTranslation } from 'react-i18next';
import whatsapp from 'assets/social-midias/whatsapp.webp';
import whatsappStill from 'assets/social-midias/whatsapp-still.webp';
import { links } from 'data/links';

export default function WhatsAppLink() {
  const { t } = useTranslation();

  return (
    <a
      className="whatsapp-shortcut"
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('contact.whatsappAction')}
      title={t('contact.whatsappAction')}
    >
      <picture>
        <source media="(prefers-reduced-motion: reduce)" srcSet={whatsappStill} />
        <img src={whatsapp} alt="" width="56" height="56" loading="lazy" decoding="async" {...{ fetchpriority: 'low' }} />
      </picture>
    </a>
  );
}
