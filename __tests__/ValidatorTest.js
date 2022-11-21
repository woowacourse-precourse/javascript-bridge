const Validator = require("../src/utils/Validator");

describe("checkBridgeLengthInput 메소드 테스트", () => {
  test("숫자가 아닌 다리 길이 입력 시 예외 발생.", () => {
    expect(() => {
      Validator.checkBridgeLengthInput("5dda")
    }).toThrow("[ERROR]");
  });

  test.each([["2", "21", "-100"]])("다리 길이 범위(3~20)가 아닐 시 예외 발생", (input) => {
    expect((input) => {
      Validator.checkBridgeLengthInput(input)
    }).toThrow("[ERROR]");
  });
});

describe("checkDirectionInput 메소드 테스트", () => {
  test.each([["u", "d", "Up"]])("U와 D가 아닌 방향 입력 시 예외 발생.", (input) => {
    expect((input) => {
      Validator.checkDirectionInput(input)
    }).toThrow("[ERROR]");
  });
});

describe("checkRetryInput 메소드 테스트", () => {
  test.each([["r", "q", "quit"]])("R과 Q가 아닌 명령 입력 시 예외 발생.", (input) => {
    expect((input) => {
      Validator.checkDirectionInput(input)
    }).toThrow("[ERROR]");
  });
});
