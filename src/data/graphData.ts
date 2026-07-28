// Interactive Habilidades graph taxonomy — i18n (en/es/pt).
// Tiers revealed progressively: role -> domain -> (sub-domain) -> skill -> base.
// Multi-parent DAG, so shared tools/languages repeat across the areas that use
// them. Faithful to the tools in Danrley's CV, plus adjacent ecosystem tools.

export type Lang = "en" | "es" | "pt";
export type L = Record<Lang, string>;

export type Tier = "role" | "domain" | "skill" | "base";

export interface GraphNode {
  id: string;
  label: L;
  tier: Tier;
  kind?: string;
  parents?: string[];
  description?: L;
  level?: number;
}

const u = (x: string): L => ({ en: x, es: x, pt: x });
const tl = (en: string, es: string, pt: string): L => ({ en, es, pt });
type In = string | L;
const toL = (x: In): L => (typeof x === "string" ? u(x) : x);

const R = (id: string, label: L, description?: L): GraphNode => ({ id, label, tier: "role", kind: "role", description });
const D = (id: string, label: L, parents: string[], description?: L): GraphNode => ({ id, label, tier: "domain", kind: "domain", parents, description });
const S = (id: string, label: In, kind: string, parents: string[], level?: number, description?: In): GraphNode => ({ id, label: toL(label), tier: "skill", kind, parents, level, description: description ? toL(description) : undefined });
const B = (id: string, label: In, kind: string, parents: string[]): GraphNode => ({ id, label: toL(label), tier: "base", kind, parents });

/* ============================================================ ROLES */
const roles: GraphNode[] = [
  R("ai", tl("AI & ML Engineer", "Ingeniero de IA y ML", "Engenheiro de IA e ML"), tl("LLM agents, RAG and machine learning end to end.", "Agentes LLM, RAG y machine learning de extremo a extremo.", "Agentes LLM, RAG e machine learning de ponta a ponta.")),
  R("backend", tl("Backend Engineer", "Ingeniero Backend", "Engenheiro Backend"), tl("APIs, services, messaging, ORMs and architecture.", "APIs, servicios, mensajería, ORMs y arquitectura.", "APIs, serviços, mensageria, ORMs e arquitetura.")),
  R("data", tl("Data Engineer", "Ingeniero de Datos", "Engenheiro de Dados"), tl("Databases, warehouses, search and ETL pipelines.", "Bases de datos, warehouses, búsqueda y pipelines ETL.", "Bancos de dados, warehouses, busca e pipelines ETL.")),
  R("frontend", tl("Frontend Engineer", "Ingeniero Frontend", "Engenheiro Frontend"), tl("Web and mobile interfaces.", "Interfaces web y móviles.", "Interfaces web e mobile.")),
  R("platform", tl("Platform & DevOps", "Plataforma y DevOps", "Plataforma e DevOps"), tl("Containers, CI/CD, IaC, cloud and CLI.", "Contenedores, CI/CD, IaC, nube y CLI.", "Contêineres, CI/CD, IaC, nuvem e CLI.")),
  R("sre", tl("SRE / Reliability", "SRE / Confiabilidad", "SRE / Confiabilidade"), tl("Observability, reliability and security.", "Observabilidad, confiabilidad y seguridad.", "Observabilidade, confiabilidade e segurança.")),
  R("sdet", tl("SDET & Quality", "SDET y Calidad", "SDET e Qualidade"), tl("Testing, automation and Software Craftsmanship.", "Pruebas, automatización y Software Craftsmanship.", "Testes, automação e Software Craftsmanship.")),
  R("soft", tl("Soft Skills & Leadership", "Habilidades Blandas y Liderazgo", "Soft Skills e Liderança"), tl("Communication, leadership, mindset and product.", "Comunicación, liderazgo, mentalidad y producto.", "Comunicação, liderança, mentalidade e produto.")),
];

