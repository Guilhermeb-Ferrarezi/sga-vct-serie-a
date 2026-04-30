import logo from "@/assets/sga-logo.png?inline";
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 md:px-10">
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img src={logo} alt="SGA" className="h-7 w-auto" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            // VCT Ribeirão Série A — 1ª Edição
          </span>
        </div>
        <p className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          © Santos Games · 2026
        </p>
      </div>
    </footer>
  );
}
