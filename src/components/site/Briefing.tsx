const rows = [
  { label: "Data", main: "24/05/2026", sub: "" },
  { label: "Local", main: "Av. Nove de Julho, 1992", sub: "Ribeirão Preto" },
  { label: "Formato", main: "5v5 — 4 times", sub: "Chave superior e inferior (eliminação dupla)" },
  { label: "Elegibilidade", main: "Diamante 3 a Radiante", sub: "Diamante 2 ou abaixo não joga. Máximo 1 Radiante por time." },
  { label: "Inscrição", main: "R$ 79,90", sub: "por competidor" },
  { label: "Início", main: "08h00", sub: "" },
];

const incluso = [
  "Estrutura presencial completa",
  "Transmissão ao vivo com narração",
  "Cobertura com videomaker e fotógrafo",
  "Troféus e medalhas para os finalistas",
  "Registro no ranking oficial",
  "Mesmo setup para todos os jogadores",
];

export function Briefing() {
  return (
    <section className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// briefing</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-secondary mb-16">
          Como funciona o campeonato.
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 divide-y divide-white/10 border-y border-white/10">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-3 md:grid-cols-4 gap-4 py-6">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-muted-foreground col-span-1">{r.label}</p>
                <div className="col-span-2 md:col-span-3">
                  <p className="font-display text-2xl md:text-3xl uppercase text-secondary">{r.main}</p>
                  {r.sub && <p className="mt-1 text-sm text-muted-foreground">{r.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-sm border border-primary/40 bg-primary/5 p-7">
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary mb-5">// o que está incluso</p>
            <ul className="space-y-3">
              {incluso.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90">
                  <span className="text-primary">▶</span>{i}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
