"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const skillGroups = [
  {
    category: "FRONTEND",
    skills: [
      { name: "React / Next.js", level: 90, experience: "2+ anos" },
      { name: "TypeScript", level: 90, experience: "2+ anos" },
      { name: "CSS / Tailwind", level: 90, experience: "2+ anos" },
      { name: "Vue.js", level: 90, experience: "2+ anos" },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js / Express", level: 90, experience: "2+ anos" },
      { name: "Java / Spring Boot", level: 40, experience: "< 1 ano" },
      { name: "PostgreSQL", level: 90, experience: "2+ anos" },
      { name: "Redis / Kafka", level: 65, experience: "1+ ano" },
    ],
  },
  {
    category: "INFRA",
    skills: [
      { name: "Docker / K8s", level: 65, experience: "1+ ano" },
      { name: "AWS / GCP", level: 40, experience: "< 1 ano" },
      { name: "CI/CD Pipelines", level: 40, experience: "< 1 ano" },
      { name: "Linux / Bash", level: 65, experience: "1+ ano" },
    ],
  },
];

const SkillBar = ({ name, level, experience, visible }: { name: string; level: number; experience: string; visible: boolean }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
      <span className="font-mono" style={{ fontSize: 12, color: "#cce8ff" }}>{name}</span>
      <span className="font-mono" style={{ fontSize: 11, color: "#00ffea" }}>{experience}</span>
    </div>
    <div className="skill-bar-track">
      <div className="skill-bar-fill" style={{ width: visible ? `${level}%` : "0%" }} />
    </div>
  </div>
);

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tools = ["Git", "Figma", "VSCode", "Postman", "Jira", "Notion", "Vercel", "Supabase", "Prisma", "GraphQL", "Stripe", "Firebase"];

  return (
    <section id="skills" ref={ref} style={{ padding: "clamp(80px, 10vw, 120px) 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64 }}
      >
        <div className="section-label" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#00ffea" }} />
          <span style={{ color: "#00ffea44" }}>// </span>05 — SKILLS.JSON
        </div>
        <h2 className="font-orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#cce8ff", lineHeight: 1.1 }}>
          Arsenal Técnico
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 32, marginBottom: 60 }}>
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="cyber-card"
            style={{ padding: "clamp(20px, 4vw, 32px)" }}
          >
            <div className="section-label" style={{ marginBottom: 28 }}>{group.category}</div>
            {group.skills.map((s) => (
              <SkillBar key={s.name} {...s} visible={visible} />
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="font-mono" style={{ fontSize: 10, color: "#2a4a6a", letterSpacing: "0.3em", marginBottom: 20 }}>FERRAMENTAS & ECOSSISTEMA</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="hex-badge"
              style={{ cursor: "default" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
