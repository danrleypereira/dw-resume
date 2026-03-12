import { motion } from "framer-motion";
import { Suspense, useEffect, useState, useMemo, useCallback } from "react";
import {
  useCubeNavigation,
  CubeNavigationContext,
  type TransitionState,
} from "@/hooks/useCubeNavigation";
import { PAGE_MAP } from "@/data/routes";
import { Sidebar } from "@/components/Sidebar";

function getTransforms(
  transition: TransitionState | null,
  halfWidth: number,
  halfHeight: number,
) {
  if (!transition) {
    return {
      depth: halfWidth,
      currentFace: `translateZ(${halfWidth}px)`,
      nextFace: "",
      cubeFrom: `translateZ(${-halfWidth}px)`,
      cubeTo: `translateZ(${-halfWidth}px)`,
    };
  }

  const { direction } = transition;
  const isVertical = direction === "up" || direction === "down";
  const d = isVertical ? halfHeight : halfWidth;

  let nextFace: string;
  let cubeTo: string;

  switch (direction) {
    case "right":
      nextFace = `rotateY(90deg) translateZ(${d}px)`;
      cubeTo = `translateZ(${-d}px) rotateY(-90deg)`;
      break;
    case "left":
      nextFace = `rotateY(-90deg) translateZ(${d}px)`;
      cubeTo = `translateZ(${-d}px) rotateY(90deg)`;
      break;
    case "up":
      nextFace = `rotateX(-90deg) translateZ(${d}px)`;
      cubeTo = `translateZ(${-d}px) rotateX(90deg)`;
      break;
    case "down":
      nextFace = `rotateX(90deg) translateZ(${d}px)`;
      cubeTo = `translateZ(${-d}px) rotateX(-90deg)`;
      break;
  }

  return {
    depth: d,
    currentFace: `translateZ(${d}px)`,
    nextFace,
    cubeFrom: `translateZ(${-d}px)`,
    cubeTo,
  };
}

function PageLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <div className="text-primary text-2xl font-bold animate-pulse">DW</div>
    </div>
  );
}

export function CubeTransition() {
  const {
    displayPath,
    transition,
    isAnimating,
    navigateTo,
    onAnimationComplete,
    animationDuration,
  } = useCubeNavigation();

  const [dimensions, setDimensions] = useState(() => ({
    halfWidth: window.innerWidth / 2,
    halfHeight: window.innerHeight / 2,
  }));

  useEffect(() => {
    const updateSize = () =>
      setDimensions({
        halfWidth: window.innerWidth / 2,
        halfHeight: window.innerHeight / 2,
      });
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { halfWidth, halfHeight } = dimensions;
  const transforms = useMemo(
    () => getTransforms(transition, halfWidth, halfHeight),
    [transition, halfWidth, halfHeight],
  );

  const CurrentPage = PAGE_MAP[displayPath];
  const NextPage = transition ? PAGE_MAP[transition.nextPath] : null;

  const scrollRef = useCallback((node: HTMLDivElement | null) => {
    if (node) node.scrollTop = 0;
  }, [displayPath]);

  return (
    <CubeNavigationContext.Provider value={{ navigateTo, isAnimating }}>
      <Sidebar />
      <div
        className="fixed inset-0 overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          initial={false}
          animate={{ transform: transition ? transforms.cubeTo : transforms.cubeFrom }}
          transition={{
            duration: transition ? animationDuration : 0,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {/* Current face */}
          <div
            className="absolute inset-0"
            style={{
              transform: transforms.currentFace,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div
              ref={scrollRef}
              className="w-full h-full overflow-y-auto overflow-x-hidden bg-background"
              style={{ pointerEvents: !transition ? "auto" : "none" }}
            >
              <Suspense fallback={<PageLoader />}>
                {CurrentPage && <CurrentPage />}
              </Suspense>
            </div>
          </div>

          {/* Next face - only during transition */}
          {transition && NextPage && (
            <div
              className="absolute inset-0"
              style={{
                transform: transforms.nextFace,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div
                className="w-full h-full overflow-y-auto overflow-x-hidden bg-background"
                style={{ pointerEvents: "none" }}
              >
                <Suspense fallback={<PageLoader />}>
                  <NextPage />
                </Suspense>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </CubeNavigationContext.Provider>
  );
}
