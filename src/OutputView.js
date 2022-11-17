const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  RESULT_MESSAGE: {
    true: '성공',
    false: '실패',
  },

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap(map) {
    Console.print(map);
  },

  printResult(map, tryCount) {
    const result = map[map.length - 1].result;
    Console.print('최종 게임 결과');
    OutputView.printMap(map);
    Console.print(`\n게임 성공 여부: ${OutputView.RESULT_MESSAGE[result]}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
