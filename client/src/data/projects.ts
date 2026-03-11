import type { LucideIcon } from "lucide-react";
import { Calendar, Laptop, GraduationCap, Gamepad2, Cpu, Newspaper } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  github?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Aplicação de Gerenciamento de Eventos",
    description:
      "Plataforma multi-camadas para gerenciamento de eventos, emissão de certificados e agendamento de salas. Integração com API Sympla para sincronização de dados. Arquitetura com React (frontend), Python (lógica de negócio) e Java Spring Boot (backend).",
    technologies: ["React", "Python", "Java Spring Boot", "Sympla API", "GitHub Actions", "CI/CD"],
    icon: Calendar,
    github: "https://github.com/danrleypereira",
    featured: true,
  },
  {
    title: "LabTech - Software Fabric da UDF",
    description:
      "Plataforma de desenvolvimento de software como serviço para a universidade. Atuei como Product Manager, refinando produtos, implementando processos estruturados e liderando equipes em tarefas desafiadoras. Foco em alinhamento com necessidades de negócio e visão futura.",
    technologies: ["Product Management", "Agile", "Team Leadership", "Process Design"],
    icon: Laptop,
    featured: true,
  },
  {
    title: "SAEDF - Sistema Educacional",
    description:
      "Projeto governamental de sistema educacional. Atuei como desenvolvedor, construindo classes Java enquanto entendia a lógica de negócio. Experiência com JPA, JSP e Servlets em ambiente corporativo.",
    technologies: ["Java", "JPA", "JSP", "Servlets", "Banco de Dados"],
    icon: GraduationCap,
    featured: false,
  },
  {
    title: "Trinca Social Game",
    description:
      "Jogo sério desenvolvido para auxiliar pesquisa de mestrado com foco em educação. Contribuí no desenvolvimento frontend com JADE, enquanto apoiava o desenvolvedor backend. Emulação de jogos de cartas para propor soluções a questões sociais.",
    technologies: ["JADE", "Frontend Development", "Game Design", "Education Technology"],
    icon: Gamepad2,
    featured: false,
  },
  {
    title: "Protótipo de Monitoramento de Cisterna",
    description:
      "Projeto educacional desenvolvido como professor voluntário. Protótipo usando Arduino para monitoramento de nível de água em cisternas, com sensor ultrassônico e módulo Bluetooth. Combinava hardware, programação e impacto social.",
    technologies: ["Arduino", "C++", "Sensor Ultrassônico", "Bluetooth", "IoT"],
    icon: Cpu,
    featured: false,
  },
  {
    title: "Gama Cidadão - Jornalismo Digital",
    description:
      "Portal de notícias e cidadania onde atuo como jornalista independente desde 2017. Cobertura de temas sociais, políticos e comunitários. Trabalho reconhecido com Moção de Louvor da Câmara Legislativa do Distrito Federal em 2019.",
    technologies: ["Jornalismo", "Comunicação Digital", "Pesquisa", "Cidadania"],
    icon: Newspaper,
    featured: false,
  },
];
