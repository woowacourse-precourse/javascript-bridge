const MissionUtils = require("@woowacourse/mission-utils"); // 지우기
const {
  GO,
  COMMAND,
  SIGN,
  IS_SUCCESS,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./constant");
const OutputView = require("./OutputView");

// 클래스로 하니까 걍 다 초기화됨 --
// 열로 정보 다보내
const Controller = {
  size: 0,
  command: "",
  tryCount: 1,
  round: 0,
  arrayState: [[], []],
  playerArr: [],
  gameResult: "",

  getSize(size) {
    this.size += size;
  },
  addRound() {
    this.round += 1;
  },
  addTrialCount() {
    this.tryCount += 1;
  },
  isBlockError() {
    this.round -= 1;
    this.playerArr.pop();
  }, //

  conveyInput(block) {
    this.addPlayerBlock(block);
    // this.successMove(block);
    // this.failMove(block);
  },

  addPlayerBlock(block) {
    this.playerArr.push(block);
  },

  successMove(block) {
    if (block === "U") {
      this.arrayState[0].push("O");
      this.arrayState[1].push(" ");
    }
    if (block === "D") {
      this.arrayState[0].push(" ");
      this.arrayState[1].push("O");
    }
  },
  failMove(block) {
    if (block === "U") {
      this.arrayState[0].push("X");
      this.arrayState[1].push(" ");
    }
    if (block === "D") {
      this.arrayState[0].push(" ");
      this.arrayState[1].push("X");
    }
  },

  // checkSuccess() {
  //   if (OutputView.nowArray.includes(SIGN.fail)) {
  //     return (this.gameResult = IS_SUCCESS.failedIt);
  //   }
  //   if (this.size === this.playerArr.length && !OutputView.nowArray.includes(SIGN.fail)) {
  //     return (this.gameResult = IS_SUCCESS.nailedIt);
  //   }
  // },
  checkContinue() {
    if (
      this.playerArr.length !== this.size &&
      !OutputView.nowArray[0].includes(SIGN.fail) &&
      !OutputView.nowArray[1].includes(SIGN.fail)
    ) {
      return true;
    }
  },

  checkSuccess() {
    for (let i = 0; i < OutputView.nowArray.length; i++) {
      if (OutputView.nowArray[i].includes(SIGN.fail)) {
        return (this.gameResult = IS_SUCCESS.failedIt);
      }
      if (!OutputView.nowArray[i].includes(SIGN.fail)) {
        return (this.gameResult = IS_SUCCESS.nailedIt);
      }
    }
  },




  initializeAll() {
    OutputView.nowArray = [],
    this.arrayState = [[], []],
    this.playerArr = [],
    this.gameResult = "",
    this.round = 0,
    // this.size = 0,
    this.tryCount += 1; // 시도 마다 올라감
  },

  playerCommand(command) {
    this.command = command;
  },

  // resultArray(playerArr) {
  //   OutputView.printMap(playerArr);
  // },
};

module.exports = Controller;
