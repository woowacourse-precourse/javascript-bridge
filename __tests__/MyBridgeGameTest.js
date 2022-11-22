const BridgeGame = require("../src/bridge/BridgeGame");
const BridgeMapMaker = require("../src/bridge/BridgeMapMaker");
const ErrorMessage = require("../src/messages/ErrorMessage");
const StubBridgeMaker = require("../src/test/StubBridgeMaker");
const GameStates = require("../src/utils/GameStates");

jest.mock("../src/bridge/BridgeMapMaker");

const SIZE_OF_BRIDGE = 3;

describe("My Application Test", () => {
  let generate = jest.fn();

  describe("Bridge Game", () => {
    let bridgeGame;

    const makeMap = jest.fn(() => [
      ["[ O ", "|   ", "|   ]"],
      ["[   ", "| O ", "| O ]"],
    ]);
    const getCurrentMap = jest.fn(() => [
      ["[ O ", "|   ", "|   ]"],
      ["[   ", "| O ", "| O ]"],
    ]);
    const onRetry = jest.fn();

    BridgeMapMaker.mockImplementation(() => {
      return {
        makeMap,
        getCurrentMap,
        onRetry,
      };
    });

    beforeEach(() => {
      generate
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1);

      bridgeGame = new BridgeGame(StubBridgeMaker, new BridgeMapMaker());
      bridgeGame.buildBridge(SIZE_OF_BRIDGE, generate);
    });

    it("움직일 때 U, D 외에 다른 값을 받으면 예외를 발생시켜야 한다.", () => {
      expect(() => {
        bridgeGame.move("F");
      }).toThrow(ErrorMessage.NOT_VALID_DIRECTION);
    });

    it("게임이 끝나지 않았다면 game state는 null이어야 한다", () => {
      bridgeGame.move("U");
      bridgeGame.move("D");

      expect(bridgeGame.getGameState()).toBeNull();
    });

    it("게임에 실패하면 game state가 fail이어야 한다.", () => {
      bridgeGame.move("D");
      expect(bridgeGame.getGameState()).toBe(GameStates.GAME_FAILED);
    });

    it("게임에 성공하면 game state가 success여야 한다.", () => {
      bridgeGame.move("U");
      bridgeGame.move("D");
      bridgeGame.move("D");
      expect(bridgeGame.getGameState()).toBe(GameStates.GAME_SUCCESS);
    });

    it("retry를 할 때 마다 게임 시도 횟수가 증가해야 한다.", () => {
      // 처음엔 1
      bridgeGame.retry();
      bridgeGame.retry();
      bridgeGame.retry();
      expect(bridgeGame.getNumberOfAttemps()).toBe(4);
    });
  });
});