/* ========================================================== DOMAINS */
const domains: GraphNode[] = [
  // AI
  D("ai-llm", tl("LLM & Agents", "LLM y Agentes", "LLM e Agentes"), ["ai"]),
  D("ai-vector", tl("Vector & Retrieval", "Vectores y Recuperación", "Vetores e Recuperação"), ["ai"]),
  D("ai-ml", u("Machine Learning"), ["ai"]),
  D("ai-libs", tl("Data Science Libraries", "Librerías de Data Science", "Bibliotecas de Data Science"), ["ai", "data"]),
  D("ai-platforms", tl("AI Platforms", "Plataformas de IA", "Plataformas de IA"), ["ai"]),
  // Backend
  D("be-python", tl("Python Frameworks", "Frameworks Python", "Frameworks Python"), ["backend"]),
  D("be-dotnet", u(".NET"), ["backend"]),
  D("be-node", u("Node.js"), ["backend"]),
  D("be-jvm", tl("JVM & Others", "JVM y Otros", "JVM e Outros"), ["backend"]),
  D("be-api", tl("API Design", "Diseño de APIs", "Design de APIs"), ["backend"]),
  D("be-messaging", tl("Messaging & Streaming", "Mensajería y Streaming", "Mensageria e Streaming"), ["backend"]),
  D("be-orm", tl("ORMs & Data Access", "ORMs y Acceso a Datos", "ORMs e Acesso a Dados"), ["backend", "data"]),
  D("be-arch", tl("Architecture & Microservices", "Arquitectura y Microservicios", "Arquitetura e Microsserviços"), ["backend"]),
  D("be-arch-micro", tl("Microservices", "Microservicios", "Microsserviços"), ["be-arch"]),
  D("be-arch-patterns", tl("Patterns & Styles", "Patrones y Estilos", "Padrões e Estilos"), ["be-arch"]),
  D("be-auth", tl("Auth & Identity", "Auth e Identidad", "Auth e Identidade"), ["backend", "sre"]),
  D("be-auth-proto", tl("Protocols", "Protocolos", "Protocolos"), ["be-auth"]),
  D("be-auth-prov", tl("Providers", "Proveedores", "Provedores"), ["be-auth"]),
  D("be-payments", tl("Payments & Integrations", "Pagos e Integraciones", "Pagamentos e Integrações"), ["backend"]),
  D("be-lang", tl("Languages", "Lenguajes", "Linguagens"), ["backend"]),
  // Data
  D("data-rel", tl("Relational Databases", "Bases de Datos Relacionales", "Bancos Relacionais"), ["data"]),
  D("data-nosql", tl("NoSQL & Cache", "NoSQL y Caché", "NoSQL e Cache"), ["data"]),
  D("data-warehouse", tl("Warehouse & Lake", "Warehouse y Lake", "Warehouse e Lake"), ["data"]),
  D("data-etl", tl("ETL & Processing", "ETL y Procesamiento", "ETL e Processamento"), ["data"]),
  D("data-search", tl("Search & Analytics", "Búsqueda y Analítica", "Busca e Analytics"), ["data", "sre"]),
  D("data-tools", tl("DB Tools", "Herramientas de BD", "Ferramentas de BD"), ["data"]),
  // Frontend
  D("fe-frameworks", tl("Frameworks", "Frameworks", "Frameworks"), ["frontend"]),
  D("fe-mobile", tl("Mobile & Desktop", "Móvil y Escritorio", "Mobile e Desktop"), ["frontend"]),
  D("fe-state", tl("State Management", "Gestión de Estado", "Gerência de Estado"), ["frontend"]),
  D("fe-ui", tl("UI & Visualization", "UI y Visualización", "UI e Visualização"), ["frontend"]),
  D("fe-lang", tl("Languages & Markup", "Lenguajes y Marcado", "Linguagens e Marcação"), ["frontend"]),
  // Platform
  D("pf-containers", tl("Containers & Orchestration", "Contenedores y Orquestación", "Contêineres e Orquestração"), ["platform"]),
  D("pf-cicd", tl("CI/CD", "CI/CD", "CI/CD"), ["platform"]),
  D("pf-iac", tl("Infrastructure as Code", "Infraestructura como Código", "Infraestrutura como Código"), ["platform"]),
  D("pf-cloud", tl("Cloud", "Nube", "Nuvem"), ["platform"]),
  D("pf-cli", tl("CLI & Linux Admin", "CLI y Admin. Linux", "CLI e Admin. Linux"), ["platform"]),
  D("cloud-aws", u("AWS"), ["pf-cloud"]),
  D("aws-compute", tl("Compute", "Cómputo", "Computação"), ["cloud-aws"]),
  D("aws-data", tl("Data & Storage", "Datos y Almacenamiento", "Dados e Armazenamento"), ["cloud-aws"]),
  D("aws-integration", tl("Integration", "Integración", "Integração"), ["cloud-aws"]),
  D("aws-ops", tl("Security & Ops", "Seguridad y Ops", "Segurança e Ops"), ["cloud-aws"]),
  D("cloud-azure", u("Azure"), ["pf-cloud"]),
  D("cloud-gcp", u("GCP"), ["pf-cloud"]),
  D("cloud-other", tl("Other Cloud", "Otras Nubes", "Outras Nuvens"), ["pf-cloud"]),
  // SRE
  D("sre-obs", tl("Observability", "Observabilidad", "Observabilidade"), ["sre"]),
  D("sre-reliability", tl("Reliability", "Confiabilidad", "Confiabilidade"), ["sre"]),
  D("sre-security", tl("Security", "Seguridad", "Segurança"), ["sre"]),
  // SDET
  D("sdet-unit", tl("Unit & Integration", "Unitarias e Integración", "Unitários e Integração"), ["sdet"]),
  D("sdet-e2e", tl("E2E & BDD", "E2E y BDD", "E2E e BDD"), ["sdet"]),
  D("sdet-load", tl("Reporting & Load", "Reportes y Carga", "Relatórios e Carga"), ["sdet"]),
  D("sdet-craft", u("Software Craftsmanship"), ["sdet"]),
  D("craft-practices", tl("Practices", "Prácticas", "Práticas"), ["sdet-craft"]),
  D("craft-code", tl("Code Quality", "Calidad de Código", "Qualidade de Código"), ["sdet-craft"]),
  D("craft-principles", tl("Principles", "Principios", "Princípios"), ["sdet-craft"]),
  D("sdet-quality", tl("Quality Strategy", "Estrategia de Calidad", "Estratégia de Qualidade"), ["sdet"]),
  // Soft
  D("soft-comm", tl("Communication", "Comunicación", "Comunicação"), ["soft"]),
  D("soft-lead", tl("Leadership", "Liderazgo", "Liderança"), ["soft"]),
  D("soft-mindset", tl("Mindset", "Mentalidad", "Mentalidade"), ["soft"]),
  D("soft-product", tl("Product & Delivery", "Producto y Entrega", "Produto e Entrega"), ["soft"]),
  D("soft-tools", tl("Collaboration Tools", "Herramientas de Colaboración", "Ferramentas de Colaboração"), ["soft"]),
];

