import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Roles } from "@/components/sections/roles";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Roles />
      <Process />
    </main>
  );
}
