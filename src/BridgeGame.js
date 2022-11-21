const { GAME_STATE } = require("./Constants");

class BridgeGame {
  #current;
  #gameState;
  #bridgeState;
  #attempts;

  constructor() {
    this.#current = 0;
    this.#bridgeState = [];
    this.#attempts = 1;
  }

  move(bridge, direction) {
    if (bridge[this.#current] === direction) {
      this.#gameState = GAME_STATE.PASS;
      this.#current++;
      if (this.#current === bridge.length) this.#gameState = GAME_STATE.SUCCESS;
    } else this.#gameState = GAME_STATE.FAIL;
    this.#bridgeState.push([direction, this.#gameState]);

    return this.#gameState;
  }

  retry() {
    this.#current = 0;
    this.#bridgeState = [];
    this.#attempts++;
  }

  getCurrentState() {
    return {
      bridgeState: this.#bridgeState,
      gameState: this.#gameState,
      attempts: this.#attempts,
    };
  }
}

module.exports = BridgeGame;
