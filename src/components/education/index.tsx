import { education } from "@/shared/constants/education";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionTitle } from "../ui/SectionTitle";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <AnimatedSection>
      <section
        id="educação"
        className="glass-card p-5 sm:p-8 space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
          </div>
          <SectionTitle>Formação Acadêmica</SectionTitle>
        </div>

        <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
          {education.map((ed) => (
            <div key={ed.institution} className="relative group">
              {/* Timeline dot with glow */}
              <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-slate-800/80 border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300 flex items-center justify-center animate-dot-pulse">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:bg-cyan-400 transition-colors duration-300" />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-700/30 transition-all duration-300 group-hover:bg-slate-800/40 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {ed.institution}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500">{ed.date}</span>
                  {ed.period && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span className="text-xs text-slate-500">
                        Período: <strong className="text-slate-400 font-medium">{ed.period}</strong>
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {ed.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
