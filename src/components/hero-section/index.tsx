"use client";

import { useTypewriterLoop } from "@/shared/components/useTypeWriter";
import { socialIcons } from "@/shared/constants/socialIcons";
import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const typedTitle = useTypewriterLoop([
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor de Sistemas",
  ]);

  return (
    <AnimatedSection>
      <section
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10 py-12"
      >
        <div className="flex-1 space-y-5 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            Arthur Zambão
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-400">
            {typedTitle}
            <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </h2>

          {/* REDES */}
          <div className="flex flex-col w-fit gap-3 pt-2 mx-auto md:mx-0">
            {socialIcons.map((icon, index) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              >
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 glass-card rounded-full hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={20}
                    height={20}
                    className="object-contain shrink-0 group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
                  />
                  <span className="sm:block hidden text-sm text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                    {icon.link}
                  </span>
                  <span className="block sm:hidden text-sm text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                    {icon.name}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="relative group"
        >
          {/* Glow background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

          {/* Rotating ring */}
          <div className="avatar-ring">
            <Image
              src="/arthurzambao.png"
              alt="Arthur Zambão"
              priority
              width={300}
              height={300}
              className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
