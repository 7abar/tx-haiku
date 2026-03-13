import { describe, it, expect } from "vitest";
import { generateHaiku } from "./haiku.js";

const REAL_TX = "0x014dcffe7c36e0e9ca13935b7b9d3067805e023e3bdbf01712cb85054215032c";

describe("generateHaiku", () => {
  it("returns three non-empty lines", () => {
    const { line1, line2, line3 } = generateHaiku(REAL_TX);
    expect(line1.length).toBeGreaterThan(0);
    expect(line2.length).toBeGreaterThan(0);
    expect(line3.length).toBeGreaterThan(0);
  });
  it("is deterministic", () => {
    const a = generateHaiku(REAL_TX);
    const b = generateHaiku(REAL_TX);
    expect(a).toEqual(b);
  });
  it("produces different haikus for different hashes", () => {
    const a = generateHaiku(REAL_TX);
    const b = generateHaiku("0xdaefb8886bfd69903aaff499db3082455eacb6f997d1e524c9d720bb01a918dd");
    expect(a.line1 !== b.line1 || a.line2 !== b.line2).toBe(true);
  });
  it("handles all-zero hash", () => {
    const { line1 } = generateHaiku("0x" + "0".repeat(64));
    expect(line1.length).toBeGreaterThan(0);
  });
  it("returns a title", () => {
    const { title } = generateHaiku(REAL_TX);
    expect(title.length).toBeGreaterThan(0);
  });
});