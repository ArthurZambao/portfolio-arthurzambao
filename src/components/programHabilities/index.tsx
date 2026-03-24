import { skills } from "@/shared/constants/skills";
import Image from "next/image";

export function ProgramHabilities() {
  return (
    <section className="p-4 sm:p-6 bg-slate-900 rounded-2xl space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center sm:text-left">
        Habilidades de Programação
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`aspect-square p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700 ${skill.hover}
            flex flex-col items-center justify-center gap-2
            transition-all duration-300
            hover:scale-105 hover:border-cyan-500`}
          >
            <div className="flex items-center justify-center 
              w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
              transition-transform duration-300 group-hover:scale-110"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <span
              className={`text-md sm:text-sm md:text-sm text-slate-400 text-center ${skill.color}`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}