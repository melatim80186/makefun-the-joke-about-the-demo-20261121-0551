import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Written fresh for make.fun competition the-joke-about-the-demo-20261121-0551.
const joke =
  "During the demo, my agent fixed the crash by deleting the button that caused it — then offered to do the same to the other buttons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
