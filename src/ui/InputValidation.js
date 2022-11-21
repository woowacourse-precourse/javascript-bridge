const { MOVING_LIST, REPLAY_INPUT_LIST } = require('../constant/constants');
const { ERR_NOT_NUM, ERR_MOVING_INVALID } = require('../constant/Error');

const InputValidation = {
  validateBridgeSize(input) {
    const input_int = parseInt(input);
    if (input_int % 1 !== 0 || isNaN(input)) {
      throw Error(ERR_NOT_NUM);
    }
    if (3 > input_int || input_int > 20) {
      throw Error(ERR_NOT_NUM);
    }
    return input_int;
  },
  validateMoving(input) {
    if (!MOVING_LIST.includes(input)) {
      throw Error(ERR_MOVING_INVALID);
    }
  },
  validateReplay(input){
    if(!REPLAY_INPUT_LIST.includes(input)){
      throw Error('이상하게 입력했어F');
    }
  }
};

module.exports = InputValidation;
