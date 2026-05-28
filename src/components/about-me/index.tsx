import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionTitle } from "../ui/SectionTitle";
import { User } from "lucide-react";

export function AboutMe() {
  return (
    <AnimatedSection>
      <section
        id="sobre-mim"
        className="relative glass-card p-5 sm:p-8 space-y-4 overflow-hidden group"
      >
        {/* Decorative glow bar on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent rounded-full" />

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <User className="w-5 h-5 text-cyan-400" />
          </div>
          <SectionTitle>Sobre Mim</SectionTitle>
        </div>

        <p className="text-slate-400 leading-relaxed text-sm sm:text-base pl-1">
          Me chamo Arthur Zambão Leite, tenho 18 anos e sou estudante de <span className="font-bold text-cyan-500">Análise e Desenvolvimento de Sistemas na FIAP</span>, além de possuir formação técnica em <span className="font-bold text-cyan-500">Desenvolvimento de Sistemas pela ETEC de Guarulhos</span>.
          <br />
          <br />
          Tenho interesse e experiência em desenvolvimento web full stack, atuando tanto no front-end quanto no back-end, com conhecimentos em JavaScript, React, Next.js, Node.js, NestJS, Java e bancos de dados.
          <br />
          <br />
          Gosto de desenvolver soluções que unam performance, usabilidade e organização de código, sempre buscando evoluir por meio de estudos, projetos práticos e experiências em equipe. Também possuo experiência com manutenção de projetos e trabalho colaborativo em ambientes de tecnologia.
          <br />
          <br />
          Atualmente, sigo aprofundando meus conhecimentos e buscando oportunidades para crescer profissionalmente como desenvolvedor full stack.
        </p>

        {/* Hover glow overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      </section>
    </AnimatedSection >
  );
}
