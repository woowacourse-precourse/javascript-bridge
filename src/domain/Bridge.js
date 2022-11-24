const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('../ui/OutputView');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  make(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  isLastPosition(next) {
    return this.#bridge.length === next;
  }

  canCross(upOrDown, next) {
    return this.#bridge[next] === upOrDown;
  }

  print(history) {
    OutputView.print(history);
  }
}

module.exports = Bridge;
