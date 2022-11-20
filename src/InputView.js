/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR_MESSAGE, REGEXP } = require('./constant/constant');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callBack) {
    Console.readLine(MESSAGE.INPUT_LENGTH, callBack);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  validate(length) {
    try {
      if (!REGEXP.CHECK_NUMBER.test(length)) {
        throw new Error(ERROR_MESSAGE.INVALID_LENGTH_NUMBER);
      }

      if (REGEXP.CHECK_START_NUMBER.test(length)) {
        throw new Error(ERROR_MESSAGE.START_ZERO);
      }

      if (parseInt(length, 10) < 3 || parseInt(length, 10) > 20) {
        throw new Error(ERROR_MESSAGE.INVALID_LENGTH_RANGE);
      }
    } catch (error) {
      Console.print(error);
      return false;
    }

    return true;
  },
};

module.exports = InputView;
