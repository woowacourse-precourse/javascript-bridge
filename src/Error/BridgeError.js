const BridgeError = {
  throwErrorHandler(errorMessage, ...possibeErrors) {
    if (possibeErrors.includes(true)) {
      throw new Error(errorMessage);
    }
  },
};

module.exports = BridgeError;
