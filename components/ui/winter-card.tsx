"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

type WinterCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function WinterCard({
  children,
  className = "",
  interactive = true,
}: WinterCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 160,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 160,
    damping: 20,
  });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (!interactive) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={
        interactive
          ? {
              y: -6,
              scale: 1.01,
            }
          : undefined
      }
      style={
        interactive
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-[1.75rem] border border-sky-500/10 bg-white/60 shadow-[0_20px_60px_rgba(14,165,233,0.08)] backdrop-blur-xl transition-colors hover:border-sky-400/30 dark:border-white/10 dark:bg-white/[0.035] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/[0.08] via-transparent to-indigo-400/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <motion.div
        initial={{ x: "-150%" }}
        whileHover={{ x: "180%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
      />

      <div className="relative z-10">{children}</div>

      <div className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}
