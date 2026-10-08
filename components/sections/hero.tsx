"use client";

import { ArrowRight, Snowflake } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-16 text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
            <Snowflake className="h-4 w-4" />
            45-DAY OPEN SOURCE SPRINT
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Nexus
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
              Spring of Code.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            A 45-day open source program where project maintainers bring
            real-world projects, and contributors work on solving actual issues,
            building features, and shipping production-ready code. No toy
            projects. No filler tasks. Just meaningful work and a community that
            grows together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#roles"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Join now
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#about"
              className="rounded-xl border border-border bg-card/50 px-6 py-3 font-semibold backdrop-blur transition hover:bg-accent"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square rounded-[3rem] border border-border bg-card/50 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-8 rounded-[2.5rem] border border-border bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="text-sm tracking-[0.35em] text-cyan-500">
                  WINTER EDITION
                </p>
                <p className="mt-4 text-7xl font-bold">2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
