const OutputView = require("../src/View/OutputView");
describe("재시작 혹은 종료 입력 예외 테스트", () => {
  test("R 혹은 Q 이 아닌 값을 입력할 경우 예외가 발생한다.", () => {
    expect(() => {
      OutputView.retryOrQuitValidate("y");
    }).toThrow("[ERROR]");
  });
});
