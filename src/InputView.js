const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const { PROMPT, ERROR } = require("./Constants/Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(PROMPT.READ_SIZE, this.readBridgeSizeCallback.bind(this));
  },

  readBridgeSizeCallback(size) {
    try {
      this.readMoving(); // 무빙 입력받기
    } catch (error) {
      OutputView.printErrorMessage(SIZE_ERROR); // 위 과정에서 에러 발생시 에러 출력
      this.readBridgeSize(); // 다시 사이즈 입력받기
    }
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
