const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class BridgeBoard {
  #bridgeBoard = [];
  constructor() {
    this.#bridgeBoard = [];
  }
  makeBoard(size) {
    this.#bridgeBoard = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }
}

module.exports = BridgeBoard;
