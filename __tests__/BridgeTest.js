const InputView = require("../src/InputView");

describe("다리 게임 테스트", () => {
  test("다리 길이 생성 테스트", () => {
    expect(() => {
      InputView.checkSize(1);
    }).toThrow("[ERROR]");
  });
});
