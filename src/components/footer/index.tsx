export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/80 backdrop-blur-md pt-12 pb-8 mt-20 relative z-10">
      <div className="max-w-400 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            Arthur Zambão
          </span>
          <span className="text-sm text-slate-400 mt-2">
            Transformando ideias em código de alta performance.
          </span>
        </div>
      </div>

      <div className="max-w-400 mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {currentYear} Arthur Zambão. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0 flex items-center gap-1.5">
          Desenvolvido com Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
