const { GAME_RULE } = require('../constants');

class BridgeMap {
  #upside = [];

  #downside = [];

  getMap() {
    return [this.#upside, this.#downside];
  }

  add(moving, isSuccess) {
    if (moving === GAME_RULE.UPSIDE) {
      this.#upside.push(isSuccess);
      this.#downside.push(null);
      return;
    }

    this.#upside.push(null);
    this.#downside.push(isSuccess);
  }

  reset() {
    this.#upside = [];
    this.#downside = [];
  }
}

module.exports = BridgeMap;
