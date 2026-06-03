import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h3
      className={`section-title text-xl sm:text-2xl font-bold text-white ${className}`}
    >
      {children}
    </h3>
  );
}
