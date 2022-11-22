const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const {
  GAME_MESSAGES,
  ERROR_MESSAGES,
  INPUT_VALID,
  GAME_COMMAND,
} = require('../src/constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;

    Console.readLine(`${GAME_MESSAGES.INPUT_BRIDGE_SIZE}`, inputBridgeSize => {
      this.validateBridgeSize(Number(inputBridgeSize));
      bridgeSize = inputBridgeSize;
    });

    return bridgeSize;
  },

  validateBridgeSize(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error(`${ERROR_MESSAGES.VALID_NUMBER}`);
    }
    if (
      bridgeSize < INPUT_VALID.VALID_BRIDGESIZE_MIN ||
      bridgeSize > INPUT_VALID.VALID_BRIDGESIZE_MAX
    ) {
      throw new Error(`${ERROR_MESSAGES.VALID_BRIDGESIZE}`);
    }
  },

  getBridgeSize() {
    let bridgeSize;
    try {
      bridgeSize = this.readBridgeSize();
    } catch (error) {
      Console.print(error.message);
      this.getBridgeSize();
    }
    return bridgeSize;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let gameMove;

    Console.readLine(`${GAME_MESSAGES.INPUT_GAME_MOVE}`, inputMove => {
      this.validateMoving(inputMove);
      gameMove = inputMove;
    });

    return gameMove;
  },

  validateMoving(gameMove) {
    if (gameMove !== GAME_COMMAND.UP && gameMove !== GAME_COMMAND.DOWN) {
      throw new Error(`${ERROR_MESSAGES.VALID_MOVE}`);
    }
  },

  getMoving() {
    let gameMove;
    try {
      gameMove = this.readMoving();
    } catch (error) {
      Console.print(error.message);
      this.getMoving();
    }
    return gameMove;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameCommand;

    Console.readLine(`${GAME_MESSAGES.INPUT_GAME_RETRY}`, inputCommand => {
      this.validateCommand(inputCommand);
      gameCommand = inputCommand;
    });
  },

  validateCommand(inputCommand) {
    if (
      inputCommand !== GAME_COMMAND.RETRY &&
      inputCommand !== GAME_COMMAND.QUIT
    ) {
      throw new Error(`${ERROR_MESSAGES.VALID_MOVE}`);
    }
  },

  getCommand() {
    let gameCommand;
    try {
      gameCommand = this.readGameCommand();
    } catch (error) {
      Console.print(error.message);
      this.getCommand();
    }
    return gameCommand;
  },
};

module.exports = InputView;
