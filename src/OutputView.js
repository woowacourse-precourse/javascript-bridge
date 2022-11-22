const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  UPPER: [],
  LOWER: [],

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printError(err) {
    Console.print(err);
  },

  printClose() {
    Console.close();
  },

  processMap(move) {
    const printFlag = move.success ? 'O':'X';
    if(move.moving === 'U') {
      OutputView.UPPER.push(printFlag);
      OutputView.LOWER.push(' ');
    } else if(move.moving === 'D') {
      OutputView.UPPER.push(' ');
      OutputView.LOWER.push(printFlag);
    }
  },

  printMap(moveInfo) {
    OutputView.UPPER = [];
    OutputView.LOWER = [];
    moveInfo.forEach((move) => {
      this.processMap(move);
    })
    Console.print(`[ ${OutputView.UPPER.join(' | ')} ]`);
    Console.print(`[ ${OutputView.LOWER.join(' | ')} ]\n`);
  },

  printResult(moveInfo, tryCnt, successFlag) {
    Console.print('최종 게임 결과');
    this.printMap(moveInfo);
    Console.print(`게임 성공 여부: ${successFlag? '성공':'실패'}`);
    Console.print(`총 시도한 횟수: ${tryCnt}`);
    Console.close();
  },
};

module.exports = OutputView;
