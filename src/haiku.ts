const SYLLABLES: string[] = [
  "wei","gwei","eth","base","hash","node","peer","mint","burn","gas","nonce","slot","byte","code","call","log",
  "fork","chain","block","proof","stake","vote","bond","pool","swap","lock","key","sign","send","read","write","seal",
  "deep","root","leaf","tree","path","bloom","snap","sync","dark","light","null","void","true","pure","safe","cold",
  "hot","fast","slow","hard","soft","new","old","raw","warm","cool","bright","dim","near","far","high","low",
  "zero","one","two","three","four","five","six","seven","eight","nine","ten","twelve","ten","all","none","half",
  "rain","snow","wind","fog","mist","dust","fire","ice","stone","iron","glass","clay","silk","lace","rust","ash",
  "dawn","dusk","noon","night","moon","sun","star","sky","sea","lake","brook","wave","tide","shore","cliff","vale",
  "oak","pine","fern","moss","rose","thorn","seed","root","bloom","fruit","leaf","bark","sap","bud","spore","vine",
  "hawk","crow","owl","dove","crane","heron","swift","wren","wolf","fox","deer","hare","bear","lynx","elk","boar",
  "forge","cast","build","craft","shape","mold","cut","grind","bend","fold","weave","braid","knot","bind","tie","wrap",
  "run","walk","leap","fall","rise","flow","spin","turn","drift","sink","float","soar","dive","climb","cross","pass",
  "speak","sing","cry","laugh","sigh","pray","dream","wake","know","think","feel","see","hear","taste","touch","sense",
  "brave","bold","calm","kind","wise","true","just","fair","still","clear","deep","vast","wide","long","strong","free",
  "once","soon","now","then","here","there","both","each","more","less","much","few","some","most","same","next",
  "grey","blue","green","red","gold","white","black","bright","soft","hard","thin","thick","round","flat","sharp","smooth",
  "one","two","three","four","five","six","eight","nine","time","space","void","world","life","death","peace","end",
];

function countSyllables(word: string): number {
  const vowelGroups = word.toLowerCase().match(/[aeiouy]+/g);
  return Math.max(1, vowelGroups ? vowelGroups.length : 1);
}

function buildLine(bytes: number[], targetSyllables: number): string {
  const words: string[] = [];
  let syllableCount = 0;
  let i = 0;
  while (syllableCount < targetSyllables && i < bytes.length) {
    const word = SYLLABLES[bytes[i] % SYLLABLES.length];
    const wSyl = countSyllables(word);
    if (syllableCount + wSyl <= targetSyllables) { words.push(word); syllableCount += wSyl; }
    i++;
    if (i >= bytes.length) break;
  }
  return words.join(" ");
}

export function generateHaiku(txHash: string): { line1: string; line2: string; line3: string; title: string } {
  const clean = txHash.replace("0x", "");
  const bytes: number[] = [];
  for (let i = 0; i < clean.length; i += 2) bytes.push(parseInt(clean.slice(i, i + 2), 16));
  const line1 = buildLine(bytes.slice(0, 10), 5);
  const line2 = buildLine(bytes.slice(10, 22), 7);
  const line3 = buildLine(bytes.slice(22, 32), 5);
  const titleWords = bytes.slice(0, 4).map(b => SYLLABLES[b % SYLLABLES.length]);
  return { line1, line2, line3, title: titleWords.join(" ") };
}