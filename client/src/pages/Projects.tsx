import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { CubeLink } from "@/components/CubeLink";

/**
 * Design Philosophy: Minimalismo Moderno
 * - Grid de projetos com cards elegantes
 * - Imagens de destaque e descrições detalhadas
 * - Links para GitHub e demo ao vivo
 */

export default function Projects() {
  const projects = [
    {
      title: "Aplicação de Gerenciamento de Eventos",
      description: "Plataforma multi-camadas para gerenciamento de eventos, emissão de certificados e agendamento de salas. Integração com API Sympla para sincronização de dados. Arquitetura com React (frontend), Python (lógica de negócio) e Java Spring Boot (backend).",
      technologies: ["React", "Python", "Java Spring Boot", "Sympla API", "GitHub Actions", "CI/CD"],
      image: "/engineer1013_1265.png",
      github: "https://github.com/danrleypereira",
      featured: true,
    },
    {
      title: "LabTech - Software Fabric da UDF",
      description: "Plataforma de desenvolvimento de software como serviço para a universidade. Atuei como Product Manager, refinando produtos, implementando processos estruturados e liderando equipes em tarefas desafiadoras. Foco em alinhamento com necessidades de negócio e visão futura.",
      technologies: ["Product Management", "Agile", "Team Leadership", "Process Design"],
      image: "/educator1013_1267.png",
      featured: true,
    },
    {
      title: "SAEDF - Sistema Educacional",
      description: "Projeto governamental de sistema educacional. Atuei como desenvolvedor, construindo classes Java enquanto entendia a lógica de negócio. Experiência com JPA, JSP e Servlets em ambiente corporativo.",
      technologies: ["Java", "JPA", "JSP", "Servlets", "Banco de Dados"],
      image: "/citizen1013_1266.png",
      featured: false,
    },
    {
      title: "Trinca Social Game",
      description: "Jogo sério desenvolvido para auxiliar pesquisa de mestrado com foco em educação. Contribuí no desenvolvimento frontend com JADE, enquanto apoiava o desenvolvedor backend. Emulação de jogos de cartas para propor soluções a questões sociais.",
      technologies: ["JADE", "Frontend Development", "Game Design", "Education Technology"],
      image: "/educator1013_1267.png",
      featured: false,
    },
    {
      title: "Protótipo de Monitoramento de Cisterna",
      description: "Projeto educacional desenvolvido como professor voluntário. Protótipo usando Arduino para monitoramento de nível de água em cisternas, com sensor ultrassônico e módulo Bluetooth. Combinava hardware, programação e impacto social.",
      technologies: ["Arduino", "C++", "Sensor Ultrassônico", "Bluetooth", "IoT"],
      image: "/engineer1013_1265.png",
      featured: false,
    },
    {
      title: "Gama Cidadão - Jornalismo Digital",
      description: "Portal de notícias e cidadania onde atuo como jornalista independente desde 2017. Cobertura de temas sociais, políticos e comunitários. Trabalho reconhecido com Moção de Louvor da Câmara Legislativa do Distrito Federal em 2019.",
      technologies: ["Jornalismo", "Comunicação Digital", "Pesquisa", "Cidadania"],
      image: "/citizen1013_1266.png",
      featured: false,
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
            <CubeLink href="/" className="link-underline text-sm font-medium hover:text-primary">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meus Projetos</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Uma seleção dos projetos mais interessantes que desenvolvi, demonstrando minhas habilidades 
            em diferentes tecnologias, liderança e impacto social.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-cols-2 lg:[&>:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {project.featured && (
                    <div className="inline-block">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                        PROJETO EM DESTAQUE
                      </span>
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-3">Tecnologias Utilizadas</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="text-xs bg-primary/10 text-primary px-3 py-2 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Ver no GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Quer trabalhar juntos?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tenho interesse em novos desafios, oportunidades de colaboração e projetos que gerem impacto positivo.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            Entrar em Contato
          </Button>
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
