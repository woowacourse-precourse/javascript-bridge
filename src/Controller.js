const OutputView = require("./OutputView");
const { GO, COMMAND, SIGN, IS_SUCCESS } = require("./constant");

const Controller = {
  size: 0,
  command: "",
  tryCount: 1,
  arrayState: [[], []],
  playerArr: [],
  gameResult: IS_SUCCESS.nailedIt,

  getSize(size) {
    this.size += size;
  },

  isSizeError(size) {
    if (
      Number(size) < 3 ||
      Number(size) > 20 ||
      isNaN(size) ||
      !Number.isInteger(size)
    ) {
      return true
    }
  },

  addTrialCount() {
    this.tryCount += 1;
  },

  initializeBlock() {
    this.playerArr = [];
  },

  isBlockError(block) {
    if (block !== GO.up && block !== GO.down) {
      return true;
    }
    if (block === GO.up || block === GO.down) {
      OutputView.printMap(this.arrayState);
    }
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

  checkMoveContinue() {
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
    }
  },

  initializeAll() {
    (OutputView.nowArray = []),
      (this.arrayState = [[], []]),
      (this.playerArr = []),
      (this.gameResult = IS_SUCCESS.nailedIt),
      (this.tryCount += 1);
  },

  isCommandError(command) {
    if (command !== COMMAND.quit && command !== COMMAND.retry) {
      return true;
    }
  },
};

module.exports = Controller;