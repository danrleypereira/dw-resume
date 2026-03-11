import { useState, useEffect } from 'react';
import { PERSONAS } from '@/data/personas';

export default function PersonaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PERSONAS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = PERSONAS[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Persona Image */}
      <div className="relative w-full max-w-[320px]">
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
        {PERSONAS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30 w-2'
            }`}
            aria-label={`Go to ${PERSONAS[index].title}`}
          />
        ))}
      </div>
    </div>
  );
}
