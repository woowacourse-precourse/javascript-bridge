const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_MESSAGE,
  BRIDGE_RANGE,
  ERROR_BRIDGE_MESSAGE,
} = require('./constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.inputLength, (userInput) => {
      const bridgeSize = Number(userInput);
      this.bridgeValidation(bridgeSize);
    });
  },

  checkBridgeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.integer);
    }
  },
  checkBridgeNumber(bridgeSize) {
    if (Number.isNaN(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.number);
    }
  },
  checkBridgeRange(bridgeSize) {
    if (bridgeSize < BRIDGE_RANGE.start || bridgeSize > BRIDGE_RANGE.end) {
      throw new Error(ERROR_BRIDGE_MESSAGE.range);
    }
  },

  bridgeValidation(bridgeSize) {
    this.checkBridgeNumber(bridgeSize);
    this.checkBridgeInteger(bridgeSize);
    this.checkBridgeRange(bridgeSize);
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
