const BridgeGame = require("../src/BridgeGame");

describe("게임 진행 테스트", () => {
  test("플레이어의 움직임 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "D"], "U");
    expect(bridgeGame.move()).toBeTruthy();
  });
});
