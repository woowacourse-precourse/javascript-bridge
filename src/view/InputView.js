const BridgeLengthException = require('./controller/validate/BridgeLengthException');
const BridgeUpDownException = require('./controller/validate/BridgeUpDownException');
const BridgeRestartExitException = require('./controller/validate/BridgeRestartExitException');

const controller = require('./controller/BridgeController');

const InputView = {
  validate(exceptInstance) {
    exceptInstance.isValidate();
  },

  readBridgeSize(input) {
    InputView.validate(new BridgeLengthException(input));

    controller.inputBridgeLength(input);
  },

  readMoving(input) {
    InputView.validate(new BridgeUpDownException(input));

    controller.inputBridgeUpDown(input);
  },

  readGameCommand(input) {
    InputView.validate(new BridgeRestartExitException(input));
  }
};

module.exports = InputView;
