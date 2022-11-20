const Validator = require("../src/Validator");

describe("Validator 테스트", () => {
  test("다리의 길이를 입력받을 때 3~20 사이의 숫자가 아니라면 예외발생", () => {
    expect(() => Validator.validateBridgeSize("2")).toThrow("[ERROR]");
    expect(() => Validator.validateBridgeSize("a")).toThrow("[ERROR]");
  });

  test("이동할 칸을 선택할 때 입력 값이 U나 D가 아니라면 예외발생", () => {
    expect(() => Validator.validateMoveCommand("r")).toThrow("[ERROR]");
    expect(() => Validator.validateMoveCommand("Q")).toThrow("[ERROR]");
  });

  test("게임 재시작을 할 때 입력 값이 R이나 Q가 아니라면 예외발생", () => {
    expect(() => Validator.validateRetryCommand("u")).toThrow("[ERROR]");
    expect(() => Validator.validateRetryCommand("D")).toThrow("[ERROR]");
  });
});
