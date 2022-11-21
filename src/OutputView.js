const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {

  printStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
  },
    
  printMap(map) {
    map.forEach((map) => {
      MissionUtils.Console.print(`[ ${map.join(" | ")} ]`);
    })
  },

  printResult(gameResult, map) {
    [gameOver, tryCount] = gameResult;
    gameOver === false ? checkForSuccess = '성공' : checkForSuccess = '실패'

    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(map);
    MissionUtils.Console.print(`게임 성공 여부: ${checkForSuccess}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);    
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
