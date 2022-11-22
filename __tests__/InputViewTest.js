const InputView = require("../src/InputView");

describe("InputView 클래스 테스트", () => {
  test("다리 크기 입력 예외처리(문자)", () => {
    const isValidate = InputView.bridgeSizeValidate('s');
    expect(isValidate).toEqual(false);
  });

  test("다리 크기 입력 예외처리(범위)", () => {
    const isValidate = InputView.bridgeSizeValidate(2);
    expect(isValidate).toEqual(false);
  });

  test("플레이어 이동 입력 예외처리", () => {
    const isValidate = InputView.movingValidate("A");
    expect(isValidate).toEqual(false);
  });

  test("재시도 입력 예외처리", () => {
    const isValidate = InputView.commandValidate("A");
    expect(isValidate).toEqual(false);
  });
});
