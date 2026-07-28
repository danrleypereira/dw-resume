// Curated skills taxonomy for the interactive Habilidades graph.
// Tiers, revealed progressively: role -> domain -> skill -> (deeper skill) -> base.
// Nodes can have multiple parents (a DAG), so shared tools/languages repeat
// across the domains that use them. Faithful to the tools in Danrley's CV.

export type Tier = "role" | "domain" | "skill" | "base";

export interface GraphNode {
  id: string;
  label: string;
  tier: Tier;
  kind?: string; // panel flavour: framework, library, orm, database, concept, tool, cloud, service, runtime, language, foundation
  parents?: string[];
  description?: string;
  level?: number; // proficiency 1-5
}

/* ---------------------------------------------------------------- roles */
const roles: GraphNode[] = [
  { id: "ai", label: "AI & ML Engineer", tier: "role", description: "LLM agents, RAG, and machine learning end to end." },
  { id: "backend", label: "Backend Engineer", tier: "role", description: "APIs, services, messaging, and the ORMs that back them." },
  { id: "data", label: "Data Engineer", tier: "role", description: "Databases, warehouses, and ETL pipelines." },
  { id: "frontend", label: "Frontend Engineer", tier: "role", description: "Web and mobile interfaces." },
  { id: "platform", label: "Platform & DevOps", tier: "role", description: "Containers, CI/CD, cloud, IaC, and security." },
  { id: "craft", label: "Testing & Craft", tier: "role", description: "Testing, and the architecture practices I lead a community around." },
];

/* -------------------------------------------------------------- domains */
const domains: GraphNode[] = [
  // AI
  { id: "ai-llm", label: "LLM & Agents", tier: "domain", parents: ["ai"] },
  { id: "ai-vector", label: "Vector & Retrieval", tier: "domain", parents: ["ai"] },
  { id: "ai-ml", label: "Machine Learning", tier: "domain", parents: ["ai"] },
  { id: "ai-libs", label: "Data Science Libraries", tier: "domain", parents: ["ai", "data"] },
  // Backend
  { id: "be-python", label: "Python Frameworks", tier: "domain", parents: ["backend"] },
  { id: "be-dotnet", label: ".NET", tier: "domain", parents: ["backend"] },
  { id: "be-node", label: "Node.js", tier: "domain", parents: ["backend"] },
  { id: "be-jvm", label: "JVM & Others", tier: "domain", parents: ["backend"] },
  { id: "be-api", label: "APIs & Messaging", tier: "domain", parents: ["backend"] },
  { id: "be-orm", label: "ORMs & Data Access", tier: "domain", parents: ["backend", "data"] },
  { id: "be-lang", label: "Languages", tier: "domain", parents: ["backend"] },
  // Data
  { id: "data-rel", label: "Relational Databases", tier: "domain", parents: ["data"] },
  { id: "data-nosql", label: "NoSQL & Cache", tier: "domain", parents: ["data"] },
  { id: "data-warehouse", label: "Warehouse & Lake", tier: "domain", parents: ["data"] },
  { id: "data-etl", label: "ETL & Processing", tier: "domain", parents: ["data"] },
  // Frontend
  { id: "fe-frameworks", label: "Frameworks", tier: "domain", parents: ["frontend"] },
  { id: "fe-mobile", label: "Mobile & Desktop", tier: "domain", parents: ["frontend"] },
  { id: "fe-libs", label: "Libraries & UI", tier: "domain", parents: ["frontend"] },
  { id: "fe-lang", label: "Languages & Markup", tier: "domain", parents: ["frontend"] },
  // Platform
  { id: "pf-containers", label: "Containers & Orchestration", tier: "domain", parents: ["platform"] },
  { id: "pf-cicd", label: "CI/CD", tier: "domain", parents: ["platform"] },
  { id: "pf-iac", label: "IaC & Systems", tier: "domain", parents: ["platform"] },
  { id: "pf-cloud", label: "Cloud", tier: "domain", parents: ["platform"] },
  { id: "pf-obs", label: "Observability", tier: "domain", parents: ["platform"] },
  { id: "pf-auth", label: "Auth & Security", tier: "domain", parents: ["platform", "backend"] },
  { id: "pf-systems", label: "Systems & Foundations", tier: "domain", parents: ["platform"] },
  // Craft
  { id: "craft-unit", label: "Unit & Integration", tier: "domain", parents: ["craft"] },
  { id: "craft-e2e", label: "E2E & BDD", tier: "domain", parents: ["craft"] },
  { id: "craft-load", label: "Reporting & Load", tier: "domain", parents: ["craft"] },
  { id: "craft-practices", label: "Practices & Architecture", tier: "domain", parents: ["craft"] },
];

