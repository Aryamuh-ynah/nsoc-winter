import {
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-500">
                ❄
              </div>

              <span className="text-xl font-bold">NSoC&apos;26</span>
            </div>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              A 45-day open source program where project admins bring real
              codebases and contributors close issues that ship to production.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Community"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-500">
              NAVIGATION
            </p>

            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="#" className="transition hover:text-foreground">
                Home
              </a>

              <a href="#" className="transition hover:text-foreground">
                Leaderboard
              </a>

              <a href="#" className="transition hover:text-foreground">
                Projects
              </a>
            </div>
          </div>

          {/* Organization */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-500">
              ORGANIZATION
            </p>

            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="#sponsors" className="transition hover:text-foreground">
                Sponsors
              </a>

              <a href="#" className="transition hover:text-foreground">
                Team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 NSoC. All rights reserved.</p>

          <p>
            Built with <span className="text-cyan-500">♥</span> by the Nexus
            team
          </p>
        </div>
      </div>
    </footer>
  );
}
