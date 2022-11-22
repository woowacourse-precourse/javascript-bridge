const BridgeGame = require("../src/BridgeGame");

describe("게임 진행 테스트", () => {
  test("플레이어 이동 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "U", "U"]);
    bridgeGame.move("D");
    expect(bridgeGame.getMoveHistory()).toEqual(["D"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMoveHistory()).toEqual(["D", "U"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMoveHistory()).toEqual(["D", "U", "U"]);
  });
});