/* =========================================================== SKILLS */
const skills: GraphNode[] = [
  // AI · LLM & Agents
  S("llm-apis", "LLM APIs", "service", ["ai-llm"], 5), S("rag", "RAG", "concept", ["ai-llm"], 4),
  S("langchain", "LangChain", "framework", ["ai-llm"], 4), S("langgraph", "LangGraph", "framework", ["ai-llm"], 4),
  S("llamaindex", "LlamaIndex", "framework", ["ai-llm"], 3), S("crewai", "CrewAI", "framework", ["ai-llm"], 3),
  S("prompting", "Prompt Engineering", "concept", ["ai-llm"], 4), S("agentic", tl("Agentic AI", "IA Agéntica", "IA Agêntica"), "concept", ["ai-llm"], 4),
  S("finetune", tl("Fine-tuning", "Ajuste fino", "Fine-tuning"), "concept", ["ai-llm"], 3),
  // AI · Vector & Retrieval
  S("embeddings", "Embeddings", "concept", ["ai-vector", "rag"], 4), S("faiss", "FAISS", "library", ["ai-vector", "rag"], 4),
  S("chroma", "ChromaDB", "library", ["ai-vector"], 3), S("sbert", "Sentence-Transformers", "library", ["ai-vector"], 3),
  S("vectordb", tl("Vector Databases", "Bases Vectoriales", "Bancos Vetoriais"), "concept", ["ai-vector"], 4),
  // AI · ML
  S("deeplearning", tl("Deep Learning", "Aprendizaje Profundo", "Aprendizado Profundo"), "concept", ["ai-ml"], 3),
  S("tensorflow", "TensorFlow", "framework", ["deeplearning"], 3), S("keras", "Keras", "library", ["deeplearning"], 3), S("pytorch", "PyTorch", "framework", ["deeplearning"], 3),
  S("rl", tl("Reinforcement Learning", "Aprendizaje por Refuerzo", "Aprendizado por Reforço"), "concept", ["ai-ml"], 3),
  S("sklearn", "scikit-learn", "library", ["ai-ml"], 3), S("mlflow", "MLflow", "tool", ["ai-ml"], 3),
  // AI · Libs
  S("pandas", "Pandas", "library", ["ai-libs", "data-etl"], 4), S("numpy", "NumPy", "library", ["ai-libs"], 4), S("scipy", "SciPy", "library", ["ai-libs"], 3), S("opencv", "OpenCV", "library", ["ai-libs"], 3),
  // AI · Platforms
  S("openai", "OpenAI API", "service", ["ai-platforms"], 5), S("anthropic", "Anthropic API", "service", ["ai-platforms"], 4),
  S("azureopenai", "Azure OpenAI", "service", ["ai-platforms"], 4), S("docintel", "Azure Document Intelligence", "service", ["ai-platforms"], 3), S("huggingface", "Hugging Face", "service", ["ai-platforms"], 3),

  // Backend · Python
  S("fastapi", "FastAPI", "framework", ["be-python"], 4), S("flask", "Flask", "framework", ["be-python"], 4),
  S("django", "Django", "framework", ["be-python"], 4), S("drf", "Django REST Framework", "framework", ["django"], 4), S("celery", "Celery", "framework", ["be-python", "be-messaging", "data-etl"], 4),
  // Backend · .NET
  S("dotnetcore", ".NET Core", "framework", ["be-dotnet"], 4), S("aspnet", "ASP.NET", "framework", ["be-dotnet"], 4), S("aspire", ".NET Aspire", "framework", ["be-dotnet"], 3), S("maui", ".NET MAUI", "framework", ["be-dotnet", "fe-mobile"], 3),
  // Backend · Node
  S("nodejs", "Node.js", "runtime", ["be-node"], 4), S("express", "Express", "framework", ["be-node"], 4), S("fastify", "Fastify", "framework", ["be-node"], 4), S("nestjs", "NestJS", "framework", ["be-node"], 3),
  // Backend · JVM & others
  S("springboot", "Spring Boot", "framework", ["be-jvm"], 4), S("laravel", "Laravel", "framework", ["be-jvm"], 3), S("rustaxum", "Rust / axum", "framework", ["be-jvm"], 3),
  // Backend · API
  S("rest", "REST", "concept", ["be-api"], 5), S("graphql", "GraphQL / WPGraphQL", "concept", ["be-api"], 3), S("grpc", "gRPC", "concept", ["be-api"], 3),
  S("websockets", "WebSockets", "concept", ["be-api"], 4), S("openapi", "OpenAPI / Swagger", "tool", ["be-api"], 4), S("apiint", tl("API Integrations", "Integraciones de API", "Integrações de API"), "concept", ["be-api"], 4),
  // Backend · Messaging
  S("rabbitmq", "RabbitMQ", "service", ["be-messaging"], 4), S("kafka", "Kafka", "service", ["be-messaging"], 3),
  S("socketio", "Socket.io", "library", ["be-messaging", "websockets"], 4), S("bull", "Bull", "library", ["be-messaging"], 4),
  S("sqs", "AWS SQS", "service", ["be-messaging", "aws-integration"], 3), S("sns", "AWS SNS", "service", ["be-messaging", "aws-integration"], 3),
  S("eventbridge", "AWS EventBridge", "service", ["be-messaging", "aws-integration"], 3), S("servicebus", "Azure Service Bus", "service", ["be-messaging", "cloud-azure"], 3), S("pubsub", "GCP Pub/Sub", "service", ["be-messaging", "cloud-gcp"], 3),
  // Backend · ORM
  S("sqlalchemy", "SQLAlchemy", "orm", ["be-orm"], 4), S("alembic", "Alembic", "tool", ["be-orm"], 4), S("ef", "Entity Framework", "orm", ["be-orm"], 4),
  S("dapper", "Dapper", "orm", ["be-orm"], 4), S("typegoose", "Typegoose", "orm", ["be-orm"], 3), S("mongoose", "Mongoose", "orm", ["be-orm"], 4), S("prisma", "Prisma", "orm", ["be-orm"], 3),
  // Backend · Architecture · Microservices
  S("microservices", tl("Microservices", "Microservicios", "Microsserviços"), "concept", ["be-arch-micro"], 4), S("sidecar", "Sidecar", "concept", ["be-arch-micro"], 3),
  S("servicemesh", tl("Service Mesh", "Service Mesh", "Service Mesh"), "concept", ["be-arch-micro"], 3), S("servicediscovery", tl("Service Discovery", "Descubrimiento de Servicios", "Service Discovery"), "concept", ["be-arch-micro"], 3),
  S("apigateway", "API Gateway", "concept", ["be-arch-micro"], 4), S("circuitbreaker", "Circuit Breaker", "concept", ["be-arch-micro"], 4), S("bulkhead", "Bulkhead", "concept", ["be-arch-micro"], 3), S("saga", "Saga", "concept", ["be-arch-micro"], 3),
  // Backend · Architecture · Patterns
  S("cqrs", "CQRS", "concept", ["be-arch-patterns"], 3), S("eventsourcing", tl("Event Sourcing", "Event Sourcing", "Event Sourcing"), "concept", ["be-arch-patterns"], 3),
  S("eventdriven", tl("Event-Driven Architecture", "Arquitectura Orientada a Eventos", "Arquitetura Orientada a Eventos"), "concept", ["be-arch-patterns"], 4),
  S("ddd", "Domain-Driven Design", "concept", ["be-arch-patterns"], 3), S("hexagonal", tl("Hexagonal Architecture", "Arquitectura Hexagonal", "Arquitetura Hexagonal"), "concept", ["be-arch-patterns"], 3),
  // Backend · Auth · Protocols
  S("oauth2", "OAuth2", "concept", ["be-auth-proto"], 4), S("oidc", "OIDC", "concept", ["be-auth-proto"], 4), S("saml", "SAML", "concept", ["be-auth-proto"], 4), S("jwt", "JWT", "concept", ["be-auth-proto"], 4), S("pkce", "PKCE", "concept", ["be-auth-proto"], 3),
  S("mfa", tl("MFA", "MFA", "MFA"), "concept", ["be-auth-proto"], 4), S("sso", "SSO", "concept", ["be-auth-proto"], 4),
  // Backend · Auth · Providers
  S("auth0", "Auth0", "service", ["be-auth-prov"], 4), S("entra", "Microsoft Entra", "service", ["be-auth-prov"], 3), S("msgraph", "Microsoft Graph", "service", ["be-auth-prov"], 3), S("argon2", "Argon2", "library", ["be-auth-prov"], 3),
  // Backend · Payments
  S("stripe", "Stripe", "service", ["be-payments"], 4), S("adyen", "Adyen", "service", ["be-payments"], 4), S("mercadopago", "Mercado Pago", "service", ["be-payments"], 3), S("paypal", "PayPal", "service", ["be-payments"], 3), S("iugu", "IUGU", "service", ["be-payments"], 3), S("webhooks", "Webhooks", "concept", ["be-payments", "apiint"], 4),

  // Data · Relational
  S("postgres", "PostgreSQL", "database", ["data-rel"], 4), S("mysql", "MySQL", "database", ["data-rel"], 4), S("sqlserver", "SQL Server", "database", ["data-rel"], 4), S("sqlite", "SQLite", "database", ["data-rel"], 4), S("oracle", "Oracle", "database", ["data-rel"], 3), S("mariadb", "MariaDB", "database", ["data-rel"], 3),
  // Data · NoSQL
  S("mongodb", "MongoDB", "database", ["data-nosql"], 4), S("redis", "Redis", "database", ["data-nosql", "be-messaging"], 4), S("cosmosdb", "Cosmos DB", "database", ["data-nosql", "cloud-azure"], 3), S("dynamodb", "DynamoDB", "database", ["data-nosql", "aws-data"], 3),
  // Data · Warehouse
  S("snowflake", "Snowflake", "warehouse", ["data-warehouse"], 3), S("bigquery", "BigQuery", "warehouse", ["data-warehouse", "cloud-gcp"], 3), S("minio", "MinIO", "storage", ["data-warehouse"], 3), S("glue", "AWS Glue", "service", ["data-warehouse", "aws-data"], 3), S("datalake", tl("Data Lake", "Data Lake", "Data Lake"), "concept", ["data-warehouse"], 3),
  // Data · ETL
  S("etl", tl("ETL Pipelines", "Pipelines ETL", "Pipelines ETL"), "concept", ["data-etl"], 4), S("airflow", "Airflow", "tool", ["data-etl"], 3), S("dbt", "dbt", "tool", ["data-etl"], 3),
  // Data · Search
  S("opensearch", "OpenSearch", "tool", ["data-search", "sre-obs"], 3), S("elasticsearch", "Elasticsearch", "tool", ["data-search"], 3),
  // Data · Tools
  S("pgadmin", "pgAdmin", "tool", ["data-tools", "postgres"], 4), S("dbeaver", "DBeaver", "tool", ["data-tools"], 4), S("datagrip", "DataGrip", "tool", ["data-tools"], 3),

  // Frontend · Frameworks (meta-frameworks nest under these)
  S("react", "React", "framework", ["fe-frameworks"], 4), S("vue", "Vue", "framework", ["fe-frameworks"], 4), S("angular", "Angular", "framework", ["fe-frameworks"], 4), S("svelte", "Svelte", "framework", ["fe-frameworks"], 3), S("polymer", "Polymer", "framework", ["fe-frameworks"], 4),
  S("nextjs", "Next.js", "framework", ["react"], 3), S("reacthooks", "React Hooks", "concept", ["react"], 4), S("reactnative", "React Native", "framework", ["react", "fe-mobile"], 4),
  S("nuxt", "Nuxt", "framework", ["vue"], 4), S("vuetify", "Vuetify", "library", ["vue", "fe-ui"], 4),
  S("angularjs", "AngularJS", "framework", ["angular"], 4), S("rxjs", "RxJS", "library", ["angular", "fe-state"], 4),
  // Frontend · Mobile & Desktop
  S("ionic", "Ionic", "framework", ["fe-mobile"], 4), S("flutter", "Flutter", "framework", ["fe-mobile"], 3), S("swift", "Swift", "language", ["fe-mobile"], 3), S("kotlin", "Kotlin", "language", ["fe-mobile"], 3), S("electron", "Electron", "framework", ["fe-mobile"], 3),
  // Frontend · State
  S("redux", "Redux", "library", ["fe-state", "react"], 4), S("reduxtk", "Redux Toolkit", "library", ["fe-state", "react"], 4), S("zustand", "Zustand", "library", ["fe-state", "react"], 3),
  S("mobx", "MobX", "library", ["fe-state"], 3), S("reactquery", "React Query", "library", ["fe-state", "react"], 3), S("contextapi", "Context API", "concept", ["fe-state", "react"], 4),
  S("pinia", "Pinia", "library", ["fe-state", "vue"], 3), S("vuex", "Vuex", "library", ["fe-state", "vue"], 4), S("ngrx", "NgRx", "library", ["fe-state", "angular"], 3),
  // Frontend · UI
  S("materialui", "Material UI", "library", ["fe-ui"], 4), S("bootstrap", "Bootstrap", "library", ["fe-ui"], 5), S("tailwind", "Tailwind", "library", ["fe-ui"], 4), S("shadcn", "shadcn/ui", "library", ["fe-ui"], 3),
  S("threejs", "Three.js", "library", ["fe-ui"], 3), S("plotly", "Plotly", "library", ["fe-ui"], 3), S("d3", "D3", "library", ["fe-ui"], 3), S("chartjs", "Chart.js", "library", ["fe-ui"], 3),
  // Frontend · Languages & Markup
  S("typescript", "TypeScript", "language", ["fe-lang"], 4), S("javascript", "JavaScript", "language", ["fe-lang"], 4), S("html", "HTML5", "language", ["fe-lang"], 5), S("css", "CSS3", "language", ["fe-lang"], 5), S("sass", "SASS", "language", ["fe-lang"], 4), S("xml", "XML", "language", ["fe-lang", "be-api"], 4),

  // Platform · Containers
  S("docker", "Docker", "tool", ["pf-containers"], 4), S("compose", "Docker Compose", "tool", ["pf-containers"], 4), S("k8s", "Kubernetes", "tool", ["pf-containers"], 4), S("kustomize", "Kustomize", "tool", ["pf-containers"], 3), S("helm", "Helm", "tool", ["pf-containers"], 3),
  // Platform · CI/CD
  S("gha", "GitHub Actions", "tool", ["pf-cicd"], 5), S("gitlabci", "GitLab CI", "tool", ["pf-cicd"], 4), S("jenkins", "Jenkins", "tool", ["pf-cicd"], 3), S("azuredevops", "Azure DevOps", "tool", ["pf-cicd"], 4), S("argocd", "ArgoCD", "tool", ["pf-cicd"], 3),
  // Platform · IaC
  S("terraform", "Terraform", "tool", ["pf-iac"], 3), S("opentofu", "OpenTofu", "tool", ["pf-iac"], 3), S("bicep", "Bicep", "tool", ["pf-iac"], 3), S("ansible", "Ansible", "tool", ["pf-iac"], 3), S("pulumi", "Pulumi", "tool", ["pf-iac"], 3),
  // Platform · CLI & Linux
  S("bash", "Bash / Shell", "tool", ["pf-cli"], 4), S("linuxadmin", tl("Linux Administration", "Administración de Linux", "Administração de Linux"), "concept", ["pf-cli"], 4), S("vim", "Vim", "tool", ["pf-cli"], 4), S("ssh", "SSH", "tool", ["pf-cli"], 4), S("systemd", "systemd / cron", "tool", ["pf-cli"], 4), S("gitcli", "Git CLI", "tool", ["pf-cli"], 5),
  // Cloud · AWS
  S("ec2", "EC2", "service", ["aws-compute"], 3), S("lambda", "Lambda", "service", ["aws-compute"], 3), S("ecs", "ECS / EKS", "service", ["aws-compute"], 3),
  S("s3", "S3", "service", ["aws-data"], 4), S("rds", "RDS", "service", ["aws-data"], 3),
  S("iam", "IAM", "service", ["aws-ops", "sre-security"], 3), S("cloudwatch", "CloudWatch", "service", ["aws-ops"], 3),
  // Cloud · Azure
  S("aks", "AKS", "service", ["cloud-azure"], 3), S("azfunctions", "Azure Functions", "service", ["cloud-azure"], 3), S("keyvault", "Key Vault", "service", ["cloud-azure"], 3), S("blob", "Blob Storage", "service", ["cloud-azure"], 3),
  // Cloud · GCP
  S("gke", "GKE", "service", ["cloud-gcp"], 3), S("cloudfunctions", "Cloud Functions", "service", ["cloud-gcp"], 3), S("cloudstorage", "Cloud Storage", "service", ["cloud-gcp"], 3),
  // Cloud · Other
  S("digitalocean", "DigitalOcean", "cloud", ["cloud-other"], 4), S("heroku", "Heroku", "cloud", ["cloud-other"], 3), S("firebase", "Firebase", "cloud", ["cloud-other"], 3), S("oraclecloud", "Oracle Cloud", "cloud", ["cloud-other"], 3), S("vercel", "Vercel", "cloud", ["cloud-other"], 3),

  // SRE · Observability
  S("grafana", "Grafana", "tool", ["sre-obs"], 4), S("prometheus", "Prometheus", "tool", ["sre-obs"], 3), S("loki", "Loki", "tool", ["sre-obs"], 3), S("tempo", "Tempo", "tool", ["sre-obs"], 3), S("alloy", "Grafana Alloy", "tool", ["sre-obs"], 3), S("victoria", "VictoriaMetrics", "tool", ["sre-obs"], 3), S("otel", "OpenTelemetry", "tool", ["sre-obs"], 3),
  // SRE · Reliability
  S("slo", "SLO / SLI", "concept", ["sre-reliability"], 3), S("errbudget", tl("Error Budgets", "Presupuestos de Error", "Orçamentos de Erro"), "concept", ["sre-reliability"], 3), S("incident", tl("Incident Response", "Respuesta a Incidentes", "Resposta a Incidentes"), "concept", ["sre-reliability"], 3),
  S("oncall", "On-Call", "concept", ["sre-reliability"], 3), S("chaos", tl("Chaos Engineering", "Ingeniería del Caos", "Chaos Engineering"), "concept", ["sre-reliability"], 3), S("alerting", tl("Alerting", "Alertas", "Alertas"), "concept", ["sre-reliability"], 4), S("runbooks", "Runbooks", "concept", ["sre-reliability"], 4),
  // SRE · Security
  S("owasp", "OWASP", "concept", ["sre-security"], 4), S("secrets", tl("Secrets Management", "Gestión de Secretos", "Gestão de Segredos"), "concept", ["sre-security"], 4), S("tls", "TLS / mTLS", "concept", ["sre-security"], 4), S("threatdet", tl("Threat Detection", "Detección de Amenazas", "Detecção de Ameaças"), "concept", ["sre-security"], 3),

  // SDET · Unit & Integration
  S("pytest", "Pytest", "framework", ["sdet-unit"], 4), S("xunit", "xUnit", "framework", ["sdet-unit"], 4), S("junit", "JUnit", "framework", ["sdet-unit"], 4), S("jest", "Jest", "framework", ["sdet-unit"], 4), S("mocha", "Mocha", "framework", ["sdet-unit"], 4), S("vitest", "Vitest", "framework", ["sdet-unit"], 3), S("rtl", "Testing Library", "library", ["sdet-unit"], 4),
  // SDET · E2E & BDD
  S("playwright", "Playwright", "tool", ["sdet-e2e"], 4), S("cypress", "Cypress", "tool", ["sdet-e2e"], 3), S("selenium", "Selenium", "tool", ["sdet-e2e"], 4), S("cucumber", "Cucumber", "tool", ["sdet-e2e"], 3), S("behave", "Behave", "tool", ["sdet-e2e"], 4), S("gherkin", "Gherkin", "concept", ["sdet-e2e"], 4), S("katalon", "Katalon", "tool", ["sdet-e2e"], 3), S("wdio", "WebdriverIO", "tool", ["sdet-e2e"], 3),
  // SDET · Load & Reporting
  S("allure", "Allure", "tool", ["sdet-load"], 4), S("k6", "k6", "tool", ["sdet-load"], 3), S("jmeter", "JMeter", "tool", ["sdet-load"], 3), S("bruno", "Bruno", "tool", ["sdet-load"], 3), S("postman", "Postman", "tool", ["sdet-load"], 4), S("locust", "Locust", "tool", ["sdet-load"], 3),
  // SDET · Craft · Practices
  S("tdd", "TDD", "practice", ["craft-practices"], 4), S("bdd", "BDD", "practice", ["craft-practices"], 4), S("atdd", "ATDD", "practice", ["craft-practices"], 3),
  S("katas", tl("Coding Katas", "Katas de Código", "Katas de Código"), "practice", ["craft-practices"], 4), S("pairprog", tl("Pair Programming", "Programación en Pareja", "Programação em Par"), "practice", ["craft-practices"], 4), S("mobprog", tl("Mob Programming", "Programación en Grupo", "Mob Programming"), "practice", ["craft-practices"], 3),
  // SDET · Craft · Code Quality
  S("refactoring", tl("Refactoring", "Refactorización", "Refatoração"), "practice", ["craft-code"], 4), S("cleancode", tl("Clean Code", "Código Limpio", "Código Limpo"), "practice", ["craft-code"], 5), S("codereview", tl("Code Review", "Revisión de Código", "Revisão de Código"), "practice", ["craft-code"], 4), S("simpledesign", tl("Simple Design", "Diseño Simple", "Design Simples"), "practice", ["craft-code"], 4),
  // SDET · Craft · Principles
  S("solid", "SOLID", "principle", ["craft-principles"], 5), S("patterns", tl("Design Patterns", "Patrones de Diseño", "Padrões de Projeto"), "principle", ["craft-principles"], 4), S("cleanarch", tl("Clean Architecture", "Arquitectura Limpia", "Arquitetura Limpa"), "principle", ["craft-principles", "be-arch-patterns"], 4), S("xp", "Extreme Programming", "principle", ["craft-principles"], 4), S("dry", "DRY / KISS / YAGNI", "principle", ["craft-principles"], 4),
  // SDET · Quality Strategy
  S("testauto", tl("Test Automation", "Automatización de Pruebas", "Automação de Testes"), "concept", ["sdet-quality"], 5), S("testpyramid", tl("Test Pyramid", "Pirámide de Pruebas", "Pirâmide de Testes"), "concept", ["sdet-quality"], 4), S("contracttest", tl("Contract Testing", "Pruebas de Contrato", "Testes de Contrato"), "concept", ["sdet-quality"], 3), S("coverage", tl("Coverage", "Cobertura", "Cobertura"), "concept", ["sdet-quality"], 4),

  // Soft · Communication
  S("communication", tl("Communication", "Comunicación", "Comunicação"), "soft", ["soft-comm"], 5), S("speaking", tl("Public Speaking", "Oratoria", "Oratória"), "soft", ["soft-comm"], 4), S("documentation", tl("Documentation", "Documentación", "Documentação"), "soft", ["soft-comm"], 4), S("writtenen", tl("Written English (C2)", "Inglés Escrito (C2)", "Inglês Escrito (C2)"), "soft", ["soft-comm"], 4), S("stakeholder", tl("Stakeholder Management", "Gestión de Stakeholders", "Gestão de Stakeholders"), "soft", ["soft-comm"], 4),
  // Soft · Leadership
  S("peoplemgmt", tl("People Management", "Gestión de Personas", "Gestão de Pessoas"), "leadership", ["soft-lead"], 4), S("hiring", tl("Hiring", "Contratación", "Contratação"), "leadership", ["soft-lead"], 4), S("mentoring", tl("Mentoring", "Mentoría", "Mentoria"), "leadership", ["soft-lead"], 5), S("training", tl("Training", "Formación", "Treinamento"), "leadership", ["soft-lead"], 4), S("techlead", tl("Tech Leadership", "Liderazgo Técnico", "Liderança Técnica"), "leadership", ["soft-lead"], 4), S("teambuilding", tl("Team Building", "Construcción de Equipos", "Construção de Times"), "leadership", ["soft-lead"], 4), S("community", tl("Community Leadership", "Liderazgo de Comunidad", "Liderança de Comunidade"), "leadership", ["soft-lead", "sdet-craft"], 5, tl("Leads Brasília's first Software Craftsmanship community.", "Lidera la primera comunidad de Software Craftsmanship de Brasília.", "Lidera a primeira comunidade de Software Craftsmanship de Brasília.")),
  // Soft · Mindset
  S("selfdriven", tl("Self-Driven", "Autónomo", "Autodirigido"), "mindset", ["soft-mindset"], 5), S("proactive", tl("Proactive", "Proactivo", "Proativo"), "mindset", ["soft-mindset"], 5), S("ownership", tl("Ownership", "Responsabilidad", "Ownership"), "mindset", ["soft-mindset"], 5), S("founder", tl("Founder Mindset", "Mentalidad Emprendedora", "Mentalidade de Fundador"), "mindset", ["soft-mindset"], 5), S("critical", tl("Critical Thinking", "Pensamiento Crítico", "Pensamento Crítico"), "mindset", ["soft-mindset"], 4), S("adaptable", tl("Adaptability", "Adaptabilidad", "Adaptabilidade"), "mindset", ["soft-mindset"], 4), S("problemsolving", tl("Problem Solving", "Resolución de Problemas", "Resolução de Problemas"), "mindset", ["soft-mindset"], 5), S("learning", tl("Continuous Learning", "Aprendizaje Continuo", "Aprendizado Contínuo"), "mindset", ["soft-mindset"], 5),
  // Soft · Product & Delivery
  S("productmgmt", tl("Product Management", "Gestión de Producto", "Gestão de Produto"), "concept", ["soft-product"], 4), S("scrum", tl("Agile / Scrum", "Agile / Scrum", "Agile / Scrum"), "concept", ["soft-product"], 4), S("kanban", "Kanban", "concept", ["soft-product"], 4), S("discovery", tl("Product Discovery", "Descubrimiento de Producto", "Descoberta de Produto"), "concept", ["soft-product"], 4), S("roadmap", tl("Roadmapping", "Roadmapping", "Roadmapping"), "concept", ["soft-product"], 4), S("gtm", tl("Go-to-Market", "Go-to-Market", "Go-to-Market"), "concept", ["soft-product"], 3),
  // Soft · Tools
  S("figma", "Figma", "tool", ["soft-tools"], 4), S("miro", "Miro", "tool", ["soft-tools"], 4), S("jira", "Jira", "tool", ["soft-tools"], 4), S("confluence", "Confluence", "tool", ["soft-tools"], 4), S("trello", "Trello", "tool", ["soft-tools"], 4), S("notion", "Notion", "tool", ["soft-tools"], 4), S("slack", "Slack", "tool", ["soft-tools"], 4),
];

