const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function(string): void} callback 입력값을 전달할 콜백 함수
   */
  readBridgeSize(callback) {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', bridgeSizeInput => {
      callback(bridgeSizeInput);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function(string): void} callback 입력값을 전달할 콜백 함수
   */
  readMoving(callback) {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      moving => {
        callback(moving);
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function(string): void} callback 입력값을 전달할 콜백 함수
   */
  readGameCommand(callback) {
    Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      gameCommand => {
        callback(gameCommand);
      },
    );
  },
};

module.exports = InputView;
