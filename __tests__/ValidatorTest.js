const Validator = require("../src/Validator");

describe("Validator 테스트", () => {
  test("다리 길이가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkBridgeSizeValid("삼");
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 3보다 작다면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkBridgeSizeValid(2);
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 20보다 크다면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkBridgeSizeValid(21);
    }).toThrow("[ERROR]");
  });
});
