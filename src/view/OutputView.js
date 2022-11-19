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
  
  printResult(userMove, failOrSuccess, tryCount) {
    let answer = (failOrSuccess === ANSWER.SUCCESS) ? ANSWER.OK : ANSWER.NO;

    Console.print(MESSAGE.FINAL_MESSAGE);
    OutputView.printMap(userMove, answer);
    Console.print(`${MESSAGE.FAIL_OR_SUCCESS}${failOrSuccess}`);
    Console.print(`${MESSAGE.TRY_COUNT}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
