const { MOVE_RESULT } = require('./utils/constants');

class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  getIsMoveable(paths) {
    const index = paths.length - 1;
    return paths[index] === this.#bridge[index];
  }

  getIsClear(paths) {
    return paths.toString() === this.#bridge.toString();
  }

  getMoveResult(paths) {
    const isMoveable = this.getIsMoveable(paths);
    const isClear = this.getIsClear(paths);

    if (isMoveable) {
      return isClear ? MOVE_RESULT.END : MOVE_RESULT.MOVEABLE;
    }
    return MOVE_RESULT.FAIL;
  }
}

module.exports = Bridge;
