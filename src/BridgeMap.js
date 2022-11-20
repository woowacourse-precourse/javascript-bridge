const { GAME_CONSTANTS } = require('./utils/constants');

class BridgeMap {
  #pattern;
  #history;
  #distance;

  constructor () {
    this.initHistory();
  }

  setPattern (pattern) {
    console.log(pattern);
    this.#pattern = pattern;
  }

  initHistory () {
    this.#distance = 0;
    this.#history = new Map([
      [GAME_CONSTANTS.upStair, []],
      [GAME_CONSTANTS.downStair, []],
    ]);
  }

  isEndGame () {
    return this.#pattern.length === this.#distance;
  }

  incrementDistance () {
    this.#distance += 1;
  }

  getHistory () {
    return this.#history;
  }

  checkPath (chooseStep) {
    return this.#pattern[this.#distance] === chooseStep;
  }

  #getPathMarker (chooseStep) {
    return this.checkPath(chooseStep)
      ? GAME_CONSTANTS.goPath
      : GAME_CONSTANTS.notPath;
  }

  setHistoryWithChooseStep (chooseStep) {
    [GAME_CONSTANTS.upStair, GAME_CONSTANTS.downStair]
      .forEach((stair) => {
        this.#history.get(stair)
          .push(chooseStep === stair
            ? this.#getPathMarker(chooseStep)
            : GAME_CONSTANTS.empty);
      });
    return this;
  }
}

module.exports = BridgeMap;
