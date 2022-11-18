const { printMap, printResult } = require('./View/OutputView');
const UP = 'U';
const DOWN = 'D';
const STRING_MAKER = {
  BRACKET: {
    OPEN: '[',
    CLOSE: ']',
  },
  SLASH: '|',
  EMPTY: '   ',
  RIGHT: ' O ',
  WRONG: ' X ',
};
class Result {
  #result;
  #status;
  constructor(bridge, index, bool) {
    this.#status = bool;
    this.#result = this.makeOneLine(bridge, UP, index);
    this.#result += this.addLastOne(bridge.getbridgePart(index), bool, UP);
    this.#result += '\n';
    this.#result += this.makeOneLine(bridge, DOWN, index);
    this.#result += this.addLastOne(bridge.getbridgePart(index), bool, DOWN);
    return this.#result;
  }

  makeOneLine(bridge, right, index) {
    let string = STRING_MAKER.BRACKET.OPEN;
    for (let x = 0; x < index; x++) {
      const direction = bridge.getbridgePart(x);
      if (direction === right) string += STRING_MAKER.RIGHT;
      else string += STRING_MAKER.EMPTY;
      string += STRING_MAKER.SLASH;
    }
    return string;
  }

  addLastOne(last, bool, direction) {
    if (bool) {
      if (direction == last)
        return STRING_MAKER.RIGHT + STRING_MAKER.BRACKET.CLOSE;
      return STRING_MAKER.EMPTY + STRING_MAKER.BRACKET.CLOSE;
    }
    if (direction == last)
      return STRING_MAKER.EMPTY + STRING_MAKER.BRACKET.CLOSE;
    return STRING_MAKER.WRONG + STRING_MAKER.BRACKET.CLOSE;
  }
  print() {
    printMap(this.#result);
  }
  printFinalResult(tryCount) {
    printResult(this.#result, tryCount, this.#status);
  }
}
module.exports = Result;
