const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');

class BridgeGame {
  #size;

  constructor(size) {
    this.#size = size;
  }

  makeBridge() {
    return BridgeMaker.makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
  }

  move(inputCommand, correctCommand) {
    return inputCommand === correctCommand ? 'O' : this.retry();
  }

  retry() {
    return 'X';
  }
}

module.exports = BridgeGame;
