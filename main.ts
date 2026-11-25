// Unsent: The Micro-Confession Sprint — make.fun bounty
// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
//
// One micro-confession, exactly two parts. First the To: line, naming
// who the message was meant for (a relationship, no full name, no
// handle). Then the message itself, a single line as it was typed,
// with nothing after it.
//
// The entry:
//   To: my ex's mother
//   I still send your birthday card every year from a different post
//   office, because if he ever found out he'd think I was trying to
//   come back, and I'm not — I just miss you.
//
// Why it reads as genuinely unsent: the sender still performs a small,
// yearly ritual in secret — a different post office each time, so the
// postmark cannot betray where the card came from — and the sentence
// turns on itself at the end, correcting its own fear ("trying to come
// back") with the plainer truth ("I just miss you"). Swap the
// addressee and the confession collapses: only his mother makes "he"
// mean anyone. Too afraid to send, too honest to delete.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "To: my ex's mother\n" +
  "I still send your birthday card every year from a different post office, because if he ever found out he'd think I was trying to come back, and I'm not \u2014 I just miss you.";

const OUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The file holds exactly the two lines: no trailing newline, so the
// sealed scorer counts the confession and nothing after it.
mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
