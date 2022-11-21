const { Console } = require('@woowacourse/mission-utils');
const CONSTANT = require('../constant');

const { ENTER_BRIDGE_LENGTH, ENTER_MOVE_LOCATION, ENTER_RESTART_WHETHER } = CONSTANT.INPUT_LETTER;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(ENTER_BRIDGE_LENGTH, (answer) => {
      Console.print('');
      callback(answer);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(ENTER_MOVE_LOCATION, (answer) => {
      callback(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(ENTER_RESTART_WHETHER, (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
