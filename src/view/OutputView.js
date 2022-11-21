const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/Constant');

const OutputView = {
  upfloor: [],
  downfloor: [],

  printMap(userUd, inputOx) {
    OutputView.fillPrintMap(userUd, userUd.length - 1);
    OutputView.fillMapLastUd(userUd[userUd.length - 1], inputOx);

    Console.print(OutputView.fillEndMap());

    OutputView.printPlayingMap();
  },

  fillPrintMap(userUd, userInputLength) {
    for (let i = 0; i < userInputLength; i++) {
      OutputView.upfloor.push(userUd[i] === 'U' ? 'O' : ' ');
      OutputView.downfloor.push(userUd[i] === 'D' ? 'O' : ' ');
    }
  },

  fillMapLastUd(recentUd, inputOx) {
    OutputView.upfloor.push(recentUd === 'U' ? inputOx : ' ');
    OutputView.downfloor.push(recentUd === 'D' ? inputOx : ' ');
  },

  fillEndMap() {
    let outputMap = `[ ${OutputView.upfloor.join(' | ')} ]\n`;
    outputMap += `[ ${OutputView.downfloor.join(' | ')} ]\n`;
    return outputMap;
  },

  printPlayingMap() {
    OutputView.upfloor = [];
    OutputView.downfloor = [];
  },

  printResult(userUd, middleResult) {
    Console.print(MESSAGE.FINAL);
    if (middleResult === MESSAGE.SUCCESS) {
      return OutputView.printMap(userUd, 'O');
    }
    return OutputView.printMap(userUd, 'X');
  },

  printFinalResult(count, middleResult) {
    Console.print(`${MESSAGE.CHECK_ANSWER}${middleResult}`);
    Console.print(`${MESSAGE.COUNT}${count}`);
    Console.close();
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
