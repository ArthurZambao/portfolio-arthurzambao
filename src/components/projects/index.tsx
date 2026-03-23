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
    <section
      id="projetos"
      className="p-6 bg-slate-900 rounded-2xl space-y-6 overflow-hidden"
    >
      <h3 className="text-xl font-bold text-white">Projetos</h3>

      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4 mb-5 overflow-visible py-4 select-none">
          {projects.slice(0, 5).map((project, index) => {
            const isActive = current === index + 1;

            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-[80%] sm:basis-[60%] lg:basis-[40%]"
              >
                <div
                  className={`
                  relative rounded-xl overflow-hidden transition-all duration-300
                  cursor-grab active:cursor-grabbing bg-gray-800 border py-10
                    ${
                      isActive
                        ? "scale-105 opacity-100 shadow-lg border-cyan-500 shadow-cyan-500/50"
                        : "scale-90 opacity-50 blur-[1px] border-gray-700"
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
                      <div className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine" />
                    </div>
                  )}
                  <div className="w-full flex items-center justify-center ">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="h-auto w-auto px-4 z-10"
                    />
                  </div>
                  <div className="flex justify-between pl-4 pb-4">
                    <div className=" space-y-2 pt-2">
                      <h4 className="text-xl font-semibold text-white">
                        {project.title}
                      </h4>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isActive ? "text-cyan-400" : "text-slate-400"} text-sm hover:text-white transition-colors duration-300`}
                      >
                        Ver site →
                      </Link>
                    </div>
                    <div className="flex pt-3">
                      <ul className=" flex grid-cols-3 pr-4 space-y-1">
                        {project.stack.map((tech, index) => (
                          <li key={index}>
                            <Image
                              src={`/lang-icons/${tech}.png`}
                              alt={tech}
                              width={22}
                              height={22}
                              className={`${tech === "nestt" ? "w-50 h-50" : "w-6 h-6"} object-contain`}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="py-2 text-center text-sm text-slate-400">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`cursor-pointer text-xl ${index + 1 === current ? "text-cyan-400" : ""}`}
          >
            ●
          </span>
        ))}
      </div>
    </section>
  );
}
