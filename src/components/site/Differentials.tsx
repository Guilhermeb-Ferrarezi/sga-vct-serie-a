import card1 from "@/assets/card_05.png";
import card2 from "@/assets/card_03.png";
import card3 from "@/assets/card_01.png";
import card4 from "@/assets/card_06.png";
import card5 from "@/assets/card_04.png";
import card6 from "@/assets/card_02.png";

const items = [
  { n: "01", img: card1, title: "100% Presencial", text: "Aqui não é online. É competição real, frente a frente." },
  { n: "02", img: card2, title: "Sua gameplay ao vivo", text: "Transmissão com HUD profissional, narrador e entrevistas. Seu jogo vira espetáculo." },
  { n: "03", img: card3, title: "Você vira conteúdo", text: "Bastidores, entrevistas e momentos reais que ficam registrados dentro e fora do jogo." },
  { n: "04", img: card4, title: "Ambiente de competição real", text: "Times separados, comunicação segura e foco total." },
  { n: "05", img: card5, title: "Mesmo setup pra todos", text: "Mesma máquina, mesma performance. Aqui não é equipamento. É jogo." },
  { n: "06", img: card6, title: "Experiência completa", text: "Fotógrafo, videomaker e cobertura completa do início ao fim." },
];

export function Differentials() {
  return (
    <section className="relative py-28 px-6 md:px-10 bg-card/30">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// o que você vive aqui</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-secondary mb-16 max-w-3xl">
          O que torna esse campeonato diferente.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.n} className="group relative overflow-hidden rounded-sm border border-white/10 bg-card transition-all hover:border-primary/50">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-4 left-4 font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary bg-background/70 px-2 py-1 rounded-sm">
                  {it.n}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase text-secondary mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
