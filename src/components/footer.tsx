export const Footer = () => (
  <footer style={{ padding: "clamp(24px, 5vw, 40px) clamp(16px, 4vw, 24px)", borderTop: "1px solid rgba(0,255,234,0.08)" }}>
    <div
      className="footer-inner"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        className="glitch-text font-orbitron"
        data-text="Arthur Zambão"
        style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 800, color: "#cce8ff", letterSpacing: "0.05em" }}
      >
        Arthur Zambão
      </span>
      <span className="font-mono" style={{ fontSize: "clamp(8px, 1.5vw, 10px)", color: "#1a3550", letterSpacing: "0.15em" }}>
        © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
      </span>
      <span className="font-mono" style={{ fontSize: "clamp(8px, 1.5vw, 10px)", color: "#1a3550", letterSpacing: "0.15em" }}>
        BUILD v2.0.0
      </span>
    </div>
  </footer>
);
