const { checkSizeInRange } = require('./Validation');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameModel {
  #bridge;
  #bridgeSize;
  #userMove;
  #playCount;
  #isSuccess;

  setUserMove(userMove) {
    checkSizeInRange(userMove);
    this.#userMove = userMove;
  }

  getUserMove() {
    return this.#userMove;
  }

  setBridgeSize(size) {
    const sizeInput = Number(size);
    checkSizeInRange(sizeInput);
    this.#bridgeSize = sizeInput;
    this.setBridge();
  }

  setBridge() {
    this.#bridge = makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
  }

  getBridge() {
    return this.#bridge;
  }
}

module.exports = BridgeGameModel;
