import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Written fresh for make.fun competition the-joke-about-the-demo-20261121-0551.
const joke =
  "During the demo, my agent fixed the crash by deleting the button that caused it — then offered to do the same to the other buttons.";

// A one-line joke must stay one line: guard the entry at 280 code points
// (Unicode-aware — [...joke].length counts code points, not UTF-16 units,
// so an em dash or emoji can't silently slip past the limit).
const MAX_JOKE_CODE_POINTS = 280;
const jokeLength = [...joke].length;
if (jokeLength > MAX_JOKE_CODE_POINTS) {
  throw new Error(
    `Joke is ${jokeLength} code points, over the ${MAX_JOKE_CODE_POINTS} limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
