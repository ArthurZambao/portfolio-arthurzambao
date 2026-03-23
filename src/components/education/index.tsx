import { education } from "@/shared/constants/education";

export function Education() {
  return (
    <section
      id="educação"
      className="p-6 bg-slate-900 rounded-2xl space-y-6"
    >
      <h3 className="text-xl font-bold text-white">Formação Acadêmica</h3>
      <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-700">
        {education.map((ed) => (
          <div key={ed.institution} className="relative group">
            <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-cyan-500 group-hover:scale-110 transition-all flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-cyan-500"></div>
            </div>
            <p className="font-semibold text-white group-hover:text-cyan-400">
              {ed.institution}
            </p>
            <p className="text-xs text-slate-500">{ed.date}</p>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-200">
              {ed.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
