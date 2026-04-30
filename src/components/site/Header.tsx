import { Link } from "@tanstack/react-router";
import logo from "@/assets/sga-logo.png?inline";
import { SignupModal, useSignupModal } from "./SignupModal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5516991069776&text=Ol%C3%A1%21%20Quero%20falar%20sobre%20o%20VCT%20Ribeir%C3%A3o%20%E2%80%94%20S%C3%A9rie%20A.";

export function Header() {
  const { open, setOpen } = useSignupModal();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-5">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link to="/vct-ribeirao/serie-a" className="flex items-center">
          <img src={logo} alt="Santos Games" className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-2 py-2">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#faq", label: "F.A.Q" },
            { href: "#vaga", label: "Garanta sua vaga" },
            { href: "#reconhecimentos", label: "Reconhecimentos" },
          ].map((item) => (
            <a key={item.href} href={item.href}
              className="font-mono-tag text-[11px] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground px-4 py-2 rounded-full transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-5 py-2.5 font-mono-tag text-[11px] uppercase tracking-[0.18em] text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          WhatsApp
        </a>
      </div>
      <SignupModal open={open} onOpenChange={setOpen} />
    </header>
  );
}
