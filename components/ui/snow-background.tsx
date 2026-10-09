"use client";

import { Snowflake } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

export function SnowBackground() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 32 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 10) * 0.6,
        duration: 14 + (index % 8),
        drift: ((index % 7) - 3) * 14,
        opacity: 0.18 + (index % 4) * 0.06,
      })),
    [],
  );

  const largeFlakes = [
    {
      top: "10%",
      left: "5%",
      size: 110,
      duration: 32,
    },
    {
      top: "30%",
      left: "82%",
      size: 160,
      duration: 44,
    },
    {
      top: "58%",
      left: "8%",
      size: 130,
      duration: 38,
    },
    {
      top: "76%",
      left: "72%",
      size: 190,
      duration: 52,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {largeFlakes.map((flake, index) => (
        <motion.div
          key={`large-${index}`}
          className="absolute text-sky-400/[0.05] dark:text-white/[0.04]"
          style={{
            top: flake.top,
            left: flake.left,
          }}
          animate={{
            rotate: 360,
            y: [0, 18, 0],
          }}
          transition={{
            rotate: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Snowflake
            style={{
              width: flake.size,
              height: flake.size,
            }}
            strokeWidth={0.8}
          />
        </motion.div>
      ))}

      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          className="absolute top-[-20px] rounded-full bg-sky-500/50 shadow-[0_0_7px_rgba(14,165,233,0.25)] dark:bg-white/60"
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
