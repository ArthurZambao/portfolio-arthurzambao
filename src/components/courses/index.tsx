import { courses } from "@/shared/constants/courses";
import Image from "next/image";

export function Courses() {
  return (
    <section
      id="Cursos"
      className="p-6 bg-slate-900 rounded-2xl space-y-6"
    >
      <h3 className="text-xl font-bold text-white">Cursos</h3>
      <div className="relative space-y-8">
        {courses.map((course) => (
          <a
            key={course.institution}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="flex">
              <Image
                src={course.logo}
                alt={course.institution}
                width={52}
                height={52}
                className="w-20 h-20 object-cover pr-2"
              />
              <div>
                <p className="font-semibold text-white group-hover:text-cyan-400">
                  {course.name}
                </p>
                <p className=" text-sm text-slate-400">{course.institution}</p>
                <p className="mt-2 text-xs text-slate-500 mb-5">
                  Concluido em: <strong>{course.conclusionDate}</strong>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
