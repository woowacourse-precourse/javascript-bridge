const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(userCallBack) {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', userCallBack);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(userCallBack) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', userCallBack);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(userCallBack) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', userCallBack);
  },
};

module.exports = InputView;
