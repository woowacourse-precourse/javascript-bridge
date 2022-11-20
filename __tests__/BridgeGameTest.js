/* eslint-disable */
const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  test("move 이동 테스트", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move("U");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U"]);
    bridgeGame.move("D");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U", "D"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMovedSpace()).toStrictEqual(["U", "U", "D", "U"]);
  });

  test("판정 테스트 (이동한 칸이 이동가능한 칸인지)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    expect(bridgeGame.move("U")).toEqual(true);
    expect(bridgeGame.move("U")).toEqual(false);
    expect(bridgeGame.move("D")).toEqual(false);
  })

  test("끝까지 도착했는지 테스트 (성공 테스트)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    bridgeGame.move("U");
    bridgeGame.move("D");
    bridgeGame.move("U");
    expect(bridgeGame.isArrive()).toEqual(true);
  })
  
  test("끝까지 도착 못했는지 테스트 (실패 테스트)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    bridgeGame.move("U");
    bridgeGame.move("D");
    bridgeGame.move("D");
    expect(bridgeGame.isArrive()).toEqual(false);
  })
});
