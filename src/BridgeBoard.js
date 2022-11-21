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
  moveTo(direction, round) {
    if (this.#bridgeBoard[round] === direction) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeBoard;
