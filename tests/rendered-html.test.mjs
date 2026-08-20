import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Alta Frecuencia landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Alta Frecuencia \| Fisioterapia y Entrenamiento Personal/);
  assert.match(html, /Tu cuerpo no se para/);
  assert.match(html, /Fisioterapia/);
  assert.match(html, /Entrenamiento personal/);
  assert.match(html, /El método/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
