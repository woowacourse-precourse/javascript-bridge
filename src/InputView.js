const { Console } = require('@woowacourse/mission-utils');
const { ERROR, REQUEST } = require('./constants/Message');
const { LENGTH_MIN, LENGTH_MAX } = require('./constants/Range');
const { isNumberInRange } = require('./lib/Utils');

const InputView = {
  readBridgeSize() {
    Console.readLine(REQUEST.BRIDGE_LENGTH, (input) => {
      InputView.validateLength(input);
    });
  },

  readMoving() {},

  readGameCommand() {},

  validateLength(input) {
    if (!isNumberInRange(input, LENGTH_MIN, LENGTH_MAX)) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },
};

module.exports = InputView;
