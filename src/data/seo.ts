// Per-route <title> and meta description. Read by AnimatedRoutes (client-side
// navigation) and scripts/seo-build.js (static HTML for crawlers).

export const HOME_TITLE = "DW Curriculum";

export const routeSeo: Record<string, { title: string; description: string }> = {
  "/habilidades": {
    title: "Skills & Tools — Danrley Pereira",
    description:
      "Technical skills and tools of Danrley Pereira, software and AI engineer: Python, LangGraph, FastAPI, Kubernetes, Terraform, Snowflake, Playwright, Cypress, Allure, Bruno, k6 and more.",
  },
  "/projetos": {
    title: "Projects & Experience — Danrley Pereira",
    description:
      "Project and work history of Danrley Pereira: LLM agents, data pipelines, full-stack products and cloud platforms, with the technologies used in each.",
  },
  "/curriculo": {
    title: "Résumé — Danrley Pereira",
    description:
      "Résumé of Danrley Pereira, AI engineer and Forward Deployed Engineer (FDE) at DW Corp, in English, Portuguese and Spanish, available as PDF.",
  },
  "/contato": {
    title: "Contact — Danrley Pereira",
    description:
      "Professional contact channels and public profiles of Danrley Pereira, software and AI engineer based in Brasília, Brazil.",
  },
};

export const titleFor = (pathname: string) =>
  routeSeo[pathname.replace(/\/+$/, "")]?.title ?? HOME_TITLE;
