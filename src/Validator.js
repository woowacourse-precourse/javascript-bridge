const {
  BRIDGE_SIZE, MESSAGE, MOVEMENT, COMMAND,
} = require('./Constants');

const Validator = {

  bridgeSizeValidate(size) {
    const sizeNum = +size;
    const sizeIsInteger = Number.isInteger(sizeNum);
    const sizeIsValid = sizeNum >= BRIDGE_SIZE.LOWER_INCLUSIVE
     && sizeNum <= BRIDGE_SIZE.UPPER_INCLUSIVE;
    if (!sizeIsInteger) throw new Error(MESSAGE.ERROR_NOT_A_NUMBER);
    if (!sizeIsValid) throw new Error(MESSAGE.ERROR_OUT_OF_RANGE);
  },

  movingValidate(movement) {
    const movementIsValid = movement === MOVEMENT.UP || movement === MOVEMENT.DOWN;
    if (!movementIsValid) throw new Error(MESSAGE.ERROR_NOT_U_OR_D);
  },

  commandValidate(command) {
    const commandIsValid = command === COMMAND.RETRY || command === COMMAND.QUIT;
    if (!commandIsValid) throw new Error(MESSAGE.ERROR_NOT_R_OR_Q);
  },
};
module.exports = Validator;
