import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PersonaSlider from "@/components/PersonaSlider";
import { CubeLink } from "@/components/CubeLink";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SOCIAL_LINKS, OWNER } from "@/data/social";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-start overflow-hidden">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
                    Bem-vindo ao meu portfólio
                  </p>
                  <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                    {OWNER.name}
                  </h1>
                </div>

                <p className="text-xl text-foreground/80 max-w-xl leading-relaxed">
                  Engenheiro de software apaixonado por resolver problemas complexos através da tecnologia.
                  Educador, cidadão e inovador em busca de impacto positivo.
                </p>

                <div className="flex gap-4 pt-4">
                  <CubeLink href="/projects">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                      Ver Projetos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CubeLink>
                  <a href="#contact">
                    <Button variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                      Entrar em Contato
                    </Button>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-8">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                      aria-label={link.ariaLabel}
                    >
                      <link.icon className="w-5 h-5 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Persona Slider */}
            <div className={`hidden lg:block ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <PersonaSlider />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">Scroll para explorar</p>
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Com mais de uma década de experiência em engenharia de software, tenho dedicado minha carreira
                a criar soluções inovadoras que impactam positivamente a vida das pessoas.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Além de desenvolvedor, sou educador apaixonado por compartilhar conhecimento e mentor de
                profissionais em desenvolvimento.
              </p>
              <CubeLink href="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Saiba Mais
                </Button>
              </CubeLink>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/educator-min.png"
                alt={`${OWNER.name} - Educador e Engenheiro`}
                className="rounded-xl shadow-lg max-h-[420px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter((p) => p.featured).map((project) => (
              <div
                key={project.title}
                className="card-hover bg-card border border-border rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary/40" strokeWidth={1.2} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <CubeLink href="/projects" className="link-underline text-primary text-sm font-medium">
                    Ver Projeto →
                  </CubeLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tenho interesse em oportunidades de colaboração e novos desafios. Entre em contato!
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg" asChild>
            <a href={`mailto:${OWNER.email}`}>Enviar Mensagem</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
