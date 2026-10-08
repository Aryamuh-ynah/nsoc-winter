"use client";

import { features } from "@/lib/data";
import { motion } from "motion/react";

export function Features() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-cyan-500">
            WHY NSOC
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Open source,
            <span className="block text-cyan-500">
              the way it was meant to be.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="absolute right-6 top-4 text-7xl font-bold text-muted/50">
                {feature.number}
              </div>

              <p className="relative text-xs font-medium tracking-[0.2em] text-cyan-500">
                {feature.number}
              </p>

              <h3 className="relative mt-8 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="relative mt-4 max-w-xl leading-7 text-muted-foreground">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
