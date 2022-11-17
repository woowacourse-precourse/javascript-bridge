const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const ValidateBridgeSize = require("./ValidateBridgeSize");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridge: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      const validateBridgeSize = new ValidateBridgeSize(bridgeSize);
      this.bridge = BridgeMaker
        .makeBridge(validateBridgeSize.bridgeSize, BridgeRandomNumberGenerator);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
