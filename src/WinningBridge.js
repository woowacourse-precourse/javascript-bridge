const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./utils/Validation');
const BridgeMaker = require('./BridgeMaker');

class WinningBridge {
  #winningBridge;

  validate(size) {
    Validation.checkNumberType(size);
    Validation.checkRange(size);
  }

  makeWinningBridge(size) {
    this.#winningBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#winningBridge);
  }

  isSameDirection(currDirection, currOrder) {
    return this.#winningBridge[currOrder] === currDirection;
  }

  isSameLength(bridge) {
    return bridge.length === this.#winningBridge.length;
  }
}

module.exports = WinningBridge;
