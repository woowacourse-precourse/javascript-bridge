const Validation = require("../src/Validation");

describe("다리만들기", () => {
  test("validateBridgeSize", () => {
    expect(() => {
      Validation.validateBridgeSize(1);
    }).toThrow();
  });
  test("validateInputMoving", () => {
    expect(() => {
      Validation.validateInputMoving("K");
    }).toThrow();
  });
  test("validateInputGameCommand", () => {
    expect(() => {
      Validation.validateInputGameCommand("P");
    }).toThrow();
  });
});
