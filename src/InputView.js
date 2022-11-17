const input = require('./Utils');
const { GAME_PROGRESS_MESSAGES } = require('./Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    input(GAME_PROGRESS_MESSAGES.BRIDGE, (answer) => {
      callback(answer);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    input(GAME_PROGRESS_MESSAGES.MOVE, (answer) => {
      callback(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    input(GAME_PROGRESS_MESSAGES.RETRY, (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
