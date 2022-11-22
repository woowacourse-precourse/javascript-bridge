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

  makeBridge = async (size) => {
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.resultMap.generate(bridge);
  };

  move = (current, direction) => {
    return this.resultMap.calculateMatch(current, direction);
  };

  command = async (retryHandler, isRetry, finishHandler) => {
    return isRetry ? await retryHandler(this.retry) : finishHandler();
  };

  retry = () => {
    this.resultMap.clear();
  };

  getCurrentPosition = () => {
    return this.resultMap.getCurrentPosition();
  };
}

module.exports = BridgeGame;
