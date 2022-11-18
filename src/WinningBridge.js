const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./utils/Validation');
const BridgeMaker = require('./BridgeMaker');

class WinningBridge {
  #size;
  #winningBridge;

  constructor(size) {
    this.#size = this.validate(size);
    // this.WinningBridge();
  }

  validate(size) {
    Validation.checkType(size);
    Validation.checkRange(size);
  }

  makeWinningBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
    console.log(bridge);
    // console.log(this.#winningBridge);
  }
}

module.exports = WinningBridge;
