const BridgeGame = require("../src/BridgeGame");

describe("Bridge Game Class Test", () => {
  const bridgeGame = new BridgeGame();
  test("입력된 문자열 값이 같은 경우 true를 반환한다.", () => {
    expect(bridgeGame.isSame("1", "1")).toBe(true);
  });
  test("입력된 문자열 값이 다른 경우 false를 반환한다.", () => {
    expect(bridgeGame.isSame("1", "2")).toBe(false);
  });
});
