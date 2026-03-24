"use client";

import { useTypewriterLoop } from "@/shared/components/useTypeWriter";
import { socialIcons } from "@/shared/constants/socialIcons";
import Image from "next/image";

export function HeroSection() {
  const typedTitle = useTypewriterLoop([
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor de Sistemas",
  ]);

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10 py-12"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          Arthur Zambão
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-400">
          {typedTitle}
          <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle"></span>
        </h2>

        {/* REDES */}
        <div className="flex flex-col w-fit gap-3 pt-2 mx-auto md:mx-0">
          {socialIcons.map((icon) => (
            <a
              href={icon.link}
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              // Ajuste 2: Trocamos 'w-fit' por 'w-full' no botão
              className="w-full flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                width={20}
                height={20}
                className="object-contain shrink-0"
              />
              <span className="sm:block hidden">{icon.link}</span>
              <span className="block sm:hidden text-lg px-10">{icon.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* IMAGEM */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/80 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border border-purple-500/90 scale-105 animate-pulse delay-100"></div>

        <Image
          src="/arthurzambao.png"
          alt="Arthur Zambão"
          priority
          width={300}
          height={300}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-slate-900 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
