const { printMap, printResult } = require('./View/OutputView');

class Result {
  #result;
  #status;
  constructor(bridge, index, bool) {
    this.#status = bool;
    const UP = 'U';
    const DOWN = 'D';
    this.#result = this.makeOneLine(bridge, UP, index);
    this.#result += this.addLastOne(bridge.getbridgePart(index), bool, UP);
    this.#result += '\n';
    this.#result += this.makeOneLine(bridge, DOWN, index);
    this.#result += this.addLastOne(bridge.getbridgePart(index), bool, DOWN);
    return this.#result;
  }

  makeOneLine(bridge, right, index) {
    let string = '[';
    for (let x = 0; x < index; x++) {
      const direction = bridge.getbridgePart(x);
      if (direction === right) string += ' O ';
      else string += '   ';
      string += '|';
    }
    return string;
  }

  addLastOne(last, bool, direction) {
    if (bool) {
      if (direction == last) return ' O ]';
      return '   ]';
    }
    if (direction == last) return '   ]';
    return ' X ]';
  }
  print() {
    printMap(this.#result);
  }
  printFinalResult(tryCount) {
    printResult(this.#result, tryCount, this.#status);
  }
}
module.exports = Result;
