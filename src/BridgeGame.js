const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { MOVE, STATUS } = require("./constants/Constants");

class BridgeGame {
  #bridge;
  #usersMove;
  #moveCount;
  #gameOver;
  #tryCount;
  
  constructor() {
    this.#bridge = [];
    this.#usersMove = [];
    this.#moveCount = 0;
    this.#gameOver = false;
    this.#tryCount = 1;
  }

  makeBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  move(inputMoving) {
    if (this.#bridge[this.#moveCount] === inputMoving) {
      this.#usersMove.push([inputMoving, MOVE.CAN]);
    } else {
      this.#usersMove.push([inputMoving, MOVE.CANT]);
      this.#gameOver = true;
    } 
    this.#moveCount += 1;

    return this.#usersMove;
  }

  checkCurrentStatus() {
    if (this.#gameOver === true) {
      return STATUS.GAMEOVER;
    }

    if (this.#moveCount === this.#bridge.length) {
      return STATUS.ARRIVAL;
    }
  }

  retry() {
    this.#moveCount = 0;
    this.#tryCount += 1;
    this.#usersMove = [];
    this.#gameOver = false;
  }

  endResult() {
    return [this.#usersMove, this.#gameOver, this.#tryCount];
  }
}

module.exports = BridgeGame;
 