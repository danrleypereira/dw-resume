import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "locales/en/common.json";
import es from "locales/es/common.json";
import pt from "locales/pt/common.json";

export const LANGS = ["pt", "en", "es"] as const;
export type Lang = (typeof LANGS)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      es: { common: es },
      pt: { common: pt },
    },
    fallbackLng: "pt",
    supportedLngs: LANGS as unknown as string[],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });

export default i18n;
