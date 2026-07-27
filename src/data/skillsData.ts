export interface Skill {
  name: string;
  level: number; // 0-5 scale
  category: 'soft' | 'technical';
  description?: string;
  roles: string[];
}

export const hardSkills: Skill[] = [
  // From "HTML5, CSS3 & Bootstrap"
  {
    name: "HTML5",
    level: 5,
    category: "technical",
    description: "Expert in modern frontend design.",
    roles: ["frontend", "designer"]
  },
  {
    name: "CSS3",
    level: 5,
    category: "technical",
    description: "Expert in modern frontend design.",
    roles: ["frontend", "designer"]
  },
  {
    name: "Bootstrap",
    level: 5,
    category: "technical",
    description: "Expert in modern frontend design.",
    roles: ["frontend", "designer"]
  },

  // From "GitHub Actions & SQL"
  {
    name: "GitHub Actions",
    level: 5,
    category: "technical",
    description: "Proficient in CI/CD pipelines and relational databases.",
    roles: ["devops", "ci/cd"]
  },
  {
    name: "SQL",
    level: 5,
    category: "technical",
    description: "Proficient in CI/CD pipelines and relational databases.",
    roles: ["backend", "data"]
  },

  {
    name: "JavaScript",
    level: 4,
    category: "technical",
    description: "Strong understanding of ECMAScript and async programming.",
    roles: ["frontend"]
  },

  // From "Angular & TypeScript"
  {
    name: "Angular",
    level: 4,
    category: "technical",
    description: "Well-versed in building scalable frontend apps.",
    roles: ["frontend"]
  },
  {
    name: "TypeScript",
    level: 4,
    category: "technical",
    description: "Well-versed in building scalable frontend apps.",
    roles: ["frontend"]
  },

  // From "Polymer, React & Vue"
  {
    name: "Polymer",
    level: 4,
    category: "technical",
    description: "Experience with multiple modern frameworks.",
    roles: ["frontend"]
  },
  {
    name: "React",
    level: 4,
    category: "technical",
    description: "Experience with multiple modern frameworks.",
    roles: ["frontend"]
  },
  {
    name: "Vue",
    level: 4,
    category: "technical",
    description: "Experience with multiple modern frameworks.",
    roles: ["frontend"]
  },

  {
    name: "React Hooks",
    level: 4,
    category: "technical",
    description: "Advanced state management and side-effects handling.",
    roles: ["frontend"]
  },

  // From "Node.js & Express"
  {
    name: "Node.js",
    level: 4,
    category: "technical",
    description: "Backend development with REST APIs.",
    roles: ["backend"]
  },
  {
    name: "Express",
    level: 4,
    category: "technical",
    description: "Backend development with REST APIs.",
    roles: ["backend"]
  },

  // From "Git, Docker & Docker Compose"
  {
    name: "Git",
    level: 4,
    category: "technical",
    description: "Version control and containerization.",
    roles: ["devops"]
  },
  {
    name: "Docker",
    level: 4,
    category: "technical",
    description: "Version control and containerization.",
    roles: ["devops"]
  },
  {
    name: "Docker Compose",
    level: 4,
    category: "technical",
    description: "Version control and containerization.",
    roles: ["devops"]
  },

  // From "Python & C#"
  {
    name: "Python",
    level: 4,
    category: "technical",
    roles: ["backend"]
  },
  {
    name: "C#",
    level: 4,
    category: "technical",
    roles: ["backend"]
  },

  // From ".NET Core & Entity Framework"
  {
    name: ".NET Core",
    level: 4,
    category: "technical",
    roles: ["backend"]
  },
  {
    name: "Entity Framework",
    level: 4,
    category: "technical",
    roles: ["backend"]
  },

  // From "VS Code, VS Studio & Vim"
  {
    name: "VS Code",
    level: 4,
    category: "technical",
    roles: ["tools"]
  },
  {
    name: "VS Studio",
    level: 4,
    category: "technical",
    roles: ["tools"]
  },
  {
    name: "Vim",
    level: 4,
    category: "technical",
    roles: ["tools"]
  },

  // From "UML & Design Patterns"
  {
    name: "UML",
    level: 4,
    category: "technical",
    roles: ["architecture", "design"]
  },
  {
    name: "Design Patterns",
    level: 4,
    category: "technical",
    roles: ["architecture", "design"]
  },

  // From "Postgres & MongoDB"
  {
    name: "Postgres",
    level: 4,
    category: "technical",
    roles: ["data"]
  },
  {
    name: "MongoDB",
    level: 4,
    category: "technical",
    roles: ["data"]
  },

  // From "Android, React Native & Ionic"
  {
    name: "Android",
    level: 4,
    category: "technical",
    roles: ["mobile"]
  },
  {
    name: "React Native",
    level: 4,
    category: "technical",
    roles: ["frontend", "mobile"]
  },
  {
    name: "Ionic",
    level: 4,
    category: "technical",
    roles: ["frontend", "mobile"]
  },

  {
    name: "Linux Administration",
    level: 4,
    category: "technical",
    roles: ["devops"]
  },

  // From "Shell, Bash & DevOps"
  {
    name: "Shell",
    level: 4,
    category: "technical",
    roles: ["devops"]
  },
  {
    name: "Bash",
    level: 4,
    category: "technical",
    roles: ["devops"]
  },
  {
    name: "DevOps",
    level: 4,
    category: "technical",
    roles: ["devops"]
  },

  // From "Firebase, DevOps & Heroku"
  {
    name: "Firebase",
    level: 4,
    category: "technical",
    roles: ["backend", "data", "cloud"]
  },
  {
    name: "Heroku",
    level: 4,
    category: "technical",
    roles: ["devops", "cloud"]
  },

  // From "XUnit & Selenium"
  {
    name: "XUnit",
    level: 4,
    category: "technical",
    roles: ["testing"]
  },
  {
    name: "Selenium",
    level: 4,
    category: "technical",
    roles: ["testing"]
  },

  // From "Django & Flask"
  {
    name: "Django",
    level: 3,
    category: "technical",
    roles: ["backend"]
  },
  {
    name: "Flask",
    level: 3,
    category: "technical",
    roles: ["backend"]
  },

  // From "TDD, Jest, Cypress.io & PyTest"
  {
    name: "TDD",
    level: 3,
    category: "technical",
    roles: ["testing"]
  },
  {
    name: "Jest",
    level: 3,
    category: "technical",
    roles: ["testing"]
  },
  {
    name: "Cypress.io",
    level: 3,
    category: "technical",
    roles: ["testing"]
  },
  {
    name: "PyTest",
    level: 3,
    category: "technical",
    roles: ["testing"]
  },

  // From "Java & C"
  {
    name: "Java",
    level: 3,
    category: "technical",
    roles: ["backend"]
  },
  {
    name: "C",
    level: 3,
    category: "technical",
    roles: ["backend"]
  },

  // From "Pandas, Numpy & Scipy"
  {
    name: "Pandas",
    level: 3,
    category: "technical",
    roles: ["data"]
  },
  {
    name: "Numpy",
    level: 3,
    category: "technical",
    roles: ["data"]
  },
  {
    name: "Scipy",
    level: 3,
    category: "technical",
    roles: ["data"]
  },

  // From "Jenkins & NGINX"
  {
    name: "Jenkins",
    level: 3,
    category: "technical",
    roles: ["devops"]
  },
  {
    name: "NGINX",
    level: 3,
    category: "technical",
    roles: ["devops"]
  },

  // From "Google Cloud Platform & AWS"
  {
    name: "Google Cloud Platform",
    level: 3,
    category: "technical",
    roles: ["cloud"]
  },
  {
    name: "AWS",
    level: 3,
    category: "technical",
    roles: ["cloud"]
  },

  // From "Kafka & Redis"
  {
    name: "Kafka",
    level: 2,
    category: "technical",
    roles: ["data"]
  },
  {
    name: "Redis",
    level: 2,
    category: "technical",
    roles: ["data"]
  },

  // From "Gulp & Grunt"
  {
    name: "Gulp",
    level: 2,
    category: "technical",
    roles: ["frontend", "build"]
  },
  {
    name: "Grunt",
    level: 2,
    category: "technical",
    roles: ["frontend", "build"]
  },

  // From "C++, Go & Redis" (Redis already taken above)
  {
    name: "C++",
    level: 2,
    category: "technical",
    roles: ["backend"]
  },
  {
    name: "Go",
    level: 2,
    category: "technical",
    roles: ["backend"]
  },

  {
    name: "Azure",
    level: 2,
    category: "technical",
    roles: ["cloud"]
  },

  // From "Power Bi & QlikSense"
  {
    name: "Power Bi",
    level: 1,
    category: "technical",
    roles: ["data", "analytics"]
  },
  {
    name: "QlikSense",
    level: 1,
    category: "technical",
    roles: ["data", "analytics"]
  }
];

export const softSkills: Skill[] = [
  {
    name: "Teamwork",
    level: 5,
    category: "soft",
    description: "Works well in diverse teams.",
    roles: ["soft"]
  },
  {
    name: "Self-taught",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Learning Potential",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Critical Thinking",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Innovative",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Organized",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Agile",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Observer",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Responsible",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Collaboration",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Communication",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Trust",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Self-Management",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "MultiTasking",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Focus",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Professionalism",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Enthusiasm",
    level: 5,
    category: "soft",
    roles: ["soft"]
  },
  {
    name: "Empathy",
    level: 5,
    category: "soft",
    roles: ["soft"]
  }
];