/* --------------------------------------------------------------- skills */
const s = (
  id: string,
  label: string,
  kind: string,
  parents: string[],
  level?: number,
  description?: string
): GraphNode => ({ id, label, tier: "skill", kind, parents, level, description });

const skills: GraphNode[] = [
  // --- AI: LLM & Agents
  s("llm-apis", "LLM APIs", "service", ["ai-llm"], 5, "OpenAI, Anthropic, Azure OpenAI behind a common interface."),
  s("rag", "RAG", "concept", ["ai-llm"], 4, "Retrieval-Augmented Generation grounded in real data."),
  s("langchain", "LangChain", "framework", ["ai-llm"], 4),
  s("langgraph", "LangGraph", "framework", ["ai-llm"], 4, "Multi-agent, event-driven orchestration."),
  s("prompting", "Prompt Engineering", "concept", ["ai-llm"], 4),
  s("doc-intel", "Azure Document Intelligence", "service", ["ai-llm"], 3, "OCR / structured extraction."),
  // --- AI: Vector & Retrieval
  s("embeddings", "Embeddings", "concept", ["ai-vector", "rag"], 4),
  s("faiss", "FAISS", "library", ["ai-vector", "rag"], 4, "Similarity search over embeddings."),
  s("chroma", "ChromaDB", "library", ["ai-vector"], 3),
  s("sbert", "Sentence-Transformers", "library", ["ai-vector"], 3),
  // --- AI: Machine Learning
  s("deeplearning", "Deep Learning", "concept", ["ai-ml"], 3, "Neural networks and training."),
  s("tensorflow", "TensorFlow", "framework", ["deeplearning"], 3),
  s("keras", "Keras", "library", ["deeplearning"], 3),
  s("pytorch", "PyTorch", "framework", ["deeplearning"], 3),
  s("rl", "Reinforcement Learning", "concept", ["ai-ml"], 3, "Deep Q-Networks and self-play (jackBlack)."),
  s("sklearn", "scikit-learn", "library", ["ai-ml"], 3),
  s("mlflow", "MLflow", "tool", ["ai-ml"], 3),
  // --- AI: Data Science Libraries
  s("pandas", "Pandas", "library", ["ai-libs", "data-etl"], 4),
  s("numpy", "NumPy", "library", ["ai-libs"], 4),
  s("scipy", "SciPy", "library", ["ai-libs"], 3),

  // --- Backend: Python Frameworks
  s("fastapi", "FastAPI", "framework", ["be-python"], 4, "Modern async Python APIs."),
  s("flask", "Flask", "framework", ["be-python"], 4),
  s("django", "Django", "framework", ["be-python"], 4),
  s("drf", "Django REST Framework", "framework", ["django"], 4),
  s("celery", "Celery", "framework", ["be-python", "be-api", "data-etl"], 4, "Distributed task queues."),
  // --- Backend: .NET
  s("dotnetcore", ".NET Core", "framework", ["be-dotnet"], 4),
  s("aspnet", "ASP.NET", "framework", ["be-dotnet"], 4),
  s("aspire", ".NET Aspire", "framework", ["be-dotnet"], 3, "Cloud-native orchestration."),
  s("maui", ".NET MAUI", "framework", ["be-dotnet", "fe-mobile"], 3),
  // --- Backend: Node
  s("nodejs", "Node.js", "runtime", ["be-node"], 4),
  s("express", "Express", "framework", ["be-node"], 4),
  s("fastify", "Fastify", "framework", ["be-node"], 4),
  // --- Backend: JVM & Others
  s("springboot", "Spring Boot", "framework", ["be-jvm"], 4),
  s("laravel", "Laravel", "framework", ["be-jvm"], 3),
  s("rust-axum", "Rust / axum", "framework", ["be-jvm"], 3, "OAuth2/OIDC service (Curupira)."),
  // --- Backend: APIs & Messaging
  s("rest", "REST API Design", "concept", ["be-api"], 5),
  s("graphql", "GraphQL / WPGraphQL", "concept", ["be-api"], 3),
  s("rabbitmq", "RabbitMQ", "service", ["be-api"], 4, "Event-driven producers/consumers."),
  s("kafka", "Kafka", "service", ["be-api"], 3),
  s("socketio", "Socket.io", "library", ["be-api"], 4, "Real-time, multi-node."),
  s("bull", "Bull", "library", ["be-api"], 4, "Redis-backed job queues."),
  s("sqs", "AWS SQS", "service", ["be-api"], 3),
  s("servicebus", "Azure Service Bus", "service", ["be-api"], 3),
  s("eventdriven-be", "Event-Driven Architecture", "concept", ["be-api", "craft-practices"], 4),
  // --- Backend: ORMs & Data Access
  s("sqlalchemy", "SQLAlchemy", "orm", ["be-orm"], 4, "Python ORM."),
  s("alembic", "Alembic", "tool", ["be-orm"], 4, "Schema migrations."),
  s("ef", "Entity Framework", "orm", ["be-orm"], 4),
  s("dapper", "Dapper", "orm", ["be-orm"], 4, "High-performance micro-ORM."),
  s("typegoose", "Typegoose", "orm", ["be-orm"], 3),
  s("mongoose", "Mongoose", "orm", ["be-orm"], 4),

  // --- Data: Relational
  s("postgres", "PostgreSQL", "database", ["data-rel"], 4),
  s("mysql", "MySQL", "database", ["data-rel"], 4),
  s("sqlserver", "SQL Server", "database", ["data-rel"], 4),
  s("sqlite", "SQLite", "database", ["data-rel"], 4),
  s("oracle", "Oracle", "database", ["data-rel"], 3),
  s("mariadb", "MariaDB", "database", ["data-rel"], 3),
  // --- Data: NoSQL & Cache
  s("mongodb", "MongoDB", "database", ["data-nosql"], 4),
  s("redis", "Redis", "database", ["data-nosql", "be-api"], 4, "Cache, pub/sub, streaming."),
  // --- Data: Warehouse & Lake
  s("snowflake", "Snowflake", "warehouse", ["data-warehouse"], 3),
  s("bigquery", "BigQuery", "warehouse", ["data-warehouse"], 3),
  s("minio", "MinIO", "storage", ["data-warehouse"], 3),
  s("datalake", "Data Lake", "concept", ["data-warehouse"], 3),
  // --- Data: ETL & Processing
  s("etl", "ETL Pipelines", "concept", ["data-etl"], 4),

  // --- Frontend: Frameworks
  s("react", "React", "framework", ["fe-frameworks"], 4),
  s("reacthooks", "React Hooks", "concept", ["react"], 4),
  s("nextjs", "Next.js", "framework", ["fe-frameworks"], 3),
  s("vue", "Vue", "framework", ["fe-frameworks"], 4),
  s("nuxt", "Nuxt", "framework", ["fe-frameworks"], 4),
  s("angular", "Angular", "framework", ["fe-frameworks"], 4),
  s("angularjs", "AngularJS", "framework", ["fe-frameworks"], 4),
  s("polymer", "Polymer", "framework", ["fe-frameworks"], 4),
  // --- Frontend: Mobile & Desktop
  s("ionic", "Ionic", "framework", ["fe-mobile"], 4),
  s("reactnative", "React Native", "framework", ["fe-mobile"], 4),
  s("electron", "Electron", "framework", ["fe-mobile"], 3),
  // --- Frontend: Libraries & UI
  s("redux", "Redux", "library", ["fe-libs"], 4),
  s("zustand", "Zustand", "library", ["fe-libs"], 3),
  s("rxjs", "RxJS", "library", ["fe-libs"], 4),
  s("materialui", "Material UI", "library", ["fe-libs"], 4),
  s("bootstrap", "Bootstrap", "library", ["fe-libs"], 5),
  s("vuetify", "Vuetify", "library", ["fe-libs"], 4),
  s("threejs", "Three.js", "library", ["fe-libs"], 3, "3D visualization (wellbores)."),
  s("plotly", "Plotly", "library", ["fe-libs"], 3),
  s("d3", "D3", "library", ["fe-libs"], 3),

  // --- Platform: Containers
  s("docker", "Docker", "tool", ["pf-containers"], 4),
  s("compose", "Docker Compose", "tool", ["pf-containers"], 4),
  s("k8s", "Kubernetes", "tool", ["pf-containers"], 4),
  s("kustomize", "Kustomize", "tool", ["pf-containers"], 3),
  // --- Platform: CI/CD
  s("gha", "GitHub Actions", "tool", ["pf-cicd"], 5),
  s("gitlabci", "GitLab CI", "tool", ["pf-cicd"], 4),
  s("jenkins", "Jenkins", "tool", ["pf-cicd"], 3),
  s("azuredevops", "Azure DevOps", "tool", ["pf-cicd"], 4),
  // --- Platform: IaC & Systems
  s("terraform", "Terraform", "tool", ["pf-iac"], 3),
  s("opentofu", "OpenTofu", "tool", ["pf-iac"], 3),
  s("bicep", "Bicep", "tool", ["pf-iac"], 3),
  s("systemd", "systemd / cron", "tool", ["pf-iac"], 4),
  // --- Platform: Cloud
  s("aws", "AWS", "cloud", ["pf-cloud"], 3),
  s("gcp", "GCP", "cloud", ["pf-cloud"], 3),
  s("azure", "Azure", "cloud", ["pf-cloud"], 3),
  s("digitalocean", "DigitalOcean", "cloud", ["pf-cloud"], 4),
  s("heroku", "Heroku", "cloud", ["pf-cloud"], 3),
  s("firebase", "Firebase", "cloud", ["pf-cloud"], 3),
  // --- Platform: Observability
  s("grafana", "Grafana", "tool", ["pf-obs"], 4),
  s("otel", "OpenTelemetry", "tool", ["pf-obs"], 3),
  s("prometheus", "Prometheus", "tool", ["pf-obs"], 3),
  // --- Platform: Auth & Security
  s("oauth2", "OAuth2", "concept", ["pf-auth"], 4),
  s("oidc", "OIDC", "concept", ["pf-auth"], 4),
  s("saml", "SAML", "concept", ["pf-auth"], 4),
  s("jwt", "JWT", "concept", ["pf-auth"], 4),
  s("auth0", "Auth0", "service", ["pf-auth"], 4),
  s("adal", "Azure AD / ADAL", "service", ["pf-auth"], 3),
  s("argon2", "Argon2", "library", ["pf-auth"], 3),
  s("owasp", "OWASP", "concept", ["pf-auth"], 4),

  // --- Craft: Unit & Integration
  s("pytest", "Pytest", "framework", ["craft-unit"], 4),
  s("xunit", "xUnit", "framework", ["craft-unit"], 4),
  s("junit", "JUnit", "framework", ["craft-unit"], 4),
  s("jest", "Jest", "framework", ["craft-unit"], 4),
  s("mocha", "Mocha", "framework", ["craft-unit"], 4),
  s("vitest", "Vitest", "framework", ["craft-unit"], 3),
  // --- Craft: E2E & BDD
  s("playwright", "Playwright", "tool", ["craft-e2e"], 4),
  s("cypress", "Cypress", "tool", ["craft-e2e"], 3),
  s("selenium", "Selenium", "tool", ["craft-e2e"], 4),
  s("cucumber", "Cucumber", "tool", ["craft-e2e"], 3),
  s("behave", "Behave", "tool", ["craft-e2e"], 4),
  s("gherkin", "Gherkin", "concept", ["craft-e2e"], 4),
  s("katalon", "Katalon", "tool", ["craft-e2e"], 3),
  // --- Craft: Reporting & Load
  s("allure", "Allure", "tool", ["craft-load"], 4),
  s("k6", "k6", "tool", ["craft-load"], 3),
  s("jmeter", "JMeter", "tool", ["craft-load"], 3),
  s("bruno", "Bruno", "tool", ["craft-load"], 3),
  // --- Craft: Practices & Architecture
  s("tdd", "TDD", "concept", ["craft-practices"], 4),
  s("bdd", "BDD", "concept", ["craft-practices"], 4),
  s("cleanarch", "Clean Architecture", "concept", ["craft-practices"], 4),
  s("solid", "SOLID", "concept", ["craft-practices"], 5),
  s("patterns", "Design Patterns", "concept", ["craft-practices"], 4),
  s("microservices", "Microservices", "concept", ["craft-practices"], 4),
  s("microfrontends", "Microfrontends", "concept", ["craft-practices"], 4),
  s("circuitbreaker", "Circuit Breaker", "concept", ["craft-practices"], 4),
  s("umlbpmn", "UML / BPMN", "concept", ["craft-practices"], 4),
];

