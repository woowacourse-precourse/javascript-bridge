const { BRIDGE_SIZE, MESSAGE } = require('./Constants');

const Validator = {
  /**
   * 다리 길이의 유효성을 검증
   * @param {string} size input으로 들어온 다리의 길이
   */
  bridgeSizeValidate(size) {
    const sizeNum = +size;
    const sizeIsInteger = Number.isInteger(sizeNum);
    const sizeIsValid = sizeNum >= BRIDGE_SIZE.LOWER_INCLUSIVE
     && sizeNum <= BRIDGE_SIZE.UPPER_INCLUSIVE;
    if (!sizeIsInteger) throw new Error(MESSAGE.ERROR_NOT_A_NUMBER);
    if (!sizeIsValid) throw new Error(MESSAGE.ERROR_OUT_OF_RANGE);
  },

  /**
   * 사용자 이동에 대한 입력값을 검증
   * @param {string} movement input으로 들어온 사용자의 움직임
   */
  movingValidate(movement) {
    const movementIsValid = movement === 'U' || movement === 'D';
    if (!movementIsValid) throw new Error(MESSAGE.ERROR_NOT_U_OR_D);
  },
};
module.exports = Validator;
