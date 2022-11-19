const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  makeBridge(moving, boolean, string) {
    let answer = moving.map((direction, index) => {
      if (direction == string && index === moving.length - 1) {
        return boolean ? " O " : " X ";
      } else if (direction == string) {
        return " O ";
      }
      return "   ";
    });

    return answer;
  },

  printMap(moving, boolean) {
    let upstairs = this.makeBridge(moving, boolean, "U");
    let downstairs = this.makeBridge(moving, boolean, "D");

    MissionUtils.Console.print(`[${upstairs.join("|")}]`);
    MissionUtils.Console.print(`[${downstairs.join("|")}]` + "\n");
  },

  printResult(moving, totalTry, success) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(moving, success);

    MissionUtils.Console.print(`게임 성공 여부: ${success ? "성공" : "실패"}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${totalTry}`);
  },
};

module.exports = OutputView;