/* --------------------------------------------------- base (languages) */
const b = (
  id: string,
  label: string,
  kind: string,
  parents: string[],
  description?: string
): GraphNode => ({ id, label, tier: "base", kind, parents, description });

const bases: GraphNode[] = [
  b("l-python", "Python", "language", ["be-lang", "fastapi", "django", "celery", "tensorflow", "pandas", "sqlalchemy", "pytest", "behave"]),
  b("l-csharp", "C#", "language", ["be-lang", "dotnetcore", "aspnet", "ef", "dapper", "xunit"]),
  b("l-java", "Java", "language", ["be-lang", "springboot", "junit"]),
  b("l-php", "PHP", "language", ["be-lang", "laravel"]),
  b("l-rust", "Rust", "language", ["be-lang", "rust-axum"]),
  b("l-go", "Go", "language", ["be-lang"]),
  b("l-js", "JavaScript", "language", ["fe-lang", "nodejs", "express", "fastify", "react", "vue", "socketio", "mongoose"]),
  b("l-ts", "TypeScript", "language", ["fe-lang", "angular", "nextjs", "nuxt", "typegoose", "ionic", "rxjs"]),
  b("l-html", "HTML5", "language", ["fe-lang"]),
  b("l-css", "CSS3", "language", ["fe-lang", "bootstrap"]),
  b("l-sql", "SQL", "language", ["be-lang", "data-rel", "postgres", "sqlalchemy", "ef", "snowflake"]),
  b("l-cpp", "C++", "language", ["be-lang", "faiss"]),
  b("f-linux", "Linux & Networking", "foundation", ["pf-systems", "docker", "k8s", "rabbitmq", "redis", "terraform", "systemd"]),
  b("f-git", "Git & Version Control", "foundation", ["pf-systems", "gha", "gitlabci"]),
  b("f-http", "HTTP & Protocols", "foundation", ["pf-systems", "rest", "llm-apis"]),
  b("f-math", "Math & Statistics", "foundation", ["ai-ml", "rag", "tensorflow"]),
  b("f-dsa", "Data Structures & Algorithms", "foundation", ["craft-practices"]),
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
