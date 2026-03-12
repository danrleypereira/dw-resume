import { Code2, BookOpen, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { OWNER } from "@/data/social";
import linksData from "@/data/links.json";
import { EXPERIENCES } from "@/data/experiences";
import { SKILLS } from "@/data/skills";
import { CERTIFICATIONS, LANGUAGES } from "@/data/certifications";

export default function About() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  useEffect(() => { document.title = "Sobre Mim | Danrley Pereira"; }, []);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
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
                  {EXPERIENCES.map((exp, i) => {
                    const expKey = `${exp.company}-${exp.title}`;
                    const isExpanded = expandedCards.has(i);
                    return (
                      <div key={expKey} className="card-accent bg-card border border-border rounded-lg p-6">
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
                              {exp.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                            {exp.skills && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {exp.skills.map((skill) => (
                                  <span
                                    key={skill}
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
                          aria-expanded={isExpanded}
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
                    src={linksData.profile.photo}
                    alt={OWNER.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Habilidades Técnicas</h3>
                  <div className="space-y-6">
                    {SKILLS.map((skill) => (
                      <div key={skill.category}>
                        <h4 className="font-bold text-primary mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <span
                              key={item}
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
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.name}>✓ {cert.name}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3">Idiomas</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {LANGUAGES.map((lang) => (
                      <li key={lang.name}>{lang.flag} {lang.name} - {lang.level}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
