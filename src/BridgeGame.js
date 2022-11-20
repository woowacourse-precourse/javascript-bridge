const OutputView = require('./OutputView');
const { MESSAGE } = require('./constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  async proceed() {
    OutputView.printMessage(MESSAGE.ENTRY);
  }
}

module.exports = BridgeGame;
