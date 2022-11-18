const { Console } = require("@woowacourse/mission-utils");
const ERROR = require("../utils/constant");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    let result;

    Console.print("다리 건너기 게임을 시작합니다.\n");
    Console.readLine("다리의 길이를 입력해주세요.\n", (aNumber) => {
      if (isNaN(aNumber)) {
        throw new Error(ERROR.NOT_A_NUMBER);
      }
      result = Number(aNumber);
    });

    BridgeMaker.makeBridge(result, () => generate());
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (command) => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
