// Projects for the horizontal timeline. Text fields are localized (en/es/pt);
// org, dates and tech are language-neutral. Dates are "YYYY-MM" (or "present").
// Details are synthesized from the full CV — informative, not copy-pasted.

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
        en: "Built LangChain/LangGraph agents (a WhatsApp budget assistant and an event-driven multi-agent bus) behind a common multi-provider LLM interface.",
        es: "Construí agentes LangChain/LangGraph (un asistente de presupuesto por WhatsApp y un bus multi-agente orientado a eventos) tras una interfaz común multi-proveedor de LLM.",
        pt: "Construí agentes LangChain/LangGraph (um assistente de orçamento no WhatsApp e um barramento multiagente orientado a eventos) atrás de uma interface comum multi-provedor de LLM.",
      },
      {
        en: "Built Curupira, a reusable Rust/OIDC authentication platform (multi-tenancy, SSO, MFA) that cuts new-product setup time.",
        es: "Construí Curupira, una plataforma de autenticación Rust/OIDC reutilizable (multi-tenancy, SSO, MFA) que reduce el tiempo de arranque de nuevos productos.",
        pt: "Construí o Curupira, uma plataforma de autenticação Rust/OIDC reutilizável (multi-tenancy, SSO, MFA) que reduz o tempo de setup de novos produtos.",
      },
      {
        en: "Set up reusable foundations — payment integrations, CI/CD, and a bare-metal + hybrid-cloud stack with Terraform and Grafana observability.",
        es: "Monté bases reutilizables — integraciones de pago, CI/CD y un stack bare-metal + nube híbrida con Terraform y observabilidad con Grafana.",
        pt: "Montei fundações reutilizáveis — integrações de pagamento, CI/CD e um stack bare-metal + nuvem híbrida com Terraform e observabilidade com Grafana.",
      },
      {
        en: "Hired and mentored engineers, and lead Brasília's first Software Craftsmanship community.",
        es: "Contraté y mentoricé ingenieros, y lidero la primera comunidad de Software Craftsmanship de Brasília.",
        pt: "Contratei e mentorei engenheiros, e lidero a primeira comunidade de Software Craftsmanship de Brasília.",
      },
    ],
    tech: ["Python", "LangGraph", "Rust", "React", "Terraform"],
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
        en: "Built Snowflake data pipelines over institutional data, driving progress toward training ML models on proprietary data.",
        es: "Construí pipelines de datos en Snowflake sobre datos institucionales, avanzando hacia el entrenamiento de modelos con datos propietarios.",
        pt: "Construí pipelines de dados no Snowflake sobre dados institucionais, avançando rumo ao treinamento de modelos com dados proprietários.",
      },
      {
        en: "Co-advised an undergraduate thesis that designed a RAG system for the Brazilian judiciary (graded 9.0/10).",
        es: "Co-orienté una tesis de grado que diseñó un sistema RAG para el poder judicial brasileño (calificada 9,0/10).",
        pt: "Coorientei um TCC que projetou um sistema RAG para o judiciário brasileiro (nota 9,0/10).",
      },
      {
        en: "Ran a technical audit of a 600K+-user platform against ISO/IEC 25000 and LGPD, producing a prioritized remediation roadmap.",
        es: "Realicé una auditoría técnica de una plataforma con más de 600 mil usuarios frente a ISO/IEC 25000 y LGPD, con una hoja de ruta de correcciones priorizada.",
        pt: "Conduzi uma auditoria técnica de uma plataforma com mais de 600 mil usuários frente à ISO/IEC 25000 e LGPD, com um roteiro de correções priorizado.",
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
      en: "AI-assisted procurement automation connected to the Epicor ERP.",
      es: "Automatización de compras asistida por IA conectada al ERP de Epicor.",
      pt: "Automação de compras assistida por IA conectada ao ERP da Epicor.",
    },
    details: [
      {
        en: "Integrated Azure OpenAI and a RAG pipeline over proprietary data; used Azure Document Intelligence for structured extraction from supplier documents.",
        es: "Integré Azure OpenAI y un pipeline RAG sobre datos propietarios; usé Azure Document Intelligence para extracción estructurada de documentos de proveedores.",
        pt: "Integrei Azure OpenAI e um pipeline RAG sobre dados proprietários; usei o Azure Document Intelligence para extração estruturada de documentos de fornecedores.",
      },
      {
        en: "Designed .NET Aspire microservices with RabbitMQ event-driven processing, deployed on Kubernetes.",
        es: "Diseñé microservicios .NET Aspire con procesamiento orientado a eventos (RabbitMQ), desplegados en Kubernetes.",
        pt: "Projetei microsserviços .NET Aspire com processamento orientado a eventos (RabbitMQ), implantados em Kubernetes.",
      },
      {
        en: "Led an Angular integration portal refactor into microfrontends, with strong xUnit and end-to-end test coverage.",
        es: "Lideré la refactorización de un portal Angular a microfrontends, con sólida cobertura de pruebas xUnit y end-to-end.",
        pt: "Liderei a refatoração de um portal Angular para microfrontends, com forte cobertura de testes xUnit e end-to-end.",
      },
    ],
    tech: [".NET", "Azure OpenAI", "RabbitMQ", "Kubernetes", "Angular"],
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
        en: "Refactored a MERN app into a modern TypeScript project on Fastify, Socket.io, Redis and Typegoose.",
        es: "Refactoricé una app MERN a un proyecto TypeScript moderno sobre Fastify, Socket.io, Redis y Typegoose.",
        pt: "Refatorei um app MERN para um projeto TypeScript moderno sobre Fastify, Socket.io, Redis e Typegoose.",
      },
      {
        en: "Scaled real-time streaming with Redis and tuned MongoDB Atlas time-series for cost and performance.",
        es: "Escalé el streaming en tiempo real con Redis y ajusté las series temporales de MongoDB Atlas por costo y rendimiento.",
        pt: "Escalei o streaming em tempo real com Redis e ajustei as séries temporais do MongoDB Atlas por custo e desempenho.",
      },
      {
        en: "Secured the platform with Azure AD (ADAL) + Auth0 (OAuth2/SAML); added dark mode and a notification system.",
        es: "Aseguré la plataforma con Azure AD (ADAL) + Auth0 (OAuth2/SAML); agregué modo oscuro y un sistema de notificaciones.",
        pt: "Protegi a plataforma com Azure AD (ADAL) + Auth0 (OAuth2/SAML); adicionei modo escuro e um sistema de notificações.",
      },
      {
        en: "Built 2D/3D charts and a Three.js wellbore visualization to support real-time decisions.",
        es: "Construí gráficos 2D/3D y una visualización de pozos con Three.js para apoyar decisiones en tiempo real.",
        pt: "Construí gráficos 2D/3D e uma visualização de poços com Three.js para apoiar decisões em tempo real.",
      },
    ],
    tech: ["TypeScript", "Socket.io", "Redis", "React", "Three.js"],
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
        en: "Trained a Deep Q-Network (TensorFlow/Keras) with experience replay and a target network.",
        es: "Entrené un Deep Q-Network (TensorFlow/Keras) con experience replay y una red objetivo.",
        pt: "Treinei um Deep Q-Network (TensorFlow/Keras) com experience replay e uma rede-alvo.",
      },
      {
        en: "Engineered an 8-deck shoe simulator with Hi-Opt II card-counting encoded into the state.",
        es: "Diseñé un simulador de zapato de 8 mazos con conteo de cartas Hi-Opt II codificado en el estado.",
        pt: "Projetei um simulador de sapato de 8 baralhos com contagem de cartas Hi-Opt II codificada no estado.",
      },
      {
        en: "Ran GPU training on NVIDIA (CUDA) and AMD (ROCm) with iterative fine-tuning.",
        es: "Ejecuté entrenamiento en GPU NVIDIA (CUDA) y AMD (ROCm) con ajuste fino iterativo.",
        pt: "Executei treinamento em GPU NVIDIA (CUDA) e AMD (ROCm) com ajuste fino iterativo.",
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
        en: "Designed an ETL system with layered responsibilities; SQLAlchemy with rigorous pytest coverage of the transform/load layers.",
        es: "Diseñé un sistema ETL con responsabilidades por capas; SQLAlchemy con cobertura rigurosa de pytest en las capas de transform/load.",
        pt: "Projetei um sistema ETL com responsabilidades em camadas; SQLAlchemy com cobertura rigorosa de pytest nas camadas de transform/load.",
      },
      {
        en: "Automated the extraction layer with Selenium and Behave/Gherkin.",
        es: "Automaticé la capa de extracción con Selenium y Behave/Gherkin.",
        pt: "Automatizei a camada de extração com Selenium e Behave/Gherkin.",
      },
      {
        en: "Moved delivery to Continuous Delivery on GitHub Actions (weekly → daily), lifting the SLA from 70% to 95%.",
        es: "Llevé la entrega a Continuous Delivery con GitHub Actions (semanal → diaria), subiendo el SLA del 70% al 95%.",
        pt: "Levei a entrega a Continuous Delivery com GitHub Actions (semanal → diária), elevando o SLA de 70% para 95%.",
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
        en: "Built transport, delivery and yard-management software focused on truck and fleet operations.",
        es: "Construí software de gestión de transporte, entrega y patio centrado en operaciones de camiones y flota.",
        pt: "Construí software de gestão de transporte, entrega e pátio focado em operações de caminhões e frota.",
      },
      {
        en: "Led a vehicle-inspection management system and an ERP desktop platform (Electron) on PostgreSQL.",
        es: "Lideré un sistema de gestión de inspección de vehículos y una plataforma ERP de escritorio (Electron) sobre PostgreSQL.",
        pt: "Liderei um sistema de gestão de inspeção de veículos e uma plataforma ERP desktop (Electron) sobre PostgreSQL.",
      },
      {
        en: "Built a commercial page generator with a PCI-compliant checkout; plans updated from the database without redeploys.",
        es: "Construí un generador de páginas comerciales con checkout compatible con PCI; los planes se actualizaban desde la base de datos sin re-despliegues.",
        pt: "Construí um gerador de páginas comerciais com checkout compatível com PCI; os planos se atualizavam a partir do banco sem novos deploys.",
      },
    ],
    tech: ["C#/.NET", "React", "Electron", "PostgreSQL"],
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
        en: "Helped the Ministry of Health's pharmaceutical department manage medicine distribution across 5,000+ municipalities.",
        es: "Ayudé al departamento farmacéutico del Ministerio de Salud a gestionar la distribución de medicamentos en más de 5.000 municipios.",
        pt: "Ajudei o departamento farmacêutico do Ministério da Saúde a gerir a distribuição de medicamentos em mais de 5.000 municípios.",
      },
      {
        en: "Built the frontend and integrated REST APIs and microservices to surface data and simplify task execution.",
        es: "Construí el frontend e integré APIs REST y microservicios para exponer datos y simplificar la ejecución de tareas.",
        pt: "Construí o frontend e integrei APIs REST e microsserviços para expor dados e simplificar a execução de tarefas.",
      },
      {
        en: "Reduced fraud and streamlined service integration at national scale.",
        es: "Reduje el fraude y optimicé la integración de servicios a escala nacional.",
        pt: "Reduzi fraudes e otimizei a integração de serviços em escala nacional.",
      },
    ],
    tech: ["Angular", "Python", "Flask", "PostgreSQL"],
  },
  {
    id: "clearsale",
    org: "ClearSale",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
      pt: "Engenheiro de Software",
    },
    start: "2021-11",
    end: "2022-03",
    summary: {
      en: "High-performance anti-fraud microservices.",
      es: "Microservicios antifraude de alto rendimiento.",
      pt: "Microsserviços antifraude de alto desempenho.",
    },
    details: [
      {
        en: "Built and tested anti-fraud microservices in C#/.NET; optimized large-scale queries with Dapper.",
        es: "Construí y probé microservicios antifraude en C#/.NET; optimicé consultas a gran escala con Dapper.",
        pt: "Construí e testei microsserviços antifraude em C#/.NET; otimizei consultas em larga escala com Dapper.",
      },
      {
        en: "Designed DB views, triggers and stored procedures for real-time detection and alerting.",
        es: "Diseñé vistas, triggers y procedimientos almacenados para detección y alertas en tiempo real.",
        pt: "Projetei views, triggers e stored procedures para detecção e alertas em tempo real.",
      },
    ],
    tech: ["C#/.NET", "ASP.NET", "Dapper", "SQL Server", "Azure Service Bus"],
  },
  {
    id: "labtech",
    org: "LabTech, UDF",
    role: {
      en: "Technical Lead & Researcher",
      es: "Líder Técnico e Investigador",
      pt: "Líder Técnico e Pesquisador",
    },
    start: "2023-01",
    end: "2023-12",
    summary: {
      en: "Multi-tier event-management platform.",
      es: "Plataforma multinivel de gestión de eventos.",
      pt: "Plataforma multicamada de gestão de eventos.",
    },
    details: [
      {
        en: "Led a multi-tier platform (React frontend, Python logic, Spring Boot data) with RabbitMQ and Kubernetes.",
        es: "Lideré una plataforma multinivel (React, Python, Spring Boot) con RabbitMQ y Kubernetes.",
        pt: "Liderei uma plataforma multicamada (React, Python, Spring Boot) com RabbitMQ e Kubernetes.",
      },
      {
        en: "Organized teams by technology and mentored young professionals into the industry.",
        es: "Organicé equipos por tecnología y mentoricé a jóvenes profesionales hacia la industria.",
        pt: "Organizei times por tecnologia e mentorei jovens profissionais rumo à indústria.",
      },
    ],
    tech: ["React", "Python", "Spring Boot", "RabbitMQ", "Kubernetes"],
  },
  {
    id: "layers",
    org: "Layers Education",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
      pt: "Engenheiro de Software",
    },
    start: "2022-03",
    end: "2022-09",
    summary: {
      en: "Backend & microfrontends; performance and security.",
      es: "Backend y microfrontends; rendimiento y seguridad.",
      pt: "Backend e microfrontends; desempenho e segurança.",
    },
    details: [
      {
        en: "Maintained backend services and white-label microfrontends; cut MongoDB query times from 1.3s to 0.6s.",
        es: "Mantuve servicios backend y microfrontends white-label; reduje consultas de MongoDB de 1,3s a 0,6s.",
        pt: "Mantive serviços backend e microfrontends white-label; reduzi consultas do MongoDB de 1,3s para 0,6s.",
      },
      {
        en: "Built a BigQuery data lake for ETL and hardened security to OWASP standards.",
        es: "Construí un data lake en BigQuery para ETL y reforcé la seguridad según OWASP.",
        pt: "Construí um data lake no BigQuery para ETL e reforcei a segurança conforme OWASP.",
      },
    ],
    tech: ["Node.js", "Vue", "MongoDB", "BigQuery", "GCP"],
  },
  {
    id: "consultmidia",
    org: "ConsultMídia / Bank of Brasília",
    role: {
      en: "Full-Stack Developer & BPM",
      es: "Desarrollador Full-Stack y BPM",
      pt: "Desenvolvedor Full-Stack e BPM",
    },
    start: "2020-04",
    end: "2021-01",
    summary: {
      en: "Workflow modernization for a bank (Camunda BPM).",
      es: "Modernización de flujos para un banco (Camunda BPM).",
      pt: "Modernização de fluxos para um banco (Camunda BPM).",
    },
    details: [
      {
        en: "Built AngularJS/Spring Boot interfaces and REST APIs on Camunda to modernize the Bank of Brasília's workflows.",
        es: "Construí interfaces AngularJS/Spring Boot y APIs REST sobre Camunda para modernizar los flujos del Banco de Brasília.",
        pt: "Construí interfaces AngularJS/Spring Boot e APIs REST sobre Camunda para modernizar os fluxos do Banco de Brasília.",
      },
      {
        en: "Integrated Alfresco (document management) and automated performance tests (JMeter, Selenium).",
        es: "Integré Alfresco (gestión documental) y automaticé pruebas de rendimiento (JMeter, Selenium).",
        pt: "Integrei o Alfresco (gestão documental) e automatizei testes de desempenho (JMeter, Selenium).",
      },
    ],
    tech: ["AngularJS", "Java", "Spring Boot", "Camunda", "Alfresco"],
  },
  {
    id: "transoft",
    org: "Transoft",
    role: {
      en: "Full-Stack & Mobile Developer",
      es: "Desarrollador Full-Stack y Móvil",
      pt: "Desenvolvedor Full-Stack e Mobile",
    },
    start: "2021-02",
    end: "2021-10",
    summary: {
      en: "Fleet sensor/camera and staff-management apps.",
      es: "Apps de sensores/cámaras de flota y gestión de personal.",
      pt: "Apps de sensores/câmeras de frota e gestão de pessoal.",
    },
    details: [
      {
        en: "Revamped an application managing sensors and cameras for bus fleets (Angular, Laravel).",
        es: "Renové una aplicación de sensores y cámaras para flotas de autobuses (Angular, Laravel).",
        pt: "Renovei uma aplicação de sensores e câmeras para frotas de ônibus (Angular, Laravel).",
      },
      {
        en: "Built a mobile staff-management app integrated with Oracle (Ionic, Angular).",
        es: "Construí una app móvil de gestión de personal integrada con Oracle (Ionic, Angular).",
        pt: "Construí um app móvel de gestão de pessoal integrado ao Oracle (Ionic, Angular).",
      },
    ],
    tech: ["Angular", "Ionic", "Laravel", "PHP", "Oracle"],
  },
];
