import { translateToMorse } from "./modules/translateToMorse.js";
import { translateToEnglish } from "./modules/translateToEnglish.js";

const outBox = document.querySelector("#outBox");
const inBox = document.querySelector("#inBox");
const translateButton = document.querySelector("#translateButton");
const modeButton = document.querySelector("#modeButton");

let mode = "textToMorse";

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
