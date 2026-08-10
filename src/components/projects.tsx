import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import Image from 'next/image';

const projectsData = [
  {
    id: "01",
    title: "Incita Inc.",
    category: "Full-Stack Developer",
    desc: "Plataforma educacional focada em aprendizado gamificado, com trilhas de conhecimento adaptativas e gerenciamento de competências.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "tRPC", "Nest.JS", "Redis"],
    image: "/incita.png",
    status: "DEPLOYED",
    link: "https://www.incita.online",
  },
  {
    id: "02",
    title: "D.A.F.E Ltda.",
    category: "Full-Stack Developer",
    desc: "Plataforma desenvolvida para fortalecer a comunicação entre alunos e instituições de ensino, permitindo o envio de feedbacks e comunicados de forma prática e organizada.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Nest.JS", "Redis"],
    image: "/dafe.png",
    status: "DEPLOYED",
    link: "https://dafe-project.vercel.app/",
  },
  {
    id: "03",
    title: "GymNotes Platform",
    category: "Full-Stack Developer",
    desc: "Aplicação web desenvolvida para facilitar o gerenciamento de fichas de treino. Permite criar treinos personalizados, registrar a frequência, acompanhar a evolução das cargas e manter um histórico do progresso.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Nest.JS"],
    image: "/gymnotes.png",
    status: "DEPLOYED",
    link: "https://gymnotesapp.vercel.app",
  },
];

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Mouse tracking for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const hoveredProject = projectsData.find(p => p.id === hoveredId);

  return (
    <section id="projects" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", background: "#080f1e", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
            <span style={{ color: "#00ffea44" }}>// </span>04 — PROJECTS.DIR
          </div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
            Projetos em Destaque
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 1, background: "rgba(0,255,234,0.06)" }}>
          {projectsData.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="cyber-card"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ padding: "clamp(20px, 4vw, 32px)", position: "relative", cursor: "pointer", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, overflow: "hidden", opacity: hoveredId === p.id ? 0.15 : 0.05, transition: "opacity 0.3s" }}>
                <div className="font-orbitron" style={{ fontSize: 80, fontWeight: 900, color: "#00ffea", lineHeight: 1, position: "absolute", top: -10, right: -10 }}>{p.id}</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <span className="hex-badge">{p.category}</span>
                <span className="font-mono" style={{
                  fontSize: 9, padding: "3px 8px", letterSpacing: "0.2em",
                  border: "1px solid rgba(0,255,88,0.3)", color: "#00ff88",
                  background: "rgba(0,255,88,0.05)",
                }}>
                  {p.status}
                </span>
              </div>

              <h3 className="font-orbitron" style={{ fontSize: 18, fontWeight: 700, color: "#cce8ff", marginBottom: 12, lineHeight: 1.3 }}>
                {p.title}
              </h3>

              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4a7fa5", marginBottom: 24 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {p.tech.map((t) => (
                  <span key={t} className="tag-tech">{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ flex: 1, height: 1, background: "rgba(0,255,234,0.1)" }} />
                <a
                  href={p.link}
                  className="font-mono"
                  style={{ fontSize: 11, color: hoveredId === p.id ? "#00ffea" : "#2a4a6a", letterSpacing: "0.2em", textDecoration: "none", transition: "color 0.3s" }}
                >
                  ACESSAR →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Image Follower — desktop only */}
      <motion.div
        animate={{
          opacity: hoveredId !== null ? 1 : 0,
          scale: hoveredId !== null ? 1 : 0.5,
          rotate: hoveredId !== null ? -2 : -10,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="hidden md:block"
      >
        <div style={{
          transform: "translate(-50%, -110%)",
          width: 380,
          height: 240,
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(0,255,234,0.3)",
          boxShadow: "0 20px 60px -12px rgba(0,0,0,0.8), 0 0 30px rgba(0,255,234,0.15)",
          background: "#080f1e",
          position: "relative",
        }}>
          {/* Scanline overlay on image */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          }} />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(to top, rgba(8,15,30,0.6) 0%, transparent 40%, transparent 80%, rgba(8,15,30,0.3) 100%)",
          }} />
          {/* Corner accents */}
          <div style={{ position: "absolute", top: 6, left: 6, zIndex: 4 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M0 14 L0 0 L14 0" stroke="#00ffea" strokeWidth="1.5" fill="none" opacity="0.7" />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: 6, right: 6, zIndex: 4, transform: "rotate(180deg)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M0 14 L0 0 L14 0" stroke="#00ffea" strokeWidth="1.5" fill="none" opacity="0.7" />
            </svg>
          </div>
          {/* Project title badge */}
          <div style={{
            position: "absolute", bottom: 10, left: 10, zIndex: 5,
            padding: "4px 10px",
            background: "rgba(0,255,234,0.1)",
            border: "1px solid rgba(0,255,234,0.3)",
            backdropFilter: "blur(8px)",
          }}>
            <span className="font-mono" style={{ fontSize: 9, color: "#00ffea", letterSpacing: "0.2em" }}>
              {hoveredProject?.title ?? ""}
            </span>
          </div>

          <Image
            src={hoveredProject?.image ?? projectsData[0].image}
            alt="Preview"
            fill
            sizes="380px"
            priority
            style={{ objectFit: "cover", zIndex: 1 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop';
              }
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
