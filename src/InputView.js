const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const MESSAGES = require('./Constants');
const Validate = require('./Validate');

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

  generateBridge(input) {
    const size = Number(input);

    Validate.bridgeSize(size);
    BridgeMaker.makeBridge(size);
  },
};

module.exports = InputView;
