const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Console = MissionUtils.Console;

const OutputView = {
  printMap(nowLength, bridge, moveUpDown, tf) {
    let upList = [];
    let downList = [];
    for (let n = 0; n < nowLength + 1; ++n) {
      if (bridge[n] == "D") {
        upList.push(" ");
        downList.push("O");
      }
      if (bridge[n] == "U") {
        upList.push("O");
        downList.push(" ");
      }
    }
    if (!tf) {
      if (moveUpDown == "U") {
        upList[nowLength] = "X";
        downList[nowLength] = " ";
      }
      if (moveUpDown == "D") {
        downList[nowLength] = "X";
        upList[nowLength] = " ";
      }
    }
    Console.print("[ " + [...upList].join(" | ") + " ]");
    Console.print("[ " + [...downList].join(" | ") + " ]");
    return;
  },

  printResult(gameLength, bridge, moveUpDown, tf) {
    Console.print("\n최종 게임 결과");
    this.printMap(gameLength, bridge, moveUpDown, tf);
    if (tf) Console.print("\n게임 성공 여부: 성공");
    if (!tf) Console.print("\n게임 성공 여부: 실패");
    Console.print("총 시도한 횟수: 1"); // 시도 횟수ㅜㅜㅜ
    return;
  },
};

module.exports = OutputView;
