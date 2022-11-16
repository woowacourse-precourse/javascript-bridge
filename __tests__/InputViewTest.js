const InputView = require("../src/InputView");
describe("다리 길이 입력 예외 테스트", () => {
  test("다리 길이가 3보다 작거나 20보다 크면 예외가 발생한다.", () => {
    expect(() => {
      InputView.bridgeSizeValidate("2");
    }).toThrow("[ERROR]");
  });

  test("다리 길이가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      InputView.bridgeSizeValidate("S");
    }).toThrow("[ERROR]");
  });
});
