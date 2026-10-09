import {
  BriefcaseBusiness,
  Camera,
  Code2,
  MessageCircle,
  Play,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Discord",
    href: "https://discord.gg/bZ47fac2jn",
    icon: MessageCircle,
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/Cs6bcCYUD5zLXmElzX9HOq",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nsoc.in",
    icon: Camera,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nso-code",
    icon: BriefcaseBusiness,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@nsoc-in",
    icon: Play,
  },
  {
    name: "GitHub",
    href: "https://github.com/deepanshu-prajapati01",
    icon: Code2,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
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

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              A 45-day open source program where project admins bring real
              codebases and contributors close issues that ship to production.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
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

              <a
                href="/leaderboard"
                className="transition hover:text-foreground"
              >
                Leaderboard
              </a>

              <a href="/projects" className="transition hover:text-foreground">
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

              <a href="/team" className="transition hover:text-foreground">
                Team
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 NSoC. All rights reserved.</p>

          <p>
            Built with <span className="text-cyan-500">♥</span> by Humayra
          </p>
        </div>
      </div>
    </footer>
  );
}
