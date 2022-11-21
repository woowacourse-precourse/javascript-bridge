const InputView = require("../src/InputView");

describe("다리 방향 유효성 검증 테스트", () => {
  it("U, D가 아닌 값이 입력될 경우 예외처리", () => {
    const inputDirection = "T";
    const result = () => InputView.readMoving(inputDirection);

    expect(result).toThrow();
  });

  it("공백이 입력될 경우 예외처리", () => {
    const inputDirection = " ";
    const result = () => InputView.readMoving(inputDirection);

    expect(result).toThrow();
  });
});
