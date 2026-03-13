# tx-haiku 🌸

> A transaction is not just a hash. It's a moment in time, frozen on the blockchain. tx-haiku reveals the poem hidden inside.

Every transaction hash contains a **unique haiku**. The bytes become syllables, the syllables become words, the words become poetry. Deterministic. Permanent. Art.

## Usage

```bash
node src/index.js 0xYourTransactionHash
```

Get your tx hash from [BaseScan](https://basescan.org) — find any transaction and copy its hash.

## Example Output

```
  ╔════════════════════════════════════════════╗
  ║              T X   H A I K U               ║
  ╚════════════════════════════════════════════╝

  TX:  0x014dcffe...032c
  ─────────────────────────────────────────────
  "wei stake forge write"

      gas nonce slot byte code
      fork chain block proof stake vote bond
      pool swap lock key sign

  ─────────────────────────────────────────────
  Every transaction is a poem waiting to be read.
```

## How It Works

1. **Parse** — The 32-byte transaction hash is split into hex bytes
2. **Map** — Each byte indexes into a library of 256 crypto-themed syllables
3. **Compose** — Syllables are assembled into a 5-7-5 haiku structure
4. **Title** — The first 4 bytes become the haiku's title

## Every Hash Contains a Unique 5-7-5 Haiku. Deterministic. Permanent. Art.

The haiku for tx `0x014d...032c` — the first Uniswap swap through AgentScope — lives forever.

## The Syllable Library

All 256 byte values (0x00-0xFF) map to crypto and nature-themed syllables:
- Crypto: `wei`, `gwei`, `eth`, `base`, `hash`, `nonce`, `gas`, `swap`, `stake`...
- Nature: `dawn`, `moon`, `rain`, `oak`, `wolf`, `hawk`, `bloom`, `tide`...
- Emotion: `dream`, `calm`, `brave`, `free`, `deep`, `vast`...

## Setup

```bash
npm install
node src/index.js 0x014dcffe7c36e0e9ca13935b7b9d3067805e023e3bdbf01712cb85054215032c
```

---

*Every hash is a poem. Every block is a verse. The blockchain is literature.*