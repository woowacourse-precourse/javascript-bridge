const SETTING = require('../constants/gameSetting');

class BridgeMap {
  #upsideMap = [];
  #downsideMap = [];

  addMoveMark(moving, canMove) {
    const moveMark = canMove ? SETTING.CAN_MOVE : SETTING.CANT_MOVE;
    if (moving === SETTING.MOVING_UP) {
      this.#upsideMap.push(moveMark);
      this.#downsideMap.push(SETTING.DONT_MOVE);
      return;
    }

    this.#upsideMap.push(SETTING.DONT_MOVE);
    this.#downsideMap.push(moveMark);
  }

  getBridgeMap() {
    return [this.#upsideMap, this.#downsideMap];
  }

  reset() {
    this.#upsideMap = [];
    this.#downsideMap = [];
  }
}

module.exports = BridgeMap;
