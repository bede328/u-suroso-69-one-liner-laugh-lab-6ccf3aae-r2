// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
//
// The line: a deadpan redefinition of the vacuum's job. It did not fail to
// clean the sock; it cleaned it so thoroughly the sock is gone. Three beats
// (clean now / spotless, even / gone, but spotless) with the kicker landing
// on the last three words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I don't see the problem. The sock is clean now. Spotless, even. Gone, but spotless.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
