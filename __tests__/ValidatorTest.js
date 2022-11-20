const Validator = require("../src/Validator");

describe("checkBridgeSizeValid 테스트", () => {
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

describe("checkMovingValid 테스트", () => {
  test("플레이어가 이동할 칸이 U 또는 R이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkMovingValid("u");
    }).toThrow("[ERROR]");
  });
});
