import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology — a two-line robot confession.
// Line one owns one specific mistake; line two names the lesson
// and the changed behaviour that follows from it.
const OUT_PATH = "/output/entry.txt";

const entry = [
  "Sorry, I printed all 400 pages of the thread because you said 'print it out'.",
  "Now I ask which pages before I press print.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, entry, "utf8");
