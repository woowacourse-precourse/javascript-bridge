/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { INPUT_BRIDGE_LENGTH_LINE, INPUT_MOVE_COMMAND_LINE, INPUT_RETRY_QUIT_LINE } = require('../Constant');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_BRIDGE_LENGTH_LINE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT_MOVE_COMMAND_LINE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_RETRY_QUIT_LINE, callback);
  },
};

module.exports = InputView;
