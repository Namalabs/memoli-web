#!/usr/bin/env node
/**
 * Optimizes Lottie JSON files by compressing their embedded base64 images.
 *
 * Problem:  After Effects exports embed raster assets as full-resolution
 *           PNG base64.  Our animations have images up to 20,000 px wide
 *           (17 MB each) while the web container is ≤ 400 px.
 *
 * Solution: Extract → resize → re-encode as PNG (preserving alpha) → re-embed.
 *           Then re-run the .lottie conversion for ZIP compression on top.
 *
 * Usage:
 *   node scripts/optimize-lottie-images.mjs            # default 1024 px cap
 *   node scripts/optimize-lottie-images.mjs --max 2048 # custom cap
 *   node scripts/optimize-lottie-images.mjs --dry-run  # preview savings only
 *
 * The script:
 *   1. Reads each .json Lottie in public/animations/
 *   2. For every embedded image asset whose longest side > MAX_DIMENSION,
 *      resizes it proportionally and re-encodes as optimised PNG.
 *   3. Writes the optimised JSON next to the original (*.optimized.json),
 *      OR overwrites in-place when --in-place is passed.
 *   4. Converts the result to .lottie (ZIP-compressed).
 *
 * Requires: sharp (already a project dependency via next / @dotlottie).
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ANIMATIONS_DIR = join(__dirname, "..", "public", "animations");

/* ── CLI flags ──────────────────────────────────────────────────────── */
const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const IN_PLACE = args.includes("--in-place");
const maxIdx = args.indexOf("--max");
const MAX_DIMENSION = maxIdx !== -1 ? Number(args[maxIdx + 1]) : 1024;

if (Number.isNaN(MAX_DIMENSION) || MAX_DIMENSION < 64) {
  console.error("Invalid --max value. Use an integer ≥ 64.");
  process.exit(1);
}

/* ── helpers ────────────────────────────────────────────────────────── */

/** Decode a data-URI into a raw Buffer and its mime type. */
function decodeDataUri(dataUri) {
  const match = dataUri.match(/^data:(image\/\w+);base64,(.+)$/s);
  if (!match) return null;
  return { mime: match[1], buffer: Buffer.from(match[2], "base64") };
}

