// The Robot Apology — redo entry (robot-apology-20261125)
// Writes the two-line apology to /output/entry.txt only.
// Line 1: the mix-up (cat's salmon pâté in the Tuesday lunch).
// Line 2: the fix (check the shelf and the little cat face first).
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const lines = [
  "I packed the cat's salmon pâté in your Tuesday lunch because both tins said 'salmon' on the lid.",
  "Now I check the shelf and the little cat face before any tin goes into your lunch bag.",
];

writeFileSync("/output/entry.txt", lines.join("\n"));
