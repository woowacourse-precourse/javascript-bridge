const { MOVE, GAME_RESULT, DIRECTION } = require('./Utils/Constants.js');

class BridgeGame {
  #bridgeMap;
  #attemptNumber;
  #compareResult;

  constructor() {
    this.#bridgeMap = { U: [], D: [] };
    this.#attemptNumber = 1;
    this.#compareResult;
  }

  initBridgeMap() {
    this.#bridgeMap[DIRECTION.UP] = [];
    this.#bridgeMap[DIRECTION.DOWN] = [];
  }

  addBridgeMap(inputCommand, compareResult) {
    this.#bridgeMap[DIRECTION.UP].push(' ');
    this.#bridgeMap[DIRECTION.DOWN].push(' ');
    this.#bridgeMap[inputCommand].pop();
    this.#bridgeMap[inputCommand].push(compareResult);
  }

  currentBridgeMap() {
    return this.#bridgeMap;
  }

  move(inputCommand, correctCommand) {
    this.#compareResult = inputCommand === correctCommand ? MOVE.PASS : MOVE.FAIL;
    this.addBridgeMap(inputCommand, this.#compareResult);
  }

  isPass() {
    return this.#compareResult === MOVE.PASS;
  }

  isFail() {
    return this.#compareResult === MOVE.FAIL;
  }

  retry() {
    this.#attemptNumber += 1;
    this.initBridgeMap();
  }

  gameResult() {
    return [this.currentBridgeMap(), GAME_RESULT[this.#compareResult], this.#attemptNumber];
  }
}

module.exports = BridgeGame;
