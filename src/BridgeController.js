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
    InputView.readBridgeSize(this.inputSize.bind(this));
  }

  inputSize(input) {
    Validate.isNumber(input);
    this.#bridge.setBridge();
    this.getMoveInput();
  }

  getMoveInput() {
    InputView.readMoving(this.inputMoveSpace.bind(this));
  }

  inputMoveSpace(input) {
    Validate.isMoveInput(input);
  }
}

module.exports = bridgeController;
