const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printMap(up, down) {
    MissionUtils.Console.print(`[${up.join('')}]\n[${down.join('')}]`, '아웃');
  },

  printResult(map, result, tryCount) {
    MissionUtils.Console.print('최종게임결과');
    this.printMap(...map);
    MissionUtils.Console.print(
      `\n게임 성공 여부: ${result}\n총 시도한 횟수: ${tryCount}`
    );
  },

  printStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },
};

module.exports = OutputView;
