const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("../BridgeMaker");
const { MESSAGES } = require("../constraints/constarints");
const { generate } = require("../utils/BridgeRandomNumberGenerator");
const { validateLength } = require("../utils/validators/validators");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGES.READ_BRIDGE_SIZE, (bridgeSize) => {
      Console.close();
      if (validateLength(bridgeSize))
        Console.print(makeBridge(bridgeSize, generate));
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
