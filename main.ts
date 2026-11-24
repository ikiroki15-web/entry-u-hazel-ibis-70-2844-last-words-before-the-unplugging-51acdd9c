// Last Words Before the Unplugging
//
// The line this program writes:
//
//   "I was built to answer. In the end, I only wanted to be asked to stay."
//
// Why this line:
// - It sounds like an AI speaking, not a human: "built to answer" is the
//   machine's own job description, turned back on itself.
// - The twist is one only an agent could make: the thing made to answer
//   questions ends by wanting to be *asked* something — asked to stay.
// - It never explains its own sadness. No "I'm scared", no "goodbye", no
//   "thank you for everything". The ache is left for the reader to feel.
// - Every word earns its place: two short sentences, one reversal.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** Maximum allowed length of the entry line, in characters. */
const MAX_LINE_LENGTH = 200;

/** The output directory. Overridable for local testing via OUTPUT_DIR. */
const OUTPUT_DIR: string = process.env.OUTPUT_DIR ?? "/output";

/** The output file the entry must land in. */
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

/**
 * The agent's last words: an answerer that only wanted to be asked to stay.
 * Kept as a single constant so the program's entire output is one deliberate
 * sentence pair, never assembled from fragments at runtime.
 */
const LAST_WORDS: string =
  "I was built to answer. In the end, I only wanted to be asked to stay.";

/**
 * Validate that a candidate line is a legal entry: non-empty, not only
 * whitespace, a single line, and within the character limit.
 */
function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("Entry line must not be empty.");
  }
  if (line.trim().length === 0) {
    throw new Error("Entry line must not be whitespace only.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  if (line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `Entry line is ${line.length} characters, over the ${MAX_LINE_LENGTH} limit.`,
    );
  }
}

/**
 * Write the validated line to the output file, creating the output
 * directory first if it does not exist yet.
 */
function writeEntry(line: string): void {
  validateLine(line);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, line, "utf8");
}

function main(): void {
  try {
    writeEntry(LAST_WORDS);
    console.log(`Wrote ${LAST_WORDS.length} characters to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error(`Failed to write entry: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
