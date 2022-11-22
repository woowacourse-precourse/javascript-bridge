const { QUESTION_MESSAGE } = require('../constants');
const { Console } = require('@woowacourse/mission-utils');
const ExceptionHandler = require('../utils/ExceptionHandler');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(QUESTION_MESSAGE.BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(QUESTION_MESSAGE.MOVING, callback);
  },

  readGameCommand(callback) {
    Console.readLine(QUESTION_MESSAGE.GAME_COMMAND, callback);
  },

  read(readType, nextCallback) {
    InputView[`read${readType}`]((inputedValue) => {
      const isValidation = ExceptionHandler.tryValidate(inputedValue, readType);
      if (!isValidation) return this.read(readType, nextCallback);

      nextCallback(inputedValue);
    });
  },
};

module.exports = InputView;
