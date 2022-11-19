const GameProgress = require('../IO/GameProgress');

const BridgeError = {
  throwErrorHandler(errorMessage, possibeError) {
    if (possibeError) {
      GameProgress.printErrorMessage(errorMessage);
      throw new Error();
    }
  },
};

module.exports = BridgeError;
