export interface Persona {
  image: string;
  title: string;
  description: string;
}

export const PERSONA_ROTATION_MS = 4500;

export const PERSONAS: Persona[] = [
  {
    image: "/engineer-min.png",
    title: "Engenheiro",
    description: "Desenvolvedor de software apaixonado por criar soluções inovadoras",
  },
  {
    image: "/educator-min.png",
    title: "Educador",
    description: "Mentor dedicado a compartilhar conhecimento e desenvolver talentos",
  },
  {
    image: "/citizen-min.png",
    title: "Cidadão",
    description: "Comprometido com impacto positivo na sociedade e comunidade",
  },
];
