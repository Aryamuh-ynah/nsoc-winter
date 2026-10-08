"use client";

import { stats, steps } from "@/lib/data";
import { motion } from "motion/react";

export function Process() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Stats */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative px-8 py-10 text-center md:px-10"
            >
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-border md:block" />
              )}

              <p className="text-5xl font-bold tracking-tight text-cyan-500 sm:text-6xl">
                {stat.value}
              </p>

              <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <div className="mt-24 max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-cyan-500">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From registration
            <span className="block text-cyan-500">to real contribution.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />

          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-background text-sm font-bold text-cyan-500 shadow-sm">
                {step.number}
              </div>

              <h3 className="mt-7 text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
