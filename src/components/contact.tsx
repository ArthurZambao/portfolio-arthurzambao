"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { CornerDecor } from "./corner-decor";

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Altere para o seu e-mail real onde deseja receber as mensagens
    const targetEmail = "seu-email-aqui@gmail.com";

    const subject = encodeURIComponent(`Contato via Portfólio: ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    );

    window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const contacts = [
    { label: "EMAIL", value: "arthurzambao7@hotmail.com", href: "mailto:arthurzambao7@hotmail.com" },
    { label: "GITHUB", value: "github.com/ArthurZambao", href: "https://github.com/ArthurZambao" },
    { label: "LINKEDIN", value: "linkedin.com/in/arthurzambao", href: "https://www.linkedin.com/in/arthurzambao/" },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", background: "#080f1e", position: "relative" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
            <span style={{ color: "#00ffea44" }}>// </span>06 — CONTACT.INIT
          </div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
            Vamos Conectar
          </h2>
        </motion.div>

        <div style={{ gap: 48 }} className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#4a7fa5", marginBottom: 40 }}>
              Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes.
              Entre em contato e vamos conversar sobre como posso ajudar.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(0,255,234,0.06)" }}>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 20px", background: "#080f1e",
                    textDecoration: "none", transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0c1a2e")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#080f1e")}
                >
                  <span className="font-mono" style={{ fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em" }}>{c.label}</span>
                  <span className="font-mono" style={{ fontSize: 12, color: "#00ffea" }}>{c.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="cyber-card" style={{ padding: "32px", position: "relative" }}>
              <CornerDecor className="top-3 left-3" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "40px 0" }}
                >
                  <div className="font-orbitron" style={{ fontSize: 40, color: "#00ffea", marginBottom: 16 }}>✓</div>
                  <div className="font-orbitron" style={{ fontSize: 14, color: "#cce8ff", letterSpacing: "0.1em" }}>
                    MENSAGEM TRANSMITIDA
                  </div>
                  <div className="font-mono" style={{ fontSize: 11, color: "#4a7fa5", marginTop: 8 }}>
                    Responderei em breve.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label className="font-mono" style={{ display: "block", fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em", marginBottom: 8 }}>
                      IDENTIFICAÇÃO
                    </label>
                    <input
                      className="input-cyber"
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono" style={{ display: "block", fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em", marginBottom: 8 }}>
                      CANAL DE RESPOSTA
                    </label>
                    <input
                      className="input-cyber"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono" style={{ display: "block", fontSize: 9, color: "#2a4a6a", letterSpacing: "0.3em", marginBottom: 8 }}>
                      TRANSMISSÃO
                    </label>
                    <textarea
                      className="input-cyber"
                      placeholder="Descreva seu projeto ou proposta..."
                      rows={5}
                      style={{ resize: "none" }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="neon-btn neon-btn-solid" style={{ alignSelf: "flex-start" }}>
                    Enviar Mensagem →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
