const { INPUT_FORMAT } = require('./constants');
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
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.resultMap.generate(bridge);
  }

  move(current, direction) {
    const isMoved = this.resultMap.calculateMatch(current, direction);
    // this.resultMap.printHistory();
    return isMoved;
  }

  async command(retryHandler, isRetry, finishHandler) {
    isRetry ? await retryHandler(this.retry) : finishHandler();
  }

  async retry() {
    this.resultMap.clear();
  }

  getCurrentPosition() {
    return this.resultMap.getCurrentPosition();
  }
}

module.exports = BridgeGame;
