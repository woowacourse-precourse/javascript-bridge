const { COMMAND, WORD } = require("./Constants/Constants");

class BridgeGame {
  #bridge;
  #currentBridge;
  #up;
  #down;
  #countRetry;

  constructor(bridge) {
    this.#bridge = bridge;
    console.log(this.#bridge);
    this.#currentBridge = [];
    this.#up = [];
    this.#down = [];
    this.#countRetry = 1;
  }

  move(moving) {
    moving === COMMAND.UP ? this.#currentBridge.push(COMMAND.UP) : this.#currentBridge.push(COMMAND.DOWN);
    const isWrong = this.sketch(moving);
    return isWrong;
  }

  sketch(moving) {
    if (this.#bridge[this.#currentBridge.length - 1] === moving) {
      this.sketchCorrectMap();
      return true;
    }
    if (this.#bridge[this.#currentBridge.length - 1] !== moving) {
      this.sketchWrongMap(moving);
      return false;
    }
  }

  sketchCorrectMap() {
    if (this.#currentBridge.length <= this.#bridge.length) {
      this.#up = this.#currentBridge.map((location) => location === COMMAND.UP ? location = WORD.CORRECT : location = WORD.EMPTY);
      this.#down = this.#currentBridge.map((location) => location === COMMAND.DOWN ? location = WORD.CORRECT : location = WORD.EMPTY);
    }
  }

  sketchWrongMap(moving) {
    moving === COMMAND.UP ? this.#up.push(WORD.WRONG) : this.#down.push(WORD.WRONG);
    this.#up.length === this.#down.length - 1 ? this.#up.push(WORD.EMPTY) : this.#down.push(WORD.EMPTY);
  }

  bringSketch() {
    return [this.#up, this.#down];
  }

  retry(command) {
    const isRetry = command === COMMAND.RETRY;
    if (isRetry) {
      this.#countRetry += 1;
      this.#currentBridge = [];
    }
    return isRetry;
  }

  bringCountRetry() {
    return this.#countRetry;
  }

  isGameEnd() {
    return this.#bridge.length === this.#currentBridge.length;
  }
}

module.exports = BridgeGame;