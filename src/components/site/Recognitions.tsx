const podium = [
  {
    place: "02", title: "2º Lugar", heading: "Destaque oficial",
    items: ["Medalhas personalizadas", "Destaque no ranking oficial", "Registro na edição do campeonato", "Prioridade na próxima inscrição"],
    height: "md:h-[420px]",
  },
  {
    place: "01", title: "1º Lugar", heading: "Nome na história",
    items: ["Troféu personalizado da edição", "Medalhas personalizadas para cada jogador", "Destaque máximo no ranking oficial", "Registro no Hall dos Campeões", "Conteúdo oficial nas redes e no portal", "Destaque como campeão da edição"],
    height: "md:h-[500px]", featured: true,
  },
  {
    place: "03", title: "3º Lugar", heading: "Entre os destaques",
    items: ["Registro no ranking oficial", "Destaque no histórico da edição", "Acesso antecipado para próximas vagas"],
    height: "md:h-[380px]",
  },
];

export function Recognitions() {
  return (
    <section id="reconhecimentos" className="relative py-28 px-6 md:px-10 bg-card/30">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// hall dos campeões</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-secondary mb-16">Reconhecimentos.</h2>

        <div className="grid md:grid-cols-3 gap-6 items-end">
          {podium.map((p) => (
            <div key={p.place}
              className={`relative rounded-sm border p-7 ${p.height} flex flex-col ${p.featured ? "border-primary bg-gradient-to-br from-primary/15 via-card to-card" : "border-white/10 bg-card"}`}
              style={p.featured ? { boxShadow: "var(--shadow-red)" } : { boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-7xl md:text-8xl text-secondary/15">{p.place}</span>
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary">{p.title}</span>
              </div>
              <h3 className="font-display text-3xl uppercase text-secondary mb-5">{p.heading}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary">▶</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
