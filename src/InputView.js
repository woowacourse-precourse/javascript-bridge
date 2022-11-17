const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./utils/message');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function(string): void} callback
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function(string): void} callback
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVE_RANGE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function(string): void} callback
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.RESTART, callback);
  },
};

module.exports = InputView;
