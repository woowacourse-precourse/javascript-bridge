const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../bridge/BridgeGame");
const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../bridge/BridgeRandomNumberGenerator");
const InputMessage = require("../messages/InputMessage");
const OutputView = require("../views/OutputView");
const GameStates = require("../bridge/GameStates");
const Validator = require("../utils/Validator");
const GameCommands = require("../bridge/GameCommands");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(InputMessage.READ_BRIDGE_SIZE_MESSAGE, (value) => {
      let bridgeGame;
      try {
        const bridge = makeBridge(Number(value), generate);
        bridgeGame = new BridgeGame(bridge);
      } catch (error) {
        OutputView.print(error.message);
        this.readBridgeSize();
        return;
      }
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(InputMessage.READ_MOVING_MESSAGE, (value) => {
      const direction = value;
      try {
        bridgeGame.move(direction);
      } catch (error) {
        OutputView.print(error.message);
        this.readMoving(bridgeGame);
        return;
      }
      const state = bridgeGame.getGameState();
      if (state) {
        this.afterGameEnded(state, bridgeGame);
        return;
      }
      this.readMoving(bridgeGame);
    });
  },

  afterGameEnded(state, bridgeGame) {
    switch (state) {
      case GameStates.GAME_FAILED:
        this.readGameCommand(bridgeGame);
        break;
      case GameStates.GAME_SUCCESS:
        OutputView.printResult(bridgeGame);
        Console.close();
        break;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(InputMessage.READ_GAME_COMMAND_MESSAGE, (value) => {
      try {
        Validator.isValidCommand(value);
      } catch (error) {
        OutputView.print(error.message);
        this.readGameCommand(bridgeGame);
        return;
      }
      if (value === GameCommands.RETRY) {
        bridgeGame.retry();
        this.readMoving(bridgeGame);
        return;
      }
      OutputView.printResult(bridgeGame);
      Console.close();
      return;
    });
  },
};

module.exports = InputView;
