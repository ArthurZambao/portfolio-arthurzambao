import { skills } from "@/shared/constants/skills";
import Image from "next/image";

export function ProgramHabilities() {
  return (
    <section className="sm:p-6 p-4 bg-slate-900 rounded-2xl border border-slate-900 space-y-6 relative">
      <h3 className="text-xl font-bold text-white">
        Habilidades de Programação
      </h3>

      <div className="grid grid-cols-5 sm:gap-4 gap-2 relative">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`aspect-square sm:p-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 ${skill.hover} hover:scale-110 transition-all group flex flex-col items-center justify-center gap-2`}
          >
            <div className="group-hover:scale-110 transition-transform flex items-center justify-center h-8 w-8">
              <Image
                src={skill.icon}
                alt="skill"
                width={32}
                height={32}
                className="w-auto h-auto object-contain"
              />
            </div>
            <span className={`text-[10px] text-slate-500 ${skill.color}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
