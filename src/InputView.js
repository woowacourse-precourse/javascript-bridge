const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.INPUT_MOVING, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGE.INPUT_GAME_COMMAND, callback);
  },
};

module.exports = InputView;
