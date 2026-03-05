# DW Portfolio - Danrley Pereira

Um portfólio profissional moderno e responsivo para Danrley Pereira, engenheiro de software, educador e cidadão. Construído com React 19, TypeScript, TailwindCSS e Vite.

## 🎨 Design Philosophy

**Minimalismo Moderno com Tipografia Ousada**

- Tipografia contrastante: Playfair Display (títulos) + Inter (corpo)
- Paleta monocromática elegante: Off-white, Charcoal, Azul Profundo
- Layout assimétrico com espaço generoso
- Animações sutis que demonstram atenção aos detalhes
- Responsivo e otimizado para SEO

## 🚀 Stack Tecnológico

- **Frontend:** React 19, TypeScript
- **Styling:** TailwindCSS 4, shadcn/ui
- **Build Tool:** Vite
- **Routing:** Wouter
- **Icons:** Lucide React
- **Hosting:** Firebase Hosting (ou similar)

## 📁 Estrutura do Projeto

```
client/
├── public/              # Arquivos estáticos
├── src/
│   ├── pages/          # Páginas principais (Home, About, Projects)
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # React contexts (ThemeContext)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilitários e helpers
│   ├── App.tsx         # Componente raiz com rotas
│   ├── main.tsx        # Ponto de entrada
│   └── index.css       # Estilos globais e design tokens
├── index.html          # Template HTML
└── package.json        # Dependências

server/                 # Placeholder para compatibilidade
shared/                 # Tipos compartilhados
```

## 🛠️ Setup Local

### Pré-requisitos
- Node.js 18+ e npm/pnpm
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/danrleypereira/dw-portfolio.git
cd dw-portfolio
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Páginas Disponíveis

- **Home** (`/`) - Página inicial com hero section e preview de seções
- **About** (`/about`) - Informações detalhadas, experiência e habilidades
- **Projects** (`/projects`) - Galeria de projetos com detalhes e links

## 🎯 Funcionalidades Principais

### Home
- Hero section com background customizado
- Navegação sticky
- Links para redes sociais (GitHub, LinkedIn, Email)
- Preview das seções principais
- CTA (Call-to-Action) para contato

### About
- Trajetória profissional detalhada
- Experiências listadas com período e descrição
- Habilidades técnicas organizadas por categoria
- Valores e princípios
- Sidebar com informações adicionais

### Projects
- Grid de projetos com imagens
- Descrições detalhadas
- Tecnologias utilizadas
- Links para GitHub e demo ao vivo
- Projetos em destaque

## 🎨 Customização

### Cores
Edite as variáveis CSS em `client/src/index.css`:
```css
:root {
  --primary: #0D47A1;           /* Azul Profundo */
  --background: #F9F7F4;        /* Off-white */
  --foreground: #2C2C2C;        /* Charcoal */
  /* ... outras cores */
}
```

### Tipografia
As fontes estão importadas em `client/index.html`:
- Display: Playfair Display (títulos)
- Body: Inter (corpo de texto)

### Conteúdo
Atualize o conteúdo nas páginas:
- `client/src/pages/Home.tsx` - Página inicial
- `client/src/pages/About.tsx` - Sobre e experiências
- `client/src/pages/Projects.tsx` - Projetos

## 🚀 Build e Deploy

### Build para produção
```bash
pnpm build
# ou
npm run build
```

### Preview da build
```bash
pnpm preview
# ou
npm run preview
```

### Deploy no Firebase Hosting
```bash
firebase deploy
```

## ✅ Checklist de Melhorias Implementadas

Com base na análise anterior, as seguintes melhorias foram implementadas:

- [x] **Links Sociais Corrigidos** - GitHub e outras redes sociais apontam para os perfis corretos
- [x] **Menu de Navegação Funcional** - Navegação clara e responsiva
- [x] **Conteúdo Completo** - Seções "Sobre", "Projetos" e "Contato" com informações detalhadas
- [x] **SEO Otimizado** - Meta tags, títulos descritivos e estrutura semântica
- [x] **Design Moderno** - Tipografia ousada, paleta elegante, animações sutis
- [x] **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- [x] **Performance** - Vite para build rápido, imagens otimizadas
- [x] **Acessibilidade** - Atributos alt, contraste adequado, navegação por teclado

## 📊 SEO

O site inclui:
- Meta tags otimizadas (title, description, keywords)
- Open Graph tags para compartilhamento em redes sociais
- Twitter Card tags
- Estrutura semântica com headings apropriados
- Imagens com atributos alt descritivos
- URLs amigáveis

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Build para produção
- `pnpm preview` - Preview da build
- `pnpm check` - Verifica tipos TypeScript
- `pnpm format` - Formata código com Prettier

## 📄 Licença

MIT

## 👤 Autor

**Danrley Pereira**
- GitHub: [@danrleypereira](https://github.com/danrleypereira)
- LinkedIn: [Danrley Pereira](https://linkedin.com/in/danrleypereira)
- Email: contact@danrleypereira.com

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ usando React, TailwindCSS e Vite.
