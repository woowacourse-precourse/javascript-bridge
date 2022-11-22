const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const {
  REQUEST_FOR_BRIDGE_LENGTH,
  REQUEST_FOR_MOVING,
  REQUEST_FOR_RETRY,
} = require('./constants/requests');
const { FINAL_COMMAND_GROUP } = require('./enums');
const { handleInputError } = require('./utils');

const InputView = {
  readBridgeSize(build) {
    Console.readLine(REQUEST_FOR_BRIDGE_LENGTH, (size) => {
      try {
        Validator.validateBridgeSizeInput(size);
        build.call(this, size);
      } catch (e) {
        handleInputError(e.message, InputView.readBridgeSize, build);
      }
    });
  },

  readMoving(move) {
    Console.readLine(REQUEST_FOR_MOVING, (position) => {
      Validator.validateMoveInput(position);
      move.call(this, position);
    });
  },

  readGameCommand(retry, end) {
    Console.readLine(REQUEST_FOR_RETRY, (command) => {
      Validator.validateRetryInput(command);
      return command === FINAL_COMMAND_GROUP.RETRY ? retry.call(this) : end.call(this);
    });
  },
};

module.exports = InputView;
