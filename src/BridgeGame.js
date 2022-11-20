const OutputView = require('./OutputView');
const { MESSAGE } = require('./constants');
const InputView = require('./InputView');
const { generate: generateRandomNumber } = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  constructor() {
    this.bridge = [];
  }

  async proceed() {
    OutputView.printMessage(MESSAGE.ENTRY);
    this.makeBridge();
  }

  async getBridgeSize() {
    try {
      return await InputView.readBridgeSize();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getBridgeSize();
    }
  }

  async makeBridge() {
    const size = await this.getBridgeSize();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridge = bridge;
  }

  async getMovingDirection() {
    try {
      return await InputView.readMoving();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getMovingDirection();
    }
  }
}

module.exports = BridgeGame;
