"use client";
import {
  CalendarDays,
  Flag,
  GitPullRequest,
  LockKeyhole,
  Megaphone,
  Snowflake,
  Trophy,
  UserPlus,
} from "lucide-react";

import { motion, useScroll, useSpring } from "motion/react";

import { WinterCard } from "@/components/ui/winter-card";
import { timeline } from "@/lib/data";
import { useRef } from "react";

const timelineIcons = [
  UserPlus,
  Megaphone,
  GitPullRequest,
  LockKeyhole,
  Flag,
  Trophy,
];
export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
            <Snowflake className="snowflake-spin h-4 w-4" />
            PROGRAM TIMELINE
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Here&apos;s how we{" "}
            <span className="text-cyan-500">planned it.</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Follow the journey from registration to results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* base line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2" />

          {/* animated line */}
          <motion.div
            style={{
              scaleY: progress,
              transformOrigin: "top",
            }}
            className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300 via-sky-500 to-blue-600 shadow-[0_0_20px_rgba(14,165,233,0.45)] md:left-1/2"
          />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = timelineIcons[index];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={isLeft ? "md:pr-4" : "md:col-start-2 md:pl-4"}
                  >
                    <WinterCard className="ml-12 p-7 md:ml-0">
                      <div className="flex items-start justify-between gap-4">
                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.1,
                          }}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10"
                        >
                          <Icon className="h-5 w-5 text-cyan-500" />
                        </motion.div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-cyan-500" />

                          <span className="text-[10px] font-semibold tracking-[0.15em] text-cyan-500">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">
                        STEP {item.step} / 06
                      </p>

                      <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

                      <p className="mt-4 leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </WinterCard>
                  </div>

                  {/* timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      delay: index * 0.08 + 0.2,
                    }}
                    className="absolute left-5 top-10 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-background shadow-[0_0_20px_rgba(34,211,238,0.5)] md:left-1/2"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
