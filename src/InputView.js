const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./utils/validation");

let validation = new Validation();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리 길이 입력", (bridgeLength) => {
      try {
        validation.isValidLength(bridgeLength);
      } catch (e) {
        Console.print(e);
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
