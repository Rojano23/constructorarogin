import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
// Read from the untouched supplied originals; retain every requested public path.
async function optimize(dir) {
 for (const entry of await readdir(dir, { withFileTypes: true })) {
  const source = join(dir, entry.name);
  if (entry.isDirectory()) { await optimize(source); continue; }
  if (!/\.(png|jpg)$/.test(entry.name)) continue;
  const target = source.replace('Constructorarogin_Assets_Codex/assets/', 'public/assets/');
  const data = await readFile(source);
  let pipeline = sharp(data);
  if (entry.name === 'rogin_logo_web.png') pipeline = pipeline.resize({ width: 256 });
  const result = entry.name.endsWith('.png') ? await pipeline.png({ palette: true, quality: 90, effort: 10 }).toBuffer() : await pipeline.jpeg({ quality: 85, mozjpeg: true }).toBuffer();
  await writeFile(target, result);
 }
}
await optimize('Constructorarogin_Assets_Codex/assets');
