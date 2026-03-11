import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));

export const CUBE_ROUTES = ["/", "/about", "/projects"] as const;
export type CubeRoute = (typeof CUBE_ROUTES)[number];

export const PAGE_MAP: Record<string, React.ComponentType> = {
  "/": Home,
  "/about": About,
  "/projects": Projects,
};
