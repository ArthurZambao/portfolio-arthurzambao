"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { CornerDecor } from "./corner-decor";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const facts = [
    { label: "LOCALIZAÇÃO", value: "São Paulo, BR" },
    { label: "DISPONIBILIDADE", value: "Aberto a Propostas" },
    { label: "ESPECIALIZAÇÃO", value: "Full-Stack Developer" },
    { label: "IDIOMAS", value: "Português / Inglês" },
  ];

  return (
    <section id="about" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64 }}
      >
        <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
          <span style={{ color: "#00ffea44" }}>// </span>01 — ABOUT.EXE
        </div>
        <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
          Quem Sou Eu
        </h2>
      </motion.div>

      <div style={{ gap: 48, alignItems: "start" }} className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p style={{ fontSize: 15, lineHeight: 2, color: "#4a7fa5", marginBottom: 24 }}>
            Me chamo Arthur Zambão Leite, tenho 18 anos e sou estudante de Análise e Desenvolvimento de Sistemas na FIAP,
            com formação técnica em Desenvolvimento de Sistemas pela ETEC de Guarulhos.
          </p>
          <p style={{ fontSize: 15, lineHeight: 2, color: "#4a7fa5", marginBottom: 40 }}>
            Tenho forte interesse no ecossistema full-stack, com experiência prática que vai desde a construção de interfaces fluidas com React e Next.js, até o desenvolvimento de APIs estruturadas com Node.js, NestJS e Java. Além de atuar no código, busco integrar boas práticas de DevOps, trabalhando com Docker, CI/CD e bancos de dados relacionais para arquitetar e entregar soluções completas, eficientes e seguras.
          </p>

          <div style={{ gap: 1, background: "rgba(0,255,234,0.08)" }} className="grid grid-cols-1 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} style={{ padding: "16px", background: "#080f1e" }}>
                <div className="font-mono" style={{ fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em", marginBottom: 6 }}>{f.label}</div>
                <div className="font-mono" style={{ fontSize: 13, color: "#00ffea" }}>{f.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ position: "relative" }}
        >
          <div
            className="cyber-card"
            style={{ padding: "32px", position: "relative", overflow: "hidden" }}
          >
            <CornerDecor className="top-3 left-3" />
            <CornerDecor className="bottom-3 right-3" style={{ transform: "rotate(180deg)" }} />

            <div className="font-mono" style={{ fontSize: 11, color: "#2a4a6a", marginBottom: 24, letterSpacing: "0.2em" }}>
              — TERMINAL — STATUS: ONLINE
            </div>

            {[
              { cmd: "whoami", out: "desenvolvedor full-stack" },
              { cmd: "cat skills.txt", out: "NestJS · React · Java · Docker" },
              { cmd: "ls projects/", out: "api/ infra/ app/ web/" },
              { cmd: "echo $STATUS", out: "🟢 Disponível para novos projetos" },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{ marginBottom: 16 }}
              >
                <div className="font-mono" style={{ fontSize: 12, color: "#4a7fa5" }}>
                  <span style={{ color: "#00ffea44" }}>$</span>&nbsp;
                  <span style={{ color: "#cce8ff" }}>{line.cmd}</span>
                </div>
                <div className="font-mono" style={{ fontSize: 12, color: "#7c3aed", paddingLeft: 16 }}>{line.out}</div>
              </motion.div>
            ))}

            <div className="font-mono" style={{ fontSize: 12, color: "#4a7fa5" }}>
              <span style={{ color: "#00ffea44" }}>$</span>&nbsp;
              <span style={{ animation: "blink 1s infinite", borderLeft: "1px solid #00ffea33", paddingLeft: 1 }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
