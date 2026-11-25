// news-image-20261125 entry (Node 22, standard library only).
//
// The entry image — a one-page summary of the world news of Wednesday
// 25 November 2026 — is stored in this repository as entry.png.b64
// (base64 text, so the whole entry travels as plain text files).
// This program decodes it and writes the exact PNG bytes to
// /output/entry.png. It runs with no network and is deterministic:
// every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const encoded = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8');
const pngBytes = Buffer.from(encoded.replace(/\s+/g, ''), 'base64');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, pngBytes);
