import { translateToEnglish } from "./translateToEnglish";

describe("Translate to English tests", () => {
  test("translates test phrase correctly from morse input", () => {
    expect(
      translateToEnglish(
        "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -... .-. --- .-- -. / -.. --- --."
      )
    ).toBe("THE QUICK BROWN FOX JUMPED OVER THE LAZY BROWN DOG");
  });
  test("translates unknown input as (?)", () => {
    expect(translateToEnglish("2")).toBe("(?)");
  });
});
