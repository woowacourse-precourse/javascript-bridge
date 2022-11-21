const { BridgeConfig, GameConfig, GameLoggerConfig } = require('./Config');

class GameLogger {
  #upLog = [];

  #downLog = [];

  #trials = 0;

  resetMoveLog() {
    this.#upLog = [];
    this.#downLog = [];
  }

  logNewTrial() {
    this.resetMoveLog();
    this.#trials += 1;
  }

  logMoveResult(direction, resultStatus) {
    const { target, other } = this.#findTargetArray(direction);
    if (resultStatus !== GameConfig.STATUS_FAIL) {
      target.push(GameLoggerConfig.MOVE_OK);
    } else {
      target.push(GameLoggerConfig.MOVE_FAIL);
    }
    other.push(GameLoggerConfig.NO_MOVE);
  }

  #findTargetArray(direction) {
    if (direction === BridgeConfig.UP) {
      return { target: this.#upLog, other: this.#downLog };
    }
    return { target: this.#downLog, other: this.#upLog };
  }
}

module.exports = GameLogger;
