const { printError } = require('../view/OutputView');

class BridgeError extends Error {
  constructor(message, ...error) {
    super(...error);
    printError(message);
  }
}

module.exports = BridgeError;
