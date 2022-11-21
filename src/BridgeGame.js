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

  async controlMoving() {
    const current = this.gameResult.getCurrentIndex();
    if (current > -1) {
      const isMoved = await this.move(current);
      this.gameResult.printHistory();
      console.log('>>>>', this.gameResult.getResult());

      return isMoved ? this.controlMoving() : await this.command();
    }

    return this.finish('success');
  }

  async move(current) {
    const direction = await this.getMovingDirection();
    const isMoved = this.gameResult.calculateMatch(current, direction);

    return isMoved;
  }

  async command() {
    const command = await this.getGameCommand();
    command === INPUT_FORMAT.RETRY ? this.retry() : this.finish('fail');
  }

  async getGameCommand() {
    try {
      return await InputView.readGameCommand();
    } catch (error) {
      OutputView.printMessage(error.message);
      this.getGameCommand();
    }
  }

  retry() {
    this.gameResult.clear();
    this.controlMoving();
  }

  finish(type) {
    OutputView.printResult(type, this.gameResult);
  }
}

module.exports = BridgeGame;
