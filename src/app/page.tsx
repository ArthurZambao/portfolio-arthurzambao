"use client";
import { useState, useEffect } from "react";
import { GlobalStyles } from "@/components/global-styles";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Courses } from "@/components/courses";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "education", "courses", "projects", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="scanline-overlay" />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Education />
      <Courses />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
