const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputMessage = require("./InputMessage");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(InputMessage.READ_BRIDGE_SIZE_MESSAGE, (value) => {
      let bridge;
      try {
        bridge = BridgeMaker.makeBridge(
          value,
          BridgeRandomNumberGenerator.generate
        );
      } catch (error) {
        OutputView.print(error.message);
        this.readBridgeSize();
        return;
      }
      this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(
      InputMessage.READ_MOVING_MESSAGE,
      this.readMoving.bind(this)
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
