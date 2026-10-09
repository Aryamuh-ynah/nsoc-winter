"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import type { MouseEvent } from "react";

type Sponsor = {
  tier: string;
  name: string;
  description: string;
  image: string;
  href: string;
  variant: "title" | "gold" | "silver";
};

const variantStyles = {
  title: {
    glow: "from-cyan-400/30 via-sky-400/10 to-transparent",
    badge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-500 dark:text-cyan-300",
    shadow: "shadow-cyan-500/10",
  },
  gold: {
    glow: "from-amber-400/25 via-yellow-300/10 to-transparent",
    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-600 dark:text-amber-300",
    shadow: "shadow-amber-500/10",
  },
  silver: {
    glow: "from-slate-300/25 via-slate-200/10 to-transparent",
    badge:
      "border-slate-400/30 bg-slate-400/10 text-slate-600 dark:text-slate-300",
    shadow: "shadow-slate-500/10",
  },
};

export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 170,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 170,
    damping: 20,
  });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const style = variantStyles[sponsor.variant];

  return (
    <motion.a
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card/65 p-7 backdrop-blur-xl shadow-xl ${style.shadow}`}
    >
      {/* ambient glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.glow} opacity-60`}
      />

      {/* animated sweep */}
      <motion.div
        initial={{ x: "-140%" }}
        whileHover={{ x: "180%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
      />

      {/* corner ornament */}
      <div className="absolute right-5 top-5">
        <Sparkles className="h-5 w-5 text-cyan-500/40" />
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(28px)" }}>
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.18em] ${style.badge}`}
        >
          {sponsor.tier}
        </span>

        <motion.div
          whileHover={{ scale: 1.06, rotate: 2 }}
          className="mt-7 flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background/70 p-3 shadow-sm"
        >
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <h3 className="mt-7 text-2xl font-bold tracking-tight">
          {sponsor.name}
        </h3>

        <p className="mt-4 line-clamp-4 leading-7 text-muted-foreground">
          {sponsor.description}
        </p>

        <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-500">
          Visit Website
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* bottom animated beam */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500"
      />
    </motion.a>
  );
}
