const { bridgeSizeValidation, movingValidation, gameCommandValidation } = require('../utils/services/validate');

class Model {
  #size = 0;

  #retryCount = 1;

  #bridge = [];

  #moveList = [];

  #isGameWin = false;

  #isGameOver = false;

  #gameCommand;

  setGameCommand(command) {
    gameCommandValidation(command);
    this.#gameCommand = command;
  }

  getGameCommand() {
    return this.#gameCommand;
  }

  resetGameWin() {
    this.#isGameWin = false;
  }

  setGameWin(isGameWin) {
    this.#isGameWin = isGameWin;
  }

  getGameWin() {
    return this.#isGameWin;
  }

  resetBridge() {
    this.#bridge = [];
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  updateRetryCount() {
    this.#retryCount += 1;
  }

  setBridgeSize(size) {
    bridgeSizeValidation(size);
    this.#size = Number(size);
  }

  getBridgeSize() {
    return this.#size;
  }

  getRetryCount() {
    return this.#retryCount;
  }

  getCurrent() {
    return this.#moveList.length;
  }

  resetMoveList() {
    this.#moveList = [];
  }

  setMoveList(move) {
    movingValidation(move);
    this.#moveList.push(move)
  }

  getMoveList() {
    return this.#moveList;
  }

  resetGameOver(){
    this.#isGameOver = false;
  }

  setGameOver(gameOver) {
    this.#isGameOver = gameOver;
  }

  getGameOver() {
    return this.#isGameOver;
  }

  reset() {
    this.resetGameOver();
    this.resetGameWin();
    this.resetMoveList();
  }

  isWin() {
    return this.#moveList.toString() === this.#bridge.toString();
  }

  isCorrectLocation() {
    const { length } = this.#moveList;
    const current = this.#moveList[length - 1];
    const correctLocation = this.#bridge[length - 1];

    return current === correctLocation
  }
  
}

module.exports = Model;
