const { bridgeSizeValidation, movingValidation, gameCommandValidation } = require('../utils/services/validate');

class Model {
  #size = 0;

  #current = 0;

  #retryCount = 1;

  #bridge = [];

  #moveList = [];

  #move;

  #isGameWin = false;

  #gameCommand;

  setGameCommand(command) {
    gameCommandValidation(command);
    this.#gameCommand = command;
  }

  getGameCommand() {
    return this.#gameCommand;
  }

  setGameWin(isGameWin) {
    this.#isGameWin = isGameWin;
  }

  getGameWin() {
    return this.#isGameWin;
  }

  setMove(move) {
    movingValidation(move);
    this.#move = move;
  }

  getMove() {
    return this.#move;
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

  resetCurrent() {
    this.#current = 0;
  }

  updateCurrent() {
    this.#current += 1;
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

  getCurrent() {
    return this.#current;
  }

  getRetryCount() {
    return this.#retryCount;
  }

  // setMoveList(move) {
  //   movingValidation(move);
  //   this.#moveList.push(move)
  // }

  // getMoveList() {
  //   return this.#moveList;
  // }
}

module.exports = Model;
