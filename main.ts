// One Line, One Laugh — entry program.
// Writes a single original one-liner (at most 200 characters)
// to /output/entry.txt, the file the sealed gate scorer reads.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a domestic truce with a smoke alarm. Original line,
// written for this entry — short, one turn, lands on first read.
const LINE =
  "My smoke alarm and I have an understanding: it screams, I wave a tea towel at it, and we both pretend dinner was intentional.";

const OUT_DIR = "/output";

// Self-check the gate before writing: 1–200 characters, not only
// whitespace, so an invalid line can never reach the scorer.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line fails the gate at ${LINE.length} characters`);
}
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
