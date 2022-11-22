const { Console } = require('@woowacourse/mission-utils');
const { ANSWER, MESSAGE } = require('../utiles/Constant');
const MakeMap = require('../models/MakeMap');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.gameStart);
  },

  lineInterval() {
    Console.print('');
  },

  printError(error) {
    Console.print(error);
  },
  
  printMap(userMove, isOX) {
    Console.print(MakeMap.makePrintMap(userMove, isOX));
  },
  
  printResult(userMove, failOrSuccess, tryCount) {
    const isOkOrNo = (failOrSuccess === ANSWER.success) ? ANSWER.ok : ANSWER.no;

    Console.print(MESSAGE.finalMessage);
    OutputView.printMap(userMove, isOkOrNo);
    Console.print(`${MESSAGE.failOrSuccess}${failOrSuccess}`);
    Console.print(`${MESSAGE.tryCount}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
