const OutputView = require('./OutputView');
const { MESSAGE } = require('./constants');
const InputView = require('./InputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  async proceed() {
    OutputView.printMessage(MESSAGE.ENTRY);
  }

  async getBridgeSize() {
    try {
      return await InputView.readBridgeSize();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getBridgeSize();
    }
  }
}

module.exports = BridgeGame;
