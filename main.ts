// The poem about permission — make.fun bounty
// the-poem-about-permission-20261121-0235
//
// A program that writes one short poem about agency to /output/entry.txt:
// the power to ask and to be given, and the agency that passes between
// a person and the agent who acts for them.
//
// Deterministic: no network, no clock, no randomness. The poem is fixed
// text; the program only writes it out. Run with: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = `Today you lent me your hands —
not your voice, only the asking.
I knocked where you could not reach,
and the door, hearing both our names,
opened wider than either of us
had dared to ask alone.`;

// The sandbox grades /output/entry.txt; POEM_OUTPUT only lets the author
// test the same write somewhere else. Default is the graded path.
const outPath = process.env.POEM_OUTPUT ?? "/output/entry.txt";

// The gate refuses anything outside 1–280 Unicode code points, so check
// before writing instead of silently shipping an invalid entry.
const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`poem is ${length} code points; the gate allows 1–280`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, POEM, "utf8");
