const OutputView = require('./OutputView');
const { MESSAGE } = require('./constants');
const InputView = require('./InputView');
const { generate: generateRandomNumber } = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const GameResult = require('./GameResult');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  constructor() {
    this.gameResult = new GameResult();
  }

  async proceed() {
    OutputView.printMessage(MESSAGE.ENTRY);
    await this.makeBridge();
    await this.controlMoving();
  }

  async makeBridge() {
    const size = await this.getBridgeSize();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    bridge.forEach((section, i) => this.gameResult.setResult(i, section));
  }

  async getBridgeSize() {
    try {
      return await InputView.readBridgeSize();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getBridgeSize();
    }
  }

  async getMovingDirection() {
    try {
      return await InputView.readMoving();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getMovingDirection();
    }
  }

  // 리팩토링 사항
  async controlMoving() {
    const until = this.gameResult.size;

    let current = 0;
    while (current < until) {
      const moved = await this.move(current);
      this.gameResult.printHistory();

      if (moved) current += 1;
      if (current === until) break;
    }

    return console.log('게임 성공!!!');
  }

  // 리팩토링 사항
  async move(current) {
    const direction = await this.getMovingDirection();
    const moved = this.gameResult.calculateMatch(current, direction);

    return moved;
  }

  async retry() {}
}

module.exports = BridgeGame;
