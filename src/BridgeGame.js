const Constants = require('./Constants');
const Validate = require('./Validate');

class BridgeGame {
  #bridge = [];
  #process = 0;
  #result = {
    tryNumber: 1,
    map: {
      U: [],
      D: [],
    },
  };

  constructor(bridge) {
    Validate.bridgeSize(bridge.length);

    this.#bridge = bridge;
  }

  move(movement) {
    const moveResult =
      this.#bridge[this.#process] === movement ? Constants.Result.SUCCESS : Constants.Result.FAIL;
    this.addMap(movement, moveResult);
    this.#process++;

    if (this.#process === this.#bridge.length) {
      return moveResult === Constants.Result.FAIL ? moveResult : Constants.Result.DONE;
    }
    return moveResult;
  }

  retry() {
    this.#process = 0;
    this.#result.map = {
      U: [],
      D: [],
    };
    this.#result.tryNumber++;
  }

  addMap(movement, moveResult) {
    const sign = moveResult === Constants.Result.SUCCESS ? 'O' : 'X';
    this.#result.map[movement].push(sign);

    if (movement === 'U') {
      this.#result.map['D'].push(' ');
    }
    if (movement === 'D') {
      this.#result.map['U'].push(' ');
    }
  }

  getResult() {
    return this.#result;
  }
}

module.exports = BridgeGame;
