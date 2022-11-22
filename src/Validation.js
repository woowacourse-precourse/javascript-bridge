const {ERROR_MESSAGE} = require('./constant');
const {INCORRECT_GAME_COMMAND_MESSAGE,INCORRECT_MOVING_MESSAGE,INCORRECT_NUMBER_MESSAGE,ONLY_INPUT_INTEGER_MESSAGE,ONLY_INPUT_NUMBER_MESSAGE} = ERROR_MESSAGE;
const Validation = {
    checkBridgeSize(size) {
      if (isNaN(size))
        return { errorMsg: new Error(ONLY_INPUT_NUMBER_MESSAGE) };
      
      if(!(size % 1 === 0)) return {
        errorMsg:new Error(ONLY_INPUT_INTEGER_MESSAGE)
      };
      if (size < 3 || size > 20)
        return {
          errorMsg:new Error(INCORRECT_NUMBER_MESSAGE)
        };
  
      return { errorMsg: undefined };
    },
  
    checkDirection(direction) {
      if (direction === 'U' || direction === 'D') return { errorMsg: undefined };
  
      return { errorMsg: new Error(INCORRECT_MOVING_MESSAGE) };
    },
  
    checkCommandOption(commandOption) {
      if (commandOption === 'R' || commandOption === 'Q') return { errorMsg: undefined };
  
      return { errorMsg: new Error(INCORRECT_GAME_COMMAND_MESSAGE) };
    },
  };
  
  module.exports = Validation;