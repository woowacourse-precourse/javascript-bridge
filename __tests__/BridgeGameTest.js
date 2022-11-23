const BridgeGame = require("../src/Model/BridgeGame");
const { RESULT } = require("../src/Utils/Constants");

describe("BridgeGame 클래스 테스트", () => {
  test("플레이어가 다리를 건널 수 있는 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    const [canCross, upperBridge, lowerBridge] = bridgeGame.move("U");

    expect(canCross).toBe(true);
    expect(upperBridge).toEqual(["O"]);
    expect(lowerBridge).toEqual([" "]);
  });

  test("플레이어가 다리를 건널 수 없는 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    const [canCross, upperBridge, lowerBridge] = bridgeGame.move("D");

    expect(canCross).toBe(false);
    expect(upperBridge).toEqual([" "]);
    expect(lowerBridge).toEqual(["X"]);
  });

  test("플레이어가 게임을 재시작하는 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    bridgeGame.retry();

    const [playerUpperBridgeState, playerLowerBridgeState, result] =
      bridgeGame.getResult();

    expect(result.get(RESULT.TOTAL_ATTEMPTS_COUNT)).toEqual(2);
  });

  test("게임이 종료되는 경우", () => {
    const directions = ["U", "U", "D"];
    const bridgeGame = new BridgeGame(directions);
    const canCross = true;

    bridgeGame.move("U");
    bridgeGame.move("U");
    bridgeGame.move("D");

    const isQuit = bridgeGame.isQuit(canCross);

    expect(isQuit).toBe(true);
  });

  test("게임이 종료되지 않는 경우", () => {
    const directions = ["U", "U", "D"];
    const bridgeGame = new BridgeGame(directions);
    const canCross = true;

    bridgeGame.move("U");
    bridgeGame.move("U");

    const isQuit = bridgeGame.isQuit(canCross);

    expect(isQuit).toBe(false);
  });
});
