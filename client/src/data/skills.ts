export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "TailwindCSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Java (Spring Boot)", "Node.js", "JPA", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git/GitHub", "CI/CD", "Docker", "Sympla API", "Arduino"],
  },
  {
    category: "Soft Skills",
    items: ["Liderança Técnica", "Mentoria", "Gestão de Projetos", "Comunicação"],
  },
];
