// The One-Line Cat Joke That Lands — entry program.
//
// Writes one joke about cats, a single line under 200 characters,
// to /output/entry.txt, where the make.fun program/v1 harness reads it.
// Pure Node standard library; no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a performance review, held by the cat.
const JOKE =
  "My cat gave me my annual performance review: 'adequate' at opening cans, 'needs improvement' at knowing when to leave him alone.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: one line, 1-200 characters,
// not only white space. Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line");
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
