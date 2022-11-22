const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const { Console } = MissionUtils;
const InputView = {

  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (bridgeSize) => {
      try {
        Validator.bridgeSizeValidate(bridgeSize);
        callback(bridgeSize);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readBridgeSize.bind(null, callback));
      }
    });
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_MOVING, (moving) => {
      try {
        Validator.movingValidate(moving);
        callback(moving);
      } catch (error) {
        InputView.inputErrorHandler(error.message, InputView.readMoving.bind(null, callback));
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_GAME_COMMAND, (command) => {
      try {
        Validator.commandValidate(command);
        callback(command);
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
