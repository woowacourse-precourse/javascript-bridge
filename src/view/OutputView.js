const { Console } = require('@woowacourse/mission-utils');
const { UP, DOWN, ANSWER, MESSAGE } = require('../utiles/Constant');

const OutputView = {
  upBridge: [],
  downBridge: [],

  printError(error) {
    Console.print(error);
  },

  printStart() {
    Console.print(MESSAGE.GAME_START);
  },
  
  printMap(userMove, answer) {
    OutputView.makePrintMap(userMove, userMove.length-1);
    OutputView.makeMapLastItem(userMove[userMove.length-1], answer);

    Console.print(OutputView.makeFinalOutputMap());

    OutputView.printMapClear();
  },

  makePrintMap(userMove, userMoveLength) {
    for (let i = 0; i < userMoveLength; i++) {
      OutputView.upBridge.push(userMove[i] === UP ? ANSWER.OK : ANSWER.BLANK);
      OutputView.downBridge.push(userMove[i] === DOWN ? ANSWER.OK : ANSWER.BLANK);
    };
  },

  makeMapLastItem(lastAnswer, answer) {
    OutputView.upBridge.push(lastAnswer === UP ? answer : ANSWER.BLANK);
    OutputView.downBridge.push(lastAnswer === DOWN ? answer : ANSWER.BLANK);
  },

  makeFinalOutputMap() {
    let outputMap = `[ ${OutputView.upBridge.join(' | ')} ]\n`;
    outputMap += `[ ${OutputView.downBridge.join(' | ')} ]`;
    return outputMap;
  },

  printMapClear() {
    OutputView.upBridge = [];
    OutputView.downBridge = [];
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
