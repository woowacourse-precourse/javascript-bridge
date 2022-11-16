const { Console } = require("@woowacourse/mission-utils");
const { BridgeSize } = require("./utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

const ASK_BRIDGE_LENGTH = "다리의 길이를 입력해주세요.\n";

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(ASK_BRIDGE_LENGTH, (sizeInput) => {
      const bridgeSize = new BridgeSize(sizeInput);
      const size = bridgeSize.makeStringToNumber();

      const generater = BridgeRandomNumberGenerator.generate;
      const canWalkBridge = BridgeMaker.makeBridge(size, generater);
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
