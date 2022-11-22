/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
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
  //현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력
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
};

module.exports = OutputView;
