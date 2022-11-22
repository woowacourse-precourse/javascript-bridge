const{ Console } = require("@woowacourse/mission-utils");
const{ INPUT } = require("./constants/FixMessages");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(`${INPUT.SIZE}\n`, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(`\n${INPUT.MOVING}\n`, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(`\n${INPUT.RETRY}\n`, callback);
  },
};

module.exports = InputView;
