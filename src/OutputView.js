const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('../src/const/Text');
const { MOVING_INPUT, PRINT } = require('../src/const/Bridge');

const OutputView = {
  UPPER: [],
  LOWER: [],

  printStart() {
    Console.print(OUTPUT.start);
  },

  printError(err) {
    Console.print(err);
  },

  printClose() {
    Console.close();
  },

  processMap(move) {
    const printFlag = move.success ? PRINT.O:PRINT.X;
    if(move.moving === MOVING_INPUT.up) {
      OutputView.UPPER.push(printFlag);
      OutputView.LOWER.push(PRINT.space);
    } else if(move.moving === MOVING_INPUT.down) {
      OutputView.UPPER.push(PRINT.space);
      OutputView.LOWER.push(printFlag);
    }
  },

  printMap(moveInfo) {
    OutputView.UPPER = [];
    OutputView.LOWER = [];
    moveInfo.forEach((move) => {
      this.processMap(move);
    })
    Console.print(`[ ${OutputView.UPPER.join(PRINT.bar)} ]`);
    Console.print(`[ ${OutputView.LOWER.join(PRINT.bar)} ]\n`);
  },

  printResult(moveInfo, tryCnt, successFlag) {
    Console.print(OUTPUT.resultText);
    this.printMap(moveInfo);
    Console.print(OUTPUT.resultSuccess(successFlag));
    Console.print(OUTPUT.resultTryCount(tryCnt));
    Console.close();
  },
};

module.exports = OutputView;
