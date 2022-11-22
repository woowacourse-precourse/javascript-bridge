class BridgeGame {
  #bridge;

  #history;

  #trial;

  constructor() {
    this.#history = [];
    this.#trial = 1;
  }

  move(char) {}

  retry(command) {}
}

module.exports = BridgeGame;
