import { translateToMorse } from "./translateToMorse";

describe("Translate to Morse tests", () => {
  test("translates test phrase correctly from english input", () => {
    expect(
      translateToMorse("The quick brown fox jumped over the lazy brown dog")
    ).toBe(
      "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -... .-. --- .-- -. / -.. --- --."
    );
  });
  test("translates unknown input as (?)", () => {
    expect(translateToMorse("2")).toBe("(?)");
  });
});
