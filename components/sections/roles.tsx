"use client";

import { WinterCard } from "@/components/ui/winter-card";
import { roles } from "@/lib/data";
import { Check, Code2, FolderGit2, Users } from "lucide-react";
import { motion } from "motion/react";

const icons = [Code2, FolderGit2, Users];

export function Roles() {
  return (
    <section
      id="roles"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-cyan-500">
            CHOOSE YOUR ROLE
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            There&apos;s a place for
            <span className="block text-cyan-500">every builder.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you contribute code, maintain a project, or lead your campus
            community, NSoC gives you a role to build from.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={role.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <WinterCard className="h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                    <Icon className="h-5 w-5 text-sky-500" />
                  </div>

                  <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-sky-500">
                    {role.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">{role.title}</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {role.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10">
                          <Check className="h-3 w-3 text-sky-500" />
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </WinterCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
