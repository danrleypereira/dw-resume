import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight, Instagram, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import PersonaSlider from "@/components/PersonaSlider";
import { CubeLink } from "@/components/CubeLink";

/**
 * Design Philosophy: Minimalismo Moderno
 * - Tipografia ousada (Playfair Display para títulos)
 * - Espaço generoso e layout assimétrico
 * - Animações sutis (fade-in, slide-up)
 * - Paleta: Off-white, Charcoal, Azul Profundo
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">DW</div>
          <div className="flex gap-8 items-center">
            <CubeLink href="/about" className="link-underline text-sm font-medium hover:text-primary">
              Sobre
            </CubeLink>
            <CubeLink href="/projects" className="link-underline text-sm font-medium hover:text-primary">
              Projetos
            </CubeLink>
            <a href="#contact" className="link-underline text-sm font-medium hover:text-primary">
              Contato
            </a>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              CV
            </Button>
          </div>
        </div>
      </nav>

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
                    Danrley Pereira
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
                  <a
                    href="https://github.com/danrleypereira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/danrleypereira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/danrleypereira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.facebook.com/danrleywillyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
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
                alt="Danrley Pereira - Educador e Engenheiro"
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
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card-hover bg-card border border-border rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary/30 mb-2">Projeto {i}</div>
                    <p className="text-foreground/50 text-sm">Imagem em breve</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projeto Destacado {i}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Descrição breve do projeto e tecnologias utilizadas.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">TypeScript</span>
                  </div>
                  <a href="#" className="link-underline text-primary text-sm font-medium">
                    Ver Projeto →
                  </a>
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
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            Enviar Mensagem
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
