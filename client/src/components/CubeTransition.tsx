import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CubeFace } from "./CubeFace";
import {
  useCubeNavigation,
  CubeNavigationContext,
} from "@/hooks/useCubeNavigation";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";

const FACES = [
  { path: "/", angle: 0, Component: Home },
  { path: "/about", angle: 90, Component: About },
  { path: "/projects", angle: -90, Component: Projects },
];

export function CubeTransition() {
  const {
    targetAngle,
    isAnimating,
    navigateTo,
    onAnimationComplete,
    currentPath,
    animationDuration,
  } = useCubeNavigation();

  const [halfWidth, setHalfWidth] = useState(() => window.innerWidth / 2);

  const [visitedPaths, setVisitedPaths] = useState<Set<string>>(
    () => new Set([currentPath])
  );

  useEffect(() => {
    const updateSize = () => setHalfWidth(window.innerWidth / 2);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setVisitedPaths((prev) => {
      if (prev.has(currentPath)) return prev;
      return new Set(prev).add(currentPath);
    });
  }, [currentPath]);

  return (
    <CubeNavigationContext.Provider value={{ navigateTo, isAnimating }}>
      {/* Scene: perspective container */}
      <div
        className="fixed inset-0 overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Cube: translateZ pushes cube back, FM rotates it */}
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            transform: `translateZ(${-halfWidth}px) rotateY(${targetAngle}deg)`,
          }}
          transition={{
            duration: animationDuration,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {FACES.map(({ path, angle, Component }) => (
            <CubeFace
              key={path}
              rotateY={angle}
              halfWidth={halfWidth}
              isActive={currentPath === path}
            >
              {visitedPaths.has(path) ? (
                <Component />
              ) : (
                <div className="w-full h-full bg-background" />
              )}
            </CubeFace>
          ))}
        </motion.div>
      </div>
    </CubeNavigationContext.Provider>
  );
}
