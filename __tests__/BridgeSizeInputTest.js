const InputView = require("../src/InputView");

describe("다리 길이 입력값 유효성 검증 테스트", () => {
  it("다리 길이가 3~20 이외의 숫자로 입력될 경우 예외처리", () => {
    const inputSize = 50;
    const result = () => InputView.readBridgeSize(inputSize);

    expect(result).toThrow();
  });

  it("다리 길이가 숫자가 아닌 값이 입력될 경우 예외처리", () => {
    const inputSize = "t";
    const result = () => InputView.readBridgeSize(inputSize);

    expect(result).toThrow();
  });
});
