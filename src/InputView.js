const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const {
  BRIDGE_LENGTH_QUERY,
} = require("./Constant");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
   readBridgeSize(gameManager) {
    MissionUtils.Console.readLine(
      `\n${BRIDGE_LENGTH_QUERY}\n`,
      this.readBridgeSizeCallBack(gameManager)
    );
  },

  readBridgeSizeCallBack(gameManager) {
    return (answer) => {
      try {
        this.readBridgeNormalWork(gameManager, answer);
      } catch (error) {
        this.readBridgeErrorWork(gameManager, error);
      }
    };
  },

  readBridgeNormalWork(gameManager, answer) {
    Validation.bridgeLengthValidation(answer);
    gameManager.setBridge(
      makeBridge(answer, BridgeRandomNumberGenerator.generate)
    );
    this.readMoving(gameManager, 0, 1);
  },

  readBridgeErrorWork(gameManager, error) {
    MissionUtils.Console.print(error);
    this.readBridgeSize(gameManager);
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
