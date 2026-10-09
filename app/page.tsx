import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Rewards } from "@/components/sections/rewards";
import { Roles } from "@/components/sections/roles";
import { Sponsors } from "@/components/sections/sponsors";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.08),transparent_32%),radial-gradient(circle_at_15%_60%,rgba(56,189,248,0.05),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.05),transparent_30%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Roles />
        <Process />
        <Rewards />
        <Timeline />
        <Sponsors />
        <Footer />
      </div>
    </main>
  );
}
