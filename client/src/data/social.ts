import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/danrleypereira",
    icon: Github,
    ariaLabel: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/danrleypereira/",
    icon: Linkedin,
    ariaLabel: "LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/danrleypereira",
    icon: Instagram,
    ariaLabel: "Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/danrleywillyan",
    icon: Facebook,
    ariaLabel: "Facebook",
  },
];

export const OWNER = {
  name: "Danrley Pereira",
  title: "Engenheiro de Software",
  email: "contact@danrleypereira.com",
} as const;
