const PHONE = "5516991069776";
const MSG_TEAM = "Olá! Quero inscrever meu time no VCT Ribeirão — Série A.";
const MSG_HELP = "Olá! Quero participar do VCT Ribeirão — Série A, mas preciso de ajuda para montar um time.";

const link = (msg: string) =>
  `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(msg)}`;

export function SignupModal() {
  return (
    <div
      id="signup-modal"
      aria-hidden="true"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 px-4"
    >
      <a
        href="#"
        aria-label="Fechar modal"
        className="absolute inset-0 cursor-default"
      />

      <div className="relative w-full max-w-lg border border-primary/30 bg-card p-6 shadow-2xl">
        <a
          href="#"
          aria-label="Fechar modal"
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        >
          <span className="text-2xl leading-none text-foreground">×</span>
        </a>

        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-secondary leading-tight">
            Como você vai <span className="text-primary">participar?</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Escolha uma opção pra continuar no WhatsApp.
          </p>
        </div>

        <div className="mt-4 grid gap-3">
          <a
            href={link(MSG_TEAM)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-sm border border-white/10 bg-background/60 p-5 transition-all hover:border-primary/50 hover:-translate-y-0.5"
          >
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
              // opção 01
            </p>
            <h3 className="font-display text-2xl uppercase text-secondary mb-1">
              Já tenho time
            </h3>
            <p className="text-sm text-muted-foreground">
              Vou inscrever meu time completo (5 jogadores).
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.22em] text-foreground/80 group-hover:text-primary">
              Continuar no WhatsApp →
            </span>
          </a>

          <a
            href={link(MSG_HELP)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-sm border border-white/10 bg-background/60 p-5 transition-all hover:border-primary/50 hover:-translate-y-0.5"
          >
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
              // opção 02
            </p>
            <h3 className="font-display text-2xl uppercase text-secondary mb-1">
              Quero ajuda pra montar time
            </h3>
            <p className="text-sm text-muted-foreground">
              Te conectamos com outros jogadores inscritos.
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.22em] text-foreground/80 group-hover:text-primary">
              Continuar no WhatsApp →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
