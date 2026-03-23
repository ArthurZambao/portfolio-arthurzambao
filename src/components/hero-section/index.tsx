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
      className="flex flex-col-reverse items-center md:flex-row md:items-start gap-8 py-12"
    >
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          Arthur Zambão
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-400 relative">
          {typedTitle}
          <span className="inline-block w-0.5 h-[1.1em] bg-cyan-400 ml-1 animation-cursor align-middle"></span>
        </h2>
        <div className="w-min">
          <div className="flex flex-col">
            {socialIcons.map((icon) => (
              <a
                href={icon.link}
                key={icon.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mx-2 my-1 p-2 pr-12 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500 transition-colors duration-300"
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={10}
                  height={10}
                  className="w-auto h-auto object-contain select-none"
                />
                <span className="ml-2">{icon.link}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group select-none">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/80 group-hover:border-cyan-500 transition-colors duration-600 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border border-purple-500/90 scale-105 animate-pulse delay-100"></div>
        <div className="absolute inset-0 rounded-full border border-slate-800/90 scale-110 animate-pulse delay-105"></div>

        <Image
          src="/arthurzambao.png"
          alt="Arthur Zambão"
          loading="eager"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-slate-900 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
