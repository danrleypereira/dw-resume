# Tools & Platforms I Currently Use

Here's an honest snapshot of what I work with day to day, roughly ordered by how central it is to my current work and where I'm strongest.

**Languages & frameworks (strongest)**
- **Python** — FastAPI, Flask, Django, Celery. This is my primary backend stack today.
- **TypeScript / JavaScript** — React, **Next.js** (App Router), Nuxt, Node.js/Express.
- **C# / .NET** (Core, ASP.NET, .NET Aspire) — from my enterprise work.
- **Rust** — I built my authentication service (Curupira) on axum.

**Databases & data**
- **PostgreSQL** — my default: relational modeling, **SQLAlchemy + Alembic** migrations, advanced queries, indexing, connection pooling. Also MySQL, MongoDB, Redis.
- **Snowflake** and data-lake / ETL pipelines (external stages, partitioning, materialized views); Pandas for transformation.

**Real-time & messaging**
- **WebSockets / Socket.io** with a **Redis** adapter for multi-node broadcast; Bull/Celery worker queues; RabbitMQ and AWS SQS for event-driven systems.

**Infrastructure & DevOps**
- **Docker**, **Kubernetes**, **Terraform / OpenTofu**.
- CI/CD on **GitHub Actions** and **GitLab** (self-hosted and hosted runners).
- **AWS**, **GCP**, **Heroku**, and full **on-premise / bare-metal Linux** administration — I run a 3-node cluster with **Grafana** dashboards, alerting, and monitoring.

**Testing (I care a lot about this)**
- **Pytest**, Playwright, Cypress, Cucumber, Behave, Allure, **Bruno** (API), **k6** (load), TDD/BDD. I lead a Software Craftsmanship community, so testing and craft are core to how I work.

**Payments & auth**
- Stripe, Adyen, and Brazilian providers; OAuth2/OIDC, SAML, JWT, Auth0, and identity layers I've built myself.

**AI (secondary, but current)**
- OpenAI and Anthropic APIs, RAG/embeddings, LangChain, TensorFlow — I use these both in products and as everyday coding tools.

**Where I'm most expert:** Python + FastAPI/Flask over PostgreSQL (with SQLAlchemy/Alembic), real-time systems on Socket.io + Redis, and owning the full path from database to React/Next.js UI to CI/CD and infrastructure. Railway is the one item on your stack I haven't used yet, but it maps cleanly onto the Heroku/AWS/GCP/on-prem operation I do every day, so I'd be productive on it quickly.
