// Curated skills taxonomy for the interactive Habilidades graph.
// Four tiers, revealed progressively: role -> domain -> skill -> base foundation.
// Nodes can have multiple parents (it's a DAG, not a strict tree) so shared
// foundations (Python, SQL, Linux...) connect to every skill that rests on them.

export type Tier = "role" | "domain" | "skill" | "base";

export interface GraphNode {
  id: string;
  label: string;
  tier: Tier;
  parents?: string[];
  description?: string;
  level?: number; // proficiency 1-5, for skills
}

const roles: GraphNode[] = [
  { id: "ai", label: "AI & ML Engineer", tier: "role", description: "Building AI-enabled products: LLM agents, RAG, and machine learning." },
  { id: "backend", label: "Backend Engineer", tier: "role", description: "APIs, event-driven services, and data — the core I've shipped since 2017." },
  { id: "frontend", label: "Frontend Engineer", tier: "role", description: "The web interfaces that deliver products to users." },
  { id: "platform", label: "Platform & DevOps", tier: "role", description: "Containers, CI/CD, infrastructure-as-code, cloud and on-premise." },
];

const domains: GraphNode[] = [
  { id: "ai-llm", label: "LLM & Agents", tier: "domain", parents: ["ai"], description: "Language models, retrieval, and agentic workflows." },
  { id: "ai-ml", label: "Machine Learning", tier: "domain", parents: ["ai"], description: "Model training and reinforcement learning." },
  { id: "ai-data", label: "Data & Pipelines", tier: "domain", parents: ["ai", "backend"], description: "Pipelines that feed models and analytics." },

  { id: "be-apis", label: "APIs & Services", tier: "domain", parents: ["backend"], description: "HTTP services and business logic." },
  { id: "be-msg", label: "Messaging & Real-time", tier: "domain", parents: ["backend"], description: "Events, queues, and live data." },
  { id: "be-db", label: "Databases", tier: "domain", parents: ["backend"], description: "Relational and document stores." },

  { id: "fe-frameworks", label: "Frameworks", tier: "domain", parents: ["frontend"], description: "Component frameworks and SSR." },
  { id: "fe-lang", label: "Language & Styling", tier: "domain", parents: ["frontend"], description: "The languages of the browser." },
  { id: "fe-test", label: "Testing", tier: "domain", parents: ["frontend", "platform"], description: "End-to-end and component testing." },

  { id: "pf-containers", label: "Containers & Orchestration", tier: "domain", parents: ["platform"], description: "Packaging and running services." },
  { id: "pf-cicd", label: "CI/CD & IaC", tier: "domain", parents: ["platform"], description: "Automated delivery and infrastructure-as-code." },
  { id: "pf-cloud", label: "Cloud & Systems", tier: "domain", parents: ["platform"], description: "Cloud providers and system administration." },
];

