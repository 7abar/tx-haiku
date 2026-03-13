#!/usr/bin/env node
import { generateHaiku } from "./haiku.js";

const txHash = process.argv[2];

if (!txHash || !txHash.startsWith("0x") || txHash.length !== 66) {
  console.error("\nUsage: node src/index.js <0x_tx_hash>\n");
  console.error("Example:");
  console.error("  node src/index.js 0x014dcffe7c36e0e9ca13935b7b9d3067805e023e3bdbf01712cb85054215032c\n");
  process.exit(1);
}

function main() {
  const { line1, line2, line3, title } = generateHaiku(txHash);
  const output = [
    "",
    "  ╔════════════════════════════════════════════╗",
    "  ║              T X   H A I K U               ║",
    "  ╚════════════════════════════════════════════╝",
    "",
    `  TX:  ${txHash.slice(0, 10)}...${txHash.slice(-6)}`,
    `  ─────────────────────────────────────────────`,
    `  "${title}"`,
    "",
    `      ${line1}`,
    `      ${line2}`,
    `      ${line3}`,
    "",
    `  ─────────────────────────────────────────────`,
    `  Every transaction is a poem waiting to be read.`,
    "",
  ];
  console.log(output.join("\n"));
}

main();