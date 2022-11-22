const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  READ_BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  READ_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  ERROR_BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  ERROR_MOVING: '[ERROR] 이동할 칸은 U또는 D여야 합니다.',
  ERROR_GAME_COMMAND: '[ERROR] 게임을 다시 시도할지 종료할지 여부는 R또는 Q여야 합니다.',
};

/**
 * 입력받은 다리의 길이를 검증한다.
 * @param {number} bridgeSize 다리의 길이
 * @throws {Error} 3 이상 20 이하의 숫자가 아닌 경우
 */
function checkBridgeSize(bridgeSize) {
  if (!Number.isInteger(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
    throw new Error(MESSAGE.ERROR_BRIDGE_SIZE);
  }
}

/**
 * 입력받은 이동할 칸을 검증한다.
 * @param {string} moving 이동할 칸
 * @throws {Error} U, D 이외의 문자가 입력된 경우
 */
function checkMoving(moving) {
  if (moving !== 'U' && moving !== 'D') {
    throw new Error(MESSAGE.ERROR_MOVING);
  }
}

/**
 * 입력받은 게임을 다시 시도할지 종료할지 여부를 검증한다.
 * @param {string} gameCommand 게임을 다시 시도할지 종료할지 여부
 * @throws {Error} R, Q 이외의 문자가 입력된 경우
 */
function checkGameCommand(gameCommand) {
  if (gameCommand !== 'R' && gameCommand !== 'Q') {
    throw new Error(MESSAGE.ERROR_GAME_COMMAND);
  }
}

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {Function} callback 다리의 길이를 입력받은 후 실행할 콜백 함수
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      try {
        checkBridgeSize(Number(input));
        callback(Number(input));
      } catch (error) {
        Console.print(error.message);
        InputView.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {Function} callback 이동할 칸을 입력받은 후 실행할 콜백 함수
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.READ_MOVING, (input) => {
      try {
        checkMoving(input);
        callback(input);
      } catch (error) {
        Console.print(error.message);
        InputView.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGE.READ_GAME_COMMAND, (input) => {
      try {
        checkGameCommand(input);
        callback(input);
      } catch (error) {
        Console.print(error.message);
        InputView.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
module.exports.checkBridgeSize = checkBridgeSize;
module.exports.checkMoving = checkMoving;
module.exports.checkGameCommand = checkGameCommand;
