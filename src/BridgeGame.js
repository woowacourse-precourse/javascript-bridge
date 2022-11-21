const Builder = require('./Builder.js');

class BridgeGame {
  #bridge;
  #movementLogs;
  #tryCount;

  constructor() {
    this.#movementLogs = [];
    this.#tryCount = 1;
  }

  build(size) {
    const builder = new Builder();

    this.#bridge = builder.buildBridge(size);
  }

  move(direction) {
    const currentPosition = this.#movementLogs.length;
    const isCrossable = this.#bridge.isCrossable(currentPosition, direction);

    this.saveMovementLog(isCrossable, direction);
  }

  saveMovementLog(isCrossable, direction) {
    this.#movementLogs.push({ isCrossable, direction });
  }

  retry() {
    this.#movementLogs = [];
    this.#tryCount += 1;
  }

  isSucceededMove() {
    const lastLog = this.#movementLogs.slice(-1)[0];

    return lastLog.isCrossable;
  }

  isEnd() {
    const passedBlockCount = this.#movementLogs.length;
    const isEveryBlockPassed = this.#bridge.isEveryBlockPassed(passedBlockCount);
    const isSucceededMove = this.isSucceededMove();

    return isEveryBlockPassed && isSucceededMove;
  }

  getMovementLogs() {
    return this.#movementLogs;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
