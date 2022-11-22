const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const { Console } = MissionUtils;

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (input) => {
      try {
        Validator.bridgeSizeValidate(input);
        callback(input);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readBridgeSize.bind(null, callback));
      }
    });
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_MOVING, (input) => {
      try {
        Validator.movingValidate(input);
        callback(input);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readMoving.bind(null, callback));
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_GAME_COMMAND, (input) => {
      try {
        Validator.commandValidate(input);
        callback(input);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readGameCommand.bind(null, callback));
      }
    });
  },

  inputErrorHandler(msg, retryFunction) {
    OutputView.print(msg);
    retryFunction();
  },
};

module.exports = InputView;
