const { Console } = require('@woowacourse/mission-utils');
const { ANSWER, MESSAGE } = require('../utiles/Constant');
const MakeMap = require('../models/MakeMap');

const OutputView = {
  upBridge: [],
  downBridge: [],

  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printError(error) {
    Console.print(error);
  },
  
  printMap(userMove, isCorrect) {
    MakeMap.makePrintMap(userMove, isCorrect);
    Console.print(MakeMap.makeFinalOutputMap());
  },
  
  printResult(userMove, failOrSuccess) {
    Console.print(MESSAGE.FINAL_MESSAGE);
    if (failOrSuccess) {
      return OutputView.printMap(userMove, ANSWER.OK);
    }
    return OutputView.printMap(userMove, ANSWER.NO);
  },

  printTryResult(tryCount, failOrSuccess) {
    let iscorrect = ANSWER.FAIL;
    if (failOrSuccess) {
      iscorrect = ANSWER.SUCCESS;
    };
    Console.print(`${MESSAGE.FAIL_OR_SUCCESS}${iscorrect}`);
    Console.print(`${MESSAGE.TRY_COUNT}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
