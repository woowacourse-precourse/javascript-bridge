const BridgeGame = require("../src/Model/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("사용자가 칸을 이동하는 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    let [canCross, upperBridge, lowerBridge] = bridgeGame.move("U");

    expect(canCross).toBe(true);
    expect(upperBridge).toEqual(["O"]);
    expect(lowerBridge).toEqual([" "]);

    [canCross, upperBridge, lowerBridge] = bridgeGame.move("D");

    expect(canCross).toBe(false);
    expect(upperBridge).toEqual(["O", " "]);
    expect(lowerBridge).toEqual([" ", "X"]);
  });

  test("사용자가 게임을 재시작하는 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    bridgeGame.retry();

    expect(bridgeGame.attempsCount).toEqual(2);
  });
});
