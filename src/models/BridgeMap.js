const { GAME_RULE } = require('../constants');

class BridgeMap {
  static init = [];

  #state = {
    [GAME_RULE.UPSIDE]: BridgeMap.init,
    [GAME_RULE.DOWNSIDE]: BridgeMap.init,
  };

  getMap() {
    return this.#state;
  }

  add(movingCommand, current) {
    const isCrossed = movingCommand.isCrossed(current);

    if (movingCommand.isUpside()) {
      this.#addUpside(isCrossed);
      return;
    }

    if (movingCommand.isDownside()) {
      this.#addDownside(isCrossed);
    }
  }

  #addUpside(isCrossed) {
    this.#state[GAME_RULE.UPSIDE] = [...this.#state[GAME_RULE.UPSIDE], isCrossed];
    this.#state[GAME_RULE.DOWNSIDE] = [...this.#state[GAME_RULE.DOWNSIDE], null];
  }

  #addDownside(isCrossed) {
    this.#state[GAME_RULE.UPSIDE] = [...this.#state[GAME_RULE.UPSIDE], null];
    this.#state[GAME_RULE.DOWNSIDE] = [...this.#state[GAME_RULE.DOWNSIDE], isCrossed];
  }

  reset() {
    this.#state[GAME_RULE.UPSIDE] = BridgeMap.init;
    this.#state[GAME_RULE.DOWNSIDE] = BridgeMap.init;
  }
}

module.exports = BridgeMap;
