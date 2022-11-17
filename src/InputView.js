const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_BRIDGE_LENGTH,
  INPUT_MOVE_ROOM,
  INPUT_RETRY,
} = require('./Constants');
const { checkMoveString, checkRetryString } = require('./Validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_BRIDGE_LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MOVE_ROOM, (moveRoom) => {
      checkMoveString(moveRoom);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_RETRY, (retry) => {
      checkRetryString(retry);
    });
  },
};

module.exports = InputView;
