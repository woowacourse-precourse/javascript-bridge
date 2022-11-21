/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const Constant = require("./utils/Constant");
const Validate = require("./utils/Validate");
const BridgeMaker = require("./BridgeMaker");
const randomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(Constant.INPUT.BRIDGE_SIZE, (bridgeSize) => {
      let numberBridgeSize = Number(bridgeSize) ?? NaN;
      if (Validate.validateBridgeSize(numberBridgeSize)) {
        return BridgeMaker.makeBridge(
          numberBridgeSize,
          randomNumberGenerator.generate
        );
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(Constant.INPUT.NEXT_STEP, () => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(Constant.INPUT.GAME_RETRY, () => {});
  },
};

module.exports = InputView;
