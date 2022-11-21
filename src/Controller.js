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


const Controller = {
  size: 0,
  command: "",
  tryCount: 1,
  round: 0,
  arrayState: [[], []],
  playerArr: [],
  gameResult: IS_SUCCESS.nailedIt,

  getSize(size) {
    this.size += size;
  },
  addRound() {
    this.round += 1;
  },
  addTrialCount() {
    this.tryCount += 1;
  },
  initializeBlock() {
    this.round -= 1;
    this.playerArr = [];
  }, 
  isBlockError(block){
    if(block !== GO.up && block !== GO.down){
      return true
    }
    if(block === GO.up || block === GO.down){
      OutputView.printMap(this.arrayState);
    }
  },


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
    }
  },




  initializeAll() {
    OutputView.nowArray = [],
    this.arrayState = [[], []],
    this.playerArr = [],
    this.gameResult = IS_SUCCESS.nailedIt,
    this.round = 0,
    this.tryCount += 1; 
  },

  isCommandError(command){
    if(command !== COMMAND.quit && command !== COMMAND.retry){
      return true
    }
  },

  playerCommand(command) {
    this.command = command;
  },

};

module.exports = Controller;
