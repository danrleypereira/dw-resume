// Single source of truth for every public contact/profile link on the site.
// public/index.html and public/llms.txt cannot import this file, so
// links.test.ts checks that they stay in sync with it.

export const SITE_URL = "https://danrleypereira.com.br";

const WHATSAPP_NUMBER = "5561994234712";

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const links = {
  github: "https://github.com/danrleypereira",
  linkedin: "https://www.linkedin.com/in/danrleypereira",
  instagram: "https://www.instagram.com/danrleypereira",
  instagramCommunity: "https://www.instagram.com/software_craftsmanship",
  facebook: "https://www.facebook.com/danrleywillyan",
  email: "danrley.pereira@dwcorp.com.br",
  phone: "+55 61 9 9423-4712",
  whatsapp: whatsappUrl(),
  website: SITE_URL,
  // Author pages on publications I write for (not sites I own).
  aranduAuthor: "https://dwcorp.com.br/arandu/br/autor/danrley-pereira",
  recortnewsAuthor: "https://recortnews.com.br/br/autor/danrley-pereira",
};

/** Strips the protocol and "www." for display, e.g. "github.com/danrleypereira". */
export const displayUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
