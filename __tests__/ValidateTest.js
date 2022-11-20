const ValidateBridgeSize = require("../src/ValidateBridgeSize");
const ValidateGameCommand = require("../src/ValidateGameCommand");
const ValidateMoving = require("../src/ValidateMoving");

describe("ValidateBridgeSize 클래스 테스트", () => {
  test("다리 길이 입력값이 숫자가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateBridgeSize('bridgeSize');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('woowacourse');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('');
    }).toThrow();
  });

  test("다리 길이 입력값이 음수인 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateBridgeSize('-3');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('-10');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('-15');
    }).toThrow();
  });

  test("다리 길이 입력값이 자연수가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateBridgeSize('3.5');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('10.0000000000001');
    }).toThrow();
    expect(() => {
      new ValidateBridgeSize('9.99999999999999');
    }).toThrow();
  });

  test("다리 길이 입력값이 3 이상 20 이하의 수가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new InputMoney('2');
    }).toThrow();
    expect(() => {
      new InputMoney('21');
    }).toThrow();
    expect(() => {
      new InputMoney('0');
    }).toThrow();
  });
});

describe("ValidateMoving 클래스 테스트", () => {
  test("이동할 칸 입력값이 알파벳 문자가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateMoving('');
    }).toThrow();
    expect(() => {
      new ValidateMoving('1');
    }).toThrow();
    expect(() => {
      new ValidateMoving('업');
    }).toThrow();
  });

  test("이동할 칸 입력값이 소문자인 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateMoving('u');
    }).toThrow();
    expect(() => {
      new ValidateMoving('d');
    }).toThrow();
  });

  test("이동할 칸 입력값이 대문자이지만 'U' 혹은 'D'가 아닐 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateMoving('Y');
    }).toThrow();
    expect(() => {
      new ValidateMoving('O');
    }).toThrow();
    expect(() => {
      new ValidateMoving('C');
    }).toThrow();
  });
});

describe("ValidateGameCommand 클래스 테스트", () => {
  test("이동할 칸 입력값이 알파벳 문자가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateGameCommand('');
    }).toThrow();
    expect(() => {
      new ValidateGameCommand('1');
    }).toThrow();
    expect(() => {
      new ValidateGameCommand('재시작');
    }).toThrow();
  });

  test("이동할 칸 입력값이 소문자인 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateGameCommand('r');
    }).toThrow();
    expect(() => {
      new ValidateGameCommand('q');
    }).toThrow();
  });

  test("이동할 칸 입력값이 대문자이지만 'U' 혹은 'D'가 아닐 경우 예외가 발생합니다.", () => {
    expect(() => {
      new ValidateGameCommand('P');
    }).toThrow();
    expect(() => {
      new ValidateGameCommand('S');
    }).toThrow();
    expect(() => {
      new ValidateGameCommand('G');
    }).toThrow();
  });
});