/* ==================================================== BASE (languages) */
const bases: GraphNode[] = [
  B("l-python", "Python", "language", ["be-lang", "fastapi", "django", "celery", "tensorflow", "pandas", "sqlalchemy", "pytest", "behave"]),
  B("l-csharp", "C#", "language", ["be-lang", "dotnetcore", "aspnet", "ef", "dapper", "xunit"]),
  B("l-java", "Java", "language", ["be-lang", "springboot", "junit"]),
  B("l-php", "PHP", "language", ["be-lang", "laravel"]),
  B("l-rust", "Rust", "language", ["be-lang", "rustaxum"]),
  B("l-go", "Go", "language", ["be-lang"]),
  B("l-js", "JavaScript", "language", ["nodejs", "express", "react", "vue", "socketio", "mongoose"]),
  B("l-ts", "TypeScript", "language", ["angular", "nextjs", "nuxt", "typegoose", "ionic", "nestjs"]),
  B("l-sql", "SQL", "language", ["be-lang", "postgres", "sqlalchemy", "ef", "snowflake"]),
  B("l-cpp", "C++", "language", ["be-lang", "faiss"]),
  B("f-linux", tl("Linux & Networking", "Linux y Redes", "Linux e Redes"), "foundation", ["docker", "k8s", "rabbitmq", "redis", "terraform", "linuxadmin"]),
  B("f-git", tl("Git & Version Control", "Git y Control de Versiones", "Git e Controle de Versão"), "foundation", ["gha", "gitlabci", "gitcli"]),
  B("f-http", tl("HTTP & Protocols", "HTTP y Protocolos", "HTTP e Protocolos"), "foundation", ["rest", "llm-apis", "websockets"]),
  B("f-math", tl("Math & Statistics", "Matemática y Estadística", "Matemática e Estatística"), "foundation", ["ai-ml", "rag", "tensorflow"]),
  B("f-dsa", tl("Data Structures & Algorithms", "Estructuras de Datos y Algoritmos", "Estruturas de Dados e Algoritmos"), "foundation", ["craft-principles"]),
];

export const nodes: GraphNode[] = [...roles, ...domains, ...skills, ...bases];

export const byId = (id: string): GraphNode | undefined =>
  nodes.find((n) => n.id === id);

export const childrenOf = (id: string): GraphNode[] =>
  nodes.filter((n) => n.parents && n.parents.includes(id));

export const roleNodes = (): GraphNode[] =>
  nodes.filter((n) => n.tier === "role");

export const hasChildren = (id: string): boolean =>
  nodes.some((n) => n.parents && n.parents.includes(id));
