"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export const Hero = () => {
  const [typedRole, setTypedRole] = useState("");
  const roles = ["Front-end Developer", "Back-end Developer", "Full-stack Developer"];
  const roleRef = useRef({ roleIdx: 0, charIdx: 0, deleting: false });
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const { roleIdx, charIdx, deleting } = roleRef.current;
      const full = roles[roleIdx];

      if (!deleting) {
        if (charIdx < full.length) {
          setTypedRole(full.slice(0, charIdx + 1));
          roleRef.current.charIdx++;
          frameRef.current = setTimeout(tick, 60);
        } else {
          frameRef.current = setTimeout(() => {
            roleRef.current.deleting = true;
            tick();
          }, 2000);
        }
      } else {
        if (charIdx > 0) {
          setTypedRole(full.slice(0, charIdx - 1));
          roleRef.current.charIdx--;
          frameRef.current = setTimeout(tick, 35);
        } else {
          roleRef.current.roleIdx = (roleIdx + 1) % roles.length;
          roleRef.current.deleting = false;
          frameRef.current = setTimeout(tick, 400);
        }
      }
    };
    frameRef.current = setTimeout(tick, 800);
    return () => { if (frameRef.current) clearTimeout(frameRef.current); };
  }, []);

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 64,
      }}
    >
      {/* Ambient orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: "min(400px, 50vw)", height: "min(400px, 50vw)",
        background: "radial-gradient(circle, rgba(0,255,234,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "10%",
        width: "min(300px, 50vw)", height: "min(300px, 50vw)",
        background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "float 10s ease-in-out infinite reverse",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="section-label" style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
            <span style={{ color: "#00ffea44" }}>// </span>SYSTEM INIT — PORTFOLIO v2.0
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: 16 }}
        >
          <span className="font-mono" style={{ fontSize: 13, color: "#4a7fa5", letterSpacing: "0.1em" }}>
            IDENTIFICADO COMO:
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginBottom: 20 }}
        >
          <h1
            className="glitch-text font-orbitron"
            data-text="Arthur Zambão"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#cce8ff",
              letterSpacing: "-0.02em",
            }}
          >
            Arthur Zambão
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ marginBottom: 32, minHeight: 32 }}
        >
          <span className="font-mono" style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#00ffea" }}>
            {typedRole}
            <span style={{ animation: "blink 1s infinite", borderLeft: "2px solid #00ffea", marginLeft: 2 }}>&nbsp;</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            maxWidth: 520,
            fontSize: "clamp(14px, 2vw, 15px)",
            lineHeight: 1.8,
            color: "#4a7fa5",
            marginBottom: 48,
          }}
        >
          Desenvolvedor Full-Stack focado em construir arquiteturas escaláveis e sistemas robustos. Atuo desde a criação de interfaces modernas até o desenvolvimento de APIs e infraestrutura, garantindo a entrega de soluções completas de ponta a ponta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <button className="neon-btn neon-btn-solid" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Ver Projetos</span>
            <span style={{ fontSize: 16 }}>→</span>
          </button>
          <button className="neon-btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Contato</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span className="font-mono" style={{ fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #00ffea, transparent)" }}
        />
      </motion.div>
    </section>
  );
};
