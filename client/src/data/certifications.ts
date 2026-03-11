export interface Certification {
  name: string;
}

export const CERTIFICATIONS: Certification[] = [
  { name: "Kanban Foundation (KIKF)" },
  { name: "Scrum Fundamentals Certified" },
  { name: "Business Intelligence com Power BI" },
  { name: "Inglês Profissional (B2)" },
];

export interface Language {
  flag: string;
  name: string;
  level: string;
}

export const LANGUAGES: Language[] = [
  { flag: "\u{1F1E7}\u{1F1F7}", name: "Português", level: "Nativo" },
  { flag: "\u{1F1FA}\u{1F1F8}", name: "Inglês", level: "Profissional" },
  { flag: "\u{1F1EA}\u{1F1F8}", name: "Espanhol", level: "Intermediário" },
  { flag: "\u{1F1E9}\u{1F1EA}", name: "Alemão", level: "Básico" },
];
