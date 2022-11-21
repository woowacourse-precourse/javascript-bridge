const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("../bridge/BridgeRandomNumberGenerator");
const InputMessage = require("../messages/InputMessage");
const Validator = require("../utils/Validator");
const GameCommands = require("../utils/GameCommands");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(bridgeGame) {
    Console.readLine(InputMessage.READ_BRIDGE_SIZE_MESSAGE, (value) => {
      this.onReadBridgeSize(value, bridgeGame);
    });
  },

  onReadBridgeSize(value, bridgeGame) {
    const size = Number(value);
    try {
      bridgeGame.buildBridge(size, generate);
    } catch (error) {
      OutputView.print(error.message);
      this.readBridgeSize(bridgeGame);
      return;
    }
    this.readMoving(bridgeGame);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(InputMessage.READ_MOVING_MESSAGE, (value) => {
      this.onReadMoving(value, bridgeGame);
    });
  },

  onReadMoving(value, bridgeGame) {
    const direction = value;
    try {
      bridgeGame.move(direction);
    } catch (error) {
      OutputView.print(error.message);
      this.readMoving(bridgeGame);
      return;
    }
    if (bridgeGame.getGameState()) return this.onInputEnded(bridgeGame);
    this.readMoving(bridgeGame);
  },

  onInputEnded(bridgeGame) {
    bridgeGame.onGameEnded(
      this.afterInputEnded.bind(this),
      this.readGameCommand.bind(this)
    );
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(InputMessage.READ_GAME_COMMAND_MESSAGE, (value) => {
      try {
        this.onReadGameCommand(value, bridgeGame);
      } catch (error) {
        OutputView.print(error.message);
        this.readGameCommand(bridgeGame);
        return;
      }
    });
  },

  onReadGameCommand(value, bridgeGame) {
    Validator.isValidCommand(value);
    if (value === GameCommands.RETRY) {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
      return;
    }
    this.afterInputEnded(bridgeGame);
    return;
  },

  afterInputEnded(bridgeGame) {
    OutputView.printResult(bridgeGame);
    Console.close();
  },
};

module.exports = InputView;
