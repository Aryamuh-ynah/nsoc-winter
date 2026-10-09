"use client";

import {
  Award,
  BadgeCheck,
  Globe2,
  GraduationCap,
  Medal,
  Megaphone,
  NotebookPen,
  ScrollText,
  Shirt,
  Sparkles,
  Trophy,
} from "lucide-react";

import confetti from "canvas-confetti";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent } from "react";

import { contributorRewards, participantRewards } from "@/lib/data";

const rankIcons = [Trophy, Medal, Award, Sparkles];
const participantRewardIcons = {
  "TruScholar Digital Certificate": ScrollText,
  "NSoC Digital Certificate": BadgeCheck,
  "Badge Point Base": Medal,
};

function getRewardIcon(reward: string) {
  const value = reward.toLowerCase();

  if (value.includes("t-shirt")) return Shirt;
  if (value.includes("cap")) return GraduationCap;
  if (
    value.includes("diary") ||
    value.includes("bookmark") ||
    value.includes("pen")
  )
    return NotebookPen;

  if (value.includes("certificate")) return ScrollText;
  if (value.includes("domain")) return Globe2;
  if (value.includes("social")) return Megaphone;

  return BadgeCheck;
}

function RewardCard({
  item,
  index,
}: {
  item: (typeof contributorRewards)[number];
  index: number;
}) {
  const Icon = rankIcons[index];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateYRaw = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 180,
    damping: 20,
  });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    glowX.set(x * 100);
    glowY.set(y * 100);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);

    glowX.set(50);
    glowY.set(50);
  }

  function celebrate() {
    if (index !== 0) return;

    confetti({
      particleCount: 90,
      spread: 65,
      origin: {
        x: 0.5,
        y: 0.65,
      },
    });
  }

  const glow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(34,211,238,0.22), transparent 38%)`,
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={celebrate}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-xl backdrop-blur-xl"
    >
      {/* cursor-follow glow */}
      <motion.div
        style={{
          background: glow,
        }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      {/* huge rank number */}
      <motion.span
        whileHover={{
          scale: 1.08,
        }}
        className="pointer-events-none absolute -right-2 -top-8 text-[9rem] font-black leading-none text-cyan-500/[0.05]"
      >
        {index === 0 ? "1" : index === 1 ? "3" : index === 2 ? "5" : "10"}
      </motion.span>

      <div
        className="relative z-10"
        style={{
          transform: "translateZ(35px)",
        }}
      >
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              rotate: [0, -8, 8, 0],
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
          >
            <Icon className="h-6 w-6 text-cyan-500" />
          </motion.div>

          <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
            {item.rewards.length.toString().padStart(2, "0")} REWARDS
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-bold tracking-tight">{item.rank}</h3>

        {index === 0 && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
            <Trophy className="h-3.5 w-3.5" />
            TOP PRIZE
          </div>
        )}

        <div className="my-6 h-px bg-border" />

        <ul className="space-y-3">
          {item.rewards.map((reward, rewardIndex) => {
            const RewardIcon = getRewardIcon(reward);

            return (
              <motion.li
                key={reward}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08 + rewardIndex * 0.05,
                }}
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-cyan-500/[0.06] hover:text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <RewardIcon className="h-4 w-4 text-cyan-500" />
                </span>

                <span>{reward}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* animated bottom beam */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      />
    </motion.article>
  );
}

export function Rewards() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* background lights */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500"
          >
            <Sparkles className="h-4 w-4" />
            PRIZES & RECOGNITION
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Rewards that
            <span className="text-cyan-500"> feel earned.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Climb the leaderboard and unlock swag, certificates and recognition.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 [perspective:1200px]">
          {contributorRewards.map((item, index) => (
            <RewardCard key={item.rank} item={item} index={index} />
          ))}
        </div>

        {/* Everyone gets */}
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
            {participantRewards.map((reward, index) => {
              const Icon =
                participantRewardIcons[
                  reward as keyof typeof participantRewardIcons
                ] ?? Award;

              return (
                <motion.div
                  key={reward}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.12,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10"
                  >
                    <Icon className="h-5 w-5 text-cyan-500" />
                  </motion.div>

                  <div>
                    <p className="text-[10px] tracking-[0.18em] text-cyan-500">
                      ALL PARTICIPANTS
                    </p>

                    <p className="mt-1 font-semibold">{reward}</p>
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
