const { WORD } = require("./Constants");

class BridgeGame {
  #bridges;
  #movements;
  #numberOfTry;

  constructor(bridges) {
    this.#bridges = bridges;
    this.#movements = [];
    this.#numberOfTry = 1;
  }

  getBridges() {
    return this.#bridges;
  }

  getMovements() {
    return this.#movements;
  }

  getNumberOfTry() {
    return this.#numberOfTry;
  }

  isEnd() {
    if (this.#bridges.length === this.#movements.length) {
      return true;
    }
    return false;
  }

  isSuccess() {
    if (this.#movements[this.#movements.length - 1] === WORD.SUCCESS)
      return true;
    return false;
  }

  move(moving) {
    if (this.#bridges[this.#movements.length] === moving) {
      this.#movements.push(WORD.SUCCESS);
      return true;
    }
    this.#movements.push(WORD.FAILURE);
    return false;
  }

  retry() {
    this.#movements = [];
    this.#numberOfTry += 1;
  }
}

module.exports = BridgeGame;
