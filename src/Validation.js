const { ErrorMessage } = require("./constant/Constants");
const OutputMessage = require("./OutputView");

Validation = {
  isNumber(size){
    if (isNaN(parseInt(size))){
      OutputMessage.printErrorMessage(ErrorMessage.IS_NOT_NUMBER);
      throw new Error(ErrorMessage.IS_NOT_NUMBER);
    }
  },

  isValidRangeSize(size){
    if (size < ErrorMessage.MINIMUM_SIZE_RANGE && size > ErrorMessage.MAXIMUM_SIZE_RANGE){
      OutputMessage.printErrorMessage(ErrorMessage.BRIDGE_SIZE);
      throw new Error(ErrorMessage.BRIDGE_SIZE);
    }
  },

  isValidDirection(direction){
    if (direction !== "U" && direction !== "D"){
      OutputMessage.printErrorMessage(ErrorMessage.MOVING_DIRECTION);
      throw new Error(ErrorMessage.MOVING_DIRECTION);
    }
  },

  isValidRetryOrQuitInput(retryOrQuit){
    if (retryOrQuit !== "R" && retryOrQuit !== "Q"){
      OutputMessage.printErrorMessage(ErrorMessage.RETRY_OR_QUIT);
      throw new Error(ErrorMessage.RETRY_OR_QUIT);
    }
  },
}

module.exports = Validation;