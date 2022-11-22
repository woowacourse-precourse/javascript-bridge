const { bridgeSizeValidation, movingValidation, gameCommandValidation } = require('../utils/services/validate');

class Model {
  #size = 0;

  #retryCount = 1;

  #bridge = [];

  #moveList = [];

  #isWin = false;

  #isLose = false;

  #gameCommand;

  setGameCommand(command) {
    gameCommandValidation(command);
    this.#gameCommand = command;
  }

  getGameCommand() {
    return this.#gameCommand;
  }

  resetWin() {
    this.#isWin = false;
  }

  setWin(isWin) {
    this.#isWin = isWin;
  }

  getWin() {
    return this.#isWin;
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

  resetRetryCount() {
    this.#retryCount = 1;
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

  resetLose(){
    this.#isLose = false;
  }

  setLose(isLose) {
    this.#isLose = isLose;
  }

  getLose() {
    return this.#isLose;
  }

  allReset(){
    this.resetRetryCount();
    this.roundReset();
  }

  roundReset() {
    this.resetLose();
    this.resetWin();
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

  isSameLocation(type, index) {
    const isCorrectLocation = this.#bridge[index] === this.#moveList[index];
    const isSameType = this.#moveList[index] === type;

    return isCorrectLocation && isSameType
  }

  isWrongLocation(type, index) {
    return this.#moveList[index] === type && this.#isLose
  }
  
}

module.exports = Model;
