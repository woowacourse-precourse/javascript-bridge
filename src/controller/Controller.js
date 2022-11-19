const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../model/BridgeRandomNumberGenerator');

class Controller {
  #bridgeWay;
  #userSelect;

  constructor() {
    this.#bridgeWay;
    this.#userSelect;
  }

  start() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    try {
      validator.checkBridgeSizeInput(size);
    } catch {
      this.inputBridgeSize();
    }
    this.#bridgeWay = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.inputBridgeWay();
  }

  inputBridgeWay() {
    InputView.readMoving(this.getBridgeWay.bind(this));
  }

  getUserMoving(select) {
    try {
      validator.checkUserMovingInput(select);
    } catch {
      this.inputBridgeWay();
    }
    this.#userSelect = select;
  }
}

module.exports = Controller;
