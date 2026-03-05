import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Ângulo que o CUBO precisa girar para mostrar a face
// About está na face direita (rotateY 90deg) → cubo gira -90deg para revelar
// Projects está na face esquerda (rotateY -90deg) → cubo gira +90deg para revelar
const ROUTE_ANGLES: Record<string, number> = {
  "/": 0,
  "/about": -90,
  "/projects": 90,
};

const ANIMATION_DURATION = 0.8;

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
  const [targetAngle, setTargetAngle] = useState(() => ROUTE_ANGLES[location] ?? 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const previousLocation = useRef(location);

  useEffect(() => {
    if (location !== previousLocation.current) {
      const newAngle = ROUTE_ANGLES[location];
      if (newAngle !== undefined) {
        setTargetAngle(newAngle);
        setIsAnimating(true);
      }
      previousLocation.current = location;
    }
  }, [location]);

  const navigateTo = useCallback(
    (path: string) => {
      if (isAnimating) return;
      const angle = ROUTE_ANGLES[path];
      if (angle === undefined) {
        setLocation(path);
        return;
      }
      setIsAnimating(true);
      setTargetAngle(angle);
      setLocation(path);
    },
    [isAnimating, setLocation]
  );

  const onAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return {
    targetAngle,
    isAnimating,
    navigateTo,
    onAnimationComplete,
    currentPath: location,
    animationDuration: ANIMATION_DURATION,
  };
}

export { ROUTE_ANGLES };
