const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
  UP_FLOOR: 'U',
  DOWN_FLOOR: 'D',
  RETRY: 'R',
  QUIT: 'Q',
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(InputView.BRIDGE_SIZE, callback);
  },

  validateSize(size) {
    if (!Number.isInteger(Number(size))) {
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }

    if (size < InputView.MIN_BRIDGE_SIZE || size > InputView.MAX_BRIDGE_SIZE) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이여야 합니다.');
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(InputView.MOVING, callback);
  },

  validateMoving(moving) {
    if (moving !== InputView.UP_FLOOR && moving !== InputView.DOWN_FLOOR) {
      throw new Error('[ERROR] U와 D만 입력 가능합니다.');
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(InputView.GAME_COMMAND, callback);
  },

  validateCommand(command) {
    if (command !== InputView.RETRY && command !== InputView.QUIT) {
      throw new Error('[ERROR] R과 Q만 입력 가능합니다.');
    }
  },
};

module.exports = InputView;
