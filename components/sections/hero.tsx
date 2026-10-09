"use client";

import { ArrowRight, Snowflake } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const text = "Spring of Code.";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-sky-600 dark:text-cyan-300">
          <Snowflake className="snowflake-spin h-4 w-4" />
          45-DAY OPEN SOURCE SPRINT
        </div>

        <h1 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block">Nexus</span>

          <span className="mt-2 block min-h-[1.1em] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            {typed}
            <span className="ml-1 inline-block w-[3px] animate-pulse bg-sky-500 align-middle">
              &nbsp;
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          A 45-day open source program where project maintainers bring
          real-world projects, and contributors work on solving actual issues,
          building features, and shipping production-ready code. No toy
          projects. No filler tasks. Just meaningful work and a community that
          grows together.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#roles"
            className="winter-button winter-button-primary inline-flex items-center justify-center gap-2"
          >
            <span>Join now</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>

          <a
            href="#about"
            className="winter-button winter-button-secondary inline-flex items-center justify-center"
          >
            Learn more
          </a>
        </div>
      </motion.div>
    </section>
  );
}
