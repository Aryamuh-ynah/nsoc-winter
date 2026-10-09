"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { WinterCard } from "@/components/ui/winter-card";

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
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <a
    href={sponsor.href}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    <WinterCard className="h-full p-7">
      <span className={...}>
        {sponsor.tier}
      </span>

      <div className="mt-7 flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background/70 p-3">
        <Image
          src={sponsor.image}
          alt={sponsor.name}
          width={96}
          height={96}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-7 text-2xl font-bold">
        {sponsor.name}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {sponsor.description}
      </p>

      <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-500">
        Visit Website
        <ExternalLink className="h-4 w-4" />
      </div>
    </WinterCard>
  </a>
</motion.div>
  );
}
