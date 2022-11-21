const { Console } = require('@woowacourse/mission-utils');
const { START_MESSAGE, OUTPUT_MESSAGE } = require('./Constant');

const OutputView = {
  printStart() {
    Console.print(START_MESSAGE);
  },

  printMap(results) {
    Console.print(`[${this.printUpMap(results)}]`);
    Console.print(`[${this.printDownMap(results)}]`);
  },

  printUpMap(results) {
    const UP_RESULT = [];
    results.forEach((result) => {
      const [UP_DOWN, O_X] = [result[0], result[1]];
      if (UP_DOWN === 'U' && O_X === 'O') UP_RESULT.push(' O ');
      else if (UP_DOWN === 'U' && O_X === 'X') UP_RESULT.push(' X ');
      else UP_RESULT.push('   ');
    });
    return UP_RESULT.join('|');
  },

  printDownMap(results) {
    const DOWN_RESULT = [];
    results.forEach((result) => {
      const [UP_DOWN, O_X] = [result[0], result[1]];
      if (UP_DOWN === 'D' && O_X === 'O') DOWN_RESULT.push(' O ');
      else if (UP_DOWN === 'D' && O_X === 'X') DOWN_RESULT.push(' X ');
      else DOWN_RESULT.push('   ');
    });
    return DOWN_RESULT.join('|');
  },

  printResult(results, cnt) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    this.printMap(results);
    const SUCCESS = this.checkSuccess(results);
    if (SUCCESS) Console.print(OUTPUT_MESSAGE.SUCCESS);
    else Console.print(OUTPUT_MESSAGE.FAIL);
    Console.print(OUTPUT_MESSAGE.COUNT_TRY + cnt);
  },

  checkSuccess(results) {
    let SUCCESS;
    results.forEach((result) => {
      SUCCESS = !(result[1] === 'X');
    });
    return SUCCESS;
  },
};

module.exports = OutputView;
