class BridgeGameStatus {
  #stepCount;

  #successful;

  #gameOver;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.#stepCount = 0;
    this.#successful = false;
    this.#gameOver = false;
  }

  addStep() {
    this.#stepCount += 1;
  }

  end() {
    this.#gameOver = true;
  }

  succeed() {
    this.#successful = true;
    this.end();
  }

  getStepCount() {
    return this.#stepCount;
  }

  isSuccessful() {
    return this.#successful;
  }

  isGameOver() {
    return this.#gameOver;
  }
}

module.exports = BridgeGameStatus;
