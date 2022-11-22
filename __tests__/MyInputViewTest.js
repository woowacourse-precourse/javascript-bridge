const BridgeGame = require("../src/bridge/BridgeGame");
const BridgeMapMaker = require("../src/bridge/BridgeMapMaker");
const ErrorMessage = require("../src/messages/ErrorMessage");
const StubBridgeMaker = require("../src/test/StubBridgeMaker");
const InputView = require("../src/views/InputView");

jest.mock("../src/bridge/BridgeMapMaker");

const SIZE_OF_BRIDGE = 3;

describe("Input View", () => {
  it("옳지 않은 커맨드 값이 입력되면 예외가 발생해야 한다.", () => {
    expect(() => {
      InputView.onReadGameCommand("F", {}, []);
    }).toThrow(ErrorMessage.NOT_VALID_COMMAND);
  });

  describe("game state에 따라 올바른 메소드가 호출되어야 한다.", () => {
    let generate = jest.fn();
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

    it("game state 가 success면 afterInputEnded가 호출되어야 한다", () => {
      let spy = jest.spyOn(InputView, "afterInputEnded");
      bridgeGame.move("U");
      bridgeGame.move("D");
      bridgeGame.move("D");

      InputView.onInputEnded(bridgeGame);
      expect(spy).toBeCalledTimes(1);
    });

    it("game state 가 fail이면 readGameCommand가 호출되어야 한다", () => {
      let spy = jest.spyOn(InputView, "readGameCommand");
      bridgeGame.move("U");
      bridgeGame.move("U");

      InputView.onInputEnded(bridgeGame);
      expect(spy).toBeCalledTimes(1);
    });
  });
});
