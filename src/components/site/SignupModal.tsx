import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PHONE = "5516991069776";
const MSG_TEAM = "Olá! Quero inscrever meu time no VCT Ribeirão — Série A.";
const MSG_HELP = "Olá! Quero participar do VCT Ribeirão — Série A, mas preciso de ajuda para montar um time.";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SignupModal({ open, onOpenChange }: Props) {
  const link = (msg: string) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-primary/30 bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl md:text-4xl uppercase text-secondary leading-tight">
            Como você vai <span className="text-primary">participar?</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Escolha uma opção pra continuar no WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-3">
          <a
            href={link(MSG_TEAM)}
            target="_blank"
            rel="noreferrer"
            onClick={() => onOpenChange(false)}
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
            onClick={() => onOpenChange(false)}
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
      </DialogContent>
    </Dialog>
  );
}

export function useSignupModal() {
  const [open, setOpen] = useState(false);
  return { open, setOpen, openModal: () => setOpen(true) };
}
