"use client";

import { skills } from "@/shared/constants/skills";
import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionTitle } from "../ui/SectionTitle";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProgramHabilities() {
  return (
    <AnimatedSection>
      <section className="glass-card p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Code2 className="w-5 h-5 text-cyan-400" />
          </div>
          <SectionTitle>Habilidades de Programação</SectionTitle>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <div
                className={cn(
                  "group p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50",
                  skill.hover,
                  "flex flex-col items-center justify-center gap-2 transition-all duration-300",
                  "hover:scale-105 hover:bg-slate-800/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] cursor-default"
                )}
              >
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain drop-shadow-sm w-full h-full select-none pointer-events-none"
                  />
                </div>

                <span className="text-[11px] sm:text-xs text-slate-500 text-center font-medium transition-colors duration-300 group-hover:text-slate-300 leading-tight select-none">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}