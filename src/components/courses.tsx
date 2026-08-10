"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const coursesData = [
  {
    institution: "Nano Courses - Fiap",
    course: "Banco de Dados Oracle",
    duration: "60h",
    tech: ["Oracle", "SQL", "PL/SQL", "Banco de Dados", "Modelagem de Dados", "Consultas SQL", "Procedimentos Armazenados", "Triggers", "Performance"
    ],
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=D9FBD314C16C56B6F3BB242E9071E038&action=view"
  },
  {
    institution: "Alura",
    course: "Aplicações Web com Java e Spring",
    duration: "56h",
    tech: ["Java", "Spring", "Spring Boot", "SQL", "PostgreSQL", "Modelagem de Dados", "Consultas SQL", "Procedimentos Armazenados", "Triggers", "Performance"],
    link: "https://www.alura.com.br/"
  },
  {
    institution: "Udemy",
    course: "JavaScript e TypeScript do básico ao avançado - JS + TS",
    duration: "146h",
    tech: ["JavaScript", "TypeScript", "HTML5", "CSS", "Node.js", "React", "Next.JS", "Nest.js", "TailwindCSS", "Express"],
    link: "https://www.udemy.com/certificate/UC-606e0074-3b64-41ee-ba12-c2647c24eadf/"
  },
];

export const Courses = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="courses" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64 }}
      >
        <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
          <span style={{ color: "#00ffea44" }}>// </span>03 — COURSES.LOG
        </div>
        <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
          Cursos Complementares
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
        {coursesData.map((c, i) => (
          <motion.div
            key={c.course}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="cyber-card"
            onMouseEnter={() => setHovered(c.course)}
            onMouseLeave={() => setHovered(null)}
            style={{ padding: "clamp(20px, 4vw, 32px)", position: "relative", cursor: "pointer" }}
            onClick={() => window.open(c.link, "_blank")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span className="font-mono" style={{ fontSize: 10, color: "#4a7fa5", letterSpacing: "0.1em" }}>
                {c.institution}
              </span>
              <span className="hex-badge" style={{ fontSize: 9 }}>{c.duration}</span>
            </div>

            <h3 className="font-orbitron" style={{ fontSize: 16, fontWeight: 700, color: "#cce8ff", marginBottom: 16, lineHeight: 1.3 }}>
              {c.course}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {c.tech.map((t) => (
                <span key={t} className="tag-tech" style={{ fontSize: 9 }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ flex: 1, height: 1, background: "rgba(0,255,234,0.1)" }} />
              <a
                href={c.link}
                target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono"
                style={{ fontSize: 11, color: hovered === c.course ? "#00ffea" : "#2a4a6a", letterSpacing: "0.2em", textDecoration: "none", transition: "color 0.3s" }}
              >
                CERTIFICADO →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
