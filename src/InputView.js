const { Console } = require('@woowacourse/mission-utils');
const { ERROR, REQUEST } = require('./constants/Message');
const { LENGTH_MIN, LENGTH_MAX } = require('./constants/Range');

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
      Number(input) < LENGTH_MIN ||
      Number(input) > LENGTH_MAX
    ) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },
};

module.exports = InputView;
