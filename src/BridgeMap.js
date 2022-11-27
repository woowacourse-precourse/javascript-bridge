const { GAME_CONSTANTS } = require('./utils/constants');

class BridgeMap {
  #pattern;
  #distance;

  constructor() {
    this.initDistance();
  }

  initDistance() {
    this.#distance = 0;
  }

  setPattern(pattern) {
    console.log(pattern);
    this.#pattern = pattern;
  }

  incrementDistance() {
    this.#distance += 1;
  }

  isEndGame() {
    return this.#pattern.length === this.#distance;
  }

  isCorrectPath(chooseStep) {
    return this.#pattern[this.#distance] === chooseStep;
  }

  getPathMarker(chooseStep) {
    return this.isCorrectPath(chooseStep)
      ? GAME_CONSTANTS.goPath : GAME_CONSTANTS.notPath;
  }
}

module.exports = BridgeMap;
