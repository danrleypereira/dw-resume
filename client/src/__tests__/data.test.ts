import { describe, it, expect } from "vitest";
import { SOCIAL_LINKS, OWNER } from "../data/social";
import { PROJECTS } from "../data/projects";
import { EXPERIENCES } from "../data/experiences";
import { SKILLS } from "../data/skills";
import { PERSONAS, PERSONA_ROTATION_MS } from "../data/personas";
import { CERTIFICATIONS, LANGUAGES } from "../data/certifications";
import { CUBE_ROUTES, PAGE_MAP } from "../data/routes";

describe("Social data", () => {
  it("has all required social links", () => {
    expect(SOCIAL_LINKS.length).toBeGreaterThanOrEqual(1);
    SOCIAL_LINKS.forEach((link) => {
      expect(link.url).toMatch(/^https?:\/\//);
      expect(link.name).toBeTruthy();
      expect(link.icon).toBeDefined();
    });
  });

  it("has owner info", () => {
    expect(OWNER.name).toBeTruthy();
    expect(OWNER.email).toMatch(/@/);
  });
});

describe("Projects data", () => {
  it("has at least one featured project", () => {
    const featured = PROJECTS.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(1);
  });

  it("every project has required fields", () => {
    PROJECTS.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThanOrEqual(1);
      expect(project.icon).toBeDefined();
    });
  });
});

describe("Experiences data", () => {
  it("has experiences in chronological order (most recent first)", () => {
    expect(EXPERIENCES.length).toBeGreaterThanOrEqual(1);
    EXPERIENCES.forEach((exp) => {
      expect(exp.title).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.highlights.length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe("Skills data", () => {
  it("has skill categories with items", () => {
    expect(SKILLS.length).toBeGreaterThanOrEqual(1);
    SKILLS.forEach((category) => {
      expect(category.category).toBeTruthy();
      expect(category.items.length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe("Personas data", () => {
  it("has personas with images", () => {
    expect(PERSONAS.length).toBe(3);
    PERSONAS.forEach((persona) => {
      expect(persona.image).toMatch(/^\//);
      expect(persona.title).toBeTruthy();
    });
  });

  it("has a valid rotation interval", () => {
    expect(PERSONA_ROTATION_MS).toBeGreaterThan(1000);
  });
});

describe("Certifications data", () => {
  it("has certifications and languages", () => {
    expect(CERTIFICATIONS.length).toBeGreaterThanOrEqual(1);
    expect(LANGUAGES.length).toBeGreaterThanOrEqual(1);
    LANGUAGES.forEach((lang) => {
      expect(lang.name).toBeTruthy();
      expect(lang.level).toBeTruthy();
    });
  });
});

describe("Routes", () => {
  it("CUBE_ROUTES and PAGE_MAP are in sync", () => {
    const routeKeys = Object.keys(PAGE_MAP);
    CUBE_ROUTES.forEach((route) => {
      expect(routeKeys).toContain(route);
    });
    expect(routeKeys.length).toBe(CUBE_ROUTES.length);
  });

  it("all routes start with /", () => {
    CUBE_ROUTES.forEach((route) => {
      expect(route).toMatch(/^\//);
    });
  });
});
