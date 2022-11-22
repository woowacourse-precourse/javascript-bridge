const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  validateBridgeSize(value) {
    const bridgeSizeReg = /^[3-9]{1}$|^[1]{1}[0-9]{1}$|20$/;
    if (!bridgeSizeReg.test(value)) {
      throw new Error(
        "[ERROR] 다리의 길이는 3 이상 20 이하의 숫자여야 합니다."
      );
    }
  },
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      try {
        this.validateBridgeSize(Number(answer));
      } catch {
        this.readBridgeSize();
      }
    });
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
