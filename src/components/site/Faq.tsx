import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Quem pode participar dessa edição?", a: "Apenas jogadores entre Diamante 3 e Radiante. Diamante 1, Diamante 2 ou abaixo não podem participar. Cada time pode ter no máximo 1 Radiante." },
  { q: "Como funciona o formato do campeonato?", a: "5v5, 4 times, com chave superior e inferior em eliminação dupla. Tudo presencial." },
  { q: "Como faço minha inscrição?", a: "Pelo botão Garantir minha vaga ou pelo nosso WhatsApp. A vaga é confirmada após pagamento e verificação do elo." },
  { q: "Posso participar mesmo sem time fechado?", a: "Sim. Te ajudamos a encontrar time entre os inscritos antes do campeonato." },
  { q: "Qual o valor da inscrição?", a: "R$ 79,90 por competidor." },
  { q: "Que horas começa o campeonato?", a: "Início às 08h00. Encerramento previsto entre 21h e 22h." },
  { q: "O campeonato é realmente presencial?", a: "Sim, 100% presencial em Ribeirão Preto." },
  { q: "Os jogos são transmitidos ao vivo?", a: "Sim, com HUD profissional, narração e entrevistas." },
  { q: "Preciso levar meus periféricos?", a: "Pode levar, mas não é obrigatório. Todos os setups são iguais." },
  { q: "Posso levar meu próprio computador ou monitor?", a: "Não. O setup é igual para todos para garantir competição justa." },
  { q: "Pode levar comida ou bebida?", a: "Bebidas em garrafa fechada sim. Comida não é permitida nas estações." },
  { q: "Posso levar acompanhantes?", a: "Sim. A área de público é livre durante o evento." },
  { q: "Tem estacionamento?", a: "Sim, há estacionamento na região. Recomendamos chegar com antecedência." },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// dúvidas</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase text-secondary mb-2">Perguntas frequentes.</h2>
        <p className="text-muted-foreground mb-12">Tire suas dúvidas sobre o campeonato.</p>

        <div className="border-y border-white/10">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item border-b border-white/10 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                <span className="flex items-baseline gap-5">
                  <span className="font-mono-tag text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl md:text-2xl uppercase text-secondary">{f.q}</span>
                </span>
                <ChevronDown className="faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </summary>
              <div className="pl-14 pb-6 text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
