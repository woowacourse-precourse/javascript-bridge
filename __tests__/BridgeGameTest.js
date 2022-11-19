/* eslint-disable */
const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  const bridgeGame = new BridgeGame();
  test("move 이동 테스트", () => {
    bridgeGame.move("U");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U"]);
    bridgeGame.move("D");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U", "D"]);
      bridgeGame.move("U");
      expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U", "D", "U"]);
  });
});
