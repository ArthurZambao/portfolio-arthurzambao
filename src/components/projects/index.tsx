"use client";

import { projects } from "@/shared/constants/projects";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionTitle } from "../ui/SectionTitle";
import { FolderKanban } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };
    updateState();
    api.on("select", updateState);

    return () => {
      api.off("select", updateState);
    };
  }, [api]);

  return (
    <AnimatedSection>
      <section
        id="projetos"
        className="glass-card p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-hidden"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <FolderKanban className="w-5 h-5 text-cyan-400" />
          </div>
          <SectionTitle>Projetos</SectionTitle>
        </div>

        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-3 sm:-ml-4 mb-4 sm:mb-5 overflow-visible py-3 sm:py-4 select-none">
            {projects.slice(0, 5).map((project, index) => {
              const isActive = current === index + 1;

              return (
                <CarouselItem
                  key={index}
                  className="pl-3 sm:pl-4 basis-[85%] sm:basis-[60%] lg:basis-[40%]"
                >
                  <div
                    className={cn(
                      "relative rounded-xl overflow-hidden transition-all duration-500 cursor-grab active:cursor-grabbing py-6 sm:py-10",
                      isActive
                        ? "scale-[1.02] sm:scale-105 opacity-100 glass-card-static border border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                        : "scale-[0.95] sm:scale-90 opacity-40 blur-[1px] bg-slate-900/40 border border-slate-700/30"
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
                        <div className="absolute top-0 -left-full w-[60%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine" />
                      </div>
                    )}
                    <div className="w-full flex items-center justify-center">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="h-auto w-auto px-3 sm:px-4 z-10 max-h-40 sm:max-h-none select-none pointer-events-none"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end px-3 sm:px-4 pt-3 sm:pt-4 gap-2 sm:gap-0">
                      <div className="space-y-1 sm:space-y-2">
                        <h4 className="text-base sm:text-xl font-semibold text-white">
                          {project.title}
                        </h4>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300 hover:gap-2.5",
                            isActive ? "text-cyan-400 hover:text-cyan-300" : "text-slate-500"
                          )}
                        >
                          Ver site
                          <span className="text-sm sm:text-base">→</span>
                        </Link>
                      </div>
                      <div className="flex gap-1 sm:gap-1.5 flex-wrap">
                        {project.stack.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center p-1 sm:p-1.5 hover:border-cyan-500/30 hover:bg-slate-700/50 transition-all duration-300"
                          >
                            <Image
                              src={`/${tech}.png`}
                              alt={tech}
                              width={20}
                              height={20}
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain select-none pointer-events-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Carousel Indicators - Pill style */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-400",
                index + 1 === current
                  ? "w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              )}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
