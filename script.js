const outBox = document.querySelector("#outBox");
const inBox = document.querySelector("#inBox");
const translateButton = document.querySelector("#translateButton");
const modeButton = document.querySelector("#modeButton");

let mode = "textToMorse";

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
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

const reverseAlphabet = Object.fromEntries(
  Object.entries(alphabet).map(([letter, morse]) => [morse, letter])
);

function translateToMorse(input) {
  return input
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char] || "(?)")
    .join(" ");
}

function translateToEnglish(input) {
  return input
    .split(" ")
    .map((morse) => reverseAlphabet[morse] || "(?)")
    .join("");
}

translateButton.addEventListener("click", () => {
  const input = inBox.value.trim();
  let translated;

  if (mode === "textToMorse") {
    translated = translateToMorse(input);
  } else if (mode === "morseToText") {
    translated = translateToEnglish(input);
  }

  outBox.textContent = translated;
});

document.querySelector("#inputHeading").textContent = "Text Input";
document.querySelector("#outputHeading").textContent = "Morse Output";

modeButton.addEventListener("click", () => {
  mode = mode === "textToMorse" ? "morseToText" : "textToMorse";
  document.querySelector("#inputHeading").textContent =
    mode === "textToMorse" ? "Text Input" : "Morse Input";
  document.querySelector("#outputHeading").textContent =
    mode === "textToMorse" ? "Morse Output" : "Text Output";
  const textHolder = inBox.value;
  inBox.value = outBox.textContent;
  outBox.textContent = textHolder;
});
