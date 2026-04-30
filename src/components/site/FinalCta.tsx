import capa from "@/assets/capa01.png";
import { SignupModal, useSignupModal } from "./SignupModal";

export function FinalCta() {
  const { open, setOpen, openModal } = useSignupModal();
  return (
    <section id="vaga" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={capa} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1100px] text-center">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary">// 4 times · vagas limitadas</span>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-display text-5xl md:text-8xl uppercase text-secondary leading-[0.9]">
          Sua chance de <span className="text-primary">competir de verdade.</span>
        </h2>
        <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
          Se você é Diamante 3, Ascendente, Imortal ou Radiante, essa edição é pra você.
          Garanta sua vaga antes que feche.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button type="button" onClick={openModal}
            className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground font-display uppercase tracking-wider text-lg px-8 py-4 rounded-sm transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-red-strong)", clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)" }}>
            Garantir minha vaga
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a href="#faq" className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors">
            Tenho dúvidas →
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 font-mono-tag text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>R$ 79,90 / pessoa</span>
          <span className="text-primary">●</span>
          <span>31/05/2026</span>
          <span className="text-primary">●</span>
          <span>Ribeirão Preto</span>
        </div>
      </div>
      <SignupModal open={open} onOpenChange={setOpen} />
    </section>
  );
}
