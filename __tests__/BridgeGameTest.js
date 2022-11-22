const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("방향 이동 테스트", () => {
    const bridgeGame = new BridgeGame();
    let moved;

    bridgeGame.setBridge(["U", "U", "D"]);

    moved = bridgeGame.move("U");
    expect(moved).toEqual(true);

    moved = bridgeGame.move("D");
    expect(moved).toEqual(false);
  });
});
