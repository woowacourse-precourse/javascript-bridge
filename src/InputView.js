const { Console } = require('@woowacourse/mission-utils');

const BridgeLengthException = require('./controller/validate/BridgeLengthException');
const BridgeUpDownException = require('./controller/validate/BridgeUpDownException');
const BridgeRestartExitException = require('./controller/validate/BridgeRestartExitException');

const controller = require('./controller/BridgeController');

const InputView = {
  isValidate(exceptInstance) {
    return exceptInstance.isValidate();
  },

  readBridgeSize(input) {
    if (!InputView.isValidate(new BridgeLengthException(input))) {
      Console.close();
    }

    controller.inputBridgeLength(input);
  },

  readMoving(input) {
    if (!InputView.isValidate(new BridgeUpDownException(input))) {
      Console.close();
    }

    controller.inputBridgeUpDown(input);
  },

  readGameCommand(input) {
    if (!InputView.isValidate(new BridgeRestartExitException(input))) {
      Console.close();
    }
  }
};

module.exports = InputView;
