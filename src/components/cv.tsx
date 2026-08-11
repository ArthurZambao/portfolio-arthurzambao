"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { CornerDecor } from "./corner-decor";

export const CV = () => {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const highlights = [
        { title: "Experiência", desc: "Full-Stack Development com React, Node.js e Java" },
        { title: "Educação", desc: "Análise e Desenvolvimento de Sistemas (FIAP)" },
        { title: "Habilidades", desc: "Next.js, TypeScript, NestJS, PostgreSQL, Docker" },
        { title: "Idiomas", desc: "Português Fluente / Inglês Intermediário" },
    ];

    return (
        <section id="cv" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto", position: "relative" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: 64 }}
            >
                <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
                    <span style={{ color: "#00ffea44" }}>// </span>07 — RESUME.PDF
                </div>
                <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
                    Meu Currículo
                </h2>
            </motion.div>

            <div style={{ gap: 48, alignItems: "stretch" }} className="grid grid-cols-1 lg:grid-cols-2">
                {/* Esquerda: Destaques */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                    <p style={{ fontSize: 15, lineHeight: 2, color: "#4a7fa5", marginBottom: 24 }}>
                        Acesse meu currículo completo em PDF para uma visão detalhada de minhas experiências profissionais, formação acadêmica, certificações e habilidades técnicas. Ideal para recrutadores e prospects interessados em conhecer mais sobre meu background.
                    </p>

                    <div style={{ gap: 16, display: "flex", flexDirection: "column" }}>
                        {highlights.map((h, i) => (
                            <motion.div
                                key={h.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={visible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                style={{
                                    padding: 16,
                                    border: "1px solid rgba(0,255,234,0.2)",
                                    background: "rgba(0,255,234,0.03)",
                                    borderLeft: "3px solid #00ffea",
                                    transition: "all 0.3s",
                                }}
                                className="hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="font-mono" style={{ fontSize: 11, color: "#00ffea", letterSpacing: "0.2em", marginBottom: 8, fontWeight: 600 }}>
                                    {h.title}
                                </div>
                                <div style={{ fontSize: 13, color: "#4a7fa5", lineHeight: 1.5 }}>
                                    {h.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Direita: Card com PDF */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                    <div
                        className="cyber-card"
                        style={{
                            padding: "48px 32px",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 400,
                            flex: 1,
                            gap: 24,
                        }}
                    >
                        <CornerDecor className="top-3 left-3" />
                        <CornerDecor className="bottom-3 right-3" style={{ transform: "rotate(180deg)" }} />

                        <div style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", gap: 12 }}>
                            <div
                                style={{
                                    width: 80,
                                    height: 80,
                                    margin: "0 auto",
                                    background: "linear-gradient(135deg, rgba(0,255,234,0.1) 0%, rgba(124,58,237,0.1) 100%)",
                                    border: "2px solid rgba(0,255,234,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 40,
                                }}
                            >
                                📄
                            </div>

                            <h3 className="font-orbitron" style={{ fontSize: 18, fontWeight: 700, color: "#cce8ff", letterSpacing: "0.05em", textAlign: "center" }}>
                                Curriculo - Arthur Zambão Leite.PDF
                            </h3>

                            <p style={{ fontSize: 13, color: "#4a7fa5", lineHeight: 1.6, maxWidth: 300, textAlign: "center", margin: "0 auto" }}>
                                Documento completo com experiências, educação e certificações
                            </p>

                            <div className="font-mono" style={{ fontSize: 11, color: "#2a4a6a", letterSpacing: "0.1em", marginTop: 8 }}>
                                SIZE: ~2.5 MB
                            </div>
                        </div>

                        <motion.a
                            href="/Curriculo - Arthur Zambão Leite.pdf"
                            download="Curriculo - Arthur Zambão Leite.pdf"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,234,0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: "12px 32px",
                                background: "linear-gradient(135deg, #00ffea 0%, #00ffea 100%)",
                                color: "#050a14",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                transition: "all 0.3s",
                                position: "relative",
                                zIndex: 10,
                            }}
                            className="font-mono"
                        >
                            ↓ DOWNLOAD
                        </motion.a>

                        {/* Background gradient effect */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "radial-gradient(circle at 50% 50%, rgba(0,255,234,0.05) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }}
                        />
                    </div>

                    {/* Info Box */}
                    <div
                        style={{
                            padding: 16,
                            background: "rgba(0,255,234,0.05)",
                            border: "1px solid rgba(0,255,234,0.15)",
                            borderLeft: "3px solid #7c3aed",
                        }}
                    >
                        <div className="font-mono" style={{ fontSize: 11, color: "#7c3aed", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 600 }}>
                            INFO
                        </div>
                        <p style={{ fontSize: 12, color: "#4a7fa5", lineHeight: 1.6, textAlign: "center" }}>
                            O documento PDF contém informações detalhadas sobre minha formação acadêmica, experiência profissional, projetos realizados e habilidades técnicas. Recomendado para recrutadores.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
