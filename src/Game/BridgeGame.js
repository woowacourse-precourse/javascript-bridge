const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge = [];
  #userMap = [];
  #isSuccess = true;
  #score = 1;

  move(direction) {
    this.#isSuccess = this.#bridge[this.round] === direction;
    this.#userMap = [...this.#userMap, direction];
  }

  retry() {
    this.#userMap = [];
    this.#isSuccess = true;
    this.#score += 1;
  }

  get round() {
    return this.#userMap.length;
  }

  get isSuccess() {
    return this.#isSuccess;
  }

  get isEnd() {
    return this.isSuccess && this.#userMap.length === this.#bridge.length;
  }

  get score() {
    return this.#score;
  }

  set bridge(length) {
    this.#bridge = BridgeMaker.makeBridge(
      +length,
      BridgeRandomNumberGenerator.generate
    );
  }

  get userMap() {
    return this.#userMap;
  }
}

module.exports = BridgeGame;
