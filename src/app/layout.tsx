import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Zambão | Full-Stack Developer",
  description: "Portfólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${montSerrat.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/bg-video-reverb.mp4" type="video/mp4" />
        </video>

        {/* 🌑 OVERLAY */}
        <div className="fixed inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90 backdrop-blur-sm -z-10"></div>

        {/* CONTEÚDO */}
        {children}
      </body>
    </html>
  );
}
