const ERROR = require('../constants/error');
const SETTING = require('../constants/gameSetting');
const Validator = require('../Validator');

class BridgeMap {
  #upsideMap = [];
  #downsideMap = [];

  addMoveMark(moving, canICross) {
    this.validateMoving(moving);
    const moveMark = canICross ? SETTING.SUCCESS_MOVE : SETTING.FAIL_MOVE;
    if (moving === SETTING.MOVING_UP) {
      this.#upsideMap.push(moveMark);
      this.#downsideMap.push(SETTING.NOT_MOVE);
      return;
    }

    this.#upsideMap.push(SETTING.NOT_MOVE);
    this.#downsideMap.push(moveMark);
  }

  getBridgeMap() {
    return [this.#upsideMap, this.#downsideMap];
  }

  reset() {
    this.#upsideMap = [];
    this.#downsideMap = [];
  }

  validateMoving(moving) {
    if (!Validator.isMoving(moving)) throw new Error(ERROR.MOVING);
  }
}

module.exports = BridgeMap;
