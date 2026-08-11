"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "hero", label: "Init" },
    { id: "about", label: "About" },
    { id: "education", label: "Academic" },
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "cv", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 clamp(12px, 4vw, 24px)",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled || mobileOpen ? "rgba(5, 10, 20, 0.95)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,255,234,0.1)" : "1px solid transparent",
        transition: "all 0.4s",
      }}
    >
      <button onClick={() => scrollTo("hero")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
        <span
          className="glitch-text font-orbitron"
          data-text="Arthur Zambão"
          style={{ fontSize: "clamp(13px, 2.5vw, 16px)", fontWeight: 800, color: "#cce8ff", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
        >
          Arthur Zambão
        </span>
      </button>

      <div style={{ gap: "clamp(16px, 2.5vw, 32px)", alignItems: "center" }} className="hidden md:flex">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className={`nav-link ${activeSection === l.id ? "active" : ""}`}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
        className={`flex md:hidden ${mobileOpen ? "hamburger-open" : ""}`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 22, alignItems: "flex-end" }}>
          <span className="hamburger-line" style={{ width: "100%" }} />
          <span className="hamburger-line" style={{ width: "70%" }} />
          <span className="hamburger-line" style={{ width: "100%" }} />
        </div>
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 64, left: 0, right: 0,
              background: "rgba(5,10,20,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(0,255,234,0.15)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "20px clamp(16px, 5vw, 32px)", display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(l.id)}
                  className={`nav-link ${activeSection === l.id ? "active" : ""}`}
                  style={{
                    background: activeSection === l.id ? "rgba(0,255,234,0.05)" : "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "12px 16px",
                    textAlign: "left",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span className="font-mono" style={{ color: "#00ffea44", fontSize: 10 }}>{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
