const InputView = require("../src/ui/InputView");

describe("입력 유효성 검사", () => {
  test("다리 길이는 3부터 20 사이의 숫자여야 한다.", () => {
    expect(() => {
      InputView.validateSize(2);
    }).toThrow("[ERROR]");
  });

  test("다리 길이는 3부터 20 사이의 숫자여야 한다.", () => {
    expect(() => {
      InputView.validateSize("a");
    }).toThrow("[ERROR]");
  });

  test("다리 길이는 3부터 20 사이의 숫자여야 한다.", () => {
    expect(() => {
      InputView.validateSize(21);
    }).toThrow("[ERROR]");
  });
});
