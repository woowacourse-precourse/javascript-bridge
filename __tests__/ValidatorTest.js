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
  test("플레이어의 입력 값이 U 또는 R이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkMovingValid("u");
    }).toThrow("[ERROR]");
  });
});

describe("checkCommandValid 테스트", () => {
  test("플레이어의 입력 값이 R 또는 Q가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.checkCommandValid("r");
    }).toThrow("[ERROR]");
  });
});
