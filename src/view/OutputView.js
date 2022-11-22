const { Console } = require('@woowacourse/mission-utils');
const MapMaker = require('../MapMaker');
const { MESSAGE, OX } = require('../util/Constant');

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printMap(userUd, inputOx) {
    MapMaker.fillPrintMap(userUd, inputOx);
    Console.print(MapMaker.fillEndMap());
  },

  printResult(userUd, middleResult) {
    Console.print(MESSAGE.FINAL);
    if (middleResult === MESSAGE.SUCCESS) {
      return OutputView.printMap(userUd, OX.CORRECT);
    }
    return OutputView.printMap(userUd, OX.WRONG);
  },

  printFinalResult(count, middleResult) {
    Console.print(`${MESSAGE.CHECK_ANSWER}${middleResult}`);
    Console.print(`${MESSAGE.COUNT}${count}`);
    Console.close();
  },
};

module.exports = OutputView;
