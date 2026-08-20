import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const output = new URL("../docs/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static export failed: ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>(?:\s*)/gi, "")
  .replace(/<link\b(?=[^>]*rel=["']preload["'])(?=[^>]*imageSrcSet)[^>]*\/?>/gi, "")
  .replace(/\s(?:imageSrcSet|srcSet)=["'][^"']*["']/gi, "")
  .replace(/src=["']\/_next\/image\?url=([^&"']+)(?:&amp;[^"']*)?["']/gi, (_, source) => `src="${decodeURIComponent(source)}"`)
  .replace(/\b(href|src)=["']\/(?!\/)/g, '$1="/alta-frecuencia/');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), output, { recursive: true });
await writeFile(new URL("index.html", output), html);
await writeFile(new URL(".nojekyll", output), "");
