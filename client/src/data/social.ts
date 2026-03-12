import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import linksData from "@/data/links.json";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
};

export const SOCIAL_LINKS: SocialLink[] = linksData.social.map((s) => ({
  name: s.name,
  url: s.url,
  icon: ICON_MAP[s.name] ?? Github,
  ariaLabel: s.name,
}));

export const OWNER = {
  name: linksData.owner.name,
  title: linksData.owner.title,
  email: linksData.owner.email,
} as const;
