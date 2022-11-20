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
    this.#history = new Map([
      [GAME_CONSTANTS.upStair, []],
      [GAME_CONSTANTS.downStair, []],
    ]);
  }

  getPathMarker (chooseStep) {
    return this.checkPath(chooseStep)
      ? GAME_CONSTANTS.goPath
      : GAME_CONSTANTS.notPath;
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
    [GAME_CONSTANTS.upStair, GAME_CONSTANTS.downStair]
      .forEach((stair) => {
        this.#history.get(stair).push(chooseStep === stair
          ? this.getPathMarker(chooseStep) : GAME_CONSTANTS.empty);
      });
    return this.#history;
  }
}

module.exports = BridgeMap;
