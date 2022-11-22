const { checkBridgeMove, printBridgeMoveError } = require("./lib/bridgeGameUtils");
const {
  RETRY,
  FAIL,
  SUCCESS,
  DOWN,
  UP,
  SUCCESS_SHAPE,
  FAIL_SHAPE,
  BLANK,
} = require("./lib/constants");

class BridgeGame {
  #bridge;
  #tryCount = 1;
  #up = [];
  #down = [];

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move(move) {
    this.moveValidate(move);
    this.addUpDown(move, this.#bridge);
  }

  moveValidate(move) {
    printBridgeMoveError(checkBridgeMove(move));
  }

  retry(ask) {
    if (ask === RETRY) {
      this.clean();
      this.#tryCount += 1;
      return true;
    }
    return false;
  }

  addUpDown(move, answer) {
    if (move === UP) {
      this.#down.push(BLANK);
      this.addUp(move, answer);
    }
    if (move === DOWN) {
      this.#up.push(BLANK);
      this.addDown(move, answer);
    }
  }

  addUp(move, answer) {
    if (answer[this.#up.length] === move) {
      this.#up.push(SUCCESS_SHAPE);
      return;
    }
    if (answer[this.#up.length] !== move) {
      this.#up.push(FAIL_SHAPE);
      return;
    }
  }

  addDown(move, answer) {
    if (answer[this.#down.length] === move) {
      this.#down.push(SUCCESS_SHAPE);
      return;
    }
    if (answer[this.#down.length] !== move) {
      this.#down.push(FAIL_SHAPE);
      return;
    }
  }

  checkX() {
    if (this.#up.includes(FAIL_SHAPE) || this.#down.includes(FAIL_SHAPE)) {
      return false;
    }
    return true;
  }

  returnUpDownArray() {
    let array = [];
    array.push(this.returnStringArray(this.#up));
    array.push(this.returnStringArray(this.#down));
    return array;
  }

  returnStringArray(arr) {
    let str = `[ ${arr.join(" , ")} ]`;
    str = str.replaceAll("'", " ");
    str = str.replaceAll(",", "|");
    return str;
  }

  lengthCompare() {
    if (this.#bridge.length !== this.#up.length) {
      return false;
    }
    return true;
  }

  clean() {
    this.#up = [];
    this.#down = [];
  }

  returnUpDownTryCountArray() {
    let array = [];
    array.push(this.returnStringArray(this.#up));
    array.push(this.returnStringArray(this.#down));
    array.push(this.returnSuccessFail());
    array.push(this.#tryCount);
    return array;
  }

  returnSuccessFail() {
    if (this.lengthCompare()) {
      if (this.checkX()) {
        return SUCCESS;
      }
    }
    return FAIL;
  }
}

module.exports = BridgeGame;
