const { Console } = require('@woowacourse/mission-utils');

const BridgeLengthException = require('./controller/validate/BridgeLengthException');
const BridgeUpDownException = require('./controller/validate/BridgeUpDownException');
const BridgeRestartExitException = require('./controller/validate/BridgeRestartExitException');

const InputView = {
  isValidate(exceptInstance) {
    return exceptInstance.isValidate();
  },

  readBridgeSize(input) {
    if (!InputView.isValidate(new BridgeLengthException(input))) {
      Console.close();
    }
  },

  readMoving(input) {
    if (!InputView.isValidate(new BridgeUpDownException(input))) {
      Console.close();
    }
  },

  readGameCommand(input) {
    if (!InputView.isValidate(new BridgeRestartExitException(input))) {
      Console.close();
    }
  }
};

module.exports = InputView;
