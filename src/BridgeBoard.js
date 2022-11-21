const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class BridgeBoard {
  #bridgeBoard
  #movedBoard
  constructor() {
    this.#bridgeBoard = [];
    this.#movedBoard = [];
  }
  makeBoard(size) {
    this.#bridgeBoard = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }
  moveTo(direction) {
    if (this.#bridgeBoard[0] === direction) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeBoard;
