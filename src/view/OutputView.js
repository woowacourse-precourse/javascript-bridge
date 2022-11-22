const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, OX, INPUT_VALUE } = require('../util/Constant');

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
      OutputView.upfloor.push(userUd[i] === INPUT_VALUE.UP ? OX.CORRECT : ' ');
      OutputView.downfloor.push(userUd[i] === INPUT_VALUE.DOWN ? OX.CORRECT : ' ');
    }
  },

  fillMapLastUd(recentUd, inputOx) {
    OutputView.upfloor.push(recentUd === INPUT_VALUE.UP ? inputOx : ' ');
    OutputView.downfloor.push(recentUd === INPUT_VALUE.DOWN ? inputOx : ' ');
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
      return OutputView.printMap(userUd, OX.CORRECT);
    }
    return OutputView.printMap(userUd, OX.WRONG);
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
