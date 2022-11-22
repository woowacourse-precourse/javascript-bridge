const { Validations } = require("../src/Validations");

describe("입력값 오류 테스트", () => {
  test("숫자가 아닌 입력값일 경우에 예외가 발생한다.", () => {
    const size = "e";

    expect(() => {
      Validations.validateSizeIsNumber(size);
    }).toThrow("[ERROR] 숫자를 입력해주세요");
  });

  test("3이상 20이하의 숫자가 아닌 경우에 예외가 발생한다.", () => {
    const size = "1";

    expect(() => {
      Validations.validateSizeINRange(size);
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("U or D 가 아닌 입력값인 경우에 예외가 발생한다.", () => {
    const answer = "O";

    expect(() => {
      Validations.validateUserDirection(answer);
    }).toThrow("[ERROR] U 혹은 D 를 입력해주세요.");
  });

  test("U or D 가 아닌 입력값인 경우에 예외가 발생한다.", () => {
    const answer = "3";

    expect(() => {
      Validations.validateUserDirection(answer);
    }).toThrow("[ERROR] U 혹은 D 를 입력해주세요.");
  });

  test("Q or R 이 아닌 입력값인 경우에 예외가 발생한다.", () => {
    const answer = "U";

    expect(() => {
      Validations.validateRetryCorrect(answer);
    }).toThrow("[ERROR] Q 혹은 R 를 입력해주세요.");
  });
});
