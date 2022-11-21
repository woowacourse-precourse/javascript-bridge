class StateManager {
  #stage;

  #gameStatus;

  #tryCount;

  constructor(stage, gameStatus, tryCount) {
    this.#stage = stage;
    this.#gameStatus = gameStatus;
    this.#tryCount = tryCount;
  }

  increaseStage() {
    this.#stage += 1;
  }

  updateGameStatus(status) {
    this.#gameStatus = status;
  }

  retry() {
    this.#stage = 0;
    this.#gameStatus = 'PLAYING';
    this.#tryCount += 1;
  }

  getStage() {
    return this.#stage;
  }

  getGameStatus() {
    return this.#gameStatus;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = StateManager;
