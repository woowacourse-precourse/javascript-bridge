const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const {
  validateBridgeSize,
  validateMovingInput,
  validateContinue,
} = require('../utils/validations');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.SELECT_BRIDGE_SIZE, (userInput) => {
      callback(userInput);
    });
  },

  getBridgeSize(size) {
    return Number(size);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.GUESS, (userInput) => {
      callback(userInput);
    });
  },

  getUserMoving(userInput) {
    return userInput;
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_CONTINUE, (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
