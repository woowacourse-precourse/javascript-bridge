const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_PROCESS, MESSAGE_ERROR } = require('./Constants');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_PROCESS.INPUT_BRIDGE_LENGTH, this.setBridgeSize.bind(this));
  },

  setBridgeSize(bridgeSize) {
    this.validateBridgeSize(bridgeSize);
  },

  validateBridgeSize(bridgeSize) {
    try {
      if (/[^0-9]/.test(bridgeSize)) throw MESSAGE_ERROR.BRIDGE_ONLY_NUMBER;
      if (Number(bridgeSize) < 3 || Number(bridgeSize) > 20) throw MESSAGE_ERROR.BRIDGE_OUT_OF_RANGE;
    } catch(e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
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
