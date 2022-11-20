const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.",
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
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20사이여야 한다.");
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (movePoint) => {
        this.validMovePoint(movePoint);
        MissionUtils.Console.print(movePoint);
      }
    );
  },
  validMovePoint(movePoint) {
    if (movePoint !== "U" || movePoint !== "D") {
      throw new Error("[ERROR] 이동 시 U, D 중 하나만 입력 가능하다.");
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
