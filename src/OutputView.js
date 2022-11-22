const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(crossBridge, moveResults) {
    let upper = [];
    let lower = [];
    for (let i = 0; i < crossBridge.length; i++) {
      if (moveResults[i] === "O" && crossBridge[i] === "U") {
        upper.push("O");
        lower.push(" ");
      }
      if (moveResults[i] === "O" && crossBridge[i] === "D") {
        upper.push(" ");
        lower.push("O");
      }
      if (moveResults[i] === "X" && crossBridge[i] === "U") {
        upper.push(" ");
        lower.push("X");
      }
      if (moveResults[i] === "X" && crossBridge[i] === "D") {
        upper.push("X");
        lower.push(" ");
      }
    }
    MissionUtils.Console.print(`[ ${upper.join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${lower.join(" | ")} ]`);
    MissionUtils.Console.print("");
  },

  printResult(tryNumber, bridge, moveCommand) {
    isSuccess =
      bridge.length === moveCommand.length &&
      moveCommand.charAt(moveCommand.length - 1) === "O"
        ? "성공"
        : "실패";
    console.log(moveCommand.charAt(moveCommand.length - 1));
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridge, moveCommand);
    MissionUtils.Console.print(`게임 성공 여부: ${isSuccess}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryNumber}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
