import { AboutMe } from "@/components/about-me";
import { Courses } from "@/components/courses";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProgramHabilities } from "@/components/programHabilities";
import { Projects } from "@/components/projects";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-300 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <div className="flex-1">
        <div className="max-w-400 mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
          <main className="flex-1 sm:space-y-12 space-y-8 md:p-6 p-0 rounded-2xl">
            <HeroSection />
            <AboutMe />
            <Projects />
          </main>

          <aside className="w-full md:w-100 lg:w-120 space-y-10">
            <ProgramHabilities />
            <Courses />
            <Education />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
