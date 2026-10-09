"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

export function SnowBackground() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 45 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 12) * 0.5,
        duration: 12 + (index % 8),
        drift: ((index % 7) - 3) * 12,
        opacity: 0.2 + (index % 5) * 0.08,
      })),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          className="absolute top-[-20px] rounded-full bg-sky-400/70 dark:bg-white/70 shadow-[0_0_8px_rgba(56,189,248,0.35)]"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, flake.drift, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
