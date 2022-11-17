const InputView = require("../src/InputView");

describe("InputView 클래스 테스트", () => {
  test("입력받은 다리 길이의 예외상황 발생시 에러를 출력한다.", () => {
    expect(() => InputView.validateBridgeSize(NaN)).toThrow();
    expect(() => InputView.validateBridgeSize(1)).toThrow();
    expect(() => InputView.validateBridgeSize(3.14)).toThrow();
    expect(() => InputView.validateBridgeSize(5)).not.toThrow();
  });
});
