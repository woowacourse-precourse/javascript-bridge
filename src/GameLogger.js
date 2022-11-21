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
}

module.exports = GameLogger;
