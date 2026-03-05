import { useState, useEffect } from 'react';

/**
 * Componente que exibe as 3 personas: Engenheiro, Educador, Cidadão
 * Rotaciona automaticamente a cada 4.5 segundos
 */

const personas = [
  {
    image: '/engineer-min.png',
    title: 'Engenheiro',
    description: 'Desenvolvedor de software apaixonado por criar soluções inovadoras',
  },
  {
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663332801415/lummaKlVKDVfBzZo.png',
    title: 'Educador',
    description: 'Mentor dedicado a compartilhar conhecimento e desenvolver talentos',
  },
  {
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663332801415/ETHhCrqxYLLucYjU.png',
    title: 'Cidadão',
    description: 'Comprometido com impacto positivo na sociedade e comunidade',
  },
];

export default function PersonaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % personas.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = personas[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Persona Image */}
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
        <img
          src={current.image}
          alt={current.title}
          className="relative w-full h-auto rounded-2xl shadow-xl transition-all duration-500"
        />
      </div>

      {/* Persona Info */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary transition-all duration-500">
          {current.title}
        </h2>
        <p className="text-lg text-foreground/80 max-w-md transition-all duration-500">
          {current.description}
        </p>
      </div>

      {/* Indicators */}
      <div className="flex gap-2">
        {personas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30 w-2'
            }`}
            aria-label={`Go to ${personas[index].title}`}
          />
        ))}
      </div>
    </div>
  );
}
