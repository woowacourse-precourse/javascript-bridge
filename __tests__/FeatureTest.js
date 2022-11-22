const BridgeGame = require("../src/model/BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");

describe("기능 동작 테스트", () => {
  const bridgeMoveTestHelper = (logSpy, upperBridge, lowerBridge) => {
    expect(logSpy).toHaveBeenNthCalledWith(1, upperBridge);
    expect(logSpy).toHaveBeenNthCalledWith(2, lowerBridge);
  };

  const LOG_SPY = jest.spyOn(MissionUtils.Console, "print");

  describe("다리 이동 테스트", () => {
    test("건널 수 있는 위쪽 다리로 이동할 경우 [ O ], [   ]순으로 출력되어야 한다.", () => {
      const Game = new BridgeGame();
      LOG_SPY.mockClear();

      Game.handleCorrectMove("U");

      bridgeMoveTestHelper(LOG_SPY, "[ O ]", "[   ]");
    });

    test("건널 수 있는 아래쪽 다리로 이동할 경우 [   ], [ O ]순으로 출력되어야 한다.", () => {
      const Game = new BridgeGame();
      LOG_SPY.mockClear();

      Game.handleCorrectMove("D");

      bridgeMoveTestHelper(LOG_SPY, "[   ]", "[ O ]");
    });

    test("건널 수 없는 위쪽 다리로 이동할 경우 [ X ], [   ]순으로 출력되어야 한다.", () => {
      const Game = new BridgeGame();
      LOG_SPY.mockClear();

      Game.handleWrongMove("U");

      bridgeMoveTestHelper(LOG_SPY, "[ X ]", "[   ]");
    });

    test("건널 수 없는 아래쪽 다리로 이동할 경우 [   ], [ X ]순으로 출력되어야 한다.", () => {
      const Game = new BridgeGame();
      LOG_SPY.mockClear();

      Game.handleWrongMove("D");

      bridgeMoveTestHelper(LOG_SPY, "[   ]", "[ X ]");
    });
  });
});
