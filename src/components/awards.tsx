"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { CornerDecor } from "./corner-decor";

const photos = [
  {
    src: "/awards/next-fiap-medalha.jpg",
    alt: "Arthur Zambão com a medalha de 3º lugar no Next FIAP 2026",
    featured: true,
  },
  {
    src: "/awards/next-fiap-grupo.jpg",
    alt: "Equipe Nexus Solutions no palco do Next FIAP 2026",
    featured: false,
  },
  {
    src: "/awards/next-fiap-nexus.jpg",
    alt: "Equipe Nexus Solutions com as pranchas Next FIAP",
    featured: false,
  },
];

export const Awards = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const featured = photos[0];
  const gallery = photos.slice(1);

  return (
    <section id="awards" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64 }}
      >
        <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
          <span style={{ color: "#00ffea44" }}>// </span>05 — AWARDS.LOG
        </div>
        <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
          Premiações
        </h2>
      </motion.div>

      <div className="awards-bento">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="cyber-card awards-card"
          style={{ padding: "clamp(24px, 4vw, 40px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
        >
          <CornerDecor className="top-3 left-3" />
          <CornerDecor className="bottom-3 right-3" style={{ transform: "rotate(180deg)" }} />

          <div style={{ position: "absolute", top: 0, right: 0, width: 90, height: 90, overflow: "hidden", opacity: 0.08 }}>
            <div className="font-orbitron" style={{ fontSize: 90, fontWeight: 900, color: "#00ffea", lineHeight: 1, position: "absolute", top: -12, right: -8 }}>03</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, gap: 8, flexWrap: "wrap" }}>
            <span className="hex-badge">Outubro 2026</span>
            <span className="font-mono" style={{
              fontSize: 9, padding: "3px 10px", letterSpacing: "0.2em",
              border: "1px solid rgba(0,255,88,0.3)", color: "#00ff88",
              background: "rgba(0,255,88,0.05)",
            }}>
              3º LUGAR
            </span>
          </div>

          <h3 className="font-orbitron" style={{
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            fontWeight: 800,
            color: "#00ffea",
            marginBottom: 6,
            lineHeight: 1.2,
            letterSpacing: "0.02em",
            textShadow: "0 0 20px rgba(0,255,234,0.25)",
          }}>
            Next FIAP 2026
          </h3>

          <div className="font-mono" style={{
            fontSize: 13,
            color: "#7c3aed",
            marginBottom: 20,
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ display: "inline-block", width: 16, height: 1, background: "#7c3aed66" }} />
            FIAP · Equipe Nexus Solutions
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4a7fa5", marginBottom: 24 }}>
            3º lugar entre 50 equipes no Next FIAP 2026, com o app Soulie — bem-estar sustentável gamificado, desenvolvido de ponta a ponta pela equipe Nexus Solutions.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
            {["Soulie", "React Native", "Spring Boot", "IA", "FIAP"].map((t) => (
              <span key={t} className="tag-tech">{t}</span>
            ))}
          </div>

          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <div className="font-mono" style={{ fontSize: 11, color: "#2a4a6a", letterSpacing: "0.2em" }}>
              50 EQUIPES
            </div>
            <div style={{ flex: 1, height: 1, background: "rgba(0,255,234,0.1)" }} />
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono"
              style={{ fontSize: 11, color: "#2a4a6a", letterSpacing: "0.2em", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00ffea"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#2a4a6a"; }}
            >
              VER PROJETO →
            </button>
          </div>
        </motion.div>

        <AwardPhoto
          photo={featured}
          visible={visible}
          delay={0.35}
          className="awards-photo awards-photo-portrait"
          objectPosition="center 18%"
          onOpen={() => setLightbox(0)}
        />
        {gallery.map((photo, i) => (
          <AwardPhoto
            key={photo.src}
            photo={photo}
            visible={visible}
            delay={0.45 + i * 0.1}
            className="awards-photo"
            onOpen={() => setLightbox(i + 1)}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && photos[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(5,10,20,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "zoom-out",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "min(1100px, 92vw)",
                maxHeight: "88vh",
                border: "1px solid rgba(0,255,234,0.3)",
                boxShadow: "0 20px 60px -12px rgba(0,0,0,0.8), 0 0 30px rgba(0,255,234,0.15)",
                background: "#080f1e",
              }}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                width={1600}
                height={1200}
                style={{ display: "block", width: "100%", height: "auto", maxHeight: "88vh", objectFit: "contain" }}
              />
              <div className="font-mono" style={{
                position: "absolute", bottom: 12, left: 12,
                padding: "4px 10px",
                background: "rgba(0,255,234,0.1)",
                border: "1px solid rgba(0,255,234,0.3)",
                backdropFilter: "blur(8px)",
                fontSize: 9, color: "#00ffea", letterSpacing: "0.2em",
              }}>
                {photos[lightbox].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

function AwardPhoto({
  photo,
  visible,
  delay,
  className,
  objectPosition = "center",
  onOpen,
}: {
  photo: { src: string; alt: string };
  visible: boolean;
  delay: number;
  className: string;
  objectPosition?: string;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`cyber-card ${className}`}
      onClick={onOpen}
      aria-label={photo.alt}
      style={{ padding: 0, cursor: "zoom-in", width: "100%", height: "100%", display: "block", background: "#080f1e", color: "inherit" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to top, rgba(8,15,30,0.45) 0%, transparent 40%)" }} />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 560px"
        style={{ objectFit: "cover", objectPosition }}
      />
    </motion.button>
  );
}
