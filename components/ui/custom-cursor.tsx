"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [visible, setVisible] = useState(false);

  const smoothX = useSpring(x, {
    stiffness: 700,
    damping: 45,
  });

  const smoothY = useSpring(y, {
    stiffness: 700,
    damping: 45,
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 mix-blend-difference md:block"
      />

      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 0.7 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 md:block"
      />
    </>
  );
}
