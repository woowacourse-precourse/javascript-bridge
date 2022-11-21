const InputView = require("../src/InputView");

describe("인풋 테스트", () => {
  test("다리의 길이는 3부터 20까지의 숫자여야 한다", () => {
    expect(() => {
      InputView.validate(1, "LENGTH");
    }).toThrow("[ERROR]");
  });
});
