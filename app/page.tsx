import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Rewards } from "@/components/sections/rewards";
import { Roles } from "@/components/sections/roles";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Roles />
      <Process />
      <Rewards />
      <Timeline />
    </main>
  );
}
