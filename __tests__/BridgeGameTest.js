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

  test("플레이어의 위치가 다리의 마지막 위치인 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D", "D"]);
    const playerBridgeStateLength = 4;

    const isLast = bridgeGame.isLastPosition(playerBridgeStateLength);

    expect(isLast).toBe(true);
  });

  test("플레이어의 위치가 다리의 마지막 위치가 아닌 경우", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D", "D"]);
    const playerBridgeStateLength = 2;

    const isLast = bridgeGame.isLastPosition(playerBridgeStateLength);

    expect(isLast).toBe(false);
  });
});
