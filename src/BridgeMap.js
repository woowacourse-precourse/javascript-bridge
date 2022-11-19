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

  checkPath (chooseStep) {
    return this.#pattern[this.#distance] !== chooseStep;
  }

  isEndGame () {
    return this.#pattern.length === this.#distance;
  }

  record (chooseStep) {
    if (this.checkPath(chooseStep)) {
      this.recordNotPath(chooseStep);
    } else {
      this.recordGoPath(chooseStep);
    }
    this.#distance += 1;
    return this.#history;
  }

  recordNotPath (chooseStep) {
    if (chooseStep === GAME_CONSTANTS.upStair) {
      this.#history.up.push(GAME_CONSTANTS.notPath);
      this.#history.down.push(GAME_CONSTANTS.empty);
    }
    if (chooseStep === GAME_CONSTANTS.downStair) {
      this.#history.up.push(GAME_CONSTANTS.empty);
      this.#history.down.push(GAME_CONSTANTS.notPath);
    }
  }

  recordGoPath (chooseStep) {
    if (chooseStep === GAME_CONSTANTS.upStair) {
      this.#history.up.push(GAME_CONSTANTS.goPath);
      this.#history.down.push(GAME_CONSTANTS.empty);
    }
    if (chooseStep === GAME_CONSTANTS.downStair) {
      this.#history.up.push(GAME_CONSTANTS.empty);
      this.#history.down.push(GAME_CONSTANTS.goPath);
    }
  }
}

module.exports = BridgeMap;
