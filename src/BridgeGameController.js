const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Validate = require("./Validate");
const Constant = require('./Constant');

class BridgeGameController {
  constructor() {
    OutputView.printStart();
    this.bridgeGame = new BridgeGame();
    this.random = BridgeRandomNumberGenerator.generate;
  }

  inputBridgeSize() {
    InputView.readBridgeSize((length) => {
      length = Number(length);
      this.utilizeBridgeLength(length);
    });
  }

  utilizeBridgeLength(length) {
    this.tryCatch(Validate.bridgeSizeValidate, length);
    this.bridgeGame.setBridgeLength(length);
    const bridge = BridgeMaker.makeBridge(length, this.random);
    this.bridgeGame.setBridge(bridge);

    if (length >= Constant.BRIDGE_LENGTH_MIN_RANGE && length <= Constant.BRIDGE_LENGTH_MAX_RANGE) {
      return this.inputMoving();
    }
    return this.inputBridgeSize();
  }

  tryCatch(validate, value) {
    try {
      validate(value);
    } catch (e) {
      OutputView.printError(e);
    }
  }

}

module.exports = BridgeGameController;
