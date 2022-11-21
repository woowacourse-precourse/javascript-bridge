const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #targetBridge;
  #currentIndex;

  constructor() {
    this.#currentIndex = 0;
  }

  setTargetBridge(size) {
    this.#targetBridge = makeBridge(size, generate);
  }

  judgeIsMovable(movingCommand) {
    const isMovable = movingCommand === this.#targetBridge[this.#currentIndex];

    this.#currentIndex += 1;

    return isMovable;
  }
}

module.exports = Bridge;
