const { ERROR_TEXT, REGEXP } = require('../const/Error');

const Exception = {
  isInvalidBridgeSize(input) {
    if(this.isNotNumber(input) || this.bridgeSizeOutofIndex(input)) {
      throw ERROR_TEXT.bridgeSize; 
    }
  },

  isNotNumber(input) {
    if(isNaN(input) || input.match(REGEXP.space)) {
      return true;
    }
  },

  bridgeSizeOutofIndex(input) {
    if(Number(input) < 3 || Number(input) > 20) {
      return true;
    }
  },

  isInvalidMoving(input) {
    if(!input.match(REGEXP.moving)) {
      throw ERROR_TEXT.moving;
    }
  },

  isInvalidCommand(input) {
    if(!input.match(REGEXP.retry)) {
      throw ERROR_TEXT.retry;
    }
  }
}

module.exports = Exception;
