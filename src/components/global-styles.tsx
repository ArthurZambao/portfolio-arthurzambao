export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      background: #050a14;
      color: #cce8ff;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #050a14; }
    ::-webkit-scrollbar-thumb { background: #00ffea33; border-radius: 2px; }
    ::-webkit-scrollbar-thumb:hover { background: #00ffea66; }

    .font-orbitron { font-family: 'Orbitron', monospace; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }

    @keyframes glitch-1 {
      0%, 100% { clip-path: inset(0 0 98% 0); transform: translate(-2px, 0); }
      20% { clip-path: inset(30% 0 50% 0); transform: translate(2px, 0); }
      40% { clip-path: inset(60% 0 20% 0); transform: translate(-1px, 0); }
      60% { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
      80% { clip-path: inset(10% 0 80% 0); transform: translate(-3px, 0); }
    }

    @keyframes glitch-2 {
      0%, 100% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); opacity: 0.7; }
      20% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
      50% { clip-path: inset(90% 0 2% 0); transform: translate(1px, 0); }
      70% { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 0); }
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 5px #00ffea33, 0 0 20px #00ffea11; }
      50% { box-shadow: 0 0 15px #00ffea66, 0 0 40px #00ffea22; }
    }

    @keyframes data-flow {
      0% { opacity: 0; transform: translateY(-8px); }
      50% { opacity: 1; }
      100% { opacity: 0; transform: translateY(8px); }
    }

    @keyframes corner-flicker {
      0%, 95%, 100% { opacity: 1; }
      96%, 99% { opacity: 0.3; }
    }

    @keyframes grid-move {
      0% { transform: perspective(600px) rotateX(30deg) translateY(0); }
      100% { transform: perspective(600px) rotateX(30deg) translateY(80px); }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }

    @keyframes border-run {
      0% { stroke-dashoffset: 400; }
      100% { stroke-dashoffset: 0; }
    }

    .glitch-text {
      position: relative;
    }
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
    }
    .glitch-text::before {
      color: #ff2d6b;
      animation: glitch-1 3.5s infinite;
    }
    .glitch-text::after {
      color: #00ffea;
      animation: glitch-2 3.5s infinite;
    }

    .scanline-overlay {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 9999;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px
      );
    }

    .cyber-card {
      position: relative;
      background: #080f1e;
      border: 1px solid rgba(0, 255, 234, 0.15);
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .cyber-card:hover {
      border-color: rgba(0, 255, 234, 0.5);
      box-shadow: 0 0 30px rgba(0, 255, 234, 0.1), inset 0 0 30px rgba(0, 255, 234, 0.03);
    }
    .cyber-card::before {
      content: '';
      position: absolute;
      top: -1px; left: 16px;
      width: 60px; height: 2px;
      background: #00ffea;
    }

    .neon-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 28px;
      font-family: 'Orbitron', monospace;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #00ffea;
      background: transparent;
      border: 1px solid #00ffea;
      cursor: pointer;
      transition: all 0.25s;
      clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    }
    .neon-btn:hover {
      background: rgba(0, 255, 234, 0.08);
      box-shadow: 0 0 20px rgba(0, 255, 234, 0.3), inset 0 0 20px rgba(0, 255, 234, 0.05);
      color: #fff;
    }
    .neon-btn-solid {
      background: #00ffea;
      color: #050a14;
      box-shadow: 0 0 20px rgba(0, 255, 234, 0.4);
    }
    .neon-btn-solid:hover {
      background: #33fff0;
      color: #050a14;
      box-shadow: 0 0 40px rgba(0, 255, 234, 0.6);
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: #00ffea;
    }

    .hex-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      border: 1px solid rgba(0, 255, 234, 0.3);
      color: #00ffea;
      background: rgba(0, 255, 234, 0.05);
    }

    .skill-bar-track {
      height: 3px;
      background: rgba(0, 255, 234, 0.1);
      position: relative;
      overflow: hidden;
    }
    .skill-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #00ffea, #7c3aed);
      box-shadow: 0 0 8px rgba(0, 255, 234, 0.6);
      transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .input-cyber {
      background: #080f1e;
      border: 1px solid rgba(0, 255, 234, 0.2);
      color: #cce8ff;
      padding: 12px 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      width: 100%;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .input-cyber:focus {
      border-color: rgba(0, 255, 234, 0.6);
      box-shadow: 0 0 15px rgba(0, 255, 234, 0.1);
    }
    .input-cyber::placeholder {
      color: #2a4a6a;
    }

    .grid-bg {
      background-image:
        linear-gradient(rgba(0, 255, 234, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 234, 0.04) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    .tag-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      padding: 3px 10px;
      border: 1px solid rgba(124, 58, 237, 0.4);
      color: #a78bfa;
      background: rgba(124, 58, 237, 0.07);
      letter-spacing: 0.1em;
    }

    .nav-link {
      font-family: 'Orbitron', monospace;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #4a7fa5;
      transition: color 0.2s;
      position: relative;
      padding-bottom: 2px;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 1px;
      background: #00ffea;
      transition: width 0.3s;
    }
    .nav-link:hover { color: #00ffea; }
    .nav-link:hover::after { width: 100%; }
    .nav-link.active { color: #00ffea; }
    .nav-link.active::after { width: 100%; }

    /* ── Hamburger icon ── */
    .hamburger-line {
      display: block;
      height: 2px;
      background: #00ffea;
      border-radius: 1px;
      transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);
      transform-origin: center;
    }
    .hamburger-open .hamburger-line:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .hamburger-open .hamburger-line:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    .hamburger-open .hamburger-line:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* ── Responsive: mobile ── */
    @media (max-width: 767px) {
      .footer-inner {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center;
        gap: 12px !important;
      }
    }
  `}</style>
);
