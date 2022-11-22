const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { SETTING, MOVING, COMMAND } = require('./constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.print('');
    InputView.question(InputView.BRIDGE_SIZE, callback, InputView.validateSize);
  },

  validateSize(size) {
    if (!Number.isInteger(Number(size))) {
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }

    if (size < SETTING.MIN_BRIDGE_SIZE || size > SETTING.MAX_BRIDGE_SIZE) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이여야 합니다.');
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.print('');
    InputView.question(InputView.MOVING, callback, InputView.validateMoving);
  },

  validateMoving(moving) {
    if (moving !== MOVING.UP_FLOOR && moving !== MOVING.DOWN_FLOOR) {
      throw new Error('[ERROR] U와 D만 입력 가능합니다.');
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.print('');
    InputView.question(InputView.GAME_COMMAND, callback, InputView.validateCommand);
  },

  validateCommand(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw new Error('[ERROR] R과 Q만 입력 가능합니다.');
    }
  },

  question(string, callback, validateFn) {
    Console.readLine(string, (input) => {
      try {
        validateFn(input);
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, callback, validateFn);
      }
    });
  },
};

module.exports = InputView;