const skills: GraphNode[] = [
  // AI - LLM & Agents
  { id: "llm-apis", label: "LLM APIs", tier: "skill", parents: ["ai-llm"], level: 5, description: "OpenAI, Anthropic, Azure OpenAI — behind a common interface." },
  { id: "rag", label: "RAG & Embeddings", tier: "skill", parents: ["ai-llm"], level: 4, description: "Retrieval-Augmented Generation grounded in real data." },
  { id: "faiss", label: "FAISS (Vector Search)", tier: "skill", parents: ["ai-llm"], level: 4, description: "Similarity search over embeddings." },
  { id: "langchain", label: "LangChain / LangGraph", tier: "skill", parents: ["ai-llm"], level: 4, description: "Orchestrating multi-step and multi-agent flows." },
  { id: "prompting", label: "Prompt Engineering", tier: "skill", parents: ["ai-llm"], level: 4, description: "Reliable, structured LLM output." },
  // AI - ML
  { id: "tensorflow", label: "TensorFlow / Keras", tier: "skill", parents: ["ai-ml"], level: 3, description: "Deep learning models and training." },
  { id: "rl", label: "Reinforcement Learning", tier: "skill", parents: ["ai-ml"], level: 3, description: "Deep Q-Networks and self-play (jackBlack)." },
  { id: "pandas", label: "Pandas / NumPy", tier: "skill", parents: ["ai-ml", "ai-data"], level: 4, description: "Data wrangling and numerical work." },
  // AI/Backend - Data
  { id: "snowflake", label: "Snowflake", tier: "skill", parents: ["ai-data"], level: 3, description: "Cloud data lakehouse and warehousing." },
  { id: "etl", label: "ETL Pipelines", tier: "skill", parents: ["ai-data"], level: 4, description: "Ingest, transform, and load at scale." },

  // Backend - APIs
  { id: "fastapi", label: "FastAPI", tier: "skill", parents: ["be-apis"], level: 4, description: "Modern async Python APIs." },
  { id: "flask-django", label: "Flask / Django", tier: "skill", parents: ["be-apis"], level: 4, description: "Mature Python web frameworks." },
  { id: "dotnet", label: ".NET / ASP.NET", tier: "skill", parents: ["be-apis"], level: 4, description: "Enterprise C# services and Aspire." },
  { id: "node", label: "Node.js / Express", tier: "skill", parents: ["be-apis"], level: 4, description: "JavaScript/TypeScript backends." },
  { id: "rest", label: "REST API Design", tier: "skill", parents: ["be-apis"], level: 5, description: "Clean, versioned, well-documented APIs." },
  // Backend - Messaging
  { id: "rabbitmq", label: "RabbitMQ", tier: "skill", parents: ["be-msg"], level: 4, description: "Event-driven producers/consumers." },
  { id: "redis", label: "Redis", tier: "skill", parents: ["be-msg"], level: 4, description: "Cache, pub/sub, and real-time backplane." },
  { id: "celery", label: "Celery", tier: "skill", parents: ["be-msg"], level: 4, description: "Distributed task queues." },
  { id: "sockets", label: "WebSockets / Socket.io", tier: "skill", parents: ["be-msg"], level: 4, description: "Live, multi-node real-time delivery." },
  // Backend - DB
  { id: "postgres", label: "PostgreSQL", tier: "skill", parents: ["be-db"], level: 4, description: "Relational modeling and queries." },
  { id: "sqlalchemy", label: "SQLAlchemy", tier: "skill", parents: ["be-db"], level: 4, description: "Python ORM and migrations." },
  { id: "mongodb", label: "MongoDB", tier: "skill", parents: ["be-db"], level: 4, description: "Document store and time-series." },
  { id: "mysql", label: "MySQL", tier: "skill", parents: ["be-db"], level: 4, description: "Relational database." },

  // Frontend - Frameworks
  { id: "react", label: "React", tier: "skill", parents: ["fe-frameworks"], level: 4, description: "Component-driven UIs." },
  { id: "nextjs", label: "Next.js", tier: "skill", parents: ["fe-frameworks"], level: 3, description: "React SSR/SSG framework." },
  { id: "vue-nuxt", label: "Vue / Nuxt", tier: "skill", parents: ["fe-frameworks"], level: 4, description: "Progressive framework with SSR." },
  { id: "angular", label: "Angular", tier: "skill", parents: ["fe-frameworks"], level: 4, description: "Enterprise SPA framework and microfrontends." },
  // Frontend - Lang
  { id: "typescript", label: "TypeScript", tier: "skill", parents: ["fe-lang"], level: 4, description: "Typed JavaScript across the stack." },
  { id: "javascript", label: "JavaScript", tier: "skill", parents: ["fe-lang"], level: 4, description: "The language of the web." },
  { id: "htmlcss", label: "HTML5 / CSS3", tier: "skill", parents: ["fe-lang"], level: 5, description: "Responsive, accessible interfaces." },
  // Frontend/Platform - Testing
  { id: "playwright", label: "Playwright", tier: "skill", parents: ["fe-test"], level: 4, description: "Reliable end-to-end tests." },
  { id: "cypress", label: "Cypress", tier: "skill", parents: ["fe-test"], level: 3, description: "Browser E2E testing." },
  { id: "jest", label: "Jest / Pytest", tier: "skill", parents: ["fe-test"], level: 4, description: "Unit and integration testing." },

  // Platform - Containers
  { id: "docker", label: "Docker", tier: "skill", parents: ["pf-containers"], level: 4, description: "Containerized builds and runtimes." },
  { id: "k8s", label: "Kubernetes", tier: "skill", parents: ["pf-containers"], level: 4, description: "Container orchestration." },
  // Platform - CI/CD
  { id: "gha", label: "GitHub Actions", tier: "skill", parents: ["pf-cicd"], level: 5, description: "CI/CD pipelines and runners." },
  { id: "gitlab", label: "GitLab CI", tier: "skill", parents: ["pf-cicd"], level: 4, description: "Self-hosted and hosted runners." },
  { id: "terraform", label: "Terraform / OpenTofu", tier: "skill", parents: ["pf-cicd"], level: 3, description: "Infrastructure as code." },
  // Platform - Cloud
  { id: "aws", label: "AWS", tier: "skill", parents: ["pf-cloud"], level: 3, description: "Compute, storage, queues." },
  { id: "gcp", label: "GCP", tier: "skill", parents: ["pf-cloud"], level: 3, description: "Google Cloud Platform." },
  { id: "azure", label: "Azure", tier: "skill", parents: ["pf-cloud"], level: 3, description: "Cloud + Azure OpenAI." },
  { id: "linux", label: "Linux / On-Prem", tier: "skill", parents: ["pf-cloud"], level: 4, description: "Bare-metal and system administration." },
];

const bases: GraphNode[] = [
  {
    id: "b-python",
    label: "Python",
    tier: "base",
    parents: ["llm-apis", "rag", "faiss", "langchain", "tensorflow", "rl", "pandas", "etl", "fastapi", "flask-django", "celery", "sqlalchemy"],
    description: "Primary language for AI, data, and backend.",
  },
  { id: "b-csharp", label: "C#", tier: "base", parents: ["dotnet"], description: "Enterprise language for .NET services." },
  { id: "b-js", label: "JavaScript (ES)", tier: "base", parents: ["node", "sockets", "react", "nextjs", "vue-nuxt", "typescript"], description: "Runtime language of the browser and Node." },
  { id: "b-sql", label: "SQL", tier: "base", parents: ["snowflake", "etl", "postgres", "sqlalchemy", "mysql"], description: "Querying and modeling relational data." },
  { id: "b-cpp", label: "C++", tier: "base", parents: ["faiss"], description: "Native performance for vector search." },
  { id: "b-linux", label: "Linux & Networking", tier: "base", parents: ["rabbitmq", "redis", "postgres", "docker", "k8s", "terraform", "aws", "gcp", "azure"], description: "Systems, processes, and networking." },
  { id: "b-git", label: "Git & Version Control", tier: "base", parents: ["gha", "gitlab"], description: "Branching, review, and history." },
  { id: "b-math", label: "Math & Statistics", tier: "base", parents: ["rag", "tensorflow", "rl"], description: "Linear algebra, probability, optimization." },
  { id: "b-http", label: "HTTP & Networking", tier: "base", parents: ["llm-apis", "rest"], description: "Protocols underpinning web services." },
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
