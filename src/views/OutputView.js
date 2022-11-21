const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(map) {
    Console.print('[ '+ map.get('U').join(' | ')+' ]');
    Console.print('[ '+ map.get('D').join(' | ')+' ]\n');
  },

  printResult(result, success) {
    Console.print(`최종 게임 결과`)
    this.printMap(result.map);
    Console.print(`게임 성공 여부: ${success ? '성공' : '실패'}`)
    Console.print(`총 시도한 횟수: ${result.attempts}`);
  },

  printIntialMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printNewLine() {
    Console.print('');
  }
};

module.exports = OutputView;
