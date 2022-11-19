const { GAME_CONSTANTS } = require('./utils/constants');

class BridgeMap {
  #pattern;
  #history;
  #distance;

  constructor () {
    this.#distance = 0;
    this.#history = { up: [], down: [] };
  }

  setPattern (pattern) {
    console.log(pattern);
    this.#pattern = pattern;
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

  getPathHistory (chooseStep) {
    this.#history.up
      .push(chooseStep === GAME_CONSTANTS.upStair
        ? this.getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
    this.#history.down
      .push(chooseStep === GAME_CONSTANTS.downStair
        ? this.getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
    this.#distance += 1;
    return this.#history;
  }
}

module.exports = BridgeMap;
