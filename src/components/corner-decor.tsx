export const CornerDecor = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`absolute ${className}`} style={{ animation: "corner-flicker 4s infinite", ...style }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M0 20 L0 0 L20 0" stroke="#00ffea" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  </div>
);
