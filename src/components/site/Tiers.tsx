const tiers = [
  { num: "01", name: "Diamond", desc: "Apenas Diamante 3 pode jogar. Diamante 1 e 2 não participam.", color: "var(--diamond)" },
  { num: "02", name: "Ascendant", desc: "Ascendente 1, 2 e 3 podem jogar.", color: "var(--ascendant)" },
  { num: "03", name: "Immortal", desc: "Imortal 1, 2 e 3 podem jogar.", color: "var(--immortal)" },
  { num: "04", name: "Radiant", desc: "Radiante pode jogar.", color: "var(--radiant)" },
];

export function Tiers() {
  return (
    <section id="sobre" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// quem pode entrar</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-secondary mb-4">
          Série A <span className="text-muted-foreground">(Avançado)</span>
        </h2>
        <p className="max-w-3xl text-muted-foreground mb-16">
          A Série A é para jogadores avançados. Permitidos do Diamante 3 até Radiante.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div key={t.num} className="group relative rounded-sm border border-white/10 bg-card p-7 transition-all hover:border-primary/40 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="mb-6 flex items-baseline justify-between">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tier {t.num}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: `hsl(${t.color})`, boxShadow: `0 0 16px hsl(${t.color})` }} />
              </div>
              <h3 className="font-display text-4xl uppercase mb-3" style={{ color: `hsl(${t.color})` }}>{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
          {[
            { label: "Quem pode jogar", text: "Diamante 3, Ascendente 1-3, Imortal 1-3 e Radiante." },
            { label: "Quem não pode jogar", text: "Diamante 1, Diamante 2 ou qualquer elo abaixo." },
          ].map((b) => (
            <div key={b.label} className="rounded-sm border border-primary/30 bg-primary/5 p-6">
              <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary mb-2">{b.label}</p>
              <p className="text-sm text-foreground/90">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
