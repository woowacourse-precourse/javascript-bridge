const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap(up, down) {
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]\n`);
  },

  printResult(tryCnt, gameResult, [up, down]) {
    Console.print('최종 게임 결과');
    this.printMap(up, down);
    Console.print(`게임 성공 여부: ${gameResult ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${tryCnt}`);

    Console.close();
  },
};

module.exports = OutputView;
