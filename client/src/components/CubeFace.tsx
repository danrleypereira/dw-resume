import React from "react";

interface CubeFaceProps {
  rotateY: number;
  halfWidth: number;
  children: React.ReactNode;
  isActive: boolean;
}

export function CubeFace({ rotateY, halfWidth, children, isActive }: CubeFaceProps) {
  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `rotateY(${rotateY}deg) translateZ(${halfWidth}px)`,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div
        className="w-full h-full overflow-y-auto overflow-x-hidden bg-background"
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        {children}
      </div>
    </div>
  );
}
