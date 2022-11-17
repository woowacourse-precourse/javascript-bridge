const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGES,
  ERROR_MESSAGES_BRIDGE,
} = require('./Messages');
const { BRIDGE_CONSTANTS } = require('./GameConstants');

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

  validateBridgeSize(size, callback) {
    try {
      this.handleEmptyBrigeSizeException(size);
      const bridgeSize = Number(size);
      this.handleBrigeSizeTypeException(bridgeSize);
      this.handleBrigeSizeOutOfRangeException(bridgeSize);
      callback(bridgeSize);
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  handleEmptyBrigeSizeException(bridgeSize) {
    const blanks = ['', ' ', '\n'];
    blanks.forEach((blank) => {
      if (bridgeSize === blank) {
        throw ERROR_MESSAGES_BRIDGE.blank;
      }
    });

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
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
