"use client";

import { WinterCard } from "@/components/ui/winter-card";
import { timeline } from "@/lib/data";
import { CalendarDays, Snowflake } from "lucide-react";
import { motion } from "motion/react";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
            <Snowflake className="snowflake-spin h-4 w-4" />
            PROGRAM TIMELINE
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Here&apos;s how we
            <span className="text-cyan-500"> planned it.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Follow the journey from registration to results.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={isLeft ? "md:pr-4" : "md:col-start-2 md:pl-4"}
                  >
                    <WinterCard className="ml-12 p-7 md:ml-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                          <CalendarDays className="h-4 w-4 text-cyan-500" />
                        </div>

                        <span className="text-xs font-semibold tracking-[0.18em] text-cyan-500">
                          {item.date}
                        </span>
                      </div>

                      <p className="mt-6 text-xs font-medium tracking-[0.2em] text-muted-foreground">
                        STEP {item.step} / 06
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </WinterCard>
                  </div>

                  <div className="absolute left-5 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-500 bg-background md:left-1/2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
