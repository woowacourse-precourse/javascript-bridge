const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { setBridge } = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  validateBridgeSize(value) {
    const bridgeSizeReg = /^[3-9]{1}$|^[1]{1}[0-9]{1}$|20$/;
    if (!bridgeSizeReg.test(value)) {
      throw new Error(
        "[ERROR] 다리의 길이는 3 이상 20 이하의 숫자여야 합니다."
      );
    }
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.", (size) => {
      try {
        InputView.validateBridgeSize(Number(size));
        const bridge = makeBridge(size, generate);
        bridgeGame.setBridge(bridge);
      } catch {
        InputView.readBridgeSize(bridgeGame);
      }
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
