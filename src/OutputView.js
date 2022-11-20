const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Console = MissionUtils.Console;

const OutputView = {
  upList: [],
  downList: [],
  bridgeSave: [],

  makeBridgeMap(nowLength, bridge, moveAndBool) {
    let moveUpDown = moveAndBool[0];
    let tf = moveAndBool[1];
    this.bridgeSave = bridge;
    this.upList = [];
    this.downList = [];
    for (let n = 0; n < nowLength + 1; ++n) this.makeMapJustO(n);
    if (tf == "F") this.makeMapWithX(nowLength, moveUpDown);
    this.printMap();
  },

  makeMapJustO(n) {
    if (this.bridgeSave[n] == "D") {
      this.upList.push(" ");
      this.downList.push("O");
    }
    if (this.bridgeSave[n] == "U") {
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

  printResult(gameLength, moveAndBool, tryCount) {
    Console.print("\n최종 게임 결과");
    this.makeBridgeMap(gameLength, this.bridgeSave, moveAndBool);
    if (moveAndBool[1] == "T") Console.print("\n게임 성공 여부: 성공");
    if (moveAndBool[1] == "F") Console.print("\n게임 성공 여부: 실패");
    Console.print("총 시도한 횟수: " + tryCount);
    return;
  },
};

module.exports = OutputView;
