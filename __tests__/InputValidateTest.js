const InputValidator = require("../src/utils/InputValidator");

describe("입력값 유효성 검사 테스트", () => {
  test("다리 길이의 입력값으로 숫자가 아닌 값이 주어지면 에러를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkBridgeSize("1d");
    }).toThrow("[ERROR]");
  });

  test("다리 길이의 입력값으로 3 ~ 20의 범위를 벗어난 값이 주어지면 에러를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkBridgeSize("21");
    }).toThrow("[ERROR]");
  });

  test("이동할 칸의 입력값으로 U, D가 아닌 값이 주어지면 에러를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkMove("R");
    }).toThrow("[ERROR]");
  });

  test("재시작 여부의 입력값으로 R, Q가 아닌 값이 주어지면 에러를 발생시킨다.", () => {
    expect(() => {
      InputValidator.checkRestart("U");
    }).toThrow("[ERROR]");
  });

  test("아무것도 입력되지 않는다면 에러를 발생시킨다.", () => {
    const checkFunc = [
      InputValidator.checkBridgeSize,
      InputValidator.checkMove,
      InputValidator.checkRestart,
    ];

    for (let i = 0; i < checkFunc.length; i++) {
      expect(() => {
        checkFunc[i]("");
      }).toThrow("[ERROR]");
    }
  });
});
