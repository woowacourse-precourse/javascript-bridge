const MissionUtils = require("@woowacourse/mission-utils");
const RESULT = {
  fail: "실패",
  success: "성공",
};
const MAP_TABLE = {
  open: "[ ",
  space: "  ",
  close: "]\n",
};
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 제공된 OutputView 객체를 활용해 구현해야 한다.
 * OutputView의 파일 경로는 변경할 수 있다.
 * OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeStatus, jumpHistory) {
    this.printMapLine("U", bridgeStatus, jumpHistory);
    this.printMapLine("D", bridgeStatus, jumpHistory);
  },

  printMapLine(direction, bridgeStatus, jumpHistory) {
    const SCORE = this.formatScore(direction, bridgeStatus, jumpHistory);
    const PARTITIONED_SCORE = SCORE.join("| ");
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
      return "O ";
    }
    if (bridgeStatus[index] !== jumpHistory[index]) {
      return "X ";
    }
    return "  ";
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

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

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
