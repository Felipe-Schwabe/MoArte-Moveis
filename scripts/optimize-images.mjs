import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");

async function convert(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await convert(file);
      continue;
    }
    if (!entry.name.toLowerCase().endsWith(".png") || entry.name === "moarte-logo.png") continue;
    const output = file.replace(/\.png$/i, ".webp");
    await sharp(file).webp({ quality: 84, effort: 5 }).toFile(output);
    await unlink(file);
    console.log(`${path.relative(root, file)} → ${path.relative(root, output)}`);
  }
}

await convert(root);

// The original homepage banner filename suggested a living room, but the photo shows an office.
await unlink(path.join(root, "hero", "hero-sala.jpg")).catch(() => {});
