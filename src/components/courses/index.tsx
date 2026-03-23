import { courses } from "@/shared/constants/courses";
import Image from "next/image";

export function Courses() {
  return (
    <section id="Cursos" className="p-6 bg-slate-900 rounded-2xl space-y-6">
      <h3 className="text-xl font-bold text-white">Cursos</h3>
      <div className="relative space-y-8">
        {courses.map((course) => (
          <a
            key={course.institution}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-xl p-4 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] border border-transparent hover:border-slate-700"
          >
            <div className="flex items-start gap-4">
              <Image
                src={course.logo}
                alt={course.institution}
                width={52}
                height={52}
                className="w-16 h-16 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />

              <div>
                <p className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {course.name}
                </p>

                <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {course.institution}
                </p>

                <p className="mt-2 text-xs text-slate-500 mb-2">
                  Concluído em:{" "}
                  <strong className="text-slate-400">
                    {course.conclusionDate}
                  </strong>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-linear-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
          </a>
        ))}
      </div>
    </section>
  );
}
