const BridgeGame = require("../src/BridgeGame");

describe("게임 진행 테스트", () => {
  test("플레이어의 움직임 테스트", () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.move(["U", "D", "D"], "U")).toBeTruthy();
  });

  test("게임 재시작 테스트", () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.retry("R")).toBeTruthy();
  });
});
