export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Pesquisador",
    company: "Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT)",
    period: "Mar 2025 - Set 2025",
    location: "Brasília, DF · Híbrida",
    type: "Temporário",
    description:
      "Auditoria completa na entrega do SBRT por parceiro terceirizado, verificando cumprimento de pré-requisitos técnicos e de qualidade.",
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
    description:
      "Desenvolvimento e otimização de LLMs com Azure OpenAI, pipelines RAG, e liderança técnica em frontend e backend.",
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
    description:
      "Refatoração completa de stack MERN para TypeScript moderno, visualizações 3D e autenticação robusta.",
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
    description:
      "Liderança no desenvolvimento de aplicação multinível para gerenciamento de eventos com integração Sympla.",
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
    description:
      "Desenvolvimento de soluções em nuvem, integração com Oracle Symphony e pipelines de CI/CD com relatórios automatizados.",
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
    description:
      "Desenvolvimento de aplicativo móvel de FSM com .NET MAUI, publicação nas lojas e gestão de banco de dados.",
    highlights: [
      "Desenvolveu app móvel de FSM com .NET MAUI",
      "Otimizou serviços RESTful com .NET Core e .NET MVC",
      "Implementou testes com XUnit integrados ao Allure Reports",
      "Publicou o aplicativo na App Store e Google Play Store",
    ],
    skills: [".NET MAUI", ".NET Core", "XUnit", "SQL"],
  },
];
