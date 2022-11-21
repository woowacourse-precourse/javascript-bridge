const { isBridgeLengthValid } = require("../src/utils/index");

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
