import path from "node:path";
import { access } from "node:fs/promises";

const port = Number(process.env.PORT ?? "3000");
const { default: app } = await import("./dist/server/server.js");

const assetRoots = [path.resolve("./dist/client/assets"), path.resolve("./dist/server/assets")];

async function findAsset(assetPath: string) {
  for (const root of assetRoots) {
    const filePath = path.join(root, assetPath);
    try {
      await access(filePath);
      return filePath;
    } catch {
      // Try the next build output.
    }
  }

  return null;
}

Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/assets/")) {
      const assetPath = url.pathname.slice("/assets/".length);
      const filePath = await findAsset(assetPath);

      if (filePath) {
        return new Response(Bun.file(filePath));
      }
    }

    return app.fetch(request);
  },
});

console.log(`Listening on http://0.0.0.0:${port}`);
