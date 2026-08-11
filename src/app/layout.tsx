import "../styles/index.css";
import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

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
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
