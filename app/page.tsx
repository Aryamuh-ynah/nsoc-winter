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
    <main className="page-shell relative overflow-hidden">
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
