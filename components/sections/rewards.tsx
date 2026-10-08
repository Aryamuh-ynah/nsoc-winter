"use client";

import { contributorRewards, participantRewards } from "@/lib/data";
import {
  Award,
  BadgeCheck,
  Gift,
  Medal,
  Snowflake,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const rankIcons = [Trophy, Medal, Award, Gift];

export function Rewards() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
            <Snowflake className="h-4 w-4" />
            PRIZES & RECOGNITION
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Rewards that
            <span className="text-cyan-500"> feel earned.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Climb the leaderboard and unlock swag, certificates and recognition.
          </p>
        </div>

        {/* Contributor label */}
        <div className="mt-12 flex justify-center">
          <div className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm font-medium text-cyan-500 backdrop-blur">
            CONTRIBUTORS
          </div>
        </div>

        {/* Rank cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contributorRewards.map((item, index) => {
            const Icon = rankIcons[index];

            return (
              <motion.article
                key={item.rank}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-3xl border bg-card/60 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                    : "border-border hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-500" />
                  </div>

                  <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">{item.rank}</h3>

                <p className="mt-1 text-xs tracking-[0.2em] text-cyan-500">
                  {item.rewards.length.toString().padStart(2, "0")} REWARDS
                </p>

                <div className="mt-6 h-px bg-border" />

                <ul className="mt-6 space-y-4">
                  {item.rewards.map((reward) => (
                    <li
                      key={reward}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>

        {/* Participant rewards */}
        <div className="mt-24">
          <div className="mb-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-border" />

            <h3 className="text-center text-xl font-semibold sm:text-2xl">
              Every participant takes home{" "}
              <span className="text-cyan-500">these.</span>
            </h3>

            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {participantRewards.map((reward, index) => (
              <motion.div
                key={reward}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Award className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs tracking-[0.18em] text-cyan-500">
                    ALL PARTICIPANTS
                  </p>

                  <p className="mt-1 font-semibold">{reward}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
