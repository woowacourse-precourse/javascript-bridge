const { readLine } = require("./utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    readLine("다리의 길이를 입력해주세요.", bridgeLengthFromUser => {});
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", beMovedDirection => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
