import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, BookOpen, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CubeLink } from "@/components/CubeLink";

/**
 * Design Philosophy: Minimalismo Moderno
 * - Seção detalhada sobre o profissional
 * - Layout com cards para habilidades e experiências
 * - Tipografia clara e espaçamento generoso
 */

export default function About() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

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
      title: "Pesquisador",
      company: "Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT)",
      period: "Mar 2025 - Set 2025",
      location: "Brasília, DF · Híbrida",
      type: "Temporário",
      description: "Auditoria completa na entrega do SBRT por parceiro terceirizado, verificando cumprimento de pré-requisitos técnicos e de qualidade.",
      highlights: [
        "Auditoria técnica detalhada das entregas do parceiro contratado",
        "Revisão e validação de requisitos e métricas de qualidade",
        "Identificação de melhorias e suporte na definição de ações corretivas",
        "Facilitação da compreensão técnica para equipe institucional",
      ],
      skills: ["Research"],
    },
    {
      title: "Engenheiro de Software Sênior",
      company: "Epicor",
      period: "Nov 2023 - Fev 2025",
      location: "Austin, Texas, USA · Remota",
      type: "Tempo integral",
      description: "Desenvolvimento e otimização de LLMs com Azure OpenAI, pipelines RAG, e liderança técnica em frontend e backend.",
      highlights: [
        "Desenvolveu e otimizou modelos de linguagem (LLMs) integrando APIs do Azure OpenAI Service",
        "Integrou pipeline RAG com dados customizados da empresa para maior precisão",
        "Implementou produtores e consumidores de mensagens com RabbitMQ",
        "Integrou soluções de OAuth2 e SAML em .NET com JWT",
        "Refatorou e conteinerizou aplicações com .NET Aspire e K8s",
        "Liderou refatoração de portal Angular para microfrontends",
        "Orientou equipe de frontend e conduziu melhorias no planejamento de sprints",
        "Implementou telas pixel-perfect baseadas em designs do Figma",
      ],
      skills: ["OAuth", "Azure", ".NET", "Angular", "RabbitMQ", "Kubernetes", "RAG", "LLM"],
    },
    {
      title: "Consultor em Engenharia de Software",
      company: "Subsurface Dynamics",
      period: "Jan 2024 - Jun 2024",
      location: "Calgary, Alberta, Canadá · Remota",
      type: "Temporário",
      description: "Refatoração completa de stack MERN para TypeScript moderno, visualizações 3D e autenticação robusta.",
      highlights: [
        "Implementou autenticação com Microsoft Azure ADAL e Auth0 (OAuth2 e SAML)",
        "Liderou refatoração de JavaScript para TypeScript com Fastify, Redis, Socket.io e Typegoose",
        "Reengenheirou frontend com React e TypeScript em componentes reutilizáveis",
        "Implementou visualização 3D de tubos de poços com Three.js",
        "Otimizou Redis para streaming de dados em tempo real",
        "Utilizou séries temporais do MongoDB Atlas para análises personalizadas",
      ],
      skills: ["React", "TypeScript", "Three.js", "Redis", "MongoDB", "OAuth", "Fastify"],
    },
    {
      title: "Líder Técnico & Gerente de Projeto",
      company: "LabTech UDF Fábrica de Software",
      period: "Jan 2023 - Dez 2023",
      location: "Brasília, DF · Híbrida",
      type: "Trainee",
      description: "Liderança no desenvolvimento de aplicação multinível para gerenciamento de eventos com integração Sympla.",
      highlights: [
        "Orquestrou equipes: React (frontend), Python (lógica de negócio), Java Spring Boot (backend)",
        "Implementou RabbitMQ para comunicação assíncrona entre serviços",
        "Estabeleceu CI/CD com GitHub Actions",
        "Conteinerizou microserviços para orquestração com Kubernetes",
        "Mentoria para profissionais em início de carreira",
      ],
      skills: ["React", "Python", "Java Spring Boot", "RabbitMQ", "Kubernetes", "CI/CD"],
    },
    {
      title: "Engenheiro de Software Sênior",
      company: "DW Corp LTDA",
      period: "Set 2022 - Out 2023",
      location: "Brasília, DF · Híbrida",
      type: "Tempo integral",
      description: "Desenvolvimento de soluções em nuvem, integração com Oracle Symphony e pipelines de CI/CD com relatórios automatizados.",
      highlights: [
        "Integrou Symphony (Oracle) usando SOAP e REST com Django em arquitetura limpa",
        "Usou Celery para agendamento de atualizações de pedidos e estoque",
        "Gerou relatórios Surefire no pipeline CI com Maven e GitLab Actions",
        "Implantou Lambda em Python + S3 + EC2 para relatórios Allure automatizados",
        "Gerenciou infraestrutura em GCP, Digital Ocean e AWS",
        "Orientou desenvolvedores sobre TDD e princípios SOLID",
      ],
      skills: ["Django", "AWS", "GCP", "Docker", "Java", "CI/CD", "TDD"],
    },
    {
      title: "Desenvolvedor de Aplicativos Móveis",
      company: "DW Corp LTDA",
      period: "Mai 2023 - Set 2023",
      location: "Campo Grande, MS · Remota",
      type: "Temporário",
      description: "Desenvolvimento de aplicativo móvel de FSM com .NET MAUI, publicação nas lojas e gestão de banco de dados.",
      highlights: [
        "Desenvolveu app móvel de FSM com .NET MAUI",
        "Otimizou serviços RESTful com .NET Core e .NET MVC",
        "Implementou testes com XUnit integrados ao Allure Reports",
        "Publicou o aplicativo na App Store e Google Play Store",
      ],
      skills: [".NET MAUI", ".NET Core", "XUnit", "SQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <CubeLink href="/" className="text-2xl font-bold text-primary">DW</CubeLink>
          <div className="flex gap-8 items-center">
            <CubeLink href="/about" className="link-underline text-sm font-medium hover:text-primary">
              Sobre
            </CubeLink>
            <CubeLink href="/projects" className="link-underline text-sm font-medium hover:text-primary">
              Projetos
            </CubeLink>
            <CubeLink href="/" className="link-underline text-sm font-medium hover:text-primary">
              Home
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
                  {experiences.map((exp, i) => {
                    const isExpanded = expandedCards.has(i);
                    return (
                      <div key={i} className="card-accent bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">{exp.period}</span>
                        </div>
                        <div className="flex gap-3 text-xs text-foreground/50 mb-3">
                          <span>{exp.type}</span>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-foreground/80 mb-3">{exp.description}</p>

                        {isExpanded && (
                          <>
                            <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside mb-4">
                              {exp.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
                              ))}
                            </ul>
                            {exp.skills && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {exp.skills.map((skill, j) => (
                                  <span
                                    key={j}
                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </>
                        )}

                        <button
                          onClick={() => toggleCard(i)}
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium mt-1 cursor-pointer"
                        >
                          {isExpanded ? "Ver menos" : "Ler mais"}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    );
                  })}
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
