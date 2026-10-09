# NSoC’26 Winter Edition Landing Page

A responsive redesign of the **Nexus Spring of Code (NSoC)** homepage for the Winter Edition developer selection task. The site keeps the supplied NSoC content and data while introducing a new winter-focused visual system, interactive motion, responsive layouts, and dark/light themes.

## Highlights

- Centered hero with typing animation
- Seamless full-page winter gradient in light and dark mode
- Animated snowfall and rotating snowflake decorations
- Interactive glass cards with hover/tilt effects
- Animated stats and contribution flow
- Scroll-driven program timeline
- Rewards section with semantic Lucide icons and confetti interaction
- Sponsor cards and continuous community-partner marquee
- Dark/light theme toggle
- Custom cursor on fine-pointer devices
- Responsive navbar, footer, and back-to-top control

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Bun**
- **Tailwind CSS v4**
- **shadcn/ui + Radix UI**
- **Motion** for component and scroll animation
- **Lucide React** for interface icons
- **React Icons** for social brand icons
- **next-themes** for light/dark mode
- **canvas-confetti** for reward interactions

The project also includes dependencies requested by the task for later expansion, such as GSAP, Zustand, Axios, React Hook Form, and Zod.

## Typography

Fonts are loaded through `next/font/google` so Next.js self-hosts and optimizes them at build time.

- **Syne** — primary UI, headings, navigation, body copy
- **Black Ops One** — restrained display use for stats, milestone numbers, and rank accents

This keeps the interface readable while giving numeric highlights a distinctive event identity.

## Getting Started

### Prerequisites

Install Bun if it is not already available:

```bash
curl -fsSL https://bun.com/install | bash
```

### Install dependencies

```bash
bun install
```

### Start development

```bash
bun dev
```

Open `http://localhost:3000`.

### Production build

```bash
bun run build
```

### Run production locally

```bash
bun start
```

### Lint

```bash
bun run lint
```

## Project Structure

```text
app/
├── layout.tsx          # fonts, metadata, theme and global effects
├── page.tsx            # homepage section composition
└── globals.css         # theme tokens and shared visual utilities

components/
├── layout/
│   └── navbar.tsx
├── sections/
│   ├── hero.tsx
│   ├── features.tsx
│   ├── roles.tsx
│   ├── process.tsx
│   ├── rewards.tsx
│   ├── timeline.tsx
│   ├── sponsors.tsx
│   └── footer.tsx
└── ui/
    ├── winter-card.tsx
    ├── sponsor-card.tsx
    ├── snow-background.tsx
    ├── custom-cursor.tsx
    └── back-to-top.tsx

lib/
├── data.ts             # supplied NSoC content/data
└── utils.ts

public/
├── images/             # NSoC branding
└── sponsers/           # sponsor/community partner assets
```

## Visual System

The page uses one continuous background gradient instead of separate section gradients. This prevents visible seams between Hero, Rewards, Timeline, Sponsors, and the rest of the page. Individual sections remain transparent while cards use translucent surfaces and backdrop blur.

Shared interactive elements intentionally use a consistent language:

- cyan/sky accents
- frosted surfaces
- soft shadows and glows
- restrained 3D tilt
- light-sweep button/card interactions
- continuously rotating snowflake motifs

## Content & Assets

The redesign uses the content, stats, sponsors, partner names, and program information supplied by the current NSoC website/task materials. New program data should not be invented.

Sponsor and community partner images are stored locally under `public/sponsers/`. Keep filename casing exact because Linux-based deployments such as Netlify are case-sensitive.

## Deployment

The project can be deployed to Netlify or Vercel. For Netlify, ensure the repository contains all files from `public/` and that asset paths match their exact filename casing.

Recommended verification before submission:

```bash
bun run lint
bun run build
```

Then test the production deployment on mobile, tablet, desktop, and both color themes.

## Commit Style

Use Conventional Commits with meaningful messages, for example:

```text
feat: add animated program timeline
feat: build community partner marquee
fix: correct deployed logo asset path
style: unify section backgrounds and spacing
refactor: consolidate winter card interactions
```

## License / Credits

NSoC branding, sponsor logos, partner logos, and supplied program content belong to their respective owners. This repository is a frontend redesign created for the NSoC developer selection task.
