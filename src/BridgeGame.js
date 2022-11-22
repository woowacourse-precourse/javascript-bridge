/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #userState;
  #countTry;
  #condition;

  constructor(size) {
    this.validateSizeRange(size);
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#userState = [];
    this.#countTry = 0;
  }
}

module.exports = BridgeGame;
