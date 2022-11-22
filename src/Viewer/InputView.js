const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/messages');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_SIZE, (input) => {
      callback(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_MOVE, (input) => {
      callback(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_COMMAND, (input) => {
      callback(input);
    });
  }
};

module.exports = InputView;
