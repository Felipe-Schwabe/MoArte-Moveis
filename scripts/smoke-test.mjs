import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("out/index.html", "utf8");
const projectData = readFileSync("src/data/projects.ts", "utf8");
const experience = readFileSync("src/components/sections/Experience.tsx", "utf8");

assert.match(html, /name="robots" content="noindex, nofollow"/, "demo build must be noindex");
assert.doesNotMatch(html, /property="og:image"/, "demo metadata must not point social previews to the official domain");
assert.match(html, /Ambientes que/, "hero heading should be prerendered");
assert.match(html, /Desde 1987/, "company history should be visible in the export");
assert.match(html, /Revisar solicitação/, "quote form should be available in the demo");
assert.doesNotMatch(html, /href="https:\/\/wa\.me\/5547984129952/, "demo export must not link the quote to WhatsApp");

const localImages = new Set([...(projectData + "\n" + experience).matchAll(/\/images\/[a-z-]+\/[a-z0-9-]+\.(?:webp|jpg|png)/g)].map((match) => match[0]));
assert.ok(localImages.size >= 9, "expected the hero, institutional image, and project gallery assets");
for (const asset of localImages) {
  assert.ok(existsSync(`public${asset}`), `missing local image ${asset}`);
  assert.ok(existsSync(`out${asset}`), `image not copied to the static export: ${asset}`);
}

console.log(`Static export smoke checks passed (${localImages.size} local image references).`);
