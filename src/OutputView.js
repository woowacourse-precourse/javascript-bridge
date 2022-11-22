const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",
  RETRY_COMMAND: "R",
  QUIT_COMMAND: "Q",

  upList: [],
  downList: [],
  bridgeSave: [],

  makeBridgeMap(nowLength, bridge, moveAndBool) {
    let moveUpDown = moveAndBool[0];
    let trueFalse = moveAndBool[1];
    this.bridgeSave = bridge;
    this.upList = [];
    this.downList = [];
    for (let n = 0; n < nowLength + 1; ++n) this.walk(n);
    if (trueFalse == "F") this.makeMapWithX(nowLength, moveUpDown);
    this.printMap();
  },

  walk(n) {
    if (this.bridgeSave[n] == this.MOVE_DOWN) {
      this.upList.push(" ");
      this.downList.push("O");
    }
    if (this.bridgeSave[n] == this.MOVE_UP) {
      this.upList.push("O");
      this.downList.push(" ");
    }
  },

  xMaker(nowLength, moveUpDown) {
    if (moveUpDown == this.MOVE_UP) {
      this.upList[nowLength] = "X";
      this.downList[nowLength] = " ";
    }
    if (moveUpDown == this.MOVE_DOWN) {
      this.downList[nowLength] = "X";
      this.upList[nowLength] = " ";
    }
  },

  printMap() {
    MissionUtils.Console.print("[ " + [...this.upList].join(" | ") + " ]");
    MissionUtils.Console.print("[ " + [...this.downList].join(" | ") + " ]");
  },

  printResult(gameLength, moveAndBool, tryCount) {
    MissionUtils.Console.print("\n최종 게임 결과");
    this.makeBridgeMap(gameLength, this.bridgeSave, moveAndBool);
    if (moveAndBool[1] == "T")
      MissionUtils.Console.print("\n게임 성공 여부: 성공");
    if (moveAndBool[1] == "F")
      MissionUtils.Console.print("\n게임 성공 여부: 실패");
    MissionUtils.Console.print("총 시도한 횟수: " + tryCount);
    return;
  },
};

module.exports = OutputView;
