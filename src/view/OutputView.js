const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/Constant');

const OutputView = {
  upfloor: [],
  downfloor: [],

  printMap(userUd, OX) {
    OutputView.fillPrintMap(userUd, userUd.length - 1);
    OutputView.fillMapLastUd(userUd[userUd.length - 1], OX);

    Console.print(OutputView.fillEndMap());

    OutputView.printPlayingMap();
  },

  fillPrintMap(userUd, userInputLength) {
    for (let i = 0; i < userInputLength; i++) {
      OutputView.upfloor.push(userUd[i] === 'U' ? 'O' : ' ');
      OutputView.downfloor.push(userUd[i] === 'D' ? 'O' : ' ');
    }
  },

  fillMapLastUd(recentUd, OX) {
    OutputView.upfloor.push(recentUd === 'U' ? OX : ' ');
    OutputView.downfloor.push(recentUd === 'D' ? OX : ' ');
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

  printResult(userMove, OX) {
    Console.print(MESSAGE.END_GAME);
    OutputView.printMap(userMove, OX);
    Console.print(MESSAGE.CHECK_ANSWER);
    Console.print(MESSAGE.COUNT);
    Console.close();
  },
};

module.exports = OutputView;
