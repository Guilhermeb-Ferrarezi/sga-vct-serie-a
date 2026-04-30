import path from "node:path";
import { access } from "node:fs/promises";

const port = Number(process.env.PORT ?? "3000");
const { default: app } = await import("./dist/server/server.js");

const assetRoots = [path.resolve("./dist/client/assets"), path.resolve("./dist/server/assets")];

function contentType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".js" || ext === ".mjs") return "text/javascript; charset=utf-8";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".woff") return "font/woff";
  if (ext === ".woff2") return "font/woff2";
  if (ext === ".json") return "application/json; charset=utf-8";
  return "application/octet-stream";
}

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
        return new Response(Bun.file(filePath), {
          headers: {
            "Content-Type": contentType(filePath),
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
    }

    return app.fetch(request);
  },
});

console.log(`Listening on http://0.0.0.0:${port}`);
