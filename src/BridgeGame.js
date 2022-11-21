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
    this.resultMap = new GameResult();
  }

  async makeBridge(size) {
    // const size = await this.getBridgeSize();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.resultMap.setDefault(bridge);
  }

  // async getBridgeSize() {
  //   try {
  //     return await InputView.readBridgeSize();
  //   } catch (error) {
  //     OutputView.printMessage(error.message);
  //     return this.getBridgeSize();
  //   }
  // }

  // async getMovingDirection() {
  //   try {
  //     return await InputView.readMoving();
  //   } catch (error) {
  //     OutputView.printMessage(error.message);
  //     return this.getMovingDirection();
  //   }
  // }

  // async controlMoving() {
  //   const current = this.resultMap.getCurrentIndex();
  //   if (current > -1) {
  //     const isMoved = await this.move(current);
  //     this.resultMap.printHistory();

  //     return isMoved ? this.controlMoving() : await this.command();
  //   }

  //   return this.finish('success');
  // }

  async move(current, asyncCb) {
    // const direction = await this.getMovingDirection();
    const direction = asyncCb();
    const isMoved = this.resultMap.calculateMatch(current, direction);

    return isMoved;
  }

  async command(controller, command) {
    // const command = await this.getGameCommand();
    command === INPUT_FORMAT.RETRY ? this.retry(controller) : this.finish('fail');
  }

  // async getGameCommand() {
  //   try {
  //     return await InputView.readGameCommand();
  //   } catch (error) {
  //     OutputView.printMessage(error.message);
  //     this.getGameCommand();
  //   }
  // }

  retry(controller) {
    this.resultMap.clear();
    // this.controlMoving();
    controller();
  }

  // finish(type) {
  //   OutputView.printResult(type, this.resultMap);
  // }
}

module.exports = BridgeGame;
