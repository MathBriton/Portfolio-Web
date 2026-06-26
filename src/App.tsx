import { BackgroundFX } from "@/components/background-fx";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { SideNav } from "@/components/side-nav";
import { Skills } from "@/components/skills";

export function App() {
  return (
    <>
      <BackgroundFX />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <SideNav />
      <main id="content">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
