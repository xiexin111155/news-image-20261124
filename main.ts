// news-image-20261124 entry (Node 22, standard library only).
//
// The image shipped in this repository already sums up the world news of
// Tuesday 24 November 2026. The program's only job is to place that image
// at the path the grader reads: /output/entry.png.
//
// The image data lives in the repository as base64 text (entry.png.b64),
// so the repository holds text files only. The program decodes it back to
// the exact PNG bytes at runtime.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png.b64', import.meta.url);
const png = Buffer.from(readFileSync(source, 'utf8').trim(), 'base64');
writeFileSync(join(outputDir, 'entry.png'), png);
