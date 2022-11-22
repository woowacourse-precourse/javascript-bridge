const { GAME_STATUS } = require('../utils/constants');

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
    this.#gameStatus = GAME_STATUS.PLAYING;
    this.#tryCount += 1;
  }

  getGameState() {
    return {
      stage: this.#stage,
      gameStatus: this.#gameStatus,
      tryCount: this.#tryCount,
    };
  }
}

module.exports = StateManager;
