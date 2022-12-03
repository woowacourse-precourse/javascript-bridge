const controller = require('../../controller/BridgeController');

const BridgeLengthException = require('./validate/BridgeLengthException');
const BridgeUpDownException = require('./validate/BridgeUpDownException');
const BridgeRestartExitException = require('./validate/BridgeRestartExitException');

class Input {
  #validate(exceptInstance) {
    exceptInstance.isValidate();

    return this;
  }

  inputBridgeSize(input) {
    this.#validate(new BridgeLengthException(input));

    controller.inputBridgeLength(input);
  }

  inputMoveCommand(input) {
    this.#validate(new BridgeUpDownException(input));

    controller.inputBridgeUpDown(input);
  }

  inputGameCommand(input) {
    this.#validate(new BridgeRestartExitException(input));
  }
}

module.exports = Input;
