const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("../BridgeRandomNumberGenerator");
const InputMessage = require("../messages/InputMessage");
const Validator = require("../utils/Validator");
const GameCommands = require("../utils/GameCommands");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
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

  readMoving(bridgeGame) {
    Console.readLine(InputMessage.READ_MOVING_MESSAGE, (value) => {
      this.onReadMoving(value, bridgeGame);
    });
  },

  onReadMoving(value, bridgeGame) {
    try {
      const map = bridgeGame.move(value);
      OutputView.printMap(map);
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

  readGameCommand(bridgeGame, map) {
    Console.readLine(InputMessage.READ_GAME_COMMAND_MESSAGE, (value) => {
      try {
        this.onReadGameCommand(value, bridgeGame, map);
      } catch (error) {
        OutputView.print(error.message);
        this.readGameCommand(bridgeGame);
        return;
      }
    });
  },

  onReadGameCommand(command, bridgeGame, map) {
    Validator.isValidCommand(command);
    if (command === GameCommands.RETRY) {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
      return;
    }
    this.afterInputEnded(bridgeGame, map);
    return;
  },

  afterInputEnded(bridgeGame, map) {
    OutputView.printResult(bridgeGame, map);
    Console.close();
  },
};

module.exports = InputView;
