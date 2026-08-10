"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const educationData = [
  {
    institution: "FIAP",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2026 - 2027",
    status: "Cursando",
    desc: "Foco em desenvolvimento de software, arquitetura de sistemas, banco de dados e práticas ágeis. Projetos práticos e desafios do mercado."
  },
  {
    institution: "ETEC de Guarulhos",
    course: "Técnico em Desenvolvimento de Sistemas",
    period: "2023 - 2025",
    status: "Concluído",
    desc: "Fundamentos de programação, lógica, desenvolvimento web e mobile. Base sólida para a carreira em tecnologia."
  }
];

export const Education = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64 }}
      >
        <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
          <span style={{ color: "#00ffea44" }}>// </span>02 — ACADEMIC.DAT
        </div>
        <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
          Formação Acadêmica
        </h2>
      </motion.div>

      {/* Timeline container */}
      <div style={{ position: "relative", paddingLeft: 40 }}>
        {/* Vertical glowing line */}
        <motion.div
          initial={{ height: 0 }}
          animate={visible ? { height: "100%" } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: 11,
            top: 0,
            width: 2,
            background: "linear-gradient(to bottom, #00ffea, #7c3aed, transparent)",
            boxShadow: "0 0 8px rgba(0,255,234,0.4), 0 0 20px rgba(0,255,234,0.15)",
          }}
        />

        {educationData.map((ed, i) => (
          <motion.div
            key={ed.institution}
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.25 }}
            style={{ position: "relative", marginBottom: i < educationData.length - 1 ? 48 : 0 }}
          >
            {/* Timeline node */}
            <div style={{
              position: "absolute",
              left: -40,
              top: 28,
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Outer ring */}
              <motion.div
                animate={visible ? {
                  boxShadow: [
                    "0 0 0px rgba(0,255,234,0.3), 0 0 0px rgba(0,255,234,0.1)",
                    "0 0 12px rgba(0,255,234,0.6), 0 0 25px rgba(0,255,234,0.2)",
                    "0 0 0px rgba(0,255,234,0.3), 0 0 0px rgba(0,255,234,0.1)",
                  ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: `2px solid ${ed.status === "Cursando" ? "#00ffea" : "#7c3aed"}`,
                  background: "#050a14",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Inner dot */}
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: ed.status === "Cursando"
                    ? "#00ffea"
                    : "#7c3aed",
                  boxShadow: ed.status === "Cursando"
                    ? "0 0 8px #00ffea"
                    : "0 0 8px #7c3aed",
                }} />
              </motion.div>
            </div>

            {/* Card */}
            <div
              className="cyber-card"
              style={{
                padding: "clamp(20px, 4vw, 32px)",
                position: "relative",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.borderColor = ed.status === "Cursando" ? "rgba(0,255,234,0.5)" : "rgba(124,58,237,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.borderColor = "rgba(0,255,234,0.15)";
              }}
            >
              {/* Connector line from node to card */}
              <div style={{
                position: "absolute",
                left: -17,
                top: 38,
                width: 17,
                height: 1,
                background: `linear-gradient(to right, ${ed.status === "Cursando" ? "#00ffea55" : "#7c3aed55"}, ${ed.status === "Cursando" ? "#00ffea22" : "#7c3aed22"})`,
              }} />

              {/* Top row: period + status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
                <span className="hex-badge">{ed.period}</span>
                <span className="font-mono" style={{
                  fontSize: 9,
                  padding: "3px 10px",
                  letterSpacing: "0.2em",
                  border: ed.status === "Concluído" ? "1px solid rgba(0,255,88,0.3)" : "1px solid rgba(0,255,234,0.3)",
                  color: ed.status === "Concluído" ? "#00ff88" : "#00ffea",
                  background: ed.status === "Concluído" ? "rgba(0,255,88,0.05)" : "rgba(0,255,234,0.05)",
                  animation: ed.status === "Cursando" ? "pulse-glow 3s infinite" : "none",
                }}>
                  {ed.status === "Cursando" ? "● " : "✓ "}{ed.status}
                </span>
              </div>

              {/* Institution name — prominent */}
              <h3 className="font-orbitron" style={{
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                fontWeight: 800,
                color: "#00ffea",
                marginBottom: 6,
                lineHeight: 1.2,
                letterSpacing: "0.02em",
                textShadow: "0 0 20px rgba(0,255,234,0.25)",
              }}>
                {ed.institution}
              </h3>

              {/* Course name — secondary */}
              <div className="font-mono" style={{
                fontSize: 13,
                color: "#7c3aed",
                marginBottom: 16,
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <span style={{ display: "inline-block", width: 16, height: 1, background: "#7c3aed66" }} />
                {ed.course}
              </div>

              {/* Description */}
              <p style={{ fontSize: 13, lineHeight: 1.8, color: "#4a7fa5", marginBottom: 0 }}>
                {ed.desc}
              </p>

              {/* Bottom accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={visible ? { width: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.25 }}
                style={{
                  height: 2,
                  background: ed.status === "Cursando"
                    ? "linear-gradient(to right, #00ffea, transparent)"
                    : "linear-gradient(to right, #7c3aed, transparent)",
                  marginTop: 20,
                  borderRadius: 1,
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Terminal end marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            left: 0,
            bottom: -32,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{
            width: 24,
            height: 1,
            background: "rgba(0,255,234,0.15)",
          }} />
          <span className="font-mono" style={{ fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em" }}>
            END_LOG
          </span>
        </motion.div>
      </div>
    </section>
  );
};
