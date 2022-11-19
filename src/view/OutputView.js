const { Console } = require('@woowacourse/mission-utils');
const { ANSWER, MESSAGE } = require('../utiles/Constant');
const MakeMap = require('../models/MakeMap');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printError(error) {
    Console.print(error);
  },
  
  printMap(userMove, isOX) {
    Console.print(MakeMap.makePrintMap(userMove, isOX));
  },
  
  printResult(userMove, failOrSuccess, tryCount) {
    const isOkOrNo = (failOrSuccess === ANSWER.SUCCESS) ? ANSWER.OK : ANSWER.NO;

    Console.print(MESSAGE.FINAL_MESSAGE);
    OutputView.printMap(userMove, isOkOrNo);
    Console.print(`${MESSAGE.FAIL_OR_SUCCESS}${failOrSuccess}`);
    Console.print(`${MESSAGE.TRY_COUNT}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
