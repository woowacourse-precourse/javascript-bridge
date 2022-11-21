const { Console } = require("@woowacourse/mission-utils");
const INPUT = require("../constants/input.constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT.BRIDGE_SIZE, (input) => {
      callback.call(this, input);
      this.readMoving.call(this);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT.MOVE, (input) => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  close() {
    Console.close();
  },
};

module.exports = InputView;
