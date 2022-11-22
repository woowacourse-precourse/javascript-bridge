const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

class bridgeController {
  #bridge;
  constructor() {
    this.#bridge = new BridgeGame();
  }

  run() {
    OutputView.printInit();
    this.getSizeInput();
  }

  getSizeInput() {
    InputView.readBridgeSize(this.inputSize.bind(this));
  }

  inputSize(input) {
    try {
      Validate.isNumber(input);
      this.#bridge.setBridge();
      this.getMoveInput();
    } catch (error) {
      OutputView.printError(error);
      this.getSizeInput();
    }
  }

  getMoveInput() {
    InputView.readMoving(this.inputMoveSpace.bind(this));
  }

  inputMoveSpace(input) {
    try {
      Validate.isMoveInput(input);
      this.#bridge.setMoveInput(input);
      OutputView.printMap(this.#bridge.getBridgeMap());
    } catch (error) {
      OutputView.printError(error);
      this.getMoveInput();
    }
  }
}

module.exports = bridgeController;
