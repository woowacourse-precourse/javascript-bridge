const Check = require('./Check');
const BridgePrint = require('./BridgePrint');
class BridgeGame {
  #brigeShape;
  #index;
  #uparray;
  #downarray;
  #playerInput;
  #isGameOver;
  #count;
  constructor(brigeShape) {
    this.#brigeShape = brigeShape;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
    this.#count = 1;
    this.#isGameOver = false;
    this.#isWinnging = false;
  }
  move(playerInput) {
    this.#playerInput = playerInput;
    if (this.#playerInput === this.#brigeShape[this.#index]) {
      this.playerInputTrue();
    } else {
      this.playerInputFalse();
    }
    BridgePrint.printBridge(this.#uparray, this.#downarray);
    this.#index++;
    return Check.checkIsGameOver(this.#isGameOver, this.#index, this.#brigeShape.length);
  }

  playerInputTrue() {
    if (this.#playerInput === 'U') {
      this.#uparray.push('O');
      this.#downarray.push(' ');
      return;
    }
    this.#uparray.push(' ');
    this.#downarray.push('O');
  }

  playerInputFalse() {
    if (this.#playerInput === 'D') {
      this.#uparray.push(' ');
      this.#downarray.push('X');
      this.#isGameOver = true;
      return;
    }
    this.#uparray.push('X');
    this.#downarray.push(' ');
    this.#isGameOver = true;
  }
  retry() {
    this.#isGameOver = false;
    this.#index = 0;
    this.#uparray = [];
    this.#downarray = [];
  }
  addCount() {
    this.#count = this.#count + 1;
  }
  getPrintParams() {
    return [this.#uparray, this.#downarray, this.#count];
  }
  setIsWinnging(boolen) {
    this.#isWinnging = boolen;
  }
  getIsWinnging() {
    return this.#isWinning;
  }
}

module.exports = BridgeGame;
