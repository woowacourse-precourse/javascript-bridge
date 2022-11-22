const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGES,
  ERROR_MESSAGES_BRIDGE,
} = require('../constant/Messages');
const { BRIDGE_CONSTANTS } = require('../constant/GameConstants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGES.bridgeSize, (size) => {
      this.validateBridgeSize(size, callback);
    });
  },

  validateBridgeSize(bridgeSize, callback) {
    try {
      this.handleWrongBridgeSizeException(bridgeSize);
      callback(Number(bridgeSize));
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  handleWrongBridgeSizeException(bridgeSize) {
    this.handleEmptyBrigeSizeException(bridgeSize);
    this.handleBrigeSizeIncludeEmptyException(bridgeSize);
    this.handleBrigeSizeTypeException(Number(bridgeSize));
    this.handleBrigeSizeOutOfRangeException(Number(bridgeSize));
  },

  handleEmptyBrigeSizeException(bridgeSize) {
    const blanks = ['', ' ', '\n'];
    blanks.forEach((blank) => {
      if (bridgeSize === blank) {
        throw ERROR_MESSAGES_BRIDGE.blank;
      }
    });
  },

  handleBrigeSizeIncludeEmptyException(bridgeSize) {
    if (bridgeSize.includes(' ')) {
      throw ERROR_MESSAGES_BRIDGE.blank;
    }
  },

  handleBrigeSizeTypeException(bridgeSize) {
    const regex = /^[0-9]*$/;
    if (!regex.test(bridgeSize)) {
      throw ERROR_MESSAGES_BRIDGE.typeError;
    }
  },

  handleBrigeSizeOutOfRangeException(bridgeSize) {
    if (bridgeSize < BRIDGE_CONSTANTS.minSize || bridgeSize > BRIDGE_CONSTANTS.maxSize) {
      throw ERROR_MESSAGES_BRIDGE.outOfSize;
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGES.moving, (moving) => {
      this.validateMoving(moving, callback);
    });
  },

  validateMoving(moving, callback) {
    try {
      this.hanldeWrongMovingException(moving);
      callback(moving);
    } catch (error) {
      Console.print(error);
      this.readMoving(callback);
    }
  },

  hanldeWrongMovingException(moving) {
    if (moving !== BRIDGE_CONSTANTS.up && moving !== BRIDGE_CONSTANTS.down) {
      throw ERROR_MESSAGES_BRIDGE.wrongMoving;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGES.retry, (command) => {
      this.validateGameCommand(command, callback);
    });
  },

  validateGameCommand(command, callback) {
    try {
      this.hanldeWrongCommandException(command);
      callback(command);
    } catch (error) {
      Console.print(error);
      this.readGameCommand(callback);
    }
  },

  hanldeWrongCommandException(command) {
    if (command !== BRIDGE_CONSTANTS.retry && command !== BRIDGE_CONSTANTS.quit) {
      throw ERROR_MESSAGES_BRIDGE.wrongCommand;
    }
  },
};

module.exports = InputView;
