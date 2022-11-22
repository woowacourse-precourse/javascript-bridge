const { Console } = require('@woowacourse/mission-utils');

const { GAME_MESSAGE } = require('../constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리 길이를 입력받는다.
   * @param {function(string): void} callback
   */
  readBridgeSize(callback) {
    Console.readLine(GAME_MESSAGE.BRIDGE_LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function(): void} callback
   */
  readMoving(callback) {
    Console.readLine(GAME_MESSAGE.MOVE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function(): void} callback
   */
  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.RETRY_OPTION, callback);
  },
};

module.exports = InputView;
