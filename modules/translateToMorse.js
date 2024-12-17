const alphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

const reverseAlphabet = Object.fromEntries(
  Object.entries(alphabet).map(([letter, morse]) => [morse, letter])
);

export function translateToMorse(input) {
  return input
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char] || "(?)")
    .join(" ");
}
