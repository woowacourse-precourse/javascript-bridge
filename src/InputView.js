const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  MESSAGE_INPUT_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MESSAGE_INPUT_MOVING_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  MESSAGE_INPUT_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  /**
   * 다리의 길이를 입력받는다.
   * @param {function(): void} callback - 다리의 길이를 입력받은 후 실행할 콜백 함수
   */
  readBridgeSize(callback) {
    Console.readLine(`\n${InputView.MESSAGE_INPUT_BRIDGE_LENGTH}\n`, callback);
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function(): void} callback - 사용자가 이동할 칸을 입력받은 후 실행할 콜백 함수
   */
  readMoving(callback) {
    Console.readLine(`\n${InputView.MESSAGE_INPUT_MOVING_DIRECTION}\n`, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function(): void} callback - 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받은 후 실행할 콜백 함수
   */
  readGameCommand(callback) {
    Console.readLine(`\n${InputView.MESSAGE_INPUT_COMMAND}\n`, callback);
  },
};

module.exports = InputView;
