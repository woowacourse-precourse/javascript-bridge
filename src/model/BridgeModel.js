const GameModel = require('./GameModel');
const ErrorBoundary = require('../error/ErrorBoundary');
const { SizeValidation } = require('../validate/bridge');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const BridgeModel = class extends GameModel {
  #isSuccess = false;
  #tryCount = 1;
  #position = 0;
  #bridge;

  constructor() {
    super();
    this.errorBoundary = new ErrorBoundary();
  }

  createBridge(bridgeSize) {
    this.validateBridgeSize(bridgeSize);
    this.#bridge = makeBridge(bridgeSize, generate);
  }

  validateUserInput(validateValueCallback) {
    this.errorBoundary.validateInput(validateValueCallback);
  }

  validateBridgeSize(bridgeSize) {
    const onValidateBridgeSize = () => new SizeValidation().validate(bridgeSize);
    this.validateUserInput(onValidateBridgeSize);
  }
};

module.exports = BridgeModel;
