const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { GAME_MESSAGES, ERROR_MESSAGES } = require('../src/constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;

    Console.readLine(`${GAME_MESSAGES.INPUT_BRIDGESIZE}`, inputBridgeSize => {
      this.validateBridgeSize(inputBridgeSize);
      bridgeSize = inputBridgeSize;
    });

    return bridgeSize;
  },

  validateBridgeSize(bridgeSize) {
    if (isNaN(Number(bridgeSize))) {
      throw new Error(`${ERROR_MESSAGES.VALID_NUMBER}`);
    }

    if (Number(bridgeSize) < 3 || Number(bridgeSize) > 20) {
      throw new Error(`${ERROR_MESSAGES.VALID_BRIDGESIZE}`);
    }
  },

  getBridgeSize() {
    let bridgeSize;
    try {
      bridgeSize = this.readBridgeSize();
    } catch (error) {
      Console.print(error.message);
      this.getBridgeSize();
    }
    return bridgeSize;
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
