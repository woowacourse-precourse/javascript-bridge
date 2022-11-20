const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../libs/Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callBack) {
    Console.readLine(MESSAGE.requestBridgeSize, callBack);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callBack) {
    Console.readLine(MESSAGE.requestDirection, callBack);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callBack) {
    Console.readLine(MESSAGE.requestCommandOption, callBack);
  },
};

module.exports = InputView;
