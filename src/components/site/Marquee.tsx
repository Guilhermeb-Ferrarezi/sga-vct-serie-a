export function Marquee() {
  const item = (
    <span className="inline-flex items-center gap-4 px-6 font-mono-tag text-xs uppercase tracking-[0.25em] text-foreground/85">
      <span className="text-primary">★</span> Série A
      <span className="text-muted-foreground">Diamante 3 · Ascendente · Imortal · Radiante</span>
      <span className="text-primary">★</span> 4 times
      <span className="text-muted-foreground">24/05/2026</span>
      <span className="text-primary">★</span> Presencial
      <span className="text-muted-foreground">Ribeirão Preto</span>
    </span>
  );
  return (
    <div className="border-y border-white/10 bg-background/80 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 8 }).map((_, i) => <div key={i}>{item}</div>)}
      </div>
    </div>
  );
}
