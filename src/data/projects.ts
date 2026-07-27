// Projects for the horizontal timeline. Text fields are localized (en/es/pt);
// org, dates and tech are language-neutral. Dates are "YYYY-MM" (or "present").

export type Lang = "en" | "es" | "pt";
export type L = Record<Lang, string>;

export interface Project {
  id: string;
  org: string;
  role: L;
  start: string;
  end: string; // "YYYY-MM" or "present"
  summary: L;
  details: L[];
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "dwcorp",
    org: "DW Corp",
    role: {
      en: "Founder & AI Engineer",
      es: "Fundador e Ingeniero de IA",
      pt: "Fundador e Engenheiro de IA",
    },
    start: "2022-09",
    end: "present",
    summary: {
      en: "My company — LLM agents and reusable product foundations.",
      es: "Mi empresa — agentes LLM y bases de producto reutilizables.",
      pt: "Minha empresa — agentes LLM e fundações de produto reutilizáveis.",
    },
    details: [
      {
        en: "LangChain/LangGraph agents behind a multi-provider LLM interface.",
        es: "Agentes LangChain/LangGraph tras una interfaz multi-proveedor de LLM.",
        pt: "Agentes LangChain/LangGraph atrás de uma interface multi-provedor de LLM.",
      },
      {
        en: "Reusable auth, payments, CI/CD, and cloud/on-prem infrastructure.",
        es: "Auth, pagos, CI/CD e infraestructura nube/on-premise reutilizables.",
        pt: "Auth, pagamentos, CI/CD e infraestrutura nuvem/on-premise reutilizáveis.",
      },
    ],
    tech: ["Python", "LangGraph", "React", "Terraform"],
  },
  {
    id: "ibict",
    org: "Ibict / MCTI",
    role: { en: "Researcher", es: "Investigador", pt: "Pesquisador" },
    start: "2025-03",
    end: "present",
    summary: {
      en: "Data pipelines and RAG research at a federal institute.",
      es: "Pipelines de datos e investigación RAG en un instituto federal.",
      pt: "Pipelines de dados e pesquisa em RAG em um instituto federal.",
    },
    details: [
      {
        en: "Built Snowflake data pipelines over institutional data.",
        es: "Construí pipelines de datos en Snowflake sobre datos institucionales.",
        pt: "Construí pipelines de dados no Snowflake sobre dados institucionais.",
      },
      {
        en: "Co-advised a RAG thesis for the Brazilian judiciary (9.0/10).",
        es: "Co-orienté una tesis RAG para el poder judicial brasileño (9,0/10).",
        pt: "Coorientei um TCC de RAG para o judiciário brasileiro (9,0/10).",
      },
    ],
    tech: ["Python", "Snowflake", "RAG", "FastAPI"],
  },
  {
    id: "epicor",
    org: "Epicor",
    role: {
      en: "Senior Software Engineer",
      es: "Ingeniero de Software Senior",
      pt: "Engenheiro de Software Sênior",
    },
    start: "2023-11",
    end: "2025-03",
    summary: {
      en: "AI-assisted procurement automation integrated with the Epicor ERP.",
      es: "Automatización de compras asistida por IA integrada con el ERP de Epicor.",
      pt: "Automação de compras assistida por IA integrada ao ERP da Epicor.",
    },
    details: [
      {
        en: "Integrated Azure OpenAI and a RAG pipeline over proprietary data.",
        es: "Integré Azure OpenAI y un pipeline RAG sobre datos propietarios.",
        pt: "Integrei Azure OpenAI e um pipeline RAG sobre dados proprietários.",
      },
      {
        en: ".NET Aspire microservices with RabbitMQ event-driven processing.",
        es: "Microservicios .NET Aspire con procesamiento orientado a eventos (RabbitMQ).",
        pt: "Microsserviços .NET Aspire com processamento orientado a eventos (RabbitMQ).",
      },
    ],
    tech: [".NET", "Azure OpenAI", "RabbitMQ", "Kubernetes"],
  },
  {
    id: "subsurface",
    org: "SubSurface Dynamics",
    role: {
      en: "Senior Full-Stack Consultant",
      es: "Consultor Full-Stack Senior",
      pt: "Consultor Full-Stack Sênior",
    },
    start: "2024-01",
    end: "2024-06",
    summary: {
      en: "Real-time operational monitoring for thousands of users.",
      es: "Monitoreo operativo en tiempo real para miles de usuarios.",
      pt: "Monitoramento operacional em tempo real para milhares de usuários.",
    },
    details: [
      {
        en: "TypeScript, Fastify, Socket.io + Redis multi-node broadcast.",
        es: "TypeScript, Fastify, Socket.io + Redis multinodo.",
        pt: "TypeScript, Fastify, Socket.io + Redis multinó.",
      },
      {
        en: "3D wellbore visualization with Three.js.",
        es: "Visualización 3D de pozos con Three.js.",
        pt: "Visualização 3D de poços com Three.js.",
      },
    ],
    tech: ["TypeScript", "Socket.io", "Redis", "React"],
  },
  {
    id: "jackblack",
    org: "jackBlack",
    role: {
      en: "Personal Project",
      es: "Proyecto Personal",
      pt: "Projeto Pessoal",
    },
    start: "2024-01",
    end: "2025-06",
    summary: {
      en: "Deep RL agent that learns Blackjack by self-play.",
      es: "Agente de RL profundo que aprende Blackjack por auto-juego.",
      pt: "Agente de RL profundo que aprende Blackjack por auto-jogo.",
    },
    details: [
      {
        en: "Deep Q-Network in TensorFlow/Keras with experience replay.",
        es: "Deep Q-Network en TensorFlow/Keras con experience replay.",
        pt: "Deep Q-Network em TensorFlow/Keras com experience replay.",
      },
      {
        en: "GPU training on NVIDIA (CUDA) and AMD (ROCm).",
        es: "Entrenamiento en GPU NVIDIA (CUDA) y AMD (ROCm).",
        pt: "Treinamento em GPU NVIDIA (CUDA) e AMD (ROCm).",
      },
    ],
    tech: ["TensorFlow", "Python", "CUDA", "ROCm"],
  },
  {
    id: "dado",
    org: "Dado Global",
    role: {
      en: "Data & DevOps Engineer",
      es: "Ingeniero de Datos y DevOps",
      pt: "Engenheiro de Dados e DevOps",
    },
    start: "2021-12",
    end: "2023-04",
    summary: {
      en: "Python ETL platform; improved delivery SLA from 70% to 95%.",
      es: "Plataforma ETL en Python; mejoré el SLA de entrega del 70% al 95%.",
      pt: "Plataforma ETL em Python; melhorei o SLA de entrega de 70% para 95%.",
    },
    details: [
      {
        en: "SQLAlchemy with rigorous pytest coverage.",
        es: "SQLAlchemy con cobertura rigurosa de pytest.",
        pt: "SQLAlchemy com cobertura rigorosa de pytest.",
      },
      {
        en: "Continuous Delivery on GitHub Actions (weekly → daily).",
        es: "Entrega continua con GitHub Actions (semanal → diaria).",
        pt: "Entrega contínua com GitHub Actions (semanal → diária).",
      },
    ],
    tech: ["Python", "SQLAlchemy", "Pytest", "GitHub Actions"],
  },
  {
    id: "compuletra",
    org: "Compuletra",
    role: {
      en: "Full-Stack Engineer",
      es: "Ingeniero Full-Stack",
      pt: "Engenheiro Full-Stack",
    },
    start: "2020-07",
    end: "2021-08",
    summary: {
      en: "Logistics: transport, delivery and yard management.",
      es: "Logística: gestión de transporte, entrega y patio.",
      pt: "Logística: gestão de transporte, entrega e pátio.",
    },
    details: [
      {
        en: "Truck/fleet and vehicle-inspection systems.",
        es: "Sistemas de flota e inspección de vehículos.",
        pt: "Sistemas de frota e inspeção de veículos.",
      },
      {
        en: "ERP desktop platform on PostgreSQL.",
        es: "Plataforma ERP de escritorio en PostgreSQL.",
        pt: "Plataforma ERP desktop em PostgreSQL.",
      },
    ],
    tech: ["C#/.NET", "React", "PostgreSQL", "Electron"],
  },
  {
    id: "saude",
    org: "Ministry of Health / USP",
    role: {
      en: "Platform Developer",
      es: "Desarrollador de Plataforma",
      pt: "Desenvolvedor de Plataforma",
    },
    start: "2019-06",
    end: "2020-07",
    summary: {
      en: "Medicine distribution across 5,000+ municipalities.",
      es: "Distribución de medicamentos en más de 5.000 municipios.",
      pt: "Distribuição de medicamentos em mais de 5.000 municípios.",
    },
    details: [
      {
        en: "Frontend and REST integration to reduce fraud.",
        es: "Frontend e integración REST para reducir el fraude.",
        pt: "Frontend e integração REST para reduzir fraude.",
      },
    ],
    tech: ["Angular", "Python", "Flask", "PostgreSQL"],
  },
];
