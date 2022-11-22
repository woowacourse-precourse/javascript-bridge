const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.SELECT_BRIDGE_SIZE, (userInput) => {
      callback(userInput);
    });
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.GUESS, (userInput) => {
      callback(userInput);
    });
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_CONTINUE, (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
