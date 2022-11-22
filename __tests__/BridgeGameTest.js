const BridgeGame = require("../src/model/BridgeGame");

describe("BridgeGame 모델에 대한 검증을 합니다.", () => {
  test("올바르지 않은 다리 길이를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("d")).toThrow("[ERROR]");
  });
  test("올바르지 않은 다리 길이 범위를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("41")).toThrow("[ERROR]");
  });
  test("올바르지 않은 다리 길이(음수) 범위를 입력했을 때, 예외를 발생시킨다.", () => {
    expect(() => new BridgeGame("-4")).toThrow("[ERROR]");
  });
});
