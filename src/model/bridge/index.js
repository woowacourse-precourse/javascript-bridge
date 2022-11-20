const { Console } = require('@woowacourse/mission-utils');
const GameModel = require('../GameModel');
const ErrorBoundary = require('../../error/ErrorBoundary');
const { SizeValidation, CommandValidation } = require('../../validate/bridge');
const { makeBridge } = require('../../BridgeMaker');
const { generate } = require('../../BridgeRandomNumberGenerator');
const BridgeMap = require('./BridgeMap');

const BridgeModel = class extends GameModel {
  #isSuccess;
  #tryCount = 1;
  #bridge;
  #position = 0;
  #commandList = [];

  constructor() {
    super();
    this.errorBoundary = new ErrorBoundary();
  }

  createBridge(bridgeSize) {
    this.validateBridgeSize(bridgeSize);
    this.#bridge = makeBridge(bridgeSize, generate);
  }

  set addCommandToList(command) {
    this.#commandList.push(command);
    this.#position += 1;
  }

  getMovedResult() {
    const movedResult = new BridgeMap(
      this.#bridge,
      this.#position,
      this.#commandList,
    ).getBridgeMap();

    return movedResult;
  }

  validateUserInput(validateValueCallback) {
    this.errorBoundary.validateInput(validateValueCallback);
  }

  validateBridgeSize(bridgeSize) {
    this.validateUserInput(() => new SizeValidation().validate(bridgeSize));
  }

  validateBridgeCommand(command) {
    this.validateUserInput(() => new CommandValidation().validate(command));
  }
};

module.exports = BridgeModel;
