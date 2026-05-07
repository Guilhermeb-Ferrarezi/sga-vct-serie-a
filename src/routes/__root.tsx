import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?inline";

const ogImage = "https://cdn.santos-games.com/landing/hero/vct-serie-a.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/vct-ribeirao/serie-a"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  headers: () => ({
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
  }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VCT Ribeirão — Série A | Santos Games" },
      {
        name: "description",
        content:
          "VCT Ribeirão Série A — Campeonato presencial de Valorant em Ribeirão Preto exclusivo para Diamante 3, Ascendente, Imortal e Radiante.",
      },
      { name: "author", content: "Santos Games" },
      { property: "og:title", content: "VCT Ribeirão — Série A" },
      {
        property: "og:description",
        content: "Campeonato presencial de Valorant em Ribeirão Preto. Diamante 3 a Radiante.",
      },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "Jogadores competindo no VCT RP" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://santos-games.com/vct-ribeirao/serie-a" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
      { rel: "canonical", href: "https://santos-games.com/vct-ribeirao/serie-a" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: appCss }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
