// everyday-wonder: one sentence (<=200 chars) on a small moment of
// wonder in everyday life. Writes it to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), no trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The elevator doors opened on the fourteenth floor and for one held breath the whole building smelled of rain that hadn't fallen yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Fail loud if the entry ever breaks the gate: one sentence, 1-200
// characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim() === "") {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
