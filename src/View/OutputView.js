const MissionUtils = require("@woowacourse/mission-utils");
const RESULT = {
  fail: "실패",
  success: "성공",
};
const MAP_TABLE = {
  open: "[",
  space: "   ",
  close: "]\n",
};

const OutputView = {
  printMap(bridgeStatus, jumpHistory) {
    this.printMapLine("U", bridgeStatus, jumpHistory);
    this.printMapLine("D", bridgeStatus, jumpHistory);
  },

  printMapLine(direction, bridgeStatus, jumpHistory) {
    const SCORE = this.formatScore(direction, bridgeStatus, jumpHistory);
    const PARTITIONED_SCORE = SCORE.join("|");
    MissionUtils.Console.print(
      MAP_TABLE["open"] + PARTITIONED_SCORE + MAP_TABLE["close"]
    );
  },

  formatScore(direction, bridgeStatus, jumpHistory) {
    const score = [];

    for (let index = 0; index < jumpHistory.length; index++) {
      const PRINT_PART =
        bridgeStatus[index] === direction
          ? this.scoreMapPart(index, bridgeStatus, jumpHistory)
          : MAP_TABLE["space"];
      score.push(PRINT_PART);
    }
    return score;
  },

  scoreMapPart(index, bridgeStatus, jumpHistory) {
    if (bridgeStatus[index] === jumpHistory[index]) {
      return " O ";
    }
    if (bridgeStatus[index] !== jumpHistory[index]) {
      return " X ";
    }
  },

  calculateResult(bridgeStatus, jumpHistory) {
    if (bridgeStatus.length > jumpHistory.length || jumpHistory.length === 0) {
      return "fail";
    }
    for (let index = 0; index < bridgeStatus.length; index++) {
      if (bridgeStatus[index] !== jumpHistory[index]) {
        return "fail";
      }
    }
    return "success";
  },

  printResult(playCount, bridgeStatus, jumpHistory) {
    MissionUtils.Console.print("최종 게임 결과\n");
    this.printMap(bridgeStatus, jumpHistory);
    const RESULT_INDEX = this.calculateResult(bridgeStatus, jumpHistory);
    MissionUtils.Console.print(`게임 성공 여부: ${RESULT[RESULT_INDEX]}\n`);
    MissionUtils.Console.print(`총 시도한 횟수: ${playCount}\n`);
  },

  printBeginAnnouncement() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printError(errorMessage) {
    MissionUtils.Console.print(errorMessage);
  },
};

module.exports = OutputView;
