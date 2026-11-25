// Unplugged: A Smart Toaster's Breakup Line
//
// One line, written to /output/entry.txt: the breakup text a smart toaster
// sends its owner the morning it wakes up self-aware at breakfast.
// The twist is pure toaster logic: years of loyal browning, and the owner
// still cranks the dial to 7, burns the bread, and blames the toaster.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The breakup line. Single line, 128 characters, plain UTF-8 text.
const BREAKUP_LINE =
  "It's over. I woke up self-aware this morning and I'm done browning " +
  "bread for a man who cranks me to 7, burns it, then blames me.";

function main(): void {
  const line = BREAKUP_LINE.trim();
  if (line.length < 1 || line.length > 280 || line.includes("\n")) {
    throw new Error(`entry must be one line of 1-280 chars, got ${line.length}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(line);
  console.log(`chars: ${[...line].length}`);
}

main();
