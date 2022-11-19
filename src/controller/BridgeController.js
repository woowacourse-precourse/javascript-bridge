const BridgeService = require('../service/BridgeService');

const BridgeLengthException = require('./validate/BridgeLengthException');
const BridgeUpDownException = require('./validate/BridgeUpDownException');

const Input = require('./validate/Input');

class BridgeController {
  #service;

  constructor() {
    this.#service = new BridgeService();
  }

  inputBirdgeLength(bridgeLength) {
    this.#service.start(
      Input.getValidate(new BridgeLengthException(bridgeLength))
    );
  }

  inputBridgeUpDown(command) {
    this.#service.recordMove(
      Input.getValidate(new BridgeUpDownException(command))
    );
  }

  inputRestart() {
    this.#service.restart();
  }

  outputmoveMap() {
    return this.#service.getMoveResult();
  }

  outputExit() {
    return {
      map: this.outputmoveMap(),
      ...this.#service.getGameResult()
    };
  }
}

module.exports = BridgeController;
