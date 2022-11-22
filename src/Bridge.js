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
    const isSuccess = this.judgeIsSuccess(isMovable);

    this.#currentIndex += 1;

    return { isMovable, isSuccess };
  }

  judgeIsSuccess(isMovable) {
    const isEnd = this.#currentIndex === this.#targetBridge.length - 1;

    return isMovable && isEnd;
  }

  reset() {
    this.#currentIndex = 0;
  }
}

module.exports = Bridge;
