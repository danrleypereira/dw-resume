import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, BookOpen, Users } from "lucide-react";
import { CubeLink } from "@/components/CubeLink";

/**
 * Design Philosophy: Minimalismo Moderno
 * - Seção detalhada sobre o profissional
 * - Layout com cards para habilidades e experiências
 * - Tipografia clara e espaçamento generoso
 */

export default function About() {
  const skills = [
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

  const experiences = [
    {
      title: "Technical Lead & Project Manager",
      company: "UDF Centro Universitário",
      period: "Jan 2023 - Presente",
      description: "Liderança técnica e gestão de projetos educacionais, coordenando equipes multidisciplinares.",
      highlights: [
        "Desenvolvimento de aplicação multi-camadas para gerenciamento de eventos e certificados",
        "Integração com APIs (Sympla) e sistemas de agendamento",
        "Coordenação de equipes: React (frontend), Python (lógica), Java Spring Boot (backend)",
        "Implementação de processos estruturados com GitHub e CI/CD",
      ],
    },
    {
      title: "Product Manager - LabTech",
      company: "UDF Centro Universitário",
      period: "Jan 2023 - Jul 2023",
      description: "Gestão de produto e liderança de equipes em desenvolvimento de soluções tecnológicas.",
      highlights: [
        "Refinamento de produtos alinhados com necessidades de negócio",
        "Implementação de processos estruturados de desenvolvimento",
        "Liderança de equipes em tarefas desafiadoras",
      ],
    },
    {
      title: "Pesquisador & Educador",
      company: "Múltiplas Instituições",
      period: "2015 - Presente",
      description: "Pesquisa em tecnologia, educação e inovação. Voluntariado em ensino de programação e desenvolvimento.",
      highlights: [
        "Bolsista PIBITI 2020-2021 (CNPq) em desenvolvimento tecnológico",
        "Pesquisador na UDF Centro Universitário (2022-2023)",
        "Professor voluntário de programação web e Arduino",
        "Jornalista independente (Gama Cidadão) desde 2017",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <CubeLink href="/" className="text-2xl font-bold text-primary">DW</CubeLink>
          <div className="flex gap-8 items-center">
            <CubeLink href="/" className="link-underline text-sm font-medium hover:text-primary">
              Sobre
            </CubeLink>
            <CubeLink href="/projects" className="link-underline text-sm font-medium hover:text-primary">
              Projetos
            </CubeLink>
            <CubeLink href="/" className="link-underline text-sm font-medium hover:text-primary">
              Contato
            </CubeLink>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <CubeLink href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </CubeLink>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Mim</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Technical Lead, Product Manager, Pesquisador e Educador. Combinando desenvolvimento técnico 
            com responsabilidade social e inovação educacional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Main Text */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Minha Jornada</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Além de ser um solucionador de problemas, evoluí como integrador e mentor. Minha trajetória 
                  profissional é marcada pela combinação de desenvolvimento técnico, liderança de projetos e 
                  comprometimento com impacto social.
                </p>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Atualmente, como Technical Lead & Project Manager na UDF Centro Universitário, lidero 
                  aplicações multi-camadas para gerenciamento de eventos, emissão de certificados e agendamento 
                  de salas, integrando APIs como Sympla. Coordeno equipes especializadas em React (frontend), 
                  Python (lógica de negócio) e Java Spring Boot (operações de banco de dados).
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Como jornalista independente, pesquisador e educador voluntário, combino tecnologia com 
                  responsabilidade social, trabalhando em projetos que beneficiam a comunidade e promovem 
                  inovação educacional.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>
                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <div key={i} className="card-accent bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">{exp.period}</span>
                      </div>
                      <p className="text-foreground/80 mb-3">{exp.description}</p>
                      {exp.highlights && (
                        <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
                          {exp.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Valores e Princípios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-hover bg-card border border-border rounded-lg p-6">
                    <Code2 className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">Excelência Técnica</h3>
                    <p className="text-foreground/80 text-sm">
                      Código limpo, bem testado e mantível é a base de qualquer projeto bem-sucedido.
                    </p>
                  </div>
                  <div className="card-hover bg-card border border-border rounded-lg p-6">
                    <BookOpen className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">Aprendizado Contínuo</h3>
                    <p className="text-foreground/80 text-sm">
                      A tecnologia evolui constantemente. Estar sempre aprendendo é essencial.
                    </p>
                  </div>
                  <div className="card-hover bg-card border border-border rounded-lg p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">Impacto Social</h3>
                    <p className="text-foreground/80 text-sm">
                      Tecnologia deve servir a comunidade e promover mudanças positivas na sociedade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Skills Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Profile Image */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <img
                    src="/perfil1-nav.jpeg"
                    alt="Danrley Pereira"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Habilidades Técnicas</h3>
                  <div className="space-y-6">
                    {skills.map((skill, i) => (
                      <div key={i}>
                        <h4 className="font-bold text-primary mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, j) => (
                            <span
                              key={j}
                              className="text-xs bg-primary/10 text-primary px-3 py-2 rounded-full font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3">Certificações</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✓ Kanban Foundation (KIKF)</li>
                    <li>✓ Scrum Fundamentals Certified</li>
                    <li>✓ Business Intelligence com Power BI</li>
                    <li>✓ Inglês Profissional (B2)</li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3">Idiomas</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>🇧🇷 Português - Nativo</li>
                    <li>🇺🇸 Inglês - Profissional</li>
                    <li>🇪🇸 Espanhol - Intermediário</li>
                    <li>🇩🇪 Alemão - Básico</li>
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>&copy; 2026 Danrley Pereira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
