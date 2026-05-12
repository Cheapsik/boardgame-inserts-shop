"use client";

import { useId } from "react";

export function AnimatedMeshBackground() {
  const noiseFilterId = `meshNoise${useId().replace(/:/g, "")}`;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="mesh-gradient-base" />
      <div className="mesh-gradient-top-veil" />
      <div className="mesh-gradient-blob mesh-gradient-blue-left" />
      <div className="mesh-gradient-blob mesh-gradient-blue-right" />
      <div className="mesh-gradient-blob mesh-gradient-magenta-floor" />
      <div className="mesh-gradient-blob mesh-gradient-magenta-left" />
      <div className="mesh-gradient-blob mesh-gradient-magenta-right" />
      <div className="mesh-gradient-blob mesh-gradient-fuchsia-glow" />
      <div className="mesh-gradient-edge-fade" />
      <svg
        className="mesh-gradient-noise-svg absolute inset-0 size-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id={noiseFilterId}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              stitchTiles="stitch"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="saturate"
              values="0"
              result="mono"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${noiseFilterId})`} />
      </svg>
    </div>
  );
}
