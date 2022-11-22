const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class BridgeBoard {
  #bridgeBoard
  #movedBoard
  #backupBoard
  constructor() {
    this.#bridgeBoard = [];
    this.#movedBoard = [];
    this.#backupBoard = []
  }
  makeBoard(size) {
    this.#bridgeBoard = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#backupBoard = [...this.#bridgeBoard]
  }
  moveTo(direction) {
    if (this.#bridgeBoard[0] === direction) {
      return true;
    }
    return false;
  }
  movePlayer(){
    this.#movedBoard.push(this.#bridgeBoard.shift())
  }
  getClearedBridge(){
    return this.#movedBoard;
  }
  isLastRound(){
    return this.#bridgeBoard.length === 0;
  }
  resetBoard(){
    this.#bridgeBoard = [...this.#backupBoard];
    this.#movedBoard = [];
  }
}

module.exports = BridgeBoard;
