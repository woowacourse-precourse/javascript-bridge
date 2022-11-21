const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { eventEmitter } = require("./EventEmitter");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeLength) => {
      if (isNaN(bridgeLength)) {
        Console.print("[ERROR] 다리의 길이는 숫자입니다");
        InputView.readBridgeSize();
        return;
      }

      if (bridgeLength < 3 || bridgeLength > 20) {
        Console.print("[ERROR] 다리의 길이는 3이상, 20이하입니다");
        InputView.readBridgeSize();
        return;
      }

      eventEmitter.emit("readBridgeSize", bridgeLength);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위:U, 아래:D)\n",
      (direction) => {
        eventEmitter.emit("readMoving", direction);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
