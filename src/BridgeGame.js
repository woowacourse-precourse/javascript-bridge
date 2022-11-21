class BridgeGame {
  #bridge;
  #movementLogs;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#movementLogs = [];
    this.#tryCount = 1;
  }

  move(direction) {
    const currentPosition = this.getCurrentPosition();
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

  isLatestMoveSucceeded() {
    const lastIndex = this.#movementLogs.length - 1;
    const lastLog = this.#movementLogs[lastIndex];

    return lastLog.isCrossable;
  }

  isEnd() {
    const currentPosition = this.getCurrentPosition();
    const isEveryBlockPassed = this.#bridge.isEveryBlockPassed(currentPosition);
    const isLatestMoveSucceeded = this.isLatestMoveSucceeded();

    return isEveryBlockPassed && isLatestMoveSucceeded;
  }

  getCurrentPosition() {
    return this.#movementLogs.length;
  }

  getMovementLogs() {
    return this.#movementLogs;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
