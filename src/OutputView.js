const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, DIRECTION, RESULT } = require('./constants/constant.js');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printMap(bridge) {
    let [upperResult, lowerResult] = this.getResultStr(bridge);

    upperResult += ']';
    lowerResult += ']';

    Console.print(`${upperResult}\n${lowerResult}\n`);
  },

  getResultStr(bridge) {
    let upperResult = '[';
    let lowerResult = '[';

    bridge.currentPos.forEach((pos, index) => {
      upperResult += this.addUpperResultStr(bridge, pos, index);
      lowerResult += this.addLowerResultStr(bridge, pos, index);
    });

    return [upperResult, lowerResult];
  },

  addUpperResultStr(bridge, pos, index) {
    let result = '';

    result += index === 0 ? '' : '|';
    if (pos === DIRECTION.UP) result += bridge.cellValidator(index) ? RESULT.CORRECT : RESULT.INCORRECT;
    else result += RESULT.EMPTY;

    return result;
  },

  addLowerResultStr(bridge, pos, index) {
    let result = '';

    result += index === 0 ? '' : '|';
    if (pos === DIRECTION.DOWN) result += bridge.cellValidator(index) ? RESULT.CORRECT : RESULT.INCORRECT;
    else result += RESULT.EMPTY;

    return result;
  },

  printResult(bridge) {
    Console.print(MESSAGE.RESULT);
    this.printMap(bridge);
    Console.print(`${MESSAGE.SUCCESS_RESULT} ${bridge.isSuccess() ? RESULT.SUCCESS : RESULT.FAIL}`);
    Console.print(`${MESSAGE.TOTAL_ATTEMPTS} ${bridge.attempt}`);
  },

  printError(e) {
    Console.print(e);
  },
};

module.exports = OutputView;
