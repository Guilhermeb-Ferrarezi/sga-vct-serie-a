import capa from "@/assets/capa01.png?inline";

const tiers = [
  { name: "Diamante 3", color: "from-cyan-400 to-sky-600", text: "text-cyan-100" },
  { name: "Ascendente", color: "from-emerald-400 to-teal-600", text: "text-emerald-50" },
  { name: "Imortal", color: "from-fuchsia-500 to-rose-600", text: "text-fuchsia-50" },
  { name: "Radiante", color: "from-yellow-300 to-amber-500", text: "text-amber-950" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={capa} alt="Jogadores competindo no VCT RP" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 hero-grid-bg" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 md:px-10 pt-32 pb-16">
        {/* Top tag */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">
            // 1ª edição — Série A
          </span>
          <span className="h-px w-12 bg-primary" />
        </div>

        {/* Hero title */}
        <h1 className="font-display leading-[0.82] tracking-tight">
          <span className="block text-[clamp(4rem,12vw,11rem)] text-secondary uppercase">VCT RP</span>
          <span className="block text-[clamp(4rem,12vw,11rem)] uppercase text-stroke-primary mt-[-0.05em]">
            SÉRIE A
          </span>
        </h1>

        {/* Tier card */}
        <div className="mt-10 max-w-[640px] rounded-sm border border-primary/40 bg-background/60 backdrop-blur-sm p-6">
          <p className="font-mono-tag text-[11px] uppercase tracking-[0.22em] text-primary mb-4">
            // exclusivo para os elos
          </p>
          <div className="flex flex-wrap gap-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-sm px-5 py-3 font-display uppercase text-sm tracking-wider bg-gradient-to-br ${t.color} ${t.text} shadow-md`}
              >
                {t.name}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Apenas jogadores nesses elos podem participar. Verificação obrigatória.
          </p>
        </div>

        {/* Bottom info row */}
        <div className="mt-auto pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            {[
              { label: "Data", value: "24/05", accent: false },
              { label: "Times", value: "04", accent: true },
              { label: "Formato", value: "5v5", accent: false },
              { label: "Local", value: "Ribeirão Preto", accent: false },
            ].map((it) => (
              <div key={it.label}>
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {it.label}
                </p>
                <p className={`font-display text-4xl md:text-5xl uppercase ${it.accent ? "text-primary" : "text-secondary"}`}>
                  {it.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
