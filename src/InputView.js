const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/Constant");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validate");
const BridgeMaker = require("./BridgeMaker");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (inputBridgeSize) => {
      Validate.isNumber(inputBridgeSize);
      Validate.checkLength(inputBridgeSize);

      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      this.readMoving(bridgeGame, bridge);
      // bridgeGame.move();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge) {
    console.log(bridge);
    Console.readLine(MESSAGE.CHOOSE_MOVE_SPACE, (userInput) => {
      const moveKey = Validate.checkMovingKey(userInput);
      bridgeGame.move(moveKey);
    });
    return;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
