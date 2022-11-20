const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const MESSAGES = require('./Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGES.INPUT_BRIDGE_LENGTH, (sizeInput) => {
      this.generateBridge(sizeInput);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGES.INPUT_MOVE, (moving) => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGES.INPUT_RETRY, (command) => {});
  },

  validateBridgeSize(size) {
    if (isNaN(size)) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_NAN);
    }
    if (!Number.isInteger(size)) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_NOT_INTEGER);
    }
    if (size < 3 || size > 20) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_RANGE);
    }
  },

  generateBridge(input) {
    const size = Number(input);

    this.validateBridgeSize(size);
    BridgeMaker.makeBridge(size);
  },
};

module.exports = InputView;
