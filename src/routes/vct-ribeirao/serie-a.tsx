import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Tiers } from "@/components/site/Tiers";
import { Differentials } from "@/components/site/Differentials";
import { Briefing } from "@/components/site/Briefing";
import { Recognitions } from "@/components/site/Recognitions";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { SignupModal } from "@/components/site/SignupModal";

export const Route = createFileRoute("/vct-ribeirao/serie-a")({
  head: () => ({
    meta: [
      { title: "VCT Ribeirão — Série A | Santos Games" },
      {
        name: "description",
        content:
          "Campeonato presencial de Valorant em Ribeirão Preto exclusivo para Diamante 3, Ascendente, Imortal e Radiante.",
      },
      { property: "og:title", content: "VCT Ribeirão — Série A" },
      { property: "og:description", content: "Diamante 3 a Radiante. 31/05/2026. Ribeirão Preto." },
      { property: "og:url", content: "https://santos-games.com/vct-ribeirao/serie-a" },
    ],
  }),
  component: SeriesAPage,
});

function SeriesAPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Tiers />
      <Differentials />
      <Briefing />
      <Recognitions />
      <Faq />
      <FinalCta />
      <Footer />
      <SignupModal />
    </main>
  );
}
