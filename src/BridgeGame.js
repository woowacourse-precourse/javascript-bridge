const { INIT_TRY_COUNT, MOVE_RESULT } = require('./utils/constants');
const Path = require('./Path');
const Bridge = require('./Bridge');

const MOVEABLE_RESULT = [MOVE_RESULT.MOVEABLE, MOVE_RESULT.END];

class BridgeGame {
  #bridge;
  #path;
  #tryCount;

  constructor(bridge) {
    this.#bridge = new Bridge(bridge);
    this.#path = new Path();
    this.#tryCount = INIT_TRY_COUNT;
  }

  move(position) {
    const tempPaths = [...this.#path.getPaths(), position];
    const moveResult = this.#bridge.getMoveResult(tempPaths);

    const isMoveable = MOVEABLE_RESULT.includes(moveResult);
    const pathMap = this.#path.move(position, isMoveable);

    return { moveResult, pathMap };
  }

  retry() {
    this.#tryCount += 1;
    this.#path = new Path();
  }

  getIsClear() {
    const paths = this.#path.getPaths();
    return this.#bridge.getIsClear(paths);
  }

  getResult() {
    return {
      tryCount: this.#tryCount,
      pathMap: this.#path.getPathMap(),
      isClear: this.getIsClear(),
    };
  }
}

module.exports = BridgeGame;
