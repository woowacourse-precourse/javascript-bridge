const { generate } = require("./utils/BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const Values = require("./constants/Values.js");

class BridgeGame {
  #bridgeArr;

  constructor(length) {
    this.#bridgeArr = makeBridge(length, generate);
    this.stepObj = { upperPart: [], lowerPart: [] };
    this.numOfTrials = 1;
  }

  move(inputDirection) {
    this.judgeSuccess(this.getNumOfSteps(), inputDirection);
    this.updateProgressOfGame(inputDirection);
    if (this.isSuccess) this.judgeGameCleard();
  }

  retry() {
    this.numOfTrials += 1;
    this.stepObj = { upperPart: [], lowerPart: [] };
  }

  judgeSuccess(index, inputDirection) {
    this.isSuccess = this.#bridgeArr[index] === inputDirection;
  }

  getCurrentMark() {
    if (this.isSuccess) return Values.SUCCESS_MARK;
    return Values.FAIL_MARK;
  }

  updateProgressOfGame(inputDirection) {
    const MARK = this.getCurrentMark();
    if (inputDirection === Values.UPWARD_MOVEMENT) return this.moveToUpper(MARK);
    return this.moveToLower(MARK);
  }

  moveToUpper(MARK) {
    this.stepObj.upperPart.push(MARK);
    this.stepObj.lowerPart.push(Values.BLANK);
  }

  moveToLower(MARK) {
    this.stepObj.lowerPart.push(MARK);
    this.stepObj.upperPart.push(Values.BLANK);
  }

  getNumOfSteps() {
    return this.stepObj.upperPart.length;
  }

  judgeGameCleard() {
    if (this.getNumOfSteps() === this.#bridgeArr.length) this.isCleared = true;
  }
}

module.exports = BridgeGame;
