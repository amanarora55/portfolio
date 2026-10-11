import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TechMarquee } from "@/components/site/tech-marquee";
import { Impact } from "@/components/site/impact";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Projects } from "@/components/site/projects";
import { Education } from "@/components/site/education";
import { Contact } from "@/components/site/contact";
import { profile } from "@/data/resume";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#impact"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-lime focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <TechMarquee />
        <Impact />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted-foreground sm:flex-row md:px-8">
          <p>
            © {profile.name} · {profile.location}
          </p>
          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
