const { ErrorMessage } = require("./constant/Constants");

Validation = {
  isValidSize(size){
    if (size < ErrorMessage.MINIMUM_SIZE_RANGE && size > ErrorMessage.MAXIMUM_SIZE_RANGE){
      throw new Error(ErrorMessage.BRIDGE_SIZE);
    }
  },

  isValidDirection(direction){
    if (direction !== "U" && direction !== "D"){
      throw new Error(ErrorMessage.MOVING_DIRECTION);
    }
  },

  isValidRetryOrQuitInput(retryOrQuit){
    if (retryOrQuit !== "R" && retryOrQuit !== "Q"){
      throw new Error(ErrorMessage.RETRY_OR_QUIT);
    }
  },
}

module.exports = Validation;