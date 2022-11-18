const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utiles/Constant');

const OutputView = {
  upBridge: [],
  downBridge: [],
  
  printMap(userMove, answer) {
    OutputView.makePrintMap(userMove, userMove.length-1);
    OutputView.makeMapLastItem(userMove[userMove.length-1], answer);

    Console.print(OutputView.makeFinalOutputMap());

    OutputView.printMapClear();
  },

  makePrintMap(userMove, userMoveLength) {
    for (let i = 0; i < userMoveLength; i++) {
      OutputView.upBridge.push(userMove[i] === 'U' ? 'O' : ' ');
      OutputView.downBridge.push(userMove[i] === 'D' ? 'O' : ' ');
    };
  },

  makeMapLastItem(lastAnswer, answer) {
    OutputView.upBridge.push(lastAnswer === 'U' ? answer : ' ');
    OutputView.downBridge.push(lastAnswer === 'D' ? answer : ' ');
  },

  makeFinalOutputMap() {
    let outputMap = `[ ${OutputView.upBridge.join(' | ')} ]\n`;
    outputMap+=`[ ${OutputView.downBridge.join(' | ')} ]`;
    return outputMap;
  },

  printMapClear() {
    OutputView.upBridge = [];
    OutputView.downBridge = [];
  },
  
  printResult(userMove, failOrSuccess) {
    Console.print(MESSAGE.FINAL_MESSAGE);
    if (failOrSuccess) {
      return OutputView.printMap(userMove, 'O');
    }
    return OutputView.printMap(userMove, 'X');
  },

  printTryResult(tryCount, failOrSuccess) {
    let iscorrect = '실패';
    if (failOrSuccess) {
      iscorrect = '성공'
    }
    Console.print(`${MESSAGE.FAIL_OR_SUCCESS}${iscorrect}`);
    Console.print(`${MESSAGE.TRY_COUNT}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
