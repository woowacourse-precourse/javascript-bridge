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

  test("사용자의 위치가 다리의 마지막 위치인 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D", "D"]);
    const playerBridgeLength = 4;

    const isLast = bridgeGame.isLastPosition(playerBridgeLength);

    expect(isLast).toBe(true);
  });

  test("사용자의 위치가 다리의 마지막 위치가 아닌 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D", "D"]);
    const playerBridgeLength = 2;

    const isLast = bridgeGame.isLastPosition(playerBridgeLength);

    expect(isLast).toBe(false);
  });
});
