const { isBridgeLengthValid, isMoveValid } = require("../src/utils/index");

describe("isBridgeLengthValid 함수 테스트", () => {
  test("공백을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      isBridgeLengthValid("");
    }).toThrow("[ERROR] 공백이 아닌 값을 입력해주세요.");
  });

  test("문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      isBridgeLengthValid("a");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("범위를 벗어난 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      isBridgeLengthValid(" ");
    }).toThrow("[ERROR] 3~20 범위의 값만 입력해주세요.");
  });
});

describe("isMoveValid 함수 테스트", () => {
  test("공백을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      isMoveValid("");
    }).toThrow("[ERROR] 공백이 아닌 값을 입력해주세요.");
  });

  test("옵션에 해당하지 않은 알파벳을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      isMoveValid("a");
    }).toThrow("[ERROR] U 또는 D 값만 입력해주세요.");
  });
});
