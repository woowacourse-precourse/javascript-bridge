const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(validation) {
    Console.readLine(MESSAGES.ASKBRIDGELENTH, validation);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(validation) {
    Console.readLine(MESSAGES.ASKMOVEDIR, validation);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
