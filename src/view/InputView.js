const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    let length;
    Console.readLine(SENTENCE.bridgeLength, (input) => (length = input));
    return Number(length);
  },

  readMoving() {
    let whichMoving;
    Console.readLine(SENTENCE.selectMoving, (moving) => (whichMoving = moving));
    return whichMoving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
