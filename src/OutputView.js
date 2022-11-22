const { Console } = require("@woowacourse/mission-utils");
const RESULT_FINAL = "최종 게임 결과";
const RESULT_SUCCESSORNOT = "게임 성공 여부: ";
const RESULT_SUCCESS = "성공";
const RESULT_FAIL = "실패";
const RESULT_ATTEMPTS = "총 시도한 횟수: ";
const MAP_START = "[ ";
const MAP_END = "]";
const MAP_LINE = "| ";

const OutputView = {
  printMap(bridge, user) {
    Console.print(this.printOneBridge(bridge, user, ["U", "D"]));
    Console.print(this.printOneBridge(bridge, user, ["D", "U"]));
    Console.print("");
  },

  printOneBridge(bridge, user, upDown) {
    let str = "";

    str += MAP_START;
    for (let i = 0; i < user.length; i++) {
      str += this.printOneStep(bridge[i], user[i], upDown);
      str += this.printLine(i, user.length);
    }
    str += MAP_END;

    return str;
  },

  printOneStep(bridge, user, upDown) {
    if (bridge == upDown[0] && user) {
      return "O ";
    } else if (bridge == upDown[1] && !user) {
      return "X ";
    }
    return "  ";
  },

  printLine(idx, length) {
    if (idx < length - 1) {
      return MAP_LINE;
    }
    return "";
  },

  printResult(bridge, userBridge, attemptCnt) {
    Console.print(RESULT_FINAL);
    this.printMap(bridge, userBridge);
    this.successOrNot(bridge, userBridge);
    this.totalAttempts(attemptCnt);
  },

  successOrNot(bridge, userBridge) {
    if (bridge.length == userBridge.length && !userBridge.includes(false))
      Console.print(RESULT_SUCCESSORNOT + RESULT_SUCCESS);
    else Console.print(RESULT_SUCCESSORNOT + RESULT_FAIL);
  },

  totalAttempts(attemptCnt) {
    Console.print(RESULT_ATTEMPTS + attemptCnt);
  },
};

module.exports = OutputView;
