const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const ERROR_MESSAGE = require("./constans/ErrorMessage");
const INPUT_MESSAGE = require("./constans/InputMessage");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      INPUT_MESSAGE.BRIDGE_SIZE,
      (bridgeSizeInput) => {
        this.validBridgeSize(bridgeSizeInput);
        BridgeMaker.makeBridge(
          bridgeSizeInput,
          BridgeRandomNumberGenerator.generate
        );
      }
    );
  },

  validBridgeSize(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER);
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_OUT);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.MOVE_POINT, (movePoint) => {
      this.validMovePoint(movePoint);
      MissionUtils.Console.print(movePoint);
    });
  },
  validMovePoint(movePoint) {
    if (movePoint !== "U" || movePoint !== "D") {
      throw new Error(ERROR_MESSAGE.MOVE_POINT_OUT);
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
