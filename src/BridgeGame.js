const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE_SHAPE, VALID_CHAR, SUCCESS_WORD, FAILURE_WORD } = require("./constants");
const InputView = require("./InputView");
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

    this.currentStep++;
    OutputView.printMap(this.upLineOfBridge, this.downLineOfBridge);

    if (!this.state) return InputView.readGameCommand(this);
    if (this.currentStep === this.bridgeSize) return OutputView.printResult(this.upLineOfBridge, this.downLineOfBridge, SUCCESS_WORD, this.try);
    return InputView.readMoving(this);
  }

  canMove(movingStep) {
    return this.correctBridge[this.currentStep] === movingStep;
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
    return InputView.readMoving(this);
  }

  quit() {
    return OutputView.printResult(this.upLineOfBridge, this.downLineOfBridge, FAILURE_WORD, this.try);
  }
}

module.exports = BridgeGame;
