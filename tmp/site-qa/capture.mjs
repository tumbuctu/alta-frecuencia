import { writeFile } from "node:fs/promises";

const [widthArg, heightArg, output, selector] = process.argv.slice(2);
const width = Number(widthArg);
const height = Number(heightArg);
const target = await fetch("http://127.0.0.1:9223/json/new", { method: "PUT" }).then((response) => response.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
let nextId = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});
function send(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise((resolve) => setTimeout(resolve, 1800));
await send("Runtime.evaluate", { expression: `new Promise(async resolve => { for (let y = 0; y < document.documentElement.scrollHeight; y += ${height}) { scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } scrollTo(0, 0); setTimeout(resolve, 500); })`, awaitPromise: true });
if (selector) await send("Runtime.evaluate", { expression: `document.querySelector(${JSON.stringify(selector)}).scrollIntoView(); new Promise(resolve => setTimeout(resolve, 700))`, awaitPromise: true });
const imageState = await send("Runtime.evaluate", { expression: "JSON.stringify([...document.images].map(i => ({src:i.currentSrc,naturalWidth:i.naturalWidth,complete:i.complete})))", returnByValue: true });
console.log(imageState.result.value);
const { data } = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: !selector, fromSurface: true });
await writeFile(output, Buffer.from(data, "base64"));
socket.close();
