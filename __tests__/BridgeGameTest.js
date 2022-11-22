const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame component 테스트", () => {
  const bridgeGame = new BridgeGame(["U", "D", "D"]);

  test("move 테스트", () => {
    const JUMP_HISTORY = bridgeGame.move("U", 0);
    expect(JUMP_HISTORY).toEqual(true);
  });

  test("getJumpHistory 테스트", () => {
    const JUMP_HISTORY = bridgeGame.getJumpHistory;
    expect(JUMP_HISTORY).toEqual(["U"]);
  });

  test("retry 테스트", () => {
    bridgeGame.retry();
    const JUMP_HISTORY = bridgeGame.getJumpHistory;
    expect(JUMP_HISTORY).toEqual([]);
  });
});
