const BridgeError = require('./BridgeError');

const exceptionHandler = (message) => {
  try {
    throw new BridgeError(message);
  } catch (e) {
    return false;
  }
};

module.exports = exceptionHandler;
