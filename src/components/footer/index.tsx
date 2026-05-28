import { socialIcons } from "@/shared/constants/socialIcons";
import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatedSection>
      <footer className="gradient-border-top w-full bg-slate-950/60 backdrop-blur-xl pt-12 pb-8 mt-20 relative z-10">
        <div className="max-w-400 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              Arthur Zambão
            </span>
            <span className="text-sm text-slate-400 mt-2">
              Transformando ideias em código de alta performance.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50
                  flex items-center justify-center
                  hover:border-cyan-500/40 hover:bg-slate-800/80 hover:scale-110
                  hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]
                  transition-all duration-300"
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={18}
                  height={18}
                  className="object-contain select-none pointer-events-none"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-400 mx-auto px-4 md:px-8 mt-10 pt-6 border-t border-slate-800/30 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} Arthur Zambão. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Desenvolvido com
            <span className="text-cyan-400 font-medium">Next.js</span>
            &
            <span className="text-cyan-400 font-medium">Tailwind</span>
          </p>
        </div>
      </footer>
    </AnimatedSection>
  );
}
