const {
  ERROR_BRIDGE_MESSAGE,
  BRIDGE_RANGE,
  SHORT_CUT,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
} = require('./constants');

const Validations = {
  sizeValdation(bridgeSize) {
    Validations.checkBridgeNumber(bridgeSize);
    Validations.checkBridgeInteger(bridgeSize);
    Validations.checkBridgeRange(bridgeSize);
  },
  checkBridgeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.integer);
    }
  },
  checkBridgeNumber(bridgeSize) {
    if (Number.isNaN(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.number);
    }
  },
  checkBridgeRange(bridgeSize) {
    if (bridgeSize < BRIDGE_RANGE.start || bridgeSize > BRIDGE_RANGE.end) {
      throw new Error(ERROR_BRIDGE_MESSAGE.range);
    }
  },
  moveValidation(shortCut) {
    Validations.checkMoveLowercase(shortCut);
    Validations.checkMoveWrong(shortCut);
  },
  checkMoveLowercase(shortCut) {
    const lowerCaseUp = SHORT_CUT.up.toLowerCase();
    const lowerCaseDown = SHORT_CUT.down.toLowerCase();
    if (shortCut === lowerCaseUp || shortCut === lowerCaseDown) {
      throw new Error(ERROR_PLAYING_MESSAGE.lowercase);
    }
  },
  checkMoveWrong(shortCut) {
    if (shortCut !== SHORT_CUT.up && shortCut !== SHORT_CUT.down) {
      throw new Error(ERROR_PLAYING_MESSAGE.wrong);
    }
  },
  retryValidation(userInput) {
    Validations.checkRetryLowercase(userInput);
    Validations.checkRetryWrong(userInput);
  },

  checkRetryLowercase(userInput) {
    const lowerCaseRetry = SHORT_CUT.retry.toLowerCase();
    const lowerCaseQuit = SHORT_CUT.quit.toLowerCase();
    if (userInput === lowerCaseRetry || userInput === lowerCaseQuit) {
      throw new Error(ERROR_RETRY_MESSAGE.lowercase);
    }
  },
  checkRetryWrong(userInput) {
    if (userInput !== SHORT_CUT.retry && userInput !== SHORT_CUT.quit) {
      throw new Error(ERROR_RETRY_MESSAGE.wrong);
    }
  },
};

module.exports = Validations;
