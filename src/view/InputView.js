const { UTILS_URL } = require('../constant/Key');
const { ASK_MESSAGE } = require('../constant/Message');
const { Console } = require(UTILS_URL);

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.readLine(ASK_MESSAGE.INPUT_BRIDGESIZE, (bridgeSize) => {
      callback(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.readLine(ASK_MESSAGE.INPUT_MOVEMENT, (movement) => {
      callback(movement);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.readLine(ASK_MESSAGE.INPUT_GAMECOMMAND, (command) => {
      callback(command);
    });
  },
};

module.exports = InputView;
