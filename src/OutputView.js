const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Console = MissionUtils.Console;

const OutputView = {
  upList: [],
  downList: [],

  makeBridgeMap(nowLength, bridge, moveUpDown, tf) {
    this.upList = [];
    this.downList = [];
    for (let n = 0; n < nowLength + 1; ++n) this.makeMapJustO(bridge, n);
    if (!tf) this.makeMapWithX(nowLength, moveUpDown);
    this.printMap();
  },

  makeMapJustO(bridge, n) {
    if (bridge[n] == "D") {
      this.upList.push(" ");
      this.downList.push("O");
    }
    if (bridge[n] == "U") {
      this.upList.push("O");
      this.downList.push(" ");
    }
  },

  makeMapWithX(nowLength, moveUpDown) {
    if (moveUpDown == "U") {
      this.upList[nowLength] = "X";
      this.downList[nowLength] = " ";
    }
    if (moveUpDown == "D") {
      this.downList[nowLength] = "X";
      this.upList[nowLength] = " ";
    }
  },

  printMap() {
    Console.print("[ " + [...this.upList].join(" | ") + " ]");
    Console.print("[ " + [...this.downList].join(" | ") + " ]");
  },

  printResult(gameLength, bridge, moveUpDown, tf, tryCount) {
    Console.print("\n최종 게임 결과");
    this.makeBridgeMap(gameLength, bridge, moveUpDown, tf);
    if (tf) Console.print("\n게임 성공 여부: 성공");
    if (!tf) Console.print("\n게임 성공 여부: 실패");
    Console.print("총 시도한 횟수: " + tryCount);
    return;
  },
};

module.exports = OutputView;
