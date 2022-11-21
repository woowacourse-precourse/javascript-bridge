const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./util/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(input) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, input);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(input) {
    Console.readLine(INPUT_MESSAGE.MOVE, input);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(input) {
    Console.readLine(INPUT_MESSAGE.COMMAND, input);
  },
};

module.exports = InputView;
