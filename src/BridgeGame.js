// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;

  #history;

  #trial;

  constructor() {
    this.#history = [];
    this.#trial = 1;
  }

  move(char) {}

  retry(command) {}

  generateBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    return this.#bridge;
  }
}

module.exports = BridgeGame;
