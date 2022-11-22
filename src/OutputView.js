const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStartGame() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },

  printMap(upResult, downResult) {
    MissionUtils.Console.print(`[${upResult.join("|")}]`);
    MissionUtils.Console.print(`[${downResult.join("|")}]`);
  },

  printResult(bridgeGame) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridgeGame.getUpResult(), bridgeGame.getDownResult());
    MissionUtils.Console.print(
      `게임 성공 여부: ${(bridgeGame.getSuccess() && "성공") || "실패"}`
    );
    MissionUtils.Console.print(`총 시도한 횟수: ${bridgeGame.getAttempt()}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
