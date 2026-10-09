"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/icon.webp"
            alt="NSoC logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-contain"
          />

          <span className="text-xl font-bold">NSoC&apos;26</span>
        </div>

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
