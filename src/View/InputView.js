const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const { Console } = MissionUtils;

const InputView = {
  readBridgeSize(callback) {
    InputView.readUntilValid(MESSAGE.ASK_BRIDGE_SIZE, callback, Validator.bridgeSizeValidate);
  },

  readMoving(callback) {
    InputView.readUntilValid(MESSAGE.ASK_MOVING, callback, Validator.movingValidate);
  },

  readGameCommand(callback) {
    InputView.readUntilValid(MESSAGE.ASK_GAME_COMMAND, callback, Validator.commandValidate);
  },

  readUntilValid(msg, callback, validator) {
    Console.readLine(msg, (input) => {
      try {
        validator(input);
        callback(input);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readUntilValid.bind(null, callback));
      }
    });
  },

  inputErrorHandler(msg, retryFunction) {
    OutputView.print(msg);
    retryFunction();
  },
};

module.exports = InputView;
