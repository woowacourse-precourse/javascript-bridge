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

  async controlMoving() {
    const until = this.gameResult.size;

    let current = 0;
    while (current < until) {
      const direction = await this.getMovingDirection();
      const moved = await this.move(current, direction);
      if (moved) current += 1;
      if (current === until) break;
    }

    return console.log('게임 성공!!!');
  }

  /***
   ** 사용자가 칸을 이동할 때 사용하는 메서드*
   ** <p>*
   ** 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.*
   **/
  async move(current, direction) {
    const moved = this.gameResult.calculateMatch(current, direction);
    return moved;
  }
}

module.exports = BridgeGame;
