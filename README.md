# DW Resume - Danrley Pereira

Portfólio/currículo profissional interativo com transições 3D em cubo entre páginas. Construído com React 19, TypeScript, TailwindCSS 4 e Vite.

## Stack

- **React 19** + TypeScript
- **TailwindCSS 4** + shadcn/ui
- **Vite 7** (dev e build)
- **Wouter** (routing)
- **Framer Motion** (animações)
- **Express** (server-side)

## Estrutura

```
client/
├── src/
│   ├── pages/           # Home, About, Projects, NotFound
│   ├── components/
│   │   ├── CubeTransition.tsx  # Transição 3D entre páginas
│   │   ├── CubeFace.tsx        # Face individual do cubo
│   │   ├── CubeLink.tsx        # Link com animação de cubo
│   │   ├── PersonaSlider.tsx   # Slider de personas
│   │   ├── Map.tsx             # Componente de mapa
│   │   ├── ErrorBoundary.tsx   # Error boundary
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── contexts/        # ThemeContext
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   ├── App.tsx          # Rotas e providers
│   ├── const.ts         # Constantes
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
server/                  # Express server
shared/                  # Tipos compartilhados
```

## Setup

```bash
git clone https://github.com/danrleypereira/dw-resume.git
cd dw-resume
pnpm install
pnpm dev
```

Acesse `http://localhost:5173`

## Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção (client + server) |
| `pnpm start` | Inicia servidor de produção |
| `pnpm preview` | Preview da build |
| `pnpm check` | Verificação de tipos TypeScript |
| `pnpm format` | Formatação com Prettier |

## Funcionalidades

- **Transição 3D em cubo** entre as páginas Home, About e Projects
- **Rotação aleatória** do cubo nas transições
- **Paleta monocromática** (preto e branco)
- **Persona Slider** na página inicial
- **Seção de experiência** profissional
- **Design responsivo**

## Páginas

- `/` — Home com hero section e persona slider
- `/about` — Trajetória, experiências e habilidades
- `/projects` — Galeria de projetos

## Licença

MIT

## Autor

**Danrley Pereira**
- GitHub: [@danrleypereira](https://github.com/danrleypereira)
- LinkedIn: [Danrley Pereira](https://linkedin.com/in/danrleypereira)