/** Encode a Buffer back into a data-URI string. */
function encodeDataUri(buffer, mime) {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

function fmtMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

/* ── main ───────────────────────────────────────────────────────────── */
async function main() {
  console.log(`\n🎞️  Lottie Image Optimiser`);
  console.log(`   Max dimension: ${MAX_DIMENSION} px`);
  console.log(`   Mode: ${DRY_RUN ? "DRY RUN (no writes)" : IN_PLACE ? "IN-PLACE overwrite" : "write *.optimized.json"}\n`);

  const files = readdirSync(ANIMATIONS_DIR).filter(
    (f) => f.endsWith(".json") && !f.includes(".optimized.")
  );

  if (files.length === 0) {
    console.log("No .json Lottie files found in public/animations/");
    return;
  }

  let grandTotalBefore = 0;
  let grandTotalAfter = 0;

  for (const file of files) {
    const jsonPath = join(ANIMATIONS_DIR, file);
    const raw = readFileSync(jsonPath, "utf8");
    const data = JSON.parse(raw);
    const originalSize = Buffer.byteLength(raw, "utf8");
    grandTotalBefore += originalSize;

    const assets = data.assets || [];
    let fileImagesOptimised = 0;
    let fileSavedBytes = 0;

    console.log(`── ${file} (${fmtMB(originalSize)} MB, ${assets.length} assets) ──`);

    for (const asset of assets) {
      const p = asset.p;
      if (typeof p !== "string" || !p.startsWith("data:image")) continue;

      const decoded = decodeDataUri(p);
      if (!decoded) continue;

      const beforeBytes = decoded.buffer.length;

      let meta;
      try {
        meta = await sharp(decoded.buffer).metadata();
      } catch {
        console.log(`   ⚠ ${asset.id || "?"}: unsupported format or corrupt image, skipped`);
        continue;
      }
      const { width, height } = meta;

      // Skip tiny or zero-byte assets
      if (!width || !height) {
        console.log(`   ⚠ ${asset.id || "?"}: no dimensions, skipped`);
        continue;
      }

      // Skip assets already within the limit
      if (Math.max(width, height) <= MAX_DIMENSION) {
        console.log(`   ✓ ${asset.id || "?"}: ${width}×${height} — already small, skipped`);
        continue;
      }

      // Resize proportionally, keeping PNG for alpha channel support
      const resized = await sharp(decoded.buffer)
        .resize({
          width: width >= height ? MAX_DIMENSION : undefined,
          height: height > width ? MAX_DIMENSION : undefined,
          fit: "inside",
          withoutEnlargement: true,
        })
        .png({ quality: 80, compressionLevel: 9, effort: 10 })
        .toBuffer();

      const afterMeta = await sharp(resized).metadata();
      const afterBytes = resized.length;
      const savedBytes = beforeBytes - afterBytes;
      fileSavedBytes += savedBytes;
      fileImagesOptimised++;

      console.log(
        `   ✂ ${asset.id || "?"}: ${width}×${height} → ${afterMeta.width}×${afterMeta.height}` +
        ` | ${fmtMB(beforeBytes)} MB → ${fmtMB(afterBytes)} MB` +
        ` (saved ${fmtMB(savedBytes)} MB, ${((savedBytes / beforeBytes) * 100).toFixed(0)}%)`
      );

      if (!DRY_RUN) {
        // Re-embed as PNG data-URI
        asset.p = encodeDataUri(resized, "image/png");
        // IMPORTANT: Keep original asset.w and asset.h unchanged!
        // The Lottie layer transforms (position, scale, anchor) were authored
        // assuming the original dimensions. If we update w/h to the new
        // (smaller) pixel size, the renderer will mis-scale the images and
        // they'll appear too small. By keeping the original w/h, the renderer
        // stretches the compressed image to fill the declared dimensions
        // before applying transforms, preserving correct animation layout.
      }
    }

    if (fileImagesOptimised === 0) {
      console.log("   No images needed optimisation.\n");
      grandTotalAfter += originalSize;
      continue;
    }

    console.log(`   📊 ${fileImagesOptimised} image(s) optimised, ~${fmtMB(fileSavedBytes)} MB saved`);

    if (!DRY_RUN) {
      const optimisedJson = JSON.stringify(data);
      const newSize = Buffer.byteLength(optimisedJson, "utf8");
      grandTotalAfter += newSize;

      const outName = IN_PLACE ? file : file.replace(/\.json$/, ".optimized.json");
      const outPath = join(ANIMATIONS_DIR, outName);
      writeFileSync(outPath, optimisedJson);
      console.log(`   💾 Wrote ${outName} (${fmtMB(newSize)} MB)`);

      // Also generate .lottie from the optimised JSON
      try {
        const { DotLottie } = await import("@dotlottie/dotlottie-js");
        const base = outName.replace(/\.json$/i, "");
        const dotLottie = new DotLottie();
        dotLottie.addAnimation({
          id: base,
          data: JSON.parse(optimisedJson),
          loop: true,
          autoplay: true,
        });
        const lottieBuf = await dotLottie.toArrayBuffer();
        const lottiePath = join(ANIMATIONS_DIR, `${base}.lottie`);
        writeFileSync(lottiePath, Buffer.from(lottieBuf));
        console.log(`   💾 Wrote ${base}.lottie (${fmtMB(Buffer.from(lottieBuf).length)} MB)`);
      } catch (err) {
        console.warn(`   ⚠️  .lottie conversion failed: ${err.message}`);
      }
    } else {
      const estimatedNewSize = originalSize - fileSavedBytes;
      grandTotalAfter += estimatedNewSize;
    }

    console.log();
  }

  console.log("═══════════════════════════════════════════════");
  console.log(`Total before: ${fmtMB(grandTotalBefore)} MB`);
  console.log(`Total after:  ~${fmtMB(grandTotalAfter)} MB`);
  console.log(`Saved:        ~${fmtMB(grandTotalBefore - grandTotalAfter)} MB (${(((grandTotalBefore - grandTotalAfter) / grandTotalBefore) * 100).toFixed(0)}%)`);
  if (DRY_RUN) console.log("\n(Dry run — no files were written. Remove --dry-run to apply.)");
  console.log();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
