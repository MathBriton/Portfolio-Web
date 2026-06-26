import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export function App() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-primary focus:bg-card focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
