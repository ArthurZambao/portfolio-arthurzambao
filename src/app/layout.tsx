import "../styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arthur Zambão | Portfolio",
  description: "Portfolio of Arthur Zambão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
