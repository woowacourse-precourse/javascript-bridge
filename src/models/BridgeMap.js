const { GAME_RULE } = require('../constants');

class BridgeMap {
  static INIT = [[], []];

  #map = BridgeMap.INIT;

  getMap() {
    return this.#map;
  }

  add(moving, isSuccess) {
    const [upside, downside] = this.#map;

    if (moving === GAME_RULE.UPSIDE) {
      upside.push(isSuccess);
      downside.push(null);
      return;
    }

    upside.push(null);
    downside.push(isSuccess);
  }
}

module.exports = BridgeMap;
