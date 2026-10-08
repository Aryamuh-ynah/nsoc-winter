"use client";

import { Snowflake } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Snowflake className="h-5 w-5 text-cyan-300" />
          <span className="text-white">NSoC&apos;26</span>
        </a>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#roles" className="transition hover:text-white">
            Roles
          </a>
          <a href="#timeline" className="transition hover:text-white">
            Timeline
          </a>
          <a href="#sponsors" className="transition hover:text-white">
            Sponsors
          </a>
        </nav>

        <a
          href="#"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20"
        >
          Join now
        </a>
      </div>
    </header>
  );
}
