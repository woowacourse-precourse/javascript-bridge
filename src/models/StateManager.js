class StateManager {
  #stage = 0;

  #gameStatus = 'PLAYING';

  increaseStage() {
    this.#stage += 1;
  }

  updateGameStatus(status) {
    this.#gameStatus = status;
  }

  getStage() {
    return this.#stage;
  }

  getGameStatus() {
    return this.#gameStatus;
  }
}

module.exports = StateManager;
