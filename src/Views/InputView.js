const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const { validateBridgeSize } = require('../utils/validations');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(callback) {
    Console.readLine(MESSAGE.SELECT_BRIDGE_SIZE, (userInput) => {
      validateBridgeSize(userInput);
      callback(userInput);
    });
  },

  getBridegeSize(size) {
    console.log(1);
    return size;
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
