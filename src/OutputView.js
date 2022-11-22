const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printSingleMap(map) {
    MissionUtils.Console.print(`[ ${map.join(' | ')} ]`);
  },

  printMap(map) {
    this.printSingleMap(map[0]);
    this.printSingleMap(map[1]);
    MissionUtils.Console.print('');
  },

  printResult(map, isFinish, tryCnt) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(map);
    MissionUtils.Console.print(`게임 성공 여부: ${isFinish ? '성공' : '실패'}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCnt}`);
  },
};

module.exports = OutputView;
