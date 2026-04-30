const port = Number(process.env.PORT ?? "3000");
const { default: app } = await import("./dist/server/server.js");

Bun.serve({
  port,
  fetch: app.fetch,
});

console.log(`Listening on http://0.0.0.0:${port}`);
