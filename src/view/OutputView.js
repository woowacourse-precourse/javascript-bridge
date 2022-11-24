const { Console } = require("@woowacourse/mission-utils");
const REQUIREMENT = require("../util/constant");
let retry = 0;
let blank;
let last;

const OutputView = {
  printMap(upBridge, downBridge) {
    Console.print(upBridge + REQUIREMENT.bridge.End);
    Console.print(downBridge + REQUIREMENT.bridge.End);
  },

  printBridgeMap(message, count, size) {
    if (count == 1) {
      blank = REQUIREMENT.bridge.Start + message[0];
      last = REQUIREMENT.bridge.Start + message[1];
      OutputView.printMap(blank, last);
    } else {
      blank += REQUIREMENT.bridge.Again + message[0];
      last += REQUIREMENT.bridge.Again + message[1];
      OutputView.printMap(blank, last);
      if (count == size) {
        OutputView.printResult("success");
      }
    }
  },

  printFail(upMessage, downMessage) {
    blank += REQUIREMENT.bridge.Again + upMessage;
    last += REQUIREMENT.bridge.Again + downMessage;
    Console.print(
      blank + REQUIREMENT.bridge.End + `\n` + last + REQUIREMENT.bridge.End
    );
  },

  resetBridge() {
    let blank = "";
    let last = "";
  },

  printResult(score) {
    Console.print("최종 게임 결과");
    Console.print(blank + REQUIREMENT.bridge.End);
    Console.print(last + REQUIREMENT.bridge.End);
    if (score == "success") {
      Console.print(`게임 성공 여부: ${REQUIREMENT.gameScore.success}`);
    } else if (score == "fail") {
      Console.print(`게임 성공 여부: ${REQUIREMENT.gameScore.fail}`);
    }
    Console.print(`총 시도한 횟수: ${OutputView.checkRestartCount()}`);
  },

  checkRestartCount() {
    return (retry += 1);
  },

  resetCount() {
    return (retry = 0);
  },
};

module.exports = OutputView;
