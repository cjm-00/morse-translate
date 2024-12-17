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

export function translateToEnglish(input) {
  return input
    .split(" ")
    .map((morse) => reverseAlphabet[morse] || "(?)")
    .join("");
}
