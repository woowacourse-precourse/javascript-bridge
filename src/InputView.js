const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge) {
    Console.readLine(COMMAND.INPUT, (bridgeSize) => {
      // if (validateBridgeSize) return this.readBridgeSize();

      bridge.setBridge(Number(bridgeSize));
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(COMMAND.MOVE, (space) => {
      Console.print(space);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(COMMAND.RESTART, (restart) => {
      Console.print(restart);
    });
  },
};

module.exports = InputView;
