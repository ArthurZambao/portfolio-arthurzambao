import { courses } from "@/shared/constants/courses";
import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionTitle } from "../ui/SectionTitle";
import { BookOpen, Calendar, Clock } from "lucide-react";

export function Courses() {
  return (
    <AnimatedSection>
      <section id="Cursos" className="glass-card p-5 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <BookOpen className="w-5 h-5 text-cyan-400" />
          </div>
          <SectionTitle>Cursos</SectionTitle>
        </div>

        <div className="relative space-y-4">
          {courses.map((course) => (
            <a
              key={course.institution}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl p-4
                bg-slate-800/20 border border-slate-700/30
                transition-all duration-400
                hover:bg-slate-800/50 hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]
                hover:border-cyan-500/20"
            >
              <div className="flex gap-3 sm:gap-4">
                {/* Logo - alinhado no topo */}
                <div className="relative shrink-0 self-start">
                  <Image
                    src={course.logo}
                    alt={course.institution}
                    width={52}
                    height={52}
                    className="w-11 h-11 sm:w-14 sm:h-14 object-cover rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-105
                      ring-2 ring-slate-700/50 group-hover:ring-cyan-500/30 select-none pointer-events-none"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm sm:text-base text-white transition-colors duration-300 group-hover:text-cyan-400 leading-snug break-words">
                    {course.name}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300 mt-1">
                    {course.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2 sm:mt-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />
                      <span className="text-[11px] sm:text-xs text-slate-500">
                        Concluído em{" "}
                        <strong className="text-slate-400 font-medium">
                          {course.conclusionDate}
                        </strong>
                      </span>
                    </div>
                    {course.workload && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />
                        <span className="text-[11px] sm:text-xs text-slate-500">
                          Carga horária:{" "}
                          <strong className="text-slate-400 font-medium">
                            {course.workload}
                          </strong>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
            </a>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
