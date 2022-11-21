const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printGetStarted() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },

  printMap(map) {
    MissionUtils.Console.print(map);
  },

  printResult(map, statistic) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(map);
    MissionUtils.Console.print(`게임 성공 여부: ${statistic.isDie}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${statistic.retryCount}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
