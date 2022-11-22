const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE_SHAPE, VALID_CHAR, SUCCESS_WORD, FAILURE_WORD, FLAG } = require("./constants");
const OutputView = require("./OutputView");

class BridgeGame {
  constructor() {
    this.bridgeSize = 0;
    this.correctBridge = "";
    this.currentStep = 0;
    this.upLineOfBridge = BRIDGE_SHAPE.START;
    this.downLineOfBridge = BRIDGE_SHAPE.START;
    this.try = 1;
    this.state = false;
  }

  init(bridgeSize) {
    this.bridgeSize = parseInt(bridgeSize);
    this.correctBridge = BridgeMaker.makeBridge(this.bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  move(movingStep) {
    this.state = this.canMove(movingStep);
    if (this.state) this.drawBridge(movingStep, BRIDGE_SHAPE.SUCCESS);
    else this.drawBridge(movingStep, BRIDGE_SHAPE.FAILURE);

    if (!this.state) return this.getNextRead(FLAG.READ_GAME_COMMAND);
    if (this.reachEndOfBridge()) return this.getPrintResult(SUCCESS_WORD);
    return this.getNextRead(FLAG.READ_MOVING);
  }

  canMove(movingStep) {
    return this.correctBridge[this.currentStep] === movingStep;
  }

  reachEndOfBridge() {
    return ++this.currentStep === this.bridgeSize;
  }

  getPrintResult(successOrfailure) {
    return {
      flag: FLAG.PRINT_RESULT,
      upLineOfBridge: this.upLineOfBridge,
      downLineOfBridge: this.downLineOfBridge,
      successOrfailure: successOrfailure,
      tryCount: this.try,
    }
  }

  getNextRead(flag) {
    return {
      flag: flag,
      bridgeGame: this
    }
  }

  drawBridge(movingStep, bridgeShape) {
    this.delimiter();
    if (movingStep === VALID_CHAR.UP) {
      this.upLineOfBridge += bridgeShape;
      this.downLineOfBridge += BRIDGE_SHAPE.BLANK;
    }
    else {
      this.upLineOfBridge += BRIDGE_SHAPE.BLANK;
      this.downLineOfBridge += bridgeShape;
    }
    OutputView.printMap(this.upLineOfBridge, this.downLineOfBridge);
  }

  delimiter() {
    if (this.currentStep === 0) return;
    this.upLineOfBridge += BRIDGE_SHAPE.DELIMITER;
    this.downLineOfBridge += BRIDGE_SHAPE.DELIMITER;
  }

  retry() {
    this.currentStep = 0;
    this.currentProgress = "";
    this.upLineOfBridge = BRIDGE_SHAPE.START;
    this.downLineOfBridge = BRIDGE_SHAPE.START;
    this.try++;
    return this.getNextRead(FLAG.READ_MOVING);
  }

  quit() {
    return this.getPrintResult(FAILURE_WORD);
  }
}

module.exports = BridgeGame;
