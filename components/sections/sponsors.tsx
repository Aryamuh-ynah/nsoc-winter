"use client";

import { SponsorCard } from "@/components/ui/sponsor-card";
import { communityPartners, sponsors } from "@/lib/data";
import { Handshake, Snowflake } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

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
            <Snowflake className="snowflake-spin h-4 w-4" />
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
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>

        {/* Community Partners */}
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

            <a
              href="mailto:connect.nsoc@gmail.com"
              className="winter-button winter-button-secondary mt-7"
            >
              <Handshake className="h-4 w-4" />
              Partner With Us
            </a>
          </div>

          {/* Marquee */}
          <div className="partner-marquee-mask mt-14 overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 45,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...communityPartners, ...communityPartners].map(
                (partner, index) => {
                  const card = (
                    <div className="group mx-3.5 flex w-64 shrink-0 flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 lg:w-72">
                      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/70 p-2">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="line-clamp-1 text-sm font-semibold transition group-hover:text-cyan-500">
                          {partner.name}
                        </h3>

                        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-cyan-500">
                          {partner.type}
                        </p>
                      </div>
                    </div>
                  );

                  return partner.href ? (
                    <a
                      key={`${partner.name}-${index}`}
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}`}
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={`${partner.name}-${index}`}>{card}</div>
                  );
                },
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
