const OutputView = require('./OutputView');
const { MESSAGE, INPUT_FORMAT } = require('./constants');
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
    this.gameResult.setDefault(bridge);
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
    const until = this.gameResult.getResult().size;

    let current = 0;
    while (current < until) {
      const moved = await this.move(current);

      moved ? (current += 1) : await this.command();

      if (current === until) return;
    }
  }

  // 리팩토링 사항
  async move(current) {
    const direction = await this.getMovingDirection();
    const moved = this.gameResult.calcutateMatch(current, direction);

    this.gameResult.printHistory();

    return moved;
  }

  async command() {
    const command = await this.getGameCommand();
    if (command === INPUT_FORMAT.RETRY) {
      return this.retry();
    } else {
      return;
    }
  }

  async getGameCommand() {
    try {
      await InputView.readGameCommand();
    } catch (error) {
      OutputView.printMessage(error.message);
      this.getGameCommand();
    }
  }

  async retry() {
    this.gameResult.clear();
    this.move();
  }

  // async finish(type) {}
}

module.exports = BridgeGame;
