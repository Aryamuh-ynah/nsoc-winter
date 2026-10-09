"use client";

import { stats, steps } from "@/lib/data";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Process() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Stats */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl md:grid-cols-3">
          {stats.map((stat, index) => {
            const numericValue = Number(stat.value.replace(/\D/g, ""));
            const suffix = stat.value.replace(/[0-9]/g, "");

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="px-8 py-10 text-center"
              >
                <p className="font-display text-5xl tracking-wide text-cyan-500 sm:text-6xl">
                  <CountUp value={numericValue} suffix={suffix} />
                </p>

                <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
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
          <div className="absolute left-8 right-8 top-8 hidden h-px overflow-hidden bg-border lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                className="font-display relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-background text-sm text-cyan-500 shadow-[0_0_25px_rgba(14,165,233,0.08)]"
              >
                {step.number}
              </motion.div>

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
