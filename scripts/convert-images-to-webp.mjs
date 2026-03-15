#!/usr/bin/env node
/**
 * Converts PNG/JPG/JPEG assets in public/ to WebP for smaller size and better performance.
 * Keeps originals by default; use --replace to delete them after conversion.
 *
 * Usage:
 *   node scripts/convert-images-to-webp.mjs       # writes .webp alongside originals
 *   node scripts/convert-images-to-webp.mjs --replace  # remove .png/.jpg after conversion
 */

import { readdirSync, statSync, unlinkSync, existsSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

const RASTER_EXT = new Set([".png", ".jpg", ".jpeg"]);
const WEBP_QUALITY = 85;
const MAX_DIMENSION = 16383; // WebP format limit

function collectRasterFiles(dir, list = []) {
  if (!existsSync(dir)) return list;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      collectRasterFiles(full, list);
    } else if (RASTER_EXT.has(extname(name).toLowerCase())) {
      list.push(full);
    }
  }
  return list;
}

async function convertToWebp(inputPath, replace = false) {
  const base = inputPath.slice(0, -extname(inputPath).length);
  const outputPath = `${base}.webp`;

  try {
    const meta = await sharp(inputPath).metadata();
    const w = meta.width || 0;
    const h = meta.height || 0;
    let pipeline = sharp(inputPath);
    if (w > MAX_DIMENSION || h > MAX_DIMENSION) {
      const scale = MAX_DIMENSION / Math.max(w, h);
      pipeline = pipeline.resize(Math.round(w * scale), Math.round(h * scale));
    }
    await pipeline
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    const inStat = statSync(inputPath);
    const outStat = statSync(outputPath);
    const saved = ((1 - outStat.size / inStat.size) * 100).toFixed(1);
    console.log(`  ${inputPath.replace(PUBLIC, "")} → .webp (${saved}% smaller)`);
    if (replace) {
      unlinkSync(inputPath);
      console.log(`  (removed original)`);
    }
  } catch (err) {
    console.error(`  ERROR ${inputPath}:`, err.message);
  }
}

async function main() {
  const replace = process.argv.includes("--replace");
  const files = collectRasterFiles(PUBLIC);
  console.log(`Found ${files.length} raster image(s) in public/\n`);

  for (const file of files) {
    await convertToWebp(file, replace);
  }

  console.log(`\nDone. Update code references from .png/.jpg to .webp.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
