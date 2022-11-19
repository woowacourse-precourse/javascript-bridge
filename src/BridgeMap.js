const { GAME_CONSTANTS } = require('./utils/constants');

class BridgeMap {
  #pattern;
  #history;
  #distance;

  constructor () {
    this.resetHistory();
  }

  setPattern (pattern) {
    console.log(pattern);
    this.#pattern = pattern;
  }

  resetHistory () {
    this.#distance = 0;
    this.#history = { up: [], down: [] };
  }

  getPathMarker (chooseStep) {
    return this.checkPath(chooseStep) ? 'O' : 'X';
  }

  checkPath (chooseStep) {
    return this.#pattern[this.#distance] === chooseStep;
  }

  isEndGame () {
    return this.#pattern.length === this.#distance;
  }

  increaseDistance () {
    this.#distance += 1;
  }

  getPathHistory () {
    return this.#history;
  }

  getPathHistoryWithChooseStep (chooseStep) {
    this.#history.up
      .push(chooseStep === GAME_CONSTANTS.upStair
        ? this.getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
    this.#history.down
      .push(chooseStep === GAME_CONSTANTS.downStair
        ? this.getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
    return this.#history;
  }
}

module.exports = BridgeMap;
