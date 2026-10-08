"use client";

import { communityPartners, sponsors } from "@/lib/data";
import { ExternalLink, Handshake, Snowflake } from "lucide-react";
import { motion } from "motion/react";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Sponsors heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
            <Snowflake className="h-4 w-4" />
            TRACK RECORD & BACKING
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Past
            <span className="text-cyan-500"> Sponsors.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A look back at the incredible organizations and platforms that
            powered our previous cohorts with funding, developer tools, and
            infrastructure.
          </p>
        </div>

        {/* Sponsor cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <motion.article
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-500">
                {sponsor.tier}
              </p>

              <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/70">
                <Handshake className="h-7 w-7 text-cyan-500" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{sponsor.name}</h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {sponsor.description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-500 transition hover:text-cyan-400"
              >
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Community partners */}
        <div className="mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-cyan-500">
              ECOSYSTEM & GRASSROOTS NETWORK
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Community
              <span className="text-cyan-500"> Partners.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The active colleges, student clubs, developer hubs, and
              communities driving enthusiastic participation and innovation
              across the nation.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {communityPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-border bg-card/60 p-6 text-center backdrop-blur-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/70">
                  <Handshake className="h-6 w-6 text-cyan-500" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{partner.name}</h3>

                <p className="mt-2 text-xs font-medium tracking-[0.15em] text-cyan-500">
                  {partner.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
