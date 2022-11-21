const InputValidator = require("../src/InputValidator");

describe("입력값 유효성 테스트", () => {
  test("입력받은 이동할 칸이 U나 D가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkMoving("UD");
    }).toThrow();
  });

  test("재시작 여부 입력값이 R이나 Q가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkGameCommand("RQ");
    }).toThrow();
  });

  test("입력받은 다리 길이가 숫자가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkBridgeSize("S");
    }).toThrow();
  });

  test("입력받은 다리 길이가 3~20사이의 숫자가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkBridgeSize("1");
    }).toThrow();
  });
});
