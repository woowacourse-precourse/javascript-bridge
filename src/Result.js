const { printMap, printResult } = require('./View/OutputView');
const UP = 'U';
const DOWN = 'D';
const RESULT_CHARACTER = {
  OPEN: '[',
  CLOSE: ']',
  RIGHT: ' O ',
  WRONG: ' X ',
  SLASH: '|',
  EMPTY: '   ',
};

class Result {
  #result;
  #status;

  constructor(bridge, index, bool) {
    this.#status = bool;
    this.#result = this.addResult(bridge, UP, index);
    this.#result += this.addResultLast(bridge.getbridgePart(index), bool, UP);
    this.#result += '\n';
    this.#result += this.addResult(bridge, DOWN, index);
    this.#result += this.addResultLast(bridge.getbridgePart(index), bool, DOWN);
    return this.#result;
  }

  addResult(bridge, right, index) {
    let string = RESULT_CHARACTER.OPEN;
    for (let x = 0; x < index; x++) {
      const direction = bridge.getbridgePart(x);
      string += this.addResultPart(direction, right);
    }
    return string;
  }

  addResultPart(direction, right) {
    let string = '';
    if (direction === right) {
      string += RESULT_CHARACTER.RIGHT;
    } else {
      string += RESULT_CHARACTER.EMPTY;
    }
    string += RESULT_CHARACTER.SLASH;
    return string;
  }

  addResultLast(last, bool, direction) {
    if (bool) {
      return direction === last
        ? RESULT_CHARACTER.RIGHT + RESULT_CHARACTER.CLOSE
        : RESULT_CHARACTER.EMPTY + RESULT_CHARACTER.CLOSE;
    }
    if (direction == last) {
      return RESULT_CHARACTER.EMPTY + RESULT_CHARACTER.CLOSE;
    }
    return RESULT_CHARACTER.WRONG + RESULT_CHARACTER.CLOSE;
  }

  print() {
    printMap(this.#result);
  }

  printFinalResult(tryCount) {
    printResult(this.#result, tryCount, this.#status);
  }
}
module.exports = Result;
