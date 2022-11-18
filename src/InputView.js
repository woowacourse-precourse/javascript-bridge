const { Console } = require('@woowacourse/mission-utils');
const { ERROR, REQUEST } = require('./constants/Message');

const InputView = {
  readBridgeSize() {
    Console.readLine(REQUEST.BRIDGE_LENGTH, (input) => {
      this.validateLength(input);
    });
  },

  readMoving() {},

  readGameCommand() {},

  validateLength(input) {
    if (
      !/^[0-9]{1,2}$/.test(input) ||
      Number(input) < 3 ||
      Number(input) > 20
    ) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },
};

module.exports = InputView;
