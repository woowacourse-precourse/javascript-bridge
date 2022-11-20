/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {callback} function 다리의 길이를 입력받은 후 실행될 함수
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
