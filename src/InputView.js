const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validate");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.ValidateBridgeSize(input);
      const bridgeNumbers = BridgeMaker.makeBridge(
        parseInt(input),
        BridgeRandomNumberGenerator.generate
      );
      this.readMoving(bridgeNumbers);
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

  /**
   * 사용자가 입력한 다리의 길이가 정상적으로 입력되었는지 검증한다.
   * @param {string} input
   */
  ValidateBridgeSize(input) {
    Validate.isNumber(input);
    Validate.isBigger(input);
    Validate.isLower(input);
  },
};

module.exports = InputView;
