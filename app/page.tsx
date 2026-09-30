import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1400px] overflow-hidden rounded-[clamp(24px,3vw,40px)] bg-cream">
      <Header />
      <Hero />
      <Marquee text="Build production-grade APIs, backends and experiences." />
      <Intro />
      <Marquee text="Backend engineer with a knack for turning problems and opportunities into APIs." />
      <Projects />
      <Stack />
      <Showcase />
      <Contact />
    </main>
  );
}
