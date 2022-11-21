const { ERROR_MESSAGE } = require('./constants/Messages');

const InputValidation = {
  checkValidBridgeSize(size) {
    const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
    if (!regExp.test(size)) {
      throw new Error(ERROR_MESSAGE.bridge_size);
    }
  },
  checkValidSpace(space) {
    const regExp = /U|D/;
    if (!regExp.test(space)) {
      throw new Error(ERROR_MESSAGE.moving);
    }
  },
  checkValidRetry(input) {
    const regExp = /R|Q/;
    if (!regExp.test(input)) {
      throw new Error(ERROR_MESSAGE.game_command);
    }
  },
};

module.exports = InputValidation;
