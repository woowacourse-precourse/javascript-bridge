const { readLineAsync } = require('./utils');
const {
  REQUEST_FOR_BRIDGE_LENGTH,
  REQUEST_FOR_MOVING,
  REQUEST_FOR_RETRY,
} = require('./constants/requests');

const InputView = {
  readBridgeSize: () => readLineAsync(REQUEST_FOR_BRIDGE_LENGTH),

  readMoving: () => readLineAsync(REQUEST_FOR_MOVING),

  readGameCommand: () => readLineAsync(REQUEST_FOR_RETRY),
};

module.exports = InputView;
