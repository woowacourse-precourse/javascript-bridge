const InputView = require("../src/View/InputView");
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

  test("U 혹은 D 이 아닌 값을 입력할 경우 예외가 발생한다.", () => {
    expect(() => {
      InputView.moveValidate("y");
    }).toThrow("[ERROR]");
  });
});
