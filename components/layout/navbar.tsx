"use client";

import { Snowflake } from "lucide-react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Snowflake className="h-5 w-5 text-cyan-500" />
          <span>NSoC&apos;26</span>
        </a>

        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition hover:text-foreground">
            About
          </a>
          <a href="#roles" className="transition hover:text-foreground">
            Roles
          </a>
          <a href="#timeline" className="transition hover:text-foreground">
            Timeline
          </a>
          <a href="#sponsors" className="transition hover:text-foreground">
            Sponsors
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#roles"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Join now
          </a>
        </div>
      </div>
    </header>
  );
}
