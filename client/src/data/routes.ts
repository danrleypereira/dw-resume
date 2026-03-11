export const CUBE_ROUTES = ["/", "/about", "/projects"] as const;
export type CubeRoute = (typeof CUBE_ROUTES)[number];
