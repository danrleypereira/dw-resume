import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useLocation } from "wouter";

export type Direction = "left" | "right" | "up" | "down";

const DIRECTIONS: Direction[] = ["left", "right", "up", "down"];
const CUBE_ROUTES = ["/", "/about", "/projects"];
const ANIMATION_DURATION = 0.8;

function pickRandomDirection(): Direction {
  return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
}

export interface TransitionState {
  direction: Direction;
  nextPath: string;
}

interface CubeNavigationContextType {
  navigateTo: (path: string) => void;
  isAnimating: boolean;
}

export const CubeNavigationContext = createContext<CubeNavigationContextType>({
  navigateTo: () => {},
  isAnimating: false,
});

export function useCubeNav() {
  return useContext(CubeNavigationContext);
}

export function useCubeNavigation() {
  const [location, setLocation] = useLocation();
  const [displayPath, setDisplayPath] = useState(location);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transition, setTransition] = useState<TransitionState | null>(null);
  const transitionRef = useRef(transition);
  transitionRef.current = transition;

  // Handle external navigation (browser back/forward)
  useEffect(() => {
    if (!isAnimating && location !== displayPath && CUBE_ROUTES.includes(location)) {
      const direction = pickRandomDirection();
      setTransition({ direction, nextPath: location });
      setIsAnimating(true);
    }
  }, [location, displayPath, isAnimating]);

  const navigateTo = useCallback(
    (path: string) => {
      if (isAnimating || path === displayPath) return;
      if (!CUBE_ROUTES.includes(path)) {
        setLocation(path);
        return;
      }
      const direction = pickRandomDirection();
      setTransition({ direction, nextPath: path });
      setIsAnimating(true);
      setLocation(path);
    },
    [isAnimating, displayPath, setLocation]
  );

  const onAnimationComplete = useCallback(() => {
    const t = transitionRef.current;
    if (t) {
      setDisplayPath(t.nextPath);
      setTransition(null);
      setIsAnimating(false);
    }
  }, []);

  return {
    displayPath,
    transition,
    isAnimating,
    navigateTo,
    onAnimationComplete,
    animationDuration: ANIMATION_DURATION,
  };
}
